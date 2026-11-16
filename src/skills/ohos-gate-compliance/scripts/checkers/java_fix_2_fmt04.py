#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""G.FMT.04 class member order fix helpers."""
from __future__ import annotations

import re
from pathlib import Path

from java_fix_1 import _brace_delta

_METHOD_DECL = re.compile(
    r"^(?:public|protected|private|static|final|synchronized|abstract\s+)?"
    r"(?:<[\w,? ]+>\s+)?[\w<>\[\],.? ]+\s+\w+\s*\(")
_INNER_DECL = re.compile(
    r"^(?:public|protected|private)?\s*(?:static\s+)?(?:final\s+)?"
    r"(?:class|interface|enum)\s+\w+")


def _find_class_body_span(lines: list[str]) -> tuple[int, str, int] | None:
    cls_line = -1
    cls_name = ""
    for idx, line in enumerate(lines):
        m = re.match(
            r"^(\s*)(?:public\s+)?(?:abstract\s+)?(?:final\s+)?"
            r"(?:class|interface)\s+(\w+)", line)
        if m:
            cls_line, cls_name = idx, m.group(2)
            break
    if cls_line < 0:
        return None
    depth = 0
    cls_end = -1
    for idx in range(cls_line, len(lines)):
        depth += _brace_delta(lines[idx])
        if depth <= 0 and idx > cls_line:
            cls_end = idx
            break
    if cls_end < 0:
        return None
    return cls_line, cls_name, cls_end


def _skip_member_prefix(lines: list[str], i: int, cls_end: int) -> int:
    while i < cls_end:
        s = lines[i].strip()
        if s.startswith("/**"):
            while i < cls_end and not lines[i].strip().endswith("*/"):
                i += 1
            i += 1
            continue
        if s.startswith("@") or s.startswith("//"):
            i += 1
            continue
        break
    return i


def _merge_multiline_decl(
        lines: list[str], i: int, cls_end: int, decl: str) -> str:
    if not ("(" in decl and "{" not in decl and not decl.endswith(";")):
        return decl
    j = i
    depth = decl.count("(") - decl.count(")")
    while j + 1 < cls_end and depth > 0:
        nxt = lines[j + 1]
        decl += " " + nxt.strip()
        depth += nxt.count("(") - nxt.count(")")
        j += 1
        if "{" in nxt or ";" in nxt:
            break
    return decl


def _classify_member_decl(decl: str, cls_name: str) -> str | None:
    if re.match(
            r"^(?:public|protected|private)?\s*%s\s*\("
            % re.escape(cls_name), decl):
        return "ctor"
    if _METHOD_DECL.match(decl) and "{" in decl:
        return "method"
    if _INNER_DECL.match(decl):
        return "inner"
    if decl.endswith(";"):
        return "field"
    if decl == "static {" or decl.startswith("static {"):
        return "init"
    return None


def _member_block_end(lines: list[str], i: int, cls_end: int, kind: str) -> int:
    if kind == "field":
        return i
    cur = i
    brace_depth = 0
    while cur < cls_end and brace_depth == 0 and "{" not in lines[cur]:
        cur += 1
    while cur < cls_end:
        brace_depth += _brace_delta(lines[cur])
        if brace_depth <= 0:
            break
        cur += 1
    return cur


def _collect_class_members(
        lines: list[str], cls_line: int, cls_end: int,
        cls_name: str) -> list[tuple[str, int, int]]:
    members: list[tuple[str, int, int]] = []
    i = cls_line + 1
    while i < cls_end:
        line = lines[i]
        if not line.strip() or line.strip() == "}":
            i += 1
            continue
        start = i
        i = _skip_member_prefix(lines, i, cls_end)
        if i >= cls_end:
            i = start + 1
            continue
        decl = lines[i].strip()
        decl = _merge_multiline_decl(lines, i, cls_end, decl)
        kind = _classify_member_decl(decl, cls_name)
        if kind is None:
            i += 1
            continue
        if kind == "field":
            end = i
            i += 1
        else:
            end = _member_block_end(lines, i, cls_end, kind)
            i = end + 1
        members.append((kind, start, end))
    return members


def _member_block_is_static(lines: list[str], start: int, end: int) -> bool:
    return " static " in "\n".join(lines[start:end + 1])


def _member_field_order_violation(
        kind: str, seen_ctor: bool, seen_method: bool,
        lines: list[str], s: int, e: int, last_inst_field: int) -> bool:
    if kind != "field":
        return False
    if seen_ctor or seen_method:
        return True
    if _member_block_is_static(lines, s, e) and last_inst_field >= 0:
        return True
    return False


def _member_field_inst_index(
        kind: str, lines: list[str], s: int, e: int,
        idx: int, last_inst_field: int) -> int:
    if kind != "field":
        return last_inst_field
    if _member_block_is_static(lines, s, e):
        return last_inst_field
    return idx


def _member_method_order_violation(
        kind: str, has_ctor: bool, seen_ctor: bool,
        members: list[tuple[str, int, int]], idx: int) -> bool:
    if kind == "field" or kind == "ctor":
        return False
    if has_ctor and not seen_ctor:
        return True
    if seen_ctor and any(k2 == "ctor" for k2, _, _ in members[idx + 1:]):
        return True
    return False


def _member_order_has_violation(
        members: list[tuple[str, int, int]], lines: list[str]) -> bool:
    seen_ctor = False
    seen_method = False
    last_inst_field = -1
    has_ctor = any(k == "ctor" for k, _, _ in members)
    for idx, (kind, s, e) in enumerate(members):
        if _member_field_order_violation(
                kind, seen_ctor, seen_method, lines, s, e, last_inst_field):
            return True
        last_inst_field = _member_field_inst_index(
            kind, lines, s, e, idx, last_inst_field)
        if kind == "ctor":
            seen_ctor = True
            continue
        if kind == "field":
            continue
        seen_method = True
        if _member_method_order_violation(kind, has_ctor, seen_ctor, members, idx):
            return True
    return False


def _partition_members(
        members: list[tuple[str, int, int]],
        lines: list[str]) -> list[tuple[str, int, int]]:
    fields: list[tuple[str, int, int]] = []
    ctors: list[tuple[str, int, int]] = []
    others: list[tuple[str, int, int]] = []
    for item in members:
        kind = item[0]
        if kind == "field":
            fields.append(item)
        elif kind == "ctor":
            ctors.append(item)
        else:
            others.append(item)
    static_f = [m for m in fields if _member_block_is_static(lines, m[1], m[2])]
    inst_f = [m for m in fields if not _member_block_is_static(lines, m[1], m[2])]
    return static_f + inst_f + ctors + others


def _rebuild_class_with_order(
        lines: list[str], cls_line: int, cls_end: int,
        ordered: list[tuple[str, int, int]]) -> list[str]:
    out = lines[:cls_line + 1]
    for _k, s, e in ordered:
        if out and out[-1].strip():
            out.append("")
        out.extend(lines[s:e + 1])
    out.extend(lines[cls_end:])
    return out


def _fix_fmt04_member_order(text: str, fp: Path) -> tuple[str, int]:
    """G.FMT.04: reorder class members (static fields, instance, ctor, methods)."""
    lines = text.splitlines()
    span = _find_class_body_span(lines)
    if not span:
        return text, 0
    cls_line, cls_name, cls_end = span
    members = _collect_class_members(lines, cls_line, cls_end, cls_name)
    if not members or not _member_order_has_violation(members, lines):
        return text, 0
    ordered = _partition_members(members, lines)
    out = _rebuild_class_with_order(lines, cls_line, cls_end, ordered)
    return "\n".join(out), 1
