#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Java scan: naming rules."""
from __future__ import annotations

from pathlib import Path

from base import Hit
from java_common import *

def _scan_nam03(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        m = re.search(r"\b(?:class|interface|enum)\s+(\w+)", line)
        if m and re.search(r"_\d", m.group(1)):
            hits.append(Hit("G.NAM.03", str(fp), i, "类名含下划线数字"))
    return hits



def _scan_nam01_dollar(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        clean = _STR_LIT_RE.sub('""', line)
        if re.search(r"\$\w+", clean):
            hits.append(Hit("G.NAM.01", str(fp), i, "标识符含 '$'"))
    return hits



def _scan_nam06_local_upper(text: str, fp: Path) -> list[Hit]:
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _is_comment_line(line):
            continue
        if re.match(
                r"^\s*(?:final\s+)?(?:int|long|double|String|boolean|char|byte|short|float)\s+"
                r"[A-Z][A-Z0-9_]*\s*=", line):
            hits.append(Hit("G.NAM.06", str(fp), i, "局部变量大写命名"))
        # Non-constant field UPPER_SNAKE (missing final) — CI G.NAM.06
        if re.match(
                r"^\s*(?:public|protected|private)\s+static\s+"
                r"(?:int|long|double|String|boolean|char|byte|short|float)\s+"
                r"[A-Z][A-Z0-9_]*\s*=", line):
            hits.append(Hit("G.NAM.06", str(fp), i, "非常量字段大写命名（须 static final）"))
    return hits


