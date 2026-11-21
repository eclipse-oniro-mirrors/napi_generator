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

suite('Parse_C_Namespace_Suite_Ext08', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Namespace_Suite_Ext08');
  /**
  * @tc.number : c_namespace_0055
  * @tc.name : c_namespace_0055
  * @tc.desc : h2dts parse：扩充-R5-三层 namespace 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0055', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parseClass(`namespace a { namespace b { namespace c { class Deep { int v; void run(); }; } } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Deep');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].functionList.length, 1);
          } catch (err) {
      assert.fail(`c_namespace_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0056
  * @tc.name : c_namespace_0056
  * @tc.desc : h2dts parse：扩充-R5-三层 namespace 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0056', () => {
    try {
      let objList: FuncObj[] | undefined;
            objList = parseFunction(`namespace a { namespace b { namespace c { void deepFn(int x); } } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'deepFn');
          } catch (err) {
      assert.fail(`c_namespace_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0057
  * @tc.name : c_namespace_0057
  * @tc.desc : h2dts parse：扩充-R5-三层 namespace 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0057', () => {
    try {
      let objList: EnumObj[] | undefined;
            objList = parseEnum(`namespace a { namespace b { namespace c { enum DeepEn { X, Y }; } } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'DeepEn');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_namespace_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0058
  * @tc.name : c_namespace_0058
  * @tc.desc : h2dts parse：扩充-R5-三层 namespace 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0058', () => {
    try {
      let objList: StructObj[] | undefined;
            objList = parseStruct(`namespace a { namespace b { namespace c { struct DeepSt { int x; float y; }; } } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'DeepSt');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_namespace_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0059
  * @tc.name : c_namespace_0059
  * @tc.desc : h2dts parse：扩充-R5-三层 namespace 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0059', () => {
    try {
      let objList: UnionObj[] | undefined;
            objList = parseUnion(`namespace a { namespace b { namespace c { union DeepU { int i; float f; }; } } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'DeepU');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_namespace_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0060
  * @tc.name : c_namespace_0060
  * @tc.desc : h2dts parse：扩充-R5-三层 namespace 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0060', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parseClass(`namespace outer { namespace inner { class Worker { int id; std::string role; }; } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Worker');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].functionList.length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0061
  * @tc.name : c_namespace_0061
  * @tc.desc : h2dts parse：扩充-R5-三层 namespace 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0061', () => {
    try {
      let objList: ClassObj[] | undefined;
            objList = parseClass(`namespace net { namespace http { class Client { std::string host; int port; bool connect(); }; } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Client');
      assert.strictEqual(objList[0].variableList.length, 2);
      assert.strictEqual(objList[0].functionList.length, 1);
          } catch (err) {
      assert.fail(`c_namespace_0061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : c_namespace_0062
  * @tc.name : c_namespace_0062
  * @tc.desc : h2dts parse：扩充-R5-三层 namespace 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseNamespace_c_ext_0062', () => {
    try {
      let objList: StructObj[] | undefined;
            objList = parseStruct(`namespace data { namespace cache { struct Entry { char key[32]; int ttl; }; } }`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Entry');
      assert.strictEqual(objList[0].members.length, 2);
          } catch (err) {
      assert.fail(`c_namespace_0062 执行异常: ${String(err)}`);
    }
  });
});
