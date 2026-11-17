#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""静态项目设备测试：签名 → 安装 → 逐套件 aa test → 结果解析。

用法：python3 test_static.py <proj> <bundle> [--suite <SuiteName>] [--all-suites]
默认从 Test.json 读 bundle；suite 从测试文件 describe 提取或 --suite 指定。
"""
import argparse
import json
import re
import subprocess
import sys
import time
from pathlib import Path

HDC = "/root/aiSkill/hdc"
DEVICE = "192.168.13.150:8710"
SIGN = Path("/root/aiSkill/napi_generator/src/skills/ohxts-stage-ets-hypium-upgrade/scripts/sign/sign_one.py")


def sh(*args: str, timeout: int = 60) -> str:
    r = subprocess.run([HDC, "-t", DEVICE, *args], capture_output=True, text=True,
                       timeout=timeout)
    return r.stdout or ""


def sign(proj: Path) -> None:
    r = subprocess.run([sys.executable, str(SIGN), str(proj)], capture_output=True,
                       text=True, timeout=300)
    if "signed" not in r.stdout:
        print(r.stdout[-300:])
        raise SystemExit("sign failed")


def extract_suites(proj: Path) -> list[str]:
    suites = []
    test_dir = proj / "entry/src/main/src/test"
    for f in list(test_dir.glob("*.test.ets")) + list(test_dir.glob("*.Synctest.ets")):
        txt = f.read_text(encoding="utf-8", errors="replace")
        for m in re.finditer(r"describe\('([^']+)'", txt):
            suites.append(m.group(1))
    return sorted(set(suites))


def run_suite(bundle: str, suite: str, timeout: int = 520) -> tuple[bool, str]:
    """安装后跑单个套件；返回 (全过, 输出)。"""
    sh("shell", "bm force-stop " + bundle, timeout=30)
    out = sh("shell", f"aa test -b {bundle} -m entry -s unittest OpenHarmonyTestRunner "
                      f"-s timeout 300000 -s class {suite}", timeout=timeout)
    m = re.search(r"Tests run: (\d+), Failure: (\d+), Error: (\d+), Pass: (\d+)", out)
    ok = bool(m) and m.group(2) == "0" and m.group(3) == "0"
    return ok, (m.group(0) if m else "NO SUMMARY") + f" hung={'__HUNG__' in out}"


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("proj")
    ap.add_argument("--bundle")
    ap.add_argument("--suite")
    ap.add_argument("--timeout", type=int, default=520)
    args = ap.parse_args()
    proj = Path(args.proj)

    test_json = json.loads((proj / "Test.json").read_text(encoding="utf-8"))
    bundle = args.bundle or test_json["driver"]["bundle-name"]

    sign(proj)
    hap = proj / "entry/build/default/outputs/default/entry-default-signed.hap"
    r = sh("install", str(hap), timeout=150)
    if "install bundle successfully" not in r and "Success" not in r:
        print("INSTALL FAIL:", r[-200:])
        sys.exit(1)

    suites = [args.suite] if args.suite else extract_suites(proj)
    print(f"suites: {suites}")
    all_ok = True
    for s in suites:
        ok, summary = run_suite(bundle, s, args.timeout)
        print(f"{s}: {'PASS' if ok else 'FAIL'} {summary}")
        all_ok = all_ok and ok
    sys.exit(0 if all_ok else 1)


if __name__ == "__main__":
    main()
