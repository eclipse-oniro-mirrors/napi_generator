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

suite('Parse_C_Func_Suite_Ext25', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext25');
  /**
  * @tc.number : c_func_1158
  * @tc.name : c_func_1158
  * @tc.desc : h2dts parseFunction：扩充-R2-inline 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1158', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`inline int fastAdd(int a, int b);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'fastAdd');
          } catch (err) {
      assert.fail(`c_func_1158 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1159
  * @tc.name : c_func_1159
  * @tc.desc : h2dts parseFunction：扩充-R2-static 函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1159', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`static void localHelper(int x);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'localHelper');
          } catch (err) {
      assert.fail(`c_func_1159 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1160
  * @tc.name : c_func_1160
  * @tc.desc : h2dts parseFunction：扩充-R2-纯虚函数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1160', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`virtual void onEvent(int code) = 0;`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'onEvent');
          } catch (err) {
      assert.fail(`c_func_1160 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1161
  * @tc.name : c_func_1161
  * @tc.desc : h2dts parseFunction：扩充-R2-vector 引用参数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1161', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`std::vector<int> filter(const std::vector<int>& input, int threshold);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'filter');
          } catch (err) {
      assert.fail(`c_func_1161 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1162
  * @tc.name : c_func_1162
  * @tc.desc : h2dts parseFunction：扩充-R2-initializer_list 参数 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1162', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`void batch(std::initializer_list<int> values);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'batch');
          } catch (err) {
      assert.fail(`c_func_1162 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1163
  * @tc.name : c_func_1163
  * @tc.desc : h2dts parseFunction：扩充-R2-trailing return 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1163', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`auto deduce(int x) -> decltype(x + 1);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'decltype');
          } catch (err) {
      assert.fail(`c_func_1163 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_func_1164
  * @tc.name : c_func_1164
  * @tc.desc : h2dts parseFunction：扩充-R2-pair 返回 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_c_ext_1164', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parsec.parseFunction(`std::pair<int, std::string> makePair(int id, const std::string& name);`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'makePair');
          } catch (err) {
      assert.fail(`c_func_1164 执行异常: ${String(err)}`);
    }
  });
});
