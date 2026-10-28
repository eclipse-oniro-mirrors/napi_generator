#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
两种 XTS 覆盖核对方式：

  1) excel  — 读台账 xlsx，对照 master ACTS（C CDK / web 多维度 / webview-dynamic）
  2) lookup — 给一个或多个接口名，在 test/xts/acts 里搜用例与文件

Usage:
  python3 xts_coverage_check.py lookup fetchCookieSync OH_ArkWeb_CreateErrorInfo
  python3 xts_coverage_check.py lookup PermissionRequest --subdir web --md-out out.md

  python3 xts_coverage_check.py excel ledger.xlsx --format c-cdk --scope unsatisfied
  python3 xts_coverage_check.py excel ledger.xlsx --format c-cdk-web --subsystem web
  python3 xts_coverage_check.py excel webview-dynamic.xlsx --format webview --scope user37

  # web 模块 ArkWeb 台账多批对比 / 新批黄底 vs 旧批
  python3 xts_coverage_check.py web-batches --oh-root /path/to/master
  python3 xts_coverage_check.py web-yellow --new-dir 20261028arkwebxts --old-dir 20261015arkwebxts
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path

SKILL_DIR = Path(__file__).resolve().parent


def _skill_import():
    skill = str(SKILL_DIR)
    if skill not in sys.path:
        sys.path.insert(0, skill)


def cmd_lookup(args: argparse.Namespace) -> int:
    from xts_lookup_lib import (
        markdown_lookup_report,
        resolve_acts_root,
        search_pattern_in_acts,
    )

    oh_root = getattr(args, "oh_root", None)
    _, acts = resolve_acts_root(
        Path(oh_root).resolve() if oh_root else None
    )
    patterns = args.patterns
    if not patterns:
        print("lookup 需要至少一个接口名/符号", file=sys.stderr)
        return 1

    results = [
        search_pattern_in_acts(p, acts, subdir=args.subdir, max_files=args.max_files)
        for p in patterns
    ]
    md = markdown_lookup_report(results, acts)
    if args.md_out:
        Path(args.md_out).write_text(md, encoding="utf-8")
        print(f"Wrote {args.md_out}")
    else:
        print(md)

    if args.json_out:
        Path(args.json_out).write_text(
            json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        print(f"JSON -> {args.json_out}")

    any_hit = any(r["covered_in_xts"] for r in results)
    return 0 if any_hit or args.allow_miss else 2


def _extend_excel_outputs(cmd: list[str], args: argparse.Namespace) -> None:
    if args.md_out:
        cmd.extend(["--md-out", args.md_out])
    if args.json_out:
        cmd.extend(["--json-out", args.json_out])
    if args.oh_root:
        cmd.extend(["--oh-root", args.oh_root])


def _excel_cmd_c_cdk(
    args: argparse.Namespace, xlsx: Path, py: str, skill: Path
) -> list[str]:
    cmd = [
        py,
        str(skill / "analyze_c_cdk_coverage.py"),
        str(xlsx),
        "--scope",
        args.scope,
    ]
    if args.kit:
        cmd.extend(["--kit", args.kit])
    _extend_excel_outputs(cmd, args)
    return cmd


def _excel_cmd_c_cdk_web(
    args: argparse.Namespace, xlsx: Path, py: str, skill: Path
) -> list[str]:
    cmd = [
        py,
        str(skill / "analyze_c_cdk_web_multi_coverage.py"),
        str(xlsx),
        "--subsystem",
        args.subsystem,
    ]
    _extend_excel_outputs(cmd, args)
    return cmd


def _excel_cmd_webview(
    args: argparse.Namespace, xlsx: Path, py: str, skill: Path
) -> list[str]:
    wv = skill.parent / "webview-dynamic-coverage" / "analyze_webview_dynamic.py"
    cmd = [py, str(wv), str(xlsx), "--scope", args.scope]
    if args.json_out:
        cmd.extend(["--json", args.json_out])
    md = args.md_out or str(
        skill.parent / "webview-dynamic-coverage/webview_dynamic_gaps.md"
    )
    cmd.extend(["--md", md])
    return cmd


_EXCEL_BUILDERS = {
    "c-cdk": _excel_cmd_c_cdk,
    "c-cdk-web": _excel_cmd_c_cdk_web,
    "webview": _excel_cmd_webview,
}


def cmd_excel(args: argparse.Namespace) -> int:
    builder = _EXCEL_BUILDERS.get(args.format)
    if not builder:
        print(f"未知 format: {args.format}", file=sys.stderr)
        return 1
    cmd = builder(args, Path(args.xlsx), sys.executable, SKILL_DIR)
    print("Run:", " ".join(cmd), file=sys.stderr)
    return subprocess.call(cmd)


def cmd_web_batches(args: argparse.Namespace) -> int:
    _skill_import()
    from compare_arkweb_batches import build_report, parse_batch_args

    oh_root = Path(args.oh_root).resolve()
    batches = parse_batch_args(args.batch)
    md_out = Path(args.md_out) if args.md_out else oh_root / "arkweb_batches_coverage_compare.md"
    try:
        md = build_report(oh_root, batches)
    except (FileNotFoundError, ValueError) as e:
        print(e, file=sys.stderr)
        return 1
    md_out.write_text(md, encoding="utf-8")
    print(f"Wrote {md_out}")
    return 0


def cmd_web_yellow(args: argparse.Namespace) -> int:
    _skill_import()
    from compare_yellow_vs_batch import (
        LEDGER_KINDS,
        all_arkweb_keys,
        build_focus_report,
        extract_yellow_arkweb,
        md_report,
    )

    root = Path(args.oh_root).resolve()
    new_d = root / args.new_dir
    old_d = root / args.old_dir
    new_label = args.new_label or args.new_dir
    old_label = args.old_label or args.old_dir
    focus = build_focus_report(
        root, args.new_dir, args.old_dir, new_label, old_label
    )
    focus_out = args.focus_out or (
        root / f"arkweb_{new_label}_yellow_vs_{old_label}_focus.md"
    )
    focus_out.write_text(focus, encoding="utf-8")
    print(f"Wrote {focus_out}")
    sections = [
        f"# {new_label} web 台账黄底 vs {old_label}（全量黄行）",
        "",
        "仅 **kit=ArkWeb** 且该行至少一列黄底。详见 focus 报告。",
        "",
        "---",
        "",
    ]
    for kind, prefix in LEDGER_KINDS:
        new_x = sorted(new_d.glob(f"{prefix}*.xlsx"))[-1]
        old_x = sorted(old_d.glob(f"{prefix}*.xlsx"))[-1]
        sections.append(
            md_report(
                extract_yellow_arkweb(new_x, kind),
                all_arkweb_keys(old_x, kind),
                all_arkweb_keys(new_x, kind),
                kind,
                f"{args.new_dir}/{new_x.name}",
                f"{args.old_dir}/{old_x.name}",
                new_label,
                old_label,
            )
        )
    out = args.md_out or (root / f"arkweb_{new_label}_yellow_vs_{old_label}.md")
    out.write_text("\n".join(sections), encoding="utf-8")
    print(f"Wrote {out}")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--oh-root", help="OH 工程根（含 src/test/xts/acts）")
    sub = parser.add_subparsers(dest="cmd", required=True)

    p_l = sub.add_parser("lookup", help="按接口名/符号在 ACTS 中检索")
    p_l.add_argument("patterns", nargs="+", help="如 fetchCookieSync、OH_ArkWeb_*、PermissionRequest.grant")
    p_l.add_argument("--oh-root", help="OH 工程根（含 src/test/xts/acts）")
    p_l.add_argument("--subdir", default=None, help="限定 acts 子目录，如 web")
    p_l.add_argument("--max-files", type=int, default=40)
    p_l.add_argument("--md-out", type=Path, default=None)
    p_l.add_argument("--json-out", type=Path, default=None)
    p_l.add_argument(
        "--allow-miss",
        action="store_true",
        help="即使全部未命中也返回 exit 0",
    )
    p_l.set_defaults(func=cmd_lookup)

    p_e = sub.add_parser("excel", help="按 Excel 台账批量对照 ACTS")
    p_e.add_argument("xlsx", help="xlsx 路径")
    p_e.add_argument("--oh-root", help="OH 工程根（含 src/test/xts/acts）")
    p_e.add_argument(
        "--format",
        choices=("c-cdk", "c-cdk-web", "webview"),
        default="c-cdk",
        help="c-cdk=C用例覆盖度明细; c-cdk-web=六维度 web; webview=webview-dynamic.xlsx",
    )
    p_e.add_argument(
        "--scope",
        default="unsatisfied",
        help="c-cdk: all|need_iface|unsatisfied; webview: user37|red30|…",
    )
    p_e.add_argument("--subsystem", default="web", help="c-cdk-web 子系统")
    p_e.add_argument("--kit", default=None, help="c-cdk 按 KIT 过滤")
    p_e.add_argument("--md-out", default=None)
    p_e.add_argument("--json-out", default=None)
    p_e.set_defaults(func=cmd_excel)

    p_wb = sub.add_parser(
        "web-batches",
        help="web 模块：多批 *arkwebxts 目录 ArkWeb 待补接口交集/差集",
    )
    p_wb.add_argument("--oh-root", type=Path, required=True)
    p_wb.add_argument(
        "--batch",
        action="append",
        metavar="LABEL:DIRNAME",
        help="如 20261028:20261028arkwebxts；可多次",
    )
    p_wb.add_argument("--md-out", type=Path, default=None)
    p_wb.set_defaults(func=cmd_web_batches)

    p_wy = sub.add_parser(
        "web-yellow",
        help="web 模块：新批台账黄底（master 未找到）vs 旧批",
    )
    p_wy.add_argument("--oh-root", type=Path, default=Path("."))
    p_wy.add_argument("--new-dir", default="20261028arkwebxts")
    p_wy.add_argument("--old-dir", default="20261015arkwebxts")
    p_wy.add_argument("--new-label", default=None)
    p_wy.add_argument("--old-label", default=None)
    p_wy.add_argument("--md-out", type=Path, default=None)
    p_wy.add_argument("--focus-out", type=Path, default=None)
    p_wy.set_defaults(func=cmd_web_yellow)

    args = parser.parse_args()
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())
