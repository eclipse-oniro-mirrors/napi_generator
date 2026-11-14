#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Java 代码门禁检查与自动修复（basetype XTS 转换产物）。

规则注册表：rules/rules_java.json
"""
from __future__ import annotations

import re
from datetime import date
from pathlib import Path

from base import Hit

EXCLUDE_DIRS = {"build", ".git", "node_modules"}
_JAVA_IMPORT = re.compile(r"^import\s+(?:static\s+)?([\w.]+\.)?(\w+)\s*;\s*$")
_PUBLIC_METHOD = re.compile(
    r"^(\s*)public\s+(?!class|interface|enum|static\s+final\s+class)"
    r"([\w<>,\s\[\]?]+)\s+(\w+)\s*\("
)
_CLASS_JDOC = re.compile(r"/\*\*[\s\S]*?\*/\s*public\s+(?:class|interface)\s+(\w+)")
_CATCH_RT = re.compile(
    r"catch\s*\(\s*RuntimeException\s+(\w+)\s*\)\s*\{"
    r"(\s*assertEqual\s*\(\s*\"(\w+)\"\s*,\s*\1\.getClass\(\)\.getSimpleName\(\)\s*\)\s*;)"
)
_LAMBDA_DOLLAR = re.compile(r"\$x\d+")
_UNDERSCORE_PARAM = re.compile(r"\b_([a-zA-Z]\w*)\b")
_SPACE_BEFORE_BRACE = re.compile(r";\s+\}")
_LAMBDA_ARROW_NOSPACE = re.compile(r"\)->|(\w)->(?!\s)")
_LAMBDA_ARROW_EXTRASPACE = re.compile(r"->\s{2,}")
_MULTI_STMT = re.compile(r";.*;")
_CLOSING_BRACE_INLINE = re.compile(r";\}")
_SINGLE_LINE_JDOC = re.compile(r"^(\s*)/\*\*([^*].*?)\*/\s*$")
_UNINDENTED_BLOCK_JDOC = re.compile(r"^/\*\*")
_FIELD_DECL = re.compile(
    r"^(\s*)(?:private|protected|public)\s+(?:static\s+)?[\w<>,\[\]?]+\s+(\w+)\s*[;=]"
)
_LOCAL_DECL = re.compile(
    r"^(\s*)(?:[\w<>,\[\]?]+\s+)+(\w+)\s*="
)
_INTERFACE_METHOD = re.compile(r"^(\s*)([\w<>,\[\]?]+)\s+(\w+)\s*\([^)]*\)\s*;?\s*\}?\s*$")

# common 支持类：subarray 等重载组 Javadoc 模板（多行格式，规避单行 Javadoc 门禁）
_SUBARRAY_JDOC = (
    "    /**\n"
    "     * 返回从 begin 到 end（不含）的子数组视图，对应 subarray 语义。\n"
    "     */\n"
)
_SUBARRAY_D_BEGIN = (
    "    /**\n"
    "     * 返回从 begin 到末尾的子数组视图，对应 subarray 语义。\n"
    "     */\n"
)
_SUBARRAY_I_END = (
    "    /**\n"
    "     * 返回从 begin 到 end（不含）的子数组视图，对应 subarray 语义。\n"
    "     */\n"
)
_SUBARRAY_I_BEGIN = (
    "    /**\n"
    "     * 返回从 begin 到末尾的子数组视图，对应 subarray 语义。\n"
    "     */\n"
)
_SUBARRAY_EMPTY = (
    "    /**\n"
    "     * 返回完整数组的子数组视图，对应 subarray 语义。\n"
    "     */\n"
)
_SLICE_D_START = (
    "    /**\n"
    "     * 返回从 start 到末尾的 slice 拷贝，对应 slice 语义。\n"
    "     */\n"
)
_SLICE_I_START = (
    "    /**\n"
    "     * 返回从 start 到末尾的 slice 拷贝，对应 slice 语义。\n"
    "     */\n"
)
_SLICE_EMPTY = (
    "    /**\n"
    "     * 返回完整数组的 slice 拷贝，对应 slice 语义。\n"
    "     */\n"
)

KNOWN_ERRORS = {
    "RangeError", "TypeError", "IndexOutOfBoundsError", "NullPointerError",
    "SyntaxError", "URIError", "Error", "OutOfMemoryError", "ClassCastError",
}
_COMMON_PKG = "basetype.common"
_CATCH_TYPE = re.compile(r"catch\s*\(\s*(?:basetype\.common\.)?(\w+)\s+\w+\s*\)")


def collect_java_files(paths: list[str | Path]) -> list[Path]:
    out: list[Path] = []
    for raw in paths:
        p = Path(raw).resolve()
        if p.is_file() and p.suffix == ".java":
            out.append(p)
        elif p.is_dir():
            for fp in p.rglob("*.java"):
                if not any(x in fp.parts for x in EXCLUDE_DIRS):
                    out.append(fp)
    return sorted(set(out))


_STR_LIT_RE = re.compile(
    r'"(?:[^"\\\n]|\\.)*"|\'(?:[^\'\\\n]|\\.)\'')
_COMMENT_RE = re.compile(r"//[^\n]*|/\*[\s\S]*?\*/")


def _strip_strings_comments(body: str) -> str:
    """剔除字符串字面量与注释，避免 import 使用判断被字符串/注释内容误导。"""
    return _COMMENT_RE.sub("", _STR_LIT_RE.sub("", body))



def _import_used(body: str, simple: str, full: str) -> bool:
    """import 是否被使用：仅在字符串/注释之外的代码中出现简单名才算使用。

    注意：代码中若使用 FQN（如 java.util.List.of(...)），该 import 反而视为未使用，
    因此不做包名回退匹配（包名回退会把同包其他类的 FQN 误判为本 import 的使用）。
    """
    clean = _strip_strings_comments(body)
    return bool(re.search(r"\b%s\b" % re.escape(simple), clean))



def _split_control_header_body(line: str) -> tuple[str, str] | None:
    """拆出 if/for/while 头与同行语句体（支持条件内嵌套括号）。"""
    m = re.match(r"^(\s*(?:if|else if|for|while)\s*)\(", line)
    if not m:
        return None
    start = m.end() - 1
    depth = 0
    in_str = False
    for i in range(start, len(line)):
        ch = line[i]
        if ch == '"':
            in_str = not in_str
        elif not in_str:
            if ch == "(":
                depth += 1
            elif ch == ")":
                depth -= 1
                if depth == 0:
                    header = m.group(1) + line[start:i + 1]
                    body = line[i + 1:].strip()
                    return header, body
    return None



def _brace_ctx(line: str, pos: int) -> bool:
    """line 中 pos 处 '{' 是否为控制语句块头。"""
    return bool(_CTRL_HEAD.search(line[:pos]))



def _count_semicolons_outside_strings(line: str) -> int:
    n = 0
    in_str = False
    for ch in line:
        if ch == '"':
            in_str = not in_str
        if ch == ";" and not in_str:
            n += 1
    return n



def _is_comment_line(line: str) -> bool:
    s = line.strip()
    return s.startswith("//") or s.startswith("*") or s.startswith("/**") or s.endswith("*/")



def _extract_param_names_from_sig_line(line: str) -> set[str] | None:
    """从单行方法签名提取参数名；非方法签名返回 None。"""
    m = re.search(r"\(([^)]*)\)\s*(\{|throws|;|$)", line)
    if not m:
        return None
    if not re.search(r"\b(?:public|private|protected|static)\b", line):
        return None
    if re.search(r"\b(?:if|for|while|catch|switch)\b", line):
        return None
    names: set[str] = set()
    for p in m.group(1).split(","):
        p = p.strip()
        if not p:
            continue
        pm = re.match(r"^(?:final\s+)?[\w<>\[\],.?\s]+?\s+(\w+)\s*$", p)
        if pm:
            names.add(pm.group(1))
    return names


