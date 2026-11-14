#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""CLI: parse CI build.log (.zip/.tar/plain/dir) → compact JSON for Agent.

Examples:
  python3 parse_ci_build_log.py "/path/build.log (33).zip"
  python3 parse_ci_build_log.py /tmp/pr_logs/extracted --out analyze.json
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

from log_artifacts import analyze_ci_artifact, dump_json


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="Parse CI build.log artifact")
    p.add_argument("path", help="zip/tar/plain file or already-extracted dir")
    p.add_argument("--work", default=None, help="extract dir for archives")
    p.add_argument("--out", default=None, help="write analyze.json path")
    p.add_argument("--max-errors", type=int, default=40)
    return p


def main() -> int:
    args = build_parser().parse_args()
    path = Path(args.path)
    if not path.exists():
        print(f"NOT_FOUND: {path}", file=sys.stderr)
        return 2
    work = Path(args.work) if args.work else None
    report = analyze_ci_artifact(path, work)
    report["errors"] = report.get("errors", [])[: args.max_errors]
    out = Path(args.out) if args.out else None
    print(dump_json(report, out))
    return 0 if report.get("ok") else 1


if __name__ == "__main__":
    sys.exit(main())
