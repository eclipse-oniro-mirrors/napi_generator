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

suite('Parse_C_Union_Suite_Ext08', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Union_Suite_Ext08');
  /**
  * @tc.number : c_union_0111
  * @tc.name : c_union_0111
  * @tc.desc : h2dts parseUnion：扩充-R3-Variant union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0111', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`union Variant { int i; double d; std::string s; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Variant');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_union_0111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0112
  * @tc.name : c_union_0112
  * @tc.desc : h2dts parseUnion：扩充-R3-字节数组 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0112', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`typedef union { unsigned char bytes[4]; int value; } Bytes4;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Bytes4');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_union_0112 执行异常: ${String(err)}`);
    }
  });
});
