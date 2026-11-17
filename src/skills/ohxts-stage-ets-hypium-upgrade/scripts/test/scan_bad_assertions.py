#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""扫描用例中危险的 assertFail / 误补 done 模式（2026-09 req7～11 实锤）。

命中即应修复后再提交：
  1) beforeAll/afterEach/beforeEach 内无条件 expect().assertFail()
  2) try/catch 仅打日志后紧跟 expect().assertFail()
  3) 仅为过门禁在空 .catch 里插入的 done()（接口人已确认不必补）
  4) 非 catch 路径 assertFail 后紧邻 done()（req10 CallFunction_0700）

用法：
  python3 scan_bad_assertions.py <工程或文件...>
  python3 scan_bad_assertions.py --diff upstream/master...HEAD   # 在 git 仓内扫 PR 变更
"""
from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path

HOOK_RE = re.compile(
    r"\b(beforeAll|afterEach|beforeEach)\s*\(\s*(?:async\s*)?\([^)]*\)\s*=>\s*\{"
)
AFTER_CATCH_FAIL_RE = re.compile(
    r"\}\s*catch\s*\([^)]*\)\s*\{[^}]*\}\s*\n\s*expect\(\)\.assertFail\(\)"
)
EMPTY_CATCH_DONE_RE = re.compile(
    r"\.catch\(\s*\([^)]*\)\s*=>\s*\{\s*(?:done\(\)\s*;?\s*)+\}\s*\)"
)


def _pair_close(text: str, start: int) -> int:
    depth = 0
    j = start
    while j < len(text):
        c = text[j]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return j
        j += 1
    return j


def _assertfail_only_in_error_paths(body: str) -> bool:
    positions = [m.start() for m in re.finditer(r"expect\(\)\.assertFail\s*\(", body)]
    if not positions:
        return True
    spans: list[tuple[int, int]] = []
    for m in re.finditer(
            r"(?:\}\s*catch\s*\([^)]*\)\s*\{|\.catch\s*\([^)]*\)\s*=>\s*\{)", body):
        brace = body.find("{", m.start())
        if brace >= 0:
            spans.append((brace, _pair_close(body, brace)))
    return all(any(a <= p <= b for a, b in spans) for p in positions)


def scan_text(path: str, text: str) -> list[tuple[int, str]]:
    hits: list[tuple[int, str]] = []
    for m in HOOK_RE.finditer(text):
        start = text.find("{", m.start())
        if start < 0:
            continue
        body = text[start:_pair_close(text, start) + 1]
        if "expect().assertFail(" not in body.replace(" ", ""):
            continue
        if _assertfail_only_in_error_paths(body):
            continue
        ln = text.count("\n", 0, m.start()) + 1
        hits.append((ln, f"{m.group(1)} 内无条件 assertFail（整 suite 会全挂）"))
    for m in AFTER_CATCH_FAIL_RE.finditer(text):
        hits.append((text.count("\n", 0, m.end()) + 1,
                     "try/catch 后无条件 assertFail（成功路径误留）"))
    for m in EMPTY_CATCH_DONE_RE.finditer(text):
        hits.append((text.count("\n", 0, m.start()) + 1,
                     "空 .catch 仅 done()：接口人确认不必为门禁补 done，可删"))
    for m in re.finditer(r"expect\(\)\.assertFail\s*\(\s*\)", text):
        if _assertfail_only_in_error_paths_at(text, m.start()):
            continue
        if not re.search(r"\bdone\s*\(", text[m.end():m.end() + 160]):
            continue
        hits.append((text.count("\n", 0, m.start()) + 1,
                     "成功路径 assertFail 紧邻 done()（须删除）"))
    return [(ln, f"{path}:{ln}: {msg}") for ln, msg in hits]


def _assertfail_only_in_error_paths_at(text: str, pos: int) -> bool:
    for m in re.finditer(
            r"(?:\}\s*catch\s*\([^)]*\)\s*\{|\.catch\s*\([^)]*\)\s*=>\s*\{)", text):
        brace = text.find("{", m.start())
        if brace < 0:
            continue
        if brace <= pos <= _pair_close(text, brace):
            return True
    return False


def scan_file(fp: Path) -> list[str]:
    if fp.suffix not in (".ets", ".ts"):
        return []
    text = fp.read_text(encoding="utf-8", errors="replace")
    return [msg for _, msg in scan_text(str(fp), text)]


def collect_targets(args: argparse.Namespace) -> list[Path]:
    if args.diff:
        out = subprocess.check_output(
            ["git", "diff", "--name-only", args.diff], text=True)
        return [Path(f) for f in out.splitlines() if f.endswith((".ets", ".ts"))]
    paths: list[Path] = []
    for raw in args.paths:
        p = Path(raw)
        if p.is_file():
            paths.append(p)
        elif p.is_dir():
            paths.extend(p.rglob("*.ets"))
            paths.extend(p.rglob("*.ts"))
    return paths


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("paths", nargs="*", help="工程/文件路径")
    ap.add_argument("--diff", help="git 三/两点范围，如 upstream/master...HEAD")
    args = ap.parse_args()
    if not args.paths and not args.diff:
        ap.error("请指定 paths 或 --diff")
    hits: list[str] = []
    for fp in collect_targets(args):
        if fp.is_file():
            hits.extend(scan_file(fp))
    if not hits:
        print("[assert] ✓ 未发现 hook/成功路径 assertFail 或空 catch-done 误补")
        return 0
    print(f"[assert] ✗ 发现 {len(hits)} 处危险断言/误补 done：")
    for h in hits[:40]:
        print(f"  {h}")
    if len(hits) > 40:
        print(f"  ... 另有 {len(hits) - 40} 处")
    return 1


if __name__ == "__main__":
    sys.exit(main())
