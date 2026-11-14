#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""静态项目批量复测 + xDevice 报告一键流程（skill 标准脚本）。

用法：
  python3 rerun_and_report.py --all                     # 全部 9 个默认项目
  python3 rerun_and_report.py --projects projA,projB    # 只跑指定项目（配置名）
  python3 rerun_and_report.py --projects projA --rerun-only   # 只重跑收集日志，不生成报告
  python3 rerun_and_report.py --logs-only --report-out DIR     # 只用已有日志重新生成报告

配置：DEFAULT_PROJECTS 为 9 项目（名称:路径:bundle:suite1,suite2）；新增项目追加一条即可。
产物：
  <out>/logs/<proj>_<suite>.log           aa test 原始日志
  <out>/work/<proj>_<suite>/parsed_summary.json
  <out>/summary_report.html               官方 xDevice 合并报告（9 HAP）
  <out>/summary_top.png                   官方截图（Summary → Test Details）
"""
from __future__ import annotations

import argparse
import glob
import os
import re
import shutil
import subprocess
import sys
import time
from pathlib import Path

SKILL = Path(__file__).resolve().parents[1]
REPO = Path("/root/aiSkill/develop/xts_acts_0421/ability/ability_runtime")
HVIGOR_STATIC = Path("/root/aiSkill/command-line-tools/hvigor-static/bin")
SDK_STATIC = Path("/root/aiSkill/command-line-tools/sdk/default/openharmony/static")
SIGN = Path("/root/aiSkill/napi_generator/src/skills/ohxts-stage-ets-hypium-upgrade/scripts/sign/sign_one.py")
HYPIUM_REPORT = Path("/root/aiSkill/napi_generator/src/skills/ohxtsstatic/hypium_html_report.py")
GEN_XDEVICE = Path("/root/aiSkill/develop/xts_acts_local_tools/xts_acts_0622/advancedComponents/gen_xdevice_summary_report.py")
SCREENSHOT_SH = Path("/root/aiSkill/napi_generator/src/skills/xts-develop-master-cycle/scripts/screenshot-xdevice-summary.sh")
HDC = "/root/aiSkill/hdc"
DEVICE = os.environ.get("OH_XTS_DEVICE", "192.168.13.150:8710")
OH_VERSION = os.environ.get("OHOS_DEVICE_VERSION", "OpenHarmony 7.0.0.38")

# 默认 9 项目：名称:相对路径:bundle:suite1[,suite2...]
DEFAULT_PROJECTS = [
    "actsabilitymonitortest:abilitymonitorstatic:com.example.abilitymonitortest.static:ActsAbilityMonitor",
    "actsbacktocallerabilitywithresulttest:actsabilityamstest/actsbacktocallerabilitywithresultteststatic:com.example.backwithresulttest.static:BackWithResultTest",
    "actssetmissionwindowicontest:actssetmissionwindowiconteststatic:com.example.setmissionicon.static:ActsSetMissionWindowIconTest",
    "actsmoveabilitytobackgroundtest:actsuiabilitycontext/actsmoveabilitytobackgroundteststatic:com.acts.moveabilitytobgtest.static:ActsMoveAbilityToBackgroundTest,LifeCycleLinstenerTest",
    "actsabilitydelegatortest:actsamstest/AbilityDelegatorTestStatic:com.acts.abilitydelegatortest.static:abilityDelegatorStage",
    "actsspecifiedprocesstest:actsspecifiedprocessstatic:com.example.actsspecifiedprocess.static:ActsAbilityTest",
    "actsabilitytoolabilitydelegatortest:abilitytoolabilitydelegatorteststatic:com.ohos.abilitydelegatorstagetest.static:ActsAbilityTest",
    "actsgetallwindowstages:actsGetAllWindowStagesTestStatic:com.example.getAllWindowStages.static:ActsGetStaticTest,ActsGetAllWindowStagesTest",
    "actssystemapitest:actssystemapiteststatic:com.example.systemapitest.static:abilityManagerTest,appManagerTest",
]


def sh(*args: str, timeout: int = 600) -> subprocess.CompletedProcess:
    return subprocess.run(args, capture_output=True, text=True, timeout=timeout)


def patch_sdk_versions(proj: Path) -> None:
    """临时 patch modelVersion/compileSdkVersion（勿提交），返回后由 restore 还原。"""
    for name in ("hvigor/hvigor-config.json5", "oh-package.json5", "build-profile.json5"):
        p = proj / name
        if p.is_file():
            t = p.read_text(encoding="utf-8")
            t = t.replace('"modelVersion": "26.0.0"', '"modelVersion": "6.0.0"')
            t = t.replace('"compileSdkVersion": "26.0.0"', '"compileSdkVersion": 26')
            p.write_text(t, encoding="utf-8")


def build(proj: Path) -> bool:
    env = os.environ.copy()
    env["PATH"] = f"{HVIGOR_STATIC}:{env.get('PATH', '')}"
    env["OHOS_BASE_SDK_HOME"] = str(SDK_STATIC)
    r = subprocess.run(
        ["hvigorw", "--mode", "module", "-p", "product=default", "assembleHap", "--no-daemon"],
        cwd=proj, capture_output=True, text=True, timeout=900, env=env)
    return "BUILD SUCCESSFUL" in (r.stdout + r.stderr)


def sign(proj: Path) -> bool:
    r = subprocess.run([sys.executable, str(SIGN), str(proj)],
                       capture_output=True, text=True, timeout=300)
    return "signed" in r.stdout


def run_suite(bundle: str, suite: str, out: Path, test_timeout: int = 60000, timeout: int = 300) -> bool:
    r = sh(HDC, "-t", DEVICE, "shell",
           f"aa test -b {bundle} -m entry -s unittest OpenHarmonyTestRunner -s timeout {test_timeout} -s class {suite}",
           timeout=timeout)
    out.write_text(r.stdout or "", encoding="utf-8")
    m = re.search(r"Tests run:\s*(\d+), Failure:\s*(\d+), Error:\s*(\d+), Pass:\s*(\d+)", r.stdout or "")
    if not m:
        print(f"    [WARN] 无结果汇总: {out.name}")
        return False
    tot, fail, err, passed = map(int, m.groups())
    ok = fail == 0 and err == 0
    print(f"    {suite}: {passed}/{tot} {'PASS' if ok else 'FAIL'}")
    return ok


def rerun_project(proj: dict, logs_dir: Path, test_timeout: int = 60000) -> bool:
    name, rel, bundle, suites = proj["name"], proj["path"], proj["bundle"], proj["suites"]
    proj_dir = REPO / rel
    print(f"== {name} ({rel}) ==")
    patch_sdk_versions(proj_dir)
    try:
        if not build(proj_dir):
            print("    BUILD FAILED")
            return False
        if not sign(proj_dir):
            print("    SIGN FAILED")
            return False
        hap = proj_dir / "entry/build/default/outputs/default/entry-default-signed.hap"
        r = sh(HDC, "-t", DEVICE, "install", "-r", str(hap), timeout=150)
        out = r.stdout or ""
        # hdc install 成功输出为 "install bundle successfully."（2026-09-01 实测），
        # 旧判断只认 "Success" 导致误判 INSTALL FAIL 跳过测试
        if "Success" not in out and "successfully" not in out:
            print(f"    INSTALL FAIL: {out[-200:]}")
            return False
        all_ok = True
        for suite in suites:
            all_ok = run_suite(bundle, suite, logs_dir / f"{name}_{suite}.log",
                               test_timeout) and all_ok
        return all_ok
    finally:
        # 还原临时 SDK 版本补丁（git checkout 仓库根相对路径）
        # REPO=.../ability_runtime → 仓库根为 parents[1]（.../xts_acts_0421）
        # （2026-09-01 修正：原 parents[2] 指向非仓库目录，还原静默失败）
        repo_root = REPO.parents[1]
        rel = proj_dir.relative_to(repo_root)
        sh("git", "-C", str(repo_root), "checkout", "--",
           str(rel / "hvigor/hvigor-config.json5"),
           str(rel / "oh-package.json5"),
           str(rel / "build-profile.json5"))


def parse_logs(logs_dir: Path, work_dir: Path) -> list[dict]:
    """每个日志 → parsed_summary.json（复用 ohxtsstatic/hypium_html_report.py）。"""
    sys.path.insert(0, str(HYPIUM_REPORT.parent))
    from hypium_html_report import parse_unittest_device_log, _write_parsed_json  # noqa
    items = []
    for log in sorted(logs_dir.glob("*.log")):
        text = log.read_text(encoding="utf-8", errors="replace")
        parsed = parse_unittest_device_log(text)
        if not parsed.cases and not parsed.summary:
            print(f"[SKIP] 日志无用例: {log.name}")
            continue
        work = work_dir / log.stem
        work.mkdir(parents=True, exist_ok=True)
        items.append({"parsed": _write_parsed_json(parsed, work), "stem": log.stem})
        print(f"[OK] {log.stem}: {parsed.summary.raw_line if parsed.summary else '?'}")
    return items


def build_report(proj_list: list[dict], items: list[dict], out_dir: Path) -> Path:
    """官方 CLI 合并：每个 HAP 一个 item，多 suite 用 + 连接 parsed json。"""
    groups: dict[str, list[dict]] = {}
    stem2proj = {}
    for p in proj_list:
        for s in p["suites"]:
            stem2proj[f'{p["name"]}_{s}'] = p
    for it in items:
        p = stem2proj.get(it["stem"])
        groups.setdefault(p["name"], {"proj": p, "parsed": []})["parsed"].append(it["parsed"])
    argv = [sys.executable, str(GEN_XDEVICE), "--out", str(out_dir),
            "--device", DEVICE, "--version", OH_VERSION]
    for name, g in groups.items():
        p = g["proj"]
        item = f"{name}:{p['suites'][0]}:" + "+".join(str(x) for x in g["parsed"])
        argv.append(item)
    r = subprocess.run(argv, capture_output=True, text=True, timeout=120)
    print(r.stdout[-400:])
    html = out_dir / "summary_report.html"
    return html if html.is_file() else None


def screenshot(out_dir: Path) -> Path:
    r = subprocess.run(["bash", str(SCREENSHOT_SH), str(out_dir)],
                       capture_output=True, text=True, timeout=600)
    m = re.search(r"SCREENSHOT_PNG=(\S+)", r.stdout)
    return Path(m.group(1)) if m else None


def main() -> int:
    ap = argparse.ArgumentParser(description="静态项目批量复测 + xDevice 报告一键流程")
    ap.add_argument("--all", action="store_true", help="跑全部默认 9 项目")
    ap.add_argument("--projects", default="", help="项目配置名逗号分隔（如 actsabilitymonitortest,actssystemapitest）")
    ap.add_argument("--out", default="/root/xts_reports/ability_runtime_static_summary", help="报告输出目录")
    ap.add_argument("--rerun-only", action="store_true", help="只重跑收集日志，不生成报告")
    ap.add_argument("--test-timeout", type=int, default=60000,
                    help="aa test 单用例超时（默认 60s，调试/复测快速暴露挂死；"
                         "禁止默认 300s 傻等——挂死用例应快速失败定位）")
    ap.add_argument("--logs-only", action="store_true", help="只用已有日志生成报告，不重跑")
    ns = ap.parse_args()

    proj_list = []
    for cfg in DEFAULT_PROJECTS:
        parts = cfg.split(":")
        proj_list.append({"name": parts[0], "path": parts[1], "bundle": parts[2],
                          "suites": parts[3].split(",")})
    if ns.projects:
        wanted = {x.strip() for x in ns.projects.split(",") if x.strip()}
        proj_list = [p for p in proj_list if p["name"] in wanted]

    out_dir = Path(ns.out)
    logs_dir = out_dir / "logs"
    work_dir = out_dir / "work"
    logs_dir.mkdir(parents=True, exist_ok=True)
    work_dir.mkdir(parents=True, exist_ok=True)

    if not ns.logs_only:
        for p in proj_list:
            rerun_project(p, logs_dir, ns.test_timeout)

    items = parse_logs(logs_dir, work_dir)
    if not ns.rerun_only:
        html = build_report(proj_list, items, out_dir)
        if html:
            print(f"SUMMARY_REPORT={html}")
            png = screenshot(out_dir)
            if png:
                print(f"SCREENSHOT_PNG={png}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
