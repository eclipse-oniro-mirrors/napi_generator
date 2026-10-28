#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build coverage_point_id ↔ it() ↔ ACTS suite mapping from analyze JSON."""

from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

from coverage_naming import it_name_for_task

SKILL_DIR = Path(__file__).resolve().parent
SUITE_MAP = json.loads((SKILL_DIR / "acts_suite_map.json").read_text(encoding="utf-8"))


def enrich_tasks(tasks: list[dict]) -> list[dict]:
    rows = []
    for t in tasks:
        cat = t.get("category_d") or ""
        meta = SUITE_MAP.get(cat)
        if not meta:
            continue
        rows.append(
            {
                **t,
                "it_name": it_name_for_task(t),
                "suite": meta["suite"],
                "test_file": meta["test_file"],
                "page_file": meta["page_file"],
                "acts_subpath": meta["acts_subpath"],
            }
        )
    return rows


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "json",
        nargs="?",
        default=str(SKILL_DIR / "webview_dynamic_tasks.json"),
        help="Task list from analyze_webview_dynamic.py --json",
    )
    parser.add_argument(
        "-o",
        "--out",
        type=Path,
        default=SKILL_DIR / "webview_dynamic_acts_mapping.json",
    )
    args = parser.parse_args()

    src = Path(args.json).resolve()
    if not src.is_file():
        print(f"文件不存在: {src}", file=sys.stderr)
        return 1

    data = json.loads(src.read_text(encoding="utf-8"))
    tasks = data.get("tasks") or data.get("coverage_tasks") or []
    if isinstance(tasks, dict):
        tasks = list(tasks.values())
    rows = enrich_tasks(tasks)

    out = {
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "source_json": str(src),
        "count": len(rows),
        "suites": sorted({r["suite"] for r in rows}),
        "mapping": rows,
    }
    args.out.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(rows)} rows -> {args.out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
