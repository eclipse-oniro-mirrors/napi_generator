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
import { doParseTs } from '../../../parse/parsets';
import { ParseObj } from '../../../gen/datatype';

suite('Parse_Class_TS_Suite_Ext05c', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Class_TS_Suite_Ext05c');
  /**
  * @tc.number dts2cpp_class_0288
  * @tc.name parseClass_ts_ext_0288
  * @tc.desc dts2cpp class 扩充-泛型/继承：泛型约束 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0288', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0288.ts',
            `class Gen5<T extends { length: number }> {
        v: T;
        set(a: T) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Gen5');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'v');
      assert.strictEqual(classItem_0!.variableList[0].type, 'T');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'set');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'T');
          } catch (err) {
      assert.fail(`dts2cpp_class_0288 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0289
  * @tc.name parseClass_ts_ext_0289
  * @tc.desc dts2cpp class 扩充-泛型/继承：泛型继承基类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0289', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0289.ts',
            `class Base6 {
        id: number;
    }
class Gen6<T> extends Base6 {
        v: T;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 2);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Base6');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'id');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'Gen6');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'v');
      assert.strictEqual(classItem_1!.variableList[0].type, 'T');
      assert.strictEqual(classItem_1!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0289 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0290
  * @tc.name parseClass_ts_ext_0290
  * @tc.desc dts2cpp class 扩充-泛型/继承：泛型方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0290', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0290.ts',
            `class Gen7 {
        get<T>(a: T) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Gen7');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'get');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'T');
          } catch (err) {
      assert.fail(`dts2cpp_class_0290 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0291
  * @tc.name parseClass_ts_ext_0291
  * @tc.desc dts2cpp class 扩充-泛型/继承：泛型容器属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0291', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0291.ts',
            `class Gen8<T> {
        m: Map<string, T>;
        s: Set<T>;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Gen8');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'm');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Map<string, T>');
      assert.strictEqual(classItem_0!.variableList[1].name, 's');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Set<T>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0291 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0292
  * @tc.name parseClass_ts_ext_0292
  * @tc.desc dts2cpp class 扩充-泛型/继承：二级继承 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0292', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0292.ts',
            `class Base9 {
        id: number;
    }
class Mid9 extends Base9 {
        name: string;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 2);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Base9');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'id');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'Mid9');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'name');
      assert.strictEqual(classItem_1!.variableList[0].type, 'string');
      assert.strictEqual(classItem_1!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0292 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0293
  * @tc.name parseClass_ts_ext_0293
  * @tc.desc dts2cpp class 扩充-泛型/继承：三级继承 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0293', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0293.ts',
            `class Base10 {
        id: number;
    }
class Mid10 extends Base10 {
        name: string;
    }
class Leaf10 extends Mid10 {
        ok: boolean;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 3);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Base10');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'id');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'Mid10');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'name');
      assert.strictEqual(classItem_1!.variableList[0].type, 'string');
      assert.strictEqual(classItem_1!.functionList.length, 0);
      const classItem_2 = parseObj.classes.find(item => item.name === 'Leaf10');
      assert.ok(classItem_2);
      assert.strictEqual(classItem_2!.variableList.length, 1);
      assert.strictEqual(classItem_2!.variableList[0].name, 'ok');
      assert.strictEqual(classItem_2!.variableList[0].type, 'boolean');
      assert.strictEqual(classItem_2!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0293 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0294
  * @tc.name parseClass_ts_ext_0294
  * @tc.desc dts2cpp class 扩充-泛型/继承：implements 单接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0294', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0294.ts',
            `interface If11 { a(): void; }
class Impl11 implements If11 {
        a() {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Impl11');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'a');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0294 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0295
  * @tc.name parseClass_ts_ext_0295
  * @tc.desc dts2cpp class 扩充-泛型/继承：implements 双接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0295', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0295.ts',
            `interface If12a { a(): void; }
interface If12b { b(): void; }
class Impl12 implements If12a, If12b {
        a() {
        }
        b() {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Impl12');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'a');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'b');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0295 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0296
  * @tc.name parseClass_ts_ext_0296
  * @tc.desc dts2cpp class 扩充-泛型/继承：抽象类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0296', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0296.ts',
            `abstract class Abs13 {
        name: string;
        run() {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Abs13');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'name');
      assert.strictEqual(classItem_0!.variableList[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'run');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0296 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0297
  * @tc.name parseClass_ts_ext_0297
  * @tc.desc dts2cpp class 扩充-泛型/继承：静态成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0297', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0297.ts',
            `class Stat14 {
        static id: number;
        static count: number;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Stat14');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'id');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'count');
      assert.strictEqual(classItem_0!.variableList[1].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0297 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0298
  * @tc.name parseClass_ts_ext_0298
  * @tc.desc dts2cpp class 扩充-泛型/继承：静态方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0298', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0298.ts',
            `class Stat15 {
        static create() {
        }
        static destroy() {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Stat15');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'create');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[1].name, 'destroy');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0298 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0299
  * @tc.name parseClass_ts_ext_0299
  * @tc.desc dts2cpp class 扩充-边界：空类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0299', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0299.ts',
            `class EdgeE1 {}`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'EdgeE1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0299 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0300
  * @tc.name parseClass_ts_ext_0300
  * @tc.desc dts2cpp class 扩充-边界：单行类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0300', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0300.ts',
            `class EdgeE2 { a: number; b: string; };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'EdgeE2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'a');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'b');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0300 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0301
  * @tc.name parseClass_ts_ext_0301
  * @tc.desc dts2cpp class 扩充-边界：注释类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0301', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0301.ts',
            `/* class EdgeE3 { a: number; } */`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0301 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0302
  * @tc.name parseClass_ts_ext_0302
  * @tc.desc dts2cpp class 扩充-边界：索引签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0302', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0302.ts',
            `class EdgeE4 {
        [k: string]: number;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'EdgeE4');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0302 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0303
  * @tc.name parseClass_ts_ext_0303
  * @tc.desc dts2cpp class 扩充-边界：属性初始化 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0303', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0303.ts',
            `class EdgeE5 {
        a = 1;
        b = "x";
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'EdgeE5');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'a');
      assert.strictEqual(classItem_0!.variableList[0].type, undefined);
      assert.strictEqual(classItem_0!.variableList[1].name, 'b');
      assert.strictEqual(classItem_0!.variableList[1].type, undefined);
      assert.strictEqual(classItem_0!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0303 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0304
  * @tc.name parseClass_ts_ext_0304
  * @tc.desc dts2cpp class 扩充-边界：getter/setter 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0304', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0304.ts',
            `class EdgeE6 {
        private _v = 0;
        get v() {
          return this._v;
        }
        set v(x: number) {
          this._v = x;
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'EdgeE6');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, '_v');
      assert.strictEqual(classItem_0!.variableList[0].type, undefined);
      assert.strictEqual(classItem_0!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0304 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0305
  * @tc.name parseClass_ts_ext_0305
  * @tc.desc dts2cpp class 扩充-边界：重载方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0305', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0305.ts',
            `class EdgeE7 {
        f(x: string): string;
        f(x: number): number;
        f(x: any): any {
          return x;
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'EdgeE7');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 3);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'string');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[1].name, 'f');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[1].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[2].name, 'f');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'any');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'any');
          } catch (err) {
      assert.fail(`dts2cpp_class_0305 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0306
  * @tc.name parseClass_ts_ext_0306
  * @tc.desc dts2cpp class 扩充-边界：中文类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0306', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0306.ts',
            `class 边缘类 {
        数值: number;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === '边缘类');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, '数值');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0306 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0307
  * @tc.name parseClass_ts_ext_0307
  * @tc.desc dts2cpp class 扩充-边界：装饰器属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0307', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0307.ts',
            `class EdgeE9 {
        @dec a: number;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'EdgeE9');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'a');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_class_0307 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0308
  * @tc.name parseClass_ts_ext_0308
  * @tc.desc dts2cpp class 扩充-边界：方法参数解构 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0308', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0308.ts',
            `class EdgeE10 {
        f({ a, b }: { a: number; b: number }) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'EdgeE10');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, '{ a: number; b: number }');
          } catch (err) {
      assert.fail(`dts2cpp_class_0308 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0309
  * @tc.name parseClass_ts_ext_0309
  * @tc.desc dts2cpp class 扩充-边界：方法 rest 参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0309', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0309.ts',
            `class EdgeE11 {
        f(...args: number[]) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'EdgeE11');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number[]');
          } catch (err) {
      assert.fail(`dts2cpp_class_0309 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0310
  * @tc.name parseClass_ts_ext_0310
  * @tc.desc dts2cpp class 扩充-边界：方法默认参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0310', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0310.ts',
            `class EdgeE12 {
        f(a: number = 0, b: string = "x") {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'EdgeE12');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'string');
          } catch (err) {
      assert.fail(`dts2cpp_class_0310 执行异常: ${String(err)}`);
    }
  });

});

