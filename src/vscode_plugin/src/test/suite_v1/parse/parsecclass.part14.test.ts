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

suite('Parse_Class_C_Suite_Ext14', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Class_C_Suite_Ext14');
  /**
  * @tc.number : c_class_0261
  * @tc.name : c_class_0261
  * @tc.desc : h2dts parseClass：扩充-R4-Service 类 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0261', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(`class Service { public: int id; std::string name; bool start(); void stop(); };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Service');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].functionList.length, 2);
          } catch (err) {
      assert.fail(`c_class_0261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_class_0262
  * @tc.name : c_class_0262
  * @tc.desc : h2dts parseClass：扩充-R4-Buffer 类 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0262', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(`class Buffer { char* data; size_t len; size_t cap; void resize(size_t n); };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Buffer');
      assert.strictEqual(objList[0].variableList.length, 3);
      assert.strictEqual(objList[0].functionList.length, 1);
          } catch (err) {
      assert.fail(`c_class_0262 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_class_0263
  * @tc.name : c_class_0263
  * @tc.desc : h2dts parseClass：扩充-R4-Pair 类 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0263', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(`class Pair { int first; int second; int sum() const; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Pair');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].functionList.length, 1);
          } catch (err) {
      assert.fail(`c_class_0263 执行异常: ${String(err)}`);
    }
  });
});
