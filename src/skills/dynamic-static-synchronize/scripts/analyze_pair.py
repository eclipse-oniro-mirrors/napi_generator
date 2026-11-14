#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""分析动态/静态测试对差异（九项目经验：List 多文件 + 覆盖差 + 弹窗）。

用法：
  python3 analyze_pair.py <REPO>/ability/ability_runtime
  python3 analyze_pair.py <dyn_proj> <sta_proj>
"""
from __future__ import annotations

import argparse
import os
import re
import sys
from pathlib import Path

from pair_utils import collect_pair_case_stats, has_advanced_dialog, read_text
from verify_sync_guards import DEFAULT_PAIRS, verify_pair

DIFF_ASSERT = re.compile(
    r"expect\([^)]*\)\.assert[A-Za-z]+\s*\(\s*[^)]*\+\s*['\"]\s*['\"]"
)


def _assert_escape_count(proj: Path) -> int:
    cnt = 0
    for root, dirs, files in os.walk(proj):
        if any(x in root for x in ("oh_modules", "build", "node_modules", "hypium")):
            continue
        for f in files:
            if not f.endswith(".ets"):
                continue
            txt = read_text(Path(root) / f)
            cnt += len(DIFF_ASSERT.findall(txt))
    return cnt


def analyze(dyn: Path, sta: Path) -> list[str]:
    print(f"\n########## {dyn.name} vs {sta.name} ##########")
    st = collect_pair_case_stats(dyn, sta)
    print(f"  List 模块 动态={st['dyn_mods']} 静态={st['sta_mods']}")
    missing_mods = [m for m in st["dyn_mods"] if m not in st["sta_mods"]]
    if missing_mods:
        print(f"  ⚠ 静态 List 缺模块: {missing_mods}")
    print(
        f"  用例: 动态={len(st['dyn_names'])} 静态={len(st['sta_names'])} | "
        f"仅动态={len(st['dyn_missing'])} 仅静态={len(st['static_only'])}"
    )
    if st["dyn_missing"]:
        print(f"    仅动态样例: {st['dyn_missing'][:5]}")
    if st["static_only"]:
        print(f"    仅静态样例: {st['static_only'][:5]}")
    d_dlg = any(has_advanced_dialog(read_text(f)) for f in st["dyn_files"])
    s_dlg = any(has_advanced_dialog(read_text(f)) for f in st["sta_files"])
    print(f"  advanced_dialog: 动态={d_dlg} 静态={s_dlg}")
    if s_dlg and not d_dlg:
        print("    → 须 sync_advanced_dialog 补动态")
    print(f"  断言+''转义: 动态={_assert_escape_count(dyn)} 静态={_assert_escape_count(sta)}")
    msgs = verify_pair(dyn, sta, quiet=True)
    if msgs:
        print("  门禁违规:")
        for m in msgs:
            print(f"    - {m}")
    else:
        print("  门禁: PASS")
    return msgs


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("path_a")
    ap.add_argument("path_b", nargs="?")
    args = ap.parse_args()
    a, b = Path(args.path_a), Path(args.path_b) if args.path_b else None
    if b:
        return 1 if analyze(a, b) else 0
    root = a
    rc = 0
    for d_rel, s_rel in DEFAULT_PAIRS:
        dyn, sta = root / d_rel, root / s_rel
        if not dyn.is_dir() or not sta.is_dir():
            print(f"\n## skip {d_rel}")
            continue
        if analyze(dyn, sta):
            rc = 1
    return rc


if __name__ == "__main__":
    sys.exit(main())
