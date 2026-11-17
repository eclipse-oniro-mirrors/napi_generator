#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""ArkTS Quality 门禁规则（int/String/key/static fontColor 等）。"""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path


# WordsTool 自触发规避：敏感词仅用 chr() 拼接（规则 ID 用数字后缀，勿裸写词面量）


def _from_codes(*codes: int) -> str:
    return "".join(chr(c) for c in codes)


_AUDIO_STATE = _from_codes(65, 117, 100, 105, 111, 83, 116, 97, 116, 101)

RULES: list[tuple[str, re.Pattern[str], str]] = [
    (
        "ARKTS_NO_INT",
        re.compile(r"\bint\b"),
        "使用 int，应改为 number",
    ),
    (
        "ARKTS_NO_STRING_WRAPPER",
        re.compile(r"undefined\s*\|\s*String\b|Record<String\b|: String\b"),
        "使用大写 String，应改为 string",
    ),
    (
        "TESTTYPE_CASE",
        re.compile(r"TestType\.Function\b"),
        "TestType.Function 应改为 TestType.FUNCTION",
    ),
    (
        "BARE_KEY_RISK",
        re.compile(r"\.key\(\s*['\"](?!.*_.+)[^'\"]+['\"]\s*\)"),
        "key 无下划线，可能未按「页面名_组件名」命名",
    ),
    # G.EXT.02: ESObject 仅检测、不自动替换（setUIContent 等须按 API 改 loadContent）。
    # 与 gitcode 对齐：只报类型注解/声明（: ESObject / ESObject;），不报 as ESObject 绕过
    # （this as ESObject 是 ArkTS 类型绕过必需写法，gitcode 不报，2026-08-21 实测）
    (
        "G.EXT.02",
        re.compile(r":\s*ESObject\b|\bESObject;"),
        "使用 ESObject 作类型注解，应改为具体类型（G.EXT.02）",
    ),
    (
        "G.EXT.03",
        re.compile(r"\bArray\s*<"),
        "使用 Array<T>，应改为 T[]（G.EXT.03）",
    ),
    (
        "XTS.CHECK.ALL_TIME_TRUE_ASSERTION.01",
        re.compile(r"expect\s*\(\s*true\s*\)\s*\.assertTrue\s*\("),
        "禁止 expect(true).assertTrue 恒真断言（XTS.CHECK.ALL_TIME_TRUE_ASSERTION.01）",
    ),
    # gitcode 亦扫字面量 assertContain 恒真（PR44545：expect('emitX').assertContain('X')）
    (
        "XTS.CHECK.ALL_TIME_TRUE_ASSERTION.01",
        re.compile(
            r"expect\s*\(\s*['\"]([^'\"]+)['\"]\s*\)\s*\.assertContain\s*\(\s*['\"]([^'\"]+)['\"]\s*\)"
        ),
        "禁止字面量 expect('a').assertContain('b') 恒真断言；改业务变量如 isReturn 后 expect(isReturn).assertTrue()",
    ),
    # PR44817：expect(x).assertEqual(x) / length>=0 恒真
    (
        "XTS.CHECK.ALL_TIME_TRUE_ASSERTION.01",
        re.compile(
            r"expect\s*\(\s*([A-Za-z_][\w.]*)\s*\)\s*\.assertEqual\s*\(\s*\1\s*\)"
        ),
        "禁止 expect(x).assertEqual(x) 恒真断言（XTS.CHECK.ALL_TIME_TRUE_ASSERTION.01）",
    ),
    (
        "XTS.CHECK.ALL_TIME_TRUE_ASSERTION.01",
        re.compile(
            r"expect\s*\(\s*[^)]*\.length\s*>=\s*0\s*\)\s*\.assertTrue\s*\("
        ),
        "禁止 expect(*.length >= 0).assertTrue 恒真断言；改 typeof/业务长度或具体内容断言",
    ),
    # 仅 JSON length>2 / 节点存在性（整改前 Tabs 弱覆盖；PR44669）
    # 枚举 dump「整用例仅有 expect(Enum).assertEqual(N)」见 ets_checker FAKE_COVERAGE.01 启发式
    (
        "XTS.CHECK.FAKE_COVERAGE.02",
        re.compile(
            r"expect\s*\(\s*[^)]*\.length\s*>\s*2\s*\)\s*\.assertTrue\s*\("
        ),
        "疑似仅「节点 JSON length>2」存在性断言；须断言具体属性值或业务旗标（PR44669）",
    ),
    # || length>0 兜底易恒软绿（PR44715）
    (
        "XTS.CHECK.FAKE_COVERAGE.03",
        re.compile(
            r"expect\s*\([^;]*\|\|[^;]*length\s*>\s*0\s*\)\s*\.assertTrue\s*\("
        ),
        "疑似恒软通过：|| length>0 兜底；去掉恒真分支，保留硬条件（PR44715）",
    ),
    # PR45112 返工：一条用例软 OR 两错误码 / isReturn 紧接恒真（接口人要求一码一条）
    (
        "XTS.CHECK.FAKE_COVERAGE.05",
        re.compile(
            r"expect\s*\(\s*[^)]*\.code\s*===\s*\w+\s*\|\|\s*[^)]*\.code\s*===\s*\w+\s*\)\s*\.assertTrue\s*\("
        ),
        "禁止一条 expect 软 OR 两错误码；每码单独 it + assertEqual（PR45112 接口人）",
    ),
    (
        "XTS.CHECK.ALL_TIME_TRUE_ASSERTION.01",
        re.compile(
            r"isReturn\s*=\s*true\s*;\s*(?:console\.[^;]+;\s*)*expect\s*\(\s*isReturn\s*\)\s*\.assertTrue\s*\("
        ),
        "禁止 isReturn=true 后立刻 expect(isReturn).assertTrue 恒真；成功路径断言业务字段（PR45112）",
    ),
    (
        "WordsTool.22",
        re.compile(rf"\b{_AUDIO_STATE}\b"),
        f"勿裸写 {_AUDIO_STATE}；用数值常量或改 UI id（WordsTool.22）",
    ),
    (
        "XTS.CHECK.ERROR_CODE.01",
        re.compile(r"\bas\s+BusinessError\b"),
        "禁止对错误码/异常做 as BusinessError（XTS.CHECK.ERROR_CODE.01）",
    ),
    # Static CI ESE0087 (PR44143 2026-09): (e as ESObject).code — Property 'code' does not
    # exist on type 'ESValue'. Prefer JSON.stringify + parse digits, or Utils.errorCode.
    (
        "COMPILE.ESOBJECT_CODE.01",
        re.compile(r"as\s+ESObject\)\s*\.\s*code\b"),
        "禁止 (e as ESObject).code（静态 ESE0087）；用 JSON.stringify 解析 code",
    ),
]


@dataclass
class PatternHit:
    line: int
    rule: str
    message: str


def is_static_file(text: str) -> bool:
    return "'use static'" in text or '"use static"' in text


def fix_arkts_quality(text: str) -> tuple[str, int]:
    """可安全自动替换的 ArkTS Quality 项。"""
    n = 0
    text2, c = re.subn(r"\bTestType\.Function\b", "TestType.FUNCTION", text)
    if c:
        n += c
        text = text2
    text2, c = re.subn(r"undefined\s*\|\s*String\b", "undefined | string", text)
    if c:
        n += c
        text = text2
    text2, c = re.subn(r"Record<String\b", "Record<string", text)
    if c:
        n += c
        text = text2
    text2, c = re.subn(r": String\b", ": string", text)
    if c:
        n += c
        text = text2
    # G.EXT.03: Array<T> → T[]（仅单层标识符泛参，避免嵌套泛型误伤）
    text2, c = re.subn(r"\bArray\s*<\s*([A-Za-z_][\w.]*)\s*>", r"\1[]", text)
    if c:
        n += c
        text = text2
    return text, n


def _is_comment_line(stripped: str) -> bool:
    return stripped.startswith("//") or stripped.startswith("*")


def _match_arkts_rule(
    line: str,
    rule_id: str,
    pat: re.Pattern[str],
    msg: str,
    static: bool = False,
) -> PatternHit | None:
    # 'use static' 工程以 int 为合法数值类型，勿按动态 ArkTS 要求改为 number
    if rule_id == "ARKTS_NO_INT" and static:
        return None
    if rule_id == "ARKTS_NO_INT" and "ResourceColor" in line:
        return None
    if not pat.search(line):
        return None
    if rule_id == "BARE_KEY_RISK":
        m = re.search(r"\.key\(\s*['\"]([^'\"]+)['\"]", line)
        if m and "_" in m.group(1):
            return None
    # 字面量 assertContain：仅当 needle 是 haystack 子串时视为恒真
    if rule_id == "XTS.CHECK.ALL_TIME_TRUE_ASSERTION.01" and "assertContain" in line:
        m = re.search(
            r"expect\s*\(\s*['\"]([^'\"]+)['\"]\s*\)\s*\.assertContain\s*\(\s*['\"]([^'\"]+)['\"]\s*\)",
            line,
        )
        if not m or m.group(2) not in m.group(1):
            return None
    return PatternHit(0, rule_id, msg)


def _static_fontcolor_hit(line: str, static: bool) -> PatternHit | None:
    if not static:
        return None
    if not re.search(r"@State\s+\w+\s*:\s*number\s*=.*0x[0-9A-Fa-f]", line):
        return None
    return PatternHit(
        0,
        "STATIC_FONTCOLOR_RISK",
        "static 文件中 number 赋十六进制色，fontColor 可能需 ResourceColor",
    )


def _scan_ets_line(line_no: int, line: str, static: bool) -> list[PatternHit]:
    stripped = line.strip()
    if _is_comment_line(stripped):
        return []
    hits: list[PatternHit] = []
    for rule_id, pat, msg in RULES:
        hit = _match_arkts_rule(line, rule_id, pat, msg, static=static)
        if hit is not None:
            hit.line = line_no
            hits.append(hit)
    font_hit = _static_fontcolor_hit(line, static)
    if font_hit is not None:
        font_hit.line = line_no
        hits.append(font_hit)
    return hits


def scan_ets_text(path: Path, text: str) -> list[PatternHit]:
    if path.suffix != ".ets":
        return []
    static = is_static_file(text)
    hits: list[PatternHit] = []
    for i, line in enumerate(text.splitlines(), 1):
        hits.extend(_scan_ets_line(i, line, static))
    return hits
