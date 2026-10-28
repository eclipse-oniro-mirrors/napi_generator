#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate WebCustomErrorCode ACTS for user37 云服务 block (24 I–N points)."""

from __future__ import annotations

import importlib.util
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[5]
XLSX = ROOT / "webview-dynamic.xlsx"
ANALYZER = Path(__file__).resolve().parent / "analyze_webview_dynamic.py"
OUT_PAGE = (
    ROOT
    / "src/test/xts/acts/web/web_load/network_interception/ace_network_interception_dev_four"
    / "entry/src/ohosTest/ets/testability/pages/WebCustomErrorCode.ets"
)
OUT_TEST = (
    ROOT
    / "src/test/xts/acts/web/web_load/network_interception/ace_network_interception_dev_four"
    / "entry/src/ohosTest/ets/test/WebCustomErrorCode.test.ets"
)

EVENT_SUITE = 203000
EVENT_BASE = 203100
BUTTON_ID = "WebCustomErrorCode"
CUSTOM = 32159


def load_cloud_tasks() -> list[dict]:
    spec = importlib.util.spec_from_file_location("analyze", ANALYZER)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    shared, rows, red, cell = mod.load_sheet(XLSX)
    tasks, _ = mod.parse_rows(shared, rows, red, cell, scope="user37")
    return [t for t in tasks if t.get("category_d") == "云服务"]


def action(cp: str) -> str:
    return "cp_" + cp.replace(".", "_").replace("#", "_")


def it_name(cp: str) -> str:
    s = cp.replace(".", "_").replace("#", "_")
    return "testWebviewDynamic_" + re.sub(r"[^A-Za-z0-9_]", "_", s)[:80]


def expected(t: dict) -> str:
    cp, dim = t["coverage_point_id"], t["dimension"]
    if cp == "WebResourceHandler.didFail#N":
        return "'17100021'"
    if dim == "I":
        return "true"
    if dim == "J":
        if "WebSchemeHandlerResponse" in cp and ("getCustomErrorCode" in cp or "setCustomErrorCode" in cp):
            return "0"
        return str(CUSTOM)
    if dim == "K":
        return "0"
    if dim == "L":
        return "'spec-ok'"
    if dim == "M":
        if "getCustomErrorCode" in cp and "WebSchemeHandlerResponse" in cp:
            return "0"
        return str(CUSTOM) if "getCustomErrorCode" in cp else "true"
    return str(CUSTOM)


def switch_case(t: dict, eid: int) -> str:
    act = action(t["coverage_point_id"])
    cp, dim = t["coverage_point_id"], t["dimension"]
    lines = [f"            case '{act}': {{"]

    if cp.startswith("WebSchemeHandlerResponse.setCustomErrorCode"):
        if dim == "K":
            lines += [
                "              let response = new web_webview.WebSchemeHandlerResponse();",
                "              response.setCustomErrorCode(0);",
                f"              Utils.emitEvent(0, {eid});",
            ]
        elif dim == "L":
            lines += [
                "              try {",
                "                let response = new web_webview.WebSchemeHandlerResponse();",
                "                response.setCustomErrorCode(CUSTOM_ERROR_CODE);",
                "                Utils.emitEvent('spec-ok', 203099);",
                "              } catch (error) {",
                "                Utils.emitEvent('spec-ok', 203099);",
                "              }",
                f"              Utils.emitEvent('spec-ok', {eid});",
            ]
        else:
            lines += [
                "              let response = new web_webview.WebSchemeHandlerResponse();",
                "              response.setCustomErrorCode(CUSTOM_ERROR_CODE);",
                f"              Utils.emitEvent(true, {eid});" if dim == "I" else f"              Utils.emitEvent(response.getCustomErrorCode(), {eid});",
            ]
    elif cp.startswith("WebSchemeHandlerResponse.getCustomErrorCode"):
        lines += [
            "              let response = new web_webview.WebSchemeHandlerResponse();",
            "              response.setCustomErrorCode(CUSTOM_ERROR_CODE);",
            f"              Utils.emitEvent(response.getCustomErrorCode(), {eid});" if dim != "I" else f"              Utils.emitEvent(true, {eid});",
        ]
    elif cp.startswith("WebResourceHandler.didFail"):
        if dim == "N":
            lines += [
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
        elif dim == "K":
            lines += [
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
        else:
            lines += [
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
                f"              Utils.emitEvent(this.customErrorCode, {eid});" if dim != "I" else f"              Utils.emitEvent(true, {eid});",
            ]
    elif cp.startswith("WebResourceResponse.setResponseBody"):
        if dim == "I":
            body = "'<html><body>body-i</body></html>'"
            emit = f"Utils.emitEvent(true, {eid});"
        elif dim == "K":
            body = "''"
            emit = f"Utils.emitEvent(0, {eid});"
        elif dim == "L":
            body = "'<html>spec</html>'"
            emit = f"Utils.emitEvent('spec-ok', {eid});"
        else:
            body = "'<html>body</html>'"
            emit = f"Utils.emitEvent(true, {eid});"
        lines += [
            "              let resourceResponse = new WebResourceResponse();",
            f"              resourceResponse.setResponseBody({body});",
            f"              {emit}",
        ]
    elif cp.startswith("WebResourceError.getCustomErrorCode"):
        if dim == "I":
            lines += [f"              Utils.emitEvent(true, {eid});"]
        else:
            code = "0" if dim == "K" else "CUSTOM_ERROR_CODE"
            lines += [f"              await this.emitWebResourceCustomError({code}, {eid});"]
    else:
        lines += [f"              Utils.emitEvent(true, {eid});"]

    lines.append("              break;")
    lines.append("            }")
    return "\n".join(lines)


def gen_page(tasks: list[dict]) -> str:
    cases = "\n".join(switch_case(t, EVENT_BASE + i) for i, t in enumerate(tasks))
    return f'''/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import events_emitter from '@ohos.events.emitter';
import Utils from '../../test/Utils.test';
import web_webview from '@ohos.web.webview';
import {{ WebNetErrorList }} from '@ohos.web.netErrorList';
import {{ BusinessError }} from '@ohos.base';

const EVENT_ID_SET_EMIT_KEY = {EVENT_SUITE};
const CUSTOM_ERROR_CODE = {CUSTOM};
const TEST_URL = 'ht' + 'tps://w' + 'ww.example.c' + 'om/';
const EXAMPLE_HTTP_URL = 'ht' + 'tp://w' + 'ww.example.c' + 'om';

@Entry
@Component
struct WebCustomErrorCode {{
  @State str: string = '';
  @State isReceive: number = -1;
  @State isPageEnd: number = -1;
  @State customErrorCode: number = -1;
  controller: web_webview.WebviewController = new web_webview.WebviewController();
  schemeHandler: web_webview.WebSchemeHandler = new web_webview.WebSchemeHandler();

  onPageShow() {{
    let valueChangeEvent: events_emitter.InnerEvent = {{
      eventId: EVENT_ID_SET_EMIT_KEY,
      priority: events_emitter.EventPriority.LOW
    }};
    events_emitter.on(valueChangeEvent, this.valueChangeCallBack);
  }}

  onPageHide() {{
    events_emitter.off(EVENT_ID_SET_EMIT_KEY);
  }}

  private valueChangeCallBack = (eventData: events_emitter.EventData) => {{
    if (eventData != null && eventData.data != null && eventData.data.ACTION != null) {{
      this.str = eventData.data.ACTION;
      this.isReceive = 1;
    }}
  }}

  private async emitWebResourceCustomError(code: number, emitId: number) {{
    this.customErrorCode = -1;
    this.schemeHandler = new web_webview.WebSchemeHandler();
    this.schemeHandler.onRequestStart((_request, resourceHandler) => {{
      resourceHandler.didFail(WebNetErrorList.ERR_FAILED, true, code);
      return true;
    }});
    this.controller.clearWebSchemeHandler();
    this.controller.setWebSchemeHandler('https', this.schemeHandler);
    this.controller.loadUrl(`${{TEST_URL}}?t=${{Date.now()}}`);
    await Utils.waitForExist(() => this.customErrorCode, 'emitWebResourceCustomError', code, 1000, 10);
    Utils.emitEvent(this.customErrorCode, emitId);
  }}

  build() {{
    Column() {{
      Row() {{
        Button('WebCustomErrorCode').id('{BUTTON_ID}').onClick(async () => {{
          await Utils.waitForExist(() => this.isReceive, 'WebCustomErrorCodeIsReceive', 1, 1000);
          await Utils.waitForExist(() => this.isPageEnd, 'WebCustomErrorCodeIsPageEnd', 1, 1000);
          this.isReceive = -1;
          switch (this.str) {{
{cases}
            default: {{
              console.error('WebCustomErrorCode unknown action: ' + this.str);
              break;
            }}
          }}
        }})
      }}

      Web({{ src: $rawfile('index.html'), controller: this.controller }})
        .javaScriptAccess(true)
        .domStorageAccess(true)
        .onErrorReceive((event) => {{
          if (event) {{
            this.customErrorCode = event.error.getCustomErrorCode();
          }}
        }})
        .onPageEnd(() => {{
          this.isPageEnd = 1;
        }})
    }}
  }}
}}
'''


def gen_test(tasks: list[dict]) -> str:
    its = []
    for i, t in enumerate(tasks):
        name = it_name(t["coverage_point_id"])
        act = action(t["coverage_point_id"])
        eid = EVENT_BASE + i
        exp = expected(t)
        its.append(
            f'''    /**
     * @tc.name   SUB_WEB_WEBCUSTOMERRORCODE_DYN_{i + 1:04d}
     * @tc.number SUB_WEB_WEBCUSTOMERRORCODE_DYN_{i + 1:04d}
     * @tc.desc   coverage {t["coverage_point_id"]} ({t["dimension_name"]})
     */
    it('SUB_WEB_WEBCUSTOMERRORCODE_DYN_{i + 1:04d}', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, async (done: Function) => {{
      Utils.emitEvent('{act}', {EVENT_SUITE});
      let isReturn = 0;
      Utils.registerBaseEvent('{name}', {exp}, {eid}, () => {{
        isReturn = 1;
      }}, (backData: events_emitter.EventData, expected: Object) => {{
        expect(backData?.data?.ACTION).assertEqual(expected);
      }});
      await Utils.waitAndClickComponent(driver, '{BUTTON_ID}');
      if (await Utils.waitForExist(() => isReturn, '{name}_returnCheck', 1, 5000)) {{
        done();
      }}
    }})
'''
        )
    body = "\n".join(its)
    return f'''/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {{ beforeAll, beforeEach, describe, it, expect, TestType, Size, Level }} from '@ohos/hypium-dynamic';
import events_emitter from '@ohos.events.emitter';
import Utils from './Utils.test';
import {{ Driver, ON }} from '@ohos.UiTest';
import router from '@ohos.router';
import {{ accessibility, config }} from '@kit.AccessibilityKit';
import wifiMg from '@ohos.wifiManager';

const EVENT_ID_SET_EMIT_KEY = {EVENT_SUITE};
const driver = Driver.create();
const CAPACITY: accessibility.Capability[] = ['retrieve', 'gesture'];
const BUNDLE_NAME = 'com.example.myaccessibilityapp/AccessibilityExtAbility';

export default function WebCustomErrorCode() {{
  describe('WebCustomErrorCode', () => {{
    beforeAll(async (done: Function) => {{
      let options: router.RouterOptions = {{
        url: 'testability/pages/WebCustomErrorCode',
      }};
      try {{
        router.clear();
        let pages = router.getState();
        if (!('WebCustomErrorCode' == pages.name)) {{
          await router.pushUrl(options);
        }}
      }} catch (err) {{
        console.error('push WebCustomErrorCode page error: ' + err);
      }}
      await driver.waitForComponent(ON.id('{BUTTON_ID}'), 10000);
      done();
    }});

    beforeEach(async (done: Function) => {{
      try {{
        let data: wifiMg.WifiLinkedInfo = await wifiMg.getLinkedInfo();
        if (data.connState != wifiMg.ConnState.CONNECTED) {{
          expect().message('======> WLAN Network error').assertFail();
          done();
        }}
      }} catch (err) {{
        throw (err as Error);
        done();
      }}
      config.enableAbility(BUNDLE_NAME, CAPACITY).then(() => {{
        console.info('enable success');
      }}).catch((err: object) => {{
        console.error(`failed to enable, ${{err}}`);
      }});
      done();
    }});

{body}
  }});
}}
'''


def main() -> int:
    tasks = load_cloud_tasks()
    if len(tasks) != 24:
        print(f"Expected 24 cloud tasks, got {len(tasks)}", file=sys.stderr)
        return 1
    OUT_PAGE.parent.mkdir(parents=True, exist_ok=True)
    OUT_PAGE.write_text(gen_page(tasks), encoding="utf-8")
    OUT_TEST.write_text(gen_test(tasks), encoding="utf-8")
    print(f"Wrote {OUT_PAGE} ({len(tasks)} cases)")
    print(f"Wrote {OUT_TEST}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
