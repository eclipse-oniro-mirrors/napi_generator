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

suite('Parse_C_Func_Suite_Ext24', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext24');
  /**
  * @tc.number : c_func_1153
  * @tc.name : c_func_1153
  * @tc.desc : h2dts parseFunction：扩充-template 函数声明 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1153', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`template<typename T> T tplMax(T a, T b);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'tplMax');
          } catch (err) {
      assert.fail(`c_func_1153 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1154
  * @tc.name : c_func_1154
  * @tc.desc : h2dts parseFunction：扩充-constexpr 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1154', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`constexpr int square(int x);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'square');
          } catch (err) {
      assert.fail(`c_func_1154 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1155
  * @tc.name : c_func_1155
  * @tc.desc : h2dts parseFunction：扩充-noexcept 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1155', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void noexceptFunc() noexcept;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'noexceptFunc');
          } catch (err) {
      assert.fail(`c_func_1155 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1156
  * @tc.name : c_func_1156
  * @tc.desc : h2dts parseFunction：扩充-iterator 双参数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1156', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void withIterator(std::vector<int>::iterator begin, std::vector<int>::iterator end);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'withIterator');
          } catch (err) {
      assert.fail(`c_func_1156 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1157
  * @tc.name : c_func_1157
  * @tc.desc : h2dts parseFunction：扩充-map<vector> 引用返回 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1157', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`std::string process(std::map<std::string, std::vector<int>>& data);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'process');
          } catch (err) {
      assert.fail(`c_func_1157 执行异常: ${String(err)}`);
    }
  });
});
