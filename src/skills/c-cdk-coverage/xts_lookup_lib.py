#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Search OpenHarmony XTS/ACTS sources for API/symbol coverage hints."""

from __future__ import annotations

import re
from collections import defaultdict
from pathlib import Path

from analyze_c_cdk_coverage import CASE_PATTERNS, build_case_index, looks_like_case_name

SKIP_PATH_PARTS = ("/build/", "/cache/", "/out/", "/node_modules/")


def resolve_acts_root(oh_root: Path | None = None) -> tuple[Path, Path]:
    """Return (oh_root, acts_dir). oh_root 为含 `src/test/xts/acts` 的工程根（如 master）。"""
    search: list[Path] = []
    if oh_root is not None:
        search.append(Path(oh_root).resolve())
    skill_dir = Path(__file__).resolve().parent
    search.extend(skill_dir.parents)

    for base in search:
        acts = base / "src/test/xts/acts"
        if acts.is_dir():
            return base, acts
        acts_under_src = base / "test/xts/acts"
        if acts_under_src.is_dir():
            # base 为 OH src 根
            master = base.parent
            if (master / "src/test/xts/acts").is_dir():
                return master, master / "src/test/xts/acts"
            return base, acts_under_src
    raise FileNotFoundError("找不到 test/xts/acts，请指定 --oh-root")


def pattern_to_regex(name: str) -> re.Pattern[str]:
    name = name.strip()
    if not name:
        return re.compile(r"(?!x)x")
    if name.startswith("OH_") or name.startswith("ARKWEB_"):
        return re.compile(r"\b" + re.escape(name) + r"\b")
    if "." in name:
        return re.compile(re.escape(name))
    return re.compile(r"\b" + re.escape(name) + r"\b")


def cases_in_file(text: str) -> list[str]:
    found: set[str] = set()
    for pat in CASE_PATTERNS:
        for m in pat.findall(text):
            if looks_like_case_name(m) or m.startswith("test"):
                found.add(m)
    return sorted(found)


def search_pattern_in_acts(
    pattern: str,
    acts: Path,
    subdir: str | None = None,
    max_files: int = 40,
) -> dict:
    regex = pattern_to_regex(pattern)
    root = acts / subdir if subdir else acts
    if not root.is_dir():
        root = acts

    file_hits: list[dict] = []
    for path in root.rglob("*"):
        if path.suffix not in {".ets", ".ts", ".cpp", ".c", ".cc"}:
            continue
        p = path.as_posix()
        if any(x in p for x in SKIP_PATH_PARTS):
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        if not regex.search(text):
            continue
        rel = path.relative_to(acts).as_posix()
        rel = "acts/" + rel
        cases = cases_in_file(text)
        file_hits.append(
            {
                "file": rel,
                "cases": cases[:20],
                "case_count": len(cases),
            }
        )
        if len(file_hits) >= max_files:
            break

    case_index = build_case_index(root if subdir else acts)
    case_name_hits: list[str] = []
    pl = pattern.lower()
    for cname, paths in case_index.items():
        if pl in cname.lower() or pattern in cname:
            case_name_hits.append(cname)
            if len(case_name_hits) >= 30:
                break

    covered = bool(file_hits or case_name_hits)
    return {
        "pattern": pattern,
        "covered_in_xts": covered,
        "files": file_hits,
        "file_count": len(file_hits),
        "cases_by_name_match": case_name_hits[:30],
    }


def markdown_lookup_report(results: list[dict], acts: Path) -> str:
    lines = [
        "# XTS / ACTS 接口覆盖检索",
        "",
        f"检索根目录：`{acts}`",
        "",
    ]
    for r in results:
        status = "**有用例引用**" if r["covered_in_xts"] else "**未找到引用**"
        lines.append(f"## `{r['pattern']}` — {status}")
        lines.append("")
        if r["cases_by_name_match"]:
            lines.append("### 用例名匹配（it / @tc.name 索引）")
            for c in r["cases_by_name_match"][:15]:
                lines.append(f"- `{c}`")
            if len(r["cases_by_name_match"]) > 15:
                lines.append(f"- … 共 {len(r['cases_by_name_match'])} 条")
            lines.append("")
        if r["files"]:
            lines.append("### 源码文件（含符号/接口文本）")
            for fh in r["files"][:15]:
                lines.append(f"- `{fh['file']}`")
                if fh["cases"]:
                    sample = ", ".join(f"`{c}`" for c in fh["cases"][:5])
                    lines.append(f"  - 同文件用例：{sample}")
            if r["file_count"] > 15:
                lines.append(f"- … 共 {r['file_count']} 个文件")
        elif not r["cases_by_name_match"]:
            lines.append("_无匹配文件或用例名。_")
        lines.append("")
    return "\n".join(lines)
