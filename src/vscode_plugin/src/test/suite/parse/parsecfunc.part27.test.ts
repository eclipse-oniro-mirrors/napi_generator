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

suite('Parse_C_Func_Suite_Ext27', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext27');
  /**
  * @tc.number : c_func_1169
  * @tc.name : c_func_1169
  * @tc.desc : h2dts parseFunction：扩充-R3-template 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1169', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`template<typename T> T r3max(T a, T b);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r3max');
          } catch (err) {
      assert.fail(`c_func_1169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1170
  * @tc.name : c_func_1170
  * @tc.desc : h2dts parseFunction：扩充-R3-constexpr 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1170', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`constexpr int r3square(int x);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r3square');
          } catch (err) {
      assert.fail(`c_func_1170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1171
  * @tc.name : c_func_1171
  * @tc.desc : h2dts parseFunction：扩充-R3-noexcept 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1171', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`noexcept void r3safe(int x) noexcept;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r3safe');
          } catch (err) {
      assert.fail(`c_func_1171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1172
  * @tc.name : c_func_1172
  * @tc.desc : h2dts parseFunction：扩充-R3-nodiscard 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1172', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`[[nodiscard]] bool r3check(int code);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'r3check');
          } catch (err) {
      assert.fail(`c_func_1172 执行异常: ${String(err)}`);
    }
  });
});
