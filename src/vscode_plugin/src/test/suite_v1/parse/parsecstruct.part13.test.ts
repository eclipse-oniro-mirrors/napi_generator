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

suite('Parse_C_Struct_Suite_Ext13', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Struct_Suite_Ext13');
  /**
  * @tc.number : c_struct_0203
  * @tc.name : c_struct_0203
  * @tc.desc : h2dts parseStruct：扩充-R5-3x3 矩阵 struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_c_ext_0203', () => {
    try {
      let objList: StructObj[] | undefined;
            objList = parsec.parseStruct(`struct R5Mat3 { double m[3][3]; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'R5Mat3');
      assert.strictEqual(objList[0].members.length, 1);
          } catch (err) {
      assert.fail(`c_struct_0203 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_struct_0204
  * @tc.name : c_struct_0204
  * @tc.desc : h2dts parseStruct：扩充-R5-矩形 struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_c_ext_0204', () => {
    try {
      let objList: StructObj[] | undefined;
            objList = parsec.parseStruct(`struct R5Rect { int x, y, w, h; int area() const; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'R5Rect');
      assert.strictEqual(objList[0].members.length, 1);
          } catch (err) {
      assert.fail(`c_struct_0204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_struct_0205
  * @tc.name : c_struct_0205
  * @tc.desc : h2dts parseStruct：扩充-R5-主机 struct 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_c_ext_0205', () => {
    try {
      let objList: StructObj[] | undefined;
            objList = parsec.parseStruct(`typedef struct { char name[64]; int ports[8]; } R5Host;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'R5Host');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_struct_0205 执行异常: ${String(err)}`);
    }
  });
});
