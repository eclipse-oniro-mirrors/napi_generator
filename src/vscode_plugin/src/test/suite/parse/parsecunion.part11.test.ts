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

suite('Parse_C_Union_Suite_Ext11', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Union_Suite_Ext11');
  /**
  * @tc.number : c_union_0120
  * @tc.name : c_union_0120
  * @tc.desc : h2dts parseUnion：扩充-R5-32字节 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0120', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`union R5U1 { int i; double d; char bytes[32]; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'R5U1');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_union_0120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0121
  * @tc.name : c_union_0121
  * @tc.desc : h2dts parseUnion：扩充-R5-多宽度 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0121', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`typedef union { short s; int i; long l; long long ll; } R5Wide;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'R5Wide');
      assert.strictEqual(objList[0].members.length, 4);
          } catch (err) {
      assert.fail(`c_union_0121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0122
  * @tc.name : c_union_0122
  * @tc.desc : h2dts parseUnion：扩充-R5-指针地址 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0122', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`union R5Ptr { void* p; uintptr_t addr; char raw[8]; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'R5Ptr');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_union_0122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0123
  * @tc.name : c_union_0123
  * @tc.desc : h2dts parseUnion：扩充-R5-颜色 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0123', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`typedef union { float rgb[3]; uint32_t packed; } R5Color;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'R5Color');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_union_0123 执行异常: ${String(err)}`);
    }
  });
});
