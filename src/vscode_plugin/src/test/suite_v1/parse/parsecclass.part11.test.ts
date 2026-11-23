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

suite('Parse_Class_C_Suite_Ext11', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Class_C_Suite_Ext11');
  /**
  * @tc.number : c_class_0252
  * @tc.name : c_class_0252
  * @tc.desc : h2dts parseClass：扩充-R2-friend 声明 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0252', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(`class FriendCls { friend class Other; int secret; public: int reveal(); };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'FriendCls');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].functionList.length, 1);
          } catch (err) {
      assert.fail(`c_class_0252 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_class_0253
  * @tc.name : c_class_0253
  * @tc.desc : h2dts parseClass：扩充-R2-const 方法 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0253', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(`class ConstMethods { public: int get() const; void set(int v); int val; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ConstMethods');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].functionList.length, 2);
          } catch (err) {
      assert.fail(`c_class_0253 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_class_0254
  * @tc.name : c_class_0254
  * @tc.desc : h2dts parseClass：扩充-R2-三容器成员 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0254', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(`class ContainerCls { std::vector<std::string> names; std::set<int> ids; std::map<int,std::string> dict; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ContainerCls');
      assert.strictEqual(objList[0].variableList.length, 3);
      assert.strictEqual(objList[0].functionList.length, 0);
          } catch (err) {
      assert.fail(`c_class_0254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_class_0255
  * @tc.name : c_class_0255
  * @tc.desc : h2dts parseClass：扩充-R2-多继承 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0255', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(`class MultiBase : public BaseA, public BaseB { int z; }; class BaseA { int x; }; class BaseB { int y; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 2);
      assert.strictEqual(objList[0].name, 'BaseA');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].functionList.length, 0);
          } catch (err) {
      assert.fail(`c_class_0255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_class_0256
  * @tc.name : c_class_0256
  * @tc.desc : h2dts parseClass：扩充-R2-运算符重载 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseClass_c_ext_0256', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parsec.parseClass(`class operatorCls { public: operatorCls operator+(const operatorCls& o); int val; };`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'operatorCls');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].functionList.length, 0);
          } catch (err) {
      assert.fail(`c_class_0256 执行异常: ${String(err)}`);
    }
  });
});
