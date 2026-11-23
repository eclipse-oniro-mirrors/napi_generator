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

suite('Parse_Type_TS_Suite_Ext04c', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Type_TS_Suite_Ext04c');
  /**
  * @tc.number dts2cpp_type_0199
  * @tc.name parseType_ts_ext_0199
  * @tc.desc dts2cpp type 扩充-返回矩阵：方法签名返回 { id: number }（带参 ×3） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0199', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0199.ts',
            `type TpR19N1 = {
        m0(a: number): { id: number };
        m1(a: string): { id: number };
        m2(a: boolean): { id: number };
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpR19N1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 0);
      assert.strictEqual(item_0!.functions.length, 3);
      assert.strictEqual(item_0!.functions[0].name, 'm0');
      assert.strictEqual(item_0!.functions[0].returns, '{ id: number }');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(item_0!.functions[1].name, 'm1');
      assert.strictEqual(item_0!.functions[1].returns, '{ id: number }');
      assert.strictEqual(item_0!.functions[1].parameters.length, 1);
      assert.strictEqual(item_0!.functions[1].parameters[0].type, 'string');
      assert.strictEqual(item_0!.functions[2].name, 'm2');
      assert.strictEqual(item_0!.functions[2].returns, '{ id: number }');
      assert.strictEqual(item_0!.functions[2].parameters.length, 1);
      assert.strictEqual(item_0!.functions[2].parameters[0].type, 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_type_0199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0200
  * @tc.name parseType_ts_ext_0200
  * @tc.desc dts2cpp type 扩充-箭头属性：单参（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0200', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0200.ts',
            `type TpA00 = {
        f0: (a: number) => void;
        f1: (a: number) => void;
        f2: (a: number) => void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA00');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: number) => void');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: number) => void');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: number) => void');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0200 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0201
  * @tc.name parseType_ts_ext_0201
  * @tc.desc dts2cpp type 扩充-箭头属性：双参（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0201', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0201.ts',
            `type TpA01 = {
        f0: (a: number, b: string) => void;
        f1: (a: number, b: string) => void;
        f2: (a: number, b: string) => void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA01');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: number, b: string) => void');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: number, b: string) => void');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: number, b: string) => void');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0202
  * @tc.name parseType_ts_ext_0202
  * @tc.desc dts2cpp type 扩充-箭头属性：三参（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0202', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0202.ts',
            `type TpA02 = {
        f0: (a: number, b: string, c: boolean) => void;
        f1: (a: number, b: string, c: boolean) => void;
        f2: (a: number, b: string, c: boolean) => void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA02');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a: number, b: string, c: boolean) => void');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a: number, b: string, c: boolean) => void');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a: number, b: string, c: boolean) => void');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0202 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0203
  * @tc.name parseType_ts_ext_0203
  * @tc.desc dts2cpp type 扩充-箭头属性：可选参（×3 属性） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseType_ts_ext_0203', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseType0203.ts',
            `type TpA03 = {
        f0: (a?: number) => void;
        f1: (a?: number) => void;
        f2: (a?: number) => void;
    };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const item_0 = parseObj.types.find(item => item.name === 'TpA03');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, '(a?: number) => void');
      assert.strictEqual(item_0!.members[1].name, 'f1');
      assert.strictEqual(item_0!.members[1].type, '(a?: number) => void');
      assert.strictEqual(item_0!.members[2].name, 'f2');
      assert.strictEqual(item_0!.members[2].type, '(a?: number) => void');
      assert.strictEqual(item_0!.functions.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_type_0203 执行异常: ${String(err)}`);
    }
  });

});

