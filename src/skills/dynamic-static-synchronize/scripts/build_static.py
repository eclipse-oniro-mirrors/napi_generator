#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""静态项目编译（hvigor-static）：modelVersion/compileSdk 临时 patch 后构建，构建完恢复。

环境（试点固化）：
- 静态工程必须用 hvigor-static（动态 hvigor 6.22.4 不支持 arkTSVersion 1.2）
- 官方 master 工程 modelVersion=26.0.0，本机 hvigor-static 只支持 ≤6.0.0 → 临时 patch 两个文件
- compileSdkVersion "26.0.0" 字符串在 modelVersion 6.0.0 下必须为数字 → 临时 patch build-profile
- OHOS_BASE_SDK_HOME 必须指向 .../sdk/default/openharmony/static（SDK26 布局 <root>/<api>/<component>）
- 工程需本地 hypium：entry/src/hypium（SDK @ohos/hypium/src_static 拷贝，勿提交）

用法：python3 build_static.py <proj> [--keep-patch]
"""
import argparse
import os
import re
import subprocess
import sys
from pathlib import Path

CLT = Path("/root/aiSkill/command-line-tools")
NODE = CLT / "tool/node/bin/node"
HVIGORW = CLT / "hvigor-static/bin/hvigorw.js"
STATIC_SDK = CLT / "sdk/default/openharmony/static"

MODEL_PAT = re.compile(r'"modelVersion"\s*:\s*"26\.0\.0"')
COMPILE_PAT = re.compile(r'"compileSdkVersion"\s*:\s*"26\.0\.0"')

PATCHED: list[tuple[Path, str, str]] = []


def patch(path: Path, pat: re.Pattern, new: str) -> None:
    txt = path.read_text(encoding="utf-8")
    if pat.search(txt):
        PATCHED.append((path, txt, new))
        path.write_text(pat.sub(new, txt), encoding="utf-8")


def restore() -> None:
    for path, orig, _ in PATCHED:
        path.write_text(orig, encoding="utf-8")
    PATCHED.clear()


def ensure_hypium(proj: Path) -> None:
    """本地 hypium：不存在则从 SDK src_static 拷贝（本地文件，勿提交）。"""
    target = proj / "entry/src/hypium"
    if target.exists():
        return
    src = (STATIC_SDK / "26/ets/dynamic/build-tools/ets-loader/node_modules/@ohos/hypium/src_static")
    if not src.exists():
        src = (STATIC_SDK / "26/js/build-tools/ace-loader/node_modules/@ohos/hypium/src_static")
    target.mkdir(parents=True)
    for item in src.iterdir():
        if item.name in ("testAbility", "testrunner"):
            continue
        if item.is_dir():
            import shutil
            shutil.copytree(item, target / item.name)
        else:
            (target / item.name).write_bytes(item.read_bytes())
    print(f"hypium copied to {target}")


def build(proj: Path, keep_patch: bool = False) -> bool:
    ensure_hypium(proj)
    for f in (proj / "hvigor/hvigor-config.json5", proj / "oh-package.json5"):
        patch(f, MODEL_PAT, '"modelVersion": "6.0.0"')
    bp = proj / "build-profile.json5"
    if bp.exists():
        patch(bp, COMPILE_PAT, '"compileSdkVersion": 26')
    env = os.environ.copy()
    env["PATH"] = os.pathsep.join([str(CLT / "tool/node/bin"), str(CLT / "hvigor-static/bin"),
                                   str(CLT / "ohpm/bin"), env.get("PATH", "")])
    env["OHOS_BASE_SDK_HOME"] = str(STATIC_SDK)
    env["HOS_CLT_PATH"] = str(CLT)
    env["OHOS_SDK_PATH"] = str(STATIC_SDK)
    env["OHOS_HVIGORW_JS"] = str(HVIGORW)
    cmd = [str(NODE), str(HVIGORW), "--mode", "module", "-p", "product=default",
           "assembleHap", "--no-daemon"]
    try:
        r = subprocess.run(cmd, cwd=str(proj), env=env, capture_output=True, text=True,
                           timeout=560)
        ok = "BUILD SUCCESSFUL" in r.stdout
        # 真实错误（排除 SDK 自身 warning）
        errs = [l for l in r.stdout.splitlines() if "ERROR:" in l
                and not any(w in l for w in ("W0440", "W125428", "W65000", "W670214",
                                             "already imported", "Const enum", "Warning"))]
        if not ok and errs:
            print("\n".join(errs[-8:]))
        print("BUILD OK" if ok else "BUILD FAILED")
        return ok
    except subprocess.TimeoutExpired:
        print("BUILD TIMEOUT")
        return False
    finally:
        if not keep_patch:
            restore()


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("proj")
    ap.add_argument("--keep-patch", action="store_true")
    args = ap.parse_args()
    sys.exit(0 if build(Path(args.proj), args.keep_patch) else 1)
