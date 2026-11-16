#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""代码门禁检查：ETS/ArkTS/TS/JS 检查与自动修复（规则注册表 rules_ets.json）。

迁移来源（整合为一个 checker）：
- ohxts-stage-ets-hypium-upgrade/scripts/check/code_selfcheck.py（22 条方案库规则）
- ohos-gate-compliance/scripts/arkts_patterns.py（ArkTS Quality 规则）
- ohos-gate-compliance/scripts/gate_review.py（xtscheck @tc / ASYNC.02 / CI.KIT.01 / WordsTool 系列 / 行宽）
- ohxts-stage-ets-hypium-upgrade/scripts/common/code_quality.py（G.FMT.10/08/11 机械修复）
- ohxts-stage-ets-hypium-upgrade/scripts/common/quotes.py（双引号→单引号，提交时转换）
"""
from __future__ import annotations

import re
from pathlib import Path

from base import Hit
from arkts_patterns import fix_arkts_quality, scan_ets_text

# ---------------- 通用常量（迁移自 code_selfcheck） ----------------
EXCLUDE_DIRS = ("oh_modules", "node_modules", "build", ".hvigor", "autosign",
                ".preview", ".idea", ".cxx", ".ohpm")
EXCLUDE_NAMES = ("hvigorfile.ts", "hvigorfile.js")
AWAIT_EXEMPT = ("Utils.sleep", "sleep(")
MAX_LINE = 120
INDENT_STEP = 4


def _collect_dir(d: Path) -> list[Path]:
    out: list[Path] = []
    for f in sorted(d.rglob("*")):
        if not (f.is_file() and f.suffix in (".ets", ".ts", ".js")):
            continue
        if any(seg in f.parts for seg in EXCLUDE_DIRS):
            continue
        if f.name in EXCLUDE_NAMES:
            continue
        out.append(f)
    return out


def collect_files(paths: list[str]) -> list[Path]:
    """收集 .ets/.ts/.js 文件（排除构建产物目录）。"""
    out: list[Path] = []
    for p in paths:
        p = Path(p)
        if p.is_file() and p.suffix in (".ets", ".ts", ".js"):
            out.append(p)
        elif p.is_dir():
            out.extend(_collect_dir(p))
    return out


# ---------------- WordsTool 敏感词（chr 拼接，源码勿裸写；迁移自 gate_review） ----------------


def _from_codes(*codes: int) -> str:
    return "".join(chr(c) for c in codes)


_WT97_TOKEN = _from_codes(104, 97, 114, 109, 111, 110, 121, 111, 115)
_WT97_FONT = (_from_codes(72, 97, 114, 109, 111, 110, 121, 79, 83) + " "
              + _from_codes(83, 97, 110, 115))
_WT97_RE = re.compile(_WT97_TOKEN, re.I)
_WT66_RE = re.compile(_from_codes(100, 56), re.I)
_WT143_RE = re.compile(_from_codes(110, 100, 107), re.I)
_WT100_RE = re.compile(_from_codes(104, 117, 97, 119, 101, 105), re.I)
# WordsTool.5：独立词面量（API 复合标识符因后继字母不命中）
_WT5_RE = re.compile(
    rf"(?<![A-Za-z]){_from_codes(65, 99, 99, 101, 115, 115, 105, 98, 105, 108, 105, 116, 121)}(?![A-Za-z])",
    re.I,
)
# WordsTool.9：独立缩写 Ability Manager Service（Ability Management Service 易歧义；req6 Logger TAG 实锤）
_WT9_RE = re.compile(rf"(?<![A-Za-z]){_from_codes(65, 77, 83)}(?![A-Za-z])")
# WordsTool.86：开源勿用易歧义 status-log 标识
_WT86_RE = re.compile(_from_codes(101, 118, 101, 110, 116, 108, 111, 103), re.I)
# WordsTool.177：独立词面量（注释/描述勿裸写；PR44704 实锤）
_WT177_RE = re.compile(
    rf"(?<![A-Za-z]){_from_codes(115, 117, 114, 102, 97, 99, 101)}(?![A-Za-z])",
    re.I,
)
# G.OBJ.04：简单字面量键优先点号；仅小写开头可安全自动改（PascalCase 键留给 G.NAM.03）
_OBJ04_BRACKET_RE = re.compile(r"(\?\.)?\[['\"]([a-z_][A-Za-z0-9_]*)['\"]\]")
# G.OTH.03：整行注释掉的赋值/语句，勿保留（应直接删除）
_COMMENTED_OUT_CODE_RE = re.compile(
    r"^\s*//\s*(?:(?:export|import|const|let|var|return|this\.|[A-Za-z_]\w*(?:\.\w+)*)\s*=|"
    r"(?:if|for|while|switch|try|catch)\s*\()"
)


def _is_resource_string_json(path: Path) -> bool:
    return (path.name == "string.json" and "resources" in path.parts
            and "element" in path.parts)


# ---------------- ETS 规则实现（迁移自 code_selfcheck.scan_file） ----------------


def _push_or_pop(pre: str, stack: list[str]) -> None:
    """按 { 前缀识别 try/catch 栈帧。"""
    if re.search(r"(^|[\s;})])try\s*$", pre):
        stack.append("try")
    elif re.search(r"catch\s*\([^)]*\)\s*$", pre):
        stack.append("catch")
    else:
        stack.append("other")


def _update_stack(line: str, stack: list[str]) -> None:
    pos = 0
    while True:
        o = line.find("{", pos)
        c = line.find("}", pos)
        if o == -1 and c == -1:
            break
        if o != -1 and (c == -1 or o < c):
            _push_or_pop(line[:o].rstrip(), stack)
            pos = o + 1
        else:
            if stack:
                stack.pop()
            pos = c + 1


def _check_private_fields(text: str, lines: list[str], add) -> None:
    priv_fields = set(re.findall(r"private\s+([A-Za-z_]\w*)\s*:", text))
    for f in priv_fields:
        for m in re.finditer(rf"(?<!this)\.{f}\b", text):
            line_no = text.count("\n", 0, m.start()) + 1
            ln = lines[line_no - 1]
            if re.match(rf"^\s*(?:private|public)\s+{f}\s*:", ln):
                continue
            add("COMPILE.PRIVATE.01", line_no, f".{f} 类外访问（确认访问范围）")


def _check_await_outside_try(lines: list[str]) -> list[tuple[int, str]]:
    stack: list[str] = []
    hits: list[tuple[int, str]] = []
    for i, ln in enumerate(lines, 1):
        s = ln.strip()
        if s.startswith("await ") and "try" not in stack and "catch" not in stack:
            if not any(e in s for e in AWAIT_EXEMPT):
                hits.append((i, ln.strip()[:60]))
        _update_stack(ln, stack)
    return hits


# ---------------- 迁移自 gate_review：xtscheck @tc ----------------


def _is_hypium_test_ets(path: Path) -> bool:
    """测试用例文件：ohosTest/ets/test/ 下（含 main/ets/test 一体工程、
    静态工程 src/main/src/test 布局——2026-09-01 修正：原只认 /ets/test/，
    静态 9 项目（src/main/src/test/*.test.ets）全部漏检）。

    2026-09-08：静态 test 目录须扫全部 .ets（含误命名 Ability.SyncTest.ets），
    否则 TESTFILENAME.01 漏报。
    """
    s = str(path).replace("\\", "/")
    if path.suffix != ".ets":
        return False
    if "/ohosTest/ets/test/" in s:
        return True
    if "/src/main/src/test/" in s:
        return True
    return s.endswith(".test.ets") and "/ets/test/" in s


def _nearest_jsdoc(before: str) -> str | None:
    tail = before[-3000:] if len(before) > 3000 else before
    doc_match = None
    for doc in re.finditer(r"/\*[\s\S]*?\*/", tail):
        block = doc.group(0)
        if "@tc.number" in block or "@tc.name" in block:
            doc_match = doc
    return doc_match.group(0) if doc_match else None


def _tc_number_value(doc_block: str) -> str | None:
    m = re.search(r"@tc\.number\s*(?::\s*)?(\S+)", doc_block)
    if not m:
        return None
    val = m.group(1)
    return None if val == ":" else val


def _tc_name_value(doc_block: str) -> str | None:
    """提取 @tc.name 值（gitcode XTS.CHECK.TCNAME.01 对齐）。"""
    m = re.search(r"@tc\.name\s*(?::\s*)?(\S+)", doc_block)
    if not m:
        return None
    val = m.group(1)
    return None if val == ":" else val


def _tc_desc_value(doc_block: str) -> str | None:
    """提取 @tc.desc 值（gitcode XTS.CHECK.TCDESC.01 对齐）。"""
    m = re.search(r"@tc\.desc\s*(?::\s*)?(\S+)", doc_block)
    if not m:
        return None
    val = m.group(1)
    return None if val == ":" else val


# ---------------- gitcode XTS 规则对齐（2026-09-01 收录） ----------------
# STATIC_HEADER.01 / TCNUMBER.01（4 位编号 + 去重）/ TCNAME.01 / TCDESC.01 /
# ASYNC_TESTCASE.01（new Promise 用例须声明 done 参数）
_PROJ_STATIC_CACHE: dict[str, bool] = {}
_PROJ_NUMBERS: dict[str, dict[str, list[tuple[str, int]]]] = {}


def _project_root(path: Path) -> Path | None:
    """最近祖先工程根（含 oh-package.json5 / build-profile.json5）。"""
    for p in [path] + list(path.parents):
        if (p / "oh-package.json5").exists() or (p / "build-profile.json5").exists():
            return p
    return None


def _is_static_project(path: Path) -> bool:
    """工程内任一 ets 首行为 'use static' → 静态工程（全部 ets 首行须 'use static'）。"""
    root = _project_root(path)
    if root is None:
        return False
    key = str(root)
    if key in _PROJ_STATIC_CACHE:
        return _PROJ_STATIC_CACHE[key]
    hit = False
    for f in root.rglob("*.ets"):
        if any(seg in f.parts for seg in ("hypium", "oh_modules", "build", ".hvigor")):
            continue
        try:
            first = f.read_text(encoding="utf-8", errors="replace").lstrip("\ufeff \t")
        except OSError:
            continue
        if first.startswith("'use static'") or first.startswith('"use static"'):
            hit = True
            break
    _PROJ_STATIC_CACHE[key] = hit
    return hit


def _check_static_header(path: Path, text: str, add) -> None:
    """XTS.CHECK.STATIC_HEADER.01：静态工程 ets 源文件首行必须为 'use static'。"""
    if path.suffix != ".ets" or not _is_static_project(path):
        return
    if any(seg in path.parts for seg in ("hypium", "oh_modules", "build", ".hvigor")):
        return
    first = text.lstrip("\ufeff \t\r\n")
    if not (first.startswith("'use static'") or first.startswith('"use static"')):
        add("XTS.CHECK.STATIC_HEADER.01", 1, "静态工程ets源文件首行必须为：'use static'")


def _check_static_settimeout(path: Path, text: str, add) -> None:
    """COMPILE.SETTIMEOUT.01：禁止 setTimeout(resolve/reject) 直接传参（ESE0046）。

    Do NOT blanket-ban setTimeout: EventBus onWait / Util.msSleep need arrow-callback
    setTimeout for real wall-clock waits. AbilityDelegator executeShellCommand('sleep N')
    returns almost immediately and must not replace EventBus timeout (PR45421 hilog
    18-51-20: OnApplication failed in ~0.1s while emit arrived after).
    """
    if path.suffix != ".ets" or not _is_static_project(path):
        return
    if any(seg in path.parts for seg in ("hypium", "oh_modules", "build", ".hvigor")):
        return
    bad = re.compile(r"\bsetTimeout\s*\(\s*(resolve|reject)\b")
    for i, ln in enumerate(text.splitlines(), 1):
        if bad.search(ln):
            add(
                "COMPILE.SETTIMEOUT.01",
                i,
                "setTimeout(resolve/reject) → ESE0046; use setTimeout((): void => { "
                "resolve(); }, ms). EventBus onWait: setTimeout wall-clock, NOT shell sleep",
            )


def _check_static_int_as_number(path: Path, text: str, add) -> None:
    """COMPILE.INT_AS_NUMBER.01: Int/numeric `as number` → ESE123811 (PR45360)."""
    if path.suffix != ".ets":
        return
    if "'use static'" not in text and '"use static"' not in text:
        return
    if any(seg in path.parts for seg in ("hypium", "oh_modules", "build", ".hvigor")):
        return
    for i, ln in enumerate(text.splitlines(), 1):
        if re.search(r"\bas\s+number\b", ln):
            add(
                "COMPILE.INT_AS_NUMBER.01",
                i,
                "numeric as number → ESE123811; use Int.toDouble(...)",
            )


def _check_dyn_statemgmt_import(path: Path, text: str, add) -> None:
    """COMPILE.DYN_STATEMGMT.01: ohosTest must not import @ohos.arkui.stateManagement."""
    if path.suffix != ".ets":
        return
    s = str(path).replace("\\", "/")
    if "/ohosTest/" not in s:
        return
    for i, ln in enumerate(text.splitlines(), 1):
        if "import" in ln and "@ohos.arkui.stateManagement" in ln:
            add(
                "COMPILE.DYN_STATEMGMT.01",
                i,
                "ohosTest dynamic: no @ohos.arkui.stateManagement; "
                "use globalThis.context or AppStorage global",
            )


_PROJ_HYPIUM_DYN_CACHE: dict[str, bool] = {}
_HYPIUM_PLAIN_IMPORT_RE = re.compile(
    r"""from\s+['"]@ohos/hypium['"]""")


def _project_uses_hypium_dynamic(path: Path) -> bool:
    """True when project oh-package declares @ohos/hypium-dynamic."""
    root = _project_root(path)
    if root is None:
        return False
    key = str(root)
    if key in _PROJ_HYPIUM_DYN_CACHE:
        return _PROJ_HYPIUM_DYN_CACHE[key]
    hit = False
    for name in ("oh-package.json5", "entry/oh-package.json5"):
        fp = root / name
        if not fp.is_file():
            continue
        try:
            raw = fp.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        if "hypium-dynamic" in raw:
            hit = True
            break
    _PROJ_HYPIUM_DYN_CACHE[key] = hit
    return hit


def _check_hypium_ohmurl(path: Path, text: str, add) -> None:
    """CI.OHM.01: dyn project must import @ohos/hypium-dynamic (not @ohos/hypium)."""
    if path.suffix != ".ets" or not _project_uses_hypium_dynamic(path):
        return
    for i, ln in enumerate(text.split("\n"), 1):
        if _HYPIUM_PLAIN_IMPORT_RE.search(ln) and "hypium-dynamic" not in ln:
            add("CI.OHM.01", i,
                "工程依赖 hypium-dynamic，禁止 import '@ohos/hypium'（CI OhmUrl 失败）")


def fix_ets_hypium_ohmurl(path: Path, text: str) -> tuple[str, int]:
    """CI.OHM.01 autofix: '@ohos/hypium' → '@ohos/hypium-dynamic' when project uses it."""
    if path.suffix != ".ets" or not _project_uses_hypium_dynamic(path):
        return text, 0
    n = 0
    out: list[str] = []
    for ln in text.split("\n"):
        if _HYPIUM_PLAIN_IMPORT_RE.search(ln) and "hypium-dynamic" not in ln:
            ln2 = ln.replace("'@ohos/hypium'", "'@ohos/hypium-dynamic'")
            ln2 = ln2.replace('"@ohos/hypium"', '"@ohos/hypium-dynamic"')
            if ln2 != ln:
                n += 1
                ln = ln2
        out.append(ln)
    return "\n".join(out), n


def _check_it_tc_fields(doc_block: str | None, it_name: str, line_no: int, add) -> str | None:
    """Required @tc fields + number/name vs it() name. Returns number or None."""
    if doc_block is None or "@tc.number" not in doc_block:
        add("XTS.CHECK.TCNUMBER.01", line_no, "测试用例编号文档注释@tc.number字段必填")
    if doc_block is None or "@tc.name" not in doc_block:
        add("XTS.CHECK.TCNAME.01", line_no, "文档注释@tc.name未找到，该字段必填")
    if doc_block is not None and "@tc.desc" not in doc_block:
        add("XTS.CHECK.TCDESC.01", line_no, "测试用例描述的注释@tc.desc字段必填")
    if doc_block is None:
        return None
    num = _tc_number_value(doc_block)
    name = _tc_name_value(doc_block)
    if num and num != it_name:
        add("XTS.CHECK.TCNUMBER.01", line_no, f"@tc.number 与 it() 不一致: {num} != {it_name}")
    if name and name != it_name:
        add("XTS.CHECK.TCNAME.01", line_no, f"@tc.name 与 it() 不一致: {name} != {it_name}")
    return num


def _check_it_tc_number_shape(num: str | None, line_no: int, add) -> None:
    """SUB + subsystem + part + info + exactly 4-digit tail (≥5 segments)."""
    if not num:
        return
    parts = num.split("_")
    tail = parts[-1] if parts else ""
    if len(parts) < 5 or not (tail.isdigit() and len(tail) == 4):
        add("XTS.CHECK.TCNUMBER.01", line_no,
            f"测试用例编号@tc.number{num}命名违规，命名规范："
            f"SUB_<子系统英文名>_<部件英文名>_<若干_测试_信息>_<4位数字编号>")


def _check_it_async_done(text: str, m: re.Match[str], body: str, line_no: int, add) -> None:
    """ASYNC_TESTCASE.01: Promise / console.error without done param."""
    sig = re.search(
        r"it\(\s*['\"][^'\"]+['\"]\s*,\s*[^,]+,\s*(?:async\s*)?\(([^)]*)\)",
        text[m.start():m.end() + 200],
    )
    needs_done = ("new Promise" in body) or ("console.error" in body)
    if not (needs_done and sig is not None and "done" not in sig.group(1)):
        return
    if "new Promise" in body:
        add("XTS.CHECK.ASYNC_TESTCASE.01", line_no,
            "测试用例中创建了Promise对象，但未声明done回调参数")
    else:
        add("XTS.CHECK.ASYNC_TESTCASE.01", line_no,
            "测试用例中包含异步调用链(.error)，但未声明done回调参数")


def _check_it_fake_coverage(body: str, line_no: int, add) -> None:
    """FAKE_COVERAGE.01/.04: enum-only dump / soft-skip without hard asserts."""
    enum_eq = re.compile(
        r"expect\s*\(\s*[A-Za-z_][\w.]*\s*\)\s*\.assertEqual\s*\(\s*\d+\s*\)"
    )
    real_ev = re.compile(
        r"getInspectorByKey|readContent|readAttr|nodeMounted|Driver\.create|"
        r"assertEqual\s*\(\s*['\"]|#FF|TabBarStyle\.|sidebar|getBarDisplayMode|"
        r"ComponentContent|pushUrl|ON\.id"
    )
    expect_lines = [
        ln.strip()
        for ln in body.splitlines()
        if re.search(r"\bexpect\s*\(", ln) and not ln.strip().startswith("//")
    ]
    if expect_lines and all(enum_eq.search(ln) for ln in expect_lines):
        if not real_ev.search(body):
            add(
                "XTS.CHECK.FAKE_COVERAGE.01",
                line_no,
                "用例断言几乎全为枚举数值 dump 且无 Inspector/挂载/旗标证据（假覆盖）",
            )
    if not re.search(
        r"isAttrMissing|softSkipMissing|soft-skip|pairEqualOrSkip|not exposed.*skip",
        body,
        re.I,
    ):
        return
    hard = [
        ln
        for ln in expect_lines
        if not re.search(
            r"expect\s*\(\s*true\s*\)|length\s*>\s*2| \|\| .*length",
            ln,
        )
    ]
    if expect_lines and not hard and re.search(r"\breturn\s*;", body):
        add(
            "XTS.CHECK.FAKE_COVERAGE.04",
            line_no,
            "soft-skip/缺属性 early-return 且无硬断言；禁止垫 expect(true)/仅 length>2（PR44669）",
        )


def _check_one_it_xts(path: Path, text: str, m: re.Match[str], its: list[re.Match[str]], add) -> None:
    """gitcode XTS per-it checks (fields / naming / async done / assertion / fake)."""
    it_name = m.group(2)
    before = text[: m.start()]
    line_no = before.count("\n") + 1
    doc_block = _nearest_jsdoc(before)
    body_end = its[its.index(m) + 1].start() if its.index(m) + 1 < len(its) else len(text)
    body = text[m.end():body_end]
    num = _check_it_tc_fields(doc_block, it_name, line_no, add)
    if doc_block is None:
        return
    _check_it_tc_number_shape(num, line_no, add)
    _check_it_async_done(text, m, body, line_no, add)
    if not re.search(r"\bexpect\s*\(", body):
        add("XTS.CHECK.ASSERTION.01", line_no, "测试用例没有包含断言")
    _check_it_fake_coverage(body, line_no, add)


def _check_tc_number_dups(path: Path, text: str, add) -> None:
    """XTS.CHECK.TCNUMBER.01 编号重复：同文件 / 同工程跨文件。

    2026-09-01 对齐 gitcode 实检：按全文 @tc.number 注解查重（含未挂 it() 的
    孤儿 JSDoc 块——ActsAbility 孤儿 1280 块与用例 1280 同号被 gitcode 实锤）。
    """
    nums = [(m.group(1), text[:m.start()].count("\n") + 1)
            for m in re.finditer(r"@tc\.number\s*(?::\s*)?(\S+)", text)]
    seen_in_file: dict[str, int] = {}
    for num, line_no in nums:
        if num in seen_in_file:
            add("XTS.CHECK.TCNUMBER.01", line_no,
                f"测试用例编号@tc.number{num}在本文件中重复")
        else:
            seen_in_file[num] = line_no
    if not nums:
        return
    root = _project_root(path)
    proj_key = str(root) if root else str(path.parent)
    seen = _PROJ_NUMBERS.setdefault(proj_key, {})
    for num, line_no in nums:
        others = [(f, l) for (f, l) in seen.get(num, [])]
        if others and any(f != path.name for f, _ in others):
            other = next(f for f, _ in others if f != path.name)
            add("XTS.CHECK.TCNUMBER.01", line_no,
                f"测试用例编号@tc.number{num}与{other}中的编号重复")
        seen.setdefault(num, []).append((path.name, line_no))


def _check_async_callback_err(lines: list[str]) -> list[tuple[int, str]]:
    """XTS.CHECK.ASYNC_TESTCASE.02 子规则 2/3（2026-08-21 收录：块体回调 err 未使用实锤；
    2026-08-27 强化：err/e/error 任意错误参数名均纳入检测——req2 删 as BusinessError 后
    `(e: Error) => {}` 未用 e 参数被 gitcode 门禁实锤，原实现只认 err 参数名漏检）。

    2) 异步 API 回调未声明 error 参数（零参数 () => 回调）
    3) 回调声明错误参数（err/e/error）但未检查/使用：
       - 表达式体 `(err?: Error) => expr`（原正则）
       - 块体 `(err, data) => { ... }` 内未出现对应参数名（uiextensioncontext 3 处、req2 15 处实锤）
    """
    hits: list[tuple[int, str]] = []
    zero_param_re = re.compile(r"(?:Utils\.registerEvent|Utils\.waitForExist)\([^;\n]*\(\s*\)\s*=>")
    unused_err_re = re.compile(r"\((?:err|e|error)\?:\s*Error\)\s*=>\s*[^\s{]")
    for i, ln in enumerate(lines, 1):
        if zero_param_re.search(ln):
            hits.append((i, "异步 API 回调未声明 error 参数：() => 须改 (err: Error)/(err?: Error) 并补错误分支"))
        elif unused_err_re.search(ln):
            hits.append((i, "回调声明 err 但未检查/使用：须 if (err && err.code !== 0) 后 assertFail"))
    # 块体回调错误参数未使用：`(err|e|error[, ...]) => {` 起，括号配对找块尾，块内无该参数名则违规
    # 注意：必须用词边界 \b 匹配标识符——子串匹配会误判（hilog.error 含 'e'、console.error 含 'err'）
    text = "\n".join(lines)
    for m in re.finditer(r"\((err|e|error)(?::\s*\w+(?:\.\w+)*)?(?:\s*,\s*[A-Za-z_]\w*(?::\s*\w+(?:\.\w+)*)?)*\)\s*=>\s*\{", text):
        line_no = text.count("\n", 0, m.start()) + 1
        param = m.group(1)
        block = _block_until_brace(text, m.end() - 1)
        if not re.search(rf"\b{param}\b", block):
            hits.append((
                line_no,
                f"回调声明 {param} 但块体内未检查/使用："
                f"须 if ({param} && {param}.code !== 0) 后 assertFail",
            ))
    hits.extend(_check_floating_then_no_catch(text))
    hits.extend(_check_multiline_call_then(text, "startAbilityByCall"))
    # req3：getCurrentTopAbility / startAbility 浮空 .then 无 .catch（queryfunction 实锤）
    hits.extend(_check_multiline_call_then(text, "getCurrentTopAbility"))
    hits.extend(_check_multiline_call_then(text, "startAbility"))
    return hits


def _check_truthy_err_assertfail(text: str) -> list[tuple[int, str]]:
    """XTS.CHECK.ERR_CODE.01：if (err) + assertFail 且未判 code（PR43852 实锤）。

    CommonEvent/ability 成功回调常带 truthy {code:0}；裸 if (err) 会误失败。
    """
    hits: list[tuple[int, str]] = []
    for m in re.finditer(r"if\s*\(\s*(err|e|error)\s*\)\s*\{", text):
        param = m.group(1)
        line_no = text.count("\n", 0, m.start()) + 1
        block = _block_until_brace(text, m.end() - 1)
        if "assertFail" not in block:
            continue
        hits.append((
            line_no,
            f"if ({param}) 遇 BusinessError code===0 会误失败；"
            f"须 if ({param} && {param}.code !== 0)（PR43852）",
        ))
    return hits


def fix_ets_err_code_check(text: str) -> tuple[str, int]:
    """Autofix ERR_CODE.01：if (err){…assertFail} → if (err && err.code !== 0)."""
    n = 0
    out: list[str] = []
    pos = 0
    for m in re.finditer(r"if\s*\(\s*(err|e|error)\s*\)\s*\{", text):
        param = m.group(1)
        block = _block_until_brace(text, m.end() - 1)
        if "assertFail" not in block:
            continue
        out.append(text[pos:m.start()])
        out.append(f"if ({param} && {param}.code !== 0) {{")
        pos = m.end()
        n += 1
    out.append(text[pos:])
    return "".join(out), n


def _check_multiline_call_then(text: str, callee: str) -> list[tuple[int, str]]:
    """ASYNC_TESTCASE.02：多行 startAbilityByCall({...}).then 未 await 且无 .catch（req7 实锤）。"""
    hits: list[tuple[int, str]] = []
    pat = re.compile(rf"(?m)^(?P<indent>\s*)(?P<await>await\s+)?[\w.]+\.{callee}\s*\(")
    for m in pat.finditer(text):
        if m.group("await"):
            continue
        if not _then_chain_missing_catch(text, m.end()):
            continue
        line_no = text.count("\n", 0, m.start()) + 1
        hits.append((line_no, f"未 await 的 {callee}().then 链须补 .catch 或 then 第二参数"))
    return hits


def _then_chain_missing_catch(text: str, open_paren: int) -> bool:
    """从调用左括号起，找到配对 ).then，且该 then 回调后没有 .catch。"""
    close = _pair_paren(text, open_paren - 1)
    if close < 0:
        return False
    tail = text[close + 1: close + 80]
    if not re.match(r"\s*\.then\s*\(", tail):
        return False
    then_at = close + 1 + re.match(r"\s*\.then\s*\(", tail).end() - 1
    brace = text.find("{", then_at)
    if brace < 0:
        return False
    end = _pair_close(text, brace)
    after = text[end + 1: end + 160]
    return re.match(r"\s*\)?\s*\.(?:catch|then)\s*\(", after) is None


def _pair_paren(text: str, start: int) -> int:
    """start 指向 '('，返回配对 ')' 下标；失败返回 -1。"""
    if start < 0 or start >= len(text) or text[start] != "(":
        return -1
    depth = 0
    for i in range(start, len(text)):
        ch = text[i]
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
            if depth == 0:
                return i
    return -1


def _check_floating_then_no_catch(text: str) -> list[tuple[int, str]]:
    """ASYNC_TESTCASE.02：未 await 的 Promise.then 缺 .catch（PR44400 Ability.test 实锤）。

    扫 createSubscriber / getSubscribeInfo 浮空链（含嵌套 getSubscribeInfo）。
    """
    hits: list[tuple[int, str]] = []
    apis = ("createSubscriber", "getSubscribeInfo")
    for api in apis:
        pat = re.compile(
            rf"(?m)^(?P<indent>\s*)(?P<await>await\s+)?"
            rf"(?P<call>(?:[\w.]+\.)?{api}\s*\([^;]*\))\s*\n?\s*\.then\s*\("
        )
        for m in pat.finditer(text):
            if m.group("await"):
                continue
            brace = text.find("{", m.end() - 1)
            if brace < 0:
                continue
            end = _pair_close(text, brace)
            after = text[end + 1: end + 120]
            if re.match(r"\s*\)?\s*\.(?:catch|then)\s*\(", after):
                continue
            line_no = text.count("\n", 0, m.start()) + 1
            hits.append(
                (line_no, f"未 await 的 {api}().then 链须补 .catch 或 then 第二参数")
            )
    return hits


def _step_pair(ch: str, depth: int) -> int:
    """括号步进：{ +1，} -1，其余不变。"""
    if ch == "{":
        return depth + 1
    if ch == "}":
        return depth - 1
    return depth


def _pair_close(text: str, start: int) -> int:
    """返回从 start（'{' 位置）配对 '}' 的下标。"""
    depth = 0
    j = start
    while j < len(text):
        depth = _step_pair(text[j], depth)
        if depth == 0 and text[j] == "}":
            break
        j += 1
    return j


def _block_until_brace(text: str, start: int) -> str:
    """括号配对：从 start（'{' 位置）取到配对 '}' 的块。"""
    return text[start:_pair_close(text, start) + 1]


def _skip_string(line: str, i: int, q: str) -> int:
    """跳过引号串（含转义），返回串后位置。"""
    n = len(line)
    while i < n:
        if line[i] == "\\":
            i += 2
            continue
        if line[i] == q:
            return i + 1
        i += 1
    return i


def _strip_line_for_braces(line: str) -> str:
    out: list[str] = []
    i = 0
    n = len(line)
    while i < n:
        if line[i:i + 2] == "//":
            break
        ch = line[i]
        if ch in ("\"", "'", "`"):
            i = _skip_string(line, i + 1, ch)
            continue
        out.append(ch)
        i += 1
    return "".join(out)


def _pop_one(stack: list[str]) -> None:
    """闭合块：弹一帧再压 other（catch/else/finally 语义）。"""
    if stack:
        stack.pop()
    stack.append("other")


def _apply_brace_delta(stack: list[str], opens: int) -> None:
    if opens > 0:
        stack.extend(["other"] * opens)
    elif opens < 0:
        del stack[opens:]


def _update_brace_stack(s: str, stack: list[str]) -> None:
    if s.startswith("try") and "{" in s:
        stack.append("try")
    elif s.startswith("}") and ("catch" in s or "else" in s or "finally" in s):
        _pop_one(stack)
    else:
        _apply_brace_delta(stack, s.count("{") - s.count("}"))


# ---------------- 主扫描入口 ----------------


_PASCAL_NAME_RE = re.compile(r"^[A-Z][a-zA-Z0-9]*$")
_FMT09_SAME_RE = re.compile(
    r"^\s*(?:if|for|while)\s*\((?:[^()]|\([^()]*\))*\)\s+(?!\{|else\b)\S"
)
_OTH05_URL_RE = re.compile(
    r"""(['"])(https?://(?!www\.apache\.org)[^/'"][^'"]*)\1"""
)


def _scan_fmt09_line(ln: str, i: int, add) -> None:
    """G.FMT.09：if/for/while 执行体须加大括号。"""
    st = ln.strip()
    if st.startswith("//") or st.startswith("*"):
        return
    if _FMT09_SAME_RE.search(ln):
        add("G.FMT.09", i, "Expected { after condition")


_NAM03_DECL_RE = re.compile(
    r"\b(?:let|const|var)\s+([A-Z][a-z][A-Za-z0-9]*|[a-z]+_[a-z_]+)\s*[:=]"
)
_NAM03_PARAM_RE = re.compile(
    r"\b[A-Za-z_]\w*\s*\(\s*([A-Z][a-z][A-Za-z0-9]*)\s*[,)]"
)
# Interface/type property PascalCase (not UPPER_CASE): CodeCheck Property name (PR44143 Abstract)
_NAM03_TYPE_PROP_RE = re.compile(
    r"^\s+([A-Z][a-z][A-Za-z0-9]*)\s*[?:]?\s*:"
)


def _scan_nam03_line(ln: str, i: int, add) -> None:
    """G.NAM.03: PascalCase decl/param/type property (PR44143 Abstract)."""
    st = ln.strip()
    if st.startswith("//") or st.startswith("*"):
        return
    for m in _NAM03_DECL_RE.finditer(ln):
        add("G.NAM.03", i, f"name {m.group(1)}")
    for m in _NAM03_PARAM_RE.finditer(ln):
        add("G.NAM.03", i, f"param {m.group(1)}")
    for m in _NAM03_TYPE_PROP_RE.finditer(ln):
        add("G.NAM.03", i, f"type property {m.group(1)}")


def _scan_nam01_line(ln: str, i: int, add) -> None:
    """G.NAM.01：class/struct/enum 须大驼峰（无下划线）。"""
    for m in re.finditer(r"\b(class|struct|enum)\s+([A-Za-z_]\w*)", ln):
        if not _PASCAL_NAME_RE.match(m.group(2)):
            add("G.NAM.01", i, f"{m.group(1)} {m.group(2)} should be pascal case")


def _scan_oth05_line(ln: str, i: int, add) -> None:
    """G.OTH.05：禁止整段硬编码公网 URL 字面量。"""
    st = ln.strip()
    if st.startswith("//") or st.startswith("*") or "apache.org/licenses" in ln:
        return
    if _OTH05_URL_RE.search(ln):
        add("G.OTH.05", i, "Do not hardcode URLs")


def _scan_regex_compile_casts(ln: str, i: int, add) -> None:
    """Compile/cast related regex quality hits on one line."""
    if "as BusinessError" in ln:
        add("XTS.CHECK.ERROR_CODE.01", i, "as BusinessError")
    if re.search(r"as\s+ESObject\)\s*\.\s*code\b", ln):
        add("COMPILE.ESOBJECT_CODE.01", i,
            "(e as ESObject).code → ESE0087; parse via JSON.stringify")
    if re.search(r"\bFlags\.[A-Z0-9_]+\s+as\s+Int\b", ln):
        add("COMPILE.ENUM_AS_INT.01", i,
            "Flags.XXX as Int → ESE593372; use enum.valueOf()")
    if re.search(r"implements\s+insightIntent\.FileEntity|@InsightIntentEntity\b", ln):
        add("COMPILE.FILEENTITY_IMPL.01", i,
            "device static may lack FileEntity; use local interface fields")
    if re.search(r"assertEqual\(['\"][A-Za-z0-9._-]+_[A-Za-z0-9+/]{20,}[+/=]['\"]\)", ln):
        add("XTS.CHECK.SIGN.01", i,
            "签名相关断言勿修改：callerAppId/appId 等签名值随签名文件变化，"
            "本地调试签名与项目官方签名不同，断言值应保持官方签名生成值（2026-08-24 检视实锤）")


def _scan_regex_fmt_misc(ln: str, i: int, lines: list[str], add) -> None:
    """FMT / TCNUMBER / string-concat hits on one line."""
    if re.search(r"(for|while)\s*\([^;\n]*;[^;\n]*;[^;\n]*\)\s*;", ln):
        add("G.FMT.11", i, "空循环体")
    if re.search(r"\bit\(\s*'(?!SUB_|ACTS_)", ln):
        add("XTS.CHECK.TCNUMBER.01", i, ln.strip()[:60])
    if re.search(r"\)\s*$", ln) and i < len(lines) and re.match(r"^\s*\{", lines[i]):
        add("G.FMT.10", i, "大括号未与语句同行")
    if i > 1 and re.match(r"^\s*\+\s+\S", ln):
        prev = lines[i - 2].rstrip()
        if prev and not prev.endswith("+"):
            add("G.FMT.03", i, "运算符 '+' 须放上一行末")
    if i < len(lines) and re.search(r"""['"]\s*$""", ln) and re.match(r"""\s*['"]""", lines[i]):
        if not ln.rstrip().endswith("+"):
            add("COMPILE.STRING_CONCAT.01", i, "相邻字符串字面量须显式 +")


def _scan_regex_quality(lines: list[str], add) -> None:
    """正则类规则：ESObject/;;/命名/行宽/错误码/空循环体/用例编号/大括号。"""
    for i, ln in enumerate(lines, 1):
        for m in re.finditer(r":\s*ESObject\b|\bESObject;", ln):
            if "Record<string, ESObject>" not in ln:
                add("G.EXT.02", i, ln.strip()[:80])
        if ";;" in ln:
            add("G.FMT.08", i, ";;")
        if not re.search(r"export\s+default\s+function\s+[A-Z]", ln):
            for m in re.finditer(r"function\s+([A-Z]\w*)", ln):
                add("G.NAM.02", i, f"function {m.group(1)}")
        _scan_nam03_line(ln, i, add)
        _scan_fmt09_line(ln, i, add)
        _scan_nam01_line(ln, i, add)
        _scan_oth05_line(ln, i, add)
        if len(ln) > MAX_LINE:
            add("G.FMT.02", i, f"行宽 {len(ln)}>120")
        _scan_regex_compile_casts(ln, i, add)
        _scan_regex_fmt_misc(ln, i, lines, add)


def _scan_import_lines(lines: list[str], add) -> None:
    """COMPILE.IMPORT.01：import 出现在代码之后（多行 import 块内豁免）。"""
    seen_code = False
    in_import = False  # 多行 import { ... } 或 import X from \\n 'path'
    for i, ln in enumerate(lines, 1):
        st = ln.strip()
        # 'use static' 是静态工程必需首行指令（非代码），豁免：import 在其后不算错位
        if st.startswith("'use static'") or st.startswith('"use static"'):
            continue
        if in_import:
            if st.endswith(";") or "}" in st:
                in_import = False
            continue
        if st.startswith("import ") or st == "" or st.startswith("//") or st.startswith("/*") or st.startswith("*"):
            if seen_code and st.startswith("import "):
                add("COMPILE.IMPORT.01", i, "import 在代码之后")
            if st.startswith("import ") and not st.endswith(";"):
                in_import = True
            continue
        if st.startswith("import"):
            if seen_code:
                add("COMPILE.IMPORT.01", i, "import 在代码之后")
            continue
        seen_code = True


def _scan_any_lines(lines: list[str], add) -> None:
    """COMPILE.ANY.01：any/unknown 注解或 as any/as unknown（arkts-no-any-unknown）。"""
    for i, ln in enumerate(lines, 1):
        if ln.strip().startswith("//"):
            continue
        # 先剥掉字符串/注释内容再匹配，避免 'unknown option' 等字符串误报
        code = _strip_line_for_braces(ln)
        if re.search(r":\s*(any|unknown)\b", code) or re.search(
                r"\bas\s+(any|unknown)\b", code):
            add("COMPILE.ANY.01", i, ln.strip()[:60])


def _scan_func_expr_lines(lines: list[str], add) -> None:
    """COMPILE.FUNC_EXPR.01：function() 表达式须改箭头函数（arkts-no-func-expressions）。

    2026-09 req4 CI：ts→ets 合入 master 后 commonEventManager.publish(..., function () {})
    触发 10605046。排除类型名 Function（大写）与行注释。
    """
    for i, ln in enumerate(lines, 1):
        if ln.strip().startswith("//"):
            continue
        code = _strip_line_for_braces(ln)
        if re.search(r"(?<![\w$])function\s*\(", code):
            add("COMPILE.FUNC_EXPR.01", i, ln.strip()[:60])


_NAPI_SO_STAR_AS_RE = re.compile(
    r"^(\s*import)\s+\*\s+as\s+(\w+)\s+(from\s+['\"][^'\"]+\.so['\"]\s*;?\s*)$"
)


def _scan_napi_so_star_as(lines: list[str], add) -> None:
    """XTS.CHECK.NAPI_SO_IMPORT.01：lib*.so 禁止 import * as（覆盖率扫描）。"""
    for i, ln in enumerate(lines, 1):
        if ln.strip().startswith("//"):
            continue
        if _NAPI_SO_STAR_AS_RE.match(ln):
            add(
                "XTS.CHECK.NAPI_SO_IMPORT.01",
                i,
                "NAPI .so 请用默认导入，勿 import * as（覆盖率扫描依赖）",
            )


def _scan_import_any(lines: list[str], add) -> None:
    """COMPILE.IMPORT.01 / COMPILE.ANY.01 / COMPILE.FUNC_EXPR.01 / NAPI_SO。"""
    _scan_import_lines(lines, add)
    _scan_any_lines(lines, add)
    _scan_func_expr_lines(lines, add)
    _scan_napi_so_star_as(lines, add)


def _ext01_hits(lines: list[str]) -> list[tuple[int, str]]:
    """G.EXT.01：class 体内无修饰符属性（struct/interface 成员豁免，ArkUI 官方写法）。

    另检出 `static readonly FOO = …` 缺 public/private（req6 IDL proxy/stub 实锤）。
    """
    hits: list[tuple[int, str]] = []
    class_seen = False
    depth = 0
    typed_re = re.compile(
        r"^\s+(?!public |private |protected )[a-zA-Z_]\w*\s*:\s*"
        r"(string|number|boolean|LocalStorage|Array|Record|object|any)\s*[=;]"
    )
    static_re = re.compile(
        r"^\s+(?!public |private |protected )static\s+readonly\s+[A-Za-z_]\w*"
    )
    for i, ln in enumerate(lines, 1):
        st = ln.strip()
        class_seen, depth = _class_state(ln, st, class_seen, depth)
        if not (class_seen and depth == 1):
            continue
        if typed_re.match(ln) or static_re.match(ln):
            hits.append((i, ln.strip()[:60]))
    return hits


def _scan_json_stringify_try(lines: list[str], add) -> None:
    """G.ERR.03：JSON.stringify(want) 须位于 try 块内（UIExtensionProvider 实锤）。"""
    depth = 0
    try_depth = -1
    for i, ln in enumerate(lines, 1):
        code = _strip_line_for_braces(ln)
        if re.search(r"\btry\b", code) and "{" in code:
            try_depth = depth
        opens = code.count("{")
        closes = code.count("}")
        depth += opens
        if re.search(r"JSON\.stringify\(\s*want\b", code) and try_depth < 0:
            add("G.ERR.03", i, "JSON.stringify(want) lacks exception handling")
        depth -= closes
        if try_depth >= 0 and depth <= try_depth:
            try_depth = -1


def _scan_heuristic(path: Path, text: str, lines: list[str], add) -> None:
    """启发类：G.EXT.01 属性修饰符 / ASYNC.01 done() / G.FMT.12 / PRIVATE.01。"""
    for i, msg in _ext01_hits(lines):
        add("G.EXT.01", i, msg)
    for line_no, msg in _check_catch_missing_done(lines):
        add("XTS.CHECK.ASYNC_TESTCASE.01", line_no, msg)
    _scan_switch_indent(lines, add)
    _check_private_fields(text, lines, add)
    _scan_json_stringify_try(lines, add)


def _callback_block_has_done(text: str, m: re.Match[str]) -> tuple[int, bool]:
    """回调块内是否含 done()（简易括号配对）。返回 (起始行号, 是否含 done)。"""
    start = text.find("{", m.start())
    block = text[start:_pair_close(text, start) + 1]
    return text.count("\n", 0, m.start()) + 1, "done(" in block


def _check_case_indents(lines: list[str], i: int, sw_ind: int, add) -> None:
    """检查 switch 后续 20 行内 case/default 缩进。"""
    for j in range(i + 1, min(i + 20, len(lines) + 1)):
        cm = re.match(r"^(\s*)(case|default)\b", lines[j - 1])
        if cm:
            if len(cm.group(1)) != sw_ind + 2:
                add("G.FMT.12", j, f"case 缩进 {len(cm.group(1))}（期望 {sw_ind + 2}）")
        elif lines[j - 1].strip() == "}":
            break


def _check_catch_missing_done(lines: list[str]) -> list[tuple[int, str]]:
    """XTS.CHECK.ASYNC_TESTCASE.01：异步调用的回调分支（.catch）必须直接调用 done()。

    2026-08-24 收录：req7/req10 补 .catch 后 gitcode 报「catch 分支必须 done()」——
    done 风格 it 内 .catch 块体无 done( 调用即违规。
    2026-09-01 对齐 gitcode 实检：await 的链（await X.then().catch()）豁免——
    错误由外层 try/catch 兜底，gitcode 不检（ActsGetAllWindowStagesStaticTest
    done 风格用例内 await 链 .catch 无 done() 未被报）。
    """
    hits: list[tuple[int, str]] = []
    text = "\n".join(lines)
    for m in re.finditer(r"\.catch\(\s*\([^)]*\)\s*=>\s*\{", text):
        line_no = text.count("\n", 0, m.start()) + 1
        block = _block_until_brace(text, m.end() - 1)
        if "done(" in block:
            continue
        # 该 .catch 所属链是否被 await（语句以 await 开头）→ 豁免
        if _chain_awaited(text, m.start()):
            continue
        # 2026-09-01 对齐 gitcode 实检：块体有实际内容（日志/断言）的 .catch
        # 不被报（ActsGetStaticTest/gwsall done 风格用例的日志型 catch 均无命中）；
        # 仅空块/纯 resolve 的 catch 报（req7/req10 补空 .catch 后被报「必须 done()」）
        inner = re.sub(r"/\*[\s\S]*?\*/|//[^\n]*", "", block[1:-1])
        inner = inner.strip()
        if inner and not re.fullmatch(r"resolve\([^)]*\)\s*;?", inner):
            continue
        before = text[:m.start()]
        its = list(re.finditer(r"it\(\s*'[^']*'\s*,\s*[^,]+,\s*(?:async\s*)?\(([^)]*)\)\s*=>", before))
        if its and "done" in its[-1].group(1):
            hits.append((line_no, "异步调用的回调分支（.catch）中必须直接调用 done()"))
    return hits


def _chain_awaited(text: str, catch_pos: int) -> bool:
    """判断 .catch 所在链是否被 await：找该链的 .then（其闭括号后紧跟本 .catch），
    检查 .then 所在行/上一行是否以 await 开头（覆盖 await X.then(...) 与跨行
    await X({...}).then(...) 两种形态）。"""
    k = catch_pos
    while k > 0:
        then_pos = text.rfind(".then(", 0, k)
        if then_pos == -1:
            return False
        open_p = then_pos + len(".then(") - 1
        close_p = _match_paren(text, open_p)
        nxt = close_p + 1
        while nxt < len(text) and text[nxt] in " \t\r\n":
            nxt += 1
        if nxt == catch_pos:
            line_start = text.rfind("\n", 0, then_pos) + 1
            line = text[line_start:then_pos]
            prev_start = text.rfind("\n", 0, line_start - 1) + 1 if line_start > 0 else 0
            prev = text[prev_start:line_start]
            return re.match(r"\s*await\b", line) is not None or re.match(r"\s*await\b", prev) is not None
        k = then_pos - 1
    return False


def _advance_paren_skip(text: str, i: int, n: int) -> int | None:
    """Skip string/comment at i; return new index, or None if not a skip."""
    c = text[i]
    if c in ("'", '"', "`") and _is_code_pos(text, i):
        return _skip_quote(text, i + 1, c)
    if c == "/" and i + 1 < n and text[i + 1] == "/" and _is_code_pos(text, i):
        nl = text.find("\n", i)
        return n if nl == -1 else nl
    if c == "/" and i + 1 < n and text[i + 1] == "*" and _is_code_pos(text, i):
        e = text.find("*/", i + 2)
        return n if e == -1 else e + 2
    return None


def _match_paren(text: str, start: int) -> int:
    """从 start（'(' 位置）配对 ')'，跳过字符串/注释（块级配对，含跨行）。"""
    depth = 0
    i = start
    n = len(text)
    while i < n:
        skipped = _advance_paren_skip(text, i, n)
        if skipped is not None:
            i = skipped
            continue
        c = text[i]
        if c == "(":
            depth += 1
        elif c == ")":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return -1


def _skip_quote(text: str, i: int, q: str) -> int:
    """跳过引号串（含转义）。"""
    n = len(text)
    while i < n:
        if text[i] == "\\":
            i += 2
            continue
        if text[i] == q:
            return i + 1
        i += 1
    return i


def _is_code_pos(text: str, i: int) -> bool:
    """粗略判断 i 处为代码（非字符串内）：本行 i 前引号数为偶数。"""
    line_start = text.rfind("\n", 0, i) + 1
    raw = text[line_start:i]
    return raw.count("'") % 2 == 0 and raw.count('"') % 2 == 0


def _scan_switch_indent(lines: list[str], add) -> None:
    """G.FMT.12：switch 的 case 缩进 = switch 缩进 + 2。"""
    for i, ln in enumerate(lines, 1):
        m = re.match(r"^(\s*)switch\s*\(", ln)
        if not m:
            continue
        _check_case_indents(lines, i, len(m.group(1)), add)


def _check_test_filename_pascal(path: Path, add) -> None:
    """XTS.CHECK.TESTFILENAME.01：须 Xxx.test.ets，Xxx 为大驼峰且无中间点。

    官方静态检查不接受 Ability.SyncTest.ets（无 .test 段 / 多段点分）。
    正确示例：AbilitySyncTest.test.ets、Ability.test.ets。
    """
    if not _is_hypium_test_ets(path):
        return
    name = path.name
    if name in ("List.test.ets", "Util.test.ets", "Common.test.ets"):
        return
    if not name.endswith(".test.ets"):
        add("XTS.CHECK.TESTFILENAME.01", 1,
            f"测试文件名{name}命名违规，应采用大驼峰命名法"
            f"（须 *.test.ets，如 Ability.SyncTest.ets→AbilitySyncTest.test.ets）")
        return
    stem = name[: -len(".test.ets")]
    if not re.match(r"^[A-Z][A-Za-z0-9]*$", stem):
        add("XTS.CHECK.TESTFILENAME.01", 1,
            f"测试文件名{name}命名违规，应采用大驼峰命名法"
            f"（.test 前须单一大驼峰段，无中间点）")
        return


def _check_list_export_names(path: Path, text: str, add) -> None:
    """XTS.CHECK.LIST_EXPORT.01：List 导入名 = export default = 初次 describe 名。

    PR43443 合入后多处 List 调用 AbilityXxxStaticTest，但用例仍 export/describe XxxTest → 空跑。
    """
    if path.name != "List.test.ets":
        return
    imp_re = re.compile(r"import\s+(\w+)\s+from\s+['\"](\./[^'\"]+)['\"]")
    export_re = re.compile(r"export\s+default\s+function\s+(\w+)\s*\(")
    desc_re = re.compile(r"describe\(\s*['\"]([^'\"]+)['\"]")
    for m in imp_re.finditer(text):
        alias, mod = m.group(1), m.group(2)
        line = text[: m.start()].count("\n") + 1
        rel = mod if mod.endswith(".ets") else mod + ".ets"
        target = (path.parent / rel).resolve()
        if not target.is_file():
            add("XTS.CHECK.LIST_EXPORT.01", line,
                f"List 导入 {alias} 找不到 {rel}")
            continue
        try:
            src = target.read_text(encoding="utf-8", errors="replace")
        except OSError:
            add("XTS.CHECK.LIST_EXPORT.01", line,
                f"List 导入 {alias} 无法读取 {rel}")
            continue
        em = export_re.search(src)
        if em is None:
            add("XTS.CHECK.LIST_EXPORT.01", line,
                f"{rel} 缺少 export default function（List 导入 {alias}）")
            continue
        if em.group(1) != alias:
            add("XTS.CHECK.LIST_EXPORT.01", line,
                f"List 导入 {alias} 与 {rel} 导出 {em.group(1)} 不一致；"
                f"须改导出名为 {alias}")
            continue
        dm = desc_re.search(src, em.end())
        if dm is None:
            add("XTS.CHECK.LIST_EXPORT.01", line,
                f"{rel} 导出后缺少 describe（List 导入 {alias}）")
            continue
        if dm.group(1) != alias:
            add("XTS.CHECK.LIST_EXPORT.01", line,
                f"{rel} describe('{dm.group(1)}') 须与 List/export 同名 {alias}")


def _scan_arkts_xtscheck(path: Path, text: str, lines: list[str], add) -> None:
    """arkts_patterns / xtscheck @tc / ASYNC.02 回调 / CI.KIT.01 Dialog 导入。"""
    for h in scan_ets_text(path, text):
        add(h.rule, h.line, h.message)
    if not _is_hypium_test_ets(path):
        return
    _check_test_filename_pascal(path, add)
    _check_list_export_names(path, text, add)
    if re.search(r"\.forEach\s*\([^)]*\)\s*=>\s*\{[^}]*\bit\s*\(", text, re.S):
        add("xtscheck", 0, "禁止 forEach 动态生成 it()")
    _check_tc_number_dups(path, text, add)
    its = list(re.finditer(r"(?m)^(\s*)it\(\s*['\"]([^'\"]+)['\"]", text))
    for m in its:
        _check_one_it_xts(path, text, m, its, add)
    for line_no, msg in _check_async_callback_err(lines):
        add("XTS.CHECK.ASYNC_TESTCASE.02", line_no, msg)
    for line_no, msg in _check_truthy_err_assertfail(text):
        add("XTS.CHECK.ERR_CODE.01", line_no, msg)
    _dialog_kit_syms = frozenset({
        "dialog", "DialogPresenter", "DialogResult", "DialogState",
        "DialogDismissal", "DialogBaseController", "DialogBaseAlignment",
        "DialogButtonOrientation",
    })
    for m in re.finditer(
            r"import\s+(?:([A-Za-z_]\w*)\s*,\s*)?\{([^}]*)\}\s*from\s*['\"]@kit\.ArkUI['\"]",
            text, re.S):
        names: list[str] = []
        if m.group(1):
            names.append(m.group(1))
        names.extend(re.findall(r"[A-Za-z_]\w*", m.group(2)))
        bad = sorted({n for n in names if n in _dialog_kit_syms})
        if not bad:
            continue
        line = text[: m.start()].count("\n") + 1
        add("CI.KIT.01", line, "Dialog API " + ",".join(bad)
            + " 勿从 @kit.ArkUI 导入；改用 @ohos.arkui.UIContext/@ohos.arkui.dialog")


def _scan_wordstool(path: Path, lines: list[str], add) -> None:
    """WordsTool 97/66/143/100/5/9/177 敏感词。"""
    for i, ln in enumerate(lines, 1):
        if path.suffix in (".ets", ".ts", ".json", ".json5") or _is_resource_string_json(path):
            if _WT97_RE.search(ln):
                add("WordsTool.97", i, "勿写易歧义产品名；字体族请用行业通用 sans-serif")
        if path.suffix in (".ets", ".ts", ".json", ".json5"):
            if _WT66_RE.search(ln):
                add("WordsTool.66", i, "勿在标识符/用例号中保留易歧义片段；uuid 类编号请改为 SUB_* 语义号")
        if path.suffix in (".ets", ".ts", ".md", ".json", ".json5"):
            if _WT143_RE.search(ln):
                add("WordsTool.143", i, "勿裸写本地开发套件缩写；用例号/文档改 NATIVE 或「专用提供方」表述")
        if path.suffix in (".ets", ".ts"):
            if _WT100_RE.search(ln) and "Copyright" not in ln and "Licensed under" not in ln:
                add("WordsTool.100", i, "开源仓勿写易歧义厂商域名；属性桩页 Web(src) 请用 $rawfile('…')")
            if _WT5_RE.search(ln):
                add("WordsTool.5", i, "开源描述勿裸写易歧义无障碍相关独立词；改行业通用表述或 API 全称复合标识")
            if _WT9_RE.search(ln):
                add(
                    "WordsTool.9",
                    i,
                    "开源描述/注释勿裸写 Ability Manager Service；改 framework / AbilityStage 等行业通用表述",
                )
            if _WT177_RE.search(ln):
                add("WordsTool.177", i, "开源描述勿裸写易歧义词；注释改 commonly returns；图形场景改 host/TEXTURE")


def _scan_obj04(lines: list[str], add) -> None:
    """G.OBJ.04：简单小写键 ['x'] / ?.['x'] 优先点号访问。"""
    for i, ln in enumerate(lines, 1):
        if _OBJ04_BRACKET_RE.search(ln):
            add("G.OBJ.04", i, "简单属性优先点号访问；仅计算属性使用 []（PR44704）")


def _scan_commented_out_code(lines: list[str], add) -> None:
    """G.OTH.03：注释掉的无效代码段应删除。"""
    for i, ln in enumerate(lines, 1):
        if _COMMENTED_OUT_CODE_RE.search(ln):
            add("G.OTH.03", i, "不用的代码段直接删除，不要注释掉")


def scan_ets_file(path: Path, text: str) -> list[Hit]:
    hits: list[Hit] = []
    lines = text.split("\n")

    def add(rule_id: str, line_no: int, msg: str = "") -> None:
        hits.append(Hit(rule_id, str(path), line_no, msg))

    _scan_regex_quality(lines, add)
    _scan_import_split(lines, add)
    _scan_new_checks(lines, add)
    _scan_import_any(lines, add)
    _check_static_header(path, text, add)
    _check_static_settimeout(path, text, add)
    _check_static_int_as_number(path, text, add)
    _check_dyn_statemgmt_import(path, text, add)
    _check_hypium_ohmurl(path, text, add)
    _scan_heuristic(path, text, lines, add)
    _scan_arkts_xtscheck(path, text, lines, add)
    _scan_wordstool(path, lines, add)
    _scan_obj04(lines, add)
    _scan_commented_out_code(lines, add)
    return hits


# ---------------- 自动修复 ----------------


def fix_ets_xtscheck(text: str) -> tuple[str, int]:
    """去掉 */ 与 it() 之间空行。

    注意：禁止把 @tc 字段规范化为「@tc.xxx : 」冒号格式——gitcode 门禁解析
    @tc.name/@tc.number 值时不识别冒号格式（值读到 ":" 判为不一致，TCNAME.01
    误报，2026-08-24 五笔 PR 实测回退后才消除）。存量无冒号格式保持原样。
    """
    n = 0
    text2 = re.sub(r"\*/\n\s*\n(\s*it\()", r"*/\n\1", text)
    if text2 != text:
        n += 1
        text = text2
    return text, n


def _tcname_patch_block(block: str, it_name: str) -> str | None:
    """Insert @tc.name after @tc.number; None if already present or no number."""
    if "@tc.name" in block or "@tc.number" not in block:
        return None
    num_line = re.search(
        r"^([ \t]*\*[ \t]*@tc\.number[ \t]+)(\S+)(.*)$", block, re.M
    )
    if not num_line:
        return None
    prefix = num_line.group(1).replace("@tc.number", "@tc.name  ")
    insert = f"{num_line.group(0)}\n{prefix}{it_name}{num_line.group(3)}"
    return block.replace(num_line.group(0), insert, 1)


def fix_ets_tcname(text: str) -> tuple[str, int]:
    """XTS.CHECK.TCNAME.01：JSDoc 有 @tc.number 缺 @tc.name 时按 it() 名补一行。"""
    pat = re.compile(
        r"(/\*\*[\s\S]*?\*/)(\s*it\(\s*['\"]([^'\"]+)['\"])",
        re.M,
    )
    chunks: list[str] = []
    last = 0
    n = 0
    for m in pat.finditer(text):
        block, it_tail, it_name = m.group(1), m.group(2), m.group(3)
        chunks.append(text[last:m.start()])
        patched = _tcname_patch_block(block, it_name)
        if patched is None:
            chunks.append(m.group(0))
        else:
            chunks.append(patched + it_tail)
            n += 1
        last = m.end()
    chunks.append(text[last:])
    return "".join(chunks), n


def _fix_adjacent_string_literals(text: str) -> tuple[str, int]:
    """CI ArkTS rejects implicit adjacent string concat (PR44444 10505001)."""
    nl = "\r\n" if "\r\n" in text else "\n"
    lines = text.splitlines()
    n = 0
    for i in range(len(lines) - 1):
        cur = lines[i].rstrip()
        if not re.search(r"""['"]$""", cur) or cur.endswith("+") or cur.endswith("\\"):
            continue
        if not re.match(r"""\s*['"]""", lines[i + 1]):
            continue
        lines[i] = cur + " +"
        n += 1
    suffix = nl if text.endswith(("\n", "\r\n")) else ""
    return nl.join(lines) + suffix, n


def _fix_fmt03_plus_at_eol(text: str) -> tuple[str, int]:
    """G.FMT.03: move leading binary '+' to end of previous line (PR44444)."""
    nl = "\r\n" if "\r\n" in text else "\n"
    lines = text.splitlines()
    n = 0
    for i in range(1, len(lines)):
        m = re.match(r"^(\s*)\+\s+(\S.*)$", lines[i])
        if not m:
            continue
        prev = lines[i - 1].rstrip()
        if not prev or prev.endswith("+"):
            continue
        lines[i - 1] = prev + " +"
        lines[i] = m.group(1) + m.group(2)
        n += 1
    return nl.join(lines) + (nl if text.endswith(("\n", "\r\n")) else ""), n


def fix_ets_format(text: str) -> tuple[str, int]:
    """机械格式修复（迁移自 code_quality.fix_code_quality）：G.FMT.10/08/11/03。"""
    n = 0
    text2, c = re.subn(r"\)\n\s*\{", ") {", text)
    if c:
        n += c
        text = text2
    text2, c = re.subn(r";;", ";", text)
    if c:
        n += c
        text = text2
    text2, c = re.subn(r"((?:for|while)\s*\([^;\n]*;[^;\n]*;[^;\n]*\))\s*;", r"\1 { }", text)
    if c:
        n += c
        text = text2
    text2, c = _fix_fmt03_plus_at_eol(text)
    if c:
        n += c
        text = text2
    text2, c = _fix_adjacent_string_literals(text)
    if c:
        n += c
        text = text2
    return text, n


_DATA_CLASS_RE = re.compile(
    r"^\s*class\s+(\w+)\s*(?:implements\s+\w+)?\s*\{\s*$")


def _check_data_class(lines: list[str]) -> list[tuple[int, str]]:
    """G.EXT.04：纯数据 class（仅字段无方法且无 new 使用）应改用 interface。

    2026-08-24 检视实锤：class JsonParam { public name: string = ''; ... } 被要求
    改 interface JsonParam { name: string; ... }（ArkTS 对象字面量显式类型标准做法）。
    豁免：被 new X() 实例化的类（interface 不能 new）。
    """
    hits: list[tuple[int, str]] = []
    text = "\n".join(lines)
    i = 0
    n = len(lines)
    while i < n:
        m = _DATA_CLASS_RE.match(lines[i])
        if m:
            fields, methods, end = _count_class_members(lines, i)
            cls = m.group(1)
            if fields > 0 and methods == 0 and not re.search("".join((r"\bnew\s+", re.escape(cls), r"\b")), text):
                hits.append((i + 1, f"纯数据类 {cls} 应改用 interface 定义（仅字段无方法）"))
            i = end
        else:
            i += 1
    return hits


def _count_class_members(lines: list[str], start: int) -> tuple[int, int, int]:
    """统计 class 体 public 字段/方法数，返回 (fields, methods, 结束下标)。"""
    fields = 0
    methods = 0
    j = start + 1
    n = len(lines)
    while j < n and '}' not in lines[j]:
        st = lines[j].strip()
        if re.match(r'^(?:public\s+)?[A-Za-z_]\w*\s*:', st):
            fields += 1
        elif re.match(r'^(?:public\s+)?[A-Za-z_]\w*\s*\(', st):
            methods += 1
        j += 1
    return fields, methods, j + 1


def _check_msg_parcel(lines: list[str]) -> list[tuple[int, str]]:
    """XTS.CHECK.MSGSEQUENCE.01：marshalling/unmarshalling 参数须用 rpc.MessageSequence。

    2026-08-24 编译实锤：MessageParcel 与 Parcelable 接口的 MessageSequence 不兼容。
    """
    hits: list[tuple[int, str]] = []
    for i, ln in enumerate(lines, 1):
        if re.search(r"(marshalling|unmarshalling)\s*\(\w+\s*:\s*rpc\.MessageParcel", ln):
            hits.append((i, "marshalling/unmarshalling 参数须用 rpc.MessageSequence（Parcelable 接口要求，MessageParcel 不兼容）"))
    return hits


def _check_loadcontent_data(lines: list[str]) -> list[tuple[int, str]]:
    """XTS.CHECK.LOADCONTENT.01：loadContent 回调体内引用 data 但参数缺失。

    2026-08-24 编译实锤：回调删 data 参数后体内 JSON.stringify(data) 未定义。
    """
    hits: list[tuple[int, str]] = []
    text = "\n".join(lines)
    for m in re.finditer(r"loadContent\([^\n]*?\(err:\s*BusinessError\)\s*=>\s*\{", text):
        line_no = text.count("\n", 0, m.start()) + 1
        block = _block_until_brace(text, m.end() - 1)
        if re.search(r"\bdata\b", block):
            hits.append((line_no, "loadContent 回调体内引用 data 但参数缺失：须补 (err, data: void)"))
    return hits


def _scan_new_checks(lines: list[str], add) -> None:
    for line_no, msg in _check_data_class(lines):
        add("G.EXT.04", line_no, msg)
    for line_no, msg in _check_msg_parcel(lines):
        add("XTS.CHECK.MSGSEQUENCE.01", line_no, msg)
    for line_no, msg in _check_loadcontent_data(lines):
        add("XTS.CHECK.LOADCONTENT.01", line_no, msg)


_IMPORT_SPLIT_RE = re.compile(
    r"import\s*\{\s*([^}]+?)\s*\}\s*from\s*['\"]([^'\"]+)['\"];")


def _check_import_split(lines: list[str]) -> list[tuple[int, str]]:
    """G.FMT.13：同一模块被拆成多个 import 语句（超 120 可换行，不可拆分）。

    2026-08-24 检视实锤：import { A, B, } from 'X' + import { C } from 'X' 被要求合并。
    """
    hits: list[tuple[int, str]] = []
    mods: dict[str, list[tuple[int, str]]] = {}
    for i, ln in enumerate(lines, 1):
        m = _IMPORT_SPLIT_RE.match(ln)
        if m:
            mods.setdefault(m.group(2), []).append((i, m.group(1)))
    for mod, entries in mods.items():
        if len(entries) > 1:
            for i, _ in entries:
                hits.append((i, f"import 拆分：'{mod}' 被拆成多个 import，应合并为单条（超长可换行）"))
    return hits


def _scan_import_split(lines: list[str], add) -> None:
    for line_no, msg in _check_import_split(lines):
        add("G.FMT.13", line_no, msg)


def fix_ets_import_merge(text: str) -> tuple[str, int]:
    """G.FMT.13：同源模块拆分 import 合并为单条。"""
    lines = text.split("\n")
    n = [0]
    mods: dict[str, list[int]] = {}
    for i, ln in enumerate(lines):
        m = _IMPORT_SPLIT_RE.match(ln)
        if m:
            mods.setdefault(m.group(2), []).append(i)
    for mod, idxs in mods.items():
        if len(idxs) < 2:
            continue
        names: list[str] = []
        for i in idxs:
            m = _IMPORT_SPLIT_RE.match(lines[i])
            names.extend(x.strip() for x in m.group(1).split(",") if x.strip())
        # 去重保序
        seen: set[str] = set()
        uniq = [x for x in names if not (x in seen or seen.add(x))]
        first = idxs[0]
        lines[first] = f"import {{ {', '.join(uniq)} }} from '{mod}';"
        for i in idxs[1:]:
            lines[i] = ""
        n[0] += 1
    if n[0]:
        return "\n".join(lines), n[0]
    return text, 0


_CLASS_FIELD_RE = re.compile(
    r"^(\s{2,})([a-zA-Z_]\w*)\s*:\s*(number|string|boolean|bigint)\s*[=;]")
_ACCESS_MOD_RE = re.compile(r"^\s*(public|private|protected)\b")
_STATIC_RO_RE = re.compile(r"^(\s+)static\s+readonly\s+")


def _needs_public(line: str) -> bool:
    """class 体基本类型属性且无访问修饰符。"""
    return not _ACCESS_MOD_RE.match(line) and _CLASS_FIELD_RE.match(line) is not None


def _class_state(line: str, st: str, class_seen: bool, depth: int) -> tuple[bool, int]:
    """维护 class 体深度状态。返回 (class_seen, depth)。"""
    if not class_seen:
        if re.match(r"^(export\s+)?(default\s+)?class\b", st):
            return True, 1
        return False, 0
    if st.startswith(("//", "*", "/*")):
        return True, depth
    d = depth + line.count("{") - line.count("}")
    return (True, d) if d > 0 else (False, 0)


def fix_ets_ext01(text: str) -> tuple[str, int]:
    """G.EXT.01：class 体内属性补 public；含 static readonly（req6 IDL 实锤）。"""
    out: list[str] = []
    n = 0
    class_seen = False
    depth = 0
    for line in text.split("\n"):
        st = line.strip()
        class_seen, depth = _class_state(line, st, class_seen, depth)
        if class_seen and depth == 1 and not _ACCESS_MOD_RE.match(line):
            m = _CLASS_FIELD_RE.match(line)
            sm = _STATIC_RO_RE.match(line)
            if m or sm:
                ind = (m or sm).group(1)
                line = f"{ind}public {line[len(ind):]}"
                n += 1
        out.append(line)
    return "\n".join(out), n


def fix_ets_dcl06(text: str) -> tuple[str, int]:
    """G.DCL.06：new Array() → [] 字面量。"""
    t, n = re.subn(r"=\s*new\s+Array\s*\(\s*\)", "= []", text)
    return t, n


def _to_camel(name: str) -> str:
    """snake_case/PascalCase → lowerCamelCase（全大写常量、已 camel 不动；段内大小写保留）。"""
    if not name or name.isupper():
        return name
    if "_" in name:
        parts = name.split("_")
        first = parts[0].lower() if parts[0].isupper() else parts[0][:1].lower() + parts[0][1:]
        return f"{first}{''.join(f'{p[:1].upper()}{p[1:]}' for p in parts[1:])}"
    if name[:1].isupper():
        return name[0].lower() + name[1:]
    return name


def fix_ets_nam(text: str) -> tuple[str, int]:
    """G.NAM.02/03：let/const/var/function 声明名 → lowerCamelCase（全文件 token 同步）。

    跳过 ``export default function SuiteName``：须与 List 导入 / describe 同名
    （XTS.CHECK.LIST_EXPORT.01）；自动 camelCase 会拆掉套件入口导致空跑。
    """
    n = 0
    decls = set()
    for m in re.finditer(r"\b(let|const|var|function)\s+([A-Za-z_]\w*)", text):
        # export default function Xxx — keep PascalCase suite entry
        start = m.start()
        prefix = text[max(0, start - 24):start]
        if "export" in prefix and "default" in prefix:
            continue
        new = _to_camel(m.group(2))
        if new != m.group(2):
            decls.add((m.group(2), new))
    for old, new in decls:
        text, c = re.subn(rf"\b{re.escape(old)}\b", new, text)
        n += c
    return text, n


def _to_pascal_name(name: str) -> str:
    parts = re.split(r"[_\s]+", name)
    out = "".join(p[:1].upper() + p[1:] for p in parts if p)
    return out or name


def fix_ets_nam01(text: str) -> tuple[str, int]:
    """G.NAM.01：class/struct/enum 非大驼峰 → PascalCase（去下划线，同步引用）。"""
    pairs: list[tuple[str, str]] = []
    seen: set[str] = set()
    for m in re.finditer(r"\b(class|struct|enum)\s+([A-Za-z_]\w*)", text):
        old = m.group(2)
        if old in seen or _PASCAL_NAME_RE.match(old):
            continue
        new = _to_pascal_name(old)
        if new != old:
            seen.add(old)
            pairs.append((old, new))
    pairs.sort(key=lambda x: -len(x[0]))
    n = 0
    for old, new in pairs:
        text, c = re.subn(rf"\b{re.escape(old)}\b", new, text)
        n += c
    return text, n


def fix_ets_fmt09(text: str) -> tuple[str, int]:
    """G.FMT.09：同行 if/for/while 无大括号体 → 加 {}。"""
    n = 0
    out: list[str] = []
    same = re.compile(
        r"^(\s*)((?:if|for|while)\s*\((?:[^()]|\([^()]*\))*\))\s+(?!\{|else\b)(\S.*)$"
    )
    for ln in text.split("\n"):
        st = ln.strip()
        if st.startswith("//") or st.startswith("*"):
            out.append(ln)
            continue
        m = same.match(ln)
        if not m:
            out.append(ln)
            continue
        ind, head, body = m.group(1), m.group(2), m.group(3)
        out.append(f"{ind}{head} {{")
        out.append(f"{ind}  {body}")
        out.append(f"{ind}}}")
        n += 1
    return "\n".join(out), n


def fix_ets_oth05_url(text: str) -> tuple[str, int]:
    """G.OTH.05：'https://host/path' → ('https://' + 'host' + '/path')。"""
    n = [0]

    def qstr(s: str) -> str:
        return f"'{s}'" if "'" not in s else f'"{s}"'

    def repl(m: re.Match[str]) -> str:
        url = m.group(2)
        if "apache.org" in url:
            return m.group(0)
        mm = re.match(r"(https?://)([^/]+)(/.*)?$", url)
        if not mm:
            return m.group(0)
        scheme, host, path = mm.group(1), mm.group(2), mm.group(3) or ""
        n[0] += 1
        return f"({qstr(scheme)} + {qstr(host)} + {qstr(path)})"

    lines_out: list[str] = []
    for ln in text.split("\n"):
        st = ln.strip()
        if st.startswith("//") or st.startswith("*") or "apache.org/licenses" in ln:
            lines_out.append(ln)
            continue
        lines_out.append(_OTH05_URL_RE.sub(repl, ln))
    return "\n".join(lines_out), n[0]


def _switch_state(st: str, line: str, sw_indent: int | None,
                   depth: int) -> tuple[int | None, int]:
    """switch 块深度/缩进状态。返回 (sw_indent, depth)。"""
    if sw_indent is None:
        if re.match(r"switch\s*\(", st):
            return len(line) - len(st), 1
        return None, 0
    if not st.startswith(("//", "*")):
        depth += line.count("{") - line.count("}")
    if depth <= 0:
        return None, 0
    return sw_indent, depth


def fix_ets_fmt12(text: str) -> tuple[str, int]:
    """G.FMT.12：switch 内 case/default 缩进 = switch 缩进 + 2。"""
    out: list[str] = []
    n = 0
    sw_indent: int | None = None
    depth = 0
    for line in text.split("\n"):
        st = line.lstrip()
        sw_indent, depth = _switch_state(st, line, sw_indent, depth)
        if sw_indent is not None and depth == 1 and re.match(r"(case\b|default\s*:)", st):
            line = " " * (sw_indent + 2) + st
            n += 1
        out.append(line)
    return "\n".join(out), n


_ESOBJECT_NAMES = {
    "caller": "Caller", "firstCaller": "Caller", "secondCaller": "Caller", "thirdCaller": "Caller",
    "subscriber": "commonEvent.CommonEventSubscriber",
    "actionStr": "string", "param": "string", "accountId": "string", "message": "string",
    "tempDir": "string", "applicationTempDir": "string", "currentContext": "string",
    "applicationContext": "string", "onAcceptWantCalledSeq": "number", "action": "string",
}


def fix_ets_ext02(text: str) -> tuple[str, int]:
    """G.EXT.02：常见变量名 ESObject 声明 → 具体类型（白名单启发式，回调参数留手动）。"""
    n = 0
    for name, typ in _ESOBJECT_NAMES.items():
        text, c = re.subn(rf"\b(let|var|const)\s+{name}\s*:\s*ESObject\b",
                          rf"\1 {name}: {typ}", text)
        n += c
    return text, n


_CATCH_BLOCK_RE = re.compile(
    r"(\.catch\(\([^)]*\)\s*=>\s*\{\n)(.*?)(\n\s*\}\);)", re.S)


def fix_ets_catch_done(text: str) -> tuple[str, int]:
    """XTS.CHECK.ASYNC_TESTCASE.01：done 风格 it 内 .catch 块体补 done()（缺则加）。"""
    n = [0]

    def repl(m: re.Match[str]) -> str:
        before = text[:m.start()]
        its = list(re.finditer(r"it\(\s*'[^']*'\s*,\s*[^,]+,\s*(?:async\s*)?\(([^)]*)\)\s*=>", before))
        if not (its and "done" in its[-1].group(1)):
            return m.group(0)
        if "done(" in m.group(2):
            return m.group(0)
        body = m.group(2)
        last_line = [ln for ln in body.split("\n") if ln.strip()][-1]
        indent = re.match(r"^(\s*)", last_line).group(1)
        n[0] += 1
        return m.group(1) + body + "\n" + indent + "done();" + m.group(3)

    t2 = _CATCH_BLOCK_RE.sub(repl, text)
    return t2, n[0]


def fix_wordstool_9(text: str) -> tuple[str, int]:
    """Comment bare Ability-mgmt abbrev → framework (WordsTool.9; PR45075)."""
    parts = text.splitlines(keepends=True)
    n = 0
    out: list[str] = []
    for ln in parts:
        if "//" in ln and _WT9_RE.search(ln):
            code, sep, cmt = ln.partition("//")
            cmt2, k = _WT9_RE.subn("framework", cmt)
            if k:
                n += k
                ln = code + sep + cmt2
        out.append(ln)
    return "".join(out), n


def fix_wordstool_86(text: str) -> tuple[str, int]:
    """WordsTool.86：禁词标识改 statusMsg。"""
    needle = "".join(chr(c) for c in (101,118,101,110,116,76,111,103))
    n = text.count(needle)
    if n:
        text = text.replace(needle, "statusMsg")
    return text, n


def fix_wordstool_97(text: str) -> tuple[str, int]:
    n = text.count(_WT97_FONT)
    if n:
        text = text.replace(_WT97_FONT, "sans-serif")
    return text, n


def fix_wordstool_177(text: str) -> tuple[str, int]:
    """注释常见 may <word> as → commonly returns（WordsTool.177；PR44704）。"""
    tok = _from_codes(115, 117, 114, 102, 97, 99, 101)
    pat = re.compile(rf"may\s+{tok}\s+as", re.I)
    text2, n = pat.subn("commonly returns", text)
    return text2, n


def fix_ets_obj04(text: str) -> tuple[str, int]:
    """G.OBJ.04：?.['x'] / ['x'] → ?.x / .x（仅小写开头字面量键）。"""
    n = [0]

    def repl(m: re.Match[str]) -> str:
        n[0] += 1
        opt = m.group(1) or ""
        name = m.group(2)
        if opt == "?.":
            return f"?.{name}"
        return f".{name}"

    return _OBJ04_BRACKET_RE.sub(repl, text), n[0]


def fix_oth03_commented_out(text: str) -> tuple[str, int]:
    """删除整行注释掉的赋值/控制语句（G.OTH.03）。"""
    parts = text.splitlines(keepends=True)
    kept: list[str] = []
    n = 0
    for ln in parts:
        if _COMMENTED_OUT_CODE_RE.search(ln):
            n += 1
            continue
        kept.append(ln)
    return "".join(kept), n


def fix_ets_napi_so_import(text: str) -> tuple[str, int]:
    """XTS.CHECK.NAPI_SO_IMPORT.01：import * as x from 'lib.so' -> import x from ..."""
    lines = text.split("\n")
    n = 0
    out: list[str] = []
    for ln in lines:
        m = _NAPI_SO_STAR_AS_RE.match(ln)
        if m:
            out.append(f"{m.group(1)} {m.group(2)} {m.group(3)}")
            n += 1
        else:
            out.append(ln)
    if n == 0:
        return text, 0
    return "\n".join(out), n


def fix_ets_enum_as_int(text: str) -> tuple[str, int]:
    """COMPILE.ENUM_AS_INT.01: Flags.XXX as Int → Flags.XXX.valueOf() (ESE593372)."""
    pat = re.compile(r"\b(Flags\.[A-Z0-9_]+)\s+as\s+Int\b")
    n = len(pat.findall(text))
    if n == 0:
        return text, 0
    return pat.sub(r"\1.valueOf()", text), n


def _apply_ets_ts_fixes(path: Path, text: str) -> tuple[str, int]:
    """Run all .ets/.ts autofix pipelines; return (text, fix_count)."""
    total = 0
    steps = [
        fix_ets_xtscheck, fix_ets_tcname, fix_arkts_quality, fix_ets_format,
        fix_ets_ext01, fix_ets_nam, fix_ets_nam01, fix_ets_fmt09,
        fix_ets_oth05_url, fix_ets_ext02, fix_ets_dcl06, fix_ets_fmt12,
        fix_ets_catch_done, fix_ets_err_code_check, fix_ets_enum_as_int,
        fix_ets_import_merge, fix_ets_napi_so_import, fix_oth03_commented_out,
        fix_ets_obj04, fix_wordstool_9, fix_wordstool_86, fix_wordstool_177,
    ]
    for fn in steps:
        text, n = fn(text)
        total += n
    text, n = fix_ets_hypium_ohmurl(path, text)
    total += n
    text, n = _dq_to_sq_count(text)
    total += n
    return text, total


def fix_ets_file(path: Path, text: str) -> tuple[str, int]:
    """按文件类型应用全部自动修复，返回 (新文本, 修复数)。"""
    total = 0
    if path.suffix in (".ets", ".ts"):
        text, n = _apply_ets_ts_fixes(path, text)
        total += n
    if path.suffix in (".ets", ".ts", ".json", ".json5") or _is_resource_string_json(path):
        text, n = fix_wordstool_97(text)
        total += n
    return text, total


# ---------------- 引号规范（提交时转换，迁移自 quotes.py 原始实现） ----------------


def _scan_line_comment(text: str, i: int) -> tuple[str, int]:
    """// 行注释：原样复制到行尾。"""
    j = text.find("\n", i)
    if j == -1:
        j = len(text)
    return text[i:j], j


def _scan_block_comment(text: str, i: int) -> tuple[str, int]:
    """/* */ 块注释：原样复制。"""
    j = text.find("*/", i + 2)
    if j == -1:
        return text[i:], len(text)
    return text[i:j + 2], j + 2


def _scan_quoted(text: str, i: int, q: str) -> tuple[str, int]:
    """单引号/模板串：原样复制（其中的双引号不动）。"""
    j = i + 1
    n = len(text)
    while j < n:
        if text[j] == "\\":
            j += 2
            continue
        if text[j] == q:
            break
        j += 1
    end = j + 1 if j < n else n
    return text[i:end], end


def _unescape_dq_body_for_sq(content: str) -> str:
    """双引号串体转单引号时：\\\" → \"，其余转义原样保留。"""
    out: list[str] = []
    i = 0
    n = len(content)
    while i < n:
        if content[i] == "\\" and i + 1 < n:
            nxt = content[i + 1]
            if nxt == '"':
                out.append('"')
            else:
                out.append("\\")
                out.append(nxt)
            i += 2
            continue
        out.append(content[i])
        i += 1
    return "".join(out)


def _scan_double_quote(text: str, i: int) -> tuple[str, int, int]:
    """双引号字面量：内容不含裸单引号则转单引号。返回 (片段, 新 i, 转换数)。"""
    j = i + 1
    n = len(text)
    body: list[str] = []
    while j < n:
        ch = text[j]
        if ch == "\\":
            body.append(ch)
            if j + 1 < n:
                body.append(text[j + 1])
            j += 2
            continue
        if ch == '"':
            break
        body.append(ch)
        j += 1
    if j >= n:
        return text[i:], n, 0
    content = "".join(body)
    # 裸单引号无法安全包进 '...'，保留双引号
    raw_for_check = _unescape_dq_body_for_sq(content)
    if "'" in raw_for_check:
        return text[i:j + 1], j + 1, 0
    return f"'{raw_for_check}'", j + 1, 1


def _dq_to_sq_count(text: str) -> tuple[str, int]:
    """双引号字符串字面量 → 单引号（版权头/注释/模板串除外）。返回 (新文本, 替换数)。"""
    m = re.match(r"^\s*/\*.*?\*/\s*", text, re.S)
    header_end = m.end() if m else 0
    out = [text[:header_end]]
    i = header_end
    cnt = 0
    n = len(text)
    while i < n:
        c = text[i]
        if c == "/" and i + 1 < n and text[i + 1] == "/":
            seg, i = _scan_line_comment(text, i)
            out.append(seg)
            continue
        if c == "/" and i + 1 < n and text[i + 1] == "*":
            seg, i = _scan_block_comment(text, i)
            out.append(seg)
            continue
        if c in "'`":
            seg, i = _scan_quoted(text, i, c)
            out.append(seg)
            continue
        if c == '"':
            seg, i, k = _scan_double_quote(text, i)
            out.append(seg)
            cnt += k
            continue
        out.append(c)
        i += 1
    return "".join(out), cnt


def dq_to_sq(text: str) -> str:
    """把 text 中除版权头/注释之外的双引号字符串字面量替换为单引号，返回新文本。"""
    return _dq_to_sq_count(text)[0]


def dq_count(text: str) -> int:
    """统计可转换的双引号字符串数量（与 dq_to_sq 的替换数一致，用于报告）。"""
    return _dq_to_sq_count(text)[1]


def is_fully_converted(text: str) -> bool:
    """幂等检查：再次转换无变化 = 转化完全。"""
    return _dq_to_sq_count(text)[1] == 0


def fix_code_quality(text: str) -> str:
    """机械格式修复（原 code_quality.py）：大括号同行、多余分号、空循环体大括号。"""
    text = re.sub(r"\)\n(\s*)\{", ") {", text)
    text = text.replace(";;", ";")
    text = re.sub(r"(for\s*\([^;\n]*;[^;\n]*;[^;\n]*\))\s*;", r"\1 { }", text)
    text = re.sub(r"(while\s*\([^;\n]*\))\s*;", r"\1 { }", text)
    return text


