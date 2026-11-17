#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""PR local verify with gate-identical HAPs (= download gate artifacts efficacy).

Workflow skill expects after local develop / before claiming done:
  1) Final code built → unsigned HAPs
  2) CI-identical sign (dist OpenHarmony.* + project openharmony_sx.p7b)
     for Test.json FULL kit set (Main/Test/Assist/Rely…)
  3) 设备 unittest FULL module (no -s class filter) on device
  4) gen-xdevice-report per module → merge → summary_top.png
  5) Agent pastes screenshot into PR description; on fail read logs & fix

Usage:
  python3 pr_local_verify.py --repo /path/xts_acts_0622 \\
      --projects ability/.../foo ability/.../bar \\
      --out /tmp/pr_verify_out

  python3 pr_local_verify.py --repo ... --from-diff origin/master \\
      --out /tmp/pr_verify_out

Does NOT push to PR branches. Does NOT modify already-submitted PR code.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
from datetime import datetime
from pathlib import Path

_HERE = Path(__file__).resolve().parent
SIGN_CI = _HERE / "sign_ci_identical.py"
OHXTSFLOW = _HERE.parent / "ohxtsdynamic" / "ohxtsflow.py"
MERGE = Path(
    "/root/aiSkill/.claude/skills/xts-develop-master-cycle/scripts/merge-xdevice-reports.py"
)
SHOT = Path(
    "/root/aiSkill/.claude/skills/xts-develop-master-cycle/scripts/screenshot-xdevice-summary.sh"
)
HAPBUILD = Path("/root/aiSkill/napi_generator/src/skills/ohhap/hapbuild.py")


def _run(cmd: list[str], check: bool = True) -> subprocess.CompletedProcess:
    print("RUN:", " ".join(cmd))
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.stdout:
        print(r.stdout.rstrip())
    if r.returncode and check:
        sys.stderr.write(r.stderr or "")
        raise SystemExit(f"FAIL rc={r.returncode}: {' '.join(cmd)}")
    return r


def _hdc() -> list[str]:
    return ["hdc"]


def _bundle_name(proj: Path) -> str:
    tj = proj / "Test.json"
    if tj.is_file():
        d = json.loads(tj.read_text(encoding="utf-8", errors="replace"))
        b = (d.get("driver") or {}).get("bundle-name") or ""
        if b:
            return b
    app = proj / "AppScope" / "app.json5"
    if app.is_file():
        m = re.search(r'bundleName"\s*:\s*"([^"]+)"', app.read_text(errors="replace"))
        if m:
            return m.group(1)
    raise SystemExit(f"FAIL: no bundleName for {proj}")


def _kit_names(proj: Path) -> list[str]:
    tj = proj / "Test.json"
    if not tj.is_file():
        return []
    d = json.loads(tj.read_text(encoding="utf-8", errors="replace"))
    names: list[str] = []
    for kit in d.get("kits", []):
        if kit.get("type") != "AppInstallKit":
            continue
        fn = kit.get("test-file-name", [])
        if isinstance(fn, str):
            fn = [fn]
        for n in fn:
            if n and n not in names:
                names.append(n)
    return names


def _module_name(proj: Path) -> str:
    tj = proj / "Test.json"
    if tj.is_file():
        d = json.loads(tj.read_text(encoding="utf-8", errors="replace"))
        m = (d.get("driver") or {}).get("module-name") or ""
        if m:
            return m
    return "entry_test"


def _suite_label(proj: Path) -> str:
    bg = proj / "BUILD.gn"
    if bg.is_file():
        m = re.search(
            r'ohos_(?:js_app|js_app_static|js_hap)_suite\s*\(\s*"([^"]+)"',
            bg.read_text(errors="replace"),
        )
        if m:
            return m.group(1)
    return proj.name


def projects_from_diff(repo: Path, base: str) -> list[Path]:
    r = subprocess.run(
        ["git", "-C", str(repo), "diff", "--name-only", f"{base}...HEAD"],
        capture_output=True, text=True, check=True,
    )
    found: set[Path] = set()
    for line in r.stdout.splitlines():
        p = repo / line.strip()
        # climb to dir with Test.json
        cur = p if p.is_dir() else p.parent
        for _ in range(8):
            if (cur / "Test.json").is_file() and (cur / "BUILD.gn").is_file():
                found.add(cur.resolve())
                break
            if cur == repo or cur.parent == cur:
                break
            cur = cur.parent
    return sorted(found)


def ensure_unsigned(proj: Path, build: bool) -> None:
    has = any(
        p for p in proj.rglob("*-unsigned.hap") if "oh_modules" not in p.parts
    )
    if has:
        return
    if not build:
        raise SystemExit(
            f"FAIL: no unsigned HAP under {proj}; build first or pass --build"
        )
    env = os.environ.copy()
    env.setdefault("HOS_CLT_PATH", "/root/aiSkill/command-line-tools")
    env.setdefault(
        "OHOS_SDK_PATH",
        "/root/aiSkill/command-line-tools/sdk/default/openharmony/normal",
    )
    env.pop("OHOS_USE_HVIGOR_STATIC", None)
    for cmd in (
        [sys.executable, str(HAPBUILD), "build", str(proj)],
        [sys.executable, str(HAPBUILD), "build-test", str(proj)],
    ):
        print("RUN:", " ".join(cmd))
        subprocess.run(cmd, env=env)


def ci_sign_project(proj: Path) -> None:
    _run([sys.executable, str(SIGN_CI), "--project", str(proj)])


def install_kit(proj: Path, staging: Path) -> None:
    """CI-sign kit owners via pack dry-run resolve + sign, copy to staging, bm install."""
    # Reuse pack script resolution by importing helpers
    sys.path.insert(0, str(_HERE))
    import pack_xdevice_assist_haps as pack  # noqa: WPS433

    names = _kit_names(proj)
    if not names:
        # single ohosTest hap
        names = [f"{_suite_label(proj)}.hap"]
    owners: list[Path] = []
    for name in names:
        owner = pack._resolve_owner(proj, name)
        if owner is None:
            raise SystemExit(f"FAIL: cannot resolve owner for {name} in {proj}")
        if owner not in owners:
            owners.append(owner)
    for owner in owners:
        ensure_unsigned(owner, build=False)
        ci_sign_project(owner)

    staging.mkdir(parents=True, exist_ok=True)
    mapping: dict[str, Path] = {}
    for name in names:
        hit = pack._find_signed_by_hap_name(proj, name, prefer=proj)
        if not hit:
            # fall back: any *-signed under owner
            owner = pack._resolve_owner(proj, name)
            cands = list((owner / "entry/build").rglob("*-signed.hap")) if owner else []
            cands = [c for c in cands if "oh_modules" not in c.parts]
            hit = cands[0] if cands else None
        if not hit:
            raise SystemExit(f"FAIL: missing signed for {name}")
        dest = staging / name
        shutil.copy2(hit, dest)
        mapping[name] = dest
        print(f"KIT {name} <- {hit}")

    bundle = _bundle_name(proj)
    # uninstall related bundles (primary + assistone style)
    for b in {bundle}:
        subprocess.run(
            _hdc() + ["shell", "bm", "uninstall", "-n", b],
            capture_output=True, text=True,
        )
    # install in Test.json order
    for name in names:
        hap = mapping[name]
        remote = f"/data/local/tmp/{name}"
        _run(_hdc() + ["file", "send", str(hap), remote])
        _run(_hdc() + ["shell", "bm", "install", "-p", remote])


def aa_test(proj: Path, log: Path) -> int:
    bundle = _bundle_name(proj)
    module = _module_name(proj)
    # FULL suite — never -s class filter for delivery verify
    cmd = _hdc() + [
        "shell",
        f"aa test -b {bundle} -m {module} "
        f"-s unittest OpenHarmonyTestRunner -s timeout 600000",
    ]
    print("RUN:", " ".join(cmd))
    with log.open("w", encoding="utf-8") as f:
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        if p.stdout is None:
            raise RuntimeError("unexpected None")
        for line in p.stdout:
            sys.stdout.write(line)
            f.write(line)
        return p.wait()


def parse_result(log: Path) -> tuple[int, int, int]:
    text = log.read_text(errors="replace")
    m = re.search(
        r"Tests run:\s*(\d+),\s*Failure:\s*(\d+),\s*Error:\s*(\d+),\s*Pass:\s*(\d+)",
        text,
    )
    if not m:
        return 0, 1, 0
    run, fail, err, _passed = map(int, m.groups())
    return run, fail, err


def gen_report(log: Path) -> Path | None:
    if not OHXTSFLOW.is_file():
        return None
    r = _run([sys.executable, str(OHXTSFLOW), "gen-xdevice-report", str(log)], check=False)
    for line in (r.stdout or "").splitlines():
        if line.startswith("REPORT_HTML="):
            return Path(line.split("=", 1)[1].strip())
    return None


def _collect_projects(repo: Path, projects: list[str], from_diff: str) -> list[Path]:
    found: list[Path] = []
    for p in projects:
        pp = Path(p)
        if not pp.is_absolute():
            pp = repo / p
        found.append(pp.resolve())
    if from_diff:
        found.extend(projects_from_diff(repo, from_diff))
    uniq: list[Path] = []
    seen: set[Path] = set()
    for p in found:
        if p in seen:
            continue
        if not (p / "Test.json").is_file():
            print(f"SKIP no Test.json: {p}")
            continue
        seen.add(p)
        uniq.append(p)
    return uniq


def _relabel_report_module(html: Path, label: str) -> None:
    js = html.parent / "static" / "data.js"
    if not js.is_file():
        return
    t = js.read_text(encoding="utf-8")
    m = re.search(r"window\.reportData\s*=\s*(\{.*\})\s*;?\s*$", t, re.S)
    if not m:
        return
    data = json.loads(m.group(1))
    for mod in data.get("modules") or []:
        mod["name"] = label
        mod["modulename"] = label
    js.write_text(
        "window.reportData = "
        + json.dumps(data, ensure_ascii=False, separators=(",", ":"))
        + ";",
        encoding="utf-8",
    )


def _verify_one(
    proj: Path, out: Path, do_build: bool, report_dirs: list[Path], failures: list[str]
) -> None:
    label = _suite_label(proj)
    print(f"\n======== {label} ========")
    staging = out / "haps" / label
    try:
        ensure_unsigned(proj, build=do_build)
        install_kit(proj, staging)
    except SystemExit as e:
        failures.append(f"{label}: install/sign: {e}")
        return
    log = out / f"{label}.log"
    rc = aa_test(proj, log)
    run, fail, err = parse_result(log)
    print(f"RESULT {label}: run={run} fail={fail} err={err} device_rc={rc}")
    if fail or err or rc != 0 or run == 0:
        failures.append(f"{label}: fail={fail} err={err} run={run} (see {log})")
    html = gen_report(log)
    if html and html.is_file():
        _relabel_report_module(html, label)
        report_dirs.append(html.parent)


def _merge_and_shot(out: Path, report_dirs: list[Path], skip_shot: bool) -> Path:
    merged = out / "merged"
    if merged.exists():
        shutil.rmtree(merged)
    if MERGE.is_file():
        cmd = [
            sys.executable, str(MERGE), "--out", str(merged),
            "--name", f"local-verify-{datetime.now().strftime('%Y%m%d_%H%M%S')}",
        ] + [str(d) for d in report_dirs]
        _run(cmd, check=False)
    else:
        shutil.copytree(report_dirs[0], merged)
    shot = merged / "summary_top.png"
    html = merged / "summary_report.html"
    if not skip_shot and SHOT.is_file() and html.is_file():
        _run(["bash", str(SHOT), str(html)], check=False)
    return merged


def main() -> int:
    ap = argparse.ArgumentParser(description="PR local verify (CI-identical HAPs)")
    ap.add_argument("--repo", required=True)
    ap.add_argument("--projects", nargs="*", default=[])
    ap.add_argument("--from-diff", default="")
    ap.add_argument("--out", required=True)
    ap.add_argument("--build", action="store_true")
    ap.add_argument("--skip-shot", action="store_true")
    args = ap.parse_args()
    repo = Path(args.repo).resolve()
    out = Path(args.out).resolve()
    out.mkdir(parents=True, exist_ok=True)
    uniq = _collect_projects(repo, args.projects, args.from_diff)
    if not uniq:
        raise SystemExit("FAIL: no projects to verify")
    print(f"PROJECTS ({len(uniq)}):")
    for p in uniq:
        print(" ", p)
    report_dirs: list[Path] = []
    failures: list[str] = []
    for proj in uniq:
        _verify_one(proj, out, bool(args.build), report_dirs, failures)
    if not report_dirs:
        print("FAIL: no reports generated", file=sys.stderr)
        return 2
    merged = _merge_and_shot(out, report_dirs, args.skip_shot)
    print("\n======== DELIVERABLES ========")
    print(f"REPORT_HTML={merged / 'summary_report.html'}")
    shot = merged / "summary_top.png"
    print(f"SCREENSHOT_PNG={shot if shot.is_file() else 'MISSING'}")
    if failures:
        print("\n======== FAILURES ========")
        for f in failures:
            print(" ", f)
        return 1
    print("\nALL GREEN — paste SCREENSHOT_PNG into PR description.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
