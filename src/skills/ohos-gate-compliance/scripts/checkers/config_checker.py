#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""代码门禁检查：工程配置文件（build-profile.json5 compileSdkVersion 等）。迁移自 gate_review.py。"""
from __future__ import annotations

import json
import re
from pathlib import Path

from base import Hit

# XTS.CHECK.BUILD_PROFILE.COMPILE_SDK_VERSION.01：须对齐系统 api_full_version。
# 2026-10 PR44400/44444 实锤：写死 "26.0.0" 会被门禁打回期望 "26.0.1"。
_API_FULL_VERSION = "26.0.1"
_SDK_VER_KEYS = ("compileSdkVersion", "targetSdkVersion")
_SDK_VER_BAD = re.compile(
    r'("(?:' + "|".join(_SDK_VER_KEYS) + r')"\s*:\s*)(\d+)\b'
)
_SDK_VER_SHORT_STR = re.compile(
    r'("(?:' + "|".join(_SDK_VER_KEYS) + r')"\s*:\s*")(\d+)(")'
)
_SDK_VER_STALE = re.compile(
    r'("(?:' + "|".join(_SDK_VER_KEYS) + r')"\s*:\s*")26\.0\.0(")'
)


def fix_build_profile_compile_sdk(text: str) -> tuple[str, int]:
    """将数字/"26"/"26.0.0" 规范为当前 api_full（仅 compile/targetSdkVersion）。"""
    n = 0
    patch = _API_FULL_VERSION  # e.g. 26.0.1
    major = patch.split(".", 1)[0]

    def _num_to_msf(m: re.Match[str]) -> str:
        nonlocal n
        n += 1
        # 主版本号用命中值；补丁对齐当前 api_full（避免再写成 26.0.0）
        ver = patch if m.group(2) == major else f'{m.group(2)}.0.0'
        return f'{m.group(1)}"{ver}"'

    def _short_to_msf(m: re.Match[str]) -> str:
        nonlocal n
        n += 1
        ver = patch if m.group(2) == major else f'{m.group(2)}.0.0'
        return f'{m.group(1)}{ver}{m.group(3)}'

    text = _SDK_VER_BAD.sub(_num_to_msf, text)
    text = _SDK_VER_SHORT_STR.sub(_short_to_msf, text)
    text2, n2 = _SDK_VER_STALE.subn(rf'\g<1>{patch}\2', text)
    return text2, n + n2


def _sdk_value_hits(path: Path, i: int, key: str, line: str) -> list[Hit]:
    """单行 SDK 版本写法判定（数字 / 短字符串 / 过期 26.0.0）。"""
    hits: list[Hit] = []
    ex = _API_FULL_VERSION
    if re.search(rf'"{key}"\s*:\s*\d+\b', line):
        hits.append(Hit("CI.SDK.01", str(path), i,
                        f'{key} 须为 "M.S.F" 字符串（如 "{ex}"），禁止提交数字'))
    elif re.search(rf'"{key}"\s*:\s*"\d+"\s*,?', line):
        hits.append(Hit("CI.SDK.01", str(path), i,
                        f'{key} 须为完整 "M.S.F"（如 "{ex}"），勿写 "26"'))
    elif re.search(rf'"{key}"\s*:\s*"26\.0\.0"\s*,?', line):
        hits.append(Hit("CI.SDK.01", str(path), i,
                        f'{key} "26.0.0" 已过期，须对齐 api_full_version "{ex}"'
                        f'（XTS.CHECK.BUILD_PROFILE.COMPILE_SDK_VERSION.01）'))
    return hits


def scan_config_file(path: Path, text: str) -> list[Hit]:
    """CI.SDK.01：compileSdkVersion/targetSdkVersion 须为完整 M.S.F 且对齐 api_full。"""
    hits: list[Hit] = []
    if path.name != "build-profile.json5":
        return hits
    for i, line in enumerate(text.splitlines(), 1):
        for key in _SDK_VER_KEYS:
            if key not in line:
                continue
            hits.extend(_sdk_value_hits(path, i, key, line))
    return hits


# XTS preprocess：hvigor-config / oh-package 的 modelVersion 6.0.0 不合规（须 26.0.0）
_MODEL_VER_BAD = re.compile(r'("modelVersion"\s*:\s*")6\.0\.0(")')
_MODEL_VER_TARGET = "26.0.0"
_MODEL_VER_FILES = frozenset({"hvigor-config.json5", "oh-package.json5"})


def scan_model_version(path: Path, text: str) -> list[Hit]:
    """CI.HVIGOR.01: forbid modelVersion 6.0.0; align upstream/master (now 26.0.0).

    CI preprocess Hvigor rejects stale 6.0.0 paths. Prefer:
    git fetch upstream && git grep modelVersion upstream/master -- hvigor-config.json5
    Do not copy unsynced local develop trees that still pin 6.0.0.
    """
    if path.name not in _MODEL_VER_FILES:
        return []
    hits: list[Hit] = []
    for i, line in enumerate(text.splitlines(), 1):
        if _MODEL_VER_BAD.search(line):
            hits.append(Hit(
                "CI.HVIGOR.01", str(path), i,
                f'modelVersion "6.0.0" 不合规，须改为 "{_MODEL_VER_TARGET}"'
                f"（对齐 upstream/master，禁止抄本地旧工程）"))
    return hits


def fix_model_version(text: str) -> tuple[str, int]:
    """将 modelVersion 6.0.0 自动升为 26.0.0。"""
    text2, n = _MODEL_VER_BAD.subn(rf'\g<1>{_MODEL_VER_TARGET}\2', text)
    return text2, n


def scan_syscap_json(path: Path, text: str) -> list[Hit]:
    """XTS.CHECK.DEVICETYPE.01：syscap.json general 与 module.json5 deviceTypes 须一致。

    2026-08-24 检视实锤：syscap.json 的 general 被新增设备类型，检视要求设备类型
    以 module.json5 的 deviceTypes 为准且两边一致——syscap 空则 module 也空。
    """
    hits: list[Hit] = []
    try:
        d = json.loads(text)
        general = (d.get("devices") or {}).get("general") or []
    except Exception:
        return hits
    # 找同目录 module.json5
    for cand in (path.parent / "module.json5",):
        if not cand.is_file():
            continue
        try:
            mt = cand.read_text(errors="replace")
            m = re.search(r'"deviceTypes"\s*:\s*(\[[^\]]*\])', mt)
        except Exception:
            continue
        if not m:
            continue
        dev = [x.strip().strip('"') for x in m.group(1).strip("[]").split(",") if x.strip()]
        gen = [g for g in general if g]
        if bool(dev) != bool(gen):
            hits.append(Hit("XTS.CHECK.DEVICETYPE.01", str(path), 1,
                            f"syscap.json general {gen} 与 module.json5 deviceTypes {dev} 不一致："
                            f"设备类型以 module.json5 为准且须一致（勿单独改 syscap）"))
        break
    return hits


def scan_test_json(path: Path, text: str) -> list[Hit]:
    """XTS.CHECK.MODULE_NAME.01：Test.json 的 module-name 应与主模块名一致。

    2026-08-24 检视实锤：module-name 被误改为 entry_test 导致 xdevice 找不到主 hap；
    module-name 指向主模块（build-profile modules[0].name），勿修改。
    """
    hits: list[Hit] = []
    try:
        d = json.loads(text)
    except Exception as exc:
        hits.append(Hit("XTS.CHECK.TESTJSON.01", str(path), 1,
                        f"Test.json JSON 语法错误（如尾逗号/引号）：{exc}"))
        return hits
    mn = (d.get("driver") or {}).get("module-name")
    if not mn:
        return hits
    bp = path.parent / "build-profile.json5"
    if not bp.is_file():
        return hits
    try:
        btext = bp.read_text(errors="replace")
        m = re.search(r'"modules"\s*:\s*\[\s*\{\s*"name"\s*:\s*"([^"]+)"', btext)
        main = m.group(1) if m else None
    except Exception:
        return hits
    if main and mn != main:
        hits.append(Hit("XTS.CHECK.MODULE_NAME.01", str(path), 1,
                        f"Test.json module-name '{mn}' 与主模块名 '{main}' 不一致（勿修改 module-name）"))
    return hits


def scan_static_project_naming(path: Path, text: str) -> list[Hit]:
    """XTS.CHECK.PROJECT_NAMING.01：静态工程目录名须以 static 结尾。

    2026-09-15 实锤：*statictest 目录在 gitcode 被判致命（须 *teststatic / *static）。
    """
    hits: list[Hit] = []
    if path.name != "BUILD.gn":
        return hits
    if "ohos_js_app_static_suite" not in text:
        return hits
    name = path.parent.name
    if not name.endswith("static"):
        line_no = 1
        for i, line in enumerate(text.splitlines(), 1):
            if "ohos_js_app_static_suite" in line:
                line_no = i
                break
        hits.append(Hit(
            "XTS.CHECK.PROJECT_NAMING.01", str(path), line_no,
            f"静态工程目录名需以'static'结尾.当前工程名称:{name}"))
    return hits


_HAP_NAME_RE = re.compile(r'hap_name\s*=\s*"([^"]+)"')
_TEST_HAP_TRUE_RE = re.compile(r'test_hap\s*=\s*true')
_JS_APP_SUITE_RE = re.compile(
    r'ohos_js_app(?:_static)?_suite\s*\(\s*"([^"]+)"\s*\)'
)
# test_hap=true 的 js_app(_static)_suite：hap_name 须以 Test 结尾（PR45112 实锤）
_HAP_NAME_TEST_OK = re.compile(r'^Acts[A-Za-z0-9]+Test$')


def scan_hap_name(path: Path, text: str) -> list[Hit]:
    """XTS.CHECK.HAPNAME.01：test_hap=true 的 js app suite hap_name 须 Acts…Test。

    2026-11 PR45112：ActsAbilityApi26NoPermissionRely + test_hap=true 被判致命
    「hap_name不符合XTS命名规范」。assist_suite 的 *Rely 不受本条约束。
    """
    hits: list[Hit] = []
    if path.name != "BUILD.gn":
        return hits
    if not _TEST_HAP_TRUE_RE.search(text):
        return hits
    if not _JS_APP_SUITE_RE.search(text):
        return hits
    for i, line in enumerate(text.splitlines(), 1):
        m = _HAP_NAME_RE.search(line)
        if not m:
            continue
        name = m.group(1)
        if _HAP_NAME_TEST_OK.match(name):
            continue
        hits.append(Hit(
            "XTS.CHECK.HAPNAME.01", str(path), i,
            f'hap_name "{name}" 不符合 XTS 命名：ohos_js_app*_suite 且 '
            f'test_hap=true 时须匹配 ^Acts[A-Za-z0-9]+Test$ '
            f'（例 ActsAbilityApi26NoPermissionTest；勿用 *Rely 作 test HAP 名）'))
    return hits


_GROUP_HEAD_RE = re.compile(r"^\s*group\s*\(", re.M)
_DOTDOT_PEER_RE = re.compile(r'"\.\./([^/:]+):([^"]+)"')


def _find_nearest_group_gn(start: Path) -> Path | None:
    p = start
    for _ in range(6):
        gn = p / "BUILD.gn"
        if gn.is_file():
            raw = gn.read_text(encoding="utf-8", errors="replace")
            if _GROUP_HEAD_RE.search(raw):
                return gn
        if p.name in ("acts", "xts", "test") or p.parent == p:
            break
        p = p.parent
    return None


def scan_group_peer_dotdot(path: Path, text: str) -> list[Hit]:
    """CI.BUILDGN.PEER_DOTDOT.01：纯 group 聚合勿用 ../ 挂同级套件。

    PR45250 实锤：为躲父 BUILD.gn 连带编失败，把 actsclimgrnoperm 挂进
    actsabilityamstest（"../actsclimgrnoperm"），违反同级挂接惯例。
    """
    hits: list[Hit] = []
    if path.name != "BUILD.gn":
        return hits
    if _JS_APP_SUITE_RE.search(text):
        return hits
    if not _GROUP_HEAD_RE.search(text):
        return hits
    parent = path.parent
    for i, line in enumerate(text.splitlines(), 1):
        m = _DOTDOT_PEER_RE.search(line)
        if not m:
            continue
        peer = m.group(1)
        peer_gn = parent.parent / peer / "BUILD.gn"
        if not peer_gn.is_file():
            continue
        hits.append(Hit(
            "CI.BUILDGN.PEER_DOTDOT.01", str(path), i,
            f'group 勿用 "../{peer}:…" 挂同级套件；应写入父级 '
            f'{parent.parent.name}/BUILD.gn（PR45250/45331）'))
    return hits


def scan_suite_parent_registration(path: Path, text: str) -> list[Hit]:
    """CI.BUILDGN.PARENT.01：ohos_js_app*_suite 须在最近父 group 注册。"""
    hits: list[Hit] = []
    if path.name != "BUILD.gn":
        return hits
    m = _JS_APP_SUITE_RE.search(text)
    if not m:
        return hits
    suite = m.group(1)
    proj = path.parent
    group_gn = _find_nearest_group_gn(proj.parent)
    if group_gn is None:
        return hits
    gtext = group_gn.read_text(encoding="utf-8", errors="replace")
    if f'"{proj.name}:' in gtext or f'"../{proj.name}:' in gtext:
        return hits
    line_no = 1
    for i, line in enumerate(text.splitlines(), 1):
        if "ohos_js_app" in line and "suite" in line:
            line_no = i
            break
    hits.append(Hit(
        "CI.BUILDGN.PARENT.01", str(path), line_no,
        f'套件 {suite} 未在父 group 注册 "{proj.name}:…"；对照同级工程挂接，'
        f'禁止为躲报错挂到无关兄弟 group（见 {group_gn}；PR45331）'))
    return hits


def fix_config_file(path: Path, text: str) -> tuple[str, int]:
    if path.name in _MODEL_VER_FILES:
        return fix_model_version(text)
    if path.name != "build-profile.json5":
        return text, 0
    return fix_build_profile_compile_sdk(text)
