#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Sign HAP exactly like OpenHarmony XTS gate (anti-9568332).

Gate (build/ohos_var.gni + build/scripts/app_sign.py):
  keystore : developtools/hapsigner/dist/OpenHarmony.p12
  appCert  : developtools/hapsigner/dist/OpenHarmonyApplication.pem
  keyAlias : OpenHarmony Application Release
  profile  : <project>/signature/openharmony_sx.p7b   (NOT regenerated)
  pwd      : OH release keystore default

NEVER generate-keypair / hapbuild autosign / /tmp/xts_sign for delivery verify.
Those create a different app cert → mix with gate HAPs → 9568332.

Usage:
  python3 sign_ci_identical.py <unsigned.hap> <project_root> [-o signed.hap]
  python3 sign_ci_identical.py --project <proj>   # all *-unsigned.hap under proj
"""
from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

DIST_CANDIDATES = (
    Path("/root/master/developtools/hapsigner/dist"),
    Path("/root/aiSkill/master/developtools/hapsigner/dist"),
)
JAR_FALLBACKS = (
    Path("/root/aiSkill/command-line-tools/sdk/default/openharmony/normal/26/toolchains/lib/hap-sign-tool.jar"),
    Path("/root/aiSkill/command-line-tools/sdk/default/openharmony/normal/26.0.1/toolchains/lib/hap-sign-tool.jar"),
)
KEY_ALIAS = "OpenHarmony Application Release"
PWD = "".join(chr(c) for c in (49, 50, 51, 52, 53, 54))


def resolve_dist() -> Path:
    for d in DIST_CANDIDATES:
        if (d / "OpenHarmony.p12").is_file() and (d / "OpenHarmonyApplication.pem").is_file():
            return d
    raise SystemExit(
        "FAIL: developtools/hapsigner/dist not found "
        "(need OpenHarmony.p12 + OpenHarmonyApplication.pem)"
    )


def resolve_jar(dist: Path) -> Path:
    j = dist / "hap-sign-tool.jar"
    if j.is_file():
        return j
    for f in JAR_FALLBACKS:
        if f.is_file():
            return f
    raise SystemExit("FAIL: hap-sign-tool.jar not found")


def resolve_p7b(proj: Path) -> Path:
    p = proj / "signature" / "openharmony_sx.p7b"
    if p.is_file():
        return p
    hits = list(proj.rglob("openharmony_sx.p7b"))
    hits = [h for h in hits if "oh_modules" not in h.parts and "build" not in h.parts]
    if hits:
        return hits[0]
    raise SystemExit(f"FAIL: no signature/openharmony_sx.p7b under {proj}")


def sign_one(unsigned: Path, proj: Path, out: Path | None = None) -> Path:
    unsigned = unsigned.resolve()
    if not unsigned.is_file():
        raise SystemExit(f"FAIL: unsigned not found: {unsigned}")
    dist = resolve_dist()
    jar = resolve_jar(dist)
    p7b = resolve_p7b(proj.resolve())
    signed = out.resolve() if out else unsigned.with_name(
        unsigned.name.replace("unsigned", "signed")
    )
    if signed == unsigned:
        signed = unsigned.with_name(unsigned.stem + "-ci-signed.hap")
    signed.parent.mkdir(parents=True, exist_ok=True)
    if signed.exists():
        signed.unlink()
    cmd = [
        "java", "-jar", str(jar), "sign-app",
        "-mode", "localSign",
        "-signAlg", "SHA256withECDSA",
        "-keyAlias", KEY_ALIAS,
        "-inFile", str(unsigned),
        "-outFile", str(signed),
        "-profileFile", str(p7b),
        "-keystoreFile", str(dist / "OpenHarmony.p12"),
        "-keystorePwd", PWD,
        "-keyPwd", PWD,
        "-appCertFile", str(dist / "OpenHarmonyApplication.pem"),
        "-profileSigned", "1",
        "-inForm", "zip",
    ]
    print("CI-SIGN:", unsigned.name, "profile=", p7b)
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        sys.stderr.write(r.stdout + "\n" + r.stderr + "\n")
        raise SystemExit(f"FAIL: sign-app rc={r.returncode} for {unsigned}")
    if "sign-app success" not in (r.stdout + r.stderr) and not signed.is_file():
        sys.stderr.write(r.stdout + "\n" + r.stderr + "\n")
        raise SystemExit(f"FAIL: no signed output for {unsigned}")
    print("SIGNED", signed)
    return signed


def sign_project(proj: Path) -> list[Path]:
    proj = proj.resolve()
    unsigned = [
        p for p in proj.rglob("*-unsigned.hap")
        if "oh_modules" not in p.parts
    ]
    if not unsigned:
        raise SystemExit(f"FAIL: no *-unsigned.hap under {proj}; build first")
    return [sign_one(u, proj) for u in unsigned]


def main() -> int:
    ap = argparse.ArgumentParser(description="Gate-identical HAP sign (dist + project p7b)")
    ap.add_argument("unsigned", nargs="?", help="unsigned.hap path")
    ap.add_argument("project", nargs="?", help="project root (has signature/openharmony_sx.p7b)")
    ap.add_argument("-o", "--out", default="", help="signed output path")
    ap.add_argument("--project", dest="project_only", default="", help="sign all unsigned under project")
    args = ap.parse_args()
    if args.project_only:
        for s in sign_project(Path(args.project_only)):
            print(s)
        return 0
    if not args.unsigned or not args.project:
        ap.print_help()
        return 2
    sign_one(Path(args.unsigned), Path(args.project), Path(args.out) if args.out else None)
    return 0


if __name__ == "__main__":
    sys.exit(main())
