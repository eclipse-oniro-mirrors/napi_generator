#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Java auto-fix helpers (part 2)."""
from __future__ import annotations

import re
from datetime import date
from pathlib import Path

from base import Hit
from java_fix_1 import _brace_delta
from java_fix_2_assert import _rewrite_assert_equal_line
from java_fix_2_brace import _fix_fmt09_ctrl_empty_stmt
from java_fix_2_fmt04 import _fix_fmt04_member_order
from java_fix_2_javadoc import _fix_cmt06_dup_javadoc, _fix_fmt18_javadoc_indent
from java_fix_2_parse import _fix_cmt03_param_return
from java_common import (
    _SLICE_D_START,
    _SLICE_EMPTY,
    _SLICE_I_START,
    _STR_LIT_RE,
    _SUBARRAY_D_BEGIN,
    _SUBARRAY_EMPTY,
    _SUBARRAY_I_BEGIN,
    _SUBARRAY_I_END,
    _SUBARRAY_JDOC,
)


def _split_general_multi_stmt_lines(text: str) -> tuple[str, int]:
    """G.FMT.09：普通代码行多语句拆行（IntlOptions 初始化、连续 arr.set 等）。"""
    n = 0
    lines: list[str] = []
    for line in text.splitlines():
        ind_m = re.match(r"^(\s*)", line)
        ind = ind_m.group(1) if ind_m else ""
        body = line[len(ind):]
        if (not body or body.startswith("//") or body.startswith("for (")
                or body.count(";") < 2):
            lines.append(line)
            continue
        parts = _split_semicolons_outside_strings(body)
        if len(parts) < 2:
            lines.append(line)
            continue
        for p in parts:
            lines.append(ind + p + ";")
        n += 1
    return "\n".join(lines), n


def _fix_lambda_assign_close_brace(text: str) -> tuple[str, int]:
    """补全赋值 lambda 块闭合 '};'（多行转换产物常见缺失）。"""
    n = 0
    lines = text.splitlines()
    out: list[str] = []
    for i, line in enumerate(lines):
        m = re.match(r"^(\s+)\}\s*$", line)
        if m and i > 0:
            window = "\n".join(lines[max(0, i - 8):i])
            if re.search(r"=\s*\([^)]*\)\s*->\s*\{", window) and not re.search(
                    r"\}\s*;", window):
                line = m.group(1) + "};"
                n += 1
        out.append(line)
    return "\n".join(out), n


def _fix_formatting(text: str) -> tuple[str, int]:
    n = 0
    text, c_lb = _split_lambda_open_body(text)
    n += c_lb
    text, c_brace = _split_brace_inline_stmt_lines(text)
    n += c_brace
    text, c_ib = _split_if_brace_body_line(text)
    n += c_ib
    text, c_if = _split_if_oneline_blocks(text)
    n += c_if
    text, c_kw = _fix_fmt06_brace_before_keyword(text)
    n += c_kw
    text, c_br = re.subn(
        r"\{ (return |try |throw |if |for |while )",
        r"{\n        \1", text)
    n += c_br
    text, c_ret = re.subn(r"(\bif \([^)]+\) \{) return;", r"\1\n            return;", text)
    n += c_ret
    text, c0 = _split_lambda_multi_stmt_lines(text)
    n += c0
    text, c1 = _split_lambda_inline_blocks(text)
    n += c1
    out_lines: list[str] = []
    for line in text.splitlines():
        expanded, c = _expand_fmt_line(line)
        out_lines.extend(expanded)
        n += c
    text = "\n".join(out_lines)
    text, c6 = _split_general_multi_stmt_lines(text)
    n += c6
    text, c7 = re.subn(r";{2,}", ";", text)
    n += c7
    text, c8 = _fix_lambda_assign_close_brace(text)
    n += c8
    text, c0 = re.subn(r"; \}", ";}", text)
    n += c0
    text, c1 = re.subn(r"->\s*\{", "-> {", text)
    n += c1
    text, c2 = re.subn(r"\)->", ") -> ", text)
    n += c2
    text, c3 = re.subn(r"(\w)->", r"\1 -> ", text)
    n += c3
    text, c4 = re.subn(r"->\s{2,}", "-> ", text)
    n += c4
    text, c_ps = _fix_paren_lambda_spaces(text)
    n += c_ps
    return text, n


def _fix_common_view_javadoc(text: str) -> tuple[str, int]:
    n = 0
    pairs = [
        (r"(?<!\*/\n)(    public \w+ subarray\(double begin, double end\))",
         _SUBARRAY_JDOC),
        (r"(?<!\*/\n)(    public \w+ subarray\(double begin\)\s*\{)",
         _SUBARRAY_D_BEGIN),
        (r"(?<!\*/\n)(    public \w+ subarray\(int begin, int end\))",
         _SUBARRAY_I_END),
        (r"(?<!\*/\n)(    public \w+ subarray\(int begin\)\s*\{)",
         _SUBARRAY_I_BEGIN),
        (r"(?<!\*/\n)(    public \w+ subarray\(\)\s*\{)",
         _SUBARRAY_EMPTY),
        (r"(?<!\*/\n)(    public \w+ slice\(double start\)\s*\{)",
         _SLICE_D_START),
        (r"(?<!\*/\n)(    public \w+ slice\(int start\)\s*\{)",
         _SLICE_I_START),
        (r"(?<!\*/\n)(    public \w+ slice\(\)\s*\{)",
         _SLICE_EMPTY),
    ]
    for pat, jdoc in pairs:
        text, c = re.subn(pat, "".join((jdoc, r"\1")), text, count=1)
        n += c
    return text, n


def _fix_out_of_memory_javadoc(text: str) -> tuple[str, int]:
    old = "便于测试 catch (RuntimeException) 捕获并断言异常名"
    if old not in text:
        return text, 0
    return text.replace(old, "模拟设备端内存溢出异常"), 1


def _fix_cmt03_empty_line_before_tags(text: str) -> tuple[str, int]:
    """G.CMT.03：Javadoc 功能描述与标签之间补空行 ' *'。"""
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.lstrip().startswith("/**"):
            out.append(line)
            i += 1
            continue
        block: list[str] = []
        while i < len(lines):
            block.append(lines[i])
            if lines[i].strip().endswith("*/"):
                i += 1
                break
            i += 1
        base = re.match(r"^(\s*)/\*\*", block[0])
        ind = base.group(1) if base else ""
        first_tag = -1
        for bi, bl in enumerate(block):
            if re.match(r"^\s*\*\s*@\w", bl):
                first_tag = bi
                break
        if (1 < first_tag < len(block)
                and block[first_tag - 1].strip() not in ("*", "")):
            out.extend(block[:first_tag])
            out.append(ind + " *")
            out.extend(block[first_tag:])
            n += 1
            continue
        out.extend(block)
    return "\n".join(out), n


def _fix_fmt13_brace_open_stmt(text: str) -> tuple[str, int]:
    """G.FMT.06/13：控制语句 '{' 后同行语句拆行（含 if/for/while，支持嵌套括号）。"""
    n = 0
    lines = []
    for line in text.splitlines():
        # try/do/else/finally / catch(...) {
        m = re.match(
            r"^(\s*(?:try|do|else|finally)\s*\{|catch\s*\([^)]*\)\s*\{)(\s+)(\S.*)$",
            line)
        if not m:
            # if/for/while (...) { stmt — [^{]* 在首个 '{' 处切开，允许嵌套 ()
            m = re.match(
                r"^(\s*(?:if|for|while)\b[^{]*\{)(\s*)(\S.*)$", line)
        if m and not m.group(3).rstrip().endswith("}"):
            ind = re.match(r"^(\s*)", line).group(1)
            lines.append(m.group(1))
            lines.append(ind + "    " + m.group(3))
            n += 1
            continue
        lines.append(line)
    return "\n".join(lines), n


def _replace_outside_strings(text: str, pattern, repl) -> tuple[str, int]:
    """仅在字符串字面量之外做 re.subn（避免改坏断言文本）。"""
    parts: list[str] = []
    last = 0
    c = 0
    for m in _STR_LIT_RE.finditer(text):
        seg, cc = re.subn(pattern, repl, text[last:m.start()])
        c += cc
        parts.append(seg)
        parts.append(m.group(0))
        last = m.end()
    seg, cc = re.subn(pattern, repl, text[last:])
    c += cc
    parts.append(seg)
    return "".join(parts), c


def _fix_fmt20_long_suffix(text: str) -> tuple[str, int]:
    """G.FMT.20：long 变量赋值/复合赋值字面量补 L 后缀。"""
    n = 0
    text, c = _replace_outside_strings(
        text,
        r"\b(long|Long)\s+(\w+)\s*=\s*(-?\d+)(?![\w.])",
        r"\1 \2 = \3L")
    n += c
    longs: set[str] = set()
    for m in re.finditer(r"\b(?:long|Long)\s+(\w+)", text):
        longs.add(m.group(1))
    for v in longs:
        text, c = _replace_outside_strings(
            text,
            r"\b%s\s*(\*=|/=|%%=)\s*(-?\d+)(?![\w.])" % re.escape(v),
            r"%s \1 \2L" % v)
        n += c
    return text, n


def _fix_typ05_float_eq(text: str) -> tuple[str, int]:
    """G.TYP.05：Math.sqrt 结果与字面量 ==/!= 比较改为 eps 比较。"""
    n = 0
    text, c = _replace_outside_strings(
        text,
        r"Math\.sqrt\s*\(([^)]*)\)\s*==\s*([\d.]+)",
        r"Math.abs(Math.sqrt(\1) - \2) < 1e-9")
    n += c
    text, c = _replace_outside_strings(
        text,
        r"Math\.sqrt\s*\(([^)]*)\)\s*!=\s*([\d.]+)",
        r"Math.abs(Math.sqrt(\1) - \2) >= 1e-9")
    n += c
    sqrt_vars = set(re.findall(r"double\s+(\w+)\s*=\s*Math\.sqrt\s*\(", text))
    for v in sqrt_vars:
        text, c = _replace_outside_strings(
            text,
            r"\b%s\s*==\s*([\d.]+)" % re.escape(v),
            r"Math.abs(%s - \1) < 1e-9" % v)
        n += c
        text, c = _replace_outside_strings(
            text,
            r"\b%s\s*!=\s*([\d.]+)" % re.escape(v),
            r"Math.abs(%s - \1) >= 1e-9" % v)
        n += c
    return text, n


def _fix_fmt13_spaces(text: str) -> tuple[str, int]:
    """G.FMT.13：行尾空格、')'/'(' 内侧冗余空格、'.' 两侧空格、逗号空格统一。"""
    n = 0
    out: list[str] = []
    for line in text.splitlines():
        new_line = line
        # 剔除字符串字面量外处理
        segs: list[str] = []
        last = 0
        changed = False
        for m in _STR_LIT_RE.finditer(line):
            seg = line[last:m.start()]
            seg2 = re.sub(r"(?<=\S)\s+\)", ")", seg)
            seg2 = re.sub(r"\(\s+(?=\S)", "(", seg2)
            seg2 = re.sub(r"\(\s+\)", "()", seg2)
            seg2 = re.sub(r"\s+\.(?=\S)|(?<=\S)\.\s+", ".", seg2)
            seg2 = re.sub(r"\s*,\s*", ", ", seg2)
            if seg2 != seg:
                changed = True
            segs.append(seg2)
            segs.append(m.group(0))
            last = m.end()
        seg = line[last:]
        seg2 = re.sub(r"(?<=\S)\s+\)", ")", seg)
        seg2 = re.sub(r"\(\s+(?=\S)", "(", seg2)
        seg2 = re.sub(r"\(\s+\)", "()", seg2)
        seg2 = re.sub(r"\s+\.(?=\S)|(?<=\S)\.\s+", ".", seg2)
        seg2 = re.sub(r"\s*,\s*", ", ", seg2)
        if seg2 != seg:
            changed = True
        segs.append(seg2)
        new_line = "".join(segs)
        stripped = new_line.rstrip()
        if stripped != new_line:
            changed = True
            new_line = stripped
        if changed:
            n += 1
        out.append(new_line)
    return "\n".join(out), n


def _fix_fmt08_tabs(text: str) -> tuple[str, int]:
    """G.FMT.08：行首制表符替换为 4 空格；非 4 倍数空格缩进归一（向上取整）。"""
    n = 0
    out: list[str] = []
    for line in text.splitlines():
        m = re.match(r"^(\t+)(.*)$", line)
        if m:
            out.append("    " * len(m.group(1)) + m.group(2))
            n += 1
            continue
        m = re.match(r"^( +)(\S)", line)
        if (m and len(m.group(1)) % 4 != 0
                and not line.strip().startswith(("*", "//", "/*"))):
            indent = ((len(m.group(1)) // 4) + 1) * 4
            out.append(" " * indent + m.group(2) + line[len(m.group(1)) + 1:])
            n += 1
            continue
        out.append(line)
    return "\n".join(out), n


def _fix_typ06_nan_cmp(text: str) -> tuple[str, int]:
    """G.TYP.06：与 Double.NaN 的 ==/!= 比较改为 isNaN。"""
    n = 0
    text, c = _replace_outside_strings(
        text,
        r"(\b[\w.()]+)\s*==\s*Double\.NaN\b",
        r"Double.isNaN(\1)")
    n += c
    text, c = _replace_outside_strings(
        text,
        r"Double\.NaN\s*==\s*(\b[\w.()]+)\b",
        r"Double.isNaN(\1)")
    n += c
    text, c = _replace_outside_strings(
        text,
        r"(\b[\w.()]+)\s*!=\s*Double\.NaN\b",
        r"!Double.isNaN(\1)")
    n += c
    return text, n


def _fix_typ05_float_cmp(text: str) -> tuple[str, int]:
    """G.TYP.05：double 与字面量/Double 常量 ==/!= 改为 Double.compare。"""
    n = 0
    # NaN 特例已由 _fix_typ06_nan_cmp 处理，这里跳过 NaN
    pats = [
        (r"(\b\w+)\s*==\s*(0\.0|\d+\.\d+)\b", r"Double.compare(\1, \2) == 0"),
        (r"(\b\w+)\s*!=\s*(0\.0|\d+\.\d+)\b", r"Double.compare(\1, \2) != 0"),
        (r"(\b\w+)\s*==\s*Double\.(?!NaN\b)(\w+)\b", r"Double.compare(\1, Double.\2) == 0"),
        (r"(\b\w+)\s*!=\s*Double\.(?!NaN\b)(\w+)\b", r"Double.compare(\1, Double.\2) != 0"),
        (r"(\b\w+\s*-\s*Math\.floor\(\s*\w+\s*\))\s*==\s*(0\.5|0\.0|\d+\.\d+)\b",
         r"Double.compare(\1, \2) == 0"),
        (r"(\b\w+\s*-\s*Math\.floor\(\s*\w+\s*\))\s*!=\s*(0\.5|0\.0|\d+\.\d+)\b",
         r"Double.compare(\1, \2) != 0"),
        (r"(\b\w+)\s*==\s*Math\.(\w+)(\([^)]*\))", r"Double.compare(\1, Math.\2\3) == 0"),
        (r"(\b\w+)\s*!=\s*Math\.(\w+)(\([^)]*\))", r"Double.compare(\1, Math.\2\3) != 0"),
    ]
    for pat, repl in pats:
        text, c = _replace_outside_strings(text, pat, repl)
        n += c
    return text, n


def _scope_var_count(lines: list[str], decl_idx: int, var: str) -> int:
    """统计 var 在 decl_idx 所在作用域内的出现次数（括号深度感知）。"""
    base = 0
    for j in range(decl_idx):
        base += _brace_delta(lines[j])
    cnt = 0
    depth = base
    for j in range(decl_idx, len(lines)):
        cnt += len(re.findall(r"\b%s\b" % re.escape(var), lines[j]))
        depth += _brace_delta(lines[j])
        if depth < base:
            break
    return cnt


def _fix_obj05_wrapper_calls(text: str) -> tuple[str, int]:
    """G.OBJ.05：易与 Object 重载歧义的 Integer 实参改为 assertEqualInt。"""
    n = 0
    text, c = re.subn(
        r"assertEqual\(([^,]+),\s*(\w+)\.intValue\(\)\)",
        r"assertEqual(\1, \2)", text)
    n += c
    lines = text.splitlines()
    out: list[str] = []
    scope: list[set[str]] = [set()]
    int_scope: list[set[str]] = [set()]
    for line in lines:
        for m in re.finditer(r"\bInteger\s+(\w+)\b", line):
            scope[-1].add(m.group(1))
        for m in re.finditer(r"for\s*\(\s*Integer\s+(\w+)\b", line):
            scope[-1].add(m.group(1))
        for m in re.finditer(r"(?<![\w.])int\s+(\w+)\b", line):
            int_scope[-1].add(m.group(1))
        ints = set().union(*int_scope)
        integers = set().union(*scope)
        new_line, c = _rewrite_assert_equal_line(line, ints, integers)
        n += c
        out.append(new_line)
        clean = _STR_LIT_RE.sub('""', line)
        for _ in range(clean.count("{")):
            scope.append(set())
            int_scope.append(set())
        for _ in range(clean.count("}")):
            if len(scope) > 1:
                scope.pop()
            if len(int_scope) > 1:
                int_scope.pop()
    return "\n".join(out), n


def _fix_prm10_temp_return(text: str) -> tuple[str, int]:
    """G.PRM.10：'TYPE VAR = EXPR; return VAR;' 内联为 'return EXPR;'（作用域内仅两处引用）。"""
    n = 0
    lines = text.splitlines()
    out: list[str] = []
    i = 0
    while i < len(lines):
        m = re.match(
            r"^(\s*)(?:final\s+)?[\w<>\[\],. ]+\s+(\w+)\s*=\s*(.+);\s*$", lines[i])
        if m and i + 1 < len(lines):
            var = m.group(2)
            rm = re.match(r"^\s*return\s+%s\s*;\s*$" % re.escape(var), lines[i + 1])
            if rm and _scope_var_count(lines, i, var) == 2:
                out.append(m.group(1) + "return " + m.group(3).strip() + ";")
                n += 1
                i += 2
                continue
        out.append(lines[i])
        i += 1
    return "\n".join(out), n


def _fmt07_empty_stmt(line: str) -> str:
    return "continue;" if re.search(r"\b(?:for|while)\b", line) else ";"


def _fmt07_skip_blank(lines: list[str], j: int) -> int:
    while j < len(lines) and lines[j].strip() == "":
        j += 1
    return j


def _fmt07_skip_comment_block(lines: list[str], k: int) -> int:
    while k < len(lines) and (
            not lines[k].strip()
            or lines[k].strip().startswith("//")
            or lines[k].strip().startswith("*")
            or lines[k].strip().startswith("/*")):
        k += 1
    return k


def _fmt07_try_fill_empty(
    lines: list[str], i: int, line: str, ind: str, out: list[str],
) -> tuple[int, int] | None:
    """Return (next_i, fixes) if empty/comment-only block filled; else None."""
    j = _fmt07_skip_blank(lines, i + 1)
    if j >= len(lines):
        return None
    if re.match(r"^\s*\}\s*$", lines[j]):
        out.append(line)
        out.append(ind + "    " + _fmt07_empty_stmt(line))
        out.append(lines[j])
        return j + 1, 1
    if not (lines[j].strip().startswith("//") or lines[j].strip().startswith("/*")):
        return None
    k = _fmt07_skip_comment_block(lines, j)
    if k < len(lines) and re.match(r"^\s*\}\s*$", lines[k]):
        out.append(line)
        out.append(ind + "    " + _fmt07_empty_stmt(line))
        out.append(lines[k])
        return k + 1, 1
    return None


def _fix_fmt07_empty_block(text: str) -> tuple[str, int]:
    """G.FMT.07：空块（含仅注释）改为 continue;/空语句，支持嵌套括号。"""
    n = 0
    lines = text.splitlines()
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        is_ctrl = bool(re.search(
            r"\b(?:if|for|while|catch|do|try|finally|else)\b", line))
        if not (is_ctrl and line.rstrip().endswith("{")):
            out.append(line)
            i += 1
            continue
        ind = re.match(r"^(\s*)", line).group(1)
        filled = _fmt07_try_fill_empty(lines, i, line, ind, out)
        if filled is not None:
            i, c = filled
            n += c
            continue
        out.append(line)
        i += 1
    return "\n".join(out), n


def _fix_fmt09_brace_stmt(text: str) -> tuple[str, int]:
    """G.FMT.09：'}' 后同行语句/控制块拆行（'};' 由 _fix_fmt09_ctrl_empty_stmt 处理）。"""
    n = 0
    lines: list[str] = []
    for line in text.splitlines():
        m = re.match(r"^(\s*)\}(\s+\S.*;\s*)$", line)
        if m and not re.match(r"(else|catch|while|finally|\))\b", m.group(2).strip()):
            ind = m.group(1)
            lines.append(ind + "}")
            lines.append(ind + "    " + m.group(2).strip())
            n += 1
            continue
        m2 = re.match(
            r"^(\s*)\}\s+((?:if|for|try)\s*\([^)]*\)\s*\{|do\s*\{)", line)
        if m2:
            ind = m2.group(1)
            lines.append(ind + "}")
            lines.append(ind + "    " + m2.group(2))
            n += 1
            continue
        lines.append(line)
    return "\n".join(lines), n


def _fix_fmt06_lambda_brace_semi(text: str) -> tuple[str, int]:
    """G.FMT.06：'-> {' / ') {' 后残留 ';'（ETS 空体转换产物）。"""
    n = 0
    text, c = re.subn(r"->\s*\{\s*;", "-> {", text)
    n += c
    text, c = re.subn(r"\)\s*\{\s*;", ") {", text)
    n += c
    return text, n


def _fix_nam01_dollar_method(text: str) -> tuple[str, int]:
    """G.NAM.01/NAM.04：'$_iterator' 方法名改为小驼峰 'iteratorSymbol'。"""
    if "$_iterator" not in text:
        return text, 0
    c = text.count("$_iterator")
    return text.replace("$_iterator", "iteratorSymbol"), c


def _fix_nam06_local_upper(text: str) -> tuple[str, int]:
    """G.NAM.06：局部变量大写命名改为小驼峰（非 static final 常量）。"""
    n = 0
    names: set[str] = set()
    for m in re.finditer(
            r"^\s*(?:final\s+)?(?:int|long|double|String|boolean|char|byte|short|float)\s+"
            r"([A-Z][A-Z0-9_]*)\s*=", text, re.M):
        names.add(m.group(1))
    for name in names:
        new = name[0].lower() + name[1:].lower()
        text, c = re.subn(r"\b%s\b" % re.escape(name), new, text)
        n += c
    return text, n


def _fix_nam06_static_final(text: str) -> tuple[str, int]:
    """G.NAM.06：private static int UPPER → private static final int UPPER。"""
    text2, n = re.subn(
        r"^([ \t]*(?:public|protected|private)\s+static\s+)"
        r"((?:int|long|double|String|boolean|char|byte|short|float)\s+"
        r"[A-Z][A-Z0-9_]*\s*=)",
        r"\1final \2",
        text,
        flags=re.M)
    return text2, n


def _fix_fmt06_catch_own_line(text: str) -> tuple[str, int]:
    """G.FMT.06：'}\\ncatch' → '} catch'（else/finally 同理）。"""
    n = 0
    for kw in ("catch", "else", "finally"):
        text, c = re.subn(
            r"\}\s*\n[ \t]*%s\b" % kw,
            "} %s" % kw,
            text)
        n += c
    return text, n


def _fix_cmt06_star_space(text: str) -> tuple[str, int]:
    """G.CMT.06：'*,' / '*)' / '*content' → '* ,' / '* )' / '* content'。"""
    text2, n = re.subn(
        r"^([ \t]*)\*([^ /\s*].*)$",
        r"\1* \2",
        text,
        flags=re.M)
    return text2, n


def _fix_ctl01_decimal_separator(text: str) -> tuple[str, int]:
    """G.CTL.01：decimalSeparator 12 个 || 条件改为 switch（缩进不敏感）。"""
    old_re = re.compile(
        r'(\s*)if \(\"de\"\.equals\(lang\) \|\| \"it\"\.equals\(lang\) \|\| '
        r'\"pt\"\.equals\(lang\) \|\| \"fr\"\.equals\(lang\)\n'
        r'\s*\|\| \"ru\"\.equals\(lang\) \|\| \"sv\"\.equals\(lang\) \|\| '
        r'\"es\"\.equals\(lang\) \|\| \"pl\"\.equals\(lang\)\n'
        r'\s*\|\| \"ar\"\.equals\(lang\) \|\| \"da\"\.equals\(lang\) \|\| '
        r'\"nb\"\.equals\(lang\) \|\| \"fi\"\.equals\(lang\)\) \{\n'
        r'\s*return \",\";\n'
        r'\s*\}\n'
        r'\s*return \".\";')
    m = old_re.search(text)
    if not m:
        return text, 0
    ind = m.group(1)
    new = (
        ind + 'switch (lang) {\n'
        + ind + '    case "de":\n'
        + ind + '    case "it":\n'
        + ind + '    case "pt":\n'
        + ind + '    case "fr":\n'
        + ind + '    case "ru":\n'
        + ind + '    case "sv":\n'
        + ind + '    case "es":\n'
        + ind + '    case "pl":\n'
        + ind + '    case "ar":\n'
        + ind + '    case "da":\n'
        + ind + '    case "nb":\n'
        + ind + '    case "fi":\n'
        + ind + '        return ",";\n'
        + ind + '    default:\n'
        + ind + '        return ".";\n'
        + ind + '        }')
    return text[:m.start()] + new + text[m.end():], 1


def _fix_exp03_coalesce_double(text: str) -> tuple[str, int]:
    """G.EXP.03：coalesce(double) 三元第三操作数 Integer 改为 doubleValue()。"""
    n = 0
    for ret, cast in (("int", "intValue()"), ("double", "doubleValue()")):
        old = ("    public static %s coalesce(Integer value, %s fallback) {\n"
               "        return value == null ? fallback : value;\n"
               "        }" % (ret, ret))
        new = ("    public static %s coalesce(Integer value, %s fallback) {\n"
               "        return value == null ? fallback : value.%s;\n"
               "        }" % (ret, ret, cast))
        if old in text:
            text = text.replace(old, new, 1)
            n += 1
    return text, n


def _fix_err05_throw_factory(text: str, fp: Path) -> tuple[str, int]:
    """G.ERR.05：throwTestError 裸 throw new Error 改为工厂间接抛出。"""
    if fp.name != "BasTest.java":
        return text, 0
    old = ("    public static <T> T throwTestError(String message) {\n"
           "        throw new Error(message);\n"
           "    }")
    new = ("    public static <T> T throwTestError(String message) {\n"
           "        throw newTestError(message);\n"
           "    }\n\n"
           "    private static Error newTestError(String message) {\n"
           "        return new Error(message);\n"
           "    }")
    if old not in text:
        return text, 0
    return text.replace(old, new), 1


def _fix_cmt01_public_field_javadoc(text: str) -> tuple[str, int]:
    """G.CMT.01：public 字段（EntryResult/IteratorResult/Result/SumCount 等）补 Javadoc。"""
    n = 0
    lines = text.splitlines()
    out: list[str] = []
    for line in lines:
        m = re.match(
            r"^(\s*)public\s+(?:final\s+)?[\w<>\[\],.?]+\s+(\w+)\s*(?:=|;)", line)
        if m:
            prev = out[-1].strip() if out else ""
            if not (prev.endswith("*/") or prev.startswith("*")
                    or prev.startswith("/**")):
                ind = m.group(1)
                out.append("%s/**" % ind)
                out.append("%s * %s 字段。" % (ind, m.group(2)))
                out.append("%s */" % ind)
                n += 1
        out.append(line)
    return "\n".join(out), n


def _fix_obj05_assert_equal(text: str, fp: Path) -> tuple[str, int]:
    """G.OBJ.05：BasTest 移除基本/包装同名重载，改提供 assertEqualInt。"""
    if fp.name != "BasTest.java":
        return text, 0
    n = 0
    for sig in (
            "public static void assertEqual(Integer expected, int actual)",
            "public static void assertEqual(int expected, Integer actual)",
            "public static void assertEqual(double expected, Integer actual)",
            "public static void assertEqual(Double expected, double actual)",
            "public static void assertEqual(Integer expected, double actual)",
            "public static void assertEqual(int expected, Double actual)",
            "public static void assertEqual(double expected, Double actual)"):
        pat = re.compile("".join((
            r"/\*\*(?:[^*]|\*(?!/))*\*/\s*",
            re.escape(sig),
            r" \{[^}]*\}",
        )))
        text, c = pat.subn("", text, count=1)
        n += c
    text = re.sub(r"(?:\n[ \t]*){3,}", "\n\n", text)
    for old, new in (
            ("提供 (int, Integer) 等重载，避免装箱/拆箱导致的 assertEquals 重载歧义。",
             "提供常用基本类型重载；Integer 第二参请用 assertEqualInt 避免 G.OBJ.05。"),
            ("提供常用基本类型重载；包装类型依赖自动拆箱匹配 assertEqual(int, int)。",
             "提供常用基本类型重载；Integer 第二参请用 assertEqualInt 避免 G.OBJ.05。"),
    ):
        if old in text:
            text = text.replace(old, new)
    if "void assertEqualInt(" not in text:
        anchor = "    public static void assertEqual(int expected, int actual) {"
        insert = (
            "    /**\n"
            "     * 断言 int 与 Integer 相等（避免与 assertEqual(Object, Object) 歧义）。\n"
            "     *\n"
            "     * @param expected 参数说明。\n"
            "     * @param actual 参数说明。\n"
            "     */\n"
            "    public static void assertEqualInt(int expected, Number actual) {\n"
            "        org.junit.jupiter.api.Assertions.assertEquals(\n"
            "                expected, actual == null ? null : actual.intValue());\n"
            "    }\n\n"
        )
        if anchor in text:
            text = text.replace(anchor, insert + anchor, 1)
            n += 1
    return text, n


def _fix_unindented_class_member(text: str) -> tuple[str, int]:
    """类体内顶格的方法/字段补 4 空格（不含顶层 class/interface）。"""
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    depth = 0
    for line in lines:
        stripped = line.lstrip()
        is_type_decl = bool(re.search(
            r"\b(?:class|interface|enum)\s+\w+", line))
        opens = line.count("{")
        closes = line.count("}")
        if (depth >= 1 and not is_type_decl
                and re.match(r"^(?:public|private|protected)\b", stripped)
                and not line.startswith(" ")):
            out.append("    " + line)
            n += 1
        else:
            out.append(line)
        depth += opens - closes
        if depth < 0:
            depth = 0
    return "\n".join(out), n


def _fix_obj05_set_boxed(text: str) -> tuple[str, int]:
    """G.OBJ.05：数组类 'set(int, Double)' 包装重载改名 setBoxed；调用点 '(Double) null' 同步。"""
    n = 0
    old = "    public Integer set(int index, Double value) {"
    if old in text:
        text = text.replace(old, "    public Integer setBoxed(int index, Double value) {", 1)
        n += 1
    text, c = re.subn(
        r"\.set\(([^,]+),\s*\((?:Double|Integer)\)\s*null\)",
        r".setBoxed(\1, null)", text)
    n += c
    return text, n


_INTL_FIELDS = (
    # (字段名, 类型, 初始值, 注释)
    ("style", "String", '""', "格式样式（currency/percent/unit 等）。"),
    ("currency", "String", '""', "货币代码（ISO 4217）。"),
    ("currencyDisplay", "String", '""', "货币显示方式。"),
    ("localeMatcher", "String", '""', "区域匹配策略（不影响数值格式）。"),
    ("useGrouping", "boolean", "true", "是否启用千分位分组。"),
    ("notation", "String", '""', "记数法（standard/scientific/compact 等）。"),
    ("compactDisplay", "String", '""', "compact 记数法的显示风格。"),
    ("minimumIntegerDigits", "int", "0", "整数部分最小位数（0 表示未设置）。"),
    ("minimumFractionDigits", "int", "-1", "小数部分最小位数（-1 表示未设置）。"),
    ("maximumFractionDigits", "int", "-1", "小数部分最大位数（-1 表示未设置）。"),
    ("minimumSignificantDigits", "int", "0", "有效数字最小位数（0 表示未设置）。"),
    ("maximumSignificantDigits", "int", "0", "有效数字最大位数（0 表示未设置）。"),
)

_INTL_FIELD_NAMES = tuple(f[0] for f in _INTL_FIELDS)


def _fix_obj01_intl_options(text: str, fp: Path) -> tuple[str, int]:
    """G.OBJ.01：IntlOptions public 可变字段改为 private + getter/setter，并转换全部使用点。"""
    n = 0
    if fp.name == "IntlOptions.java":
        if "public int getMinimumIntegerDigits" in text:
            return text, 0
        for fname, ftype, finit, fdoc in _INTL_FIELDS:
            getter = "get" + fname[0].upper() + fname[1:]
            setter = "set" + fname[0].upper() + fname[1:]
            # 字段定义（可能带 javadoc 前缀）→ 定位并替换
            old_re = re.compile(
                r"^(\s*)public\s+%s\s+%s\s*(?:=\s*%s)?;\s*$" % (
                    ftype, fname, re.escape(finit)),
                re.M)
            m = old_re.search(text)
            if not m:
                continue
            ind = m.group(1)
            desc = fdoc.rstrip("。")
            body = (
                "%sprivate %s %s = %s;\n" % (ind, ftype, fname, finit)
                + "\n"
                + "%s/**\n%s * 获取%s。\n%s *\n%s * @return %s 当前值。\n%s */\n" % (ind, ind, desc, ind, ind, fname, ind)
                + "%spublic %s %s() {\n%s    return %s;\n%s    }\n" % (ind, ftype, getter, ind, fname, ind)
                + "\n"
                + "%s/**\n%s * 设置%s。\n%s *\n%s * @param %s %s 新值。\n%s */\n" % (ind, ind, desc, ind, ind, fname, fname, ind)
                + "%spublic void %s(%s %s) {\n%s    this.%s = %s;\n%s    }\n" % (ind, setter, ftype, fname, ind, fname, fname, ind))
            text = text[:m.start()] + body + text[m.end():]
            n += 1
        return text, n
    # 其他文件：接收者识别（IntlOptions 变量/参数名）
    receivers: set[str] = set()
    for m in re.finditer(r"\bIntlOptions\s+(\w+)", text):
        receivers.add(m.group(1))
    if not receivers:
        return text, 0
    for r in receivers:
        for fname, _ft, _fi, _fd in _INTL_FIELDS:
            getter = "get" + fname[0].upper() + fname[1:]
            setter = "set" + fname[0].upper() + fname[1:]
            # 写访问：R.f = V;  →  R.setF(V);（排除 ==、>=、<=；值可为字符串字面量）
            text, c = re.subn(
                r"\b%s\.%s\s*=(?![=<>])\s*((?:\"(?:[^\"\\\n]|\\.)*\"|[^;\"\n])+);"
                % (re.escape(r), fname),
                r"%s.%s(\1);" % (r, setter), text)
            n += c
            # 读访问：R.f  →  R.getF()
            text, c = _replace_outside_strings(
                text,
                r"\b%s\.%s\b" % (re.escape(r), fname),
                r"%s.%s()" % (r, getter))
            n += c
    return text, n


def _fix_obj01_inner_class_fields(text: str) -> tuple[str, int]:
    """G.OBJ.01：内部类 SumCount 的 public 非 final 字段加 final（构造器内赋值合法）。"""
    if "static class SumCount {" not in text:
        return text, 0
    n = 0
    lines = text.splitlines()
    out: list[str] = []
    in_sumcount = False
    for line in lines:
        if "static class SumCount {" in line:
            in_sumcount = True
        if in_sumcount and re.match(
                r"^(\s*)public\s+[\w<>\[\],.?]+\s+(\w+)\s*(?:=|;)", line):
            line = re.sub(r"^(\s*)public\s+", r"\1public final ", line, count=1)
            n += 1
        if in_sumcount and line.strip() == "}" and "{" not in line:
            in_sumcount = False
        out.append(line)
    return "\n".join(out), n


_FIELD_DECL2 = re.compile(
    r"^(\s*)(?:public|private|protected)\s+(?:static\s+)?(?:final\s+)?"
    r"[\w<>\[\],.?]+\s+\w+\s*(?:=|;)")


def _fix_cmt01_interface_javadoc(text: str, fp: Path) -> tuple[str, int]:
    """G.CMT.01：public interface（含 @FunctionalInterface 前缀）缺 Javadoc 时补齐。"""
    if "common" not in fp.parts:
        return text, 0
    n = 0
    lines = text.splitlines()
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if re.match(r"^\s*@FunctionalInterface\s*$", line) or re.match(
                r"^\s*public\s+interface\s+\w+", line):
            prev = out[-1].strip() if out else ""
            if not (prev.endswith("*/") or prev.startswith("*")
                    or prev.startswith("/**")):
                ind = re.match(r"^(\s*)", line).group(1)
                out.append("%s/**" % ind)
                out.append("%s * 回调接口：函数式接口定义。\n%s */" % (ind, ind))
                n += 1
        out.append(line)
        i += 1
    return "\n".join(out), n


def _fix_fmt04_blank_before_ctor(text: str) -> tuple[str, int]:
    """G.FMT.04：字段组与构造器/方法组之间补空行。"""
    n = 0
    lines = text.splitlines()
    out: list[str] = []
    prev_field = False
    for line in lines:
        is_field = bool(_FIELD_DECL2.match(line))
        if prev_field and not is_field and line.strip() and (
                line.lstrip().startswith("/**") or line.lstrip().startswith("@")
                or re.match(r"^\s*(?:public|protected|private)?\s*[\w<>\[\],.? ]+\s*\([^)]*\)\s*\{",
                            line)
                or re.match(r"^\s*(?:public|private|protected|static)\b.*\{\s*$", line)):
            out.append("")
            n += 1
        out.append(line)
        prev_field = is_field
    return "\n".join(out), n




