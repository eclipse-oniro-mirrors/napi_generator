#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Follow an open gitcode PR until merged: poll gate labels, fetch compile logs.

Design (2026-11, PR#45112 hypium OhmUrl lesson):
  * Until PR is merged/closed, Agent (or cron/loop) re-checks gate state.
  * On 编译失败 / CodeCheck fail: download Artifacts build.log(.zip), extract
    ArkTS ERROR, emit fix hints (e.g. @ohos/hypium vs hypium-dynamic).
  * After a code push, wait >=60s then comment ``start build``.

Usage:
  python3 pr_gate_follow.py status 45112
  python3 pr_gate_follow.py fetch-log 45112 --out /tmp/pr45112_gate
  python3 pr_gate_follow.py analyze /tmp/pr45112_gate
  python3 pr_gate_follow.py watch 45112 --interval 1800 --max-rounds 48
  python3 pr_gate_follow.py rebuild 45112          # delay 60s + start build
"""
from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import tarfile
import time
import zipfile
from pathlib import Path
from typing import Any
from urllib.request import Request, urlopen

API = "https://gitcode.com/api/v5/repos/{owner}/{repo}"
DEFAULT_OWNER = "openharmony"
DEFAULT_REPO = "xts_acts"
TOKEN_FILE = Path.home() / ".gitcode_token"
ARTIFACT_HINT = re.compile(
    r"https://cidownload\.openharmony\.cn/Artifacts/[^\s\"'<>]+",
    re.I,
)
ARKTS_ERR = re.compile(
    r"(Error Message:.*|ERROR:\s*\d+\s*ArkTS:.*|Failed to resolve OhmUrl.*)",
    re.I,
)
FAIL_LABELS = (
    "编译失败",
    "codecheck失败",
    "CodeCheck失败",
    "静态检查失败",
    "门禁失败",
)
PASS_HINTS = ("编译成功", "冒烟测试成功", "门禁通过", "全部通过")
HYPUM_FIX = (
    "FIX_HINT: import '@ohos/hypium' but oh-package only has "
    "'@ohos/hypium-dynamic' — change import to hypium-dynamic "
    "(match sibling *.test.ets)."
)


def token() -> str:
    t = os.environ.get("GITCODE_TOKEN", "")
    if not t and TOKEN_FILE.is_file():
        t = TOKEN_FILE.read_text().strip()
    if not t:
        sys.exit("缺少 token：~/.gitcode_token 或 GITCODE_TOKEN")
    return t


def api(owner: str, repo: str) -> str:
    return API.format(owner=owner, repo=repo)


def request(method: str, url: str, payload: dict | None = None) -> Any:
    cmd = [
        "curl", "-s", "-X", method, url,
        "-H", "Content-Type: application/json",
        "-H", f"private-token: {token()}",
    ]
    stdin_text = None
    if payload is not None:
        cmd.extend(["-d", "@-"])
        stdin_text = json.dumps(payload, ensure_ascii=False)
    r = subprocess.run(cmd, input=stdin_text, capture_output=True, text=True)
    try:
        return json.loads(r.stdout)
    except json.JSONDecodeError:
        sys.exit(f"[HTTP 异常] {method} {url}\n{r.stdout[:400]}")


def label_names(pr: dict) -> list[str]:
    labels = pr.get("labels") or []
    out: list[str] = []
    for item in labels:
        if isinstance(item, dict):
            out.append(str(item.get("name") or item.get("title") or ""))
        else:
            out.append(str(item))
    return [x for x in out if x]


def pr_state(owner: str, repo: str, pr_num: int) -> dict:
    pr = request("GET", f"{api(owner, repo)}/pulls/{pr_num}")
    if not isinstance(pr, dict) or pr.get("error_code"):
        sys.exit(f"GET pull failed: {pr}")
    state = str(pr.get("state") or "")
    merged = bool(pr.get("merged") or pr.get("merged_at"))
    labels = label_names(pr)
    fail = [x for x in labels if any(f in x for f in FAIL_LABELS)]
    okish = [x for x in labels if any(p in x for p in PASS_HINTS)]
    return {
        "number": pr_num,
        "state": state,
        "merged": merged,
        "title": pr.get("title") or "",
        "labels": labels,
        "fail_labels": fail,
        "pass_labels": okish,
        "html_url": pr.get("html_url") or pr.get("url") or "",
        "head_sha": (pr.get("head") or {}).get("sha")
        if isinstance(pr.get("head"), dict) else "",
    }


def list_comments(owner: str, repo: str, pr_num: int) -> list[dict]:
    url = f"{api(owner, repo)}/pulls/{pr_num}/comments?per_page=100"
    data = request("GET", url)
    if isinstance(data, list):
        return data
    if isinstance(data, dict) and isinstance(data.get("data"), list):
        return data["data"]
    return []


def extract_artifact_urls(comments: list[dict]) -> list[str]:
    urls: list[str] = []
    for c in comments:
        body = str(c.get("body") or c.get("content") or "")
        for m in ARTIFACT_HINT.finditer(body):
            u = m.group(0).rstrip(").,]")
            if u not in urls:
                urls.append(u)
    return urls


def prefer_xts_acts_logs(urls: list[str]) -> list[str]:
    scored: list[tuple[int, str]] = []
    for u in urls:
        score = 0
        low = u.lower()
        if "dayu200_xts_acts" in low:
            score += 100
        if "build.log" in low:
            score += 50
        if "failed" in low or "compile" in low:
            score += 10
        scored.append((score, u))
    scored.sort(key=lambda x: (-x[0], x[1]))
    return [u for _, u in scored]


def http_get_bytes(url: str, timeout: int = 120) -> bytes:
    req = Request(url, headers={"User-Agent": "pr-gate-follow/1.0"})
    with urlopen(req, timeout=timeout) as resp:
        return resp.read()


def resolve_log_url(url: str) -> str:
    """Artifacts sometimes return a 95-byte pointer to build.log.zip."""
    raw = http_get_bytes(url)
    if len(raw) < 512 and b"http" in raw:
        text = raw.decode("utf-8", "ignore").strip()
        if text.startswith("http"):
            return text
    return url


def save_and_extract(url: str, out_dir: Path) -> Path:
    out_dir.mkdir(parents=True, exist_ok=True)
    final = resolve_log_url(url)
    blob = http_get_bytes(final)
    dest = out_dir / "build_artifact.bin"
    dest.write_bytes(blob)
    extract_dir = out_dir / "extracted"
    extract_dir.mkdir(exist_ok=True)
    _try_extract(dest, extract_dir, blob)
    (out_dir / "source_url.txt").write_text(final + "\n", encoding="utf-8")
    return extract_dir


def _try_extract(dest: Path, extract_dir: Path, blob: bytes) -> None:
    if blob[:2] == b"PK":
        with zipfile.ZipFile(dest) as zf:
            zf.extractall(extract_dir)
        return
    if blob[:5] == b"ustar" or b"ustar" in blob[:300] or blob[:2] == b"di":
        try:
            with tarfile.open(dest) as tf:
                tf.extractall(extract_dir)
            return
        except tarfile.TarError:
            pass
    # plain text log
    (extract_dir / "build.log.txt").write_bytes(blob)


def collect_text_files(root: Path) -> list[Path]:
    files: list[Path] = []
    for p in root.rglob("*"):
        if not p.is_file():
            continue
        if p.stat().st_size > 80_000_000:
            continue
        files.append(p)
    return files


def analyze_dir(root: Path) -> dict:
    errors: list[str] = []
    hints: list[str] = []
    for p in collect_text_files(root):
        try:
            text = p.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        for m in ARKTS_ERR.finditer(text):
            line = m.group(0).strip()
            if line not in errors:
                errors.append(line[:500])
        if "@ohos/hypium" in text and "Failed to resolve OhmUrl" in text:
            if HYPUM_FIX not in hints:
                hints.append(HYPUM_FIX)
        if "G.FMT" in text or "CodeCheck" in text or "codecheck" in text.lower():
            for ln in text.splitlines():
                if any(k in ln for k in ("G.FMT", "G.EXT", "ERROR", "Fail")):
                    if ln.strip() not in errors and len(errors) < 80:
                        errors.append(ln.strip()[:400])
    return {"errors": errors[:40], "hints": hints, "files_scanned": len(list(root.rglob("*")))}


def cmd_status(args: argparse.Namespace) -> int:
    st = pr_state(args.owner, args.repo, args.pr)
    comments = list_comments(args.owner, args.repo, args.pr)
    arts = prefer_xts_acts_logs(extract_artifact_urls(comments))
    print(json.dumps({
        **st,
        "comment_count": len(comments),
        "artifact_urls": arts[:8],
        "needs_action": bool(st["fail_labels"]) and not st["merged"],
        "done": st["merged"] or st["state"] in ("closed", "merged"),
    }, ensure_ascii=False, indent=2))
    if st["merged"] or st["state"] in ("closed", "merged"):
        return 0
    return 2 if st["fail_labels"] else 1


def cmd_fetch_log(args: argparse.Namespace) -> int:
    out = Path(args.out)
    comments = list_comments(args.owner, args.repo, args.pr)
    urls = prefer_xts_acts_logs(extract_artifact_urls(comments))
    if args.url:
        urls = [args.url] + urls
    if not urls:
        print("NO_ARTIFACT_URL: 评论区未找到 cidownload Artifacts 链接")
        return 1
    target = urls[0]
    print(f"FETCH {target}")
    extracted = save_and_extract(target, out)
    print(f"EXTRACTED={extracted}")
    report = analyze_dir(extracted)
    (out / "analyze.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0 if report.get("errors") or report.get("hints") else 0


def cmd_analyze(args: argparse.Namespace) -> int:
    root = Path(args.path)
    report = analyze_dir(root)
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0


def cmd_rebuild(args: argparse.Namespace) -> int:
    delay = max(0, args.delay)
    if delay:
        print(f"WAIT {delay}s before start build")
        time.sleep(delay)
    d = request(
        "POST",
        f"{api(args.owner, args.repo)}/pulls/{args.pr}/comments",
        {"body": "start build"},
    )
    ok = isinstance(d, dict) and ("note_id" in d or d.get("id"))
    print(f"{'OK' if ok else 'FAIL'} start build on PR {args.pr}")
    return 0 if ok else 1


def cmd_watch(args: argparse.Namespace) -> int:
    """Poll until merged/closed. Exit codes for Agent/loop drivers.

    0 = merged/closed (stop)
    2 = fail labels present (Agent should fetch-log + fix + rebuild)
    1 = still open, no fail label this round (keep waiting)
    """
    rounds = 0
    while rounds < args.max_rounds:
        rounds += 1
        st = pr_state(args.owner, args.repo, args.pr)
        print(json.dumps({"round": rounds, **st}, ensure_ascii=False))
        if st["merged"] or st["state"] in ("closed", "merged"):
            print("DONE: PR merged or closed")
            return 0
        if st["fail_labels"]:
            if args.auto_fetch:
                out = Path(args.out) / f"pr{args.pr}_r{rounds}"
                ns = argparse.Namespace(
                    owner=args.owner, repo=args.repo, pr=args.pr,
                    out=str(out), url=None,
                )
                cmd_fetch_log(ns)
            print("ACTION_NEEDED: fail labels → fix code, push, rebuild")
            if args.once:
                return 2
            # Agent-driven fix expected; still sleep unless --stop-on-fail
            if args.stop_on_fail:
                return 2
        if args.once:
            return 1
        print(f"SLEEP {args.interval}s")
        time.sleep(args.interval)
    print("MAX_ROUNDS reached")
    return 3


def main() -> int:
    p = argparse.ArgumentParser(description="gitcode PR gate follow-up")
    p.add_argument("--owner", default=DEFAULT_OWNER)
    p.add_argument("--repo", default=DEFAULT_REPO)
    sub = p.add_subparsers(dest="cmd", required=True)

    ps = sub.add_parser("status", help="One-shot PR labels + artifact URLs")
    ps.add_argument("pr", type=int)
    ps.set_defaults(fn=cmd_status)

    pf = sub.add_parser("fetch-log", help="Download + extract CI build log")
    pf.add_argument("pr", type=int)
    pf.add_argument("--out", default="/tmp/pr_gate_follow")
    pf.add_argument("--url", default=None, help="Override Artifacts URL")
    pf.set_defaults(fn=cmd_fetch_log)

    pa = sub.add_parser("analyze", help="Analyze already extracted log dir")
    pa.add_argument("path")
    pa.set_defaults(fn=cmd_analyze)

    pb = sub.add_parser("rebuild", help="Comment start build (default delay 60)")
    pb.add_argument("pr", type=int)
    pb.add_argument("--delay", type=int, default=60)
    pb.set_defaults(fn=cmd_rebuild)

    pw = sub.add_parser("watch", help="Poll until merged (default 15min)")
    pw.add_argument("pr", type=int)
    pw.add_argument("--interval", type=int, default=900)
    pw.add_argument("--max-rounds", type=int, default=48)
    pw.add_argument("--once", action="store_true", help="Single poll then exit")
    pw.add_argument("--auto-fetch", action="store_true")
    pw.add_argument("--stop-on-fail", action="store_true",
                    help="Exit 2 immediately when fail labels appear")
    pw.add_argument("--out", default="/tmp/pr_gate_follow")
    pw.set_defaults(fn=cmd_watch)

    args = p.parse_args()
    return args.fn(args)


if __name__ == "__main__":
    sys.exit(main())
