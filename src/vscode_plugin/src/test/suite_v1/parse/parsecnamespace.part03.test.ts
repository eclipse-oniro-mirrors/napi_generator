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
import { parseFunction, parseClass, parseStruct, parseEnum, parseUnion } from '../../../parse/parsec';
import { ClassObj, FuncObj, StructObj, EnumObj, UnionObj } from '../../../gen/datatype';

suite('Parse_C_Namespace_Suite_Ext03', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Namespace_Suite_Ext03');
  /**
  * @tc.number : c_namespace_0040
  * @tc.name : c_namespace_0040
  * @tc.desc : h2dts parseClass：扩充-三层嵌套 namespace 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0040', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parseClass(`namespace a { namespace b { namespace c { class Deep { int v; }; } } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Deep');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].functionList.length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0041
  * @tc.name : c_namespace_0041
  * @tc.desc : h2dts parseClass：扩充-namespace 内 enum+struct+class 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0041', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parseClass(`namespace ns { enum E { A, B }; struct S { int x; }; class C { int y; }; }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'C');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].functionList.length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0042
  * @tc.name : c_namespace_0042
  * @tc.desc : h2dts parseClass：扩充-namespace using alias 跨层 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0042', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parseClass(`namespace outer { using inner_int = int; namespace inner { class C { inner_int v; }; } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'C');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].functionList.length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0042 执行异常: ${String(err)}`);
    }
  });
});
