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

suite('Parse_Enum_C_Suite_Ext16', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Enum_C_Suite_Ext16');
  /**
  * @tc.number : c_enum_0262
  * @tc.name : c_enum_0262
  * @tc.desc : h2dts parseEnum：扩充-R4-Token enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseEnum_c_ext_0262', () => {
    try {
      let objList: EnumObj[] | undefined;
            objList = parsec.parseEnum(`enum Token { T_INT, T_FLOAT, T_STRING, T_BOOL, T_NULL };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Token');
      assert.strictEqual(objList[0].members.length, 5);
          } catch (err) {
      assert.fail(`c_enum_0262 执行异常: ${String(err)}`);
    }
  });
});
