#!/usr/bin/env python3
"""PR delivery tracker: gate poll, logs, smoke rebuild, static HAP extract.

Default interval: 900s (15 min). Writes a human-readable track.log until merge.

Exit codes for track --once / Agent drivers:
  0 = merged/closed
  1 = in progress (wait)
  2 = compile/CodeCheck fail (fetch log; Agent must fix)
  3 = smoke-only fail (auto rebuild attempted if --auto-rebuild)
  4 = gate green / waiting_for_review (static haps ready if fetched)
  5 = max rounds
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import tarfile
import time
import urllib.error
import urllib.request
import zipfile
from datetime import datetime
from pathlib import Path
from typing import Any

DEFAULT_OWNER = "openharmony"
DEFAULT_REPO = "xts_acts"
TOKEN_FILES = [
    Path.home() / ".gitcode_token",
    Path("/root/aiSkill/napi_generator/src/skills/gitcode-pr/.gitcode_token"),
]
API_BASE = "https://gitcode.com/api/v5"
FAIL_COMPILE = ("编译失败", "codecheck失败", "CodeCheck失败", "静态检查失败")
FAIL_SMOKE = ("冒烟测试失败",)
PASS_HINTS = ("编译成功", "静态检查成功", "冒烟测试成功", "waiting_for_review")
STATIC_VERSION_RE = re.compile(
    r"https://cidownload\.openharmony\.cn/Artifacts/dayu200_xts_static/"
    r"[^/\s\"'<>]+/version/[^/\s\"'<>]+\.tar\.gz",
    re.I,
)
ARTIFACT_RE = re.compile(
    r"https://cidownload\.openharmony\.cn/Artifacts/[^\s\"'<>]+", re.I
)
TESTCASES_MARK = "suites/acts/acts/testcases"


def _now() -> str:
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def load_token() -> str:
    env = os.environ.get("GITCODE_TOKEN", "").strip()
    if env:
        return env
    for p in TOKEN_FILES:
        if p.is_file():
            t = p.read_text(encoding="utf-8").strip()
            if t:
                return t
    raise SystemExit("GITCODE_TOKEN missing (~/.gitcode_token)")


def api(owner: str, repo: str) -> str:
    return f"{API_BASE}/repos/{owner}/{repo}"


def request(method: str, url: str, body: dict | None = None) -> Any:
    data = None
    headers = {
        "Authorization": f"Bearer {load_token()}",
        "Accept": "application/json",
        "User-Agent": "pr-delivery-track/1.0",
    }
    if body is not None:
        data = json.dumps(body).encode("utf-8")
        headers["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            raw = resp.read().decode("utf-8", errors="replace")
            return json.loads(raw) if raw.strip() else {}
    except urllib.error.HTTPError as e:
        err = e.read().decode("utf-8", errors="replace")
        raise SystemExit(f"HTTP {e.code} {url}: {err[:500]}") from e


def list_comments(owner: str, repo: str, pr: int) -> list[dict]:
    out: list[dict] = []
    page = 1
    while page <= 20:
        url = f"{api(owner, repo)}/pulls/{pr}/comments?page={page}&per_page=100"
        chunk = request("GET", url)
        if not isinstance(chunk, list) or not chunk:
            break
        out.extend(chunk)
        if len(chunk) < 100:
            break
        page += 1
    return out


def pr_state(owner: str, repo: str, pr: int) -> dict:
    d = request("GET", f"{api(owner, repo)}/pulls/{pr}")
    labels = [x.get("name", "") for x in (d.get("labels") or []) if isinstance(x, dict)]
    return {
        "number": d.get("number"),
        "state": d.get("state"),
        "merged": bool(d.get("merged")),
        "title": d.get("title"),
        "html_url": d.get("html_url"),
        "labels": labels,
        "updated_at": d.get("updated_at"),
    }


def classify_labels(labels: list[str]) -> dict:
    compile_fail = [x for x in labels if any(k in x for k in FAIL_COMPILE)]
    smoke_fail = [x for x in labels if any(k in x for k in FAIL_SMOKE)]
    pass_like = [x for x in labels if any(k in x for k in PASS_HINTS)]
    return {
        "compile_fail": compile_fail,
        "smoke_fail": smoke_fail,
        "pass_like": pass_like,
        "needs_fix": bool(compile_fail),
        "needs_rebuild_only": bool(smoke_fail) and not compile_fail,
        "gate_greenish": bool(pass_like) and not compile_fail and not smoke_fail,
    }


def extract_urls(comments: list[dict]) -> list[str]:
    urls: list[str] = []
    for c in comments:
        body = c.get("body") or ""
        for m in ARTIFACT_RE.finditer(body):
            u = m.group(0).rstrip(").,]'\"")
            if u not in urls:
                urls.append(u)
    return urls


def prefer_static_logs(urls: list[str]) -> list[str]:
    def score(u: str) -> tuple:
        u_l = u.lower()
        s = 0
        if "dayu200_xts_static" in u_l:
            s += 100
        elif "dayu200_xts_acts" in u_l:
            s += 80
        if "/log/build.log" in u_l:
            s += 50
        if "codecheck" in u_l:
            s += 40
        return (-s, u)

    return sorted(urls, key=score)


def find_static_version_url(comments: list[dict]) -> str | None:
    found: list[str] = []
    for c in comments:
        body = c.get("body") or ""
        for m in STATIC_VERSION_RE.finditer(body):
            u = m.group(0).rstrip(").,]'\"")
            if u not in found:
                found.append(u)
    return found[-1] if found else None


def log_line(log_path: Path | None, msg: str) -> None:
    line = f"[{_now()}] {msg}"
    print(line)
    if log_path is None:
        return
    log_path.parent.mkdir(parents=True, exist_ok=True)
    with log_path.open("a", encoding="utf-8") as f:
        f.write(line + "\n")


def download(url: str, dest: Path) -> Path:
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": "pr-delivery-track/1.0"})
    with urllib.request.urlopen(req, timeout=600) as resp, dest.open("wb") as out:
        while True:
            chunk = resp.read(1024 * 1024)
            if not chunk:
                break
            out.write(chunk)
    return dest


def save_and_extract_log(url: str, out_dir: Path) -> Path:
    out_dir.mkdir(parents=True, exist_ok=True)
    blob_path = out_dir / "artifact.bin"
    download(url, blob_path)
    extract_dir = out_dir / "extracted"
    extract_dir.mkdir(parents=True, exist_ok=True)
    blob = blob_path.read_bytes()
    if zipfile.is_zipfile(blob_path):
        with zipfile.ZipFile(blob_path) as zf:
            zf.extractall(extract_dir)
        return extract_dir
    try:
        with tarfile.open(blob_path, "r:*") as tf:
            tf.extractall(extract_dir)
        return extract_dir
    except tarfile.TarError:
        pass
    (extract_dir / "build.log.txt").write_bytes(blob)
    return extract_dir


def analyze_dir(root: Path) -> dict:
    errors: list[str] = []
    hints: list[str] = []
    scanned = 0
    for p in root.rglob("*"):
        if not p.is_file() or p.stat().st_size > 80_000_000:
            continue
        scanned += 1
        try:
            text = p.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        for ln in text.splitlines():
            if any(k in ln for k in ("Error:", "error:", "G.FMT", "G.EXT", "ESE")):
                s = ln.strip()[:400]
                if s and s not in errors and len(errors) < 40:
                    errors.append(s)
        if "Failed to resolve OhmUrl" in text and "@ohos/hypium" in text:
            hints.append("prefer @ohos/hypium-dynamic / project hypium alias")
    return {"errors": errors, "hints": hints, "files_scanned": scanned}


def comment_start_build(owner: str, repo: str, pr: int, delay: int) -> bool:
    if delay > 0:
        time.sleep(delay)
    d = request(
        "POST",
        f"{api(owner, repo)}/pulls/{pr}/comments",
        {"body": "start build"},
    )
    return isinstance(d, dict) and ("note_id" in d or d.get("id"))


def extract_testcases_from_tar(tar_path: Path, dest: Path) -> int:
    dest.mkdir(parents=True, exist_ok=True)
    count = 0
    with tarfile.open(tar_path, "r:*") as tf:
        for m in tf.getmembers():
            if TESTCASES_MARK not in m.name.replace("\\", "/"):
                continue
            if not m.isfile():
                continue
            rel = m.name.replace("\\", "/")
            idx = rel.find(TESTCASES_MARK)
            out_name = rel[idx + len(TESTCASES_MARK) :].lstrip("/")
            if not out_name:
                continue
            target = dest / out_name
            target.parent.mkdir(parents=True, exist_ok=True)
            src = tf.extractfile(m)
            if src is None:
                continue
            with target.open("wb") as out, src:
                while True:
                    chunk = src.read(1024 * 1024)
                    if not chunk:
                        break
                    out.write(chunk)
            count += 1
    return count


def write_round_snapshot(log_path: Path, round_n: int, st: dict, cls: dict) -> None:
    log_line(log_path, f"===== ROUND {round_n} =====")
    log_line(log_path, f"PR #{st['number']} state={st['state']} merged={st['merged']}")
    log_line(log_path, f"url={st.get('html_url')}")
    log_line(log_path, f"labels={','.join(st.get('labels') or []) or '(none)'}")
    log_line(
        log_path,
        "class="
        f"compile_fail={bool(cls['compile_fail'])} "
        f"smoke_only={cls['needs_rebuild_only']} "
        f"greenish={cls['gate_greenish']}",
    )


def handle_compile_fail(
    args: argparse.Namespace, log_path: Path, round_n: int
) -> int:
    comments = list_comments(args.owner, args.repo, args.pr)
    urls = prefer_static_logs(extract_urls(comments))
    if not urls:
        log_line(log_path, "ACTION: compile/CodeCheck fail but no artifact URL")
        return 2
    out = Path(args.out) / f"logs_r{round_n}"
    log_line(log_path, f"ACTION: fetch log {urls[0]}")
    extracted = save_and_extract_log(urls[0], out)
    report = analyze_dir(extracted)
    (out / "analyze.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    log_line(log_path, f"ANALYZE errors={len(report['errors'])} out={out}")
    for e in report["errors"][:12]:
        log_line(log_path, f"  ERR: {e}")
    log_line(log_path, "NEXT: Agent fix code → commit -sm → push → rebuild")
    return 2


def handle_smoke_fail(args: argparse.Namespace, log_path: Path) -> int:
    log_line(log_path, "ACTION: smoke-only fail → start build")
    if not args.auto_rebuild:
        log_line(log_path, "NEXT: run rebuild manually (auto-rebuild off)")
        return 3
    ok = comment_start_build(args.owner, args.repo, args.pr, args.rebuild_delay)
    log_line(log_path, f"rebuild={'OK' if ok else 'FAIL'}")
    return 3


def handle_green(
    args: argparse.Namespace, log_path: Path, comments: list[dict]
) -> int:
    log_line(log_path, "STATUS: gate green / waiting_for_review")
    if not args.fetch_static_on_green:
        log_line(log_path, "HINT: fetch-static-haps when board test needed")
        return 4
    ver = find_static_version_url(comments)
    if not ver:
        log_line(log_path, "WARN: no dayu200_xts_static version URL yet")
        return 4
    haps_out = Path(args.out) / "static_testcases"
    log_line(log_path, f"ACTION: fetch static version {ver}")
    n = fetch_static_version(ver, haps_out, log_path)
    log_line(log_path, f"EXTRACTED testcases files={n} dir={haps_out / 'testcases'}")
    log_line(log_path, "NEXT: bm install + aa test → describe-report screenshot")
    return 4


def fetch_static_version(url: str, out_dir: Path, log_path: Path | None) -> int:
    out_dir.mkdir(parents=True, exist_ok=True)
    tar_path = out_dir / "dayu200_xts_static_version.tar.gz"
    if not tar_path.exists() or tar_path.stat().st_size < 1000:
        log_line(log_path, f"DOWNLOAD {url}")
        download(url, tar_path)
    else:
        log_line(log_path, f"REUSE {tar_path} ({tar_path.stat().st_size} bytes)")
    dest = out_dir / "testcases"
    n = extract_testcases_from_tar(tar_path, dest)
    meta = {
        "url": url,
        "tar": str(tar_path),
        "testcases_dir": str(dest),
        "file_count": n,
        "time": _now(),
    }
    (out_dir / "fetch_meta.json").write_text(
        json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    return n


def cmd_status(args: argparse.Namespace) -> int:
    st = pr_state(args.owner, args.repo, args.pr)
    cls = classify_labels(st.get("labels") or [])
    comments = list_comments(args.owner, args.repo, args.pr)
    ver = find_static_version_url(comments)
    payload = {
        **st,
        **cls,
        "static_version_url": ver,
        "artifact_urls": prefer_static_logs(extract_urls(comments))[:8],
    }
    print(json.dumps(payload, ensure_ascii=False, indent=2))
    if st["merged"] or st["state"] in ("closed", "merged"):
        return 0
    if cls["needs_fix"]:
        return 2
    if cls["needs_rebuild_only"]:
        return 3
    if cls["gate_greenish"]:
        return 4
    return 1


def cmd_fetch_static(args: argparse.Namespace) -> int:
    log_path = Path(args.log) if args.log else None
    comments = list_comments(args.owner, args.repo, args.pr)
    url = args.url or find_static_version_url(comments)
    if not url:
        print("NO_STATIC_VERSION_URL")
        return 1
    out = Path(args.out)
    n = fetch_static_version(url, out, log_path)
    print(json.dumps({"url": url, "files": n, "out": str(out / "testcases")}))
    return 0 if n > 0 else 2


def cmd_rebuild(args: argparse.Namespace) -> int:
    ok = comment_start_build(args.owner, args.repo, args.pr, args.delay)
    print(f"{'OK' if ok else 'FAIL'} start build PR {args.pr}")
    return 0 if ok else 1


def cmd_track(args: argparse.Namespace) -> int:
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    log_path = Path(args.log) if args.log else out / "track.log"
    log_line(log_path, f"START track PR#{args.pr} interval={args.interval}s")
    log_line(log_path, f"out={out}")
    rounds = 0
    while rounds < args.max_rounds:
        rounds += 1
        st = pr_state(args.owner, args.repo, args.pr)
        cls = classify_labels(st.get("labels") or [])
        write_round_snapshot(log_path, rounds, st, cls)
        if st["merged"] or st["state"] in ("closed", "merged"):
            log_line(log_path, "DONE: merged or closed — stop")
            return 0
        if cls["needs_fix"]:
            code = handle_compile_fail(args, log_path, rounds)
            if args.once or args.stop_on_fail:
                return code
        elif cls["needs_rebuild_only"]:
            code = handle_smoke_fail(args, log_path)
            if args.once:
                return code
        elif cls["gate_greenish"]:
            comments = list_comments(args.owner, args.repo, args.pr)
            code = handle_green(args, log_path, comments)
            if args.once or args.stop_on_green:
                return code
            log_line(log_path, "WAIT: green but not merged — keep polling")
        else:
            log_line(log_path, "WAIT: build in progress / no terminal labels")
            if args.once:
                return 1
        log_line(log_path, f"SLEEP {args.interval}s")
        time.sleep(args.interval)
    log_line(log_path, "MAX_ROUNDS reached")
    return 5


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="PR delivery gate tracker")
    p.add_argument("--owner", default=DEFAULT_OWNER)
    p.add_argument("--repo", default=DEFAULT_REPO)
    sub = p.add_subparsers(dest="cmd", required=True)

    ps = sub.add_parser("status", help="JSON status + classify")
    ps.add_argument("pr", type=int)
    ps.set_defaults(fn=cmd_status)

    pt = sub.add_parser("track", help="Poll until merge; write track.log")
    pt.add_argument("pr", type=int)
    pt.add_argument("--interval", type=int, default=900)
    pt.add_argument("--max-rounds", type=int, default=96)
    pt.add_argument("--once", action="store_true")
    pt.add_argument("--stop-on-fail", action="store_true")
    pt.add_argument("--stop-on-green", action="store_true")
    pt.add_argument("--auto-rebuild", action="store_true", default=True)
    pt.add_argument("--no-auto-rebuild", action="store_false", dest="auto_rebuild")
    pt.add_argument("--rebuild-delay", type=int, default=60)
    pt.add_argument("--fetch-static-on-green", action="store_true")
    pt.add_argument("--out", default="/tmp/pr_delivery_track")
    pt.add_argument("--log", default=None)
    pt.set_defaults(fn=cmd_track)

    pf = sub.add_parser("fetch-static-haps", help="Download static version→testcases")
    pf.add_argument("pr", type=int)
    pf.add_argument("--out", default="/tmp/pr_static_haps")
    pf.add_argument("--url", default=None)
    pf.add_argument("--log", default=None)
    pf.set_defaults(fn=cmd_fetch_static)

    pb = sub.add_parser("rebuild", help="Comment start build")
    pb.add_argument("pr", type=int)
    pb.add_argument("--delay", type=int, default=60)
    pb.set_defaults(fn=cmd_rebuild)

    return p


def main() -> int:
    args = build_parser().parse_args()
    return int(args.fn(args))


if __name__ == "__main__":
    sys.exit(main())
