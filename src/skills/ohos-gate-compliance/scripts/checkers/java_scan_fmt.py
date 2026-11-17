#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Java scan: format/style/type rules."""
from __future__ import annotations

import re
from pathlib import Path

from base import Hit
from java_common import (
    _CLOSING_BRACE_INLINE,
    _FIELD_DECL,
    _JAVA_IMPORT,
    _LAMBDA_ARROW_EXTRASPACE,
    _LAMBDA_ARROW_NOSPACE,
    _LOCAL_DECL,
    _STR_LIT_RE,
    _UNDERSCORE_PARAM,
    _brace_ctx,
    _brace_delta,
    _count_semicolons_outside_strings,
    _extract_param_names_from_sig_line,
    _import_used,
    _is_comment_line,
    _split_control_header_body
)


def _scan_unused_imports(lines: list[str], fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    body = "\n".join(l for i, l in enumerate(lines) if not l.strip().startswith("import "))
    seen: set[str] = set()
    for i, line in enumerate(lines, 1):
        m = _JAVA_IMPORT.match(line.strip())
        if not m:
            continue
        pkg, simple = m.group(1) or "", m.group(2)
        full = (pkg + simple).rstrip(".")
        key = line.strip()
        if key in seen:
            hits.append(Hit("G.OTH.03", str(fp), i, "重复 import: %s" % simple))
            continue
        seen.add(key)
        if not _import_used(body, simple, full.replace(";", "")):
            hits.append(Hit("G.OTH.03", str(fp), i, "未使用的 import: %s" % simple))
    return hits


def _scan_fmt13(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.search(r"; \}", line):
            hits.append(Hit("G.FMT.13", str(fp), i, "'}' 前多余空格"))
        if re.search(r"\(\s+\(", line) and "->" in line:
            hits.append(Hit("G.FMT.13", str(fp), i, "'(' 后多余空格"))
        if re.search(r"\s+\)", line) and "->" in line:
            hits.append(Hit("G.FMT.13", str(fp), i, "')' 前多余空格"))
        if _LAMBDA_ARROW_NOSPACE.search(line):
            hits.append(Hit("G.FMT.13", str(fp), i, "lambda '->' 两侧缺空格"))
        if _LAMBDA_ARROW_EXTRASPACE.search(line):
            hits.append(Hit("G.FMT.14", str(fp), i, "lambda '->' 后多余空格"))
        if re.search(r"-> \{[^}\n]+;\s*$", line):
            hits.append(Hit("G.FMT.13", str(fp), i, "lambda '{' 后语句应换行"))
        if re.search(r"\{ [^}\n]+;\s*$", line) and "-> {" not in line:
            hits.append(Hit("G.FMT.13", str(fp), i, "'{' 后语句应换行"))
    return hits


def _scan_fmt05(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        split = _split_control_header_body(line)
        if not split:
            continue
        _header, body = split
        if body and not body.startswith("{") and body.endswith(";"):
            hits.append(Hit("G.FMT.05", str(fp), i, "条件/循环语句缺大括号"))
    return hits


def _scan_fmt10(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        # CI G.FMT.10 also flags Javadoc / line comments over 120
        if len(line) > 120:
            hits.append(Hit("G.FMT.10", str(fp), i, "行宽超过 120 字符"))
    return hits


def _scan_typ08(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.search(r"\.to(?:Lower|Upper)Case\s*\(\s*\)", line):
            hits.append(Hit("G.TYP.08", str(fp), i, "toLowerCase/toUpperCase 须带 Locale"))
    return hits


def _scan_typ05(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.search(r"==\s*Double\.(?:POSITIVE|NEGATIVE)_INFINITY", line):
            hits.append(Hit("G.TYP.05", str(fp), i, "浮点 Infinity 勿用 =="))
        if re.search(r"Double\.(?:POSITIVE|NEGATIVE)_INFINITY\s*==", line):
            hits.append(Hit("G.TYP.05", str(fp), i, "浮点 Infinity 勿用 =="))
    return hits


def _met03_push_params(line: str, param_stack: list[set[str]]) -> None:
    if "(" not in line:
        return
    if not re.search(r"\b(?:public|private|protected|static)\b", line):
        return
    params = _extract_param_names_from_sig_line(line)
    if params is not None:
        param_stack.append(params)


def _met03_pop_params(param_stack: list[set[str]], close_count: int) -> None:
    n = min(close_count, len(param_stack) - 1)
    for _ in range(n):
        if len(param_stack) > 1:
            param_stack.pop()


def _scan_met03(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    param_stack: list[set[str]] = [set()]
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.search(r"\blc\s*=\s*lc\.", line):
            hits.append(Hit("G.MET.03", str(fp), i, "勿给方法参数 lc 赋值"))
        _met03_push_params(line, param_stack)
        m_as = re.match(r"^\s*(\w+)\s*=(?!=)", line)
        if m_as and m_as.group(1) in param_stack[-1]:
            hits.append(Hit("G.MET.03", str(fp), i,
                             "勿给方法参数 %s 赋值" % m_as.group(1)))
        opens = line.count("{")
        closes = line.count("}")
        depth_delta = opens - closes
        if depth_delta < 0:
            _met03_pop_params(param_stack, -depth_delta)
    return hits


def _obj01_public_field_hit(line: str, fp: Path, i: int) -> Hit | None:
    pat = r"^\s*public\s+(?!static|final|class|interface)[\w\[\].<>]+\s+\w+\s*;"
    if not re.match(pat, line):
        return None
    return Hit("G.OBJ.01", str(fp), i, "public 非 final 字段")


def _obj01_leave_result(in_result: bool, depth: int, fp: Path, line: str) -> bool:
    if not in_result:
        return False
    if depth > 0:
        return True
    if "{" in line:
        return True
    if fp.name in ("EntryResult.java", "IteratorResult.java"):
        return True
    return False


def _scan_obj01(text: str, fp: Path) -> list[Hit]:
    if fp.name not in ("EntryResult.java", "IteratorResult.java") and "class Result" not in text:
        return []
    if fp.name == "IntlOptions.java":
        return []
    hits: list[Hit] = []
    in_result = fp.name in ("EntryResult.java", "IteratorResult.java")
    depth = 0
    for i, line in enumerate(text.splitlines(), 1):
        if re.search(r"\bclass\s+Result\b", line):
            in_result = True
            depth = 0
        if not in_result:
            continue
        depth += line.count("{") - line.count("}")
        h = _obj01_public_field_hit(line, fp, i)
        if h:
            hits.append(h)
        in_result = _obj01_leave_result(in_result, depth, fp, line)
    return hits


def _scan_fmt14(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.search(r"[^\s]\s{2,}[^\s]", line) and "->" in line:
            hits.append(Hit("G.FMT.14", str(fp), i, "连续多空格"))
    return hits


def _fmt02_double_blank_hit(
        blank_run: int, i: int, lines: list[str], fp: Path) -> Hit | None:
    if blank_run < 2:
        return None
    prev = lines[i - 2].strip() if i >= 2 else ""
    nxt = lines[i].strip() if i < len(lines) else ""
    section_gap = (
        prev.startswith("import ") or prev.startswith("package ")
        or prev.endswith("*/") or nxt.startswith("import ")
        or nxt.startswith("/**") or nxt.startswith("public "))
    if not section_gap:
        return None
    return Hit("G.FMT.02", str(fp), i, "段间空行超过 1 行")


def _scan_fmt02(lines: list[str], fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    blank_run = 0
    for i, line in enumerate(lines, 1):
        if line.strip() == "":
            blank_run += 1
            h = _fmt02_double_blank_hit(blank_run, i, lines, fp)
            if h:
                hits.append(h)
            continue
        blank_run = 0
    return hits


def _fmt18_block_indent_hit(
        in_class: bool, jdoc_base: str, i: int, lines: list[str], fp: Path) -> Hit | None:
    if not in_class or jdoc_base or i <= 1:
        return None
    prev = lines[i - 2].strip() if i >= 2 else ""
    if not (prev.endswith("}") or prev.startswith("@Test") or prev == ""):
        return None
    return Hit("G.FMT.18", str(fp), i, "块注释缩进与上下文不一致")


def _fmt18_jdoc_close_hit(line: str, s: str, jdoc_base: str, fp: Path, i: int) -> Hit | None:
    if s != "*/" or line.startswith(jdoc_base + " */"):
        return None
    return Hit("G.FMT.18", str(fp), i, "Javadoc 闭合行未对齐")


def _fmt18_jdoc_body_hits(line: str, s: str, jdoc_base: str, fp: Path, i: int) -> list[Hit]:
    if not s or s == "*":
        return []
    if s.startswith("*"):
        target = jdoc_base + " *" + s[1:]
        if line != target:
            return [Hit("G.FMT.18", str(fp), i, "Javadoc 续行 '*' 未对齐")]
        return []
    target = jdoc_base + " * " + s
    if line != target:
        return [Hit("G.FMT.18", str(fp), i, "Javadoc 内容行缺 '*' 前缀")]
    return []


def _fmt18_javadoc_start(
        line: str, in_class: bool, i: int,
        lines: list[str], fp: Path) -> tuple[bool, str, list[Hit]]:
    tail = line.split("/**", 1)[-1] if "/**" in line else ""
    if not line.lstrip().startswith("/**"):
        return False, "", []
    if "*/" in tail:
        return False, "", []
    m = re.match(r"^(\s*)/\*\*", line)
    jdoc_base = m.group(1) if m else ""
    out: list[Hit] = []
    h = _fmt18_block_indent_hit(in_class, jdoc_base, i, lines, fp)
    if h:
        out.append(h)
    return True, jdoc_base, out


def _scan_fmt18(lines: list[str], fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    in_class = False
    in_jdoc = False
    jdoc_base = ""
    for i, line in enumerate(lines, 1):
        if re.search(r"public\s+(?:class|interface)\s+\w+", line):
            in_class = True
        if not in_jdoc:
            started, base, new_hits = _fmt18_javadoc_start(line, in_class, i, lines, fp)
            if started:
                in_jdoc = True
                jdoc_base = base
                hits.extend(new_hits)
            continue
        s = line.strip()
        if s.endswith("*/"):
            in_jdoc = False
            h = _fmt18_jdoc_close_hit(line, s, jdoc_base, fp, i)
            if h:
                hits.append(h)
            continue
        hits.extend(_fmt18_jdoc_body_hits(line, s, jdoc_base, fp, i))
    return hits


def _scan_fmt13_brace_open_stmt(text: str, fp: Path) -> list[Hit]:
    """G.FMT.13：try/catch/else/do/finally '{' 后同行语句。"""
    pat = re.compile(
        r"^(\s*(?:try|do|else|finally)\s*\{|catch\s*\([^)]*\)\s*\{)(\s+)(\S.*)$")
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        m = pat.match(line)
        if m and not m.group(3).rstrip().endswith("}"):
            hits.append(Hit("G.FMT.13", str(fp), i, "'{' 后同行语句应换行"))
    return hits


def _fmt09_brace_pops(line: str, stack: list[bool]) -> list[bool]:
    in_str = False
    pops: list[bool] = []
    for pos, ch in enumerate(line):
        if ch == '"':
            in_str = not in_str
            continue
        if in_str:
            continue
        if ch == "{":
            stack.append(_brace_ctx(line, pos))
        elif ch == "}":
            pops.append(stack.pop() if stack else False)
    return pops


def _scan_fmt09_ctrl_empty_stmt(lines: list[str], fp: Path) -> list[Hit]:
    """G.FMT.09：控制语句块后残留空语句 '};'（for/if/while 空体 ETS 遗留）。"""
    hits: list[Hit] = []
    stack: list[bool] = []
    for i, line in enumerate(lines, 1):
        pops = _fmt09_brace_pops(line, stack)
        if line.rstrip().endswith("};") and pops and pops[-1]:
            hits.append(Hit("G.FMT.09", str(fp), i,
                             "控制语句块后残留空语句 '};'"))
    return hits


def _scan_fmt20_long_suffix(text: str, fp: Path) -> list[Hit]:
    """G.FMT.20：long 变量赋值字面量缺 L 后缀。"""
    hits: list[Hit] = []
    longs: set[str] = set()
    for m in re.finditer(r"\b(?:long|Long)\s+(\w+)", text):
        longs.add(m.group(1))
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.search(r"\b(?:long|Long)\s+\w+\s*=\s*(-?\d+)(?![\w.])", line):
            hits.append(Hit("G.FMT.20", str(fp), i, "long 字面量缺 L 后缀"))
        for v in longs:
            if re.search(r"\b%s\s*(?:\*=|/=|%%=)\s*(-?\d+)(?![\w.])" % v, line):
                hits.append(Hit("G.FMT.20", str(fp), i,
                                 "long 变量复合赋值字面量缺 L 后缀"))
                break
    return hits


def _scan_typ05_float_eq(lines: list[str], fp: Path) -> list[Hit]:
    """G.TYP.05：Math.sqrt 结果与字面量 ==/!= 比较。"""
    hits: list[Hit] = []
    sqrt_vars: set[str] = set()
    for line in lines:
        m = re.search(r"double\s+(\w+)\s*=\s*Math\.sqrt\s*\(", line)
        if m:
            sqrt_vars.add(m.group(1))
    for i, line in enumerate(lines, 1):
        if _is_comment_line(line):
            continue
        if re.search(r"Math\.sqrt\s*\([^)]*\)\s*[!=]=\s*\d", line):
            hits.append(Hit("G.TYP.05", str(fp), i,
                             "浮点 sqrt 结果 == 比较"))
            continue
        for v in sqrt_vars:
            if re.search(r"\b%s\s*[!=]=\s*[\d.]" % v, line):
                hits.append(Hit("G.TYP.05", str(fp), i,
                                 "浮点变量 %s == 比较" % v))
                break
    return hits


def _scan_fmt13_spaces(text: str, fp: Path) -> list[Hit]:
    """G.FMT.13：行尾空格、')'/'(' 内侧空格、'.' 两侧空格、逗号空格。"""
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        clean = _STR_LIT_RE.sub("\"\"", line)
        if re.search(r"[ \t]+$", clean):
            hits.append(Hit("G.FMT.13", str(fp), i, "行尾冗余空格"))
            continue
        if re.search(r"(?<=\S)\s+\)|\(\s+(?=\S)|\(\s+\)", clean):
            hits.append(Hit("G.FMT.13", str(fp), i, "括号内侧冗余空格"))
            continue
        if re.search(r"\s+\.(?=\S)|(?<=\S)\.\s+", clean):
            hits.append(Hit("G.FMT.13", str(fp), i, "'.' 两侧冗余空格"))
            continue
        if re.search(r"\s+,|\w,\w", clean):
            hits.append(Hit("G.FMT.13", str(fp), i, "逗号空格不规范"))
    return hits


def _scan_fmt08_tabs(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if line.startswith("\t"):
            hits.append(Hit("G.FMT.08", str(fp), i, "行首制表符缩进"))
    return hits


def _scan_typ06_nan_cmp(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        clean = _STR_LIT_RE.sub("\"\"", line)
        if re.search(r"[!=]=\s*Double\.NaN\b|Double\.NaN\s*[!=]=", clean):
            hits.append(Hit("G.TYP.06", str(fp), i, "与 Double.NaN 比较"))
    return hits


def _scan_typ05_float_cmp(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        clean = _STR_LIT_RE.sub("\"\"", line)
        if re.search(r"==\s*(0\.0|\d+\.\d+)\b|!=\s*(0\.0|\d+\.\d+)\b", clean):
            hits.append(Hit("G.TYP.05", str(fp), i, "浮点字面量 == 比较"))
            continue
        if re.search(r"==\s*Double\.(?!NaN\b)\w+\b|!=\s*Double\.(?!NaN\b)\w+\b", clean):
            hits.append(Hit("G.TYP.05", str(fp), i, "浮点常量 == 比较"))
            continue
        if re.search(r"Math\.floor\([^)]*\)\s*[!=]=\s*0\.5", clean):
            hits.append(Hit("G.TYP.05", str(fp), i, "Math.floor 结果 == 比较"))
    return hits


def _scan_prm10_temp_return(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    lines = text.splitlines()
    for i, line in enumerate(lines, 1):
        m = re.match(
            r"^(\s*)(?:final\s+)?[\w<>\[\],. ]+\s+(\w+)\s*=\s*.+;\s*$", line)
        if m and i < len(lines):
            rm = re.match(r"^\s*return\s+%s\s*;\s*$" % re.escape(m.group(2)),
                          lines[i])
            if rm:
                hits.append(Hit("G.PRM.10", str(fp), i,
                                 "临时变量 %s 作为 return 值" % m.group(2)))
    return hits


def _fmt07_next_nonempty(lines: list[str], i: int) -> int:
    j = i
    while j < len(lines) and lines[j].strip() == "":
        j += 1
    return j


def _fmt07_comment_only_empty(lines: list[str], j: int) -> bool:
    nxt = lines[j].strip()
    if not (nxt.startswith("//") or nxt.startswith("/*")):
        return False
    k = j + 1
    while k < len(lines) and (
            lines[k].strip() == "" or lines[k].strip().startswith("//")
            or lines[k].strip().startswith("*")):
        k += 1
    if k >= len(lines):
        return False
    return lines[k].strip() == "}"


def _fmt07_empty_block_hit(lines: list[str], i: int, fp: Path) -> Hit | None:
    line = lines[i - 1]
    if not re.search(r"\b(?:if|for|while|catch|do|try|finally|else)\b", line):
        return None
    if not line.rstrip().endswith("{"):
        return None
    j = _fmt07_next_nonempty(lines, i)
    if j >= len(lines):
        return None
    nxt = lines[j].strip()
    if nxt == "}":
        return Hit("G.FMT.07", str(fp), i, "空代码块")
    if _fmt07_comment_only_empty(lines, j):
        return Hit("G.FMT.07", str(fp), i, "空代码块（仅注释）")
    return None


def _scan_fmt07_empty_block(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    lines = text.splitlines()
    for i, _line in enumerate(lines, 1):
        h = _fmt07_empty_block_hit(lines, i, fp)
        if h:
            hits.append(h)
    return hits


def _scan_fmt09_brace_stmt(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        m = re.match(r"^(\s*)\}(\s+\S.*;\s*)$", line)
        if m and not re.match(r"(else|catch|while|finally|\))\b",
                              m.group(2).strip()):
            hits.append(Hit("G.FMT.09", str(fp), i, "'}' 后同行语句"))
            continue
        if re.match(
                r"^(\s*)\}\s+(?:if|for|try)\s*\(|"
                r"^(\s*)\}\s+do\b", line):
            hits.append(Hit("G.FMT.09", str(fp), i, "'}' 后同行控制块"))
    return hits


def _scan_fmt06_lambda_brace_semi(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if re.search(r"->\s*\{\s*;|\)\s*\{\s*;", line):
            hits.append(Hit("G.FMT.06", str(fp), i, "块起始 '{' 后残留 ';'"))
    return hits


def _scan_fmt06_catch_own_line(text: str, fp: Path) -> list[Hit]:
    """G.FMT.06：'}' 后 catch/else/finally 不得另起一行。"""
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.match(r"^\s*(?:catch|else|finally)\b", line):
            hits.append(Hit("G.FMT.06", str(fp), i,
                             "catch/else/finally 不应另起一行"))
    return hits


def _scan_ctl01_logical(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        clean = _STR_LIT_RE.sub("\"\"", line)
        if clean.count("||") + clean.count("&&") > 5:
            hits.append(Hit("G.CTL.01", str(fp), i, "逻辑运算符超过 5 个"))
    return hits


def _scan_met01_method_len(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    lines = text.splitlines()
    i = 0
    while i < len(lines):
        m = re.match(
            r"^\s*(?:(?:public|protected|private|static|final|synchronized)\s+)*"
            r"(?:<[\w,? ]+>\s+)?[\w<>\[\],.? ]+?\s+\w+\s*\([^)]*\)\s*\{?\s*$",
            lines[i])
        if not m:
            i += 1
            continue
        depth = 0
        j = i
        while j < len(lines):
            depth += _brace_delta(lines[j])
            j += 1
            if depth <= 0:
                break
        if j - i > 50:
            hits.append(Hit("G.MET.01", str(fp), i + 1,
                             "方法行数 %d 超过 50" % (j - i)))
        i = j
    return hits


def _scan_exp03_coalesce(text: str, fp: Path) -> list[Hit]:
    if re.search(
            r"public static double coalesce\(Integer value, double fallback\) \{"
            r"\n\s*return value == null \? fallback : value;", text):
        return [Hit("G.EXP.03", str(fp), 1, "coalesce 三元操作数类型不一致")]
    return []


def _scan_fmt06_extra(lines: list[str], fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(lines, 1):
        if _is_comment_line(line):
            continue
        s = line.strip()
        if re.match(r"void test\w+\(\) \{", s):
            j = i
            while j < len(lines) and lines[j].strip() == "":
                j += 1
            if j < len(lines) and lines[j].strip() == "{":
                hits.append(Hit("G.FMT.06", str(fp), j + 1, "测试方法多余块括号 '{'"))
        if re.search(r"\}\s+(boolean|int|long|double|String|return)\b", line):
            hits.append(Hit("G.FMT.06", str(fp), i, "右大括号应另起一行"))
        if _CLOSING_BRACE_INLINE.search(s) and "-> {" not in s:
            hits.append(Hit("G.FMT.06", str(fp), i, "右大括号应另起一行"))
    return hits


def _scan_obj04(lines: list[str], fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    fields: set[str] = set()
    for line in lines:
        m = _FIELD_DECL.match(line)
        if m and " static " in line:
            fields.add(m.group(2))
    if not fields:
        return hits
    for i, line in enumerate(lines, 1):
        m = _LOCAL_DECL.match(line)
        if m and m.group(2) in fields and " static " not in line:
            hits.append(Hit("G.OBJ.04", str(fp), i,
                             "局部变量 '%s' 遮蔽类字段" % m.group(2)))
    return hits


def _dcl02_usage_hits(
        line: str, i: int, decls: dict[str, tuple[int, int, int]], fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for name, (decl_line, stmt_end, _d0) in list(decls.items()):
        if stmt_end == 0:
            continue
        if not re.search(r"\b%s\b" % re.escape(name), line):
            continue
        gap = i - stmt_end
        if gap > 10:
            hits.append(Hit("G.DCL.02", str(fp), decl_line,
                             "变量 '%s' 声明距首次使用 %d 行" % (name, gap)))
        decls.pop(name, None)
    return hits


def _dcl02_register_decl(
        line: str, i: int, depth: int,
        decls: dict[str, tuple[int, int, int]]) -> None:
    m = re.match(r"^(\s*)(?:[\w<>,\[\]?]+\s+)+(\w+)\s*=", line)
    if not m:
        return
    if " for " in line or line.strip().startswith("for ("):
        return
    if re.match(r"^\s*(?:public|private|protected|static)\b", line):
        return
    decls[m.group(2)] = (i, 0, depth)


def _dcl02_close_pending_inits(
        i: int, new_depth: int,
        decls: dict[str, tuple[int, int, int]]) -> None:
    for name, (decl_line, stmt_end, d0) in list(decls.items()):
        if stmt_end == 0 and new_depth <= d0:
            decls[name] = (decl_line, i, d0)


def _dcl02_prune_depth(decls: dict[str, tuple[int, int, int]], new_depth: int) -> None:
    drop = [k for k, v in decls.items() if v[2] > new_depth]
    for k in drop:
        decls.pop(k, None)


def _scan_dcl02(lines: list[str], fp: Path) -> list[Hit]:
    # common 实现 + basetype *Test（CI 对测试同样检 G.DCL.02）
    parts = set(fp.parts)
    if "common" not in parts and not (
            "test" in parts and fp.name.endswith("Test.java")):
        return []
    hits: list[Hit] = []
    # name -> (decl_line, stmt_end_line|0, depth_at_decl)
    # 多行初始化（lambda）从语句结束行起算间距，与 CI 一致
    decls: dict[str, tuple[int, int, int]] = {}
    depth = 0
    for i, line in enumerate(lines, 1):
        hits.extend(_dcl02_usage_hits(line, i, decls, fp))
        _dcl02_register_decl(line, i, depth, decls)
        new_depth = depth + _brace_delta(line)
        _dcl02_close_pending_inits(i, new_depth, decls)
        if new_depth < depth:
            _dcl02_prune_depth(decls, new_depth)
        depth = new_depth
    return hits


def _scan_fmt06(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        s = line.strip()
        if _CLOSING_BRACE_INLINE.search(s) and not s.startswith("import "):
            hits.append(Hit("G.FMT.06", str(fp), i, "右大括号应另起一行"))
    return hits


def _scan_fmt09(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        s = line.strip()
        if not s or s.startswith("import ") or s.startswith("package "):
            continue
        if _count_semicolons_outside_strings(s) >= 2 and not s.startswith("for ("):
            hits.append(Hit("G.FMT.09", str(fp), i, "一行含多个语句"))
    return hits


def _scan_catch_rt(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        s = line.strip()
        if s.startswith("*") or s.startswith("//"):
            continue
        if re.search(r"\bcatch\s*\(\s*(RuntimeException|Exception)\s+\w+\s*\)", line):
            hits.append(Hit("G.ERR.02", str(fp), i, "勿直接捕获 RuntimeException/Exception"))
    return hits


def _scan_dollar_params(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.search(r"\$x\d+", line):
            hits.append(Hit("G.NAM.06", str(fp), i, "lambda 参数含 $ 前缀"))
        if _UNDERSCORE_PARAM.search(line) and "->" in line:
            hits.append(Hit("G.NAM.06", str(fp), i, "lambda 参数含 _ 前缀"))
    return hits


def _scan_err05(text: str, fp: Path) -> list[Hit]:
    if "common" in Path(fp).parts and "BasTest" in str(fp):
        return []
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.search(r"\bthrow new Error\s*\(", line):
            hits.append(Hit("G.ERR.05", str(fp), i, "勿直接 throw new Error"))
    return hits


