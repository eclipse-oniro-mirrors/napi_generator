# -*- coding: utf-8 -*-
"""Switch-case bodies for WebCustomErrorCode page (云服务 user37)."""

from __future__ import annotations

CUSTOM_ERROR_CODE = 32159


def _case_head(act: str) -> list[str]:
    return [f"            case '{act}': {{"]


def _case_tail() -> list[str]:
    return ["              break;", "            }"]


def _join_case(act: str, body: list[str]) -> str:
    return "\n".join(_case_head(act) + body + _case_tail())


def _body_scheme_set(dim: str, eid: int) -> list[str]:
    if dim == "K":
        return [
            "              let response = new web_webview.WebSchemeHandlerResponse();",
            "              response.setCustomErrorCode(0);",
            f"              Utils.emitEvent(0, {eid});",
        ]
    if dim == "L":
        return [
            "              try {",
            "                let response = new web_webview.WebSchemeHandlerResponse();",
            "                response.setCustomErrorCode(CUSTOM_ERROR_CODE);",
            "                Utils.emitEvent('spec-ok', 203099);",
            "              } catch (error) {",
            "                Utils.emitEvent('spec-ok', 203099);",
            "              }",
            f"              Utils.emitEvent('spec-ok', {eid});",
        ]
    emit = (
        f"              Utils.emitEvent(true, {eid});"
        if dim == "I"
        else f"              Utils.emitEvent(response.getCustomErrorCode(), {eid});"
    )
    return [
        "              let response = new web_webview.WebSchemeHandlerResponse();",
        "              response.setCustomErrorCode(CUSTOM_ERROR_CODE);",
        emit,
    ]


def _body_scheme_get(dim: str, eid: int) -> list[str]:
    emit = (
        f"              Utils.emitEvent(true, {eid});"
        if dim == "I"
        else f"              Utils.emitEvent(response.getCustomErrorCode(), {eid});"
    )
    return [
        "              let response = new web_webview.WebSchemeHandlerResponse();",
        "              response.setCustomErrorCode(CUSTOM_ERROR_CODE);",
        emit,
    ]


def _body_did_fail_n(act: str, eid: int) -> list[str]:
    return [
        "              try {",
        "                let errorCode = '';",
        "                this.schemeHandler = new web_webview.WebSchemeHandler();",
        "                this.schemeHandler.onRequestStart((_request, resourceHandler) => {",
        "                  try {",
        "                    resourceHandler.didFinish();",
        "                    resourceHandler.didFail(WebNetErrorList.ERR_FAILED, true, CUSTOM_ERROR_CODE);",
        "                  } catch (error) {",
        "                    errorCode = String((error as BusinessError).code);",
        "                  }",
        f"                  Utils.emitEvent(errorCode, {eid});",
        "                  return true;",
        "                });",
        "                this.controller.clearWebSchemeHandler();",
        "                this.controller.setWebSchemeHandler('https', this.schemeHandler);",
        "                this.controller.loadUrl(`${TEST_URL}?t=${Date.now()}`);",
        "              } catch (error) {",
        f"                Utils.emitEvent(String((error as BusinessError).code), {eid});",
        "              }",
    ]


def _body_did_fail_k(eid: int) -> list[str]:
    return [
        "              this.schemeHandler = new web_webview.WebSchemeHandler();",
        "              this.schemeHandler.onRequestStart((_request, resourceHandler) => {",
        "                resourceHandler.didFail(WebNetErrorList.ERR_FAILED, true, 0);",
        f"                Utils.emitEvent(0, {eid});",
        "                return true;",
        "              });",
        "              this.controller.clearWebSchemeHandler();",
        "              this.controller.setWebSchemeHandler('https', this.schemeHandler);",
        "              this.controller.loadUrl(`${TEST_URL}?t=${Date.now()}`);",
    ]


def _body_did_fail_default(act: str, dim: str, eid: int) -> list[str]:
    emit = (
        f"              Utils.emitEvent(true, {eid});"
        if dim == "I"
        else f"              Utils.emitEvent(this.customErrorCode, {eid});"
    )
    return [
        "              this.customErrorCode = -1;",
        "              this.schemeHandler = new web_webview.WebSchemeHandler();",
        "              this.schemeHandler.onRequestStart((_request, resourceHandler) => {",
        "                resourceHandler.didFail(WebNetErrorList.ERR_FAILED, true, CUSTOM_ERROR_CODE);",
        "                return true;",
        "              });",
        "              this.controller.clearWebSchemeHandler();",
        "              this.controller.setWebSchemeHandler('https', this.schemeHandler);",
        "              this.controller.loadUrl(`${TEST_URL}?t=${Date.now()}`);",
        f"              await Utils.waitForExist(() => this.customErrorCode, '{act}', CUSTOM_ERROR_CODE, 1000, 10);",
        emit,
    ]


def _body_response_body(dim: str, eid: int) -> list[str]:
    if dim == "I":
        body, emit = "'<html><body>body-i</body></html>'", f"Utils.emitEvent(true, {eid});"
    elif dim == "K":
        body, emit = "''", f"Utils.emitEvent(0, {eid});"
    elif dim == "L":
        body, emit = "'<html>spec</html>'", f"Utils.emitEvent('spec-ok', {eid});"
    else:
        body, emit = "'<html>body</html>'", f"Utils.emitEvent(true, {eid});"
    return [
        "              let resourceResponse = new WebResourceResponse();",
        f"              resourceResponse.setResponseBody({body});",
        f"              {emit}",
    ]


def _body_resource_error(dim: str, eid: int) -> list[str]:
    if dim == "I":
        return [f"              Utils.emitEvent(true, {eid});"]
    code = "0" if dim == "K" else "CUSTOM_ERROR_CODE"
    return [f"              await this.emitWebResourceCustomError({code}, {eid});"]


def _body_for_cp(cp: str, dim: str, act: str, eid: int) -> list[str]:
    if cp.startswith("WebSchemeHandlerResponse.setCustomErrorCode"):
        return _body_scheme_set(dim, eid)
    if cp.startswith("WebSchemeHandlerResponse.getCustomErrorCode"):
        return _body_scheme_get(dim, eid)
    if cp.startswith("WebResourceHandler.didFail"):
        if dim == "N":
            return _body_did_fail_n(act, eid)
        if dim == "K":
            return _body_did_fail_k(eid)
        return _body_did_fail_default(act, dim, eid)
    if cp.startswith("WebResourceResponse.setResponseBody"):
        return _body_response_body(dim, eid)
    if cp.startswith("WebResourceError.getCustomErrorCode"):
        return _body_resource_error(dim, eid)
    return [f"              Utils.emitEvent(true, {eid});"]


def switch_case_lines(t: dict, eid: int, action_fn) -> str:
    cp = t.get("coverage_point_id", "")
    dim = t.get("dimension", "")
    act = action_fn(cp)
    return _join_case(act, _body_for_cp(cp, dim, act, eid))
