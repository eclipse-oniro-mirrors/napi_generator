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

suite('Parse_C_Struct_Suite_Ext11', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Struct_Suite_Ext11');
  /**
  * @tc.number : c_struct_0198
  * @tc.name : c_struct_0198
  * @tc.desc : h2dts parseStruct：扩充-R3-3D 点 struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_c_ext_0198', () => {
    try {
      let objList: StructObj[] | undefined;
            objList = parsec.parseStruct(`struct Point3D { double x, y, z; double length(); };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Point3D');
      assert.strictEqual(objList[0].members.length, 1);
          } catch (err) {
      assert.fail(`c_struct_0198 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_struct_0199
  * @tc.name : c_struct_0199
  * @tc.desc : h2dts parseStruct：扩充-R3-日期 struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_c_ext_0199', () => {
    try {
      let objList: StructObj[] | undefined;
            objList = parsec.parseStruct(`typedef struct { int year; int month; int day; } Date;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Date');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_struct_0199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_struct_0200
  * @tc.name : c_struct_0200
  * @tc.desc : h2dts parseStruct：扩充-R3-二叉树节点 struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_c_ext_0200', () => {
    try {
      let objList: StructObj[] | undefined;
            objList = parsec.parseStruct(`struct TreeNode { int key; TreeNode* left; TreeNode* right; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'TreeNode');
      assert.strictEqual(objList[0].members.length, 3);
          } catch (err) {
      assert.fail(`c_struct_0200 执行异常: ${String(err)}`);
    }
  });
});
