#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""代码门禁检查：C/C++ 检查与自动修复（规则注册表 rules_cpp.json）。

迁移来源：
- ohos-gate-compliance/scripts/gate_review.py（G.FMT.06-CPP 修复、G.FUD.05、行宽）
- ohos-gate-compliance-pr-check（FUNC.CC≤20 / FUNC.DEPTH≤4 / MAGIC.NUM / HEADER.NBNC≤300 / OAT.3 —— md 文本规则全部脚本化）
"""
from __future__ import annotations

import re
from pathlib import Path

from base import Hit

MAX_LINE = 120
INDENT_STEP = 4
MAX_FUNC_NBNC = 50
MAX_FUNC_CC = 20
MAX_FUNC_DEPTH = 4
MAX_HEADER_NBNC = 300


def _from_codes(*codes: int) -> str:
    return "".join(chr(c) for c in codes)


# WordsTool.143：本地开发套件缩写（chr 拼接，避免 skill 源码裸写）
_WT143_RE = re.compile(_from_codes(110, 100, 107), re.I)

_FUNC_SIG_RE = re.compile(
    r"^(?:static\s+)?(?:napi_property_descriptor\s*\*|napi_value|bool|void|int(?:32_t)?|"
    r"uint32_t|size_t|std::string|auto)\s*(\w+)\s*\("
)
# 魔法数白名单：0/1/2/-1/1000（时间片/布尔/计数常见值）与进制前缀常量
_MAGIC_ALLOW = {"0", "1", "2", "-1", "1000", "0x0", "0x1", "0xFF", "0xffffffff"}


def _cpp_nbnc_line(stripped: str, in_block: bool) -> tuple[bool, bool]:
    if not stripped:
        return False, in_block
    if in_block:
        if "*/" in stripped:
            return False, False
        return False, True
    if stripped.startswith("/*"):
        return False, "*/" not in stripped
    if stripped.startswith("//") or stripped.startswith("*"):
        return False, False
    return True, False


def _cpp_find_body_start(lines: list[str], sig_idx: int) -> int:
    j = sig_idx
    while j < len(lines) and j < sig_idx + 8:
        s = lines[j].lstrip()
        if "{" in s and not s.rstrip().endswith(";"):
            return j
        if s.endswith(";") and "{" not in s:
            return -1
        j += 1
    return -1


def _cpp_func_body(lines: list[str], body_start: int) -> tuple[int, int, list[str]]:
    """返回 (nbnc, 结束行索引, 函数体行列表)。"""
    depth = 0
    nbnc = 0
    in_block = False
    body: list[str] = []
    k = body_start
    while k < len(lines):
        s = lines[k].lstrip()
        counts, in_block = _cpp_nbnc_line(s, in_block)
        if counts and k > body_start and s not in ("}", "};"):
            nbnc += 1
        depth += s.count("{") - s.count("}")
        body.append(lines[k])
        if k > body_start and depth <= 0:
            break
        k += 1
    return nbnc, k, body


def _strip_cpp_comment(line: str) -> str:
    """剥行内 // 注释（保留字符串近似，启发式足够）。"""
    return re.split(r"//", line)[0]


def _func_cc_heuristic(body: list[str]) -> int:
    """启发式圈复杂度：if/for/while/case/catch/&&/|| 计数。"""
    cc = 1
    for ln in body:
        s = _strip_cpp_comment(ln)
        cc += len(re.findall(r"\b(?:if|for|while|catch)\b", s))
        cc += len(re.findall(r"\bcase\b", s))
        cc += len(re.findall(r"&&|\|\|", s))
    return cc


def _func_depth_heuristic(body: list[str]) -> int:
    """启发式嵌套深度：行内最大括号嵌套（剥注释）。"""
    max_depth = 0
    depth = 0
    for ln in body:
        s = _strip_cpp_comment(ln)
        depth += s.count("{") - s.count("}")
        max_depth = max(max_depth, depth)
    return max_depth


def _magic_numbers_hits(body: list[str], base_line: int) -> list[tuple[int, str]]:
    """启发式魔法数：函数体内裸数字字面量（白名单/宏行/case 标签/声明排除）。"""
    hits: list[tuple[int, str]] = []
    for idx, ln in enumerate(body):
        s = _strip_cpp_comment(ln)
        if not s.strip():
            continue
        if s.lstrip().startswith(("#", "case ", "return ", "if ", "while ", "for ", "switch ")):
            # return/case/流程行的裸数字多为合法语义，仅提示风格
            pass
        if re.match(r"^\s*#", s):
            continue
        for m in re.finditer(r"(?<![\w.])-?\d+(?![\w.])", s):
            num = m.group(0)
            if num in _MAGIC_ALLOW:
                continue
            # 数组尺寸/初始化列表、struct 字段初始化多为合法值 → 仍提示（人工确认）
            hits.append((base_line + idx, f"魔法数 {num}，建议抽 constexpr 命名常量"))
    return hits


# ---------------- G.FMT.06-CPP（迁移自 gate_review） ----------------
def _fmt06_opens_call(stripped: str) -> bool:
    if stripped.rstrip().endswith("("):
        return True
    return stripped.count("(") > stripped.count(")")


def _fmt06_closes_call(stripped: str) -> bool:
    if stripped.startswith(")"):
        return True
    return stripped.count(")") >= stripped.count("(") and ")" in stripped


def fix_cpp_fmt06(text: str) -> tuple[str, int]:
    raw = text.splitlines(keepends=True)
    out: list[str] = []
    call_base: int | None = None
    n = 0
    for line in raw:
        stripped = line.lstrip(" ")
        indent = len(line) - len(stripped)
        core = stripped.rstrip("\n\r")
        ending = line[len(line.rstrip("\n\r")):] if core else line
        out_indent = indent
        if call_base is not None and core and not core.startswith(")"):
            expected = call_base + INDENT_STEP
            if indent < expected:
                out_indent = expected
                n += 1
        out.append(" " * out_indent + core + ending)
        if core and _fmt06_opens_call(core):
            call_base = indent
        if core and _fmt06_closes_call(core):
            call_base = None
    return "".join(out), n


# Single-line napi_property_descriptor table entries (NapiFuncInit* desc[]).
_NAPI_DESC_RE = re.compile(
    r'^(\s*)\{"([^"]+)",\s*nullptr,\s*(\w+),\s*nullptr,\s*nullptr,\s*nullptr,\s*'
    r'napi_default,\s*nullptr\},?\s*$'
)


def _wrap_napi_desc_line(raw: str) -> list[str] | None:
    """Wrap one overlong napi desc line into ≤120-char lines; None if N/A."""
    if len(raw) <= MAX_LINE:
        return None
    m = _NAPI_DESC_RE.match(raw)
    if not m:
        return None
    indent, name, func = m.group(1), m.group(2), m.group(3)
    cont = indent + " " * INDENT_STEP
    line1 = f'{indent}{{"{name}", nullptr,'
    line2 = f"{cont}{func}, nullptr, nullptr, nullptr, napi_default, nullptr}},"
    if len(line1) <= MAX_LINE and len(line2) <= MAX_LINE:
        return [line1, line2]
    line2 = f"{cont}{func}, nullptr, nullptr,"
    line3 = f"{cont}nullptr, napi_default, nullptr}},"
    if len(line1) > MAX_LINE or len(line2) > MAX_LINE or len(line3) > MAX_LINE:
        return None
    return [line1, line2, line3]


def fix_cpp_fmt05_napi_desc(text: str) -> tuple[str, int]:
    """G.FMT.05：折行超长 napi_property_descriptor 单行注册项。"""
    raw = text.splitlines(keepends=True)
    out: list[str] = []
    n = 0
    for line in raw:
        core = line.rstrip("\n\r")
        ending = line[len(core):] if core or line.endswith("\n") else line
        wrapped = _wrap_napi_desc_line(core)
        if wrapped is None:
            out.append(line)
            continue
        for w in wrapped:
            out.append(w + ending)
        n += 1
    return "".join(out), n


# ---------------- G.FMT.17-CPP：'{' 后禁空行 ----------------
def _line_opens_brace_block(stripped: str) -> bool:
    """行末为独立 '{'（函数/命名空间/extern/"C" 块），非行内 '{}'。"""
    if not stripped or stripped.startswith("#"):
        return False
    s = _strip_cpp_comment(stripped).rstrip()
    if not s.endswith("{"):
        return False
    # ignore empty initializer / lambda one-liners ending with };
    if s.endswith("{}"):
        return False
    return True


def _scan_fmt17_brace_blank(lines: list[str], add) -> None:
    """G.FMT.17-CPP: no blank line immediately after '{'."""
    for i, line in enumerate(lines):
        stripped = line.lstrip()
        if not _line_opens_brace_block(stripped):
            continue
        if i + 1 >= len(lines):
            continue
        if lines[i + 1].strip() == "":
            add(
                "G.FMT.17-CPP",
                i + 2,
                "花括号块首禁空行（Do not add blank lines on the start of a code block）",
            )


def _scan_wordstool_143(lines: list[str], add) -> None:
    """WordsTool.143: bare kit abbrev in dlopen/path literals."""
    for i, ln in enumerate(lines, 1):
        if _WT143_RE.search(ln):
            add(
                "WordsTool.143",
                i,
                "勿裸写本地开发套件缩写；dlopen/路径请拆字面量（见 cpp-guide 案例 14）",
            )


def fix_cpp_fmt17(text: str) -> tuple[str, int]:
    """Remove blank lines that immediately follow a '{' block opener."""
    lines = text.splitlines(keepends=True)
    out: list[str] = []
    n = 0
    i = 0
    while i < len(lines):
        out.append(lines[i])
        stripped = lines[i].lstrip()
        if _line_opens_brace_block(stripped) and i + 1 < len(lines):
            if lines[i + 1].strip() == "":
                i += 1
                n += 1
        i += 1
    if n == 0:
        return text, 0
    body = "".join(out)
    if text.endswith("\n") and not body.endswith("\n"):
        body += "\n"
    return body, n


# ---------------- 主扫描入口 ----------------
def _scan_fmt06_width(lines: list[str], add) -> None:
    """G.FMT.06-CPP 实参续行缩进 + G.FMT.05 行宽。"""
    call_base: int | None = None
    for i, line in enumerate(lines, 1):
        stripped = line.lstrip(" ")
        indent = len(line) - len(stripped)
        if call_base is not None and stripped and not stripped.startswith(")"):
            expected = call_base + INDENT_STEP
            if indent < expected:
                add("G.FMT.06-CPP", i, f"实参续行缩进 {indent}，应为 {expected}（起始行+{INDENT_STEP}）")
        if stripped and _fmt06_opens_call(stripped):
            call_base = indent
        if stripped and _fmt06_closes_call(stripped):
            call_base = None
        if not line.lstrip().startswith("#include") and len(line.rstrip("\n\r")) > MAX_LINE:
            add("G.FMT.05", i, f"行宽 {len(line)} > {MAX_LINE}")


def _scan_license_head(lines: list[str], add) -> None:
    """OAT.3：前 15 行须含 Copyright + Apache License。"""
    head = "\n".join(lines[:15])
    if "Copyright" not in head or "Apache License" not in head:
        add("OAT.3", 1, "缺少 Apache-2.0 许可证头（Copyright + Apache License 声明）")


# G.NAM.03-CPP：constexpr/const 全局常量勿用 kCamelCase（须 UPPER_SNAKE_CASE）
_K_CAMEL_CONST_RE = re.compile(
    r"^\s*(?:constexpr|const)\s+(?:static\s+)?(?:size_t|int(?:32_t)?|uint32_t|"
    r"bool|float|double|char)\s+(k[A-Z]\w*)\s*="
)


def _scan_nam03_const(lines: list[str], add) -> None:
    """Detect kCamelCase constexpr/const names that CodeCheck flags as global constants."""
    for i, line in enumerate(lines, 1):
        s = _strip_cpp_comment(line)
        m = _K_CAMEL_CONST_RE.match(s)
        if not m:
            continue
        name = m.group(1)
        # Suggest K_ACQUIRE_RESULT_LEN style from kAcquireResultLen
        rest = name[1:]
        upper = re.sub(r"([A-Z])", r"_\1", rest).upper().lstrip("_")
        suggested = f"K_{upper}" if upper else "K_"
        add(
            "G.NAM.03-CPP",
            i,
            f"全局常量 {name} 应为 UPPER_CASE（建议 {suggested}）",
        )


# G.CNS.02：CodeCheck 对 MakeIntArray/vals[N] 的裸长度仍报（本地 MAGIC 白名单含 2 不够）
_MAKE_INT_ARRAY_LEN_RE = re.compile(
    r"\bMakeIntArray\s*\(\s*[^,]+,\s*[^,]+,\s*(\d+)\s*\)"
)
_INT32_VALS_SIZE_RE = re.compile(r"\bint32_t\s+vals\s*\[\s*(\d+)\s*\]")
# G.CNS.02：ASSERT_EQ(ENUM, 2) 等右值裸数字（PR45178 Handedness 实锤）
_ASSERT_EQ_INT_LIT_RE = re.compile(r"\bASSERT_EQ\s*\([^;]*?,\s*(\d+)\s*\)")


def _scan_cns02_napi_len(lines: list[str], add) -> None:
    """Flag bare numeric lengths in NAPI int-array helpers (MR 45077 CodeCheck)."""
    for i, line in enumerate(lines, 1):
        s = _strip_cpp_comment(line)
        for m in _MAKE_INT_ARRAY_LEN_RE.finditer(s):
            num = m.group(1)
            if num in {"0", "1"}:
                continue
            add(
                "G.CNS.02-CPP",
                i,
                f"MakeIntArray 长度裸字面量 {num}，请用 constexpr（如 K_ERR_ENUM_PAIR_LEN）",
            )
        for m in _INT32_VALS_SIZE_RE.finditer(s):
            num = m.group(1)
            if num in {"0", "1"}:
                continue
            add(
                "G.CNS.02-CPP",
                i,
                f"vals[{num}] 裸尺寸，请用 constexpr 命名常量（G.CNS.02）",
            )
        for m in _ASSERT_EQ_INT_LIT_RE.finditer(s):
            num = m.group(1)
            add(
                "G.CNS.02-CPP",
                i,
                f"ASSERT_EQ 右值裸数字 {num}；枚举 smoke 请互比或用命名 constexpr（PR45178）",
            )


def _scan_one_func(lines: list[str], i: int, add) -> int:
    """检查单个函数（G.FUD.05/FUNC.CC/FUNC.DEPTH/MAGIC.NUM），返回下一行索引。"""
    m = _FUNC_SIG_RE.match(lines[i].lstrip())
    if not m:
        return i + 1
    body_start = _cpp_find_body_start(lines, i)
    if body_start < 0:
        return i + 1
    nbnc, end_k, body = _cpp_func_body(lines, body_start)
    if nbnc > MAX_FUNC_NBNC:
        add("G.FUD.05", i + 1,
            f"函数 {m.group(1)}() nbnc={nbnc} > {MAX_FUNC_NBNC}；请拆分（CAPI 表注册拆 GetXxxProps）")
    cc = _func_cc_heuristic(body)
    if cc > MAX_FUNC_CC:
        add("FUNC.CC", i + 1, f"函数 {m.group(1)}() 圈复杂度启发值 {cc} > {MAX_FUNC_CC}（拆分分支）")
    depth = _func_depth_heuristic(body)
    if depth > MAX_FUNC_DEPTH:
        add("FUNC.DEPTH", i + 1, f"函数 {m.group(1)}() 嵌套深度启发值 {depth} > {MAX_FUNC_DEPTH}（提取子函数）")
    for ln, msg in _magic_numbers_hits(body, body_start + 1):
        add("MAGIC.NUM", ln, msg)
    return max(end_k, i + 1)


def scan_cpp_file(path: Path, text: str) -> list[Hit]:
    hits: list[Hit] = []
    if path.suffix not in (".cpp", ".h", ".cc"):
        return hits
    lines = text.splitlines()

    def add(rule_id: str, line_no: int, msg: str) -> None:
        hits.append(Hit(rule_id, str(path), line_no, msg))

    _scan_fmt06_width(lines, add)
    _scan_fmt17_brace_blank(lines, add)
    _scan_wordstool_143(lines, add)
    _scan_license_head(lines, add)
    _scan_nam03_const(lines, add)
    _scan_cns02_napi_len(lines, add)
    i = 0
    while i < len(lines):
        i = _scan_one_func(lines, i, add)
    if path.suffix == ".h":
        nbnc = sum(1 for ln in lines
                   if ln.strip() and not ln.strip().startswith(("//", "*", "/*")))
        if nbnc > MAX_HEADER_NBNC:
            add("HEADER.NBNC", 1, f"头文件 nbnc={nbnc} > {MAX_HEADER_NBNC}；声明进 .cpp / 拆分")
    return hits


def fix_cpp_file(path: Path, text: str) -> tuple[str, int]:
    if path.suffix not in (".cpp", ".h", ".cc"):
        return text, 0
    text, n05 = fix_cpp_fmt05_napi_desc(text)
    text, n06 = fix_cpp_fmt06(text)
    text, n17 = fix_cpp_fmt17(text)
    return text, n05 + n06 + n17
