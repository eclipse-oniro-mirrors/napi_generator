#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""assertEqual / assertEqualInt rewrite helpers."""
from __future__ import annotations

import re


def _split_assert_args(argstr: str) -> list[str] | None:
    args: list[str] = []
    cur: list[str] = []
    depth = 0
    in_str = False
    for ch in argstr:
        if ch == '"':
            in_str = not in_str
        if in_str:
            cur.append(ch)
            continue
        if ch in "({[<":
            depth += 1
        elif ch in ")}>]":
            depth -= 1
        if ch == "," and depth == 0:
            args.append("".join(cur).strip())
            cur = []
            continue
        cur.append(ch)
    if cur:
        args.append("".join(cur).strip())
    return args if len(args) == 2 else None


def _top_level_bad_arith(ch: str, depth: int, idx: int) -> bool:
    if depth != 0:
        return False
    if ch in "+*/%<>!&|":
        return True
    return ch == "-" and idx > 0


def _integer_expr_rejects(expr: str) -> bool:
    if ".doubleValue()" in expr or re.search(r"\d+[eE][+-]?\d+", expr):
        return True
    depth = 0
    for idx, ch in enumerate(expr):
        if ch == "(":
            depth += 1
            continue
        if ch == ")":
            depth -= 1
            continue
        if _top_level_bad_arith(ch, depth, idx):
            return True
    return False


def _integer_expr_positive_patterns(expr: str) -> bool:
    if re.search(
            r"\.(?:get|at|find|findLast|findIndex|findLastIndex)\s*\(", expr):
        return True
    if re.search(r"\.valueOf\s*\(\s*\)\s*\.\s*get\s*\(", expr):
        return True
    if re.search(r"\.next\s*\(\s*\)\s*\.\s*value\u0008", expr):
        return True
    return False


def _is_integer_expr(expr: str, ints: set[str], integers: set[str]) -> bool:
    e = expr.strip()
    if e.endswith(".intValue()"):
        e = e[: -len(".intValue()")]
    if _integer_expr_rejects(e):
        return False
    if e in integers and e not in ints:
        return True
    return _integer_expr_positive_patterns(e)


def _strip_int_value_call(expr: str) -> str:
    return expr[:-len(".intValue()")] if expr.endswith(".intValue()") else expr


def _pick_equal_int(a0: str, a1: str, ints: set[str], integers: set[str],
                    semi: str) -> str | None:
    if a0 == "null" or a1 == "null":
        return None
    raw0, raw1 = a0, a1
    a0s, a1s = _strip_int_value_call(a0), _strip_int_value_call(a1)
    if (_is_integer_expr(a0s, ints, integers)
            and _is_integer_expr(a1s, ints, integers)):
        left = raw0 if raw0.endswith(".intValue()") else (a0s + ".intValue()")
        right = raw1 if raw1.endswith(".intValue()") else (a1s + ".intValue()")
        return "assertEqual(%s, %s)%s" % (left, right, semi)
    if re.match(r"^-?\d+$", a0s) and _is_integer_expr(a1s, ints, integers):
        return "assertEqualInt(%s, %s)%s" % (a0s, a1s, semi)
    if re.match(r"^-?\d+$", a1s) and _is_integer_expr(a0s, ints, integers):
        return "assertEqualInt(%s, %s)%s" % (a1s, a0s, semi)
    if re.match(r"^\w+$", a0s) and _is_integer_expr(a1s, ints, integers):
        return "assertEqualInt(%s, %s)%s" % (a0s, a1s, semi)
    if raw0.endswith(".intValue()") and _is_integer_expr(a1s, ints, integers):
        return "assertEqualInt(%s, %s)%s" % (raw0, a1s, semi)
    return None


def _paren_depth_delta(ch: str, in_str: bool, depth: int) -> int:
    if in_str or ch not in "()":
        return depth
    if ch == "(":
        return depth + 1
    return depth - 1


def _find_assert_call_end(line: str, open_pos: int) -> int:
    depth, in_str, pos = 1, False, open_pos
    while pos < len(line) and depth:
        ch = line[pos]
        if ch == '"':
            in_str = not in_str
        else:
            depth = _paren_depth_delta(ch, in_str, depth)
        pos += 1
    return pos


def _rewrite_assert_equal_line(
        line: str, ints: set[str], integers: set[str]) -> tuple[str, int]:
    if "assertEqual(" not in line or "assertEqualInt(" in line:
        return line, 0
    n = 0
    idx = 0
    parts: list[str] = []
    needle = "assertEqual("
    while True:
        j = line.find(needle, idx)
        if j < 0:
            parts.append(line[idx:])
            break
        parts.append(line[idx:j])
        k = j + len(needle)
        pos = _find_assert_call_end(line, k)
        args = _split_assert_args(line[k:pos - 1])
        tail, semi = pos, ""
        if tail < len(line) and line[tail] == ";":
            semi = ";"
            tail += 1
        picked = _pick_equal_int(*args, ints, integers, semi) if args else None
        if picked:
            parts.append(picked)
            n += 1
        else:
            parts.append(line[j:tail])
        idx = tail
    return "".join(parts), n
