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

suite('Parse_C_Namespace_Suite_Ext06', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Namespace_Suite_Ext06');
  /**
  * @tc.number : c_namespace_0049
  * @tc.name : c_namespace_0049
  * @tc.desc : h2dts parseClass：扩充-R3-网络 namespace 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0049', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parseClass(`namespace net { namespace http { class Client { std::string host; int port; void connect(); }; } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Client');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].functionList.length, 1);
          } catch (err) {
      assert.fail(`c_namespace_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0050
  * @tc.name : c_namespace_0050
  * @tc.desc : h2dts parseClass：扩充-R3-template class 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0050', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parseClass(`namespace db { template<typename T> class Repo { T find(int id); }; class User { int id; std::string name; }; }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 2);
      assert.strictEqual(objList[0].name, 'Repo');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].functionList.length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0050 执行异常: ${String(err)}`);
    }
  });
});
