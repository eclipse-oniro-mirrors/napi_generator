#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Java scan: format/style/type rules."""
from __future__ import annotations

from pathlib import Path

from base import Hit
from java_common import *

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



def _scan_met03(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    # 收集当前可见方法参数名（粗略按方法签名栈）
    param_stack: list[set[str]] = [set()]
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.search(r"\blc\s*=\s*lc\.", line):
            hits.append(Hit("G.MET.03", str(fp), i, "勿给方法参数 lc 赋值"))
        # 方法签名：提取参数名
        m_sig = re.search(r"\b(?:public|private|protected|static).*\(.*\)\s*\{?\s*$", line)
        if "(" in line and re.search(
                r"\b(?:public|private|protected|static)\b", line):
            params = _extract_param_names_from_sig_line(line)
            if params is not None:
                param_stack.append(params)
        # 参数赋值
        m_as = re.match(r"^\s*(\w+)\s*=(?!=)", line)
        if m_as and m_as.group(1) in param_stack[-1]:
            hits.append(Hit("G.MET.03", str(fp), i,
                             "勿给方法参数 %s 赋值" % m_as.group(1)))
        opens = line.count("{")
        closes = line.count("}")
        if opens or closes:
            # 简化深度：遇 } 弹出一层参数集
            depth_delta = opens - closes
            if depth_delta < 0:
                for _ in range(min(-depth_delta, len(param_stack) - 1)):
                    if len(param_stack) > 1:
                        param_stack.pop()
    return hits



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
        if in_result:
            depth += line.count("{") - line.count("}")
            if re.match(
                    r"^\s*public\s+(?!static|final|class|interface)[\w\[\].<>]+\s+\w+\s*;",
                    line):
                hits.append(Hit("G.OBJ.01", str(fp), i, "public 非 final 字段"))
            if depth <= 0 and "{" not in line:
                pass
            elif in_result and depth <= 0 and fp.name not in (
                    "EntryResult.java", "IteratorResult.java"):
                in_result = False
    return hits



def _scan_fmt14(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.search(r"[^\s]\s{2,}[^\s]", line) and "->" in line:
            hits.append(Hit("G.FMT.14", str(fp), i, "连续多空格"))
    return hits



def _scan_fmt02(lines: list[str], fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    blank_run = 0
    for i, line in enumerate(lines, 1):
        if line.strip() == "":
            blank_run += 1
            if blank_run >= 2:
                prev = lines[i - 2].strip() if i >= 2 else ""
                nxt = lines[i].strip() if i < len(lines) else ""
                if (prev.startswith("import ") or prev.startswith("package ")
                        or prev.endswith("*/") or nxt.startswith("import ")
                        or nxt.startswith("/**") or nxt.startswith("public ")):
                    hits.append(Hit("G.FMT.02", str(fp), i, "段间空行超过 1 行"))
            continue
        blank_run = 0
    return hits



def _scan_fmt18(lines: list[str], fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    in_class = False
    in_jdoc = False
    jdoc_base = ""
    for i, line in enumerate(lines, 1):
        if re.search(r"public\s+(?:class|interface)\s+\w+", line):
            in_class = True
        if not in_jdoc:
            if line.lstrip().startswith("/**") and "*/" not in line.split("/**", 1)[-1]:
                in_jdoc = True
                m = re.match(r"^(\s*)/\*\*", line)
                jdoc_base = m.group(1) if m else ""
                if in_class and not jdoc_base and i > 1:
                    prev = lines[i - 2].strip() if i >= 2 else ""
                    if prev.endswith("}") or prev.startswith("@Test") or prev == "":
                        hits.append(Hit("G.FMT.18", str(fp), i,
                                         "块注释缩进与上下文不一致"))
            continue
        s = line.strip()
        if s.endswith("*/"):
            in_jdoc = False
            if s == "*/" and not line.startswith(jdoc_base + " */"):
                hits.append(Hit("G.FMT.18", str(fp), i,
                                "Javadoc 闭合行未对齐"))
            continue
        if not s:
            continue
        if s == "*":
            continue
        if s.startswith("*"):
            target = jdoc_base + " *" + s[1:]
            if line != target:
                hits.append(Hit("G.FMT.18", str(fp), i,
                                "Javadoc 续行 '*' 未对齐"))
            continue
        # 非 '*' 内容行（多行 @tc.desc 续行等）
        target = jdoc_base + " * " + s
        if line != target:
            hits.append(Hit("G.FMT.18", str(fp), i,
                            "Javadoc 内容行缺 '*' 前缀"))
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


_CTRL_HEAD = re.compile(
    r"\b(?:if|for|while|switch|catch)\s*\(|\b(?:try|do|else|finally)\b")



def _scan_fmt09_ctrl_empty_stmt(lines: list[str], fp: Path) -> list[Hit]:
    """G.FMT.09：控制语句块后残留空语句 '};'（for/if/while 空体 ETS 遗留）。"""
    hits: list[Hit] = []
    stack: list[bool] = []
    for i, line in enumerate(lines, 1):
        in_str = False
        pops: list[bool] = []
        for pos, ch in enumerate(line):
            if ch == '"':
                in_str = not in_str
            elif not in_str:
                if ch == "{":
                    stack.append(_brace_ctx(line, pos))
                elif ch == "}":
                    pops.append(stack.pop() if stack else False)
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



def _scan_fmt07_empty_block(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    lines = text.splitlines()
    for i, line in enumerate(lines, 1):
        if not re.search(r"\b(?:if|for|while|catch|do|try|finally|else)\b", line):
            continue
        if not line.rstrip().endswith("{"):
            continue
        # 跳过含嵌套括号时仍识别控制头
        j = i
        # 下一非空行
        while j < len(lines) and lines[j].strip() == "":
            j += 1
        if j >= len(lines):
            continue
        nxt = lines[j].strip()
        # 仅注释 + } 或直接 } 均视为空块（CI 不认仅注释）
        if nxt == "}":
            hits.append(Hit("G.FMT.07", str(fp), i, "空代码块"))
        elif nxt.startswith("//") or nxt.startswith("/*"):
            k = j + 1
            while k < len(lines) and (
                    lines[k].strip() == "" or lines[k].strip().startswith("//")
                    or lines[k].strip().startswith("*")):
                k += 1
            if k < len(lines) and lines[k].strip() == "}":
                hits.append(Hit("G.FMT.07", str(fp), i, "空代码块（仅注释）"))
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
        for name, (decl_line, stmt_end, d0) in list(decls.items()):
            if stmt_end == 0:
                continue  # 仍在初始化式内，不算「使用」
            if re.search(r"\b%s\b" % re.escape(name), line):
                gap = i - stmt_end
                if gap > 10:
                    hits.append(Hit("G.DCL.02", str(fp), decl_line,
                                     "变量 '%s' 声明距首次使用 %d 行" % (name, gap)))
                decls.pop(name, None)
        m = re.match(r"^(\s*)(?:[\w<>,\[\]?]+\s+)+(\w+)\s*=", line)
        if (m and " for " not in line and not line.strip().startswith("for (")
                and not re.match(r"^\s*(?:public|private|protected|static)\b", line)):
            decls[m.group(2)] = (i, 0, depth)
        new_depth = depth + _brace_delta(line)
        # 声明语句结束：深度回到声明时深度（含同行无额外开括号）
        for name, (decl_line, stmt_end, d0) in list(decls.items()):
            if stmt_end == 0 and new_depth <= d0:
                decls[name] = (decl_line, i, d0)
        if new_depth < depth:
            decls = {k: v for k, v in decls.items() if v[2] <= new_depth}
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


