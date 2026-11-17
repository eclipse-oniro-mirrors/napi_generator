#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""本地测前硬门禁：源码指纹 vs HAP，杜绝改码后用旧包复测（req7 2026-09 实锤）。

用法:
  # 测前检查（工程内 *.hap 或 --hap 显式包）
  python3 check_hap_freshness.py <工程根...> [--hap /path/a.hap ...]
  # 编签成功后写戳（供 ohhdc/脚本强制校验）
  python3 check_hap_freshness.py --stamp <工程根> [--hap /path/a.hap ...]
  # 只校验戳（装包/设备 unittest 前）
  python3 check_hap_freshness.py --require-stamp <工程根> [--hap /path/a.hap ...]

退出码: 0 通过 / 1 陈旧或缺失 / 2 用法错误

戳文件: <工程根>/.local_hap_fresh_stamp.json（勿提交；应在 .gitignore）
"""
from __future__ import annotations

import argparse
import hashlib
import json
import sys
import time
from pathlib import Path

STAMP_NAME = ".local_hap_fresh_stamp.json"
SKIP_DIRS = {
    "build", "oh_modules", "node_modules", ".hvigor", "autosign",
    ".git", "hypium",
}
SRC_SUFFIXES = {".ets", ".ts", ".json5", ".json", ".c", ".cpp", ".h"}


def _fmt(ts: float) -> str:
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(ts))


def _is_skipped(path: Path) -> bool:
    if path.name == STAMP_NAME:
        return True
    return bool(SKIP_DIRS.intersection(path.parts))


def iter_sources(root: Path) -> list[Path]:
    out: list[Path] = []
    for p in root.rglob("*"):
        if not p.is_file() or _is_skipped(p):
            continue
        if p.suffix.lower() in SRC_SUFFIXES:
            out.append(p)
    return out


def source_fingerprint(root: Path) -> tuple[str, float, int]:
    """相对路径+mtime+size 指纹；返回 (sha256, latest_mtime, file_count)。"""
    root = root.resolve()
    files = sorted(iter_sources(root), key=lambda p: str(p.relative_to(root)))
    h = hashlib.sha256()
    latest = 0.0
    for p in files:
        st = p.stat()
        rel = str(p.relative_to(root)).replace("\\", "/")
        h.update(rel.encode())
        h.update(b"\0")
        h.update(str(st.st_mtime_ns).encode())
        h.update(b"\0")
        h.update(str(st.st_size).encode())
        h.update(b"\n")
        latest = max(latest, st.st_mtime)
    return h.hexdigest(), latest, len(files)


# HAP 在 entry/build/...；find 时勿套用 SRC 的 build 跳过
_HAP_SKIP = {"oh_modules", "node_modules", ".git", "hypium", "autosign"}


def find_haps(root: Path) -> list[Path]:
    out: list[Path] = []
    for p in root.rglob("*.hap"):
        if _HAP_SKIP.intersection(p.parts):
            continue
        out.append(p)
    return out


def check_haps_vs_source(
        root: Path, haps: list[Path] | None = None) -> list[str]:
    root = root.resolve()
    fp, latest_src, n = source_fingerprint(root)
    if n == 0:
        return [f"{root}: 无源码（ets/ts/json5…）"]
    cand = list(haps) if haps else find_haps(root)
    if not cand:
        return [
            f"{root}: 无 .hap；须先编签再测 "
            f"(源码 {n} 文件 latest={_fmt(latest_src)} fp={fp[:12]})"
        ]
    hits: list[str] = []
    for hap in cand:
        if not hap.is_file():
            hits.append(f"{root}: HAP 不存在 {hap}")
            continue
        ht = hap.stat().st_mtime
        if ht + 2 < latest_src:
            hits.append(
                f"{root}: HAP 陈旧 {hap.name} "
                f"hap={_fmt(ht)} < src={_fmt(latest_src)}；"
                f"禁止旧包测，请 assembleHap+sign 后 --stamp"
            )
    return hits


def write_stamp(root: Path, haps: list[Path] | None = None) -> Path:
    root = root.resolve()
    fp, latest_src, n = source_fingerprint(root)
    cand = [p.resolve() for p in (haps or find_haps(root)) if p.is_file()]
    if not cand:
        raise SystemExit(f"[hap-fresh] 无法写戳：{root} 下无 HAP")
    stale = check_haps_vs_source(root, cand)
    if stale:
        raise SystemExit("[hap-fresh] ✗ " + "; ".join(stale))
    payload = {
        "version": 1,
        "project": str(root),
        "source_fp": fp,
        "source_count": n,
        "source_latest": latest_src,
        "source_latest_human": _fmt(latest_src),
        "haps": [
            {
                "path": str(p),
                "mtime": p.stat().st_mtime,
                "size": p.stat().st_size,
            }
            for p in cand
        ],
        "written_at": time.time(),
        "written_at_human": _fmt(time.time()),
    }
    out = root / STAMP_NAME
    out.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n",
                   encoding="utf-8")
    return out


def require_stamp(root: Path, haps: list[Path] | None = None) -> list[str]:
    """装包/设备 unittest 前：戳存在且源码指纹未变，且 HAP mtime/size 与戳一致。"""
    root = root.resolve()
    stamp_path = root / STAMP_NAME
    if not stamp_path.is_file():
        return [
            f"{root}: 缺少 {STAMP_NAME}；"
            f"须编签后执行 check_hap_freshness.py --stamp <工程>"
        ]
    try:
        data = json.loads(stamp_path.read_text(encoding="utf-8"))
    except Exception as e:
        return [f"{root}: 戳损坏 {e}"]
    fp, _, _ = source_fingerprint(root)
    if data.get("source_fp") != fp:
        return [
            f"{root}: 源码已变（戳 fp={str(data.get('source_fp'))[:12]}… "
            f"当前={fp[:12]}…）；必须重新编签+--stamp，禁止用旧包测"
        ]
    # 无显式 --hap 时优先用戳内路径（HAP 在 build/，旧 find 曾误跳过）
    use_haps = haps
    if use_haps is None and data.get("haps"):
        use_haps = [Path(x["path"]) for x in data["haps"]]
    hits = check_haps_vs_source(root, use_haps)
    if hits:
        return hits
    # 若指定了 --hap，还要与戳内记录对齐
    if haps:
        recorded = {
            Path(x["path"]).resolve(): x for x in data.get("haps", [])
        }
        for hap in haps:
            hap = hap.resolve()
            rec = recorded.get(hap)
            if not rec:
                # 允许测包路径与戳内不同，但须仍新鲜
                continue
            st = hap.stat()
            if abs(st.st_mtime - float(rec["mtime"])) > 2 or (
                    st.st_size != int(rec["size"])):
                return [
                    f"{root}: HAP 与戳不一致 {hap.name}；"
                    f"疑似装了别的包，请重新 sign+--stamp"
                ]
    return []


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("projects", nargs="*", help="工程根目录")
    ap.add_argument("--hap", action="append", default=[],
                    help="显式 HAP 路径（可多次）")
    ap.add_argument("--stamp", action="store_true",
                    help="编签成功后写 .local_hap_fresh_stamp.json")
    ap.add_argument("--require-stamp", action="store_true",
                    help="装包/设备 unittest 前强制校验戳")
    args = ap.parse_args()
    if not args.projects:
        ap.error("请指定工程根")
    haps = [Path(h) for h in args.hap] if args.hap else None
    all_hits: list[str] = []
    for raw in args.projects:
        root = Path(raw).resolve()
        if args.stamp:
            out = write_stamp(root, haps)
            print(f"[hap-fresh] ✓ 已写戳 {out}")
            continue
        if args.require_stamp:
            all_hits.extend(require_stamp(root, haps))
        else:
            all_hits.extend(check_haps_vs_source(root, haps))
    if all_hits:
        print("[hap-fresh] ✗ 本地包不可靠（禁止宣称测试通过）：")
        for h in all_hits:
            print(f"  {h}")
        return 1
    if not args.stamp:
        mode = "戳校验" if args.require_stamp else "mtime 检查"
        print(f"[hap-fresh] ✓ {mode}通过，可装包跑测")
    return 0


if __name__ == "__main__":
    sys.exit(main())
