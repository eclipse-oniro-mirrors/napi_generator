#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""跨 PR/分支文件去重检查（2026-09 req7～11 实锤：同类改动复制进多笔 PR）。

同一文件（或同一 HAP 工程）若已出现在更早的未合入兄弟分支 3-dot diff 中，
本批再提交会导致 CI 每笔 PR 重复跑同一批 HAP。

用法：
  python3 pr_overlap_check.py --worktree /path/to/req8-submit-08 \\
      --siblings-glob 'req*-submit-*' --wt-root /path/to/xts_acts_wt

  # 仅打印，不按 exit 1 拦截
  python3 pr_overlap_check.py --worktree <wt> --warn-only
"""
from __future__ import annotations

import argparse
import fnmatch
import os
import subprocess
import sys
from pathlib import Path


def git(cwd: str, *args: str) -> str:
    return subprocess.run(
        ["git", "-C", cwd, *args], capture_output=True, text=True
    ).stdout


def changed_files(wt: str, base: str) -> set[str]:
    out = git(wt, "diff", "--name-only", f"{base}...HEAD")
    files = {f for f in out.splitlines() if f}
    staged = git(wt, "diff", "--cached", "--name-only")
    files |= {f for f in staged.splitlines() if f}
    return files


def hap_root(path: str) -> str:
    """ability/.../<suite>/<proj>/... → 前 4 段作 HAP 粗粒度键。"""
    parts = path.split("/")
    return "/".join(parts[:4]) if len(parts) >= 4 else path


def list_sibling_wts(wt_root: Path, pattern: str, self_name: str) -> list[Path]:
    if not wt_root.is_dir():
        return []
    out: list[Path] = []
    for name in sorted(os.listdir(wt_root)):
        if name == self_name or not fnmatch.fnmatch(name, pattern):
            continue
        p = wt_root / name
        if (p / ".git").exists() or p.is_dir():
            out.append(p)
    return out


def branch_order_key(name: str) -> tuple:
    m = __import__("re").search(r"req(\d+)", name)
    return (int(m.group(1)) if m else 10**9, name)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--worktree", required=True)
    ap.add_argument("--base", default="upstream/master")
    ap.add_argument("--wt-root", default="/root/aiSkill/develop/xts_acts_wt")
    ap.add_argument("--siblings-glob", default="req*-submit-*")
    ap.add_argument("--warn-only", action="store_true")
    args = ap.parse_args()

    wt = os.path.abspath(args.worktree)
    self_name = Path(wt).name
    mine = changed_files(wt, args.base)
    if not mine:
        print("[overlap] 本分支相对 base 无变更，跳过")
        return 0

    siblings = list_sibling_wts(Path(args.wt_root), args.siblings_glob, self_name)
    # 只与「序号更早」的兄弟比（同文件归更早 PR）
    earlier = [s for s in siblings if branch_order_key(s.name) < branch_order_key(self_name)]
    file_hits: list[tuple[str, str]] = []
    hap_hits: list[tuple[str, str]] = []
    for sib in earlier:
        other = changed_files(str(sib), args.base)
        for f in sorted(mine & other):
            file_hits.append((f, sib.name))
        mine_haps = {hap_root(f) for f in mine}
        other_haps = {hap_root(f) for f in other}
        for h in sorted(mine_haps & other_haps):
            if not any(f.startswith(h + "/") or f == h for f, _ in file_hits):
                # 仅 HAP 粗粒度重叠（不同文件改同一工程）也报
                hap_hits.append((h, sib.name))

    if not file_hits and not hap_hits:
        print(f"[overlap] ✓ 与更早兄弟分支无文件/HAP 交叉（检查 {len(earlier)} 个）")
        return 0

    print(f"[overlap] ✗ 与更早 PR 分支存在交叉（应收敛到最早一笔）：")
    for f, br in file_hits[:30]:
        print(f"  FILE {f}  也在 {br}")
    for h, br in hap_hits[:20]:
        print(f"  HAP  {h}  也在 {br}")
    print(f"  文件交叉 {len(file_hits)}，HAP 交叉 {len(hap_hits)}")
    return 0 if args.warn_only else 1


if __name__ == "__main__":
    sys.exit(main())
