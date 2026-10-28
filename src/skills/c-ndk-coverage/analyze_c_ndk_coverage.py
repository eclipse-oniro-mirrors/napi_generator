#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Parse c_ndk_result*.xlsx sheet「C用例覆盖度明细」, map 接口覆盖=0 APIs to XTS cases in master.

Column semantics (sheet C用例覆盖度明细):
  24 接口覆盖: 1=工具判定已覆盖, 0=未覆盖（待补接口覆盖，等价于旧表「否」）
  43 接口覆盖是否已满足: 是/否（人工/流程确认）
  42 归属用例编号, 52 用例路径, 53 用例编号
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

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}

COL = {
    "module": 1,
    "class": 2,
    "method": 3,
    "signature": 4,
    "kit": 14,
    "subsystem": 16,
    "iface_cov": 24,
    "case_no_assign": 42,
    "iface_satisfied": 43,
    "case_path": 52,
    "case_no": 53,
}

CASE_PATTERNS = (
    re.compile(r"\bit\s*\(\s*['\"]([^'\"]{4,120})['\"]"),
    re.compile(r"@tc\.name\s+([A-Za-z0-9_#]{4,120})"),
    re.compile(r"\bHWTEST\s*\(\s*[^,]+,\s*(\w{4,80})"),
    re.compile(r"\bHWTEST_F\s*\(\s*(\w{4,80})"),
)

def looks_like_case_name(name: str) -> bool:
    if len(name) < 8 or len(name) > 120:
        return False
    if name.startswith("SUB_"):
        return True
    if name.startswith("testOH") or name.startswith("testMalloc"):
        return True
    if name.startswith("test") and "_" in name[4:]:
        return True
    return False


def col_idx(ref: str) -> int:
    m = re.match(r"([A-Z]+)", ref)
    if not m:
        return 0
    col = 0
    for c in m.group(1):
        col = col * 26 + (ord(c) - 64)
    return col


def load_detail_sheet(xlsx: Path):
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
        sheet_target = None
        for sh in wb.findall(".//m:sheets/m:sheet", NS):
            name = sh.get("name") or ""
            if name in ("C用例覆盖度明细", "用例覆盖明细"):
                rid = sh.get(
                    "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"
                )
                sheet_target = "xl/" + rid_map[rid].lstrip("/")
                break
        if not sheet_target:
            raise SystemExit("未找到工作表 C用例覆盖度明细 / 用例覆盖明细")
        sheet = ET.fromstring(z.read(sheet_target))
        rows = sheet.findall(".//m:sheetData/m:row", NS)
    return shared, rows


def read_row(row, shared: list[str]) -> dict[int, str]:
    cells: dict[int, str] = {}
    for c in row.findall("m:c", NS):
        ref = c.get("r", "")
        t = c.get("t")
        v_el = c.find("m:v", NS)
        val = ""
        if v_el is not None and v_el.text is not None:
            val = shared[int(v_el.text)] if t == "s" else v_el.text
        cells[col_idx(ref)] = val
    return cells


def parse_case_ids(raw42: str, raw53: str) -> list[str]:
    ids: list[str] = []
    for raw in (raw42, raw53):
        raw = (raw or "").strip()
        if not raw:
            continue
        if raw.startswith("["):
            try:
                ids.extend(json.loads(raw))
            except json.JSONDecodeError:
                ids.append(raw)
        else:
            ids.append(raw)
    out: list[str] = []
    for x in ids:
        x = str(x).strip()
        if "#" in x:
            out.append(x.split("#", 1)[1])
        else:
            out.append(x)
    return list(dict.fromkeys(out))


def build_case_index(xts_root: Path) -> dict[str, list[str]]:
    """Map Hypium/HWTEST case name -> relative paths under xts_root."""
    index: dict[str, list[str]] = defaultdict(list)
    exts = {".ets", ".ts", ".cpp", ".c", ".cc"}
    for path in xts_root.rglob("*"):
        if path.suffix not in exts or not path.is_file():
            continue
        p = path.as_posix()
        if "/build/" in p or "/out/" in p or "/cache/" in p:
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        rel = path.relative_to(xts_root).as_posix()
        found: set[str] = set()
        for name in CASE_PATTERNS[0].findall(text):
            if looks_like_case_name(name):
                found.add(name)
        if path.suffix in {".cpp", ".c", ".cc"}:
            for pat in CASE_PATTERNS[2:]:
                for name in pat.findall(text):
                    if looks_like_case_name(name):
                        found.add(name)
        for name in found:
            if rel not in index[name]:
                index[name].append(rel)
    return index


def build_basename_index(acts: Path) -> dict[str, list[Path]]:
    idx: dict[str, list[Path]] = defaultdict(list)
    for path in acts.rglob("*"):
        if not path.is_file():
            continue
        p = path.as_posix()
        if "/build/" in p or "/cache/" in p:
            continue
        if path.suffix not in {".ets", ".ts", ".cpp", ".c", ".cc"}:
            continue
        idx[path.name].append(path)
    return idx


def normalize_case_path(case_path: str) -> str:
    p = (case_path or "").strip().replace("\\", "/")
    if ";" in p:
        p = p.split(";")[0].strip()
    if p.startswith("xts_acts/"):
        p = p[len("xts_acts/") :]
    return p


def resolve_excel_path(
    case_path: str, acts: Path, xts: Path, basename_index: dict[str, list[Path]]
) -> Path | None:
    p = normalize_case_path(case_path)
    if not p:
        return None
    for base in (acts, xts):
        cand = base / p
        if cand.is_file():
            return cand
    name = Path(p).name
    hits = basename_index.get(name, [])
    if len(hits) == 1:
        return hits[0]
    for h in hits:
        if p in h.as_posix():
            return h
    return hits[0] if hits else None


def verify_in_master(
    method: str,
    case_ids: list[str],
    case_path: str,
    file_cache: dict[str, str],
    case_index: dict[str, list[str]],
    acts: Path,
    xts: Path,
    basename_index: dict[str, list[Path]],
) -> tuple[str, list[str], list[str]]:
    """
    Returns (master_status, matched_cases, matched_files_rel).
    master_status: 有用例 | 无对应用例 | Excel未关联用例
    """
    matched_files: list[str] = []
    matched_cases: list[str] = []

    resolved = resolve_excel_path(case_path, acts, xts, basename_index)
    if resolved:
        root = acts if str(resolved).startswith(str(acts)) else xts
        rel = resolved.relative_to(root).as_posix()
        if root == acts:
            rel = "acts/" + rel
        matched_files.append(rel)
        key = str(resolved)
        if key not in file_cache:
            file_cache[key] = resolved.read_text(encoding="utf-8", errors="ignore")
        text = file_cache[key]
        if case_ids:
            for cid in case_ids:
                if cid in text:
                    matched_cases.append(cid)
        if method and method in text and not matched_cases:
            matched_cases.append(f"(symbol:{method})")

    for cid in case_ids:
        if cid in matched_cases:
            continue
        for rel in case_index.get(cid, []):
            matched_cases.append(cid)
            if rel not in matched_files:
                matched_files.append(rel)

    if not case_ids and not case_path:
        if method:
            for rel in case_index.get(f"(symbol:{method})", []):
                matched_files.append(rel)
        return "Excel未关联用例", matched_cases, matched_files

    if matched_cases or matched_files:
        return "有对应用例", matched_cases, matched_files
    return "无对应用例", [], []


def row_to_record(cells: dict[int, str], row_num: int, **verify) -> dict:
    iface = cells.get(COL["iface_cov"], "").strip()
    api = f"{cells.get(COL['module'], '')}::{cells.get(COL['method'], '')}"
    case_ids = parse_case_ids(
        cells.get(COL["case_no_assign"], ""), cells.get(COL["case_no"], "")
    )
    case_path = cells.get(COL["case_path"], "")
    master_status, matched_cases, matched_files = verify_in_master(
        cells.get(COL["method"], ""),
        case_ids,
        case_path,
        verify["file_cache"],
        verify["case_index"],
        verify["acts"],
        verify["xts"],
        verify["basename_index"],
    )
    excel_need = iface == "0"
    satisfied = cells.get(COL["iface_satisfied"], "")

    if iface == "1":
        cover_label = "已覆盖(Excel接口覆盖=1)"
    elif master_status == "有对应用例":
        cover_label = "待补(工具=0)但master有用例"
    elif master_status == "Excel未关联用例":
        cover_label = "待补(工具=0)且Excel未关联用例"
    else:
        cover_label = "待补(工具=0)且master无对应用例"

    if excel_need and satisfied == "否":
        priority = "高"
    elif excel_need:
        priority = "中"
    else:
        priority = "-"

    return {
        "excel_row": row_num,
        "module": cells.get(COL["module"], ""),
        "method": cells.get(COL["method"], ""),
        "signature": cells.get(COL["signature"], ""),
        "kit": cells.get(COL["kit"], ""),
        "subsystem": cells.get(COL["subsystem"], ""),
        "api_key": api,
        "excel_iface_cov": iface,
        "excel_iface_satisfied": satisfied,
        "excel_need_iface": excel_need,
        "excel_case_ids": case_ids,
        "excel_case_path": case_path,
        "master_status": master_status,
        "master_matched_cases": matched_cases,
        "master_matched_files": matched_files,
        "coverage_label": cover_label,
        "priority": priority,
    }


def markdown_report(
    xlsx: Path, records: list[dict], scope: str, summary: dict
) -> str:
    lines = [
        "# C NDK 接口覆盖 ↔ XTS 用例对照表",
        "",
        f"来源：`{xlsx}` 工作表 **C用例覆盖度明细**",
        f"生成时间：{datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}",
        "",
        "## 列含义说明",
        "",
        "| Excel 列 | 含义 | 与待补关系 |",
        "|---|---|---|",
        "| **接口覆盖**（第24列） | 工具扫描：`1`=已覆盖，`0`=未覆盖 | Excel 里常显示为是/否，**底层是 0/1，不是文字「否」**；仅筛此列未覆盖共 **6179** 行 |",
        "| **接口覆盖是否已满足**（第43列） | 流程确认：`是` / `否` | 与第24列=0联筛为 **373** 行；**ArkWeb 仅 14 行**（两列同时未满足） |",
        "| **归属用例编号 / 用例路径 / 用例编号** | 检测器关联的 XTS 用例 | 用于在 master 中定位 `it()` / 源文件 |",
        "",
        f"## 汇总（scope: **{scope}**）",
        "",
        f"- 明细行数：**{summary['total_rows']}**",
        f"- Excel 接口覆盖=1（工具已覆盖）：**{summary['iface_1']}**",
        f"- Excel 接口覆盖=0（待补）：**{summary['iface_0']}**",
        f"  - 其中「是否已满足=否」：**{summary['iface_0_unsatisfied']}**（高优先级）",
        f"- master 中能找到 Excel 关联/索引用例：**{summary['master_has_case']}**",
        f"- master 无对应用例：**{summary['master_missing']}**",
        "",
        "## 对照表明细",
        "",
        "| Excel行 | 模块/方法 | 接口覆盖 | 已满足 | 覆盖结论 | master | Excel 用例 | master 文件 |",
        "|---:|---|:---:|:---:|---|---|---|---|",
    ]
    for r in records:
        api = f"`{r['module']}` / `{r['method']}`"
        cases = ", ".join(f"`{x}`" for x in r["excel_case_ids"][:3])
        if len(r["excel_case_ids"]) > 3:
            cases += f" …(+{len(r['excel_case_ids'])-3})"
        if not cases:
            cases = "—"
        files = ", ".join(f"`{x}`" for x in r["master_matched_files"][:2])
        if len(r["master_matched_files"]) > 2:
            files += f" …(+{len(r['master_matched_files'])-2})"
        if not files:
            files = "—"
        master = r["master_status"]
        if r["master_matched_cases"]:
            master += "：" + ", ".join(r["master_matched_cases"][:2])
        lines.append(
            f"| {r['excel_row']} | {api} | {r['excel_iface_cov']} | "
            f"{r['excel_iface_satisfied'] or '—'} | **{r['coverage_label']}** | {master} | {cases} | {files} |"
        )
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "xlsx",
        nargs="?",
        default="c_ndk_result(4).xlsx",
        help="Path to c_ndk_result xlsx",
    )
    parser.add_argument(
        "--oh-root",
        type=Path,
        default=None,
        help="OH tree root (default: auto from script location)",
    )
    parser.add_argument(
        "--scope",
        choices=("need_iface", "unsatisfied", "all"),
        default="unsatisfied",
        help="need_iface=第24列接口覆盖=0(6179); unsatisfied=24=0且第43列是否已满足=否(全表373); all=全部行",
    )
    parser.add_argument(
        "--kit",
        default="",
        help="仅统计指定 KIT（如 ArkWeb）；与 unsatisfied 联用时全表373，ArkWeb 为14条",
    )
    parser.add_argument("--json-out", type=Path, default=None)
    parser.add_argument("--md-out", type=Path, default=None)
    args = parser.parse_args()

    from xts_lookup_lib import resolve_acts_root

    oh_root, acts = resolve_acts_root(
        args.oh_root.resolve() if args.oh_root else None
    )
    oh_root = oh_root.resolve()
    xlsx = Path(args.xlsx)
    if not xlsx.is_file():
        xlsx = oh_root / args.xlsx
    if not xlsx.is_file():
        print(f"找不到 xlsx: {xlsx}", file=sys.stderr)
        return 1

    xts = oh_root / "src/test/xts"
    if not acts.is_dir():
        print(f"acts 目录不存在: {acts}", file=sys.stderr)
        return 1

    print("Indexing ACTS cases under", acts, file=sys.stderr)
    case_index = build_case_index(acts)
    basename_index = build_basename_index(acts)
    print(f"  indexed {len(case_index)} case names", file=sys.stderr)

    shared, rows = load_detail_sheet(xlsx)
    file_cache: dict[str, str] = {}
    verify_kw = {
        "file_cache": file_cache,
        "case_index": case_index,
        "acts": acts,
        "xts": xts,
        "basename_index": basename_index,
    }

    all_records: list[dict] = []
    for row in rows[1:]:
        cells = read_row(row, shared)
        row_num = int(row.get("r", 0))
        rec = row_to_record(cells, row_num, **verify_kw)
        all_records.append(rec)

    if args.scope == "need_iface":
        records = [r for r in all_records if r["excel_need_iface"]]
    elif args.scope == "unsatisfied":
        records = [
            r
            for r in all_records
            if r["excel_need_iface"] and r["excel_iface_satisfied"] == "否"
        ]
    else:
        records = all_records
    if args.kit:
        records = [r for r in records if r.get("kit") == args.kit]

    summary = {
        "total_rows": len(all_records),
        "iface_1": sum(1 for r in all_records if r["excel_iface_cov"] == "1"),
        "iface_0": sum(1 for r in all_records if r["excel_iface_cov"] == "0"),
        "iface_0_unsatisfied": sum(
            1
            for r in all_records
            if r["excel_iface_cov"] == "0" and r["excel_iface_satisfied"] == "否"
        ),
        "master_has_case": sum(
            1 for r in all_records if r["master_status"] == "有对应用例"
        ),
        "master_missing": sum(
            1
            for r in all_records
            if r["excel_need_iface"] and r["master_status"] == "无对应用例"
        ),
    }

    md_out = args.md_out or (oh_root / "c_ndk_master_coverage_table.md")
    json_out = args.json_out or (
        skill_dir / "c_ndk_master_coverage_table.json"
    )

    md_out.write_text(
        markdown_report(xlsx, records, args.scope, summary), encoding="utf-8"
    )
    payload = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "xlsx": str(xlsx),
        "scope": args.scope,
        "summary": summary,
        "records_in_md": len(records),
        "records": records,
    }
    json_out.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(records)} rows -> {md_out}")
    print(f"JSON -> {json_out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
