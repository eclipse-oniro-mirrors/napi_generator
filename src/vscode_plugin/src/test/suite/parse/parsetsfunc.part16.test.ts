/*
* Copyright (c) 2026 Shenzhen Kaihong Digital Industry Development Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import * as assert from 'assert';
import * as vscode from 'vscode';
import { doParseTs } from '../../../parse/parsets';
import { ParseObj } from '../../../gen/datatype';

suite('Parse_Func_TS_Suite_Ext16', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Func_TS_Suite_Ext16');
  /**
  * @tc.number : dts2cpp_func_0659
  * @tc.name : dts2cpp_func_0659
  * @tc.desc : dts2cpp func 扩充-R5-$ `$$` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0659', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseR5659.ts', `function \$\$(sel: string): Element { return null as any; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs || parseObj.classes);
      const funcItem = parseObj.funcs!.find(f => f.name === '$$');
      assert.ok(funcItem);
      assert.strictEqual(funcItem!.name, '$$');
          } catch (err) {
      assert.fail(`dts2cpp_func_0659 执行异常: ${String(err)}`);
    }
  });
});
