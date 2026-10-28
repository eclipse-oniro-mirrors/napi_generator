#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Compare yellow-highlight (master 检索未命中) in **ArkWeb / web 模块** 台账 xlsx vs 上一批。

黄底列说明见 build_focus_report；全量黄行（含「是否仅检测调用」）见 md_report。
"""

from __future__ import annotations

import argparse
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from pathlib import Path

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}


def col_idx(ref: str) -> int:
    m = re.match(r"([A-Z]+)", ref)
    if not m:
        return 0
    col = 0
    for c in m.group(1):
        col = col * 26 + (ord(c) - 64)
    return col


def read_shared(z: zipfile.ZipFile) -> list[str]:
    if "xl/sharedStrings.xml" not in z.namelist():
        return []
    root = ET.fromstring(z.read("xl/sharedStrings.xml"))
    out: list[str] = []
    for si in root.findall(".//m:si", NS):
        parts = [t.text or "" for t in si.findall(".//m:t", NS)]
        out.append("".join(parts))
    return out


def yellow_style_indices(z: zipfile.ZipFile) -> set[int]:
    styles = ET.fromstring(z.read("xl/styles.xml"))
    fills = styles.findall(".//m:fill", NS)
    yellow_fills: set[int] = set()
    for i, fill in enumerate(fills):
        pf = fill.find("m:patternFill", NS)
        if pf is None:
            continue
        fg = pf.find("m:fgColor", NS)
        if fg is None:
            continue
        rgb = (fg.get("rgb") or "").upper()
        if rgb in ("FFFFFF00", "FFFFEB9C", "FFFFFFCC", "FFFFCC99"):
            yellow_fills.add(i)
        if rgb.startswith("FFFF") and rgb.endswith("00") and rgb != "FFFFFFFF":
            yellow_fills.add(i)
    xfs = styles.findall(".//m:cellXfs/m:xf", NS)
    return {
        i
        for i, xf in enumerate(xfs)
        if int(xf.get("fillId", "0")) in yellow_fills
        and xf.get("applyFill") == "1"
    }


def load_last_sheet_rows(xlsx: Path) -> tuple[dict[int, str], list[dict], set[int]]:
    with zipfile.ZipFile(xlsx) as z:
        shared = read_shared(z)
        yellow_xf = yellow_style_indices(z)
        rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
        rid_map = {rel.get("Id"): rel.get("Target") for rel in rels}
        wb = ET.fromstring(z.read("xl/workbook.xml"))
        sh = wb.findall(".//m:sheets/m:sheet", NS)[-1]
        rid = sh.get(
            "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"
        )
        target = rid_map[rid].lstrip("/")
        if not target.startswith("xl/"):
            target = "xl/" + target
        sheet = ET.fromstring(z.read(target))
        rows_el = sheet.findall(".//m:sheetData/m:row", NS)

    def cell_val(c, shared: list[str]) -> str:
        t = c.get("t")
        if t == "inlineStr":
            return "".join(x.text or "" for x in c.findall(".//m:t", NS))
        v = c.find("m:v", NS)
        if v is None or v.text is None:
            return ""
        return shared[int(v.text)] if t == "s" else v.text

    parsed: list[dict] = []
    header: dict[int, str] = {}
    for ri, row in enumerate(rows_el):
        cells: dict[int, str] = {}
        styles: dict[int, int] = {}
        for c in row.findall("m:c", NS):
            ref = c.get("r", "")
            ci = col_idx(ref)
            cells[ci] = cell_val(c, shared)
            if c.get("s") is not None:
                styles[ci] = int(c.get("s"))
        if ri == 0:
            header = {k: v.strip() for k, v in cells.items() if v}
            continue
        row_yellow_cols = {ci for ci, sx in styles.items() if sx in yellow_xf}
        parsed.append({"cells": cells, "yellow_cols": row_yellow_cols})

    return header, parsed, yellow_xf



@dataclass
class ApiRow:
    api_id: str
    label: str
    kit: str
    row: dict[str, str]



def header_index(header: dict[int, str]) -> dict[str, int]:
    out: dict[str, int] = {}
    for idx in sorted(header):
        name = header[idx]
        if name and name not in out:
            out[name] = idx
    return out


def row_to_api(kind: str, cells: dict[int, str], inv: dict[str, int]) -> ApiRow:
    kit = (cells.get(inv["kit"], "") or "").strip()
    if kind == "static":
        mod = (cells.get(inv.get("模块名", 1), "") or "").strip()
        clazz = (cells.get(inv.get("类名", 3), "") or "").strip()
        method = (cells.get(inv.get("方法名", 4), "") or "").strip()
    else:
        mod = (cells.get(inv.get("模块名", 1), "") or "").strip()
        clazz = (cells.get(inv.get("类名", 2), "") or "").strip()
        method = (cells.get(inv.get("方法名", 3), "") or "").strip()
    if method.startswith("OH_"):
        api_id = method
    elif clazz and method and len(method) <= 64 and "(" not in method[:20]:
        api_id = f"{clazz}|{method}"
    else:
        api_id = f"{mod}|{clazz}|{method}"
    label = f"{clazz}.{method}" if clazz and method else (method or api_id)
    row = {k: (cells.get(inv[k], "") or "") for k in inv if k in inv}
    return ApiRow(api_id=api_id, label=label, kit=kit, row=row)


def extract_yellow_arkweb(xlsx: Path, kind: str) -> list[ApiRow]:
    header, parsed, _ = load_last_sheet_rows(xlsx)
    inv = header_index(header)
    out: list[ApiRow] = []
    for item in parsed:
        cells = item["cells"]
        if (cells.get(inv["kit"], "") or "").strip().lower() != "arkweb":
            continue
        if not item["yellow_cols"]:
            continue
        out.append(row_to_api(kind, cells, inv))
    return out


def all_arkweb_keys(xlsx: Path, kind: str) -> set[str]:
    header, parsed, _ = load_last_sheet_rows(xlsx)
    inv = header_index(header)
    keys: set[str] = set()
    for item in parsed:
        cells = item["cells"]
        if (cells.get(inv["kit"], "") or "").strip().lower() != "arkweb":
            continue
        keys.add(row_to_api(kind, cells, inv).api_id)
    return keys


SKIP_YELLOW_COL = "是否仅检测调用"

LEDGER_KINDS = (
    ("dynamic", "arkts_dynamic_sdk_result"),
    ("static", "arkts_static_sdk_result"),
)


def yellow_unsat_rows(xlsx: Path, kind: str) -> dict[str, ApiRow]:
    """ArkWeb + 已满足=否 + 黄底（排除「是否仅检测调用」）。"""
    header, parsed, _ = load_last_sheet_rows(xlsx)
    inv = header_index(header)
    kit_c = inv["kit"]
    sat_c = inv["接口覆盖是否已满足"]
    out: dict[str, ApiRow] = {}
    for item in parsed:
        cells = item["cells"]
        if (cells.get(kit_c, "") or "").strip().lower() != "arkweb":
            continue
        if (cells.get(sat_c, "") or "").strip() != "否":
            continue
        ynames = {header.get(c, str(c)) for c in item["yellow_cols"]}
        ynames.discard(SKIP_YELLOW_COL)
        if not ynames:
            continue
        a = row_to_api(kind, cells, inv)
        out[a.api_id] = a
    return out


def identity_row_yellow(xlsx: Path, kind: str) -> dict[str, str]:
    header, parsed, _ = load_last_sheet_rows(xlsx)
    inv = header_index(header)
    kit_c = inv["kit"]
    id_cols = {inv.get("模块名"), inv.get("类名"), inv.get("方法名")} - {None}
    out: dict[str, str] = {}
    for item in parsed:
        cells = item["cells"]
        if (cells.get(kit_c, "") or "").strip().lower() != "arkweb":
            continue
        if not (item["yellow_cols"] & id_cols):
            continue
        a = row_to_api(kind, cells, inv)
        out[a.api_id] = a.label
    return out


def _focus_kind_section(
    kind: str,
    prefix: str,
    new_d: Path,
    old_d: Path,
    new_label: str,
    old_label: str,
) -> list[str]:
    from compare_arkweb_batches import filter_batch, find_xlsx

    new_x = find_xlsx(new_d, prefix)
    old_x = find_xlsx(old_d, prefix)
    u_old = {a.api_id: a.label for a in filter_batch(old_x, kind)}
    y_new = yellow_unsat_rows(new_x, kind)
    id_y = identity_row_yellow(new_x, kind)
    overlap = {k: y_new[k] for k in y_new if k in u_old}
    new_only = {k: y_new[k] for k in y_new if k not in u_old}
    old_not_y = {k: u_old[k] for k in u_old if k not in y_new}
    lines = [
        f"## {kind}",
        "",
        "| 指标 | 条数 |",
        "|------|------|",
        f"| {old_label} 待补 | {len(u_old)} |",
        f"| {new_label} 黄底+未满足 | {len(y_new)} |",
        f"| 两批均有（旧待补且新仍黄+未满足） | {len(overlap)} |",
        f"| {new_label} 有、{old_label} 无 | {len(new_only)} |",
        f"| {old_label} 待补、不在新「黄+未满足」 | {len(old_not_y)} |",
        f"| {new_label} 整行标识列黄（master 未匹配） | {len(id_y)} |",
        "",
    ]
    if new_only:
        lines.append(f"### {new_label} 新增（{len(new_only)}）\n")
        for k in sorted(new_only):
            lines.append(f"- {new_only[k].label} `{k}`")
        lines.append("")
    if overlap and len(overlap) <= 40:
        lines.append(f"### 两批重叠仍黄+未满足（{len(overlap)}）\n")
        for k in sorted(overlap):
            lines.append(f"- {overlap[k].label} `{k}`")
        lines.append("")
    return lines


def build_focus_report(
    oh_root: Path,
    new_dir: str,
    old_dir: str,
    new_label: str | None = None,
    old_label: str | None = None,
) -> str:
    new_label = new_label or new_dir.replace("arkwebxts", "").replace("xts", "") or new_dir
    old_label = old_label or old_dir.replace("arkwebxts", "").replace("xts", "") or old_dir
    new_d = oh_root / new_dir
    old_d = oh_root / old_dir
    lines = [
        f"# {new_label} web 台账黄底 vs {old_label}（ArkWeb 聚焦）",
        "",
        f"- 新批：`{new_dir}/`（`arkts_dynamic_sdk_result*.xlsx`、`arkts_static_sdk_result*.xlsx`）",
        f"- 旧批：`{old_dir}/`",
        "",
        "**黄底**：styles 中 `FFFFFF00` / `FFEB9C` 等。",
        f"**勿误读**：列 **「{SKIP_YELLOW_COL}」** 常整列黄，不等于 XTS 未找到。",
        "**本报告口径**：`kit=ArkWeb` + `接口覆盖是否已满足=否` + 除上述列外仍有黄底；",
        f"并与 **{old_label}** 待补集合（`是否覆盖≠1` 且 已满足=否）对比。",
        "",
        "---",
        "",
    ]
    for kind, prefix in LEDGER_KINDS:
        lines.extend(
            _focus_kind_section(kind, prefix, new_d, old_d, new_label, old_label)
        )
    return "\n".join(lines)


def _yellow_api_table(
    lines: list[str], title: str, items: list[ApiRow], new_label: str, limit: int = 300
) -> None:
    lines.append(f"### {title}（{len(items)}）\n")
    if not items:
        lines.append("_无_\n")
        return
    lines.append(f"| 接口 | api_id | {new_label} 是否覆盖 | {new_label} 已满足 |")
    lines.append("|------|--------|-----------------|-------------|")
    for a in items[:limit]:
        cov = a.row.get("是否覆盖", a.row.get("接口覆盖", ""))
        sat = a.row.get("接口覆盖是否已满足", "")
        lines.append(f"| {a.label} | `{a.api_id}` | {cov} | {sat} |")
    if len(items) > limit:
        lines.append(f"\n> 仅展示前 {limit} 条。\n")
    lines.append("")


def md_report(
    yellow_1028: list[ApiRow],
    keys_1015: set[str],
    keys_1028: set[str],
    kind: str,
    file_1028: str,
    file_1015: str,
    new_label: str = "新批",
    old_label: str = "旧批",
) -> str:
    lines = [
        f"## {kind}（1028 黄底 = 未找到）",
        "",
        f"- {new_label}：`{file_1028}`",
        f"- 对比 {old_label}：`{file_1015}`",
        f"- ArkWeb 黄底行：**{len(yellow_1028)}**",
        "",
    ]
    in_1015 = []
    only_1028 = []
    for a in yellow_1028:
        if a.api_id in keys_1015:
            in_1015.append(a)
        else:
            only_1028.append(a)

    lines += [
        "### 汇总",
        "",
        f"| 类别 | 条数 |",
        f"|------|------|",
        f"| {new_label} 黄底合计 | {len(yellow_1028)} |",
        f"| 其中 **{old_label} 台账里也有同 api** | {len(in_1015)} |",
        f"| **{old_label} 无此 api（{new_label} 新增行）** | {len(only_1028)} |",
        "",
    ]

    _yellow_api_table(
        lines, f"{old_label} 已包含（{new_label} 仍黄底未找到）", in_1015, new_label
    )
    _yellow_api_table(
        lines, f"{old_label} 无（{new_label} 新出现且黄底）", only_1028, new_label
    )
    return "\n".join(lines)


def _write_full_yellow_md(args: argparse.Namespace, root: Path) -> Path:
    new_d = root / args.new_dir
    old_d = root / args.old_dir
    new_label = args.new_label or args.new_dir
    old_label = args.old_label or args.old_dir
    sections = [
        f"# {new_label} web 台账黄底 vs {old_label}（全量黄行）",
        "",
        "仅 **kit=ArkWeb** 且该行至少一列黄底（含「是否仅检测调用」）。详见 --focus-out。",
        "",
        "---",
        "",
    ]
    for kind, prefix in LEDGER_KINDS:
        new_x = sorted(new_d.glob(f"{prefix}*.xlsx"))[-1]
        old_x = sorted(old_d.glob(f"{prefix}*.xlsx"))[-1]
        sections.append(
            md_report(
                extract_yellow_arkweb(new_x, kind),
                all_arkweb_keys(old_x, kind),
                all_arkweb_keys(new_x, kind),
                kind,
                f"{args.new_dir}/{new_x.name}",
                f"{args.old_dir}/{old_x.name}",
                new_label,
                old_label,
            )
        )
    out = args.md_out or (root / f"arkweb_{new_label}_yellow_vs_{old_label}.md")
    out.write_text("\n".join(sections), encoding="utf-8")
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--oh-root", type=Path, default=Path("/mnt/vdb/ohos/master"))
    ap.add_argument("--new-dir", default="20261028arkwebxts")
    ap.add_argument("--old-dir", default="20261015arkwebxts")
    ap.add_argument("--new-label", default=None)
    ap.add_argument("--old-label", default=None)
    ap.add_argument("--md-out", type=Path, default=None)
    ap.add_argument("--focus-out", type=Path, default=None)
    args = ap.parse_args()
    root = args.oh_root.resolve()
    new_label = args.new_label or args.new_dir
    old_label = args.old_label or args.old_dir
    focus = build_focus_report(
        root, args.new_dir, args.old_dir, new_label, old_label
    )
    focus_out = args.focus_out or (
        root / f"arkweb_{new_label}_yellow_vs_{old_label}_focus.md"
    )
    focus_out.write_text(focus, encoding="utf-8")
    print(f"Wrote {focus_out}")
    out = _write_full_yellow_md(args, root)
    print(f"Wrote {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
