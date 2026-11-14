#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Java auto-fix helpers (part 3)."""
from __future__ import annotations

import re
from datetime import date
from pathlib import Path

from base import Hit
from java_common import *

def _fix_format_intl_complexity(text: str) -> tuple[str, int]:
    """G.MET.01/超大圈复杂度：复杂 formatIntl 拆出 formatPlain 辅助方法（≤50 行、圈复杂度 <20）。"""
    m = re.search(
        r"    private static String formatIntl\(int value, String locales, IntlOptions opts\) \{",
        text)
    if not m:
        return text, 0
    start = m.start()
    depth = 1
    i = m.end()
    in_str = False
    while i < len(text):
        ch = text[i]
        if ch == '"':
            in_str = not in_str
        elif not in_str:
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth <= 0:
                    break
        i += 1
    func = text[start:i + 1]
    # 仅处理复杂版（含 else 分支 + attachCurrency）
    if "attachCurrency" not in func or "compactDisplay" not in func:
        return text, 0
    new_func = _NEW_FORMAT_INTL
    return text[:start] + new_func.rstrip("\n") + text[i + 1:], 1


_NEW_FORMAT_INTL = (
    "    private static String formatIntl(int value, String locales, IntlOptions opts) {\n"
    "        String lc = locales == null ? \"en-US\" : locales.trim().toLowerCase(java.util.Locale.ROOT);\n"
    "        if (lc.isEmpty() || !isValidLocale(lc)) {\n"
    "            throw new RangeError(\"Invalid locale: \" + locales);\n"
    "            }\n"
    "        long amount = value;\n"
    "        boolean percent = opts != null && \"percent\".equals(opts.style);\n"
    "        if (percent) {\n"
    "            amount = (long) value * 100;\n"
    "            }\n"
    "        String notation = opts == null || opts.notation == null ? \"\" : opts.notation;\n"
    "        String body;\n"
    "        if (\"scientific\".equals(notation) || \"engineering\".equals(notation)) {\n"
    "            body = scientific(amount, \"engineering\".equals(notation));\n"
    "            } else if (\"compact\".equals(notation)) {\n"
    "            body = compact(amount, opts == null || opts.compactDisplay == null ? \"short\" : opts.compactDisplay);\n"
    "            } else {\n"
    "            body = formatPlain(amount, opts, lc, percent);\n"
    "            }\n"
    "        if (lc.split(\"[-_]\")[0].startsWith(\"ar\")) {\n"
    "            body = toArabicDigits(body);\n"
    "            }\n"
    "        return body;\n"
    "        }\n"
    "\n"
    "    private static String formatPlain(long amount, IntlOptions opts, String lc, boolean percent) {\n"
    "        int fracDigits = 0;\n"
    "        int minSig = opts == null ? 0 : opts.minimumSignificantDigits;\n"
    "        if (minSig > 0) {\n"
    "            int digits = Long.toString(Math.abs(amount)).length();\n"
    "            if (digits < minSig) {\n"
    "                fracDigits = minSig - digits;\n"
    "                }\n"
    "        }\n"
    "        int maxSig = opts == null ? 0 : opts.maximumSignificantDigits;\n"
    "        long amt = amount;\n"
    "        if (maxSig > 0) {\n"
    "            int digits = Long.toString(Math.abs(amount)).length();\n"
    "            if (digits > maxSig) {\n"
    "                long factor = pow10(digits - maxSig);\n"
    "                amt = Math.round(amount / (double) factor) * factor;\n"
    "                }\n"
    "        }\n"
    "        int minFrac = opts == null ? -1 : opts.minimumFractionDigits;\n"
    "        int maxFrac = opts == null ? -1 : opts.maximumFractionDigits;\n"
    "        boolean currency = opts != null && \"currency\".equals(opts.style);\n"
    "        if (currency) {\n"
    "            int curFrac = \"JPY\".equals(opts.currency) ? 0 : 2;\n"
    "            if (minFrac < 0) {\n"
    "                minFrac = curFrac;\n"
    "                }\n"
    "            if (maxFrac < 0) {\n"
    "                maxFrac = curFrac;\n"
    "                }\n"
    "        }\n"
    "        if (fracDigits == 0 && minFrac > 0) {\n"
    "            fracDigits = minFrac;\n"
    "            }\n"
    "        return formatPlainBody(amt, opts, lc, percent, fracDigits);\n"
    "        }\n"
    "\n"
    "    private static String formatPlainBody(long amount, IntlOptions opts, String lc, boolean percent, int fracDigits) {\n"
    "        String lang = lc.split(\"[-_]\")[0];\n"
    "        String groupSep = groupSeparator(lang);\n"
    "        boolean grouped = opts == null || opts.useGrouping;\n"
    "        String intPart = Long.toString(Math.abs(amount));\n"
    "        int minInt = opts == null ? 0 : opts.minimumIntegerDigits;\n"
    "        while (intPart.length() < minInt) {\n"
    "            intPart = \"0\" + intPart;\n"
    "            }\n"
    "        if (grouped && groupSep != null) {\n"
    "            intPart = groupDigits(intPart, groupSep);\n"
    "            }\n"
    "        String decSep = decimalSeparator(lang);\n"
    "        String body = (amount < 0 ? \"-\" : \"\") + intPart;\n"
    "        if (fracDigits > 0) {\n"
    "            body = body + decSep + \"0\".repeat(fracDigits);\n"
    "            }\n"
    "        if (percent) {\n"
    "            body = body + \"%\";\n"
    "            }\n"
    "        boolean currency = opts != null && \"currency\".equals(opts.style);\n"
    "        if (currency) {\n"
    "            String curDisplay = opts == null || opts.currencyDisplay == null ? \"\" : opts.currencyDisplay;\n"
    "            body = attachCurrency(body, opts.currency, curDisplay, lang);\n"
    "            }\n"
    "        return body;\n"
    "        }\n"
)


