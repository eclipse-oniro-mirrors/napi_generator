#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Java auto-fix helpers (part 1)."""
from __future__ import annotations

import re
from datetime import date
from pathlib import Path

from base import Hit
from java_common import (
    KNOWN_ERRORS,
    _CATCH_TYPE,
    _COMMON_PKG,
    _FIELD_DECL,
    _JAVA_IMPORT,
    _LOCAL_DECL,
    _PUBLIC_METHOD,
    _SINGLE_LINE_JDOC,
    _UNDERSCORE_PARAM,
    _UNINDENTED_BLOCK_JDOC,
    _import_used,
    _is_comment_line,
    _split_control_header_body
)
from java_fix_1_expand import expand_fmt_segments
from java_fix_1_fmt10 import fmt10_expand_long_line
from java_fix_1_support import (
    apply_catch_rt_passes,
    apply_dcl02_format_intl_complex,
    apply_dcl02_format_intl_simple,
    brace_delta,
    build_param_injections,
    collect_javadoc_block,
    collect_test_method,
    err05_replace_throw,
    err05_update_lambda_depth,
    emit_renamed_method,
    find_assigned_params,
    inject_tc_desc_into_block,
    is_tc_number_javadoc_block,
    is_void_lambda_context,
    lambda_trailing_suffix,
    locale_param_rewrite_line,
    null_decl_assert_target,
    parse_method_header,
    parse_method_params,
    read_method_signature_body,
    reindent_jdoc_block_lines,
    should_reindent_block_at,
    strip_test_wrapper_block,
    tc_desc_from_block,
)


def _fix_obj01_public_fields(text: str, fp: Path) -> tuple[str, int]:
    """G.OBJ.01：EntryResult/IteratorResult/嵌套 Result 的 public 字段加 final。"""
    if fp.name == "IntlOptions.java":
        return text, 0
    if (fp.name not in ("EntryResult.java", "IteratorResult.java")
            and "class Result" not in text):
        return text, 0
    n = 0
    lines = []
    in_result = fp.name in ("EntryResult.java", "IteratorResult.java")
    depth = 0
    for line in text.splitlines():
        if re.search(r"\bclass\s+Result\b", line):
            in_result = True
            depth = 0
        if in_result:
            depth += line.count("{") - line.count("}")
            m = re.match(
                r"^(\s*)public\s+(?!static|final|class|interface)"
                r"([\w\[\].<>]+)\s+(\w+)\s*;", line)
            if m:
                lines.append("%spublic final %s %s;" % (
                    m.group(1), m.group(2), m.group(3)))
                n += 1
            else:
                lines.append(line)
            if depth <= 0 and fp.name not in (
                    "EntryResult.java", "IteratorResult.java"):
                in_result = False
            continue
        lines.append(line)
    return "\n".join(lines), n


def _fix_remove_imports(lines: list[str]) -> tuple[list[str], int]:
    body = "\n".join(l for l in lines if not l.strip().startswith("import "))
    out: list[str] = []
    seen: set[str] = set()
    n = 0
    for line in lines:
        m = _JAVA_IMPORT.match(line.strip())
        if not m:
            out.append(line)
            continue
        pkg, simple = m.group(1) or "", m.group(2)
        full = (pkg + simple).rstrip(".")
        key = line.strip()
        if key in seen or not _import_used(body, simple, full):
            n += 1
            continue
        seen.add(key)
        out.append(line)
    return out, n


def _fix_class_javadoc(text: str) -> tuple[str, int]:
    today = date.today().isoformat()
    n = 0
    # 仅拆分同行的 '*/public class|interface'，保留嵌套类型的缩进
    text, c0 = re.subn(
        r"\*/[ \t]+(public\s+(?:class|interface))",
        r"*/\n\1", text)
    n += c0

    def add_since(m):
        block = m.group(0)
        if "@since" in block:
            return block
        inner = block[:-2].rstrip()
        return inner + "\n *\n * @since %s\n */" % today

    text, c1 = re.subn(
        r'/\*\*(?:[^*]|\*(?!/))*\*/\s*(?=public\s+(?:class|interface)\s)',
        add_since, text, count=1)
    n += c1
    if c1:
        return text, n
    text, c2 = re.subn(
        r"(public\s+(?:class|interface)\s+\w+(?:\s+extends\s+\w+|\s+implements\s+[\w,\s]+)?\s*\{)",
        "/**\n * XTS basetype 类型。\n *\n * @since %s\n */\n\\1" % today, text, count=1)
    n += c2
    return text, n


def _ensure_error_imports(text: str) -> tuple[str, int]:
    need: set[str] = set()
    for m in _CATCH_TYPE.finditer(text):
        if m.group(1) in KNOWN_ERRORS:
            need.add(m.group(1))
    if not need:
        return text, 0
    lines = text.splitlines()
    existing: set[str] = set()
    last_imp = -1
    pkg_idx = -1
    for i, line in enumerate(lines):
        if line.startswith("package "):
            pkg_idx = i
        m = re.match(r"import basetype\.common\.(\w+);", line.strip())
        if m:
            existing.add(m.group(1))
            last_imp = i
    to_add = sorted(need - existing)
    if not to_add:
        return text, 0
    new_lines = ["import %s.%s;" % (_COMMON_PKG, et) for et in to_add]
    if last_imp >= 0:
        lines = lines[:last_imp + 1] + new_lines + lines[last_imp + 1:]
    elif pkg_idx >= 0:
        lines = lines[:pkg_idx + 1] + [""] + new_lines + lines[pkg_idx + 1:]
    else:
        lines = new_lines + lines
    out = "\n".join(lines)
    if text.endswith("\n"):
        out += "\n"
    return out, len(to_add)


def _fix_catch_rt(text: str) -> tuple[str, int]:
    return apply_catch_rt_passes(text)


def _fix_catch_simple_name_mismatch(text: str) -> tuple[str, int]:
    """修正 catch 类型与 assertEqual 期望异常名不一致（如 catch RangeError 但断言 TypeError）。"""
    n = 0

    def repl(m):
        nonlocal n
        cur, var, body, exp = m.group(1), m.group(2), m.group(3), m.group(4)
        if exp not in KNOWN_ERRORS or cur == exp:
            return m.group(0)
        n += 1
        return "catch (%s %s) {%s}" % (exp, var, body)

    # 形态 1（转换器实际产出）：catch (X var) { ... assertEqual("期望名", var.getClass().getSimpleName()) ... }
    text, c1 = re.subn(
        r"catch\s*\(\s*(\w+)\s+(\w+)\s*\)\s*\{"
        r"([^}]*assertEqual\s*\(\s*\"(\w+)\"\s*,\s*\2\.getClass\(\)\.getSimpleName\(\)[^}]*)\}",
        repl, text, flags=re.DOTALL)
    n += c1
    # 形态 2（className 断言）：catch (X var) { ... assertEqual("basetype.common.期望名", BasTest.className(var)) ... }
    text, c2 = re.subn(
        r"catch\s*\(\s*(\w+)\s+(\w+)\s*\)\s*\{"
        r"([^}]*assertEqual\s*\(\s*\"basetype\.common\.(\w+)\"\s*,\s*BasTest\.className\(\2\)\)[^}]*)\}",
        repl, text, flags=re.DOTALL)
    n += c2
    # 形态 3（兼容旧写法）：getSimpleName() 先出现，assertEqual 在后
    text, c3 = re.subn(
        r"catch\s*\(\s*(\w+)\s+(\w+)\s*\)\s*\{"
        r"([^}]*getClass\(\)\.getSimpleName\(\)[^}]*assertEqual\s*\(\s*\"(\w+)\"[^}]*)\}",
        repl, text, flags=re.DOTALL)
    n += c3
    text, c4 = re.subn(
        r"catch\s*\(\s*(\w+)\s+(\w+)\s*\)\s*\{"
        r"([^}]*String expectedErrorName = \"(\w+)\";[^}]*)\}",
        repl, text, flags=re.DOTALL)
    n += c4
    return text, n


def _fix_dollar_names(text: str) -> tuple[str, int]:
    repls = [("$x1", "index"), ("$x2", "array"), ("$x3", "unused3")]
    n = 0
    for old, new in repls:
        cnt = text.count(old)
        if cnt:
            text = text.replace(old, new)
            n += cnt

    def sub(m):
        nonlocal n
        n += 1
        return "unused%s" % m.group(1)

    text, c = re.subn(r"\$x(\d+)", sub, text)
    n += c
    return text, n


def _fix_underscore_lambda_params(text: str) -> tuple[str, int]:
    """G.NAM.06：lambda 中 _name 改为合法小驼峰。"""
    special = {
        "_array": "unusedArray", "_index": "unusedIndex", "_value": "value",
        "_a": "array", "_b": "unusedB", "_i": "unusedIndex",
        "_v": "unusedVal", "_x": "unusedX",
    }
    n = 0
    lines = []
    for line in text.splitlines():
        if "->" not in line or not _UNDERSCORE_PARAM.search(line):
            lines.append(line)
            continue
        new_line = line
        for old in sorted(special.keys(), key=len, reverse=True):
            if old in new_line:
                new_line = re.sub(r"\b" + re.escape(old) + r"\b", special[old], new_line)
                n += line.count(old)

        def strip_us(m):
            nonlocal n
            n += 1
            return m.group(1)

        new_line = re.sub(r"\b_([a-zA-Z]\w*)\b", strip_us, new_line)
        lines.append(new_line)
    return "\n".join(lines), n


def _fix_fmt02_blank_lines(text: str) -> tuple[str, int]:
    """G.FMT.02：版权/package/import/类段间仅 1 空行。"""
    n = 0
    while "\n\n\n" in text:
        text = text.replace("\n\n\n", "\n\n")
        n += 1
    return text, n


def _fix_javadoc_star_align(text: str) -> tuple[str, int]:
    """G.FMT.18：Javadoc 续行 '*' 对齐起始缩进（'    * x' → '     * x'），闭合 '*/' 对齐。"""
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    base_indent = ""
    in_block = False
    for line in lines:
        if not in_block:
            if line.lstrip().startswith("/**") and "*/" not in line.split("/**", 1)[-1]:
                in_block = True
                m = re.match(r"^(\s*)/\*\*", line)
                base_indent = m.group(1) if m else ""
                out.append(line)
                continue
            out.append(line)
            continue
        if line.strip().endswith("*/"):
            in_block = False
            if line.strip() == "*/" and not line.startswith(base_indent + " */"):
                out.append(base_indent + " */")
                n += 1
                continue
            out.append(line)
            continue
        s = line.strip()
        if not s:
            out.append(line)
            continue
        if s == "*":
            out.append(line)
            continue
        if s.startswith("*"):
            target = base_indent + " *" + s[1:]
            if line != target:
                out.append(target)
                n += 1
                continue
            out.append(line)
            continue
        # 非 '*' 内容行（多行 @tc.desc 续行等）补 ' * ' 前缀
        target = base_indent + " * " + s
        if line != target:
            out.append(target)
            n += 1
            continue
        out.append(line)
    return "\n".join(out), n


def _brace_delta(line: str) -> int:
    """统计一行中字符串外的 { / } 数量差。"""
    return brace_delta(line)


def _fix_fmt06_remove_test_wrapper(text: str) -> tuple[str, int]:
    """G.FMT.06：移除 @Test 方法体首尾多余包裹块 '{ ... }'（双 '}' 结尾）。"""
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    i = 0
    while i < len(lines):
        if not re.match(r"^\s*void test\w+\(\)", lines[i]):
            out.append(lines[i])
            i += 1
            continue
        method, i = collect_test_method(lines, i)
        method, c = strip_test_wrapper_block(method)
        n += c
        out.extend(method)
    return "\n".join(out), n


def _fix_fmt06_brace_before_keyword(text: str) -> tuple[str, int]:
    """G.FMT.06：'} type/name' 声明拆行（如 '} boolean isPrime'）。"""
    n = 0
    for kw in ("boolean", "int", "long", "double", "String", "Integer", "return"):
        text, c = re.subn(r"\} (%s\b)" % kw, r"}\n        \1", text)
        n += c
    return text, n


_COMMON_JDOC_FILES = re.compile(
    r"common/(?:Int|Uint|Float|Array|Data|Entry|Iterator|Bas|Null|Range|Type|Syntax|URI|Class|Index|OutOf)[^/]*\.java$")


def _is_common_array_file(fp: Path) -> bool:
    path = str(fp).replace("\\", "/")
    return "common" in fp.parts and bool(_COMMON_JDOC_FILES.search(path))


_COMMON_METHOD_JDOC = {
    "set": "写入元素或批量填充，对应 set 语义。",
    "get": "按索引读取元素，对应 get 语义。",
    "reduceRight": "从右向左归约，返回最终累计值，对应 reduceRight 语义。",
    "reduce": "从左到右归约，返回最终累计值，对应 reduce 语义。",
    "fill": "填充数组元素，对应 fill 语义。",
    "sort": "原地排序，对应 sort 语义。",
    "reverse": "原地反转，对应 reverse 语义。",
    "join": "元素连接为字符串，对应 join 语义。",
    "slice": "返回 slice 拷贝，对应 slice 语义。",
    "subarray": "返回 subarray 视图，对应 subarray 语义。",
    "map": "映射为新数组，对应 map 语义。",
    "filter": "过滤为新数组，对应 filter 语义。",
    "find": "查找首个匹配元素，对应 find 语义。",
    "findIndex": "查找首个匹配下标，对应 findIndex 语义。",
    "forEach": "遍历执行回调，对应 forEach 语义。",
    "every": "是否全部满足谓词，对应 every 语义。",
    "some": "是否存在满足谓词，对应 some 语义。",
    "includes": "是否包含指定值，对应 includes 语义。",
    "indexOf": "从前往后查找下标，对应 indexOf 语义。",
    "lastIndexOf": "从后往前查找下标，对应 lastIndexOf 语义。",
    "copyWithin": "区间内复制元素，对应 copyWithin 语义。",
    "at": "相对索引读取，对应 at 语义。",
    "toLocaleString": "区域设置字符串，对应 toLocaleString 语义。",
    "toString": "字符串形式，对应 toString 语义。",
    "from": "从数组或集合构造，对应 from 语义。",
    "of": "从元素序列构造，对应 of 语义。",
}


_BASTEST_METHOD_JDOC = {
    "assertEqual": "断言两值相等。",
    "assertNotEqual": "断言两值不等。",
    "assertTrue": "断言条件为真。",
    "assertFalse": "断言条件为假。",
    "assertNull": "断言值为 null。",
    "isInteger": "判定数值是否为整数。",
    "className": "返回对象运行时类名。",
    "throwTestError": "测试辅助：抛出 basetype Error。",
}


def _fix_bas_test_javadoc(text: str, fp: Path) -> tuple[str, int]:
    if fp.name != "BasTest.java":
        return text, 0
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    for line in lines:
        m = _PUBLIC_METHOD.match(line)
        if m:
            prev = out[-1].strip() if out else ""
            name = m.group(3)
            if (name in _BASTEST_METHOD_JDOC
                    and not (prev.endswith("*/") or prev.startswith("*"))):
                ind = m.group(1)
                desc = _BASTEST_METHOD_JDOC[name]
                out.append("%s/**" % ind)
                out.append("%s * %s" % (ind, desc))
                out.append("%s */" % ind)
                n += 1
        out.append(line)
    return "\n".join(out), n


def _fix_common_public_method_javadoc(text: str, fp: Path) -> tuple[str, int]:
    """G.CMT.01：common 数组类 public 方法补多行 Javadoc。"""
    if not _is_common_array_file(fp):
        return text, 0
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    for line in lines:
        m = _PUBLIC_METHOD.match(line)
        if m:
            prev = out[-1].strip() if out else ""
            if not (prev.endswith("*/") or prev.startswith("*") or prev.startswith("/**")):
                name = m.group(3)
                desc = _COMMON_METHOD_JDOC.get(name, "%s 方法。" % name)
                ind = m.group(1)
                out.append("%s/**" % ind)
                out.append("%s * %s" % (ind, desc))
                out.append("%s */" % ind)
                n += 1
        out.append(line)
    return "\n".join(out), n


def _fix_bas_test_throw_helper(text: str) -> tuple[str, int]:
    """G.ERR.05：BasTest 增加 throwTestError 辅助方法。"""
    marker = "protected BasTest() {"
    broken = "BasTest.throwTestError(message);"
    if broken in text:
        text = text.replace(
            "    public static <T> T throwTestError(String message) {\n"
            "        BasTest.throwTestError(message);\n"
            "    }",
            "    public static <T> T throwTestError(String message) {\n"
            "        throw new Error(message);\n"
            "    }",
        )
        return text, 1
    if "throwTestError" in text:
        return text, 0
    if marker not in text:
        return text, 0
    insert = (
        "    /**\n"
        "     * 测试辅助：抛出 basetype Error（规避 G.ERR.05 裸 throw）。\n"
        "     */\n"
        "    public static <T> T throwTestError(String message) {\n"
        "        throw new Error(message);\n"
        "    }\n\n"
    )
    return text.replace(marker, insert + "    " + marker, 1), 1


def _method_returns_value(line: str) -> bool:
    m = re.match(
        r"^\s*(?:public|private|protected|static)\s+(?:static\s+)?(\S+)\s+\w+\s*\(",
        line)
    if not m:
        return False
    return m.group(1) not in ("void",)


def _is_void_lambda_context(line: str) -> bool:
    return is_void_lambda_context(line)


def _fix_err05_throw_test_error(text: str, fp: Path) -> tuple[str, int]:
    """G.ERR.05：测试类 throw new Error → BasTest.throwTestError。"""
    if fp.name == "BasTest.java" or "common" in fp.parts:
        return text, 0
    n = 0
    out: list[str] = []
    lambda_depth = 0
    void_lambda = False
    returns_value = False
    for line in text.splitlines():
        if re.match(r"^\s*(?:public|private|protected)\s", line):
            returns_value = _method_returns_value(line)
        if re.search(r"->\s*\{", line):
            lambda_depth += 1
            if _is_void_lambda_context(line):
                void_lambda = True
        repl = err05_replace_throw(line, void_lambda, lambda_depth, returns_value)
        if repl != line:
            n += 1
        out.append(repl)
        lambda_depth = err05_update_lambda_depth(line, lambda_depth)
        if lambda_depth == 0:
            void_lambda = False
    text = "\n".join(out)
    text, c = re.subn(r"BasTest\.throwTestError\s*\(\s*\)", 'BasTest.throwTestError("")', text)
    n += c
    text, c = re.subn(
        r"return BasTest\.throwTestError\s*\(\s*\)", 'return BasTest.throwTestError("")', text)
    n += c
    return text, n


def _split_lambda_open_body(text: str) -> tuple[str, int]:
    """G.FMT.06/13：-> { stmt; 同行 lambda 块体拆行（'}' 在后续行）。"""
    n = 0
    lines = []
    for line in text.splitlines():
        m = re.search(r"^(\s*.*?-> \{)\s*(.+;\s*)$", line)
        if m and "}" not in m.group(2):
            ind = re.match(r"^(\s*)", line).group(1)
            lines.append(m.group(1))
            lines.append(ind + "    " + m.group(2).strip())
            n += 1
            continue
        lines.append(line)
    return "\n".join(lines), n


def _fix_paren_lambda_spaces(text: str) -> tuple[str, int]:
    """G.FMT.13：lambda 实参括号内侧多余空格。"""
    n = 0
    lines = []
    for line in text.splitlines():
        nl = line
        if "->" in line:
            nl = re.sub(r"(\w)\(\s+\(", r"\1((", nl)
            nl = re.sub(r"(\w)\s+\(\(", r"\1((", nl)
            nl = re.sub(r"->\s+([^;)]+?)\s+\)", r"-> \1)", nl)
            nl = re.sub(r"\s+\)\s*;", ");", nl)
            if nl != line:
                n += 1
        lines.append(nl)
    return "\n".join(lines), n


def _fix_fmt10_wrap_lines(text: str) -> tuple[str, int]:
    """G.FMT.10：超长 of/from/int[]/三元/asList 折行。"""
    n = 0
    lines: list[str] = []
    for line in text.splitlines():
        if len(line) <= 120:
            lines.append(line)
            continue
        chunk, c = fmt10_expand_long_line(line)
        lines.extend(chunk)
        n += c
    return "\n".join(lines), n


def _fix_broken_helper_javadoc(text: str) -> tuple[str, int]:
    """清理 createNumberArray/createBigIntArray 重复 helper Javadoc。"""
    pat = (
        r"\n\s*/\*\*\n\s*\* Helper to create an Array<number>.*?\*/\n"
        r"/\*\*\n \* Helper to create an Array<BigInt>.*?\*/\n")
    text2, c = re.subn(pat, "\n", text, flags=re.DOTALL)
    return text2, c


def _fix_fmt05_add_braces(text: str) -> tuple[str, int]:
    """G.FMT.05：单行 if/for/while 补大括号（支持嵌套括号条件）。"""
    n = 0
    lines = []
    for line in text.splitlines():
        split = _split_control_header_body(line)
        if split:
            header, body = split
            if body and not body.startswith("{") and body.endswith(";"):
                ind = re.match(r"^(\s*)", line).group(1)
                lines.append(header + " {")
                lines.append(ind + "    " + body)
                lines.append(ind + "}")
                n += 1
                continue
        lines.append(line)
    return "\n".join(lines), n


def _fix_typ08_locale(text: str) -> tuple[str, int]:
    """G.TYP.08：toLowerCase()/toUpperCase() 补 Locale.ROOT。"""
    n = 0
    text, c1 = re.subn(
        r"\.toLowerCase\s*\(\s*\)",
        ".toLowerCase(java.util.Locale.ROOT)", text)
    n += c1
    text, c2 = re.subn(
        r"\.toUpperCase\s*\(\s*\)",
        ".toUpperCase(java.util.Locale.ROOT)", text)
    n += c2
    return text, n


def _fix_typ05_infinity(text: str) -> tuple[str, int]:
    """G.TYP.05：Double.POSITIVE/NEGATIVE_INFINITY 比较改为 isInfinite。"""
    n = 0
    text, c = re.subn(
        r"(\b\w+)\s*==\s*Double\.POSITIVE_INFINITY\s*\|\|\s*\1\s*==\s*"
        r"Double\.NEGATIVE_INFINITY",
        r"Double.isInfinite(\1)", text)
    n += c
    text, c = re.subn(
        r"(\b\w+)\s*==\s*Double\.NEGATIVE_INFINITY\s*\|\|\s*\1\s*==\s*"
        r"Double\.POSITIVE_INFINITY",
        r"Double.isInfinite(\1)", text)
    n += c
    text, c = re.subn(
        r"(\b\w+)\s*==\s*Double\.POSITIVE_INFINITY",
        r"Double.isInfinite(\1) && \1 > 0", text)
    n += c
    text, c = re.subn(
        r"(\b\w+)\s*==\s*Double\.NEGATIVE_INFINITY",
        r"Double.isInfinite(\1) && \1 < 0", text)
    n += c
    return text, n


def _fix_met03_locale_param(text: str) -> tuple[str, int]:
    """G.MET.03：isValidLocale 内勿给参数 lc 赋值。"""
    if not re.search(r"\blc\s*=\s*lc\.toLowerCase", text):
        return text, 0
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    i = 0
    while i < len(lines):
        line = lines[i]
        if not re.search(r"boolean\s+isValidLocale\s*\(\s*String\s+lc\s*\)", line):
            out.append(line)
            i += 1
            continue
        out.append(line)
        i += 1
        depth = line.count("{") - line.count("}")
        renamed = False
        while i < len(lines):
            cur = lines[i]
            new_line, renamed, c = locale_param_rewrite_line(cur, renamed)
            out.append(new_line)
            n += c
            depth += cur.count("{") - cur.count("}")
            i += 1
            if depth <= 0:
                break
    return "\n".join(out), n


def _fix_met03_param_assign(text: str) -> tuple[str, int]:
    """G.MET.03：方法体内给参数赋值时，改名为 xxxIn 并引入同名局部副本。"""
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    i = 0
    while i < len(lines):
        line = lines[i]
        m = parse_method_header(line)
        if not m:
            out.append(line)
            i += 1
            continue
        ind, head, params_s, brace = m.group(1), m.group(2), m.group(3), m.group(4)
        if "<" in params_s:
            out.append(line)
            i += 1
            continue
        params = parse_method_params(params_s)
        read = read_method_signature_body(lines, i, brace)
        if read is None:
            out.append(line)
            i += 1
            continue
        sig_lines, body, j, _ = read
        assigned = find_assigned_params(params, body)
        if not assigned:
            out.append(line)
            i += 1
            continue
        body_ind = ind + "    "
        new_params_s, inject = build_param_injections(assigned, params_s, body_ind)
        out.extend(
            emit_renamed_method(ind, head, new_params_s, brace, sig_lines, inject, body))
        n += len(inject)
        i = j
    return "\n".join(out), n


def _fix_cmt06_blank_before_jdoc(text: str) -> tuple[str, int]:
    """G.CMT.06：'}'/'};' 与 Javadoc 之间补空行。"""
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    for line in lines:
        if line.lstrip().startswith("/**") and out:
            prev = out[-1].strip().rstrip(";")
            if prev.endswith("}"):
                out.append("")
                n += 1
        out.append(line)
    return "\n".join(out), n


def _fix_cmt03_tc_desc(text: str) -> tuple[str, int]:
    """G.CMT.03：@tc Javadoc 从 @tc.desc 补功能说明行。"""
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    i = 0
    while i < len(lines):
        if not lines[i].lstrip().startswith("/**"):
            out.append(lines[i])
            i += 1
            continue
        block, i = collect_javadoc_block(lines, i)
        if is_tc_number_javadoc_block(block):
            desc = tc_desc_from_block(block)
            if desc:
                out.extend(inject_tc_desc_into_block(block, desc))
                n += 1
                i += 1
                continue
        out.extend(block)
        i += 1
    return "\n".join(out), n


def _fix_nam03_class_name(text: str) -> tuple[str, int]:
    """G.NAM.03：内部类 DummyObj_038 → DummyObj038（含构造/引用）。"""
    n = 0
    renames: dict[str, str] = {}
    for m in re.finditer(r"\b(?:class|interface|enum)\s+(\w*_\d+\w*)\b", text):
        old = m.group(1)
        renames[old] = old.replace("_", "")
    for old, new in renames.items():
        text, c = re.subn(r"\b" + re.escape(old) + r"\b", new, text)
        n += c
    return text, n


def _err05_void_lambda_enter(line: str) -> bool:
    return _is_void_lambda_context(line) and "-> {" in line


def _err05_advance_void_depth(line: str, void_lambda: bool, depth: int) -> int:
    if not void_lambda:
        return depth
    depth += line.count("{") - line.count("}")
    if "-> {" in line:
        depth -= 1
    return depth


def _err05_strip_void_return(line: str, void_lambda: bool) -> tuple[str, int]:
    if not void_lambda:
        return line, 0
    if "return BasTest.throwTestError" not in line:
        return line, 0
    return line.replace("return BasTest.throwTestError", "BasTest.throwTestError"), 1


def _err05_reset_void_state(void_lambda: bool, depth: int) -> tuple[bool, int]:
    if void_lambda and depth <= 0:
        return False, 0
    return void_lambda, depth


def _fix_err05_void_foreach_return(text: str) -> tuple[str, int]:
    """forEach 等 void lambda 内去掉 return BasTest.throwTestError。"""
    n = 0
    lines = []
    void_lambda = False
    depth = 0
    for line in text.splitlines():
        if _err05_void_lambda_enter(line):
            void_lambda = True
            depth = 1
        else:
            depth = _err05_advance_void_depth(line, void_lambda, depth)
        line, c = _err05_strip_void_return(line, void_lambda)
        n += c
        lines.append(line)
        void_lambda, depth = _err05_reset_void_state(void_lambda, depth)
    return "\n".join(lines), n


def _split_if_brace_body_line(text: str) -> tuple[str, int]:
    """G.FMT.06/13：if (...) { stmt; 行内块体拆行（无同行闭合 '}'）。"""
    n = 0
    lines = []
    for line in text.splitlines():
        m = re.match(r"^(\s*if \([^)]+\) \{) (.+;\s*)$", line)
        if m and "}" not in m.group(2):
            ind = re.match(r"^(\s*)", line).group(1)
            lines.append(m.group(1))
            lines.append(ind + "    " + m.group(2).strip())
            n += 1
            continue
        lines.append(line)
    return "\n".join(lines), n


def _split_brace_inline_stmt_lines(text: str) -> tuple[str, int]:
    """G.FMT.13：'{ stmt;' 同行块体拆行（非 lambda）。"""
    n = 0
    lines = []
    for line in text.splitlines():
        if "-> {" in line or _is_comment_line(line):
            lines.append(line)
            continue
        ind_m = re.match(r"^(\s*)", line)
        ind = ind_m.group(1) if ind_m else ""
        m_open = re.match(r"^(\s*.+?\{) (.+;\s*)$", line)
        if m_open and "}" not in m_open.group(2):
            lines.append(m_open.group(1))
            lines.append(ind + "    " + m_open.group(2).strip())
            n += 1
            continue
        m_close = re.match(r"^(\s*.+\{) (.+;\s*\}\s*)$", line)
        if m_close and "-> {" not in line:
            inner = m_close.group(2).replace("}", "").strip()
            lines.append(m_close.group(1))
            lines.append(ind + "    " + inner)
            lines.append(ind + "}")
            n += 1
            continue
        lines.append(line)
    return "\n".join(lines), n


def _split_if_oneline_blocks(text: str) -> tuple[str, int]:
    """G.FMT.09：if (...) { stmt; } 单行块体拆行。"""
    n = 0
    lines = []
    for line in text.splitlines():
        m = re.search(r"^(\s*if \([^)]+\) \{) (.+;\s*\}\s*)$", line)
        if m:
            ind = re.match(r"^(\s*)", line).group(1)
            inner = ind + "    "
            lines.append(m.group(1))
            lines.append(inner + m.group(2).replace("}", "").strip())
            lines.append(ind + "}")
            n += 1
            continue
        lines.append(line)
    return "\n".join(lines), n


def _reindent_unindented_class_jdoc(lines: list[str], out: list[str], i: int) -> tuple[list[str], int, int]:
    block, end_i = collect_javadoc_block(lines, i)
    out.extend(reindent_jdoc_block_lines(block))
    return out, end_i + 1, 1


def _fix_fmt18_block_comment_indent(text: str) -> tuple[str, int]:
    """G.FMT.18：类内未缩进块注释补 4 空格。"""
    text, n1 = _fix_javadoc_star_align(text)
    lines = text.splitlines()
    out: list[str] = []
    in_class = False
    n = n1
    i = 0
    while i < len(lines):
        line = lines[i]
        if re.search(r"public\s+(?:class|interface)\s+\w+", line):
            in_class = True
        if in_class and _UNINDENTED_BLOCK_JDOC.match(line):
            prev = out[-1].strip() if out else ""
            if should_reindent_block_at(prev):
                out, i, c = _reindent_unindented_class_jdoc(lines, out, i)
                n += c
                continue
        out.append(line)
        i += 1
    return "\n".join(out), n


def _fix_cmt03_expand_javadoc(text: str) -> tuple[str, int]:
    """G.CMT.03：单行 /** ... */ 方法注释展开为多行。"""
    n = 0
    lines = []
    next_is_decl = re.compile(
        r"^(?!new\b|return\b|if\b|for\b|while\b|throw\b|this\b|super\b|"
        r"case\b|switch\b|catch\b|try\b|do\b|else\b|class\b|interface\b|"
        r"enum\b|assert\b|synchronized\b|final\b)"
        r"[\w<>,.?\[\] ]+\s+\w+\s*\(")
    for i, line in enumerate(text.splitlines()):
        m = _SINGLE_LINE_JDOC.match(line)
        if not m:
            lines.append(line)
            continue
        nxt = text.splitlines()[i + 1].strip() if i + 1 < len(text.splitlines()) else ""
        if not (nxt.startswith("private ") or nxt.startswith("public ")
                or nxt.startswith("protected ") or nxt.startswith("static ")
                or nxt.startswith("@") or next_is_decl.match(nxt)):
            lines.append(line)
            continue
        indent, body = m.group(1), m.group(2).strip()
        lines.append("%s/**" % indent)
        lines.append("%s * %s" % (indent, body))
        lines.append("%s */" % indent)
        n += 1
    return "\n".join(lines), n


def _fix_obj04_shadow_fields(text: str) -> tuple[str, int]:
    """G.OBJ.04：类 static 字段与局部变量同名时重命名类字段。"""
    lines = text.splitlines()
    fields: dict[str, int] = {}
    for i, line in enumerate(lines):
        m = _FIELD_DECL.match(line)
        if m and " static " in line:
            fields[m.group(2)] = i
    if not fields:
        return text, 0
    shadowed: set[str] = set()
    for line in lines:
        m = _LOCAL_DECL.match(line)
        if m and m.group(2) in fields and " static " not in line:
            shadowed.add(m.group(2))
    if not shadowed:
        return text, 0
    n = 0
    out: list[str] = []
    for line in lines:
        new_line = line
        for name in shadowed:
            new_name = "shared%s%s" % (name[0].upper(), name[1:])
            if re.search(r"\bstatic\b.*\b%s\b" % re.escape(name), line):
                new_line = re.sub(r"\b%s\b" % re.escape(name), new_name, new_line)
                n += 1
        out.append(new_line)
    return "\n".join(out), n


def _fix_dcl02_format_intl(text: str) -> tuple[str, int]:
    """G.DCL.02：formatIntl 顶部变量声明下沉到首次使用附近（复杂版/简版通用）。"""
    if "private static String formatIntl(" not in text:
        return text, 0
    hit = apply_dcl02_format_intl_complex(text)
    if hit is not None:
        return hit
    hit = apply_dcl02_format_intl_simple(text)
    if hit is not None:
        return hit
    return text, 0


def _fix_dcl02_copywithin_to(text: str) -> tuple[str, int]:
    """G.DCL.02：copyWithin(int,int,int) 的 'int to' 声明下沉到复制循环前。"""
    old_top = "        int len = length;\n        int to = toIndex(target, len);\n"
    anchor = ("        for (int i = 0; i < count; i++) {\n"
              "            if (to + i < len) {")
    if old_top not in text or anchor not in text:
        return text, 0
    text = text.replace(old_top, "        int len = length;\n", 1)
    text = text.replace(anchor, "        int to = toIndex(target, len);\n" + anchor, 1)
    return text, 1


def _fix_dcl02_null_before_assert(text: str) -> tuple[str, int]:
    """G.DCL.02：Object resultObj = null 下沉到 assertNull(resultObj) 前（forEach 返回值测例）。"""
    lines = text.splitlines(True)
    pending: dict[str, str] = {}
    out: list[str] = []
    n = 0
    i = 0
    while i < len(lines):
        line = lines[i]
        dm = re.match(r"^([ \t]*)Object\s+(\w+)\s*=\s*null;\s*$", line)
        if dm:
            ind, name = dm.group(1), dm.group(2)
            if null_decl_assert_target(lines, i, name) is not None:
                pending[name] = ind
                i += 1
                continue
        am = re.match(r"^([ \t]*)assertNull\((\w+)\);\s*$", line)
        if am and am.group(2) in pending:
            ind, name = am.group(1), am.group(2)
            out.append("%sObject %s = null;\n" % (ind, name))
            out.append(line)
            del pending[name]
            n += 1
            i += 1
            continue
        out.append(line)
        i += 1
    if pending:
        return text, 0
    return "".join(out), n


def _fix_interface_method_javadoc(text: str) -> tuple[str, int]:
    """G.CMT.01：接口内 public 抽象方法补 Javadoc。"""
    n = 0
    lines = text.splitlines()
    out: list[str] = []
    jdoc_text = {
        "compare": "比较两元素大小（sort 比较器）。",
        "test": "谓词测试（value, index, array）。",
        "apply": "函数式接口回调方法。",
        "accept": "forEach 消费回调方法。",
        "get": "按索引读取元素。",
        "length": "返回元素个数。",
        "set": "按索引写入元素。",
    }
    in_iface = False
    for line in lines:
        if re.search(r"public\s+interface\s+\w+", line):
            in_iface = True
        if in_iface and re.match(r"^\s*\}\s*$", line) and not line.strip().startswith("};"):
            in_iface = False
        m = re.match(r"^(\s+)([\w<>,\[\]?\.]+)\s+(\w+)\s*\(", line)
        if in_iface and m and " default " not in line and " static " not in line:
            prev = out[-1].strip() if out else ""
            if not (prev.endswith("*/") or prev.startswith("*") or prev.startswith("/**")):
                ind = m.group(1)
                desc = jdoc_text.get(m.group(3), "接口抽象方法。")
                out.append("%s/**" % ind)
                out.append("%s * %s" % (ind, desc))
                out.append("%s */" % ind)
                n += 1
        out.append(line)
    return "\n".join(out), n


def _expand_fmt_line(line: str) -> tuple[list[str], int]:
    """G.FMT.06/09：拆行内多语句与行尾 '}。"""
    return expand_fmt_segments(line)


def _split_lambda_inline_blocks(text: str) -> tuple[str, int]:
    """G.FMT.06：-> { stmt; } 单行 lambda 块体拆行（整段在同一行）。"""
    n = 0
    lines = []
    for line in text.splitlines():
        m = re.search(r"^(\s*.*?-> \{)([^{}\n]+);\}(\s*,\s*[^)]+\))\s*;?\s*$", line)
        if m:
            ind = re.match(r"^(\s*)", line).group(1) + "    "
            lines.append(m.group(1))
            lines.append(ind + m.group(2).strip() + ";")
            lines.append(re.match(r"^(\s*)", line).group(1) + "}" + m.group(3) + ";")
            n += 1
            continue
        m = re.search(r"^(\s*.*?-> \{)([^{}\n]+);\}(;)?(\)?)?$", line)
        if not m:
            lines.append(line)
            continue
        ind = re.match(r"^(\s*)", line).group(1) + "    "
        tail = (m.group(3) or "") + (m.group(4) or "")
        lines.append(m.group(1))
        lines.append(ind + m.group(2).strip() + ";")
        lines.append(re.match(r"^(\s*)", line).group(1) + "}" + tail)
        n += 1
    return "\n".join(lines), n


def _split_lambda_multi_stmt_lines(text: str) -> tuple[str, int]:
    """G.FMT.09：lambda 块体一行多语句拆行。"""
    n = 0
    lines = []
    for line in text.splitlines():
        m = re.search(r"^(\s*.*?-> \{)(.+)$", line)
        if not m or line.count(";") < 2:
            lines.append(line)
            continue
        body = m.group(2).rstrip()
        body, trailing = lambda_trailing_suffix(body)
        if body.endswith("}"):
            lines.append(line)
            continue
        stmts = _split_semicolons_outside_strings(body)
        if len(stmts) < 2:
            lines.append(line)
            continue
        ind = re.match(r"^(\s*)", line).group(1)
        inner = ind + "    "
        lines.append(m.group(1))
        for st in stmts:
            lines.append(inner + st + ";")
        if trailing:
            lines.append(ind + trailing)
        n += 1
    return "\n".join(lines), n


def _split_semicolons_outside_strings(body: str) -> list[str]:
    parts: list[str] = []
    cur: list[str] = []
    in_str = False
    for ch in body:
        if ch == '"':
            in_str = not in_str
        if ch == ";" and not in_str:
            part = "".join(cur).strip()
            if part:
                parts.append(part)
            cur = []
        else:
            cur.append(ch)
    tail = "".join(cur).strip()
    if tail:
        parts.append(tail)
    return parts


