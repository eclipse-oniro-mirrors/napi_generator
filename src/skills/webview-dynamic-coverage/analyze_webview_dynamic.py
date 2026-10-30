#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Parse webview-dynamic.xlsx and list ACTS coverage gaps (D column red + I–N)."""

from __future__ import annotations

import argparse
import json
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}

# I–N: 接口 / 调用 / 入参 / 参数规格 / 返回值 / 错误码
DIMENSIONS = (
    (9, "I", "接口覆盖"),
    (10, "J", "调用覆盖"),
    (11, "K", "入参覆盖"),
    (12, "L", "参数规格覆盖"),
    (13, "M", "返回值覆盖"),
    (14, "N", "错误码覆盖"),
)

SKIP_VALUES = frozenset(
    {
        "已覆盖",
        "工具检测已覆盖",
        "澄清无法覆盖",
        "不涉及",
    }
)


def col_idx(ref: str) -> int:
    m = re.match(r"([A-Z]+)", ref)
    if not m:
        return 0
    col = 0
    for c in m.group(1):
        col = col * 26 + (ord(c) - 64)
    return col


def cell_needs_coverage(value: str) -> bool:
    v = (value or "").strip()
    if v in SKIP_VALUES:
        return False
    return v == "否" or v == ""


def load_sheet(xlsx: Path):
    with zipfile.ZipFile(xlsx) as z:
        shared: list[str] = []
        if "xl/sharedStrings.xml" in z.namelist():
            root = ET.fromstring(z.read("xl/sharedStrings.xml"))
            for si in root.findall(".//m:si", NS):
                parts = [t.text or "" for t in si.findall(".//m:t", NS)]
                shared.append("".join(parts))

        styles_xml = z.read("xl/styles.xml").decode("utf-8", errors="replace")
        fonts = re.findall(r"<font[^>]*>.*?</font>", styles_xml, re.S)
        red_font_ids = {
            i
            for i, f in enumerate(fonts)
            if "FFFF0000" in f or 'rgb="FFFF0000"' in f
        }
        xfs = re.findall(r"<xf ([^/>]+)/>", styles_xml)
        cell_font = [
            int(re.search(r'fontId="(\d+)"', xf).group(1)) for xf in xfs
        ]

        sheet = ET.fromstring(z.read("xl/worksheets/sheet1.xml"))
        rows = sheet.findall(".//m:sheetData/m:row", NS)

    return shared, rows, red_font_ids, cell_font


def row_in_scope(cells, is_red_font: bool, scope: str) -> bool:
    cat = (cells.get(4, "") or "").strip()
    if scope == "user37":
        # Excel 人工筛选：D=云服务/OH，且为 BlankScreen/Scheme/Monitor 等块（非 constructor 红字 30 条）
        if cat not in ("云服务", "OH"):
            return False
        return not is_red_font
    if scope == "red30":
        return is_red_font
    if scope == "all":
        return bool(cells.get(2))
    # legacy default
    return is_red_font


def parse_rows(shared, rows, red_font_ids, cell_font, scope: str = "user37"):
    tasks = []
    skipped_non_red = 0

    for row in rows[1:]:
        cells: dict[int, str] = {}
        styles: dict[int, int] = {}
        for c in row.findall("m:c", NS):
            ref = c.get("r", "")
            t = c.get("t")
            v_el = c.find("m:v", NS)
            val = ""
            if v_el is not None and v_el.text is not None:
                val = shared[int(v_el.text)] if t == "s" else v_el.text
            cells[col_idx(ref)] = val
            if c.get("s"):
                styles[col_idx(ref)] = int(c.get("s"))

        style_d = styles.get(4)
        is_red = (
            style_d is not None
            and style_d < len(cell_font)
            and cell_font[style_d] in red_font_ids
        )
        if not row_in_scope(cells, is_red, scope):
            skipped_non_red += 1
            continue

        api_class = cells.get(2, "")
        api_method = cells.get(3, "")
        api = f"{api_class}.{api_method}" if api_method else api_class

        for col, col_letter, dim_name in DIMENSIONS:
            raw = cells.get(col, "")
            if not cell_needs_coverage(raw):
                continue
            tasks.append(
                {
                    "row": int(row.get("r", 0)),
                    "category_d": cells.get(4, ""),
                    "module": cells.get(1, ""),
                    "class": api_class,
                    "method": api_method,
                    "api": api,
                    "signature": cells.get(5, ""),
                    "dimension": col_letter,
                    "dimension_name": dim_name,
                    "cell_value": raw.strip() or "(空)",
                    "coverage_point_id": f"{api}#{col_letter}",
                }
            )

    return tasks, skipped_non_red


def markdown_report(tasks: list[dict], xlsx: Path) -> str:
    lines = [
        f"# webview-dynamic 覆盖缺口分析",
        "",
        f"来源: `{xlsx}`",
        "",
        f"- **I–N 为「否」或空** 的覆盖点: **{len(tasks)}**",
        f"- **API 数（红字行）**: **{len({t['api'] for t in tasks})}**",
        "",
        "## 待补充覆盖点清单",
        "",
        "| 行 | D分类 | API | 维度 | 单元格 | 覆盖点 ID |",
        "|---:|---|---|---|---|---|",
    ]
    for t in tasks:
        sig = (t["signature"] or "").replace("|", "\\|")[:60]
        lines.append(
            f"| {t['row']} | {t['category_d']} | `{t['api']}` | {t['dimension']} {t['dimension_name']} | {t['cell_value']} | `{t['coverage_point_id']}` |"
        )
    lines.extend(
        [
            "",
            "## 交付表格模板（补测完成后填写）",
            "",
            "| 覆盖点 ID | 测试内容（维度说明） | 用例名 `it(...)` | 文件 | 页面/代码覆盖说明 | 状态 |",
            "|---|---|---|---|---|---|",
        ]
    )
    for t in tasks:
        lines.append(
            f"| `{t['coverage_point_id']}` | {t['dimension_name']}（{t['cell_value']}） | _待写_ | _待写_ | {sig} | 待补充 |"
        )
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "xlsx",
        nargs="?",
        default="webview-dynamic.xlsx",
        help="Path to webview-dynamic.xlsx (default: cwd/webview-dynamic.xlsx)",
    )
    parser.add_argument(
        "--json",
        type=Path,
        help="Write task list JSON to this path",
    )
    parser.add_argument(
        "--md",
        type=Path,
        help="Write markdown report to this path",
    )
    parser.add_argument(
        "--scope",
        choices=("user37", "red30", "all"),
        default="user37",
        help="user37=默认 37 条(云服务/OH 监控与白屏块); red30=D 字体红 constructor 等; all=全表",
    )
    args = parser.parse_args()

    xlsx = Path(args.xlsx).resolve()
    if not xlsx.is_file():
        print(f"文件不存在: {xlsx}", file=sys.stderr)
        return 1

    shared, rows, red_font_ids, cell_font = load_sheet(xlsx)
    tasks, _ = parse_rows(shared, rows, red_font_ids, cell_font, scope=args.scope)

    summary = {
        "xlsx": str(xlsx),
        "coverage_tasks": len(tasks),
        "apis": sorted({t["api"] for t in tasks}),
        "tasks": tasks,
    }

    if args.json:
        args.json.write_text(
            json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        print(f"Wrote JSON: {args.json}")

    report = markdown_report(tasks, xlsx)
    if args.md:
        args.md.write_text(report, encoding="utf-8")
        print(f"Wrote Markdown: {args.md}")
    else:
        print(report)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
