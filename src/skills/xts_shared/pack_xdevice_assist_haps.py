#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Pack AppInstallKit HAPs with **gate-identical** signing (anti-9568332).

Gate signs with developtools/hapsigner/dist + each project's
signature/openharmony_sx.p7b (see build/ohos_var.gni + app_sign.py).

Bug (recurring): hapbuild autosign / /tmp/xts_sign / generate-keypair create a
*different* app cert → Assist cannot mix with gate SyncTest → 9568332.

Fix: --resign uses sign_ci_identical.py (dist materials + project p7b) for
EVERY kit owner. Local verify then has the same signing efficacy as
downloading gate artifacts.

Usage:
  python3 pack_xdevice_assist_haps.py <proj_with_Test.json> --resign --out /tmp/kit.zip
  python3 pack_xdevice_assist_haps.py <proj> --dry-run

Hard rules:
  - NEVER ship Assist-only zip to mix with gate SyncTest of the same bundle.
  - NEVER regenerate keypair for delivery verify.
  - Zip must list full Test.json AppInstallKit set.
"""
from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

_HERE = Path(__file__).resolve().parent
SIGN_CI = _HERE / "sign_ci_identical.py"

README = """xdevice AppInstallKit pack — GATE-IDENTICAL signing

Signed like OH XTS gate:
  keystore/appCert: developtools/hapsigner/dist/OpenHarmony.*
  keyAlias: OpenHarmony Application Release
  profile: each owner's signature/openharmony_sx.p7b (NOT regenerated)

May mix with gate-built HAPs of the same cert chain.
Gate artifacts often omit unchanged Assist HAPs — use this zip (or Assist-only
subset) with the gate SyncTest/Main HAP: same-dir bm install -p.
Replace ALL kits listed below in testcases together.
Do NOT push this zip into the git repo.
NEVER mix hapbuild-autosign Assist with gate SyncTest (9568332).
"""


def _load_test_json(proj: Path) -> dict:
    p = proj / "Test.json"
    if not p.is_file():
        raise SystemExit(f"FAIL: no Test.json under {proj}")
    return json.loads(p.read_text(encoding="utf-8", errors="replace"))


def _kit_hap_names(tj: dict) -> list[str]:
    names: list[str] = []
    for kit in tj.get("kits", []):
        if kit.get("type") != "AppInstallKit":
            continue
        fn = kit.get("test-file-name", [])
        if isinstance(fn, str):
            fn = [fn]
        for n in fn:
            if n and n not in names:
                names.append(n)
    return names


def _bundle_name(proj: Path, tj: dict) -> str:
    b = (tj.get("driver") or {}).get("bundle-name") or ""
    if b:
        return b
    app = proj / "AppScope" / "app.json5"
    if app.is_file():
        m = re.search(r'bundleName"\s*:\s*"([^"]+)"', app.read_text(errors="replace"))
        if m:
            return m.group(1)
    return proj.name


def _app_bundle(proj: Path) -> str:
    app = proj / "AppScope" / "app.json5"
    if app.is_file():
        m = re.search(r'bundleName"\s*:\s*"([^"]+)"', app.read_text(errors="replace"))
        if m:
            return m.group(1)
    return ""


def _collect_request_permissions(proj: Path) -> list[str]:
    perms: list[str] = []
    for f in proj.rglob("module.json5"):
        if any(s in f.parts for s in ("build", "oh_modules", "node_modules")):
            continue
        t = f.read_text(errors="replace")
        for m in re.finditer(r'"name"\s*:\s*"(ohos\.permission\.[^"]+)"', t):
            if m.group(1) not in perms:
                perms.append(m.group(1))
    return perms


def _own_suite_stems(proj: Path) -> set[str]:
    bg = proj / "BUILD.gn"
    if not bg.is_file():
        return set()
    return set(re.findall(r'hap_name\s*=\s*"([^"]+)"', bg.read_text(errors="replace")))


def _pick_signed_role(proj: Path, role: str) -> Path | None:
    if role == "test":
        cands = list((proj / "entry/build/default/outputs/ohosTest").glob("*-signed.hap"))
        return cands[0] if cands else None
    if role == "main":
        p = proj / "entry/build/default/outputs/default/entry-default-signed.hap"
        if p.is_file():
            return p
        # feature-only assist modules
        cands = list((proj / "entry/build/default/outputs/default").glob("*-signed.hap"))
        return cands[0] if cands else None
    if role == "form":
        p = proj / "entry/build/default/outputs/default/FormModule-signed.hap"
        if p.is_file():
            return p
        for q in proj.rglob("FormModule-signed.hap"):
            if "oh_modules" not in q.parts:
                return q
    return None


def _pick_unsigned_role(proj: Path, role: str) -> Path | None:
    if role == "test":
        cands = list((proj / "entry/build/default/outputs/ohosTest").glob("*-unsigned.hap"))
        return cands[0] if cands else None
    if role == "main":
        p = proj / "entry/build/default/outputs/default/entry-default-unsigned.hap"
        if p.is_file():
            return p
        cands = list((proj / "entry/build/default/outputs/default").glob("*-unsigned.hap"))
        return cands[0] if cands else None
    if role == "form":
        for q in proj.rglob("FormModule-unsigned.hap"):
            if "oh_modules" not in q.parts:
                return q
    return None


def _role_for_stem(stem: str, owner_gn: str) -> str:
    """Map kit hap_name stem → signed artifact role (main/test/form).

    Do not treat whole-file ``test_hap = true`` as applying to every stem:
    shared BUILD.gn lists both Main and *Test targets (CAPI SystemMaterial
    实锤：ActsAceCArkUI26SystemMaterial 被误判成 ohosTest → 缺 so).
    """
    low = stem.lower()
    if "formmodule" in low or stem == "FormModule":
        return "form"
    if low.endswith("test") and "main" not in low:
        return "test"
    if "assist" in low and "test" not in low:
        return "main"
    if "rely" in low or "helper" in low or "demo" in low:
        return "main"
    if "main" in low or "ohos_app_assist_suite" in owner_gn:
        return "main"
    return "main"


def _find_signed_in_proj(proj: Path, hap_name: str) -> Path | None:
    stem = hap_name.removesuffix(".hap")
    owned = _own_suite_stems(proj)
    bg = (proj / "BUILD.gn").read_text(errors="replace") if (proj / "BUILD.gn").is_file() else ""
    if stem == "FormModule" or "formmodule" in stem.lower():
        if "FormModule" in bg or stem in owned:
            return _pick_signed_role(proj, "form")
        return None
    if stem not in owned and hap_name not in owned:
        return None
    return _pick_signed_role(proj, _role_for_stem(stem, bg))


def _search_roots(proj: Path) -> list[Path]:
    roots: list[Path] = []
    if proj.parent.is_dir():
        roots.append(proj.parent)
    # uiabilitycontext / ability_runtime often hold Rely next to Test
    if proj.parent.parent.is_dir():
        roots.append(proj.parent.parent)
    roots.append(proj)
    return roots


def _gn_projects_for_hap(search_roots: list[Path], stem: str) -> list[Path]:
    hits: list[Path] = []
    seen: set[Path] = set()
    for root in search_roots:
        if not root.is_dir():
            continue
        for bg in root.rglob("BUILD.gn"):
            if any(s in bg.parts for s in ("out", "oh_modules", ".git", "node_modules", "build")):
                continue
            try:
                text = bg.read_text(errors="replace")
            except OSError:
                continue
            if f'hap_name = "{stem}"' not in text and f'hap_name = "{stem}.hap"' not in text:
                continue
            owner = bg.parent.resolve()
            if owner not in seen:
                seen.add(owner)
                hits.append(bg.parent)
    return hits


def _signed_from_owner(owner: Path, stem: str) -> Path | None:
    bg = (owner / "BUILD.gn").read_text(errors="replace") if (owner / "BUILD.gn").is_file() else ""
    hit = _find_signed_in_proj(owner, stem + ".hap")
    if hit:
        return hit
    role = _role_for_stem(stem, bg)
    hit = _pick_signed_role(owner, role)
    if hit:
        return hit
    return _pick_signed_role(owner, "main") or _pick_signed_role(owner, "test")


def _unsigned_from_owner(owner: Path, stem: str) -> Path | None:
    bg = (owner / "BUILD.gn").read_text(errors="replace") if (owner / "BUILD.gn").is_file() else ""
    role = _role_for_stem(stem, bg)
    hit = _pick_unsigned_role(owner, role)
    if hit:
        return hit
    return _pick_unsigned_role(owner, "main") or _pick_unsigned_role(owner, "test")


def _resolve_owner(prefer: Path, hap_name: str) -> Path | None:
    """Owner = BUILD.gn that declares hap_name=… — never infer from leftover unsigned."""
    stem = hap_name.removesuffix(".hap")
    owned = _own_suite_stems(prefer)
    if stem in owned or hap_name in owned:
        return prefer.resolve()
    # FormModule may only appear in hap_list
    bg = (prefer / "BUILD.gn").read_text(errors="replace") if (prefer / "BUILD.gn").is_file() else ""
    if (stem == "FormModule" or "formmodule" in stem.lower()) and "FormModule" in bg:
        return prefer.resolve()
    owners = _gn_projects_for_hap(_search_roots(prefer), stem)
    return owners[0].resolve() if owners else None


def _find_signed_by_hap_name(_repo: Path, hap_name: str, prefer: Path | None) -> Path | None:
    stem = hap_name.removesuffix(".hap")
    if prefer is None:
        return None
    hit = _find_signed_in_proj(prefer, hap_name)
    if hit:
        return hit
    owners = _gn_projects_for_hap(_search_roots(prefer), stem)
    for owner in owners:
        hit = _signed_from_owner(owner, stem)
        if hit:
            return hit
    return None


def _resign_owners(owners: list[Path], _acls: list[str]) -> int:
    """Resign every kit owner with gate-identical materials (dist + project p7b)."""
    if not SIGN_CI.is_file():
        print(f"FAIL: sign_ci_identical.py not found: {SIGN_CI}", file=sys.stderr)
        return 1
    for owner in owners:
        unsigned = [
            p for p in owner.rglob("*-unsigned.hap")
            if "oh_modules" not in p.parts
        ]
        if not unsigned:
            print(f"FAIL: no *-unsigned.hap under {owner}; build first", file=sys.stderr)
            return 1
        cmd = [sys.executable, str(SIGN_CI), "--project", str(owner)]
        print("RUN:", " ".join(cmd))
        rc = subprocess.call(cmd)
        if rc != 0:
            print(f"FAIL: CI-identical sign failed for {owner}", file=sys.stderr)
            return rc
    return 0


def _ingest_extra_haps(
    staging_extras: dict[str, Path],
    extras: list[str],
    resign: bool,
    _acls: list[str],
) -> int:
    """--extra-hap path[:KitName.hap] — prefer already gate-signed; optional CI re-sign needs --project."""
    if not extras:
        return 0
    for spec in extras:
        if ":" in spec:
            src_s, name = spec.split(":", 1)
        else:
            src_s, name = spec, Path(spec).name
        src = Path(src_s)
        if not src.is_file():
            print(f"FAIL: --extra-hap not found: {src}", file=sys.stderr)
            return 1
        if not name.endswith(".hap"):
            name = name + ".hap"
        if resign:
            print(
                "WARN: --extra-hap with --resign skipped auto-sign "
                "(need project p7b); using file as-is. Prefer building owner projects.",
                file=sys.stderr,
            )
        staging_extras[name] = src
    return 0


def _collect_owners(
    proj: Path, names: list[str]
) -> tuple[list[Path], dict[str, Path]]:
    owners: list[Path] = []
    owner_by_name: dict[str, Path] = {}
    for name in names:
        owner = _resolve_owner(proj, name)
        if owner is None:
            print(f"MISS owner for {name}", file=sys.stderr)
            continue
        owner_by_name[name] = owner
        if owner not in owners:
            owners.append(owner)
        ob = _app_bundle(owner)
        print(f"OWNER {name} <- {owner} (app.bundleName={ob or '?'})")
    return owners, owner_by_name


def _same_bundle_names(owner_by_name: dict[str, Path], bundle: str) -> list[str]:
    out: list[str] = []
    for name, owner in owner_by_name.items():
        ob = _app_bundle(owner)
        if ob and ob == bundle:
            out.append(name)
    return out


def _map_signed_haps(proj: Path, names: list[str]) -> tuple[dict[str, Path], list[str]]:
    mapping: dict[str, Path] = {}
    missing: list[str] = []
    for name in names:
        hit = _find_signed_by_hap_name(proj, name, prefer=proj)
        if hit:
            mapping[name] = hit
            print(f"OK  {name} <- {hit}")
        else:
            missing.append(name)
            print(f"MISS {name}")
    return mapping, missing


def _merge_extras(
    mapping: dict[str, Path],
    missing: list[str],
    extras: list[str] | None,
    resign: bool,
    perms: list[str],
) -> int:
    if not extras:
        return 0
    extras_map: dict[str, Path] = {}
    rc = _ingest_extra_haps(extras_map, extras, resign, perms)
    if rc != 0:
        return rc
    for name, path in extras_map.items():
        mapping[name] = path
        if name in missing:
            missing.remove(name)
        print(f"OK  {name} <- {path} (extra)")
    return 0


def _write_kit_zip(
    out_zip: Path,
    mapping: dict[str, Path],
    bundle: str,
    perms: list[str],
    names: list[str],
) -> int:
    out_zip = out_zip.resolve()
    out_zip.parent.mkdir(parents=True, exist_ok=True)
    staging = out_zip.parent / (out_zip.stem + "_staging")
    if staging.exists():
        shutil.rmtree(staging)
    staging.mkdir(parents=True)
    for name, src in mapping.items():
        shutil.copy2(src, staging / name)
    (staging / "README.txt").write_text(
        README
        + f"\nbundle={bundle}\nperms={perms}\nkits={names}\n"
        + "REPLACE ALL kits listed above in testcases. Do not mix with gate HAPs.\n",
        encoding="utf-8",
    )
    with zipfile.ZipFile(out_zip, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for f in sorted(staging.iterdir()):
            zf.write(f, arcname=f.name)
    shutil.rmtree(staging)
    print(f"ZIP={out_zip}")
    return 0


def pack(
    proj: Path,
    out_zip: Path | None,
    resign: bool,
    dry_run: bool,
    extras: list[str] | None = None,
) -> int:
    proj = proj.resolve()
    tj = _load_test_json(proj)
    names = _kit_hap_names(tj)
    if not names:
        print("FAIL: AppInstallKit test-file-name empty", file=sys.stderr)
        return 1
    bundle = _bundle_name(proj, tj)
    perms = _collect_request_permissions(proj)
    print(f"bundle={bundle}\nkits={names}\nrequestPermissions={perms}")
    owners, owner_by_name = _collect_owners(proj, names)
    missing_owners = [n for n in names if n not in owner_by_name]
    if missing_owners and not extras:
        print(f"FAIL: cannot resolve owners: {missing_owners}", file=sys.stderr)
        return 1
    same = _same_bundle_names(owner_by_name, bundle)
    if same:
        print(f"same-bundle kits ({bundle}): {same}")
    if resign and not dry_run:
        rc = _resign_owners(owners, perms or [])
        if rc != 0:
            return rc
    mapping, missing = _map_signed_haps(proj, names)
    rc = _merge_extras(mapping, missing, extras, resign and not dry_run, perms or [])
    if rc != 0:
        return rc
    if missing:
        print(f"FAIL: missing HAPs: {missing}", file=sys.stderr)
        return 1
    if same and len([n for n in same if n in mapping]) != len(same):
        print(f"FAIL: incomplete same-bundle kit set for {bundle}", file=sys.stderr)
        return 1
    if dry_run:
        print("DRY-RUN ok")
        return 0
    if not out_zip:
        print("FAIL: --out required unless --dry-run", file=sys.stderr)
        return 1
    return _write_kit_zip(out_zip, mapping, bundle, perms or [], names)


def main() -> int:
    ap = argparse.ArgumentParser(
        description="Pack AppInstallKit HAPs with shared cert (anti-9568332)"
    )
    ap.add_argument("project", help="XTS project root (has Test.json)")
    ap.add_argument("--out", default="", help="Output zip path")
    ap.add_argument(
        "--resign",
        action="store_true",
        help="Re-sign ALL kit owners via sign_ci_identical (dist + project p7b)",
    )
    ap.add_argument(
        "--extra-hap",
        action="append",
        default=[],
        help="Extra hap path[:KitName.hap] (repeatable); still resign with shared cert if --resign",
    )
    ap.add_argument("--dry-run", action="store_true", help="Resolve only")
    args = ap.parse_args()
    out = Path(args.out) if args.out else None
    return pack(Path(args.project), out, args.resign, args.dry_run, args.extra_hap)


if __name__ == "__main__":
    sys.exit(main())
