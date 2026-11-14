#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""CLI: parse xdevice report dir → compact JSON (no LLM log dump).

Examples:
  python3 parse_xdevice_report.py /root/.../errCheck/2026-11-14-16-19-45
  python3 parse_xdevice_report.py /path/report --no-hilog --out report.json
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

from xdevice_report import analyze_xdevice_report, dump_json


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="Parse xdevice / DeviceTest report dir")
    p.add_argument("report_dir", help="dir with summary_report.xml")
    p.add_argument("--out", default=None, help="write JSON path")
    p.add_argument("--no-hilog", action="store_true", help="skip hilog scan")
    return p


def main() -> int:
    args = build_parser().parse_args()
    root = Path(args.report_dir)
    if not root.is_dir():
        print(f"NOT_DIR: {root}", file=sys.stderr)
        return 2
    report = analyze_xdevice_report(root, hilog=not args.no_hilog)
    out = Path(args.out) if args.out else None
    print(dump_json(report, out))
    if report.get("error"):
        return 2
    return 0 if report.get("ok") else 1


if __name__ == "__main__":
    sys.exit(main())
