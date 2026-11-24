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

suite('Parse_C_Namespace_Suite_Ext07', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Namespace_Suite_Ext07');
  /**
  * @tc.number : c_namespace_0051
  * @tc.name : c_namespace_0051
  * @tc.desc : h2dts parseClass：扩充-R4-namespace-class 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0051', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parseClass(`namespace ns { class Inner { int v; void run(); }; }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Inner');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].functionList.length, 1);
          } catch (err) {
      assert.fail(`c_namespace_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0052
  * @tc.name : c_namespace_0052
  * @tc.desc : h2dts parseClass：扩充-R4-namespace-func 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0052', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parseFunction(`namespace ns { void innerFn(int x); }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'innerFn');
          } catch (err) {
      assert.fail(`c_namespace_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0053
  * @tc.name : c_namespace_0053
  * @tc.desc : h2dts parseClass：扩充-R4-namespace-class 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0053', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parseClass(`namespace outer { namespace inner { class Inner { int v; void run(); }; } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Inner');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].functionList.length, 1);
          } catch (err) {
      assert.fail(`c_namespace_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0054
  * @tc.name : c_namespace_0054
  * @tc.desc : h2dts parseClass：扩充-R4-namespace-func 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0054', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parseFunction(`namespace outer { namespace inner { void innerFn(int x); } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'innerFn');
          } catch (err) {
      assert.fail(`c_namespace_0054 执行异常: ${String(err)}`);
    }
  });
});
