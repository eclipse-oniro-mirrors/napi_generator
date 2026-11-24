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

suite('Parse_Class_TS_Suite_Ext04c', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Class_TS_Suite_Ext04c');
  /**
  * @tc.number dts2cpp_class_0217
  * @tc.name parseClass_ts_ext_0217
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 boolean（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0217', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0217.ts',
            `class ClsA02P1 {
        f(a: number, b: boolean) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA02P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_class_0217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0218
  * @tc.name parseClass_ts_ext_0218
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 any（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0218', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0218.ts',
            `class ClsA03P0 {
        f(a: any) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA03P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'any');
          } catch (err) {
      assert.fail(`dts2cpp_class_0218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0219
  * @tc.name parseClass_ts_ext_0219
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 any（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0219', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0219.ts',
            `class ClsA03P1 {
        f(a: number, b: any) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA03P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'any');
          } catch (err) {
      assert.fail(`dts2cpp_class_0219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0220
  * @tc.name parseClass_ts_ext_0220
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 unknown（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0220', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0220.ts',
            `class ClsA04P0 {
        f(a: unknown) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA04P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'unknown');
          } catch (err) {
      assert.fail(`dts2cpp_class_0220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0221
  * @tc.name parseClass_ts_ext_0221
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 unknown（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0221', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0221.ts',
            `class ClsA04P1 {
        f(a: number, b: unknown) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA04P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'unknown');
          } catch (err) {
      assert.fail(`dts2cpp_class_0221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0222
  * @tc.name parseClass_ts_ext_0222
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 null（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0222', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0222.ts',
            `class ClsA05P0 {
        f(a: null) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA05P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'null');
          } catch (err) {
      assert.fail(`dts2cpp_class_0222 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0223
  * @tc.name parseClass_ts_ext_0223
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 null（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0223', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0223.ts',
            `class ClsA05P1 {
        f(a: number, b: null) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA05P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'null');
          } catch (err) {
      assert.fail(`dts2cpp_class_0223 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0224
  * @tc.name parseClass_ts_ext_0224
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 undefined（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0224', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0224.ts',
            `class ClsA06P0 {
        f(a: undefined) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA06P0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'undefined');
          } catch (err) {
      assert.fail(`dts2cpp_class_0224 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0225
  * @tc.name parseClass_ts_ext_0225
  * @tc.desc dts2cpp class 扩充-参数矩阵：方法参数 undefined（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseClass_ts_ext_0225', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseClass0225.ts',
            `class ClsA06P1 {
        f(a: number, b: undefined) {
        }
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsA06P1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'f');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, 'undefined');
          } catch (err) {
      assert.fail(`dts2cpp_class_0225 执行异常: ${String(err)}`);
    }
  });

});

