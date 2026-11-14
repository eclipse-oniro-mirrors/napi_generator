#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""同步/保留 beforeAll 中的 USB/权限弹窗点击（advanced_dialog_button_0）。

硬规则（2026-09-04 审查固化）：
1. 静态 beforeAll 已有 advanced_dialog 点击 → **必须保留**，禁止被 sync_test_cases
   用动态版整文件覆盖时抹掉。
2. 仅静态有、动态无 → **给动态补上**（同一 beforeAll 头部注入，不新建第二套 beforeAll）。
3. 双侧皆无 → 不强制新增（本脚本不发明）。
4. 匹配 beforeAll( 调用，禁止误匹配 import { ..., beforeAll, ... }。

用法：
  python3 sync_advanced_dialog.py <sta.test.ets> <dyn.test.ets>
  python3 sync_advanced_dialog.py --scan <repo>/ability/ability_runtime
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

DIALOG_ID = "advanced_dialog_button_0"
DIALOG_BODY = """      let driver = Driver.create();
      try {
        let allowed = await driver.findComponent(ON.id('advanced_dialog_button_0'));
        if (allowed) {
          await allowed.click();
        }
      } catch (err) {
        console.error('findComponent failed: ' + JSON.stringify(err));
      }
"""
UITEST_IMPORT = "import { Driver, ON } from '@ohos.UiTest';\n"


def has_dialog(text: str) -> bool:
    return DIALOG_ID in text


def ensure_uitest_import(text: str) -> str:
    if "from '@ohos.UiTest'" in text or 'from "@ohos.UiTest"' in text:
        return text
    # 优先插在最后一个独立 import ... from '...' 行后
    m = None
    for m in re.finditer(r"^import .+ from ['\"][^'\"]+['\"];?\s*$", text, flags=re.M):
        pass
    if m:
        return text[: m.end()] + "\n" + UITEST_IMPORT + text[m.end() :]
    return UITEST_IMPORT + text


def ensure_before_all_import(text: str) -> str:
    m = re.search(r"import\s*\{([^}]*)\}\s*from\s*['\"][^'\"]*hypium[^'\"]*['\"]", text)
    if not m or "beforeAll" in m.group(1):
        return text
    return text[: m.start(1)] + m.group(1).rstrip() + ", beforeAll" + text[m.end(1) :]


def find_before_all_call_body(text: str) -> tuple[int, int, str] | None:
    """返回 (kw_start, body_open, header)。只匹配 beforeAll( 调用。"""
    for m in re.finditer(r"\bbeforeAll\s*\(", text):
        line_start = text.rfind("\n", 0, m.start()) + 1
        line_prefix = text[line_start : m.start()]
        if "import " in line_prefix:
            continue
        brace = text.find("{", m.end())
        if brace < 0:
            continue
        header = text[m.start() : brace]
        if len(header) > 200:
            continue
        return m.start(), brace + 1, header
    return None


def inject_dialog(text: str) -> tuple[str, str]:
    """向已有 beforeAll 注入 dialog；无 beforeAll 则在 describe 后新建。"""
    if has_dialog(text):
        return text, "already"
    text = ensure_uitest_import(text)
    found = find_before_all_call_body(text)
    if found:
        kw, body_open, header = found
        if "async" not in header:
            new_header = re.sub(r"^(beforeAll\s*\()\s*", r"\1async ", header, count=1)
            text = text[:kw] + new_header + text[body_open - 1 :]
            found = find_before_all_call_body(text)
            assert found is not None
            kw, body_open, header = found
        text = text[:body_open] + "\n" + DIALOG_BODY + text[body_open:]
        return text, "injected"
    text = ensure_before_all_import(text)
    m = re.search(
        r"describe\s*\(\s*['\"][^'\"]+['\"]\s*,\s*(?:\(\)\s*(?::\s*void\s*)?\s*=>\s*)?\{",
        text,
    )
    if not m:
        return text, "fail"
    block = "\n    beforeAll(async () => {\n" + DIALOG_BODY + "    })\n"
    return text[: m.end()] + block + text[m.end() :], "created"


def sync_pair(sta: Path, dyn: Path) -> list[str]:
    logs: list[str] = []
    if not sta.is_file() or not dyn.is_file():
        return [f"skip missing: {sta} / {dyn}"]
    st = sta.read_text(encoding="utf-8")
    dt = dyn.read_text(encoding="utf-8")
    sta_has, dyn_has = has_dialog(st), has_dialog(dt)
    if sta_has and not dyn_has:
        dt2, status = inject_dialog(dt)
        if status not in ("already", "fail"):
            dyn.write_text(dt2, encoding="utf-8")
        logs.append(f"dyn {status}: {dyn}")
    elif not sta_has and dyn_has:
        # 动态有、静态无：给静态补（保留弹窗能力）
        st2, status = inject_dialog(st)
        if status not in ("already", "fail"):
            sta.write_text(st2, encoding="utf-8")
        logs.append(f"sta {status}: {sta}")
    elif sta_has and dyn_has:
        logs.append(f"ok both: {sta.name}")
    else:
        logs.append(f"neither (no-op): {sta.name}")
    return logs


def guess_dyn_from_sta(sta: Path) -> Path | None:
    s = str(sta)
    s = s.replace("/entry/src/main/src/test/", "/entry/src/ohosTest/ets/test/")
    s = s.replace("Static.test.ets", ".test.ets")
    s = s.replace("static.test.ets", ".test.ets")
    # project dir static suffix
    parts = Path(s).parts
    out: list[str] = []
    for p in parts:
        if p.endswith("static") and p != "static":
            out.append(p[: -len("static")])
        elif p.endswith("Static"):
            out.append(p[: -len("Static")])
        else:
            out.append(p)
    cand = Path(*out)
    # abilitymonitorstatic → abilitymontior（官方拼写）
    alt = Path(str(cand).replace("/abilitymonitor/", "/abilitymontior/"))
    for c in (cand, alt):
        if c.is_file():
            return c
    return None if not cand.is_file() else cand


def scan_runtime(root: Path) -> int:
    n = 0
    for sta in root.rglob("*.ets"):
        if "static" not in sta.as_posix().lower():
            continue
        if "/ohosTest/" in sta.as_posix():
            continue
        if not has_dialog(sta.read_text(encoding="utf-8", errors="ignore")):
            continue
        dyn = guess_dyn_from_sta(sta)
        if not dyn:
            print(f"[WARN] no dyn pair for {sta}", file=sys.stderr)
            continue
        for line in sync_pair(sta, dyn):
            print(line)
        n += 1
    return n


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("sta", nargs="?", help="静态 .test.ets")
    ap.add_argument("dyn", nargs="?", help="动态 .test.ets")
    ap.add_argument("--scan", help="扫描 ability_runtime 根目录")
    args = ap.parse_args()
    if args.scan:
        return 0 if scan_runtime(Path(args.scan)) >= 0 else 1
    if not args.sta or not args.dyn:
        ap.print_help()
        return 2
    for line in sync_pair(Path(args.sta), Path(args.dyn)):
        print(line)
    return 0


if __name__ == "__main__":
    sys.exit(main())
