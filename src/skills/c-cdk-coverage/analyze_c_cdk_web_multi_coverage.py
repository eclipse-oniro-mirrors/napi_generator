#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
C CDK 多维度覆盖对照（子系统 web）：按 Excel「C用例覆盖度明细」六列判定待补。

待补规则（与 webview-dynamic 一致）：单元格为 **否**、**空**、或 **0**（接口/调用等列底层多为 0/1）。

维度 ↔ Excel 列：
  接口覆盖 → 24
  调用覆盖 → 25（表头「API调用」）
  入参覆盖 → 27
  错误码覆盖 → 30
  参数规格覆盖 → 33（表头「参数规格检查」）
  返回值覆盖 → 36（表头「返回值检查」）
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path

from analyze_c_cdk_coverage import (
    build_basename_index,
    build_case_index,
    load_detail_sheet,
    parse_case_ids,
    read_row,
    resolve_excel_path,
)

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}

DIMENSIONS: tuple[tuple[str, int, str], ...] = (
    ("接口覆盖", 24, "接口覆盖"),
    ("调用覆盖", 25, "API调用"),
    ("入参覆盖", 27, "入参覆盖"),
    ("错误码覆盖", 30, "错误码覆盖"),
    ("参数规格覆盖", 33, "参数规格检查"),
    ("返回值覆盖", 36, "返回值检查"),
)

COL = {
    "module": 1,
    "method": 3,
    "signature": 4,
    "kit": 14,
    "subsystem": 16,
    "case_no_assign": 42,
    "iface_satisfied": 43,
    "case_path": 52,
    "case_no": 53,
}

SKIP_CELL = frozenset({"已覆盖", "工具检测已覆盖", "澄清无法覆盖", "不涉及", "是", "1"})


def cell_needs_coverage(raw: str) -> bool:
    v = (raw or "").strip()
    if v in SKIP_CELL:
        return False
    if v in ("否", "0", ""):
        return True
    return False


def dim_display(raw: str) -> str:
    v = (raw or "").strip()
    if v == "":
        return "(空)"
    if v == "0":
        return "0(否)"
    return v


def build_symbol_index(search_root: Path) -> dict[str, list[str]]:
    idx: dict[str, list[str]] = defaultdict(list)
    for path in search_root.rglob("*"):
        if path.suffix not in {".ets", ".ts", ".cpp", ".c", ".cc"}:
            continue
        p = path.as_posix()
        if "/build/" in p or "/cache/" in p:
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        rel = path.relative_to(search_root.parent).as_posix()
        if not rel.startswith("acts/"):
            rel = "acts/" + path.relative_to(search_root).as_posix()
        # C API symbols OH_*
        for sym in set(re.findall(r"\b(OH_[A-Za-z0-9_]+)", text)):
            if rel not in idx[sym]:
                idx[sym].append(rel)
    return idx


def verify_master_for_api(
    method: str,
    case_ids: list[str],
    case_path: str,
    file_cache: dict[str, str],
    case_index: dict[str, list[str]],
    symbol_index: dict[str, list[str]],
    acts: Path,
    xts: Path,
    basename_index: dict[str, list[Path]],
) -> tuple[bool, list[str], list[str]]:
    matched_cases: list[str] = []
    matched_files: list[str] = []

    resolved = resolve_excel_path(case_path, acts, xts, basename_index)
    if resolved:
        rel = "acts/" + resolved.relative_to(acts).as_posix()
        matched_files.append(rel)
        key = str(resolved)
        if key not in file_cache:
            file_cache[key] = resolved.read_text(encoding="utf-8", errors="ignore")
        text = file_cache[key]
        for cid in case_ids:
            if cid in text:
                matched_cases.append(cid)

    for cid in case_ids:
        for rel in case_index.get(cid, []):
            if cid not in matched_cases:
                matched_cases.append(cid)
            if rel not in matched_files:
                matched_files.append(
                    rel if rel.startswith("acts/") else "acts/" + rel
                )

    if method:
        for rel in symbol_index.get(method, [])[:5]:
            if rel not in matched_files:
                matched_files.append(rel)
        if matched_files and not matched_cases:
            matched_cases.append(f"(symbol:{method})")

    return bool(matched_cases or matched_files), matched_cases[:8], matched_files[:5]


def _dim_mark(dims: dict, key: str) -> str:
    return "待补" if dims[key]["needs"] else "—"


def _api_summary_row(r: dict) -> str:
    dims = r["dims"]
    master = "有" if r["master_has_case"] else "**无**"
    hint = list(r["master_matched_cases"][:2])
    if r["master_matched_files"]:
        hint.append(r["master_matched_files"][0])
    hint_s = ", ".join(f"`{x}`" for x in hint[:3]) if hint else "—"
    return (
        f"| {r['excel_row']} | `{r['method']}` | {_dim_mark(dims, '接口覆盖')} | "
        f"{_dim_mark(dims, '调用覆盖')} | {_dim_mark(dims, '入参覆盖')} | "
        f"{_dim_mark(dims, '错误码覆盖')} | {_dim_mark(dims, '参数规格覆盖')} | "
        f"{_dim_mark(dims, '返回值覆盖')} | {master} | {hint_s} |"
    )


def _gap_task_row(t: dict) -> str:
    master = "有" if t["master_has_case"] else "**无**"
    cases = ", ".join(f"`{x}`" for x in t["master_matched_cases"][:2]) or "—"
    files = ", ".join(f"`{x}`" for x in t["master_matched_files"][:1]) or "—"
    return (
        f"| {t['excel_row']} | `{t['method']}` | {t['dimension']} | {t['cell_display']} | "
        f"{master} | {cases} | {files} |"
    )


def _md_multi_head(xlsx: Path, subsystem: str, summary: dict) -> list[str]:
    head = [
        "# C CDK 多维度覆盖 ↔ XTS（子系统 web）",
        "",
        f"来源：`{xlsx}` → **C用例覆盖度明细**，子系统 **{subsystem}**",
        f"生成时间：{datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}",
        "",
        "## 待补判定",
        "",
        "以下六列中，单元格为 **`否` / 空 / `0`** 视为该维度待补（`1` 或「是」视为已覆盖）。",
        "C 表多数维度存 **0/1**，Excel 界面可能显示为否/是。",
        "",
        "| 维度 | Excel 列名 | 列号 |",
        "|---|---|---:|",
    ]
    head += [f"| {label} | {header} | {col} |" for label, col, header in DIMENSIONS]
    head += [
        "",
        "## 汇总",
        "",
        f"- web 子系统 API 行数：**{summary['api_rows']}**",
        f"- 至少一维待补的 API：**{summary['apis_with_gaps']}**",
        f"- 待补 **维度点**（API×维度）：**{summary['gap_points']}**",
        "",
        "| 维度 | 待补点数 |",
        "|---|---:|",
    ]
    head += [
        f"| {label} | {summary['gaps_by_dim'].get(label, 0)} |"
        for label, _, _ in DIMENSIONS
    ]
    return head


def markdown_report(
    xlsx: Path,
    subsystem: str,
    summary: dict,
    gap_tasks: list[dict],
    api_rows: list[dict],
) -> str:
    head = _md_multi_head(xlsx, subsystem, summary)
    head += [
        "",
        f"- master 能关联到用例/符号的 API（在待补 API 中）：**{summary['master_has_case_among_gap_apis']}**",
        f"- 至少一维待补且 master **未找到**用例：**{summary['apis_no_master']}**",
        "",
        "## 按 API 汇总（六维待补标记）",
        "",
        "标记：**待补** = 否/空/0；**—** = 已覆盖(1)。",
        "",
        "| 行 | 方法 | 接口 | 调用 | 入参 | 错误码 | 规格 | 返回值 | master | 用例/文件 |",
        "|---:|---|:---:|:---:|:---:|:---:|:---:|:---:|---|---|",
    ]
    tail = [
        "",
        "## 待补维度明细（API × 维度）",
        "",
        "| 行 | 方法 | 维度 | Excel值 | master | 用例 | 文件 |",
        "|---:|---|---|---|---|---|---|",
    ]
    parts = head + [_api_summary_row(r) for r in api_rows]
    parts += tail + [_gap_task_row(t) for t in gap_tasks]
    return "\n".join(parts) + "\n"


def _append_gap_tasks(
    ctx: dict,
    cells: dict[int, str],
    row_num: int,
    method: str,
    case_ids: list[str],
    has_master: bool,
    matched_cases: list[str],
    matched_files: list[str],
) -> tuple[dict[str, dict], bool]:
    dim_state: dict[str, dict] = {}
    row_has_gap = False
    for label, col, _header in DIMENSIONS:
        raw = cells.get(col, "")
        needs = cell_needs_coverage(raw)
        dim_state[label] = {"needs": needs, "raw": raw}
        if not needs:
            continue
        row_has_gap = True
        ctx["gaps_by_dim"][label] += 1
        ctx["gap_tasks"].append(
            {
                "excel_row": row_num,
                "module": cells.get(COL["module"], ""),
                "method": method,
                "signature": cells.get(COL["signature"], ""),
                "dimension": label,
                "cell_raw": raw,
                "cell_display": dim_display(raw),
                "master_has_case": has_master,
                "master_matched_cases": matched_cases,
                "master_matched_files": matched_files,
                "excel_case_ids": case_ids,
                "iface_satisfied": cells.get(COL["iface_satisfied"], ""),
            }
        )
    return dim_state, row_has_gap


def _process_web_row(
    cells: dict[int, str],
    row_num: int,
    subsystem: str,
    ctx: dict,
) -> None:
    if cells.get(COL["subsystem"]) != subsystem:
        return
    ctx["web_api_count"] += 1
    method = cells.get(COL["method"], "")
    case_ids = parse_case_ids(
        cells.get(COL["case_no_assign"], ""), cells.get(COL["case_no"], "")
    )
    has_master, matched_cases, matched_files = verify_master_for_api(
        method,
        case_ids,
        cells.get(COL["case_path"], ""),
        ctx["file_cache"],
        ctx["case_index"],
        ctx["symbol_index"],
        ctx["acts"],
        ctx["xts"],
        ctx["basename_index"],
    )
    dim_state, row_has_gap = _append_gap_tasks(
        ctx, cells, row_num, method, case_ids, has_master, matched_cases, matched_files
    )
    if not row_has_gap:
        return
    ctx["apis_with_gaps"] += 1
    if has_master:
        ctx["master_has_among_gap"] += 1
    else:
        ctx["apis_no_master"] += 1
    ctx["api_rows"].append(
        {
            "excel_row": row_num,
            "method": method,
            "module": cells.get(COL["module"], ""),
            "dims": dim_state,
            "master_has_case": has_master,
            "master_matched_cases": matched_cases,
            "master_matched_files": matched_files,
        }
    )


def _run_multi(args: argparse.Namespace) -> tuple[Path, Path, dict, list, list]:
    from xts_lookup_lib import resolve_acts_root

    oh_root, acts = resolve_acts_root(
        args.oh_root.resolve() if args.oh_root else None
    )
    oh_root = oh_root.resolve()
    xlsx = Path(args.xlsx)
    if not xlsx.is_file():
        xlsx = oh_root / args.xlsx
    if not xlsx.is_file():
        raise FileNotFoundError(xlsx)
    case_index = build_case_index(acts)
    basename_index = build_basename_index(acts)
    symbol_index = build_symbol_index(acts / "web")
    shared, rows = load_detail_sheet(xlsx)
    ctx = {
        "file_cache": {},
        "case_index": case_index,
        "symbol_index": symbol_index,
        "acts": acts,
        "xts": oh_root / "src/test/xts",
        "basename_index": basename_index,
        "gap_tasks": [],
        "api_rows": [],
        "gaps_by_dim": Counter(),
        "apis_with_gaps": 0,
        "master_has_among_gap": 0,
        "apis_no_master": 0,
        "web_api_count": 0,
    }
    for row in rows[1:]:
        _process_web_row(
            read_row(row, shared), int(row.get("r", 0)), args.subsystem, ctx
        )
    summary = {
        "api_rows": ctx["web_api_count"],
        "apis_with_gaps": ctx["apis_with_gaps"],
        "gap_points": len(ctx["gap_tasks"]),
        "gaps_by_dim": dict(ctx["gaps_by_dim"]),
        "master_has_case_among_gap_apis": ctx["master_has_among_gap"],
        "apis_no_master": ctx["apis_no_master"],
    }
    return oh_root, xlsx, summary, ctx["gap_tasks"], ctx["api_rows"]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("xlsx", nargs="?", default="c_cdk_result(4).xlsx")
    parser.add_argument("--subsystem", default="web")
    parser.add_argument("--oh-root", type=Path, default=None)
    parser.add_argument("--md-out", type=Path, default=None)
    parser.add_argument("--json-out", type=Path, default=None)
    args = parser.parse_args()
    try:
        oh_root, xlsx, summary, gap_tasks, api_rows = _run_multi(args)
    except FileNotFoundError as e:
        print(f"找不到: {e}", file=sys.stderr)
        return 1
    md_out = args.md_out or (oh_root / "c_cdk_web_multi_coverage_table.md")
    json_out = args.json_out or (oh_root / "c_cdk_web_multi_coverage_table.json")
    md_out.write_text(
        markdown_report(xlsx, args.subsystem, summary, gap_tasks, api_rows),
        encoding="utf-8",
    )
    json_out.write_text(
        json.dumps(
            {
                "generated_at": datetime.now(timezone.utc).isoformat(),
                "xlsx": str(xlsx),
                "subsystem": args.subsystem,
                "summary": summary,
                "gap_tasks": gap_tasks,
                "api_rows": api_rows,
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    print(f"Wrote {len(gap_tasks)} gap points, {len(api_rows)} APIs -> {md_out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
