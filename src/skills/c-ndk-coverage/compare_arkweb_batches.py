#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
三批次 ArkWeb 台账（c_ndk / arkts_dynamic / arkts_static）末 sheet 筛选与接口去重对比。

筛选：KIT/kit = ArkWeb；接口未覆盖 + 接口覆盖是否已满足 = 否
  - c_ndk：接口覆盖 = 0
  - dynamic/static：是否覆盖 ≠ 1（多为空）
"""

from __future__ import annotations

import argparse
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}

DEFAULT_BATCH_DIRS = (
    ("20261015", "20261015arkwebxts"),
    ("20261022", "20261022arkwebxts"),
    ("20261026", "20261026arkwebxts"),
)

SKIP_YELLOW_COL = "是否仅检测调用"

KIND_FILES = (
    ("cndk", "c_ndk_result"),
    ("dynamic", "arkts_dynamic_sdk_result"),
    ("static", "arkts_static_sdk_result"),
)


def col_idx(ref: str) -> int:
    m = re.match(r"([A-Z]+)", ref)
    if not m:
        return 0
    col = 0
    for c in m.group(1):
        col = col * 26 + (ord(c) - 64)
    return col


def read_row(row, shared: list[str]) -> dict[int, str]:
    cells: dict[int, str] = {}
    for c in row.findall("m:c", NS):
        ref = c.get("r", "")
        t = c.get("t")
        if t == "inlineStr":
            val = "".join(x.text or "" for x in c.findall(".//m:t", NS))
        else:
            v_el = c.find("m:v", NS)
            val = ""
            if v_el is not None and v_el.text is not None:
                val = shared[int(v_el.text)] if t == "s" else v_el.text
        cells[col_idx(ref)] = val
    return cells


def header_index(header: dict[int, str]) -> dict[str, int]:
    """表头名 -> 列号（同名取最左列）。"""
    out: dict[str, int] = {}
    for idx in sorted(header):
        name = (header[idx] or "").strip()
        if name and name not in out:
            out[name] = idx
    return out


@dataclass
class SheetCols:
    kit: int
    iface_cov: int
    iface_satisfied: int


def resolve_cols(kind: str, header: dict[int, str]) -> SheetCols:
    idx = header_index(header)
    if kind == "cndk":
        return SheetCols(
            kit=idx["KIT"],
            iface_cov=idx["接口覆盖"],
            iface_satisfied=idx["接口覆盖是否已满足"],
        )
    return SheetCols(
        kit=idx["kit"],
        iface_cov=idx["是否覆盖"],
        iface_satisfied=idx["接口覆盖是否已满足"],
    )


def load_last_sheet(xlsx: Path) -> tuple[dict[int, str], dict[str, int], list[dict[int, str]]]:
    with zipfile.ZipFile(xlsx) as z:
        shared: list[str] = []
        if "xl/sharedStrings.xml" in z.namelist():
            root = ET.fromstring(z.read("xl/sharedStrings.xml"))
            for si in root.findall(".//m:si", NS):
                parts = [t.text or "" for t in si.findall(".//m:t", NS)]
                shared.append("".join(parts))
        rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
        rid_map = {rel.get("Id"): rel.get("Target") for rel in rels}
        wb = ET.fromstring(z.read("xl/workbook.xml"))
        sheets = wb.findall(".//m:sheets/m:sheet", NS)
        sh = sheets[-1]
        sheet_name = sh.get("name") or ""
        rid = sh.get(
            "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"
        )
        target = rid_map[rid].lstrip("/")
        if not target.startswith("xl/"):
            target = "xl/" + target
        sheet = ET.fromstring(z.read(target))
        rows = sheet.findall(".//m:sheetData/m:row", NS)
    if not rows:
        raise ValueError(f"{xlsx}: empty sheet {sheet_name}")
    header = read_row(rows[0], shared)
    inv = {v: k for k, v in header.items()}
    data = [read_row(r, shared) for r in rows[1:]]
    return header, inv, data


def find_xlsx(batch_dir: Path, prefix: str) -> Path:
    matches = sorted(batch_dir.glob(f"{prefix}*.xlsx"))
    if not matches:
        raise FileNotFoundError(f"{batch_dir}: no {prefix}*.xlsx")
    return matches[-1]


def find_xlsx_optional(batch_dir: Path, prefix: str) -> Path | None:
    matches = sorted(batch_dir.glob(f"{prefix}*.xlsx"))
    return matches[-1] if matches else None


def is_arkweb(kit_val: str) -> bool:
    return (kit_val or "").strip().lower() == "arkweb"


def iface_not_covered(kind: str, cells: dict[int, str], cols: SheetCols) -> bool:
    cov = (cells.get(cols.iface_cov, "") or "").strip()
    if kind == "cndk":
        return cov in ("0", "否")
    return cov != "1"


def iface_unsatisfied(cells: dict[int, str], cols: SheetCols) -> bool:
    sat = (cells.get(cols.iface_satisfied, "") or "").strip()
    return sat == "否"


@dataclass
class ApiRow:
    api_id: str
    label: str
    module: str
    clazz: str
    method: str


def extract_api(kind: str, cells: dict[int, str]) -> ApiRow:
    if kind == "cndk":
        mod = (cells.get(1, "") or "").strip()
        clazz = (cells.get(2, "") or "").strip()
        method = (cells.get(3, "") or "").strip()
        sig4 = (cells.get(4, "") or "").strip()
        sig5 = (cells.get(5, "") or "").strip()
        sig = sig4 if "(" in sig4 else sig5
    elif kind == "dynamic":
        mod = (cells.get(1, "") or "").strip()
        clazz = (cells.get(2, "") or "").strip()
        method = (cells.get(3, "") or "").strip()
        sig = (cells.get(5, "") or "").strip()
    else:
        mod = (cells.get(1, "") or "").strip()
        clazz = (cells.get(3, "") or "").strip()
        method = (cells.get(4, "") or "").strip()
        sig = (cells.get(6, "") or "").strip()
    if method.startswith("OH_"):
        api_id = method
    elif clazz and method and len(method) <= 64 and "(" not in method[:20]:
        api_id = f"{clazz}|{method}"
    else:
        api_id = f"{mod}|{clazz}|{method}"
    label = method or sig[:60] or api_id
    if clazz and method:
        label = f"{clazz}.{method}"
    elif mod and method:
        label = f"{mod} :: {method}"
    return ApiRow(api_id=api_id, label=label, module=mod, clazz=clazz, method=method)


def filter_batch(xlsx: Path, kind: str) -> list[ApiRow]:
    header, _, data = load_last_sheet(xlsx)
    cols = resolve_cols(kind, header)
    out: list[ApiRow] = []
    seen: set[str] = set()
    for cells in data:
        if not is_arkweb(cells.get(cols.kit, "")):
            continue
        if not iface_not_covered(kind, cells, cols):
            continue
        if not iface_unsatisfied(cells, cols):
            continue
        api = extract_api(kind, cells)
        if api.api_id in seen:
            continue
        seen.add(api.api_id)
        out.append(api)
    out.sort(key=lambda a: a.api_id)
    return out


def md_table(headers: list[str], rows: list[list[str]]) -> str:
    lines = [
        "| " + " | ".join(headers) + " |",
        "| " + " | ".join(["---"] * len(headers)) + " |",
    ]
    for row in rows:
        lines.append("| " + " | ".join(row) + " |")
    return "\n".join(lines)


def section_compare(
    kind: str,
    batch_apis: dict[str, list[ApiRow]],
    batch_files: dict[str, str],
) -> list[str]:
    labels = sorted(batch_apis.keys())
    sets = {lb: {a.api_id for a in batch_apis[lb]} for lb in labels}
    id_to_label: dict[str, str] = {}
    for lb in labels:
        for a in batch_apis[lb]:
            id_to_label.setdefault(a.api_id, a.label)

    all_batches = set.intersection(*sets.values()) if sets else set()
    union_other = {
        lb: set.union(*(sets[o] for o in labels if o != lb)) if len(labels) > 1 else set()
        for lb in labels
    }
    only = {lb: sets[lb] - union_other[lb] for lb in labels}

    lines = [
        f"## {kind}（末 sheet「接口覆盖详情」/「C用例覆盖度明细」）",
        "",
        "**筛选**：`kit/KIT = ArkWeb`；"
        + (
            "`接口覆盖 = 0` 且 `接口覆盖是否已满足 = 否`"
            if kind == "cndk"
            else "`是否覆盖 ≠ 1`（多为空）且 `接口覆盖是否已满足 = 否`"
        ),
        "",
        "### 各批次源文件与条数",
        "",
        md_table(
            ["批次", "Excel", "待补条数"],
            [[lb, batch_files.get(lb, ""), str(len(batch_apis[lb]))] for lb in labels],
        ),
        "",
        f"### 全批次交集（{len(all_batches)} 条，各批均出现）",
        "",
    ]
    if all_batches:
        rows = [[id_to_label[i], i] for i in sorted(all_batches)]
        lines.append(md_table(["接口", "api_id"], rows[:500]))
        if len(all_batches) > 500:
            lines.append(f"\n> 仅展示前 500 条，共 {len(all_batches)} 条。\n")
    else:
        lines.append("_无_\n")

    lines.append("### 各批独有（仅该批出现）\n")
    for lb in labels:
        ids = sorted(only[lb])
        lines.append(f"#### {lb} 独有（{len(ids)} 条）\n")
        if ids:
            rows = [[id_to_label[i], i] for i in ids]
            lines.append(md_table(["接口", "api_id"], rows[:200]))
            if len(ids) > 200:
                lines.append(f"\n> 仅展示前 200 条。\n")
        else:
            lines.append("_无_\n")
        lines.append("")

    lines.append("### 两两交集规模\n")
    pair_rows = []
    for i, a in enumerate(labels):
        for b in labels[i + 1 :]:
            pair_rows.append([f"{a} ∩ {b}", str(len(sets[a] & sets[b]))])
    lines.append(md_table(["集合", "条数"], pair_rows))
    lines.append("")
    return lines


def parse_batch_args(batch_specs: list[str] | None) -> tuple[tuple[str, str], ...]:
    if not batch_specs:
        return DEFAULT_BATCH_DIRS
    out: list[tuple[str, str]] = []
    for spec in batch_specs:
        if ":" not in spec:
            raise ValueError(f"批次格式应为 LABEL:DIRNAME，收到: {spec}")
        label, dirname = spec.split(":", 1)
        out.append((label.strip(), dirname.strip()))
    return tuple(out)


def build_report(oh_root: Path, batch_dirs: tuple[tuple[str, str], ...] | None = None) -> str:
    batch_dirs = batch_dirs or DEFAULT_BATCH_DIRS
    now = datetime.now(timezone.utc).astimezone().strftime("%Y-%m-%d %H:%M %z")
    lines = [
        "# ArkWeb 三批次台账待补接口对比",
        "",
        f"生成时间：{now}",
        "",
        "批次目录（OH 根下，**ArkWeb / web 模块** 台账）："
        + "、".join(d for _, d in batch_dirs),
        "",
        "---",
        "",
    ]

    all_filtered: dict[str, dict[str, list[ApiRow]]] = {
        k: {} for k, _ in KIND_FILES
    }
    all_files: dict[str, dict[str, str]] = {k: {} for k, _ in KIND_FILES}

    labels = [b[0] for b in batch_dirs]
    for kind, prefix in KIND_FILES:
        for label, dirname in batch_dirs:
            batch_dir = oh_root / dirname
            xlsx = find_xlsx_optional(batch_dir, prefix)
            if xlsx is None:
                all_files[kind][label] = f"_{dirname}: 无 {prefix}_"
                all_filtered[kind][label] = []
                continue
            all_files[kind][label] = f"`{dirname}/{xlsx.name}`"
            all_filtered[kind][label] = filter_batch(xlsx, kind)
        if any(all_filtered[kind].values()):
            lines.extend(
                section_compare(kind, all_filtered[kind], all_files[kind])
            )

    lines.append("## 汇总（cndk + dynamic + static 合并视角）\n")
    combined: dict[str, set[str]] = {lb: set() for lb in labels}
    for kind in all_filtered:
        for label in labels:
            for a in all_filtered[kind].get(label, []):
                combined[label].add(f"{kind}:{a.api_id}")
    all_c: set[str] = set.intersection(*combined.values()) if combined else set()
    lines.append(
        md_table(
            ["批次", "三类型待补合计（去重）"],
            [[lb, str(len(combined[lb]))] for lb in labels],
        )
    )
    lines.append(f"\n三批均出现的条目（含类型前缀）：**{len(all_c)}** 条。\n")
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--oh-root",
        type=Path,
        default=Path("/mnt/vdb/ohos/master"),
        help="含 20261015arkwebxts 等目录的工程根",
    )
    parser.add_argument(
        "--md-out",
        type=Path,
        default=None,
        help="输出 Markdown（默认 oh-root/arkweb_batches_coverage_compare.md）",
    )
    parser.add_argument(
        "--batch",
        action="append",
        metavar="LABEL:DIRNAME",
        help="批次（可多次）；默认 1015/1022/1026 三目录",
    )
    args = parser.parse_args()
    oh_root = args.oh_root.resolve()
    md_out = args.md_out or (oh_root / "arkweb_batches_coverage_compare.md")
    try:
        batches = parse_batch_args(args.batch)
        md = build_report(oh_root, batches)
    except (FileNotFoundError, ValueError) as e:
        print(e, file=sys.stderr)
        return 1
    md_out.write_text(md, encoding="utf-8")
    print(f"Wrote {md_out} ({len(md)} chars)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
