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

suite('Parse_Func_TS_Suite_Ext11', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Func_TS_Suite_Ext11');
  /**
  * @tc.number : dts2cpp_func_0543
  * @tc.name : dts2cpp_func_0543
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp543(a: string | null): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0543', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc543.ts', `function fnExp543(a: string | null): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp543');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string | null');
          } catch (err) {
      assert.fail(`dts2cpp_func_0543 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0544
  * @tc.name : dts2cpp_func_0544
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp544(a: number | undefined): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0544', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc544.ts', `function fnExp544(a: number | undefined): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp544');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number | undefined');
          } catch (err) {
      assert.fail(`dts2cpp_func_0544 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0545
  * @tc.name : dts2cpp_func_0545
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp545(a: number): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0545', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc545.ts', `function fnExp545(a: number): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp545');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number');
          } catch (err) {
      assert.fail(`dts2cpp_func_0545 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0546
  * @tc.name : dts2cpp_func_0546
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp546(a: string): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0546', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc546.ts', `function fnExp546(a: string): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp546');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string');
          } catch (err) {
      assert.fail(`dts2cpp_func_0546 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0547
  * @tc.name : dts2cpp_func_0547
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp547(a: boolean): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0547', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc547.ts', `function fnExp547(a: boolean): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp547');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_func_0547 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0548
  * @tc.name : dts2cpp_func_0548
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp548(a: void): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0548', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc548.ts', `function fnExp548(a: void): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp548');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'void');
          } catch (err) {
      assert.fail(`dts2cpp_func_0548 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0549
  * @tc.name : dts2cpp_func_0549
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp549(a: any): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0549', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc549.ts', `function fnExp549(a: any): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp549');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'any');
          } catch (err) {
      assert.fail(`dts2cpp_func_0549 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0550
  * @tc.name : dts2cpp_func_0550
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp550(a: unknown): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0550', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc550.ts', `function fnExp550(a: unknown): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp550');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'unknown');
          } catch (err) {
      assert.fail(`dts2cpp_func_0550 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0551
  * @tc.name : dts2cpp_func_0551
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp551(a: never): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0551', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc551.ts', `function fnExp551(a: never): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp551');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'never');
          } catch (err) {
      assert.fail(`dts2cpp_func_0551 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0552
  * @tc.name : dts2cpp_func_0552
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp552(a: number[]): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0552', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc552.ts', `function fnExp552(a: number[]): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp552');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0552 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0553
  * @tc.name : dts2cpp_func_0553
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp553(a: string[]): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0553', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc553.ts', `function fnExp553(a: string[]): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp553');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0553 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0554
  * @tc.name : dts2cpp_func_0554
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp554(a: boolean[]): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0554', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc554.ts', `function fnExp554(a: boolean[]): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp554');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'boolean[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0554 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0555
  * @tc.name : dts2cpp_func_0555
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp555(a: number[]): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0555', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc555.ts', `function fnExp555(a: number[]): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp555');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0555 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0556
  * @tc.name : dts2cpp_func_0556
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp556(a: ReadonlyArray<string>): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0556', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc556.ts', `function fnExp556(a: ReadonlyArray<string>): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp556');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'ReadonlyArray<string>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0556 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0557
  * @tc.name : dts2cpp_func_0557
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp557(a: Map<string, number>): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0557', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc557.ts', `function fnExp557(a: Map<string, number>): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp557');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Map<string, number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0557 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0558
  * @tc.name : dts2cpp_func_0558
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp558(a: Set<number>): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0558', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc558.ts', `function fnExp558(a: Set<number>): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp558');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Set<number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0558 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0559
  * @tc.name : dts2cpp_func_0559
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp559(a: Record<string, boolean>): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0559', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc559.ts', `function fnExp559(a: Record<string, boolean>): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp559');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Record<string, boolean>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0559 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0560
  * @tc.name : dts2cpp_func_0560
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp560(a: Promise<string>): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0560', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc560.ts', `function fnExp560(a: Promise<string>): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp560');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Promise<string>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0560 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0561
  * @tc.name : dts2cpp_func_0561
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp561(a: Promise<number>): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0561', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc561.ts', `function fnExp561(a: Promise<number>): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp561');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Promise<number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0561 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0562
  * @tc.name : dts2cpp_func_0562
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp562(a: [string, number]): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0562', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc562.ts', `function fnExp562(a: [string, number]): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp562');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '[string, number]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0562 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0563
  * @tc.name : dts2cpp_func_0563
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp563(a: [number, number, number]): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0563', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc563.ts', `function fnExp563(a: [number, number, number]): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp563');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '[number, number, number]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0563 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0564
  * @tc.name : dts2cpp_func_0564
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp564(a: (x: number) => void): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0564', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc564.ts', `function fnExp564(a: (x: number) => void): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp564');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '(x: number) => void');
          } catch (err) {
      assert.fail(`dts2cpp_func_0564 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0565
  * @tc.name : dts2cpp_func_0565
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp565(a: (a: string, b: number) => boolean): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0565', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc565.ts', `function fnExp565(a: (a: string, b: number) => boolean): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp565');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '(a: string, b: number) => boolean');
          } catch (err) {
      assert.fail(`dts2cpp_func_0565 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0566
  * @tc.name : dts2cpp_func_0566
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp566(a: number | string): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0566', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc566.ts', `function fnExp566(a: number | string): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp566');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number | string');
          } catch (err) {
      assert.fail(`dts2cpp_func_0566 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0567
  * @tc.name : dts2cpp_func_0567
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp567(a: string | null): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0567', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc567.ts', `function fnExp567(a: string | null): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp567');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string | null');
          } catch (err) {
      assert.fail(`dts2cpp_func_0567 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0568
  * @tc.name : dts2cpp_func_0568
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp568(a: number | undefined): void` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0568', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc568.ts', `function fnExp568(a: number | undefined): void {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp568');
      assert.strictEqual(parseObj.funcs![0].returns, 'void');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number | undefined');
          } catch (err) {
      assert.fail(`dts2cpp_func_0568 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0569
  * @tc.name : dts2cpp_func_0569
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp569(a: number): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0569', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc569.ts', `function fnExp569(a: number): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp569');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number');
          } catch (err) {
      assert.fail(`dts2cpp_func_0569 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0570
  * @tc.name : dts2cpp_func_0570
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp570(a: string): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0570', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc570.ts', `function fnExp570(a: string): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp570');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string');
          } catch (err) {
      assert.fail(`dts2cpp_func_0570 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0571
  * @tc.name : dts2cpp_func_0571
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp571(a: boolean): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0571', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc571.ts', `function fnExp571(a: boolean): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp571');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_func_0571 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0572
  * @tc.name : dts2cpp_func_0572
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp572(a: void): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0572', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc572.ts', `function fnExp572(a: void): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp572');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'void');
          } catch (err) {
      assert.fail(`dts2cpp_func_0572 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0573
  * @tc.name : dts2cpp_func_0573
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp573(a: any): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0573', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc573.ts', `function fnExp573(a: any): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp573');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'any');
          } catch (err) {
      assert.fail(`dts2cpp_func_0573 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0574
  * @tc.name : dts2cpp_func_0574
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp574(a: unknown): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0574', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc574.ts', `function fnExp574(a: unknown): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp574');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'unknown');
          } catch (err) {
      assert.fail(`dts2cpp_func_0574 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0575
  * @tc.name : dts2cpp_func_0575
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp575(a: never): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0575', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc575.ts', `function fnExp575(a: never): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp575');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'never');
          } catch (err) {
      assert.fail(`dts2cpp_func_0575 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0576
  * @tc.name : dts2cpp_func_0576
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp576(a: number[]): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0576', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc576.ts', `function fnExp576(a: number[]): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp576');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0576 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0577
  * @tc.name : dts2cpp_func_0577
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp577(a: string[]): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0577', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc577.ts', `function fnExp577(a: string[]): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp577');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0577 执行异常: ${String(err)}`);
    }
  });
});
