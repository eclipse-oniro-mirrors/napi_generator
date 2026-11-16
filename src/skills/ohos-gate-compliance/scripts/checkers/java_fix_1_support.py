#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Shared helpers for java_fix_1 (FUNC limit splits)."""
from __future__ import annotations

import re

from java_common import KNOWN_ERRORS, _CATCH_RT, _UNINDENTED_BLOCK_JDOC, _is_comment_line

_VOID_LAMBDA_RE = re.compile(r"\.(?:forEach)\s*\(")


def is_void_lambda_context(line: str) -> bool:
    return bool(_VOID_LAMBDA_RE.search(line))


def brace_char_delta(ch: str, in_str: bool) -> tuple[bool, int]:
    if ch == '"':
        return (not in_str, 0)
    if in_str:
        return (in_str, 0)
    if ch == "{":
        return (in_str, 1)
    if ch == "}":
        return (in_str, -1)
    return (in_str, 0)


def brace_delta(line: str) -> int:
    delta = 0
    in_str = False
    for ch in line:
        in_str, d = brace_char_delta(ch, in_str)
        delta += d
    return delta


def catch_rt_repl_simple(etype: str, var: str, body: str, counter: list[int]) -> str | None:
    if etype not in KNOWN_ERRORS:
        return None
    counter[0] += 1
    return "catch (%s %s) {%s" % (etype, var, body)


def catch_rt_repl_classname(var: str, pkg: str, etype: str, counter: list[int]) -> str | None:
    if etype not in KNOWN_ERRORS:
        return None
    counter[0] += 1
    return (
        "catch (%s %s) { assertEqual(\"%s.%s\", BasTest.className(%s));"
        % (etype, var, pkg, etype, var)
    )


def catch_rt_repl_block(var: str, etype: str, body: str, counter: list[int]) -> str | None:
    if etype not in KNOWN_ERRORS:
        return None
    counter[0] += 1
    return "catch (%s %s) {%s" % (etype, var, body)


def catch_rt_repl_message(var: str, body: str, counter: list[int]) -> str:
    counter[0] += 1
    return "catch (Error %s) {%s" % (var, body)


_CLASSNAME_CATCH_RE = (
    r"catch\s*\(\s*RuntimeException\s+(\w+)\s*\)\s*\{\s*"
    r"assertEqual\(\"([\w.]+)\.(\w+)\",\s*BasTest\.className\(\1\)\)\s*;"
)
_BLOCK_CATCH_RE = (
    r"catch\s*\(\s*RuntimeException\s+(\w+)\s*\)\s*\{"
    r"([^}]*assertEqual\s*\(\s*\"(\w+)\"\s*,\s*\1\.getClass\(\)\.getSimpleName\(\)\s*\)\s*[^}]*)\}"
)
_TAIL_BLOCK_CATCH_RE = (
    r"\}\s*catch\s*\(\s*RuntimeException\s+(\w+)\s*\)\s*\{"
    r"([^}]*getClass\(\)\.getSimpleName\(\)[^}]*assertEqual\s*\(\s*\"(\w+)\"[^}]*)\}"
)
_MSG_CATCH_RE = (
    r"catch\s*\(\s*RuntimeException\s+(\w+)\s*\)\s*\{"
    r"(\s*assertEqual\([^,]+,\s*\1\.getMessage\(\)\)\s*;)"
)
_RANGE_MSG_CATCH_RE = (
    r"catch\s*\(\s*RangeError\s+(\w+)\s*\)\s*\{"
    r"(\s*assertEqual\([^,]+,\s*\1\.getMessage\(\)\)\s*;)"
)


def _catch_rt_sub_block(text: str, counter: list[int]) -> str:
    def repl_block(m: re.Match[str]) -> str:
        out = catch_rt_repl_block(m.group(1), m.group(2), m.group(3), counter)
        return m.group(0) if out is None else out

    text = re.sub(_BLOCK_CATCH_RE, repl_block, text, flags=re.DOTALL)
    return re.sub(_TAIL_BLOCK_CATCH_RE, repl_block, text, flags=re.DOTALL)


def _catch_rt_sub_messages(text: str, counter: list[int]) -> str:
    def repl_message(m: re.Match[str]) -> str:
        return catch_rt_repl_message(m.group(1), m.group(2), counter)

    text = re.sub(_MSG_CATCH_RE, repl_message, text)
    text, c = re.subn(_RANGE_MSG_CATCH_RE, repl_message, text)
    counter[0] += c
    text, c = re.subn(
        r"\}\s*catch\s*\(\s*RuntimeException\s+(\w+)\s*\)\s*\{",
        r"} catch (RangeError \1) {",
        text,
    )
    counter[0] += c
    return text


def apply_catch_rt_passes(text: str) -> tuple[str, int]:
    counter = [0]

    def repl_simple(m: re.Match[str]) -> str:
        out = catch_rt_repl_simple(m.group(3), m.group(1), m.group(2), counter)
        return m.group(0) if out is None else out

    text = _CATCH_RT.sub(repl_simple, text)

    def repl_classname(m: re.Match[str]) -> str:
        out = catch_rt_repl_classname(m.group(1), m.group(2), m.group(3), counter)
        return m.group(0) if out is None else out

    text = re.sub(_CLASSNAME_CATCH_RE, repl_classname, text)
    text = _catch_rt_sub_block(text, counter)
    text = _catch_rt_sub_messages(text, counter)
    return text, counter[0]


def strip_test_wrapper_block(method: list[str]) -> tuple[list[str], int]:
    if len(method) < 4:
        return method, 0
    j = 1
    while j < len(method) and method[j].strip() == "":
        j += 1
    if j >= len(method) or method[j].strip() != "{":
        return method, 0
    k = len(method) - 1
    while k > j and method[k].strip() == "":
        k -= 1
    if method[k].strip() != "}":
        return method, 0
    k2 = k - 1
    while k2 > j and method[k2].strip() == "":
        k2 -= 1
    if k2 <= j or method[k2].strip() != "}":
        return method, 0
    return method[:j] + method[j + 1:k2] + method[k2 + 1:], 1


def collect_test_method(lines: list[str], start: int) -> tuple[list[str], int]:
    method = [lines[start]]
    i = start + 1
    depth = brace_delta(method[0])
    while i < len(lines) and depth > 0:
        cur = lines[i]
        method.append(cur)
        depth += brace_delta(cur)
        i += 1
    return method, i


def err05_replace_throw(line: str, void_lambda: bool, lambda_depth: int, returns_value: bool) -> str:
    if not re.search(r"\bthrow new Error\s*\(", line):
        return line
    if void_lambda:
        repl = re.sub(r"\bthrow new Error\s*\(\s*\)", 'BasTest.throwTestError("")', line)
        return re.sub(r"\bthrow new Error\s*\(", "BasTest.throwTestError(", repl)
    if lambda_depth > 0 or returns_value:
        repl = re.sub(r"\bthrow new Error\s*\(\s*\)", 'return BasTest.throwTestError("")', line)
        return re.sub(r"\bthrow new Error\s*\(", "return BasTest.throwTestError(", repl)
    repl = re.sub(r"\bthrow new Error\s*\(\s*\)", 'BasTest.throwTestError("")', line)
    return re.sub(r"\bthrow new Error\s*\(", "BasTest.throwTestError(", repl)


def err05_update_lambda_depth(line: str, lambda_depth: int) -> int:
    if lambda_depth <= 0:
        return 0
    opens = line.count("{")
    closes = line.count("}")
    if "-> {" in line:
        opens -= 1
    lambda_depth += opens - closes
    return max(0, lambda_depth)


def parse_method_params(params_s: str) -> list[tuple[str, str]]:
    params: list[tuple[str, str]] = []
    for p in params_s.split(","):
        p = p.strip()
        pm = re.match(r"^(?:final\s+)?([\w<>\[\],.? ]+?)\s+(\w+)$", p)
        if pm:
            params.append((pm.group(1).strip(), pm.group(2)))
    return params


_METHOD_HEADER_SKIP = re.compile(
    r"\b(?:class|interface|enum|if|for|while|catch|switch)\b"
)
_METHOD_SIG = re.compile(
    r"^(\s*)((?:(?:public|private|protected|static|final|synchronized)\s+)+"
    r"(?:[\w<>\[\],.? ]+)\s+\w+)\s*\(([^)]*)\)\s*(\{)?\s*$"
)


def parse_method_header(line: str) -> re.Match[str] | None:
    m = _METHOD_SIG.match(line)
    if not m or _METHOD_HEADER_SKIP.search(line):
        return None
    return m


def build_param_injections(
    assigned: list[tuple[str, str]], params_s: str, body_ind: str
) -> tuple[str, list[str]]:
    new_params_s = params_s
    inject: list[str] = []
    for ptype, pname in assigned:
        new_name = pname + "In"
        new_params_s = re.sub(
            r"\b%s\b" % re.escape(pname), new_name, new_params_s, count=1
        )
        inject.append("%s%s %s = %s;" % (body_ind, ptype, pname, new_name))
    return new_params_s, inject


def find_assigned_params(params: list[tuple[str, str]], body: list[str]) -> list[tuple[str, str]]:
    assigned: list[tuple[str, str]] = []
    for ptype, pname in params:
        for bl in body:
            if _is_comment_line(bl):
                continue
            if re.match(r"^\s*%s\s*=(?!=)" % re.escape(pname), bl):
                assigned.append((ptype, pname))
                break
    return assigned


def read_method_signature_body(
    lines: list[str], i: int, brace: str | None
) -> tuple[list[str], list[str], int, int] | None:
    sig_lines = [lines[i]]
    j = i + 1
    if not brace:
        while j < len(lines):
            sig_lines.append(lines[j])
            if "{" in lines[j]:
                j += 1
                break
            j += 1
    depth = sum(s.count("{") - s.count("}") for s in sig_lines)
    if depth <= 0:
        return None
    body: list[str] = []
    while j < len(lines) and depth > 0:
        body.append(lines[j])
        depth += lines[j].count("{") - lines[j].count("}")
        j += 1
    return sig_lines, body, j, depth


def emit_renamed_method(
    ind: str,
    head: str,
    new_params_s: str,
    brace: str | None,
    sig_lines: list[str],
    inject: list[str],
    body: list[str],
) -> list[str]:
    out: list[str] = []
    new_sig = "%s%s(%s)" % (ind, head, new_params_s)
    if brace:
        new_sig += " {"
    out.append(new_sig)
    if not brace:
        out.extend(sig_lines[1:])
    out.extend(inject)
    out.extend(body)
    return out


def reindent_jdoc_block_lines(block: list[str]) -> list[str]:
    result: list[str] = []
    for bi, bl in enumerate(block):
        if bi == 0:
            result.append("    " + bl)
            continue
        if not bl.strip().startswith("*"):
            result.append("    " + bl)
            continue
        stripped = bl.lstrip()
        if stripped.startswith("*") and not stripped.startswith(" *"):
            result.append("     *" + stripped[1:])
        else:
            result.append("    " + stripped)
    return result


def should_reindent_block_at(prev: str) -> bool:
    return prev.endswith("}") or prev.startswith("@Test") or prev == ""


def tc_desc_from_block(block: list[str]) -> str:
    for bl in block:
        m = re.search(r"@tc\.desc\s+(.+)", bl)
        if m:
            return m.group(1).strip()
    return ""


def inject_tc_desc_into_block(block: list[str], desc: str) -> list[str]:
    ind_m = re.match(r"^(\s*)/\*\*", block[0])
    ind = ind_m.group(1) if ind_m else ""
    out = [block[0], "%s * %s" % (ind, desc)]
    out.extend(block[1:])
    return out


def is_tc_number_javadoc_block(block: list[str]) -> bool:
    return len(block) >= 2 and block[1].strip().startswith("* @tc.number")


def collect_javadoc_block(lines: list[str], start: int) -> tuple[list[str], int]:
    block: list[str] = []
    i = start
    while i < len(lines):
        block.append(lines[i])
        if lines[i].strip().endswith("*/"):
            break
        i += 1
    return block, i


def lambda_trailing_suffix(body: str) -> tuple[str, str]:
    m_arg = re.search(r";\s*(\},\s*[^)]+\))\s*$", body)
    if m_arg:
        return body[:m_arg.start()].strip(), m_arg.group(1) + ";"
    for suf in ("});", "};", "}"):
        if body.endswith(suf):
            return body[: -len(suf)].strip(), suf
    return body, ""


def null_decl_assert_target(lines: list[str], i: int, name: str) -> int | None:
    for j in range(i + 1, min(i + 40, len(lines))):
        if not re.search(r"\b%s\b" % re.escape(name), lines[j]):
            continue
        if re.match(r"^[ \t]*assertNull\(%s\);\s*$" % re.escape(name), lines[j]):
            return j if j - i > 10 else None
        break
    return None


def locale_param_rewrite_line(cur: str, renamed: bool) -> tuple[str, bool, int]:
    if re.match(r"^\s*lc\s*=\s*lc\.toLowerCase", cur):
        ind = re.match(r"^(\s*)", cur).group(1)
        return (
            "%sString localeKey = lc.toLowerCase(java.util.Locale.ROOT);" % ind,
            True,
            1,
        )
    if renamed and not _is_comment_line(cur):
        return re.sub(r"\blc\b", "localeKey", cur), renamed, 0
    return cur, renamed, 0


_FMTINTL_COMPLEX_DECLS = [
    '        String lang = lc.split("[-_]")[0];',
    "        boolean grouped = opts == null || opts.useGrouping;",
    '        String notation = opts == null || opts.notation == null ? "" : opts.notation;',
    '        String compactDisplay = opts == null || opts.compactDisplay == null ? "short" : opts.compactDisplay;',
    '        String curDisplay = opts == null || opts.currencyDisplay == null ? "" : opts.currencyDisplay;',
    "        int minFrac = opts == null ? -1 : opts.minimumFractionDigits;",
    "        int maxFrac = opts == null ? -1 : opts.maximumFractionDigits;",
    "        int minSig = opts == null ? 0 : opts.minimumSignificantDigits;",
    "        int maxSig = opts == null ? 0 : opts.maximumSignificantDigits;",
    "        int minInt = opts == null ? 0 : opts.minimumIntegerDigits;",
]

_FMTINTL_ANCHORS = [
    (
        '        String body;\n        if ("scientific".equals(notation)',
        '        String notation = opts == null || opts.notation == null ? "" : opts.notation;\n',
    ),
    (
        '        if ("scientific".equals(notation) || "engineering".equals(notation)) {',
        '        String compactDisplay = opts == null || opts.compactDisplay == null ? "short" : opts.compactDisplay;\n',
    ),
    (
        "            int fracDigits = 0;\n            if (minSig > 0) {",
        "            int minSig = opts == null ? 0 : opts.minimumSignificantDigits;\n"
        "            int maxSig = opts == null ? 0 : opts.maximumSignificantDigits;\n",
    ),
    (
        "            while (intPart.length() < minInt) {",
        "            int minInt = opts == null ? 0 : opts.minimumIntegerDigits;\n",
    ),
    (
        "        String groupSep = groupSeparator(lang);",
        '        String lang = lc.split("[-_]")[0];\n',
    ),
    (
        "            if (grouped && groupSep != null) {",
        "            boolean grouped = opts == null || opts.useGrouping;\n",
    ),
    (
        "                body = attachCurrency(body, opts.currency, curDisplay, lang);",
        '                String curDisplay = opts == null || opts.currencyDisplay == null ? "" : opts.currencyDisplay;\n',
    ),
]

_FMTINTL_CUR_REPL = (
    "            int minFrac = opts == null ? -1 : opts.minimumFractionDigits;\n"
    "            int maxFrac = opts == null ? -1 : opts.maximumFractionDigits;\n"
    "            boolean currency = opts != null && \"currency\".equals(opts.style);"
)


def apply_dcl02_format_intl_complex(text: str) -> tuple[str, int] | None:
    if not all(d in text for d in _FMTINTL_COMPLEX_DECLS):
        return None
    n = 0
    for d in _FMTINTL_COMPLEX_DECLS:
        text = text.replace(d + "\n", "", 1)
        n += 1
    for anchor, insert in _FMTINTL_ANCHORS:
        if anchor in text:
            text = text.replace(anchor, insert + anchor, 1)
            n += 1
    bad_cur = re.compile(
        r"^(\s*)boolean currency = opts != null && \"currency\"\.equals\(opts\.style\);$",
        re.M,
    )
    text, c = bad_cur.subn(_FMTINTL_CUR_REPL, text, count=1)
    n += c
    if '\n        if (lang.startsWith("ar")) {' in text:
        text = text.replace(
            '\n        if (lang.startsWith("ar")) {',
            '\n        if (lc.split("[-_]")[0].startsWith("ar")) {',
            1,
        )
        n += 1
    return text, n


def apply_dcl02_format_intl_simple(text: str) -> tuple[str, int] | None:
    g_decl = "        boolean grouped = opts == null || opts.useGrouping;\n"
    c_decl = '        boolean currency = opts != null && "currency".equals(opts.style);\n'
    min_frac = "        int minFrac = opts != null ? opts.minimumFractionDigits : (currency ? 2 : -1);"
    if g_decl not in text or c_decl not in text or min_frac not in text:
        return None
    n = 0
    text = text.replace(g_decl, "", 1)
    text = text.replace(c_decl, "", 1)
    n += 2
    if "        if (grouped) {" in text:
        text = text.replace(
            "        if (grouped) {",
            g_decl.strip() + "\n        if (grouped) {",
            1,
        )
        n += 1
    text = text.replace(
        min_frac,
        c_decl.strip() + "\n        " + min_frac.strip(),
        1,
    )
    n += 1
    return text, n
