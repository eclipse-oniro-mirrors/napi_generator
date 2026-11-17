#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Javadoc block scan / indent helpers."""
from __future__ import annotations

import re

from java_common import _SINGLE_LINE_JDOC


def _read_javadoc_block(lines: list[str], i: int) -> tuple[list[str], int]:
    block: list[str] = []
    while i < len(lines):
        block.append(lines[i])
        if lines[i].strip().endswith("*/"):
            i += 1
            break
        i += 1
    return block, i


def _index_of_next_javadoc(lines: list[str], start: int) -> int | None:
    k = start
    while k < len(lines) and not lines[k].strip():
        k += 1
    if k < len(lines) and lines[k].lstrip().startswith("/**"):
        return k
    return None


def _find_javadoc_start_in_out(out: list[str]) -> int:
    j = len(out) - 1
    while j >= 0 and not out[j].lstrip().startswith("/**"):
        j -= 1
    return j


def _cmt06_skip_single_dup(lines: list[str], i: int) -> int | None:
    if not _SINGLE_LINE_JDOC.match(lines[i].strip()):
        return None
    if _index_of_next_javadoc(lines, i + 1) is None:
        return None
    return i + 1


def _cmt06_skip_close_dup(lines: list[str], i: int, out: list[str]) -> int | None:
    if lines[i].strip() != "*/":
        return None
    if _index_of_next_javadoc(lines, i + 1) is None:
        return None
    j = _find_javadoc_start_in_out(out)
    if j < 0:
        return None
    del out[j:]
    return i + 1


def _fix_cmt06_dup_javadoc(text: str) -> tuple[str, int]:
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    i = 0
    while i < len(lines):
        nxt = _cmt06_skip_single_dup(lines, i)
        if nxt is not None:
            n += 1
            i = nxt
            continue
        nxt = _cmt06_skip_close_dup(lines, i, out)
        if nxt is not None:
            n += 1
            i = nxt
            continue
        out.append(lines[i])
        i += 1
    return "\n".join(out), n


def _next_nonempty_index(lines: list[str], j: int) -> int:
    while j < len(lines) and not lines[j].strip():
        j += 1
    return j


def _reindent_javadoc_block(
        block: list[str], nxt_line: str) -> list[str] | None:
    nm = re.match(r"^(\s*)(?:@\w+|\S)", nxt_line)
    base = re.match(r"^(\s*)/\*\*", block[0]).group(1)
    if not nm or nm.group(1) == base:
        return None
    target = nm.group(1)
    if len(target) < 4 and not re.match(
            r"^\s*public\s+(?:class|interface)\b", nxt_line):
        target = "    "
    new_block: list[str] = []
    for bi, bl in enumerate(block):
        stripped = bl.lstrip()
        if not stripped:
            new_block.append("")
        elif bi == 0:
            new_block.append(target + stripped)
        else:
            new_block.append(target + " " + stripped)
    return new_block


def _fix_fmt18_javadoc_indent(text: str) -> tuple[str, int]:
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    i = 0
    while i < len(lines):
        if not lines[i].lstrip().startswith("/**"):
            out.append(lines[i])
            i += 1
            continue
        block, i = _read_javadoc_block(lines, i)
        j = _next_nonempty_index(lines, i)
        nxt = lines[j] if j < len(lines) else ""
        new_block = _reindent_javadoc_block(block, nxt)
        if new_block is None:
            out.extend(block)
            continue
        out.extend(new_block)
        n += 1
    return "\n".join(out), n
