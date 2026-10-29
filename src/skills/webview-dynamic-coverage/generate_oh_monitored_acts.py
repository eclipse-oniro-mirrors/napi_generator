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

_MON_PAGE_HEAD = f'''/**
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
'''

_MON_PAGE_TAIL = '''
            default: {{
              console.error('WebMonitoredBlankScreen unknown action: ' + this.str);
              break;
            }}
          }}
        }})
      }}

      Web({ src: this.mServer.getAssetUrl('dataSubmit.html'), controller: this.controller })
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


def _enum_code(name: str, default: int = 0) -> int:
    return ENUM_BY_NAME.get(name, default)


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
    cp = t.get("coverage_point_id", "")
    dim = t.get("dimension", "")
    if cp.startswith("BlankScreenReason.") and dim in ("I", "J"):
        member = cp.split(".")[1].split("#")[0]
        return str(_enum_code(member))
    if cp == "global.MonitoredBlankScreenEventInfo#I":
        return str(_enum_code("DNS_RESOLVE_FAILED"))
    if cp == "global.MonitoredBlankScreenEventInfo#J":
        return str(_enum_code("REQUEST_TIMED_OUT"))
    if cp == "MonitoredBlankScreenEventInfo.url#I":
        return "'https://oh-monitored-blank.test/url-i'"
    if cp == "MonitoredBlankScreenEventInfo.url#J":
        return "'https://oh-monitored-blank.test/page'"
    if cp == "MonitoredBlankScreenEventInfo.reason#I":
        return str(_enum_code("CERT_ERROR"))
    if cp == "MonitoredBlankScreenEventInfo.reason#J":
        return str(_enum_code("DNS_RESOLVE_FAILED"))
    if cp == "MonitoredBlankScreenEventInfo.extraMsg#I":
        return "'extra-msg-i'"
    if cp == "MonitoredBlankScreenEventInfo.extraMsg#J":
        return "'extra-msg-j'"
    if cp.startswith("WebAttribute.onMonitoredBlankScreen") and dim in ("I", "J", "K", "L", "M"):
        if dim == "J":
            return str(_enum_code("MAIN_DOC_EMPTY"))
        if dim == "K":
            return str(_enum_code("HTTP_4XX_ERROR"))
        return "true"
    if cp == "global.OnMonitorBlankScreenCallback#J":
        return str(_enum_code("OTHER_NETWORK_ERROR"))
    return "true"


def gen_page_switch_cases(tasks: list[dict]) -> str:
    import oh_monitored_switch as oms

    oms.ENUM_BY_NAME = ENUM_BY_NAME
    return "\n".join(
        oms.switch_case_for_task(t, EVENT_BASE + i, cp_action)
        for i, t in enumerate(tasks)
    )


def gen_page(tasks: list[dict]) -> str:
    switch = gen_page_switch_cases(tasks)
    return _MON_PAGE_HEAD + switch + _MON_PAGE_TAIL


def _gen_one_it(i: int, t: dict) -> str:
    cp = t.get("coverage_point_id", "")
    action = cp_action(cp)
    name = it_name(cp)
    eid = EVENT_BASE + i
    exp_js = expected_for_task(t)
    dim_name = t.get("dimension_name", "")
    return f'''    /**
     * @tc.name   {name}
     * @tc.number SUB_WEB_MONITORED_BLANK_{i + 1:04d}
     * @tc.desc   coverage {cp} ({dim_name})
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


def _test_file_preamble() -> str:
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

'''


def gen_test(tasks: list[dict]) -> str:
    body = "\n".join(_gen_one_it(i, t) for i, t in enumerate(tasks))
    return _test_file_preamble() + body + "\n  }})\n}}\n"


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
