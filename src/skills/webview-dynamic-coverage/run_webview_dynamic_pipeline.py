#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
webview-dynamic 一体化流水线：解析 Excel →（可选）生成骨架 → 编译 → 同步 HAP → 跑测 → 出报告。

Usage:
  python3 run_webview_dynamic_pipeline.py analyze [--scope user37]
  python3 run_webview_dynamic_pipeline.py generate [--cloud] [--oh]
  python3 run_webview_dynamic_pipeline.py mapping
  python3 run_webview_dynamic_pipeline.py build [--suites SUITE,...]
  python3 run_webview_dynamic_pipeline.py sync-haps
  python3 run_webview_dynamic_pipeline.py test [--rounds 2] [--suites SUITE,...]
  python3 run_webview_dynamic_pipeline.py report [--device SN]
  python3 run_webview_dynamic_pipeline.py all [--skip-generate] [--rounds 2]

默认路径（可 --oh-root / --src-dir 覆盖）：
  OH 根：含 webview-dynamic.xlsx，默认向上探测至含该文件的目录
  src 根：OH根/src，ACTS 在 src/test/xts/acts
"""

from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import sys
from datetime import datetime
from pathlib import Path

SKILL_DIR = Path(__file__).resolve().parent
NAPI_SKILLS = SKILL_DIR.parent
OHBUILD = NAPI_SKILLS / "ohbuild" / "ohbuild.py"
ACTSTEST = NAPI_SKILLS / "ohtest" / "actstest.py"
ANALYZE = SKILL_DIR / "analyze_webview_dynamic.py"
GEN_CLOUD = SKILL_DIR / "generate_cloud_webview_acts.py"
GEN_OH = SKILL_DIR / "generate_oh_monitored_acts.py"
GEN_MAPPING = SKILL_DIR / "generate_acts_mapping.py"
GEN_REPORT = SKILL_DIR / "generate_acts_report.py"
SUITE_MAP = json.loads((SKILL_DIR / "acts_suite_map.json").read_text(encoding="utf-8"))
DEFAULT_SUITES = sorted({v["suite"] for v in SUITE_MAP.values()})


def resolve_oh_root(explicit: str | None) -> Path:
    if explicit:
        p = Path(explicit).expanduser().resolve()
        if not (p / "webview-dynamic.xlsx").is_file() and (p.parent / "webview-dynamic.xlsx").is_file():
            return p.parent
        return p
    p = SKILL_DIR
    for _ in range(10):
        if (p / "webview-dynamic.xlsx").is_file():
            return p
        if p.parent == p:
            break
        p = p.parent
    return SKILL_DIR.parents[5]


def src_root(oh_root: Path, explicit: str | None) -> Path:
    if explicit:
        return Path(explicit).expanduser().resolve()
    return oh_root / "src"


def run_py(script: Path, args: list[str], cwd: Path | None = None) -> int:
    cmd = [sys.executable, str(script), *args]
    print("$", " ".join(cmd))
    return subprocess.run(cmd, cwd=cwd).returncode


def cmd_analyze(args: argparse.Namespace) -> int:
    oh = resolve_oh_root(args.oh_root)
    xlsx = oh / "webview-dynamic.xlsx"
    tasks_json = SKILL_DIR / "webview_dynamic_tasks.json"
    gaps_md = SKILL_DIR / "webview_dynamic_gaps.md"
    return run_py(
        ANALYZE,
        [
            str(xlsx),
            "--scope",
            args.scope,
            "--json",
            str(tasks_json),
            "--md",
            str(gaps_md),
        ],
    )


def cmd_generate(args: argparse.Namespace) -> int:
    oh = resolve_oh_root(args.oh_root)
    rc = 0
    if args.cloud or args.all_gen:
        rc = max(rc, run_py(GEN_CLOUD, [], cwd=oh))
    if args.oh or args.all_gen:
        rc = max(rc, run_py(GEN_OH, [], cwd=oh))
    if not args.cloud and not args.oh and not args.all_gen:
        rc = max(run_py(GEN_CLOUD, [], cwd=oh), run_py(GEN_OH, [], cwd=oh))
    return rc


def cmd_mapping(_args: argparse.Namespace) -> int:
    return run_py(GEN_MAPPING, [])


def cmd_build(args: argparse.Namespace) -> int:
    src = src_root(resolve_oh_root(args.oh_root), args.src_dir)
    suites = args.suites or ",".join(DEFAULT_SUITES)
    return run_py(
        OHBUILD,
        ["build-acts", suites, "--src-dir", str(src), "--product-name", args.product],
    )


def sync_haps(src: Path, product: str, pattern: str = "*.hap") -> int:
    haps = src / "out" / product / "suites" / "haps"
    tc = src / "out" / product / "suites" / "acts" / "acts" / "testcases"
    if not haps.is_dir():
        print(f"haps 目录不存在: {haps}", file=sys.stderr)
        return 1
    tc.mkdir(parents=True, exist_ok=True)
    n = 0
    for f in sorted(haps.glob(pattern)):
        shutil.copy2(f, tc / f.name)
        n += 1
    print(f"synced {n} HAP(s): {haps} -> {tc}")
    return 0 if n else 1


def cmd_sync_haps(args: argparse.Namespace) -> int:
    src = src_root(resolve_oh_root(args.oh_root), args.src_dir)
    return sync_haps(src, args.product, args.pattern)


def run_actstest(src: Path, suite: str, product: str) -> dict | None:
    proc = subprocess.run(
        [
            sys.executable,
            str(ACTSTEST),
            "run",
            suite,
            "--src-dir",
            str(src),
            "--product-name",
            product,
        ],
        capture_output=True,
        text=True,
    )
    out = proc.stdout + proc.stderr
    print(out)
    summary = None
    for line in out.splitlines():
        if "Test Summary:" in line and "total:" in line:
            import re

            m = re.search(
                r"total:\s*(\d+),\s*passed:\s*(\d+),\s*failed:\s*(\d+),\s*blocked:\s*(\d+)",
                line,
            )
            if m:
                summary = {
                    "total": int(m.group(1)),
                    "passed": int(m.group(2)),
                    "failed": int(m.group(3)),
                    "blocked": int(m.group(4)),
                    "exit_code": proc.returncode,
                }
    acts = src / "out" / product / "suites" / "acts" / "acts"
    reports = acts / "reports"
    latest = None
    if reports.is_dir():
        subs = [d for d in reports.iterdir() if d.is_dir()]
        if subs:
            latest = str(max(subs, key=lambda p: p.name))
    if summary:
        summary["report_dir"] = latest
        summary["suite"] = suite
    return summary


def cmd_test(args: argparse.Namespace) -> int:
    src = src_root(resolve_oh_root(args.oh_root), args.src_dir)
    suites = [s.strip() for s in (args.suites or ",".join(DEFAULT_SUITES)).split(",") if s.strip()]
    results: list[dict] = []
    rc = 0
    for suite in suites:
        for r in range(1, args.rounds + 1):
            print(f"\n=== {suite} 第 {r}/{args.rounds} 轮 ===\n")
            s = run_actstest(src, suite, args.product)
            if not s:
                rc = 1
                continue
            s["round"] = r
            results.append(s)
            if s.get("failed", 0) or s.get("exit_code"):
                rc = 1
    out_path = SKILL_DIR / "webview_dynamic_test_runs.json"
    out_path.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote run log: {out_path}")
    return rc


def cmd_report(args: argparse.Namespace) -> int:
    extra = []
    if args.device:
        extra.extend(["--device", args.device])
    if args.runs_json:
        extra.extend(["--runs-json", args.runs_json])
    return run_py(GEN_REPORT, extra)


def cmd_all(args: argparse.Namespace) -> int:
    steps = [
        ("analyze", lambda: cmd_analyze(args)),
    ]
    if not args.skip_generate:
        steps.append(("generate", lambda: cmd_generate(argparse.Namespace(
            oh_root=args.oh_root, src_dir=args.src_dir, cloud=True, oh=True, all_gen=True,
        ))))
    steps.extend([
        ("mapping", lambda: cmd_mapping(args)),
        ("build", lambda: cmd_build(args)),
        ("sync-haps", lambda: cmd_sync_haps(args)),
        ("test", lambda: cmd_test(args)),
        ("report", lambda: cmd_report(argparse.Namespace(
            oh_root=args.oh_root, src_dir=args.src_dir, device=args.device,
            runs_json=str(SKILL_DIR / "webview_dynamic_test_runs.json"),
        ))),
    ])
    rc = 0
    for name, fn in steps:
        print(f"\n{'=' * 60}\n>>> pipeline step: {name} @ {datetime.now().isoformat(timespec='seconds')}\n{'=' * 60}\n")
        if fn() != 0:
            print(f"步骤失败: {name}", file=sys.stderr)
            rc = 1
            if not args.continue_on_error:
                return rc
    return rc


def main() -> int:
    common = argparse.ArgumentParser(add_help=False)
    common.add_argument("--oh-root", help="OpenHarmony 根（含 webview-dynamic.xlsx）")
    common.add_argument("--src-dir", help="src 根（含 test/xts/acts）")
    common.add_argument("--product", default="rk3568")

    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="cmd", required=True)

    p_an = sub.add_parser("analyze", parents=[common], help="解析 xlsx → tasks.json + gaps.md")
    p_an.add_argument("--scope", default="user37", choices=("user37", "red30", "all"))

    p_gen = sub.add_parser("generate", parents=[common], help="运行代码生成器（覆盖 user37 云服务/OH 块）")
    p_gen.add_argument("--cloud", action="store_true")
    p_gen.add_argument("--oh", action="store_true")
    p_gen.add_argument("--all-gen", action="store_true", dest="all_gen")

    sub.add_parser("mapping", parents=[common], help="生成 webview_dynamic_acts_mapping.json")

    p_b = sub.add_parser("build", parents=[common], help="ohbuild build-acts")
    p_b.add_argument("--suites", help=f"默认: {','.join(DEFAULT_SUITES)}")

    p_s = sub.add_parser("sync-haps", parents=[common], help="suites/haps/*.hap → acts/testcases/")
    p_s.add_argument("--pattern", default="*.hap")

    p_t = sub.add_parser("test", parents=[common], help="actstest 跑套件（可多轮）")
    p_t.add_argument("--rounds", type=int, default=2)
    p_t.add_argument("--suites", help="逗号分隔 suite 名")

    p_r = sub.add_parser("report", parents=[common], help="生成 webview_dynamic_acts_report.md")
    p_r.add_argument("--device", help="设备 SN（写入报告头）")
    p_r.add_argument("--runs-json", help="测试轮次 JSON（默认 skill 目录下）")

    p_a = sub.add_parser("all", parents=[common], help="顺序执行 analyze → … → report")
    p_a.add_argument("--skip-generate", action="store_true", help="跳过 generate（已手改代码时用）")
    p_a.add_argument("--rounds", type=int, default=2)
    p_a.add_argument("--suites", help="build/test 用 suite 列表")
    p_a.add_argument("--device")
    p_a.add_argument("--scope", default="user37")
    p_a.add_argument("--continue-on-error", action="store_true")

    args = parser.parse_args()
    handlers = {
        "analyze": cmd_analyze,
        "generate": cmd_generate,
        "mapping": cmd_mapping,
        "build": cmd_build,
        "sync-haps": cmd_sync_haps,
        "test": cmd_test,
        "report": cmd_report,
        "all": cmd_all,
    }
    return handlers[args.cmd](args)


if __name__ == "__main__":
    raise SystemExit(main())
