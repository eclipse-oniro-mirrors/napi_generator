#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate webview_dynamic_acts_report.md from mapping + optional test run JSON."""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from datetime import datetime
from pathlib import Path

SKILL_DIR = Path(__file__).resolve().parent
DEFAULT_MAPPING = SKILL_DIR / "webview_dynamic_acts_mapping.json"
DEFAULT_RUNS = SKILL_DIR / "webview_dynamic_test_runs.json"
DEFAULT_OUT = SKILL_DIR / "webview_dynamic_acts_report.md"
DIM_NAMES = {
    "I": "接口覆盖",
    "J": "调用覆盖",
    "K": "入参覆盖",
    "L": "参数规格覆盖",
    "M": "返回值覆盖",
    "N": "错误码覆盖",
}


def hdc_device() -> str:
    try:
        out = subprocess.check_output(["hdc", "list", "targets"], text=True, timeout=15)
        lines = [ln.strip() for ln in out.splitlines() if ln.strip() and "Empty" not in ln]
        return lines[0] if lines else "（未连接 hdc）"
    except (subprocess.SubprocessError, FileNotFoundError):
        return "（hdc 不可用）"


def mapping_table(rows: list[dict]) -> str:
    lines = [
        "| 文档覆盖点 ID | 维度 | 分类(D) | Hypium it() 名称 | ACTS 套件 | 测试文件 | 页面文件 |",
        "|---|---|---|---|---|---|---|",
    ]
    for r in rows:
        dim = r.get("dimension", "")
        dim_label = f"{dim} ({DIM_NAMES.get(dim, dim)})"
        lines.append(
            "| `{cp}` | {dim} | {cat} | `{it}` | {suite} | `{tf}` | `{pf}` |".format(
                cp=r["coverage_point_id"],
                dim=dim_label,
                cat=r.get("category_d", ""),
                it=r.get("it_name", ""),
                suite=r.get("suite", ""),
                tf=r.get("test_file", ""),
                pf=r.get("page_file", ""),
            )
        )
    return "\n".join(lines)


def runs_table(runs: list[dict]) -> str:
    if not runs:
        return "_（无测试轮次 JSON；先执行 pipeline test）_\n"
    lines = [
        "| 套件 | 轮次 | total | passed | failed | 报告目录 |",
        "|---|---:|---:|---:|---:|---|",
    ]
    for r in runs:
        rd = r.get("report_dir") or ""
        if rd:
            rd = f"`{rd}`"
        lines.append(
            f"| {r.get('suite', '')} | {r.get('round', '')} | {r.get('total', '')} | "
            f"{r.get('passed', '')} | {r.get('failed', '')} | {rd} |"
        )
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--mapping", type=Path, default=DEFAULT_MAPPING)
    parser.add_argument("--runs-json", type=Path, default=DEFAULT_RUNS)
    parser.add_argument("-o", "--out", type=Path, default=DEFAULT_OUT)
    parser.add_argument("--device", help="设备 SN（默认 hdc list targets 首条）")
    parser.add_argument("--scope", default="user37")
    args = parser.parse_args()

    if not args.mapping.is_file():
        print(f"缺少 mapping: {args.mapping}，请先 run mapping", file=sys.stderr)
        return 1

    data = json.loads(args.mapping.read_text(encoding="utf-8"))
    rows = data.get("mapping") or []
    runs: list[dict] = []
    if args.runs_json.is_file():
        runs = json.loads(args.runs_json.read_text(encoding="utf-8"))

    device = args.device or hdc_device()
    now = datetime.now().strftime("%Y-%m-%d %H:%M")
    suites = sorted({r.get("suite") for r in rows if r.get("suite")})

    body = f"""# webview-dynamic ACTS 补测报告

生成时间：{now}

设备：`{device}`

需求来源：`webview-dynamic.xlsx`（scope **{args.scope}**，I–N「否/空」待补点，本报告 **{len(rows)}** 条映射）

技能目录：`src/napi_generator/src/skills/webview-dynamic-coverage/`

---

## 1. 覆盖点与用例对应（case ↔ 文档）

{mapping_table(rows)}

说明：

- **文档**指 Excel 中待补 I–N 行；`coverage_point_id` 形如 `WebviewController.loadUrl#N`。
- 设备 / SDK 降级策略见 [device_adaptation.md](device_adaptation.md)。

机器可读：`webview_dynamic_acts_mapping.json`

---

## 2. 套件测试报告

涉及套件：{", ".join(f"**{s}**" for s in suites) or "（无）"}

{runs_table(runs)}

### 结论

"""
    failed = sum(int(r.get("failed") or 0) for r in runs)
    if not runs:
        body += "未执行设备跑测或未写入 `webview_dynamic_test_runs.json`。\n"
    elif failed:
        body += f"存在 **failed** 用例，请查各轮 `summary_report.html`。\n"
    else:
        body += f"已记录 **{len(runs)}** 轮执行，failed 合计 **0**。\n"

    args.out.write_text(body, encoding="utf-8")
    print(f"Wrote report: {args.out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
