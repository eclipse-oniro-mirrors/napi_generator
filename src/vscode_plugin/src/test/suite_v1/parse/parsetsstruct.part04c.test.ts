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

suite('Parse_Struct_TS_Suite_Ext04c', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Struct_TS_Suite_Ext04c');
  /**
  * @tc.number dts2cpp_struct_0214
  * @tc.name parseStruct_ts_ext_0214
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 boolean（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0214', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0214.ts',
            `interface IfA02P1 {
        f(a: number, b: boolean): void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA02P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0214 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0215
  * @tc.name parseStruct_ts_ext_0215
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 any（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0215', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0215.ts',
            `interface IfA03P0 {
        f(a: any): void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA03P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'any');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0215 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0216
  * @tc.name parseStruct_ts_ext_0216
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 any（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0216', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0216.ts',
            `interface IfA03P1 {
        f(a: number, b: any): void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA03P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'any');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0216 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0217
  * @tc.name parseStruct_ts_ext_0217
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 unknown（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0217', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0217.ts',
            `interface IfA04P0 {
        f(a: unknown): void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA04P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'unknown');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0217 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0218
  * @tc.name parseStruct_ts_ext_0218
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 unknown（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0218', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0218.ts',
            `interface IfA04P1 {
        f(a: number, b: unknown): void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA04P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'unknown');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0218 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0219
  * @tc.name parseStruct_ts_ext_0219
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 null（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0219', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0219.ts',
            `interface IfA05P0 {
        f(a: null): void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA05P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'null');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0219 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0220
  * @tc.name parseStruct_ts_ext_0220
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 null（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0220', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0220.ts',
            `interface IfA05P1 {
        f(a: number, b: null): void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA05P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'null');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0220 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0221
  * @tc.name parseStruct_ts_ext_0221
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 undefined（单参） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0221', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0221.ts',
            `interface IfA06P0 {
        f(a: undefined): void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA06P0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'undefined');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0221 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0222
  * @tc.name parseStruct_ts_ext_0222
  * @tc.desc dts2cpp struct 扩充-参数矩阵：方法签名参数 undefined（双参第二位） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseStruct_ts_ext_0222', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseStruct0222.ts',
            `interface IfA06P1 {
        f(a: number, b: undefined): void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfA06P1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'f');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 2);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[0].parameters[1].type, 'undefined');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0222 执行异常: ${String(err)}`);
    }
  });

});

