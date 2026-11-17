#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""需求1 升级提交前踩坑扫描（2026-09 req7/9/10 实锤）。

覆盖：
  1) 危险 assertFail（委托 scan_bad_assertions）
  2) Test.json module-name 与 ohosTest module.json5 name 不一致
  3) CommonEvent 等 IPC：const 名与字符串值同为 camelCase（门禁改名误伤字面量）
  4) 非 TestAbility 的 Hypium.hypiumTest（二次套件 mark blocked）
  5) 同 module 多 struct Index（OhosTestCompileArkTS Duplicate identifier）
  6) 同名 .ts/.ets 双份残留；module.json5 srcEntry/srcPath 仍指向 .ts（PR 43107）
  7) hvigor/oh-package modelVersion 仍为 6.0.0（XTS preprocess CI.HVIGOR.01）
  8) Ability 生命周期 `) {;` 笔误（req4/5/6 编译失败）
  9) subscribe 回调首参命名 err；createSubscriber().then 未 await/return
  10) Hypium @tc 注释被 wrap-join 砸扁（@tc.desc 与 @tc.type/it 同行 → TCNAME.01）
  11) .then(() => { if (err) } 在无 err 形参回调中使用 err（Cannot find name err）

用法：
  python3 scan_upgrade_pitfalls.py --diff upstream/master...HEAD
  python3 scan_upgrade_pitfalls.py <工程根...>
"""
from __future__ import annotations

import argparse
import re
import subprocess
import sys
from collections import defaultdict
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent
sys.path.insert(0, str(_SCRIPTS))
from scan_bad_assertions import scan_file as scan_assert_file  # noqa: E402

CONST_EQ_STR = re.compile(
    r"""const\s+([a-z][A-Za-z0-9]*)\s*=\s*['\"](\1)['\"]"""
)
IPC_HINT = re.compile(
    r"commonEvent|CommonEvent|publish\s*\(|subscribe\s*\(|createSubscriber",
    re.I,
)
HYPIUM_TEST_RE = re.compile(r"Hypium\.hypiumTest\s*\(")
STRUCT_INDEX_RE = re.compile(r"\bstruct\s+Index\b")
MODULE_NAME_RE = re.compile(r'"module-name"\s*:\s*"([^"]+)"')
NAME_RE = re.compile(r'"name"\s*:\s*"([^"]+)"')
SRC_ENTRY_TS_RE = re.compile(
    r'"(src(?:Entry|Path))"\s*:\s*"([^"]+\.ts)"'
)
SKIP_DIR_PARTS = frozenset(
    {"build", "oh_modules", "node_modules", ".git", ".hvigor"}
)

MODEL_VER_BAD_RE = re.compile(r'"modelVersion"\s*:\s*"6\.0\.0"')
BRACE_TYPO_RE = re.compile(r"\)\s*\{\s*;")  # onCreate() {;
SUBSCRIBE_CB_RE = re.compile(
    r"\.subscribe\s*\(\s*\w+\s*,\s*\(\s*(err)\s*(?::[^=)]+)?\s*,",
    re.M,
)
FLOATING_THEN_RE = re.compile(
    r"(?<!\bawait\s)(?<!return\s)createSubscriber\s*\([^;]*\)\s*\n?\s*\.then\s*\(",
    re.M,
)


def _git_diff_files(diff_range: str) -> list[Path]:
    out = subprocess.check_output(
        ["git", "diff", "--name-only", diff_range], text=True)
    return [Path(f) for f in out.splitlines() if f.strip()]


def _project_roots_from_files(files: list[Path]) -> set[Path]:
    roots: set[Path] = set()
    for fp in files:
        for parent in [fp] + list(fp.parents):
            if (parent / "Test.json").is_file() or (
                    parent / "build-profile.json5").is_file():
                roots.add(parent)
                break
    return roots


def scan_duplicate_hypium(fp: Path) -> list[str]:
    """非 TestAbility 文件调用 Hypium.hypiumTest → 易二次跑套件 mark blocked。"""
    if fp.suffix not in (".ets", ".ts"):
        return []
    # 仅允许 TestAbility.* 入口跑测
    if fp.name.startswith("TestAbility") or "TestAbility" in fp.parts:
        return []
    if "testrunner" in {p.lower() for p in fp.parts}:
        return []
    text = fp.read_text(encoding="utf-8", errors="replace")
    hits: list[str] = []
    for m in HYPIUM_TEST_RE.finditer(text):
        ln = text.count("\n", 0, m.start()) + 1
        hits.append(
            f"{fp}:{ln}: 非 TestAbility 调用 Hypium.hypiumTest；"
            f"beforeAll startAbility 加载该页会二次跑套件 → mark blocked"
        )
    return hits


def scan_duplicate_struct_index(module_root: Path) -> list[str]:
    """同 module 下多个 struct Index → OhosTestCompileArkTS Duplicate identifier。"""
    if not module_root.is_dir():
        return []
    hits_files: list[tuple[Path, int]] = []
    for fp in module_root.rglob("*.ets"):
        text = fp.read_text(encoding="utf-8", errors="replace")
        m = STRUCT_INDEX_RE.search(text)
        if m:
            ln = text.count("\n", 0, m.start()) + 1
            hits_files.append((fp, ln))
    if len(hits_files) < 2:
        return []
    detail = ", ".join(f"{fp}:{ln}" for fp, ln in hits_files[:6])
    return [
        f"{module_root}: 同模块 {len(hits_files)} 处 struct Index（{detail}）；"
        f"须改为唯一组件名，否则 OhosTestCompileArkTS Duplicate identifier（req7 CI）"
    ]


def scan_ipc_string_rename(fp: Path) -> list[str]:
    """const eventXxx = 'eventXxx' 且文件涉 CommonEvent → 疑似字面量被改名。"""
    if fp.suffix not in (".ets", ".ts"):
        return []
    text = fp.read_text(encoding="utf-8", errors="replace")
    if not IPC_HINT.search(text):
        return []
    hits: list[str] = []
    for m in CONST_EQ_STR.finditer(text):
        name = m.group(1)
        if name.startswith("event") or "Event" in name or "ACTS" in name.upper():
            ln = text.count("\n", 0, m.start()) + 1
            hits.append(
                f"{fp}:{ln}: IPC const 名与字符串同为 camelCase '{name}'；"
                f"G.NAM 只改标识符，字符串须保留原 Event_/协议值"
            )
    return hits


def _ohostest_module_name(proj: Path) -> str | None:
    mj = proj / "entry" / "src" / "ohosTest" / "module.json5"
    if not mj.is_file():
        return None
    text = mj.read_text(encoding="utf-8", errors="replace")
    m = NAME_RE.search(text)
    return m.group(1) if m else None


def scan_test_json_module(proj: Path) -> list[str]:
    """Test.json module-name 须与 ohosTest module.json5 name 一致。"""
    tj = proj / "Test.json"
    if not tj.is_file():
        return []
    ohostest = _ohostest_module_name(proj)
    if not ohostest:
        return []
    text = tj.read_text(encoding="utf-8", errors="replace")
    m = MODULE_NAME_RE.search(text)
    if not m:
        return []
    declared = m.group(1)
    if declared == ohostest:
        return []
    return [
        f"{tj}: module-name='{declared}' 但 ohosTest name='{ohostest}'；"
        f"aa test 会 Collected suite count 0（req9 LastExit 实锤）"
    ]


def _should_skip_path(p: Path) -> bool:
    return any(x in SKIP_DIR_PARTS for x in p.parts)


def scan_ts_ets_pairs(root: Path) -> list[str]:
    """同 basename 同时存在 .ts 与 .ets（不含 hvigorfile.ts）→ 升级残留。"""
    if not root.is_dir():
        return []
    bases: dict[str, set[str]] = defaultdict(set)
    for p in root.rglob("*"):
        if not p.is_file() or _should_skip_path(p):
            continue
        if p.name == "hvigorfile.ts":
            continue
        if p.suffix in (".ts", ".ets"):
            bases[str(p.with_suffix(""))].add(p.suffix[1:])
    hits: list[str] = []
    for base, suf in sorted(bases.items()):
        if suf >= {"ts", "ets"}:
            hits.append(
                f"{base}.ts: 与 .ets 双份并存；须删除 .ts（PR 43107 类问题）"
            )
    return hits


def scan_module_src_ts_stale(root: Path) -> list[str]:
    """module.json5 srcEntry/srcPath 仍为 .ts，但同路径 .ets 已存在。"""
    if not root.is_dir():
        return []
    hits: list[str] = []
    for mj in root.rglob("module.json5"):
        if _should_skip_path(mj):
            continue
        text = mj.read_text(encoding="utf-8", errors="replace")
        for m in SRC_ENTRY_TS_RE.finditer(text):
            ref = m.group(2)
            rel = ref.lstrip("./")
            ets = (mj.parent / rel).with_suffix(".ets")
            if ets.is_file():
                ln = text.count("\n", 0, m.start()) + 1
                hits.append(
                    f"{mj}:{ln}: {m.group(1)}='{ref}' 但已有 {ets.name}；"
                    f"须改为 .ets（PR 43107 类路径未同步）"
                )
    return hits


def scan_model_version(proj: Path) -> list[str]:
    """hvigor-config / oh-package modelVersion 6.0.0 → CI.HVIGOR.01。"""
    hits: list[str] = []
    for name in ("hvigor-config.json5", "oh-package.json5"):
        for fp in proj.rglob(name):
            if _should_skip_path(fp):
                continue
            try:
                body = fp.read_text(encoding="utf-8", errors="replace")
            except OSError:
                continue
            for m in MODEL_VER_BAD_RE.finditer(body):
                ln = body.count("\n", 0, m.start()) + 1
        hits.append(
                    f"{fp}:{ln}: modelVersion 为 6.0.0；须改为 26.0.0"
                    f"（XTS preprocess CI.HVIGOR.01，req4/5/6 实锤）"
                )
    return hits


def scan_brace_typo(fp: Path) -> list[str]:
    """生命周期 `) {;` 笔误会导致 ArkTS 编译失败。"""
    if fp.suffix not in (".ets", ".ts"):
        return []
    if _should_skip_path(fp):
        return []
    body = fp.read_text(encoding="utf-8", errors="replace")
    hits: list[str] = []
    for m in BRACE_TYPO_RE.finditer(body):
        ln = body.count("\n", 0, m.start()) + 1
        hits.append(f"{fp}:{ln}: 疑似 `) {{;` 笔误，须改为 `) {{`")
    return hits


def scan_subscribe_cb_err(fp: Path) -> list[str]:
    """subscribe 回调首参命名 err → ASYNC_TESTCASE.02 风险。"""
    if fp.suffix not in (".ets", ".ts"):
        return []
    if _should_skip_path(fp):
        return []
    body = fp.read_text(encoding="utf-8", errors="replace")
    hits: list[str] = []
    for m in SUBSCRIBE_CB_RE.finditer(body):
        ln = body.count("\n", 0, m.start()) + 1
        hits.append(
            f"{fp}:{ln}: subscribe 回调首参命名 err；建议 data/空参，"
            f"并避免 .error/.catch 空 done（ASYNC_TESTCASE.02）"
        )
    return hits


def scan_floating_then(fp: Path) -> list[str]:
    """createSubscriber().then 未 await/return → 浮动 Promise。"""
    if fp.suffix not in (".ets", ".ts"):
        return []
    if _should_skip_path(fp):
        return []
    body = fp.read_text(encoding="utf-8", errors="replace")
    hits: list[str] = []
    for m in FLOATING_THEN_RE.finditer(body):
        ln = body.count("\n", 0, m.start()) + 1
        hits.append(
            f"{fp}:{ln}: createSubscriber().then 未 await/return；"
            f"浮动 Promise 易导致用例时序/ASYNC 门禁问题"
        )
    return hits



SMASHED_TC_RE = re.compile(
    r"@tc\.desc\b[^\n]*@(?:tc\.type|tc\.size|tc\.level)\b"
    r"|@tc\.desc\b[^\n]*\*/\s*it\s*\("
)



THEN_ERR_UNDEF_RE = re.compile(
    r"\.then\s*\(\s*\(([^)]*)\)\s*(?::[^=)]+)?\s*=>\s*\{\s*\n\s*if\s*\(\s*err\s*\)",
    re.M,
)


def scan_then_err_undefined(fp: Path) -> list[str]:
    """Promise .then callback uses if (err) without err param."""
    if fp.suffix not in (".ets", ".ts"):
        return []
    if _should_skip_path(fp):
        return []
    body = fp.read_text(encoding="utf-8", errors="replace")
    hits: list[str] = []
    for m in THEN_ERR_UNDEF_RE.finditer(body):
        params = m.group(1)
        if re.search(r"\berr\b", params):
            continue
        ln = body.count("\n", 0, m.start()) + 1
        hits.append(
            f"{fp}:{ln}: .then callback has if (err) but no err param; "
            f"remove the if or use .catch / err-bearing callback"
        )
    return hits


def scan_smashed_tc_doc(fp: Path) -> list[str]:
    """@tc.desc 与 @tc.type/size/level 或 */ it( 被拼到同一行。

    wrap-join 误伤注释块会导致 XTS.CHECK.TCNAME.01。
    """
    if fp.suffix not in (".ets", ".ts"):
        return []
    if _should_skip_path(fp):
        return []
    body = fp.read_text(encoding="utf-8", errors="replace")
    hits: list[str] = []
    for i, ln in enumerate(body.splitlines(), 1):
        if SMASHED_TC_RE.search(ln):
            hits.append(
                f"{fp}:{i}: Hypium @tc 注释被 wrap-join 砸扁"
                f"（@tc.desc 与 @tc.type/it 同行）→ XTS.CHECK.TCNAME.01；"
                f"须恢复多行 @tc 块，禁止 join 注释行"
            )
    return hits


def _scan_source_file(fp: Path) -> list[str]:
    """Run all per-file pitfall scanners on one source path."""
    out: list[str] = []
    out.extend(scan_assert_file(fp))
    out.extend(scan_ipc_string_rename(fp))
    out.extend(scan_duplicate_hypium(fp))
    out.extend(scan_brace_typo(fp))
    out.extend(scan_subscribe_cb_err(fp))
    out.extend(scan_floating_then(fp))
    out.extend(scan_smashed_tc_doc(fp))
    out.extend(scan_then_err_undefined(fp))
    return out


def _scan_project_meta(proj: Path) -> list[str]:
    """Project-level pitfall scanners (Test.json / modelVersion / pairs)."""
    out: list[str] = []
    out.extend(scan_test_json_module(proj))
    out.extend(scan_model_version(proj))
    out.extend(scan_ts_ets_pairs(proj))
    out.extend(scan_module_src_ts_stale(proj))
    for sub in ("ohosTest", "main"):
        mod = proj / "entry" / "src" / sub / "ets"
        if mod.is_dir():
            out.extend(scan_duplicate_struct_index(mod))
    return out


def _collect_scan_inputs(
    paths: list[Path], diff: str | None,
) -> tuple[list[Path], set[Path]]:
    """Resolve file list and project roots from paths or git diff."""
    files: list[Path] = []
    projs: set[Path] = set()
    if diff:
        files = [fp for fp in _git_diff_files(diff) if fp.is_file()]
        return files, _project_roots_from_files(files)
    for raw in paths:
        p = Path(raw)
        if p.is_file():
            files.append(p)
        elif p.is_dir():
            projs.add(p)
            files.extend(list(p.rglob("*.ets")) + list(p.rglob("*.ts")))
    return files, projs


def _dedupe_hits(hits: list[str]) -> list[str]:
    seen: set[str] = set()
    out: list[str] = []
    for h in hits:
        if h not in seen:
            seen.add(h)
            out.append(h)
    return out


def scan_targets(paths: list[Path], diff: str | None) -> list[str]:
    hits: list[str] = []
    files, projs = _collect_scan_inputs(paths, diff)
    for fp in files:
        hits.extend(_scan_source_file(fp))
    for proj in sorted(projs):
        hits.extend(_scan_project_meta(proj))
    return _dedupe_hits(hits)


def main() -> int:
    ap = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("paths", nargs="*", help="工程/文件")
    ap.add_argument("--diff", help="git 范围，如 upstream/master...HEAD")
    args = ap.parse_args()
    if not args.paths and not args.diff:
        ap.error("请指定 paths 或 --diff")
    hits = scan_targets([Path(p) for p in args.paths], args.diff)
    if not hits:
        print(
            "[pitfall] ✓ assertFail / Test.json / IPC / 双份.ts / module 路径 "
            "未发现已知踩坑"
        )
        return 0
    print(f"[pitfall] ✗ 发现 {len(hits)} 处升级踩坑：")
    for h in hits[:50]:
        print(f"  {h}")
    if len(hits) > 50:
        print(f"  ... 另有 {len(hits) - 50} 处")
    return 1


if __name__ == "__main__":
    sys.exit(main())
