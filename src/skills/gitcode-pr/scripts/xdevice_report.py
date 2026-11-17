#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Parse xdevice / DeviceTest report dirs (summary_report.xml + summary.ini)."""
from __future__ import annotations

import configparser
import gzip
import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Any

ERR_CODE_RE = re.compile(r"\b(1[56]\d{6}|401|201)\b")
EXPECT_RE = re.compile(
    r"expect\s+(\S+)\s+equals\s+(\S+)|expected[:\s]+(\S+).*(?:got|actual)[:\s]+(\S+)",
    re.I,
)


def _ini_summary(path: Path) -> dict[str, str]:
    if not path.is_file():
        return {}
    cp = configparser.ConfigParser()
    cp.read(path, encoding="utf-8")
    if "default" not in cp:
        return {}
    return {k: v for k, v in cp.items("default")}


def _boolish(val: str | None) -> bool | None:
    if val is None:
        return None
    low = val.strip().lower()
    if low in ("true", "1", "pass", "passed"):
        return True
    if low in ("false", "0", "fail", "failed"):
        return False
    return None


def _case_row(tc: ET.Element, suite: ET.Element) -> dict[str, Any]:
    result = tc.get("result")
    ok = _boolish(result)
    if ok is None:
        ok = (tc.get("status") or "").lower() != "error" and not tc.get("message")
    msg = (tc.get("message") or "").strip()
    row = {
        "module": suite.get("modulename") or "",
        "suite": suite.get("name") or tc.get("classname") or "",
        "name": tc.get("name") or "",
        "result": result,
        "ok": bool(ok),
        "time": tc.get("time"),
        "message": msg[:500],
    }
    m = EXPECT_RE.search(msg)
    if m:
        row["expect"] = m.group(1) or m.group(3)
        row["actual"] = m.group(2) or m.group(4)
    codes = ERR_CODE_RE.findall(msg)
    if codes:
        row["codes"] = codes
    return row


def parse_summary_xml(xml_path: Path) -> dict[str, Any]:
    root = ET.parse(xml_path).getroot()
    suites: list[dict[str, Any]] = []
    failed: list[dict[str, Any]] = []
    for suite in root.findall("testsuite"):
        cases = [_case_row(tc, suite) for tc in suite.findall("testcase")]
        suites.append(
            {
                "name": suite.get("name"),
                "module": suite.get("modulename"),
                "tests": suite.get("tests"),
                "failures": suite.get("failures"),
                "errors": suite.get("errors"),
                "disabled": suite.get("disabled"),
                "cases": cases,
            }
        )
        failed.extend(c for c in cases if not c["ok"])
    summary = {
        "tests": root.get("tests"),
        "failures": root.get("failures"),
        "errors": root.get("errors"),
        "disabled": root.get("disabled"),
        "unavailable": root.get("unavailable"),
        "ignored": root.get("ignored"),
        "modules": root.get("modules"),
        "runmodules": root.get("runmodules"),
        "starttime": root.get("starttime"),
        "endtime": root.get("endtime"),
    }
    return {"summary": summary, "suites": suites, "failed": failed}


def _read_hilog_blob(path: Path, max_bytes: int = 2_000_000) -> str:
    raw = path.read_bytes()[:max_bytes]
    if path.suffix == ".gz" or raw[:2] == b"\x1f\x8b":
        try:
            return gzip.decompress(raw).decode("utf-8", "ignore")
        except OSError:
            return raw.decode("utf-8", "ignore")
    return raw.decode("utf-8", "ignore")


def _hilog_line_interesting(ln: str) -> bool:
    low = ln.lower()
    return "call err=" in ln or "error code" in low or "BusinessError" in ln


def _collect_hilog_hits(path: Path, hits: list[str], limit: int) -> bool:
    """Append hits; return True if limit reached."""
    if not path.is_file() or path.stat().st_size > 20_000_000:
        return False
    for ln in _read_hilog_blob(path).splitlines():
        if not _hilog_line_interesting(ln):
            continue
        s = ln.strip()[:400]
        if s not in hits:
            hits.append(s)
        if len(hits) >= limit:
            return True
    return False


def scan_hilog_for_codes(report_dir: Path, limit: int = 30) -> list[str]:
    hits: list[str] = []
    log_root = report_dir / "log"
    if not log_root.is_dir():
        return hits
    for p in sorted(log_root.rglob("hilog*"))[:40]:
        if _collect_hilog_hits(p, hits, limit):
            break
    return hits


def analyze_xdevice_report(report_dir: Path, hilog: bool = True) -> dict[str, Any]:
    report_dir = report_dir.resolve()
    xml_path = report_dir / "summary_report.xml"
    if not xml_path.is_file():
        return {"kind": "xdevice_report", "ok": False, "error": f"missing {xml_path}"}
    parsed = parse_summary_xml(xml_path)
    summary = parsed["summary"]
    fail_n = int(summary.get("failures") or 0)
    err_n = int(summary.get("errors") or 0)
    unavail = int(summary.get("unavailable") or 0)
    disabled = int(summary.get("disabled") or 0)
    ok = fail_n == 0 and err_n == 0 and unavail == 0 and disabled == 0
    out: dict[str, Any] = {
        "kind": "xdevice_report",
        "root": str(report_dir),
        "ini": _ini_summary(report_dir / "summary.ini"),
        "summary": summary,
        "failed": parsed["failed"],
        "failed_count": len(parsed["failed"]),
        "ok": ok,
        "html": str(report_dir / "summary_report.html"),
    }
    if hilog and not ok:
        out["hilog_hints"] = scan_hilog_for_codes(report_dir)
    return out


def dump_json(report: dict, out: Path | None = None) -> str:
    text = json.dumps(report, ensure_ascii=False, indent=2)
    if out:
        out.write_text(text + "\n", encoding="utf-8")
    return text
