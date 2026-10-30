# -*- coding: utf-8 -*-
"""Per-task switch-case snippets for WebMonitoredBlankScreen page generation."""

from __future__ import annotations

from typing import Callable

ENUM_BY_NAME: dict[str, int] = {}


def _enum(name: str, default: int = 0) -> int:
    return ENUM_BY_NAME.get(name, default)


def _case_block(action: str, body: str) -> str:
    return (
        f'            case "{action}": {{\n'
        f"{body}\n"
        f"              break;\n"
        f"            }}"
    )


def _emit_only(action: str, eid: int, expr: str) -> str:
    return _case_block(action, f"              Utils.emitEvent({expr}, {eid});")


def _invoke_cb(action: str, eid: int, url: str, reason: str, extra: str, payload: str) -> str:
    body = (
        f"              this.invokeMonitoredCallback({{\n"
        f"                url: '{url}',\n"
        f"                reason: {reason},\n"
        f"                extraMsg: '{extra}'\n"
        f"              }}, {eid}, {payload});"
    )
    return _case_block(action, body)


def _blank_reason_i(action: str, eid: int, cp: str, _dim: str) -> str:
    member = cp.split(".")[1].split("#")[0]
    return _emit_only(action, eid, f"BlankScreenReason.{member}")


def _blank_reason_j(action: str, eid: int, cp: str, _dim: str) -> str:
    member = cp.split(".")[1].split("#")[0]
    return _invoke_cb(
        action,
        eid,
        f"https://oh-monitored-blank.test/{member.lower()}",
        f"BlankScreenReason.{member}",
        "reason-j",
        str(_enum(member)),
    )


def _global_info_i(action: str, eid: int, _cp: str, _dim: str) -> str:
    return _case_block(
        action,
        f"              let info: MonitoredBlankScreenEventInfo = {{\n"
        f"                url: 'https://oh-monitored-blank.test/info-i',\n"
        f"                reason: BlankScreenReason.DNS_RESOLVE_FAILED,\n"
        f"                extraMsg: 'info-i'\n"
        f"              }};\n"
        f"              Utils.emitEvent(info.reason, {eid});",
    )


Handler = Callable[[str, int, str, str], str]

_EXACT_HANDLERS: dict[str, Handler] = {
        "global.MonitoredBlankScreenEventInfo#I": _global_info_i,
        "global.MonitoredBlankScreenEventInfo#J": lambda a, e, _c, _d: _invoke_cb(
            a,
            e,
            "https://oh-monitored-blank.test/info-j",
            "BlankScreenReason.REQUEST_TIMED_OUT",
            "info-j",
            "BlankScreenReason.REQUEST_TIMED_OUT",
        ),
        "MonitoredBlankScreenEventInfo.url#I": lambda a, e, _c, _d: _emit_only(
            a, e, "'https://oh-monitored-blank.test/url-i'"
        ),
        "MonitoredBlankScreenEventInfo.url#J": lambda a, e, _c, _d: _invoke_cb(
            a,
            e,
            "https://oh-monitored-blank.test/page",
            "BlankScreenReason.SSL_ERROR",
            "url-j",
            "'https://oh-monitored-blank.test/page'",
        ),
        "MonitoredBlankScreenEventInfo.reason#I": lambda a, e, _c, _d: _emit_only(
            a, e, "BlankScreenReason.CERT_ERROR"
        ),
        "MonitoredBlankScreenEventInfo.reason#J": lambda a, e, _c, _d: _invoke_cb(
            a,
            e,
            "https://oh-monitored-blank.test/reason-j",
            "BlankScreenReason.DNS_RESOLVE_FAILED",
            "reason-field-j",
            "BlankScreenReason.DNS_RESOLVE_FAILED",
        ),
        "MonitoredBlankScreenEventInfo.extraMsg#I": lambda a, e, _c, _d: _emit_only(
            a, e, "'extra-msg-i'"
        ),
        "MonitoredBlankScreenEventInfo.extraMsg#J": lambda a, e, _c, _d: _invoke_cb(
            a,
            e,
            "https://oh-monitored-blank.test/extra-j",
            "BlankScreenReason.PROXY_ERROR",
            "extra-msg-j",
            "'extra-msg-j'",
        ),
        "global.OnMonitorBlankScreenCallback#I": lambda a, e, _c, _d: _emit_only(
            a, e, "this.handleMonitoredBlank != null"
        ),
        "global.OnMonitorBlankScreenCallback#J": lambda a, e, _c, _d: _invoke_cb(
            a,
            e,
            "https://oh-monitored-blank.test/callback-j",
            "BlankScreenReason.OTHER_NETWORK_ERROR",
            "callback-j",
            "BlankScreenReason.OTHER_NETWORK_ERROR",
        ),
        "WebAttribute.onMonitoredBlankScreen#I": lambda a, e, _c, _d: _emit_only(a, e, "true"),
        "WebAttribute.onMonitoredBlankScreen#J": lambda a, e, _c, _d: _invoke_cb(
            a,
            e,
            "https://oh-monitored-blank.test/on-j",
            "BlankScreenReason.MAIN_DOC_EMPTY",
            "on-j",
            "BlankScreenReason.MAIN_DOC_EMPTY",
        ),
        "WebAttribute.onMonitoredBlankScreen#K": lambda a, e, _c, _d: _invoke_cb(
            a,
            e,
            "https://oh-monitored-blank.test/on-k",
            "BlankScreenReason.HTTP_4XX_ERROR",
            "on-k",
            "BlankScreenReason.HTTP_4XX_ERROR",
        ),
        "WebAttribute.onMonitoredBlankScreen#L": lambda a, e, _c, _d: _invoke_cb(
            a,
            e,
            "https://oh-monitored-blank.test/on-l",
            "BlankScreenReason.HTTP_5XX_ERROR",
            "on-l",
            "true",
        ),
        "WebAttribute.onMonitoredBlankScreen#M": lambda a, e, _c, _d: _emit_only(a, e, "true"),
    }


def switch_case_for_task(t: dict, eid: int, cp_action) -> str:
    _register_handlers()
    cp = t.get("coverage_point_id", "")
    dim = t.get("dimension", "")
    action = cp_action(cp)
    if cp.startswith("BlankScreenReason.") and dim == "I":
        return _blank_reason_i(action, eid, cp, dim)
    if cp.startswith("BlankScreenReason.") and dim == "J":
        return _blank_reason_j(action, eid, cp, dim)
    handler = _EXACT_HANDLERS.get(f"{cp}|{dim}")
    if handler:
        return handler(action, eid, cp, dim)
    return _emit_only(action, eid, "true")
