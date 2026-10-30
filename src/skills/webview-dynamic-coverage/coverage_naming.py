#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Derive Hypium it() names from webview-dynamic coverage_point_id (aligned with generators)."""

from __future__ import annotations

import re


def it_name_cloud(coverage_point_id: str) -> str:
    s = coverage_point_id.replace(".", "_").replace("#", "_")
    return "testWebviewDynamic_" + re.sub(r"[^A-Za-z0-9_]", "_", s)[:80]


def it_name_oh(coverage_point_id: str) -> str:
    s = coverage_point_id.replace(".", "_").replace("#", "_")
    return "testMonitoredBlank_" + re.sub(r"[^A-Za-z0-9_]", "_", s)[:90]


def it_name_for_task(task: dict) -> str:
    cp = task["coverage_point_id"]
    cat = task.get("category_d") or ""
    if cat == "OH":
        return it_name_oh(cp)
    return it_name_cloud(cp)
