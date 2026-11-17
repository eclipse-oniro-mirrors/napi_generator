#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""动静态配对共用工具：用例名归一、List.test 解析、it() 块提取。

九项目经验固化：同步目标是接口设计对齐，不是条数相等；静态特有不可删；
List.test 注册的全部文件都必须配对同步。
"""
from __future__ import annotations

import re
from pathlib import Path

IT_RE = re.compile(r"(?m)^\s*it\(\s*(['\"])([^'\"]+)\1")
LIST_IMPORT_RE = re.compile(
    r"(?m)^\s*import\s+\w+\s+from\s+['\"]\.\/([^'\"]+)['\"]"
)
PREFIX_STRIP = (
    r"^ACTS_",
    r"^SUB_Ability_AbilityRuntime_",
    r"^SUB_Ability_AbilityTools_",
    r"^SUB_Ability_AbilityBase_",
    r"^SUB_Ability_",
    r"^System_API_Test_",
    r"^Public_API_Test_",
)


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def list_it_names(src: str) -> list[str]:
    return [m.group(2) for m in IT_RE.finditer(src)]


def normalize_case_id(name: str) -> str:
    """去掉 Static_/前缀差异，并将动态 5 位编号收成静态 4 位（去末位）。"""
    n = re.sub(r"_Static_", "_", name)
    n = re.sub(r"_static_", "_", n, flags=re.I)
    for pat in PREFIX_STRIP:
        n2 = re.sub(pat, "", n)
        if n2 != n:
            n = n2
            break
    # 动态 _23500 → 静态 _2350（门禁 TCNUMBER 4 位）
    n = re.sub(r"_(\d{4})\d$", r"_\1", n)
    return n


def normalize_module(mod: str) -> str:
    """List 模块名模糊对齐：去 Static、统一大小写。"""
    m = mod
    m = re.sub(r"[Ss]tatic", "", m)
    m = m.replace(".Synctest", ".sync")
    m = m.replace(".SyncTest", ".sync")
    m = m.replace("SyncTest", "sync")
    m = m.replace(".test", "")
    return m.lower().replace("_", "").replace("-", "")


def normalized_set(names: list[str]) -> set[str]:
    return {normalize_case_id(x) for x in names}


def parse_list_modules(list_path: Path) -> list[str]:
    """返回 List.test 中 './X' 导入的模块基名（如 Ability.test）。"""
    if not list_path.is_file():
        return []
    return LIST_IMPORT_RE.findall(read_text(list_path))


def resolve_list_files(test_dir: Path, modules: list[str]) -> list[Path]:
    out: list[Path] = []
    for mod in modules:
        cand = test_dir / f"{mod}.ets"
        if cand.is_file():
            out.append(cand)
            continue
        if not mod.endswith(".ets"):
            alt = test_dir / f"{mod}.ets"
            if alt.is_file():
                out.append(alt)
    return out


def dyn_test_dir(proj: Path) -> Path:
    return proj / "entry/src/ohosTest/ets/test"


def sta_test_dir(proj: Path) -> Path:
    return proj / "entry/src/main/src/test"


def find_list_test(test_dir: Path) -> Path | None:
    for name in ("List.test.ets", "List.ets"):
        p = test_dir / name
        if p.is_file():
            return p
    return None


def extract_it_block(src: str, case_name: str) -> str | None:
    """提取单个 it('name', ...) 完整块（含前置紧邻 JSDoc）。"""
    lines = src.splitlines(keepends=True)
    start = -1
    for i, ln in enumerate(lines):
        if re.match(rf"^\s*it\(\s*(['\"]){re.escape(case_name)}\1", ln):
            start = i
            break
    if start < 0:
        return None
    js = start
    while js > 0 and (
        lines[js - 1].strip().startswith("*")
        or lines[js - 1].strip().startswith("/*")
        or lines[js - 1].strip() == "*/"
        or lines[js - 1].strip().startswith("//")
        or not lines[js - 1].strip()
    ):
        js -= 1
        if lines[js].strip().startswith("/**"):
            break
    depth = 0
    seen = False
    end = start
    for j in range(start, len(lines)):
        depth += lines[j].count("{") - lines[j].count("}")
        if "{" in lines[j]:
            seen = True
        if seen and depth <= 0:
            end = j
            break
    return "".join(lines[js:end + 1])


def static_only_names(dyn_names: list[str], sta_names: list[str]) -> list[str]:
    dyn_n = normalized_set(dyn_names)
    out: list[str] = []
    for name in sta_names:
        if normalize_case_id(name) not in dyn_n:
            out.append(name)
    return out


def dyn_missing_in_sta(dyn_names: list[str], sta_names: list[str]) -> list[str]:
    sta_n = normalized_set(sta_names)
    out: list[str] = []
    for name in dyn_names:
        if normalize_case_id(name) not in sta_n:
            out.append(name)
    return out


def has_advanced_dialog(src: str) -> bool:
    return "advanced_dialog_button_0" in src


def collect_pair_case_stats(dyn_proj: Path, sta_proj: Path) -> dict:
    """汇总一对工程的 List 模块与用例覆盖。"""
    d_dir, s_dir = dyn_test_dir(dyn_proj), sta_test_dir(sta_proj)
    d_list, s_list = find_list_test(d_dir), find_list_test(s_dir)
    d_mods = parse_list_modules(d_list) if d_list else []
    s_mods = parse_list_modules(s_list) if s_list else []
    d_files = resolve_list_files(d_dir, d_mods) if d_mods else list(d_dir.glob("*.ets"))
    s_files = resolve_list_files(s_dir, s_mods) if s_mods else list(s_dir.glob("*.ets"))
    d_names: list[str] = []
    s_names: list[str] = []
    for f in d_files:
        if "List." in f.name:
            continue
        d_names.extend(list_it_names(read_text(f)))
    for f in s_files:
        if "List." in f.name:
            continue
        s_names.extend(list_it_names(read_text(f)))
    return {
        "dyn_mods": d_mods,
        "sta_mods": s_mods,
        "dyn_files": d_files,
        "sta_files": s_files,
        "dyn_names": d_names,
        "sta_names": s_names,
        "static_only": static_only_names(d_names, s_names),
        "dyn_missing": dyn_missing_in_sta(d_names, s_names),
    }
