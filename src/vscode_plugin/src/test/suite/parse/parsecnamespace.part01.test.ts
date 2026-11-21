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

suite('Parse_C_Namespace_Suite_Ext01', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Namespace_Suite_Ext01');
  /**
  * @tc.number c_namespace_0001
  * @tc.name parseNamespace_c_ext_0001
  * @tc.desc h2dts parseClass：namespace 混合：enum+struct+class+函数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseNamespace_c_ext_0001', () => {
    try {
      let objList: any;
            objList = parseClass(`namespace ns {
typedef enum { A, B } InnerEnum;
typedef struct InnerStruct {
    int x;
} InnerStruct;
class InnerClass {
    int y;
    void run();
};
int add(int a, int b);
}`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'InnerClass');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'y');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0002
  * @tc.name parseNamespace_c_ext_0002
  * @tc.desc h2dts parseClass：namespace 嵌套：域内多类型 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseNamespace_c_ext_0002', () => {
    try {
      let objList: any;
            objList = parseClass(`namespace outer {
typedef enum { X, Y } E1;
namespace inner {
typedef struct { int v; } S1;
class C1 {
    int w;
};
int mul(int a, int b);
}
}`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'C1');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'w');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0003
  * @tc.name parseNamespace_c_ext_0003
  * @tc.desc h2dts parseClass：扩充-namespace：变量+enum+struct+class+函数大混合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseNamespace_c_ext_0003', () => {
    try {
      let objList: any;
            objList = parseClass(`namespace api {
const int VERSION = 1;
typedef enum { A, B } Kind;
typedef struct Item {
    int id;
    std::string name;
} Item;
class Client {
    Item current;
    void connect();
    void disconnect();
};
int init();
int cleanup();
}`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Client');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'current');
      assert.strictEqual(objList[0].variableList[0].type, 'Item');
      assert.strictEqual(objList[0].functionList.length, 2);
      assert.strictEqual(objList[0].functionList[0].name, 'connect');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.strictEqual(objList[0].functionList[1].name, 'disconnect');
      assert.strictEqual(objList[0].functionList[1].returns, 'void');
      assert.strictEqual((objList[0].functionList[1].parameters || []).length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0004
  * @tc.name parseNamespace_c_ext_0004
  * @tc.desc h2dts parseClass：扩充-namespace：export namespace 变量+struct+函数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseNamespace_c_ext_0004', () => {
    try {
      let objList: any;
            objList = parseClass(`export namespace ext {
const double PI = 3.14;
typedef struct Point { double x; double y; } Point;
double dist(Point a, Point b);
}`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0005
  * @tc.name parseNamespace_c_ext_0005
  * @tc.desc h2dts parseClass：扩充-namespace：三层嵌套各含函数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseNamespace_c_ext_0005', () => {
    try {
      let objList: any;
            objList = parseClass(`namespace n1 {
int f1();
namespace n2 {
int f2();
namespace n3 {
int f3();
}
}
}`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0006
  * @tc.name parseNamespace_c_ext_0006
  * @tc.desc h2dts parseClass：扩充-namespace：变量+函数+enum 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseNamespace_c_ext_0006', () => {
    try {
      let objList: any;
            objList = parseClass(`namespace util {
const int MAX = 100;
int clamp(int v, int lo, int hi);
typedef enum { OK, ERR } Status;
}`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_namespace_0007
  * @tc.name parseNamespace_c_ext_0007
  * @tc.desc h2dts parseClass：扩充-namespace：struct 类型函数出入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseNamespace_c_ext_0007', () => {
    try {
      let objList: any;
            objList = parseClass(`namespace svc {
typedef struct Config {
    std::string host;
    int port;
    bool tls;
} Config;
Config load();
void save(Config c);
}`);
      assert.ok(objList);
      assert.strictEqual(objList.length, 0);
          } catch (err) {
      assert.fail(`c_namespace_0007 执行异常: ${String(err)}`);
    }
  });

});
