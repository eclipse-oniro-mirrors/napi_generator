#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""需求1：静态项目测试套件启动方式与动态同步——由 beforeAll 启动 ability 改为在 ability 中启动测试套件。

对静态项目（如 abilitymonitorstatic）：
1. 主模块新增 ets/testability/TestAbility.ets（镜像动态项目 TestAbility，onCreate 里 hypiumTest(testsuite)）
2. module.json5 注册 TestAbility
3. testrunner onRun 改为 aa start 拉起 TestAbility（镜像动态 runner）
4. 用例文件的 beforeAll 启动 ability 逻辑随用例同步一并移除（见 sync_test_cases.py）

用法：python3 setup_testability.py <static_proj> <bundle_name>
"""
import re
import sys
from pathlib import Path

TEST_ABILITY_TPL = """'use static';
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
import abilityDelegatorRegistry from '@ohos.app.ability.abilityDelegatorRegistry';
import UIAbility from '@ohos.app.ability.UIAbility';
import Want from '@ohos.app.ability.Want';
import AbilityConstant from '@ohos.app.ability.AbilityConstant';
import window from '@ohos.window';
import hilog from '@ohos.hilog';
import { Hypium } from '../../../hypium/index';
import testsuite from '../../src/test/List.test';

let domain: int = 0x0000; //日志标识,0x0000作为测试框架的业务标识
let tag: string = 'testTag'; //日志标识字符串,作为tag标识当前runner类下的测试行为

export default class TestAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(domain, tag, '%{public}s', 'TestAbility onCreate');
    let abilityDelegator: abilityDelegatorRegistry.AbilityDelegator =
      abilityDelegatorRegistry.getAbilityDelegator();
    let abilityDelegatorArguments: abilityDelegatorRegistry.AbilityDelegatorArgs =
      abilityDelegatorRegistry.getArguments();
    hilog.info(domain, tag, '%{public}s', 'start run testcase!!!');
    Hypium.hypiumTest(abilityDelegator, abilityDelegatorArguments, testsuite);
  }

  onDestroy(): void {
    hilog.info(domain, tag, '%{public}s', 'TestAbility onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    hilog.info(domain, tag, '%{public}s', 'TestAbility onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err) => {
      if (err && err.code) {
        hilog.error(domain, tag, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
        return;
      }
      hilog.info(domain, tag, '%{public}s', 'Succeeded in loading the content.');
    });
  }

  onWindowStageDestroy(): void {
    hilog.info(domain, tag, '%{public}s', 'TestAbility onWindowStageDestroy');
  }

  onForeground(): void {
    hilog.info(domain, tag, '%{public}s', 'TestAbility onForeground');
  }

  onBackground(): void {
    hilog.info(domain, tag, '%{public}s', 'TestAbility onBackground');
  }
}
"""

RUNNER_TPL = """'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import abilityDelegatorRegistry from '@ohos.app.ability.abilityDelegatorRegistry';
import { TestRunner } from '@kit.TestKit';
import hilog from '@ohos.hilog';
import { BusinessError } from '@ohos.base';

let abilityDelegator: abilityDelegatorRegistry.AbilityDelegator;
let abilityDelegatorArguments: abilityDelegatorRegistry.AbilityDelegatorArgs;

let domain: int = 0x0000; //日志标识,0x0000作为测试框架的业务标识
let tag: string = 'testTag'; //日志标识字符串,作为tag标识当前runner类下的测试行为

export class OpenHarmonyTestRunner implements TestRunner {
  constructor() {}

  public onPrepare: () => void = () => {
    hilog.info(domain, tag, '%{public}s', 'OpenHarmonyTestRunner OnPrepare');
    abilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();
  }

  public onRun: () => void = () => {
    hilog.info(domain, tag, '%{public}s', 'OpenHarmonyTestRunner onRun');

    abilityDelegatorArguments = abilityDelegatorRegistry.getArguments();
    abilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();
    let cmd = 'aa start -d 0 -a TestAbility -b {BUNDLE}';
    let debug = abilityDelegatorArguments.parameters['-D'];
    if (debug == 'true') {
      cmd += ' -D';
    }
    let user = abilityDelegatorArguments.parameters["-u"];
    if (user !== undefined) {
      cmd += ' -u ' + user;
    }
    hilog.info(domain, tag, '%{public}s', 'cmd : ' + cmd);
    abilityDelegator.executeShellCommand(cmd, (err: BusinessError<void> | null,
      data: abilityDelegatorRegistry.ShellCmdResult | undefined): void => {
      hilog.info(domain, tag, 'executeShellCommand : err : %{public}s', JSON.stringify(err) ?? '');
      hilog.info(domain, tag, 'executeShellCommand : data : %{public}s', data?.stdResult ?? '');
    });
    hilog.info(domain, tag, '%{public}s', 'OpenHarmonyTestRunner onRun end');
  }
}
"""


def setup(proj: str, bundle: str) -> None:
    root = Path(proj)
    ta_dir = root / "entry/src/main/ets/testability"
    ta_dir.mkdir(parents=True, exist_ok=True)
    ta_file = ta_dir / "TestAbility.ets"
    if not ta_file.exists():
        ta_file.write_text(TEST_ABILITY_TPL, encoding="utf-8")
        print(f"created {ta_file}")

    # module.json5 注册 TestAbility
    mj = root / "entry/src/main/module.json5"
    txt = mj.read_text(encoding="utf-8")
    if "TestAbility" not in txt:
        # 在 EntryAbility 块之后插入 TestAbility
        needle = '        "name": "EntryAbility",'
        idx = txt.index(needle)
        # 找到 EntryAbility 块结束：从 idx 向后找行尾 "      }," 或 "      }"（skills 闭合后的 ability 闭合）
        import re as _re
        m = _re.search(r"\n(      \},?)\n", txt[idx:])
        if not m:
            raise SystemExit("cannot find EntryAbility block end")
        end = idx + m.start(1)
        insert = ('      },\n'
                  '      {\n'
                  '        "name": "TestAbility",\n'
                  '        "srcEntry": "./ets/testability/TestAbility.ets",\n'
                  '        "description": "$string:MainAbility_desc",\n'
                  '        "icon": "$media:layered_image",\n'
                  '        "label": "$string:MainAbility_desc",\n'
                  '        "exported": true,\n'
                  '        "startWindowIcon": "$media:startIcon",\n'
                  '        "startWindowBackground": "$color:start_window_background"\n'
                  '      },')
        txt = txt[:end] + insert + txt[end + len("      },\n"):]
        mj.write_text(txt, encoding="utf-8")
        print(f"registered TestAbility in {mj}")
    else:
        print(f"TestAbility already in {mj}")

    # testrunner 重写
    runner = root / "entry/src/main/src/testrunner/OpenHarmonyTestRunner.ets"
    if runner.exists():
        runner.write_text(RUNNER_TPL.replace("{BUNDLE}", bundle), encoding="utf-8")
        print(f"rewrote {runner}")
    else:
        print(f"[WARN] runner not found: {runner}")


if __name__ == "__main__":
    setup(sys.argv[1], sys.argv[2])
