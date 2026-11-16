#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Per-line brace context tracking for fmt09 fixes."""
from __future__ import annotations

from java_common import _brace_ctx


def _brace_pops_on_line(line: str, stack: list[bool]) -> list[bool]:
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


def _strip_ctrl_empty_semicolon(line: str, pops: list[bool]) -> str | None:
    if not line.rstrip().endswith("};"):
        return None
    if not pops or not pops[-1]:
        return None
    return line.rstrip().rstrip(";")


def _fix_fmt09_ctrl_empty_stmt(text: str) -> tuple[str, int]:
    stack: list[bool] = []
    out: list[str] = []
    n = 0
    for line in text.splitlines():
        pops = _brace_pops_on_line(line, stack)
        stripped = _strip_ctrl_empty_semicolon(line, pops)
        if stripped is not None:
            out.append(stripped)
            n += 1
            continue
        out.append(line)
    return "\n".join(out), n
