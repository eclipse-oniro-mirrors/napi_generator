#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Java scan: comment/javadoc rules."""
from __future__ import annotations

from pathlib import Path

from base import Hit
from java_common import *

def _scan_class_javadoc(text: str, fp: Path) -> list[Hit]:
    m = _CLASS_JDOC.search(text)
    if not m:
        return [Hit("G.CMT.02", str(fp), 1, "public class/interface 缺少 Javadoc")]
    block = m.group(0)
    if "@since" not in block and "since" not in block.lower():
        line = text[:m.start()].count("\n") + 1
        return [Hit("G.CMT.02", str(fp), line, "类 Javadoc 缺少 @since")]
    return []



def _scan_cmt06(lines: list[str], fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(lines, 1):
        if not line.lstrip().startswith("/**"):
            continue
        if i >= 2 and lines[i - 2].strip().endswith("}"):
            hits.append(Hit("G.CMT.06", str(fp), i, "注释前应有空行"))
    return hits



def _scan_cmt03_tc(lines: list[str], fp: Path) -> list[Hit]:
    """@tc Javadoc 缺功能说明行（G.CMT.03）。"""
    hits: list[Hit] = []
    i = 0
    while i < len(lines):
        if not lines[i].lstrip().startswith("/**"):
            i += 1
            continue
        block: list[str] = []
        while i < len(lines):
            block.append(lines[i])
            if lines[i].strip().endswith("*/"):
                break
            i += 1
        body = [l.strip() for l in block[1:-1]]
        if body and body[0].startswith("* @tc.number"):
            hits.append(Hit("G.CMT.03", str(fp), i - len(block) + 1,
                             "@tc Javadoc 缺功能说明"))
        i += 1
    return hits



def _scan_cmt03_tag_blank(lines: list[str], fp: Path) -> list[Hit]:
    """G.CMT.03：Javadoc 功能描述与标签之间缺空行。"""
    hits: list[Hit] = []
    i = 0
    while i < len(lines):
        if not lines[i].lstrip().startswith("/**"):
            i += 1
            continue
        block: list[str] = []
        while i < len(lines):
            block.append(lines[i])
            if lines[i].strip().endswith("*/"):
                break
            i += 1
        first_tag = -1
        for bi, bl in enumerate(block):
            if re.match(r"^\s*\*\s*@\w", bl):
                first_tag = bi
                break
        if (1 < first_tag < len(block)
                and block[first_tag - 1].strip() not in ("*", "")):
            hits.append(Hit("G.CMT.03", str(fp), i - len(block) + 1,
                             "功能描述与标签之间缺空行"))
        i += 1
    return hits



def _scan_cmt06_dup_javadoc(lines: list[str], fp: Path) -> list[Hit]:
    """G.CMT.06：Javadoc 结束后紧跟另一个 Javadoc（重复注释，可隔空行）。"""
    hits: list[Hit] = []
    for i, line in enumerate(lines, 1):
        if line.strip() != "*/" and not _SINGLE_LINE_JDOC.match(line.strip()):
            continue
        j = i
        while j < len(lines) and not lines[j].strip():
            j += 1
        if j < len(lines) and lines[j].lstrip().startswith("/**"):
            hits.append(Hit("G.CMT.06", str(fp), i,
                             "相邻重复 Javadoc"))
    return hits



def _scan_cmt06_star_space(text: str, fp: Path) -> list[Hit]:
    """G.CMT.06：Javadoc 续行 '*内容' 缺空格（含 '*,' / '*)'）。"""
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if re.match(r"^\s*\*[^ /\s*]", line):
            hits.append(Hit("G.CMT.06", str(fp), i,
                             "注释符与注释内容之间应有空格"))
    return hits



def _scan_cmt03_param_return(text: str, fp: Path) -> list[Hit]:
    """G.CMT.03：common 方法 Javadoc 缺 @param/@return（复用修复器判定）。"""
    if "common" not in fp.parts:
        return []
    new_text, n = _fix_cmt03_param_return(text, fp)
    if n:
        return [Hit("G.CMT.03", str(fp), 1, "方法 Javadoc 缺 @param/@return 标签")]
    return []



def _scan_cmt01_public_field(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    lines = text.splitlines()
    for i, line in enumerate(lines, 1):
        m = re.match(
            r"^(\s*)public\s+(?:final\s+)?[\w<>\[\],.?]+\s+(\w+)\s*(?:=|;)", line)
        if not m:
            continue
        prev = lines[i - 2].strip() if i >= 2 else ""
        if not (prev.endswith("*/") or prev.startswith("*")
                or prev.startswith("/**")):
            hits.append(Hit("G.CMT.01", str(fp), i,
                             "public 字段 %s 缺 Javadoc" % m.group(2)))
    return hits



def _scan_cmt03(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        m = _SINGLE_LINE_JDOC.match(line)
        if not m:
            continue
        if i + 1 < len(text.splitlines()):
            nxt = text.splitlines()[i].strip() if i < len(text.splitlines()) else ""
            if nxt and not nxt.startswith("@") and (
                    "private " in nxt or "public " in nxt or "protected " in nxt):
                hits.append(Hit("G.CMT.03", str(fp), i, "方法 Javadoc 应为多行"))
    return hits



def _scan_interface_method_javadoc(lines: list[str], fp: Path) -> list[Hit]:
    if "common" not in fp.parts:
        return []
    hits: list[Hit] = []
    for i, line in enumerate(lines):
        if "interface " in line and "Comparator" in line:
            pass
        m = re.match(r"^(\s+)(double|boolean|int|void)\s+(\w+)\s*\(", line)
        if not m:
            continue
        prev = lines[i - 1].strip() if i > 0 else ""
        if not (prev.endswith("*/") or prev.startswith("*") or prev.startswith("/**")):
            if i > 0 and "interface" in "\n".join(lines[max(0, i - 5):i]):
                hits.append(Hit("G.CMT.01", str(fp), i + 1,
                                 "接口方法 %s 缺少 Javadoc" % m.group(3)))
    return hits



def _scan_public_javadoc(lines: list[str], fp: Path) -> list[Hit]:
    if not _is_common_array_file(fp):
        return []
    hits: list[Hit] = []
    for i, line in enumerate(lines):
        m = _PUBLIC_METHOD.match(line)
        if not m:
            continue
        prev = lines[i - 1].strip() if i > 0 else ""
        if prev.endswith("*/") or prev.startswith("*") or prev.startswith("/**"):
            continue
        hits.append(Hit("G.CMT.01", str(fp), i + 1,
                         "public 方法 %s 缺少 Javadoc" % m.group(3)))
    return hits


