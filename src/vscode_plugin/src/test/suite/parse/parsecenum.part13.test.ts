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
import * as parsec from '../../../parse/parsec';

suite('Parse_Enum_C_Suite_Ext13', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Enum_C_Suite_Ext13');
  /**
  * @tc.number : c_enum_0257
  * @tc.name : c_enum_0257
  * @tc.desc : h2dts parseEnum：扩充-R2-状态机 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseEnum_c_ext_0257', () => {
    try {
      let objList: EnumObj[] | undefined;
            objList = parsec.parseEnum(`typedef enum { STATE_IDLE, STATE_RUNNING, STATE_DONE } State;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'State');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_enum_0257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_enum_0258
  * @tc.name : c_enum_0258
  * @tc.desc : h2dts parseEnum：扩充-R2-RGB hex enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseEnum_c_ext_0258', () => {
    try {
      let objList: EnumObj[] | undefined;
            objList = parsec.parseEnum(`enum Color { RED = 0xFF0000, GREEN = 0x00FF00, BLUE = 0x0000FF };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Color');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_enum_0258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_enum_0259
  * @tc.name : c_enum_0259
  * @tc.desc : h2dts parseEnum：扩充-R2-namespace enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseEnum_c_ext_0259', () => {
    try {
      let objList: EnumObj[] | undefined;
            objList = parsec.parseEnum(`namespace colors { enum Shade { Light, Dark }; }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Shade');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_enum_0259 执行异常: ${String(err)}`);
    }
  });
});
