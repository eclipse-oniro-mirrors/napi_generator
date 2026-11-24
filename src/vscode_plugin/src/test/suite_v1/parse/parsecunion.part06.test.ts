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

suite('Parse_C_Union_Suite_Ext06', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Union_Suite_Ext06');
  /**
  * @tc.number : c_union_0105
  * @tc.name : c_union_0105
  * @tc.desc : h2dts parseUnion：扩充-R2-整型族 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0105', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`typedef union { short s; int i; long l; } IntUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'IntUnion');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_union_0105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0106
  * @tc.name : c_union_0106
  * @tc.desc : h2dts parseUnion：扩充-R2-指针族 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0106', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`union PtrUnion { void* p; int* ip; char* cp; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'PtrUnion');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_union_0106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0107
  * @tc.name : c_union_0107
  * @tc.desc : h2dts parseUnion：扩充-R2-浮点族 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0107', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`typedef union { float f; double d; long double ld; } FloatUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FloatUnion');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_union_0107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0108
  * @tc.name : c_union_0108
  * @tc.desc : h2dts parseUnion：扩充-R2-string 族 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0108', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`typedef union { std::string s; std::wstring ws; } StringUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StringUnion');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_union_0108 执行异常: ${String(err)}`);
    }
  });
});
