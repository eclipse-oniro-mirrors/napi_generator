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

suite('Parse_C_Struct_Suite_Ext12', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Struct_Suite_Ext12');
  /**
  * @tc.number : c_struct_0201
  * @tc.name : c_struct_0201
  * @tc.desc : h2dts parseStruct：扩充-R4-RGBA struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_c_ext_0201', () => {
    try {
      let objList: StructObj[] | undefined;
            objList = parsec.parseStruct(`struct RGBA { uint8_t r, g, b, a; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'RGBA');
      assert.strictEqual(objList[0].members.length, 1);
          } catch (err) {
      assert.fail(`c_struct_0201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_struct_0202
  * @tc.name : c_struct_0202
  * @tc.desc : h2dts parseStruct：扩充-R4-TimeVal struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_c_ext_0202', () => {
    try {
      let objList: StructObj[] | undefined;
            objList = parsec.parseStruct(`struct TimeVal { long sec; long usec; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TimeVal');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_struct_0202 执行异常: ${String(err)}`);
    }
  });
});
