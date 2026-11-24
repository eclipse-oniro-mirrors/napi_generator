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

suite('Parse_Class_C_Suite_Ext16', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Class_C_Suite_Ext16');
  /**
  * @tc.number : c_class_0267
  * @tc.name : c_class_0267
  * @tc.desc : h2dts parseClass：扩充-R5-链表节点 class 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0267', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(`class R5Node { public: int key; R5Node* next; void append(R5Node* n); };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'R5Node');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].functionList.length, 1);
          } catch (err) {
      assert.fail(`c_class_0267 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_class_0268
  * @tc.name : c_class_0268
  * @tc.desc : h2dts parseClass：扩充-R5-配置 class 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0268', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(`class R5Config { std::string host; int port; bool ssl; void apply(); };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'R5Config');
      assert.strictEqual(objList[0].variableList.length, 3);
      assert.strictEqual(objList[0].functionList.length, 1);
          } catch (err) {
      assert.fail(`c_class_0268 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_class_0269
  * @tc.name : c_class_0269
  * @tc.desc : h2dts parseClass：扩充-R5-计时器 class 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0269', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(`class R5Timer { long start; long end; double elapsed() const; void reset(); };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'R5Timer');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].functionList.length, 2);
          } catch (err) {
      assert.fail(`c_class_0269 执行异常: ${String(err)}`);
    }
  });
});
