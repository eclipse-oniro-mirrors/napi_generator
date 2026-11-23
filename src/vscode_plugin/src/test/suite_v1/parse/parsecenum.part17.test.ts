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

suite('Parse_Enum_C_Suite_Ext17', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Enum_C_Suite_Ext17');
  /**
  * @tc.number : c_enum_0263
  * @tc.name : c_enum_0263
  * @tc.desc : h2dts parseEnum：扩充-R5-运算符 enum 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseEnum_c_ext_0263', () => {
    try {
      let objList: EnumObj[] | undefined;
            objList = parsec.parseEnum(`enum R5Op { OP_ADD, OP_SUB, OP_MUL, OP_DIV, OP_MOD };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'R5Op');
      assert.strictEqual(objList[0].members.length, 5);
          } catch (err) {
      assert.fail(`c_enum_0263 执行异常: ${String(err)}`);
    }
  });
});
