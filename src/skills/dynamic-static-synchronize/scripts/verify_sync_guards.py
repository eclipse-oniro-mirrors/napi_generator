#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""同步后硬门禁：静态特有不丢、List 多文件齐全、弹窗保留、禁止条数对齐思维。

用法：
  python3 verify_sync_guards.py <dyn_proj> <sta_proj>
  python3 verify_sync_guards.py --scan <repo>/ability/ability_runtime
  python3 verify_sync_guards.py --baseline <old_sta.test.ets> <new_sta.test.ets>

退出码：0 通过；1 有违规（应阻断提交）。
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

from pair_utils import (
    collect_pair_case_stats,
    find_list_test,
    has_advanced_dialog,
    list_it_names,
    parse_list_modules,
    read_text,
    resolve_list_files,
    sta_test_dir,
    static_only_names,
    dyn_test_dir,
)

# 九项目默认配对（相对 ability_runtime）
DEFAULT_PAIRS = [
    ("actsamstest/AbilityDelegatorTest", "actsamstest/AbilityDelegatorTestStatic"),
    ("abilitymontior", "abilitymonitorstatic"),
    ("abilitytoolabilitydelegatortest", "abilitytoolabilitydelegatorteststatic"),
    ("actsGetAllWindowStagesTest", "actsGetAllWindowStagesTestStatic"),
    ("actsspecifiedprocess", "actsspecifiedprocessstatic"),
    ("actssystemapitest", "actssystemapiteststatic"),
    ("actsuiabilitycontext/actsmoveabilitytobackgroundtest",
     "actsuiabilitycontext/actsmoveabilitytobackgroundteststatic"),
    ("actsSetMissionWindowIconTest", "actssetmissionwindowiconteststatic"),
    ("actsabilityamstest/actsbacktocallerabilitywithresulttest",
     "actsabilityamstest/actsbacktocallerabilitywithresultteststatic"),
]


def _fail(msgs: list[str], msg: str) -> None:
    msgs.append(msg)


def check_list_modules(dyn: Path, sta: Path, msgs: list[str]) -> None:
    """动态 List 注册的每个模块，静态须有对应文件（允许 *Static* 文件名差异）。"""
    from pair_utils import normalize_module

    d_dir, s_dir = dyn_test_dir(dyn), sta_test_dir(sta)
    d_list = find_list_test(d_dir)
    if not d_list:
        return
    d_mods = parse_list_modules(d_list)
    s_list = find_list_test(s_dir)
    s_mods = parse_list_modules(s_list) if s_list else []
    s_norm = {normalize_module(m) for m in s_mods}
    # 静态目录已有文件也算覆盖（即使 List 命名不同）
    for f in s_dir.glob("*.ets"):
        if "List." in f.name:
            continue
        stem = f.name[: -len(".ets")] if f.name.endswith(".ets") else f.name
        s_norm.add(normalize_module(stem))
    for mod in d_mods:
        if normalize_module(mod) in s_norm:
            continue
        # 再扫一遍模糊文件
        key = normalize_module(mod)
        found = False
        for f in s_dir.glob("*.ets"):
            if key and key in normalize_module(f.stem):
                found = True
                break
        if not found:
            _fail(msgs, f"静态缺文件/List: 动态模块 '{mod}' 无对应静态用例文件")


def check_coverage(dyn: Path, sta: Path, msgs: list[str]) -> None:
    st = collect_pair_case_stats(dyn, sta)
    d_n, s_n = len(st["dyn_names"]), len(st["sta_names"])
    miss = st["dyn_missing"]
    only = st["static_only"]
    print(f"  用例: 动态={d_n} 静态={s_n} | 动态缺={len(miss)} 静态特有={len(only)}")
    if miss:
        sample = ", ".join(miss[:5])
        _fail(msgs, f"动态有、静态缺（须从动态补）样例: {sample}")
    # 条数相等不是目标；若静态 < 动态则一定有问题（已由 miss 覆盖）
    # 若静态特有为 0 且历史可能曾有 — 仅提示，不因「相等」报错
    if d_n == s_n and only:
        print(f"  提示: 条数碰巧相等，但仍有 {len(only)} 条静态特有（正确保留）")
    if d_n == s_n and not only and not miss:
        print("  提示: 条数相等 ≠ 同步完成标准；请确认未误删静态特有")


def check_baseline_no_drop(old: Path, new: Path, msgs: list[str]) -> None:
    """对比同步前后：归一化后旧有用例不得从新文件消失。"""
    old_names = list_it_names(read_text(old))
    new_names = list_it_names(read_text(new))
    # in old but not in new
    dropped = static_only_names(new_names, old_names)
    if dropped:
        sample = ", ".join(dropped[:8])
        _fail(msgs, f"同步后丢失用例({len(dropped)}): {sample}")
    if has_advanced_dialog(read_text(old)) and not has_advanced_dialog(read_text(new)):
        _fail(msgs, f"同步后丢失 advanced_dialog: {new}")


def verify_pair(dyn: Path, sta: Path, quiet: bool = False) -> list[str]:
    msgs: list[str] = []
    if not dyn.is_dir() or not sta.is_dir():
        return [f"路径无效: {dyn} / {sta}"]
    if not quiet:
        print(f"\n## {dyn.name} ↔ {sta.name}")
    check_list_modules(dyn, sta, msgs)
    check_coverage(dyn, sta, msgs)
    return msgs


def scan_runtime(root: Path) -> int:
    all_msgs: list[str] = []
    for d_rel, s_rel in DEFAULT_PAIRS:
        dyn, sta = root / d_rel, root / s_rel
        if not dyn.is_dir() or not sta.is_dir():
            print(f"\n## skip {d_rel} (missing)")
            continue
        all_msgs.extend(verify_pair(dyn, sta))
    if all_msgs:
        print("\n===== FAIL =====")
        for m in all_msgs:
            print(f"  - {m}")
        return 1
    print("\n===== PASS =====")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(description="动静态同步硬门禁")
    ap.add_argument("dyn_proj", nargs="?", help="动态工程根")
    ap.add_argument("sta_proj", nargs="?", help="静态工程根")
    ap.add_argument("--scan", help="ability_runtime 根目录，扫默认 9 对")
    ap.add_argument("--baseline", nargs=2, metavar=("OLD", "NEW"),
                    help="对比同步前后单文件，禁止丢用例/弹窗")
    args = ap.parse_args()

    if args.baseline:
        msgs: list[str] = []
        check_baseline_no_drop(Path(args.baseline[0]), Path(args.baseline[1]), msgs)
        for m in msgs:
            print(f"FAIL: {m}")
        return 1 if msgs else 0

    if args.scan:
        return scan_runtime(Path(args.scan))

    if not args.dyn_proj or not args.sta_proj:
        ap.print_help()
        return 2
    msgs = verify_pair(Path(args.dyn_proj), Path(args.sta_proj))
    for m in msgs:
        print(f"FAIL: {m}")
    return 1 if msgs else 0


if __name__ == "__main__":
    sys.exit(main())
