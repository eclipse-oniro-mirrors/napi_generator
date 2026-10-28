#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Cross-check webview-dynamic.xlsx tasks against master ACTS (test @tc.desc + page cp_*)."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

SKILL_DIR = Path(__file__).resolve().parent


def cp_action(coverage_point_id: str) -> str:
    s = coverage_point_id.replace(".", "_").replace("#", "_")
    return "cp_" + re.sub(r"[^A-Za-z0-9_]", "_", s)


def find_it_after_coverage(text: str, cp_id: str) -> str:
    esc = re.escape(cp_id)
    m = re.search(
        r"coverage\s+" + esc + r".*?it\s*\(\s*['\"]([^'\"]+)['\"]",
        text,
        re.DOTALL,
    )
    return m.group(1) if m else ""


def resolve_page(base: Path, page_file: str) -> Path:
    for rel in (
        f"main/ets/pages/{page_file}",
        f"ohosTest/ets/testability/pages/{page_file}",
    ):
        p = base / rel
        if p.is_file():
            return p
    return base / f"main/ets/pages/{page_file}"


def verify_row(
    item: dict, acts_root: Path, file_cache: dict[str, str]
) -> dict:
    cp_id = item["coverage_point_id"]
    sub = item["acts_subpath"]
    base = acts_root / sub / "entry/src"
    test_path = base / "ohosTest/ets/test" / item["test_file"]
    page_path = resolve_page(base, item["page_file"])

    def load(path: Path) -> str:
        key = str(path)
        if key not in file_cache:
            file_cache[key] = (
                path.read_text(encoding="utf-8") if path.is_file() else ""
            )
        return file_cache[key]

    test_text = load(test_path)
    page_text = load(page_path)
    action = cp_action(cp_id)
    has_desc = f"coverage {cp_id}" in test_text
    it_name = find_it_after_coverage(test_text, cp_id)
    has_page = action in page_text
    ok = has_desc and bool(it_name) and has_page
    return {
        "coverage_point_id": cp_id,
        "dimension": item["dimension"],
        "dimension_name": item["dimension_name"],
        "category_d": item["category_d"],
        "excel_row": item["row"],
        "suite": item["suite"],
        "it_name": it_name,
        "test_file": item["test_file"],
        "page_file": item["page_file"],
        "page_action": action,
        "status": "已补" if ok else "缺失",
        "checks": {
            "tc_desc_coverage": has_desc,
            "hypium_it": bool(it_name),
            "page_cp": has_page,
        },
    }


def markdown_table(rows: list[dict], xlsx: str, acts_glob: str) -> str:
    ok = sum(1 for r in rows if r["status"] == "已补")
    lines = [
        "# webview-dynamic.xlsx ↔ master ACTS 对照表",
        "",
        f"来源：`{xlsx}`（scope **user37**，I–N 待补 **{len(rows)}** 点）",
        f"校验路径：`{acts_glob}`（`@tc.desc coverage <覆盖点ID>` + 页面 `cp_*`）",
        "",
        f"**汇总：master 已补 {ok} / {len(rows)}**",
        "",
        "| Excel行 | D分类 | 覆盖点 ID | 维度 | Hypium it() | ACTS 套件 | 测试文件 | 页面 action | 状态 |",
        "|---:|---|---|---|---|---|---|---|---|",
    ]
    for r in rows:
        lines.append(
            f"| {r['excel_row']} | {r['category_d']} | `{r['coverage_point_id']}` | "
            f"{r['dimension']} | `{r['it_name']}` | {r['suite']} | {r['test_file']} | "
            f"`{r['page_action']}` | {r['status']} |"
        )
    missing = [r["coverage_point_id"] for r in rows if r["status"] == "缺失"]
    if missing:
        lines.extend(["", "## 仍缺失", ""] + [f"- `{m}`" for m in missing])
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--mapping",
        type=Path,
        default=SKILL_DIR / "webview_dynamic_acts_mapping.json",
    )
    parser.add_argument(
        "--acts-root",
        type=Path,
        default=SKILL_DIR.parents[3] / "test/xts/acts",
        help="Path to src/test/xts/acts",
    )
    parser.add_argument(
        "--xlsx",
        default=str(SKILL_DIR.parents[4] / "webview-dynamic.xlsx"),
    )
    parser.add_argument("--json-out", type=Path, default=SKILL_DIR / "webview_dynamic_master_coverage_table.json")
    parser.add_argument("--md-out", type=Path, default=SKILL_DIR / "webview_dynamic_master_coverage_table.md")
    args = parser.parse_args()

    data = json.loads(args.mapping.read_text(encoding="utf-8"))
    items = data.get("mapping") or []
    cache: dict[str, str] = {}
    rows = [verify_row(it, args.acts_root, cache) for it in items]
    ok = sum(1 for r in rows if r["status"] == "已补")
    missing = [r["coverage_point_id"] for r in rows if r["status"] == "缺失"]

    out = {
        "summary": f"{ok}/{len(rows)}",
        "missing": missing,
        "rows": rows,
    }
    args.json_out.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    args.md_out.write_text(
        markdown_table(rows, args.xlsx, "src/test/xts/acts/web"),
        encoding="utf-8",
    )
    print(f"Coverage: {ok}/{len(rows)} -> {args.md_out}")
    return 0 if ok == len(rows) else 1


if __name__ == "__main__":
    raise SystemExit(main())
