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

suite('Parse_C_Union_Suite_Ext05', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Union_Suite_Ext05');
  /**
  * @tc.number : c_union_0100
  * @tc.name : c_union_0100
  * @tc.desc : h2dts parseUnion：扩充-typedef union 简写 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0100', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`typedef union { int i; float f; } FloatIntUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FloatIntUnion');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_union_0100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0101
  * @tc.name : c_union_0101
  * @tc.desc : h2dts parseUnion：扩充-三成员 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0101', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`union Named { char c; int i; double d; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Named');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_union_0101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0102
  * @tc.name : c_union_0102
  * @tc.desc : h2dts parseUnion：扩充-匿名 struct 成员 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0102', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`typedef union { struct { int x, y; } pt; int alias; } PointUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'pt');
      assert.strictEqual(objList[0].members.length, 1);
          } catch (err) {
      assert.fail(`c_union_0102 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0103
  * @tc.name : c_union_0103
  * @tc.desc : h2dts parseUnion：扩充-long long 成员 union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0103', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`union U { long long ll; double d; char bytes[8]; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'U');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_union_0103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_union_0104
  * @tc.name : c_union_0104
  * @tc.desc : h2dts parseUnion：扩充-bool+int+string* union 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseUnion_c_ext_0104', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parsec.parseUnion(`typedef union { bool flag; int value; std::string* str; } MixedUnion;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'MixedUnion');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_union_0104 执行异常: ${String(err)}`);
    }
  });
});
