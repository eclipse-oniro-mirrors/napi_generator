#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""G.FMT.10 line-wrap helpers for java_fix_1."""
from __future__ import annotations

import re


def wrap_comma_args(ind: str, head: str, args: str, close: str) -> list[str]:
    parts = [p.strip() for p in args.split(",") if p.strip()]
    out = [ind + head]
    cur = ind + "    "
    for j, p in enumerate(parts):
        piece = p + ("," if j < len(parts) - 1 else "")
        if len(cur) + len(piece) + 1 > 110 and cur.strip():
            out.append(cur.rstrip())
            cur = ind + "    " + piece + " "
        else:
            cur += piece + " "
    if cur.strip():
        out.append(cur.rstrip())
    out.append(ind + close)
    return out


def wrap_tc_desc_line(line: str, ind: str) -> tuple[list[str], int] | None:
    m_j = re.match(r"^(\s*\* @tc\.desc\s+)(.+)$", line)
    if not m_j:
        return None
    prefix, body = m_j.group(1), m_j.group(2)
    chunk = max(40, 100 - len(ind) - len(prefix))
    out: list[str] = []
    n = 0
    while len(body) > chunk:
        out.append(ind + prefix + body[:chunk].rstrip())
        body = body[chunk:].lstrip()
        prefix = "* "
        n += 1
    out.append(ind + prefix + body)
    return out, n + 1


def wrap_from_cast_line(line: str) -> tuple[list[str], int] | None:
    if not re.match(r"^(\s*)(.+\.from\()(.+)$", line):
        return None
    compact = line.replace(" ", "")
    if "((" not in compact and ") (" not in line:
        return None
    m2 = re.match(
        r"^(\s*)(.+\.from\()(.+),\s*(\([^)]+\)\s*\([^)]*\)\s*->\s*.+)$",
        line,
    )
    if not m2:
        m2 = re.match(r"^(\s*)(.+\.from\()([^,]+),\s*(.+\)\s*;)\s*$", line)
    if not m2 or len(line) <= 120:
        return None
    ind = m2.group(1)
    out = [ind + m2.group(2)]
    arg1 = m2.group(3).strip().rstrip(",")
    out.append(ind + "    " + arg1 + ",")
    rest = m2.group(4).strip()
    rest_line = ind + "    " + rest
    if len(rest_line) > 120:
        m3 = re.match(r"^(\([^)]+\))\s*(.+)$", rest)
        if m3:
            out.append(ind + "    " + m3.group(1))
            out.append(ind + "    " + m3.group(2))
        else:
            out.append(rest_line)
    else:
        out.append(rest_line)
    return out, 1


def wrap_comma_call(line: str, pattern: str, min_commas: int) -> tuple[list[str], int] | None:
    m = re.match(pattern, line)
    if not m or line.count(",") < min_commas:
        return None
    return wrap_comma_args(m.group(1), m.group(2), m.group(3), m.group(4)), 1


def wrap_ternary_line(line: str) -> tuple[list[str], int] | None:
    if line.count("?") < 2 or " = " not in line or "?" not in line:
        return None
    m_t = re.match(r"^(\s*)(.+?=\s*)(.+)$", line)
    if not m_t:
        return None
    ind = m_t.group(1)
    out = [ind + m_t.group(2)]
    expr = m_t.group(3)
    n = 0
    while len(expr) > 100:
        pos = expr.rfind(" : ", 0, 100)
        if pos < 0:
            pos = expr.find(" : ")
        if pos < 0:
            break
        out.append(ind + "    " + expr[: pos + 3].rstrip())
        expr = expr[pos + 3:].lstrip()
        n += 1
    out.append(ind + "    " + expr)
    return out, n + 1


def wrap_paren_assign(line: str) -> tuple[list[str], int] | None:
    m_assign = re.match(r"^(\s*)(.+?=\s*)(.+)$", line)
    if not m_assign or "(" not in m_assign.group(3):
        return None
    ind = m_assign.group(1)
    return [ind + m_assign.group(2), ind + "    " + m_assign.group(3)], 1


def fmt10_expand_long_line(line: str) -> tuple[list[str], int]:
    ind_m = re.match(r"^(\s*)", line)
    ind = ind_m.group(1) if ind_m else ""
    hit = wrap_tc_desc_line(line, ind)
    if hit is not None:
        return hit
    hit = wrap_from_cast_line(line)
    if hit is not None:
        return hit
    hit = wrap_comma_call(line, r"^(\s*)(.+?\.of\()(.+)(\)\s*;)\s*$", 3)
    if hit is not None:
        return hit
    if "->" not in line:
        hit = wrap_comma_call(line, r"^(\s*)(.+?\.from\()(.+)(\)\s*;)\s*$", 3)
        if hit is not None:
            return hit
    hit = wrap_comma_call(line, r"^(\s*)(.+?new int\[\] \{)(.+)(\}\s*;)\s*$", 3)
    if hit is not None:
        return hit
    hit = wrap_comma_call(line, r"^(\s*)(.+Arrays\.asList\()(.+)(\)\s*;)\s*$", 2)
    if hit is not None:
        return hit
    hit = wrap_ternary_line(line)
    if hit is not None:
        return hit
    hit = wrap_paren_assign(line)
    if hit is not None:
        return hit
    return [line], 0
