#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Java code gate scan/fix (orchestrator)."""
from __future__ import annotations

from collections.abc import Callable
from pathlib import Path

from base import Hit
from java_common import collect_java_files, EXCLUDE_DIRS
from java_scan_cmt import *
from java_scan_nam import *
from java_scan_fmt import *
from java_fix_1 import *
from java_fix_2 import *
from java_fix_3 import *

__all__ = ["collect_java_files", "EXCLUDE_DIRS", "scan_java_file", "fix_java_file"]

_TextScan = Callable[[str, Path], list[Hit]]
_LinesScan = Callable[[list[str], Path], list[Hit]]


def _extend_text(hits: list[Hit], text: str, fp: Path, fns: list[_TextScan]) -> None:
    for fn in fns:
        hits.extend(fn(text, fp))


def _extend_lines(hits: list[Hit], lines: list[str], fp: Path, fns: list[_LinesScan]) -> None:
    for fn in fns:
        hits.extend(fn(lines, fp))


def scan_java_file(fp: Path, text: str) -> list[Hit]:
    lines = text.splitlines()
    hits: list[Hit] = []
    _extend_lines(hits, lines, fp, [_scan_unused_imports])
    _extend_text(hits, text, fp, [_scan_class_javadoc, _scan_fmt06, _scan_fmt09, _scan_fmt13])
    _extend_text(hits, text, fp, [_scan_fmt14, _scan_fmt05, _scan_fmt10])
    _extend_lines(hits, lines, fp, [_scan_fmt06_extra, _scan_fmt02, _scan_fmt18, _scan_cmt06])
    _extend_lines(hits, lines, fp, [_scan_cmt03_tc, _scan_cmt03_tag_blank, _scan_fmt09_ctrl_empty_stmt])
    _extend_text(hits, text, fp, [_scan_fmt13_brace_open_stmt, _scan_fmt20_long_suffix])
    _extend_lines(hits, lines, fp, [_scan_typ05_float_eq, _scan_cmt06_dup_javadoc])
    _extend_text(hits, text, fp, [
        _scan_fmt13_spaces,
        _scan_fmt08_tabs,
        _scan_typ06_nan_cmp,
        _scan_typ05_float_cmp,
        _scan_prm10_temp_return,
        _scan_fmt07_empty_block,
        _scan_fmt09_brace_stmt,
        _scan_fmt06_lambda_brace_semi,
        _scan_nam01_dollar,
        _scan_nam06_local_upper,
        _scan_fmt06_catch_own_line,
        _scan_cmt06_star_space,
        _scan_ctl01_logical,
        _scan_met01_method_len,
        _scan_exp03_coalesce,
        _scan_cmt03_param_return,
        _scan_cmt01_public_field,
        _scan_nam03,
        _scan_typ08,
        _scan_typ05,
        _scan_met03,
        _scan_obj01,
        _scan_cmt03,
        _scan_catch_rt,
        _scan_err05,
        _scan_dollar_params,
    ])
    _extend_lines(hits, lines, fp, [_scan_obj04, _scan_dcl02, _scan_public_javadoc])
    _extend_lines(hits, lines, fp, [_scan_interface_method_javadoc])
    return hits


def _run_fix(text: str, fn: Callable[..., tuple[str, int]], fp: Path) -> tuple[str, int]:
    try:
        return fn(text, fp)  # type: ignore[call-arg]
    except TypeError:
        return fn(text)  # type: ignore[call-arg]


def _fix_java_stage_a(text: str, fp: Path) -> tuple[str, int]:
    fixed = 0
    steps = (
        _fix_fmt02_blank_lines,
        _fix_class_javadoc,
        _fix_fmt18_block_comment_indent,
        _fix_javadoc_star_align,
        _fix_fmt06_remove_test_wrapper,
    )
    for fn in steps:
        text, n = fn(text)  # type: ignore[call-arg]
        fixed += n
    for _ in range(5):
        text, n = _fix_formatting(text)
        fixed += n
        if n == 0:
            break
    for fn in (
        _fix_fmt13_brace_open_stmt,
        _fix_fmt09_ctrl_empty_stmt,
        _fix_cmt03_expand_javadoc,
        _fix_interface_method_javadoc,
        _fix_catch_rt,
        _fix_catch_simple_name_mismatch,
        _ensure_error_imports,
        _fix_dollar_names,
        _fix_underscore_lambda_params,
        _fix_obj04_shadow_fields,
        _fix_dcl02_format_intl,
        _fix_dcl02_copywithin_to,
        _fix_dcl02_null_before_assert,
        _fix_broken_helper_javadoc,
        _fix_fmt10_wrap_lines,
    ):
        text, n = fn(text)  # type: ignore[call-arg]
        fixed += n
    return text, fixed


def _fix_java_stage_b(text: str, fp: Path) -> tuple[str, int]:
    fixed = 0
    for fn in (
        _fix_cmt06_blank_before_jdoc,
        _fix_cmt06_dup_javadoc,
        _fix_cmt03_tc_desc,
        _fix_cmt03_empty_line_before_tags,
        _fix_fmt05_add_braces,
        _fix_nam03_class_name,
        _fix_nam01_dollar_method,
        _fix_nam06_local_upper,
        _fix_nam06_static_final,
        _fix_fmt06_catch_own_line,
        _fix_cmt06_star_space,
        _fix_typ08_locale,
        _fix_typ05_infinity,
        _fix_typ05_float_eq,
        _fix_typ05_float_cmp,
        _fix_typ06_nan_cmp,
        _fix_fmt20_long_suffix,
        _fix_met03_locale_param,
        _fix_met03_param_assign,
    ):
        text, n = fn(text)  # type: ignore[call-arg]
        fixed += n
    for fn in (_fix_obj01_public_fields, _fix_obj01_inner_class_fields):
        text, n = fn(text, fp)  # type: ignore[call-arg]
        fixed += n
    text, n = _fix_fmt10_wrap_lines(text)
    fixed += n
    return text, fixed


def _fix_java_common_block(text: str, fp: Path) -> tuple[str, int]:
    if "common" not in fp.parts:
        return text, 0
    fixed = 0
    text, n = _fix_common_view_javadoc(text)
    fixed += n
    if fp.name == "BasTest.java":
        text, n = _fix_bas_test_throw_helper(text)
        fixed += n
        text, n = _fix_bas_test_javadoc(text, fp)
        fixed += n
    text, n = _fix_common_public_method_javadoc(text, fp)
    fixed += n
    return text, fixed


def _fix_java_stage_c(text: str, fp: Path) -> tuple[str, int]:
    fixed = 0
    text, n = _fix_java_common_block(text, fp)
    fixed += n
    for fn in (
        _fix_err05_throw_test_error,
        _fix_err05_void_forEach_return,
        _fix_err05_throw_factory,
        _fix_out_of_memory_javadoc,
        _fix_cmt01_public_field_javadoc,
        _fix_cmt01_interface_javadoc,
        _fix_cmt03_param_return,
        _fix_obj05_assert_equal,
        _fix_obj05_set_boxed,
        _fix_obj05_wrapper_calls,
        _fix_prm10_temp_return,
        _fix_fmt07_empty_block,
        _fix_unindented_class_member,
        _fix_fmt09_brace_stmt,
        _fix_fmt06_lambda_brace_semi,
        _fix_ctl01_decimal_separator,
        _fix_exp03_coalesce_double,
        _fix_fmt13_spaces,
        _fix_fmt08_tabs,
        _fix_fmt04_blank_before_ctor,
        _fix_fmt04_member_order,
        _fix_obj01_intl_options,
    ):
        text, n = _run_fix(text, fn, fp)
        fixed += n
    if "common" in fp.parts:
        text, n = _fix_format_intl_complexity(text)
        fixed += n
    text, n = _fix_fmt04_member_order(text, fp)
    fixed += n
    for fn in (
        _fix_fmt10_wrap_lines,
        _fix_fmt13_spaces,
        _fix_javadoc_star_align,
        _fix_fmt18_javadoc_indent,
        _fix_cmt06_dup_javadoc,
        _fix_cmt03_empty_line_before_tags,
    ):
        text, n = fn(text)  # type: ignore[call-arg]
        fixed += n
    return text, fixed


def fix_java_file(fp: Path, text: str) -> tuple[str, int]:
    fixed = 0
    for stage in (_fix_java_stage_a, _fix_java_stage_b, _fix_java_stage_c):
        text, n = stage(text, fp)
        fixed += n
    lines = text.splitlines()
    lines, n = _fix_remove_imports(lines)
    fixed += n
    text = "\n".join(lines)
    if text and not text.endswith("\n"):
        text += "\n"
    return text, fixed