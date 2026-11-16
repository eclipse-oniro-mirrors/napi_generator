#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Java method signature parse helpers for CMT.03 fixes."""
from __future__ import annotations

import re
from pathlib import Path

_PARAM_NAME_RE = re.compile(
    r"^(?:final\s+)?[\w<>\[\],.?\s]+?\s+(\w+)\s*$")


def _paren_scan_step(ch: str, depth: int, i: int) -> tuple[int, int | None]:
    if ch == "(":
        return depth + 1, None
    if ch == ")":
        nd = depth - 1
        if nd == 0:
            return nd, i
        return nd, None
    return depth, None


def _closing_paren_index(sig: str, start: int) -> int | None:
    depth = 0
    for i in range(start, len(sig)):
        depth, hit = _paren_scan_step(sig[i], depth, i)
        if hit is not None:
            return hit
    return None


def _parse_method_sig(sig: str) -> tuple[str, str, str] | None:
    """Return (return type, method name, param list) or None."""
    if re.search(r"\b(?:class|interface|enum)\b", sig):
        return None
    m = re.search(
        r"(?:(?:public|protected|private|static|final|synchronized|default)\s+)*"
        r"(?:<[\w,? ]+>\s+)?"
        r"([\w<>\[\],.? ]+?)\s+(\w+)\s*\(", sig)
    if not m:
        return None
    ret_type, name = m.group(1).strip(), m.group(2)
    start = m.end() - 1
    close = _closing_paren_index(sig, start)
    if close is None:
        return None
    return ret_type, name, sig[start + 1:close]


def _join_method_signature(
        lines: list[str], start: int) -> tuple[str, int] | None:
    j = start
    while j < len(lines) and (
            not lines[j].strip() or lines[j].strip().startswith("@")):
        j += 1
    if j >= len(lines):
        return None
    first = lines[j].strip()
    if re.search(r"\b(?:class|interface|enum)\b", first):
        return None
    if not (re.search(
            r"\b(?:public|private|protected|static|final|default|synchronized)\b",
            first)
            or re.match(r"^[\w<>\[\],.? ]+\s+\w+\s*\(", first)):
        return None
    parts: list[str] = []
    depth = 0
    seen_paren = False
    while j < len(lines):
        s = lines[j].strip()
        if not seen_paren and parts and re.search(
                r"\b(?:class|interface|enum)\b", s):
            return None
        parts.append(s)
        depth += s.count("(") - s.count(")")
        if "(" in s:
            seen_paren = True
        if seen_paren and depth <= 0:
            j += 1
            break
        j += 1
    else:
        return None
    sig = " ".join(parts)
    if _parse_method_sig(sig) is None:
        return None
    return sig, j


def _param_name_from_chunk(chunk: str) -> str | None:
    pm = _PARAM_NAME_RE.match(chunk.strip())
    return pm.group(1) if pm else None


def _split_param_names(params: str) -> list[str]:
    names: list[str] = []
    cur: list[str] = []
    depth = 0
    for ch in params:
        if ch == "<":
            depth += 1
        elif ch == ">":
            depth -= 1
        if ch == "," and depth == 0:
            hit = _param_name_from_chunk("".join(cur))
            if hit:
                names.append(hit)
            cur = []
            continue
        cur.append(ch)
    hit = _param_name_from_chunk("".join(cur))
    if hit:
        names.append(hit)
    return names


def _javadoc_block_indent(block: list[str]) -> str:
    m = re.match(r"^(\s*)/\*\*", block[0])
    return m.group(1) if m else ""


def _missing_param_return_tags(
        block_text: str, param_names: list[str],
        has_return: bool) -> list[str]:
    tags: list[str] = []
    for pname in param_names:
        if not re.search(r"@param\s+%s\b" % re.escape(pname), block_text):
            tags.append("@param %s 参数说明。" % pname)
    if has_return and "@return" not in block_text:
        tags.append("@return 返回值说明。")
    return tags


def _insert_tags_before_existing(block: list[str], tags: list[str]) -> list[str]:
    insert_at = len(block) - 1
    for bi, bl in enumerate(block):
        if re.match(r"^\s*\*\s*@\w", bl):
            insert_at = bi
            break
    ind = _javadoc_block_indent(block)
    tagged = [ind + " * " + t for t in tags]
    return block[:insert_at] + tagged + block[insert_at:]


def _consume_javadoc(lines: list[str], i: int) -> tuple[list[str], int]:
    block: list[str] = []
    while i < len(lines):
        block.append(lines[i])
        if lines[i].strip().endswith("*/"):
            i += 1
            break
        i += 1
    return block, i


def _fix_cmt03_param_return(text: str, fp: Path) -> tuple[str, int]:
    if "common" not in fp.parts:
        return text, 0
    lines = text.splitlines()
    out: list[str] = []
    n = 0
    i = 0
    while i < len(lines):
        if not lines[i].lstrip().startswith("/**"):
            out.append(lines[i])
            i += 1
            continue
        block, i = _consume_javadoc(lines, i)
        joined = _join_method_signature(lines, i)
        if not joined:
            out.extend(block)
            continue
        sig, _sig_end = joined
        parsed = _parse_method_sig(sig)
        if not parsed or "=" in sig:
            out.extend(block)
            continue
        ret_type, _mname, params = parsed
        param_names = _split_param_names(params)
        block_text = "\n".join(block)
        has_return = ret_type not in ("void",)
        tags = _missing_param_return_tags(block_text, param_names, has_return)
        if not tags:
            out.extend(block)
            continue
        out.extend(_insert_tags_before_existing(block, tags))
        n += len(tags)
    return "\n".join(out), n
