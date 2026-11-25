#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ohexcel - OCR table images in a folder and export to Excel.

Subcommands:
  img-to-excel   Scan *.jpg/*.png in a directory, recognize admission-style tables,
                 detect row background color (green=985, blue=211), write one .xlsx.

Default image dir: <skill>/img/
Default output:    <skill>/output/admission_<timestamp>.xlsx

Usage (repo root):
  python src/skills/ohexcel/ohexcel.py img-to-excel
  python src/skills/ohexcel/ohexcel.py img-to-excel --img-dir src/skills/ohexcel/img --out out.xlsx
"""

from __future__ import annotations

import argparse
import re
import sys
from datetime import datetime
from pathlib import Path

import cv2
import numpy as np
from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from rapidocr_onnxruntime import RapidOCR

SKILL_DIR = Path(__file__).resolve().parent
DEFAULT_IMG_DIR = SKILL_DIR / "img"
DEFAULT_OUT_DIR = SKILL_DIR / "output"

HEADERS = [
    "序号",
    "院校名称",
    "投档最低分",
    "最低投档排名",
    "院校层次",
    "是否985",
    "是否211",
]

# Column x-ranges (pixels) for typical Xiaohongshu admission ranking screenshots
COL_RANGES = [
    (0, 180),      # 序号
    (180, 620),    # 院校名称
    (620, 880),    # 投档最低分
    (880, 99999),  # 最低投档排名
]

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".bmp"}


def _skill_base(explicit: Path | None) -> Path:
    if explicit is not None:
        return explicit.expanduser().resolve()
    return SKILL_DIR


def _read_image_bgr(path: Path) -> np.ndarray:
    data = np.fromfile(str(path), dtype=np.uint8)
    img = cv2.imdecode(data, cv2.IMREAD_COLOR)
    if img is None:
        raise RuntimeError(f"Cannot read image: {path}")
    return img


def _col_index(x: float) -> int | None:
    for i, (lo, hi) in enumerate(COL_RANGES):
        if lo <= x < hi:
            return i
    return None


def _classify_row_color(img: np.ndarray, y: float) -> str:
    """Return 985 / 211 / 双一流 / 其他 from row background HSV."""
    yi = int(y)
    h, w = img.shape[:2]
    y0 = max(0, yi - 3)
    y1 = min(h, yi + 5)
    x0, x1 = 80, min(w, 320)
    patch = img[y0:y1, x0:x1]
    if patch.size == 0:
        return "其他"
    hsv = cv2.cvtColor(patch, cv2.COLOR_BGR2HSV).mean(axis=(0, 1))
    hue, sat = float(hsv[0]), float(hsv[1])
    if sat < 12:
        return "其他"
    if 85 <= hue <= 115:
        return "211"
    if 40 <= hue <= 70:
        return "985"
    if hue < 35 and sat >= 35:
        return "双一流"
    return "其他"


def _ocr_cells(path: Path, engine: RapidOCR) -> list[tuple[float, float, str]]:
    result, _ = engine(str(path))
    if not result:
        return []
    cells: list[tuple[float, float, str]] = []
    for box, text, _ in result:
        text = text.strip()
        if not text:
            continue
        y = (box[0][1] + box[2][1]) / 2
        x = (box[0][0] + box[2][0]) / 2
        cells.append((y, x, text))
    cells.sort(key=lambda c: (c[0], c[1]))
    return cells


def _group_rows(cells: list[tuple[float, float, str]]) -> list[tuple[float, list[tuple[float, str]]]]:
    """Group OCR cells into table rows; return (center_y, [(x, text), ...])."""
    rows_raw: list[tuple[float, list[tuple[float, str]]]] = []
    current_y: float | None = None
    current: list[tuple[float, str]] = []
    for y, x, text in cells:
        if current_y is None or abs(y - current_y) <= 20:
            current.append((x, text))
            current_y = y if current_y is None else (current_y + y) / 2
        else:
            if current:
                rows_raw.append((current_y, current))
            current = [(x, text)]
            current_y = y
    if current and current_y is not None:
        rows_raw.append((current_y, current))
    return rows_raw


def _parse_table_rows(img: np.ndarray, cells: list[tuple[float, float, str]]) -> list[dict]:
    rows: list[dict] = []
    for row_y, row_cells in _group_rows(cells):
        cols = ["", "", "", ""]
        for x, text in row_cells:
            idx = _col_index(x)
            if idx is None:
                continue
            cols[idx] = (cols[idx] + text) if cols[idx] else text

        joined = "".join(cols)
        if any(k in joined for k in ("院校名称", "投档最低", "最低投档", "序号")):
            continue

        school = cols[1].strip()
        if len(school) < 2 or school.isdigit():
            continue

        score = re.sub(r"\D", "", cols[2])
        rank = cols[3].strip().replace(" ", "")
        serial = re.sub(r"\D", "", cols[0])

        if not score and not rank:
            continue

        level = _classify_row_color(img, row_y)
        rows.append(
            {
                "序号": serial,
                "院校名称": school,
                "投档最低分": score,
                "最低投档排名": rank,
                "院校层次": level,
                "是否985": "是" if level == "985" else "否",
                "是否211": "是" if level in ("985", "211") else "否",
            }
        )
    return rows


def _natural_sort_key(path: Path) -> tuple:
    m = re.search(r"_(\d+)_", path.name)
    return (m.group(1).zfill(6) if m else path.name, path.name)


def _merge_rows(all_rows: list[dict]) -> list[dict]:
    """Dedupe by 序号+院校名称; prefer row with more fields."""
    seen: dict[tuple, dict] = {}
    for row in all_rows:
        key = (row.get("序号") or "", row["院校名称"])
        if key not in seen or len(row["投档最低分"]) > len(seen[key]["投档最低分"]):
            seen[key] = row
    merged = list(seen.values())

    def sort_key(r: dict):
        s = r.get("序号") or "9999"
        try:
            return int(s)
        except ValueError:
            return 99999

    merged.sort(key=sort_key)
    return merged


def _write_excel(rows: list[dict], out_path: Path, title: str) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    wb = Workbook()
    ws = wb.active
    ws.title = "录取分数"

    ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=len(HEADERS))
    tcell = ws.cell(row=1, column=1, value=title)
    tcell.font = Font(bold=True, size=14)
    tcell.alignment = Alignment(horizontal="center", vertical="center")

    thin = Side(style="thin")
    border = Border(left=thin, right=thin, top=thin, bottom=thin)
    center = Alignment(horizontal="center", vertical="center", wrap_text=True)
    left = Alignment(horizontal="left", vertical="center", wrap_text=True)

    fill_985 = PatternFill("solid", fgColor="C6EFCE")
    fill_211 = PatternFill("solid", fgColor="BDD7EE")
    fill_dfc = PatternFill("solid", fgColor="FFEB9C")

    for c, h in enumerate(HEADERS, 1):
        cell = ws.cell(row=2, column=c, value=h)
        cell.font = Font(bold=True)
        cell.alignment = center
        cell.border = border

    for r_idx, row in enumerate(rows, start=3):
        values = [row.get(h, "") for h in HEADERS]
        level = row.get("院校层次", "")
        row_fill = None
        if level == "985":
            row_fill = fill_985
        elif level == "211":
            row_fill = fill_211
        elif level == "双一流":
            row_fill = fill_dfc

        for c_idx, val in enumerate(values, start=1):
            cell = ws.cell(row=r_idx, column=c_idx, value=val)
            cell.border = border
            cell.alignment = left if c_idx == 2 else center
            if row_fill is not None:
                cell.fill = row_fill

    widths = [8, 32, 12, 16, 10, 8, 8]
    for i, w in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = w
    ws.row_dimensions[1].height = 28
    wb.save(out_path)


def cmd_img_to_excel(args: argparse.Namespace) -> int:
    img_dir = Path(args.img_dir).expanduser().resolve()
    if not img_dir.is_dir():
        print(f"ERROR: image directory not found: {img_dir}", file=sys.stderr)
        return 1

    images = sorted(
        [p for p in img_dir.iterdir() if p.suffix.lower() in IMAGE_EXTS],
        key=_natural_sort_key,
    )
    if not images:
        print(f"ERROR: no images in {img_dir}", file=sys.stderr)
        return 1

    if args.out:
        out_path = Path(args.out).expanduser().resolve()
    else:
        DEFAULT_OUT_DIR.mkdir(parents=True, exist_ok=True)
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        out_path = DEFAULT_OUT_DIR / f"admission_{ts}.xlsx"

    engine = RapidOCR()
    all_rows: list[dict] = []

    for img_path in images:
        print(f"OCR: {img_path.name}")
        bgr = _read_image_bgr(img_path)
        cells = _ocr_cells(img_path, engine)
        rows = _parse_table_rows(bgr, cells)
        print(f"  -> {len(rows)} rows")
        all_rows.extend(rows)

    merged = _merge_rows(all_rows)
    if not merged:
        print("ERROR: no table rows recognized", file=sys.stderr)
        return 1

    title = args.title or "高考院校录取分数（图片识别）"
    _write_excel(merged, out_path, title)
    print(f"Saved {len(merged)} rows -> {out_path}")
    return 0


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="ohexcel - image table to Excel")
    sub = p.add_subparsers(dest="command", required=True)

    ie = sub.add_parser("img-to-excel", help="OCR images in folder and export Excel")
    ie.add_argument(
        "--img-dir",
        default=str(DEFAULT_IMG_DIR),
        help=f"Folder with table images (default: {DEFAULT_IMG_DIR})",
    )
    ie.add_argument("--out", help="Output .xlsx path")
    ie.add_argument("--title", help="Excel title row text")
    ie.set_defaults(func=cmd_img_to_excel)
    return p


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
