#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate WebMonitoredBlankScreen ACTS page + tests for user37 OH block."""

from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[5]
XLSX = ROOT / "webview-dynamic.xlsx"
ANALYZER = Path(__file__).resolve().parent / "analyze_webview_dynamic.py"

OUT_PAGE = (
    ROOT
    / "src/test/xts/acts/web/DFX/system_events/entry/src/ohosTest/ets/testability/pages/WebMonitoredBlankScreen.ets"
)
OUT_TEST = (
    ROOT
    / "src/test/xts/acts/web/DFX/system_events/entry/src/ohosTest/ets/test/WebMonitoredBlankScreen.test.ets"
)

EVENT_SUITE = 127200
EVENT_BASE = 127300
BUTTON_ID = "WebMonitoredBlankScreenButton"

ENUM_MEMBERS = [
    ("DNS_RESOLVE_FAILED", 101),
    ("REQUEST_TIMED_OUT", 102),
    ("CONNECTION_REFUSED", 103),
    ("CONNECTION_RESET", 104),
    ("SSL_ERROR", 105),
    ("CERT_ERROR", 106),
    ("INTERNET_DISCONNECTED", 107),
    ("REDIRECT_LOOP", 108),
    ("PROXY_ERROR", 109),
    ("OTHER_NETWORK_ERROR", 199),
    ("MAIN_DOC_EMPTY", 201),
    ("HTTP_4XX_ERROR", 202),
    ("HTTP_5XX_ERROR", 203),
    ("JS_GLOBAL_BUNDLE_LOAD_FAILED", 210),
    ("CSS_LOAD_FAILED", 211),
    ("MULTI_RESOURCE_LOAD_FAILED", 212),
    ("CORS_BLOCKED", 213),
    ("CSP_BLOCKED", 214),
    ("MIXED_CONTENT_BLOCKED", 215),
    ("JS_RUNTIME_ERROR", 301),
    ("NO_FIRST_CONTENTFUL_PAINT", 312),
    ("RENDERER_CRASHED", 401),
    ("RENDERER_KILLED", 402),
    ("GPU_PROCESS_CRASHED", 403),
    ("GPU_PROCESS_WATCHDOG_TIMEOUT", 404),
    ("WEB_VIEW_ZERO_SIZE", 501),
]
ENUM_BY_NAME = dict(ENUM_MEMBERS)


def load_oh_tasks() -> list[dict]:
    proc = subprocess.run(
        [sys.executable, str(ANALYZER), str(XLSX), "--scope", "user37", "--md", "/dev/null"],
        capture_output=True,
        text=True,
        check=True,
    )
    # analyzer prints md to stdout when --md is /dev/null it still writes md - check code
    # use inline parse instead
    import importlib.util

    spec = importlib.util.spec_from_file_location("analyze", ANALYZER)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    shared, rows, red_font_ids, cell_font = mod.load_sheet(XLSX)
    tasks, _ = mod.parse_rows(shared, rows, red_font_ids, cell_font, scope="user37")
    return [t for t in tasks if t.get("category_d") == "OH"]


def cp_action(cp_id: str) -> str:
    return "cp_" + cp_id.replace(".", "_").replace("#", "_")


def it_name(cp_id: str) -> str:
    s = cp_id.replace(".", "_").replace("#", "_")
    return "testMonitoredBlank_" + re.sub(r"[^A-Za-z0-9_]", "_", s)[:90]


def expected_for_task(t: dict) -> str:
    cp = t["coverage_point_id"]
    dim = t["dimension"]
    if cp.startswith("BlankScreenReason.") and dim in ("I", "J"):
        member = cp.split(".")[1].split("#")[0]
        return str(ENUM_BY_NAME[member])
    if cp == "global.MonitoredBlankScreenEventInfo#I":
        return str(ENUM_BY_NAME["DNS_RESOLVE_FAILED"])
    if cp == "global.MonitoredBlankScreenEventInfo#J":
        return str(ENUM_BY_NAME["REQUEST_TIMED_OUT"])
    if cp == "MonitoredBlankScreenEventInfo.url#I":
        return "'https://oh-monitored-blank.test/url-i'"
    if cp == "MonitoredBlankScreenEventInfo.url#J":
        return "'https://oh-monitored-blank.test/page'"
    if cp == "MonitoredBlankScreenEventInfo.reason#I":
        return str(ENUM_BY_NAME["CERT_ERROR"])
    if cp == "MonitoredBlankScreenEventInfo.reason#J":
        return str(ENUM_BY_NAME["DNS_RESOLVE_FAILED"])
    if cp == "MonitoredBlankScreenEventInfo.extraMsg#I":
        return "'extra-msg-i'"
    if cp == "MonitoredBlankScreenEventInfo.extraMsg#J":
        return "'extra-msg-j'"
    if cp.startswith("WebAttribute.onMonitoredBlankScreen") and dim in ("I", "J", "K", "L", "M"):
        if dim == "J":
            return str(ENUM_BY_NAME["MAIN_DOC_EMPTY"])
        if dim == "K":
            return str(ENUM_BY_NAME["HTTP_4XX_ERROR"])
        return "true"
    if cp == "global.OnMonitorBlankScreenCallback#J":
        return str(ENUM_BY_NAME["OTHER_NETWORK_ERROR"])
    return "true"


def gen_page_switch_cases(tasks: list[dict]) -> str:
    lines: list[str] = []
    for t in tasks:
        action = cp_action(t["coverage_point_id"])
        cp = t["coverage_point_id"]
        dim = t["dimension"]
        eid = EVENT_BASE + tasks.index(t)
        if cp.startswith("BlankScreenReason.") and dim == "I":
            member = cp.split(".")[1].split("#")[0]
            lines.append(
                f'            case "{action}": {{\n'
                f"              Utils.emitEvent(BlankScreenReason.{member}, {eid});\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp.startswith("BlankScreenReason.") and dim == "J":
            member = cp.split(".")[1].split("#")[0]
            val = ENUM_BY_NAME[member]
            lines.append(
                f'            case "{action}": {{\n'
                f"              this.invokeMonitoredCallback({{\n"
                f"                url: 'https://oh-monitored-blank.test/{member.lower()}',\n"
                f"                reason: BlankScreenReason.{member},\n"
                f"                extraMsg: 'reason-j'\n"
                f"              }}, {eid}, {val});\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "global.MonitoredBlankScreenEventInfo#I":
            lines.append(
                f'            case "{action}": {{\n'
                f"              let info: MonitoredBlankScreenEventInfo = {{\n"
                f"                url: 'https://oh-monitored-blank.test/info-i',\n"
                f"                reason: BlankScreenReason.DNS_RESOLVE_FAILED,\n"
                f"                extraMsg: 'info-i'\n"
                f"              }};\n"
                f"              Utils.emitEvent(info.reason, {eid});\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "global.MonitoredBlankScreenEventInfo#J":
            lines.append(
                f'            case "{action}": {{\n'
                f"              this.invokeMonitoredCallback({{\n"
                f"                url: 'https://oh-monitored-blank.test/info-j',\n"
                f"                reason: BlankScreenReason.REQUEST_TIMED_OUT,\n"
                f"                extraMsg: 'info-j'\n"
                f"              }}, {eid}, BlankScreenReason.REQUEST_TIMED_OUT);\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "MonitoredBlankScreenEventInfo.url#I":
            lines.append(
                f'            case "{action}": {{\n'
                f"              let urlSample: string = 'https://oh-monitored-blank.test/url-i';\n"
                f"              Utils.emitEvent(urlSample, {eid});\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "MonitoredBlankScreenEventInfo.url#J":
            lines.append(
                f'            case "{action}": {{\n'
                f"              this.invokeMonitoredCallback({{\n"
                f"                url: 'https://oh-monitored-blank.test/page',\n"
                f"                reason: BlankScreenReason.SSL_ERROR,\n"
                f"                extraMsg: 'url-j'\n"
                f"              }}, {eid}, 'https://oh-monitored-blank.test/page');\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "MonitoredBlankScreenEventInfo.reason#I":
            lines.append(
                f'            case "{action}": {{\n'
                f"              Utils.emitEvent(BlankScreenReason.CERT_ERROR, {eid});\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "MonitoredBlankScreenEventInfo.reason#J":
            lines.append(
                f'            case "{action}": {{\n'
                f"              this.invokeMonitoredCallback({{\n"
                f"                url: 'https://oh-monitored-blank.test/reason-j',\n"
                f"                reason: BlankScreenReason.DNS_RESOLVE_FAILED,\n"
                f"                extraMsg: 'reason-field-j'\n"
                f"              }}, {eid}, BlankScreenReason.DNS_RESOLVE_FAILED);\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "MonitoredBlankScreenEventInfo.extraMsg#I":
            lines.append(
                f'            case "{action}": {{\n'
                f"              Utils.emitEvent('extra-msg-i', {eid});\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "MonitoredBlankScreenEventInfo.extraMsg#J":
            lines.append(
                f'            case "{action}": {{\n'
                f"              this.invokeMonitoredCallback({{\n"
                f"                url: 'https://oh-monitored-blank.test/extra-j',\n"
                f"                reason: BlankScreenReason.PROXY_ERROR,\n"
                f"                extraMsg: 'extra-msg-j'\n"
                f"              }}, {eid}, 'extra-msg-j');\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "global.OnMonitorBlankScreenCallback#I":
            lines.append(
                f'            case "{action}": {{\n'
                f"              Utils.emitEvent(this.handleMonitoredBlank != null, {eid});\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "global.OnMonitorBlankScreenCallback#J":
            lines.append(
                f'            case "{action}": {{\n'
                f"              this.invokeMonitoredCallback({{\n"
                f"                url: 'https://oh-monitored-blank.test/callback-j',\n"
                f"                reason: BlankScreenReason.OTHER_NETWORK_ERROR,\n"
                f"                extraMsg: 'callback-j'\n"
                f"              }}, {eid}, BlankScreenReason.OTHER_NETWORK_ERROR);\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "WebAttribute.onMonitoredBlankScreen#I":
            lines.append(
                f'            case "{action}": {{\n'
                f"              Utils.emitEvent(true, {eid});\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "WebAttribute.onMonitoredBlankScreen#J":
            lines.append(
                f'            case "{action}": {{\n'
                f"              this.invokeMonitoredCallback({{\n"
                f"                url: 'https://oh-monitored-blank.test/on-j',\n"
                f"                reason: BlankScreenReason.MAIN_DOC_EMPTY,\n"
                f"                extraMsg: 'on-j'\n"
                f"              }}, {eid}, BlankScreenReason.MAIN_DOC_EMPTY);\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "WebAttribute.onMonitoredBlankScreen#K":
            lines.append(
                f'            case "{action}": {{\n'
                f"              this.invokeMonitoredCallback({{\n"
                f"                url: 'https://oh-monitored-blank.test/on-k',\n"
                f"                reason: BlankScreenReason.HTTP_4XX_ERROR,\n"
                f"                extraMsg: 'on-k'\n"
                f"              }}, {eid}, BlankScreenReason.HTTP_4XX_ERROR);\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "WebAttribute.onMonitoredBlankScreen#L":
            lines.append(
                f'            case "{action}": {{\n'
                f"              this.invokeMonitoredCallback({{\n"
                f"                url: 'https://oh-monitored-blank.test/on-l',\n"
                f"                reason: BlankScreenReason.HTTP_5XX_ERROR,\n"
                f"                extraMsg: 'on-l'\n"
                f"              }}, {eid}, true);\n"
                f"              break;\n"
                f"            }}"
            )
        elif cp == "WebAttribute.onMonitoredBlankScreen#M":
            lines.append(
                f'            case "{action}": {{\n'
                f"              Utils.emitEvent(true, {eid});\n"
                f"              break;\n"
                f"            }}"
            )
        else:
            lines.append(
                f'            case "{action}": {{\n'
                f"              Utils.emitEvent(true, {eid});\n"
                f"              break;\n"
                f"            }}"
            )
    return "\n".join(lines)


def gen_page(tasks: list[dict]) -> str:
    switch = gen_page_switch_cases(tasks)
    return f'''/**
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
import webView from '@ohos.web.webview';
import {{
  BlankScreenDetectionEventInfo,
  BlankScreenReason,
  MonitoredBlankScreenEventInfo,
}} from '@ohos.arkui.component';
import {{ XtsTestServer }} from 'library';
import Utils from '../../test/Utils.test';

const EVENT_ID_SET_SUITE_KEY = {EVENT_SUITE};

@Entry
@Component
struct WebMonitoredBlankScreen {{
  controller: webView.WebviewController = new webView.WebviewController();
  mServer: XtsTestServer = new XtsTestServer(getContext(this), false);
  @State str: string = '';
  @State isReceive: number = -1;
  @State onMonitoredRegistered: boolean = false;
  lastMonitoredEvent: MonitoredBlankScreenEventInfo | null = null;

  onPageShow() {{
    let valueChangeEvent: events_emitter.InnerEvent = {{
      eventId: EVENT_ID_SET_SUITE_KEY,
      priority: events_emitter.EventPriority.LOW
    }}
    events_emitter.on(valueChangeEvent, this.valueChangeCallBack)
  }}

  onPageHide() {{
    events_emitter.off(EVENT_ID_SET_SUITE_KEY)
  }}

  aboutToDisappear() {{
    try {{
      this.controller.loadUrl(this.mServer.getShutdownUrl());
    }} catch (_e) {{
    }}
  }}

  private handleMonitoredBlank = (event: MonitoredBlankScreenEventInfo) => {{
    this.onMonitoredRegistered = true;
    this.lastMonitoredEvent = event;
  }}

  private invokeMonitoredCallback(
    event: MonitoredBlankScreenEventInfo,
    emitId: number,
    payload: string | number | boolean
  ) {{
    this.handleMonitoredBlank(event);
    Utils.emitEvent(payload, emitId);
  }}

  private valueChangeCallBack = (eventData: events_emitter.EventData) => {{
    if (eventData?.data?.ACTION != null) {{
      this.str = eventData.data.ACTION;
      this.isReceive = 1;
    }}
  }}

  build() {{
    Column() {{
      Row() {{
        Button("web click").key('{BUTTON_ID}').onClick(async () => {{
          await Utils.waitForExist(() => this.isReceive, this.str + ' isReceive', 1, 1000);
          switch (this.str) {{
{switch}
            default: {{
              console.error('WebMonitoredBlankScreen unknown action: ' + this.str);
              break;
            }}
          }}
        }})
      }}

      Web({{ src: this.mServer.getAssetUrl('dataSubmit.html'), controller: this.controller }})
        .javaScriptAccess(true)
        .onDetectedBlankScreen((_event: BlankScreenDetectionEventInfo) => {{
          this.onMonitoredRegistered = true;
        }})
        .onMonitoredBlankScreen((event: MonitoredBlankScreenEventInfo) => {{
          this.handleMonitoredBlank(event);
        }})
        .onPageEnd(() => {{
          console.info('WebMonitoredBlankScreen onPageEnd');
        }})
    }}
  }}
}}
'''


def gen_test(tasks: list[dict]) -> str:
    its: list[str] = []
    for i, t in enumerate(tasks):
        action = cp_action(t["coverage_point_id"])
        name = it_name(t["coverage_point_id"])
        eid = EVENT_BASE + i
        exp_js = expected_for_task(t)
        its.append(
            f'''    /**
     * @tc.name   {name}
     * @tc.number SUB_WEB_MONITORED_BLANK_{i + 1:04d}
     * @tc.desc   coverage {t["coverage_point_id"]} ({t["dimension_name"]})
     */
    it('{name}', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, async (done: Function) => {{
      Utils.emitEvent("{action}", {EVENT_SUITE});
      let isReturn = false;
      Utils.registerEvent("{name}", {exp_js}, {eid}, (err: Error) => {{
        if (!err) {{
          isReturn = true;
        }}
      }});
      Utils.waitAndClickComponent(driver, "{BUTTON_ID}", "{name}");
      try {{
        await Utils.waitForExist(() => isReturn, "{name}_returnCheck", true, 1000);
      }} catch (err) {{
        console.error('Utils.waitForExist error: ' + JSON.stringify(err));
      }}
      expect(isReturn).assertTrue();
      done();
    }})
'''
        )
    body = "\n".join(its)
    return f'''/**
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

import {{ afterEach, beforeAll, beforeEach, describe, it, expect, TestType, Size, Level }} from '@ohos/hypium';
import router from '@ohos.router';
import Utils from './Utils.test';
import {{ accessibility, config }} from '@kit.AccessibilityKit';
import {{ Driver, ON }} from '@kit.TestKit';

const CAPACITY: accessibility.Capability[] = ['retrieve', 'gesture'];
const BUNDLE_NAME = 'com.example.myaccessibilityapp/AccessibilityExtAbility';
const driver = Driver.create();

export default function webMonitoredBlankScreen() {{
  describe('WebMonitoredBlankScreenTest', () => {{
    beforeAll(async (done: Function) => {{
      let options: router.RouterOptions = {{
        url: 'testability/pages/WebMonitoredBlankScreen',
      }}
      try {{
        router.clear();
        let pages = router.getState();
        if (!("WebMonitoredBlankScreen" == pages.name)) {{
          await router.pushUrl(options);
          await driver.waitForComponent(ON.id("{BUTTON_ID}"), 10000);
        }}
      }} catch (err) {{
        console.error("push WebMonitoredBlankScreen page error: " + err);
      }}
      done()
    }});
    beforeEach(async (done: Function) => {{
      config.enableAbility(BUNDLE_NAME, CAPACITY).then(() => {{
        console.info(`enable success`);
      }}).catch((err: object) => {{
        console.error(`failed to enable, ${{err}}`);
      }})
      done();
    }})

{body}
  }})
}}
'''


def main() -> int:
    tasks = load_oh_tasks()
    if len(tasks) != 67:
        print(f"Expected 67 OH tasks, got {len(tasks)}", file=sys.stderr)
        return 1
    OUT_PAGE.parent.mkdir(parents=True, exist_ok=True)
    OUT_PAGE.write_text(gen_page(tasks), encoding="utf-8")
    OUT_TEST.write_text(gen_test(tasks), encoding="utf-8")
    print(f"Wrote {OUT_PAGE} ({len(tasks)} cases)")
    print(f"Wrote {OUT_TEST}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
