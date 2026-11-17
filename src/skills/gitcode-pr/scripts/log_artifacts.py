#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""CI build.log / artifact extract + error summarize (zip|tar|plain).

Misnamed ``build.log (N).zip`` from browser downloads are often POSIX tar.
Agent should call this instead of reading multi-MB logs into context.
"""
from __future__ import annotations

import json
import re
import tarfile
import zipfile
from pathlib import Path
from typing import Iterable

# Case-sensitive: [WE]\d with IGNORECASE false-hits sha256 hex (e966334).
ARKTS_ERR = re.compile(
    r"(?:Error Message:\s*.{0,300}"
    r"|Semantic error\s+ESE\d+"
    r"|ERROR:\s*Semantic error\s+ESE\d+"
    r"|\bESE\d{4,}\b"
    r"|Error Message:\s*"
    r"|[WE]\d{6}\b"
    r"|G\.(?:FMT|EXT|NAM|CNS|OBJ)\.[\w.-]+)"
)
PATH_LINE = re.compile(
    r"(?:At File:\s*)?"
    r"((?:[A-Za-z0-9_./\\-]+/)?[A-Za-z0-9_./\\-]+\.(?:ets|ts|json5?|cpp|h))"
    r"(?::(\d+))?(?::(\d+))?"
)
NOISE = (
    "libxcache_hook.so",
    "LD_PRELOAD",
    "ccache env:",
    "environ({",
)
HYPUM_HINT = "prefer @ohos/hypium-dynamic / project hypium OhmUrl alias"


def is_noise(line: str) -> bool:
    return any(n in line for n in NOISE)


def open_artifact(path: Path, extract_dir: Path) -> Path:
    """Extract archive into extract_dir; return dir with readable files."""
    extract_dir.mkdir(parents=True, exist_ok=True)
    if zipfile.is_zipfile(path):
        with zipfile.ZipFile(path) as zf:
            zf.extractall(extract_dir)
        return extract_dir
    if _try_tar(path, extract_dir):
        return extract_dir
    dest = extract_dir / "build.log.txt"
    dest.write_bytes(path.read_bytes())
    return extract_dir


def _try_tar(path: Path, extract_dir: Path) -> bool:
    try:
        with tarfile.open(path, "r:*") as tf:
            tf.extractall(extract_dir)
        return True
    except tarfile.TarError:
        return False


def iter_text_files(root: Path, max_bytes: int = 80_000_000) -> Iterable[Path]:
    for p in sorted(root.rglob("*")):
        if not p.is_file() or p.stat().st_size > max_bytes:
            continue
        yield p


def _norm_err(line: str) -> str:
    """Collapse duplicate Hvigor lines (timestamps / *** paths differ)."""
    s = re.sub(r"\[\d{4}/\d{2}/\d{2}[^\]]*\]\s*", "", line)
    s = re.sub(r"\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}:\s*", "", s)
    m = re.search(r"Error Message:\s*(.+?)(?:\s+At File:|$)", s)
    if m:
        return "EM:" + m.group(1).strip()[:240]
    m = re.search(r"\b(ESE\d+|[WE]\d{6})\b", s)
    if m:
        return "CODE:" + m.group(1)
    s = re.sub(r"\*{3}//[^\s]+", "***", s)
    return s.strip()[:300]


def _add_unique(bucket: list[str], item: str, limit: int) -> None:
    if not item or len(bucket) >= limit:
        return
    key = _norm_err(item)
    if any(_norm_err(x) == key for x in bucket):
        return
    bucket.append(item[:500])


def _looks_like_source_path(path: str) -> bool:
    low = path.replace("\\", "/").lower()
    if low.endswith((".js",)):
        return False
    return any(x in low for x in ("/test/", ".test.", "/ets/", "acts", "entry/"))


def _scan_line(line: str, errors: list[str], files: list[str]) -> None:
    s = line.strip()
    if not s or is_noise(s):
        return
    if "Failed to resolve OhmUrl" in s or ARKTS_ERR.search(s):
        _add_unique(errors, s[:500], 60)
    if "At File:" not in s and ".ets" not in s and ".ts" not in s:
        return
    for m in PATH_LINE.finditer(s):
        raw = m.group(1).replace("\\", "/")
        if not _looks_like_source_path(raw):
            continue
        loc = raw
        if m.group(2):
            loc = f"{loc}:{m.group(2)}"
        if m.group(3):
            loc = f"{loc}:{m.group(3)}"
        _add_unique(files, loc, 40)


def _scan_text(text: str, errors: list[str], files: list[str], hints: list[str]) -> None:
    for ln in text.splitlines():
        _scan_line(ln, errors, files)
    if "Failed to resolve OhmUrl" in text and "@ohos/hypium" in text:
        _add_unique(hints, HYPUM_HINT, 10)


def analyze_ci_log_dir(root: Path) -> dict:
    errors: list[str] = []
    files: list[str] = []
    hints: list[str] = []
    scanned = 0
    for p in iter_text_files(root):
        scanned += 1
        try:
            text = p.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        _scan_text(text, errors, files, hints)
    return {
        "kind": "ci_build_log",
        "root": str(root),
        "files_scanned": scanned,
        "errors": errors,
        "hit_files": files,
        "hints": hints,
        "ok": not errors,
    }


def analyze_ci_artifact(path: Path, work: Path | None = None) -> dict:
    path = path.resolve()
    work = (work or path.parent / f".extract_{path.stem}").resolve()
    if path.is_dir():
        report = analyze_ci_log_dir(path)
    else:
        extracted = open_artifact(path, work)
        report = analyze_ci_log_dir(extracted)
        report["artifact"] = str(path)
        report["extracted"] = str(extracted)
    return report


def dump_json(report: dict, out: Path | None = None) -> str:
    text = json.dumps(report, ensure_ascii=False, indent=2)
    if out:
        out.write_text(text + "\n", encoding="utf-8")
    return text
