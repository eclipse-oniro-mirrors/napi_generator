#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""G.FMT.06/09 segment expansion for java_fix_1."""
from __future__ import annotations

import re


def _split_catch_else(seg: str) -> tuple[list[str], int] | None:
    if ";} catch" in seg:
        pos = seg.index(";} catch")
        return [seg[:pos] + ";", "} catch" + seg[pos + 8 :]], 1
    if ";} else" in seg:
        pos = seg.index(";} else")
        return [seg[:pos] + ";", "} else" + seg[pos + 7 :]], 1
    return None


def _split_closure_suffix(seg: str, indent: str) -> tuple[list[str], int] | None:
    if seg.endswith(";});") and ";};" not in seg:
        return [seg[:-3] + ";", indent + "});"], 1
    for suffix, parts in (
        (";};});", (";", "}", "});")),
        (";};}", (";", "}", "}")),
        (";};", (";", "}")),
        (";}", (";", "}")),
    ):
        if suffix == ";}" and "-> {" in seg:
            continue
        if seg.endswith(suffix):
            head = seg[: -len(suffix)] + parts[0]
            return [head] + list(parts[1:]), 1
    return None


def expand_segment_once(seg: str, indent: str) -> tuple[list[str], int]:
    hit = _split_catch_else(seg)
    if hit is not None:
        return hit
    hit = _split_closure_suffix(seg, indent)
    if hit is not None:
        return hit
    return [seg], 0


def expand_fmt_segments(line: str) -> tuple[list[str], int]:
    indent_m = re.match(r"^(\s*)", line)
    indent = indent_m.group(1) if indent_m else ""
    body = line[len(indent) :]
    segments = [body]
    n = 0
    changed = True
    while changed:
        changed = False
        nxt: list[str] = []
        for seg in segments:
            parts, c = expand_segment_once(seg, indent)
            if c:
                nxt.extend(parts)
                changed = True
                n += c
            else:
                nxt.append(seg)
        segments = nxt
    return [indent + s for s in segments], n
