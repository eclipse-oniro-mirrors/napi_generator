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

suite('Parse_C_Union_Suite_Ext09', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Union_Suite_Ext09');
  /**
  * @tc.number : c_union_0113
  * @tc.name : c_union_0113
  * @tc.desc : h2dts parseUnion：扩充-R4-16字节 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0113', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`union Dual { int i; double d; char bytes[16]; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Dual');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_union_0113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0114
  * @tc.name : c_union_0114
  * @tc.desc : h2dts parseUnion：扩充-R4-三数值 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0114', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`typedef union { float f; int i; long l; } NumericU;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NumericU');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_union_0114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0115
  * @tc.name : c_union_0115
  * @tc.desc : h2dts parseUnion：扩充-R4-指针整型 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0115', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`union PtrOrInt { void* ptr; intptr_t val; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'PtrOrInt');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_union_0115 执行异常: ${String(err)}`);
    }
  });
});
