#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""按动态 List.test 全量同步测试文件到静态（含 Synctest 等多文件）。

硬规则：
1. 扫动态 List 全部 import，缺一补一（abilitymonitor Synctest 教训）
2. sync_test_cases 覆盖时默认保留静态特有用例（tooldelegator 教训）
3. 同步后跑 verify_sync_guards；失败则 exit 1

用法：
  python3 sync_pair_tests.py <dyn_proj> <sta_proj> <bundle> <bundle.static>
  python3 sync_pair_tests.py ... --no-preserve   # 危险：不保留静态特有
"""
from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path

from pair_utils import (
    dyn_test_dir,
    extract_it_block,
    find_list_test,
    list_it_names,
    parse_list_modules,
    read_text,
    resolve_list_files,
    sta_test_dir,
    static_only_names,
)

HERE = Path(__file__).resolve().parent
SYNC_ONE = HERE / "sync_test_cases.py"
VERIFY = HERE / "verify_sync_guards.py"


def map_sta_path(s_dir: Path, dyn_file: Path) -> Path:
    """动态 Ability.test.ets → 静态同名；Synctest→AbilitySyncTest.test（TESTFILENAME）。"""
    name = dyn_file.name
    if name.endswith(".Synctest.ets") or name.endswith(".SyncTest.ets"):
        # 官方门禁：须 Xxx.test.ets，禁止 Ability.SyncTest.ets
        prefix = name.split(".", 1)[0]
        name = f"{prefix}SyncTest.test.ets"
    direct = s_dir / name
    if direct.is_file() or not list(s_dir.glob(f"*{Path(name).stem}*")):
        return direct
    alts = sorted(s_dir.glob(f"{Path(name).stem}*.ets"))
    return alts[0] if alts else direct


def preserve_static_only(old_sta: str, new_sta: str, dyn_src: str) -> tuple[str, int]:
    """把旧静态中、动态没有的用例块注回新静态。"""
    dyn_names = list_it_names(dyn_src)
    old_names = list_it_names(old_sta)
    new_names = set(list_it_names(new_sta))
    only = static_only_names(dyn_names, old_names)
    blocks: list[str] = []
    for name in only:
        if name in new_names:
            continue
        block = extract_it_block(old_sta, name)
        if block:
            blocks.append(block)
    if not blocks:
        return new_sta, 0
    marker = "\n    // ===== preserved static-only cases (do not drop) =====\n"
    insert = marker + "\n".join(blocks)
    # 插在 describe 闭合前：最后一个顶层 `  })` + `}`
    idx = new_sta.rfind("\n  })\n}")
    if idx < 0:
        idx = new_sta.rfind("\n  });\n}")
    if idx < 0:
        return new_sta + insert, len(blocks)
    return new_sta[:idx] + insert + new_sta[idx:], len(blocks)


def ensure_list_imports(s_list: Path, modules: list[str]) -> None:
    """静态 List 补齐缺失 import 与调用。"""
    # 静态门禁：Ability.Synctest → AbilitySyncTest.test（须 *.test.ets）
    modules = [
        ("AbilitySyncTest.test" if m in ("Ability.Synctest", "Ability.SyncTest") else m)
        for m in modules
    ]
    text = read_text(s_list) if s_list.is_file() else ""
    if not text:
        text = (
            "'use static';\n"
            "export default function testsuite(): void {\n}\n"
        )
    changed = False
    for mod in modules:
        if f"./{mod}" in text:
            continue
        # 生成合法标识符
        ident = re.sub(r"[^A-Za-z0-9_]", "_", Path(mod).stem)
        if not ident[0].isalpha():
            ident = "mod_" + ident
        import_line = f"import {ident} from './{mod}'\n"
        # 插在最后一个 import 后
        m = None
        for m in re.finditer(r"(?m)^import .+$", text):
            pass
        if m:
            text = text[: m.end()] + "\n" + import_line + text[m.end():]
        else:
            text = "'use static';\n" + import_line + text
        # 在 testsuite 体内调用
        if f"{ident}()" not in text:
            text = re.sub(
                r"(export default function testsuite\(\)(?:: void)? \{\n)",
                rf"\1  {ident}()\n",
                text,
                count=1,
            )
        changed = True
    if changed:
        s_list.write_text(text, encoding="utf-8")
        print(f"updated List: {s_list}")


def sync_one(
    dyn_file: Path,
    sta_file: Path,
    bundle: str,
    bundle_static: str,
    preserve: bool,
) -> None:
    old_sta = read_text(sta_file) if sta_file.is_file() else ""
    dyn_src = read_text(dyn_file)
    cmd = [
        sys.executable,
        str(SYNC_ONE),
        str(dyn_file),
        str(sta_file),
        bundle,
        bundle_static,
    ]
    r = subprocess.run(cmd, capture_output=True, text=True)
    print(r.stdout.strip() or r.stderr.strip())
    if r.returncode != 0:
        raise SystemExit(f"sync_test_cases failed: {dyn_file}")
    if preserve and old_sta:
        new_sta = read_text(sta_file)
        merged, n = preserve_static_only(old_sta, new_sta, dyn_src)
        if n:
            sta_file.write_text(merged, encoding="utf-8")
            print(f"preserved {n} static-only case(s) → {sta_file.name}")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("dyn_proj")
    ap.add_argument("sta_proj")
    ap.add_argument("bundle")
    ap.add_argument("bundle_static")
    ap.add_argument("--no-preserve", action="store_true",
                    help="不保留静态特有（禁止默认使用）")
    ap.add_argument("--skip-verify", action="store_true")
    args = ap.parse_args()
    dyn, sta = Path(args.dyn_proj), Path(args.sta_proj)
    d_dir, s_dir = dyn_test_dir(dyn), sta_test_dir(sta)
    d_list = find_list_test(d_dir)
    if not d_list:
        print("WARN: 动态无 List.test，回退同步全部 *.test.ets / *.Synctest.ets")
        modules = []
        files = sorted(d_dir.glob("*.test.ets")) + sorted(d_dir.glob("*.Synctest.ets"))
    else:
        modules = parse_list_modules(d_list)
        files = resolve_list_files(d_dir, modules)
        files = [f for f in files if "List." not in f.name]
    if not files:
        print("ERROR: 无动态测试文件可同步")
        return 1
    preserve = not args.no_preserve
    for df in files:
        sf = map_sta_path(s_dir, df)
        print(f"sync {df.name} → {sf.name}")
        sync_one(df, sf, args.bundle, args.bundle_static, preserve)
    if modules:
        s_list = find_list_test(s_dir) or (s_dir / "List.test.ets")
        ensure_list_imports(s_list, modules)
    if args.skip_verify:
        return 0
    vr = subprocess.run(
        [sys.executable, str(VERIFY), str(dyn), str(sta)],
    )
    return vr.returncode


if __name__ == "__main__":
    sys.exit(main())
