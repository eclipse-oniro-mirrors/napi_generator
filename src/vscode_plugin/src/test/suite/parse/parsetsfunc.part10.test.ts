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

suite('Parse_Func_TS_Suite_Ext10', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Func_TS_Suite_Ext10');
  /**
  * @tc.number : dts2cpp_func_0508
  * @tc.name : dts2cpp_func_0508
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp508(a: ReadonlyArray<string>): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0508', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc508.ts', `function fnExp508(a: ReadonlyArray<string>): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp508');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'ReadonlyArray<string>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0508 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0509
  * @tc.name : dts2cpp_func_0509
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp509(a: Map<string, number>): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0509', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc509.ts', `function fnExp509(a: Map<string, number>): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp509');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Map<string, number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0509 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0510
  * @tc.name : dts2cpp_func_0510
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp510(a: Set<number>): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0510', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc510.ts', `function fnExp510(a: Set<number>): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp510');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Set<number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0510 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0511
  * @tc.name : dts2cpp_func_0511
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp511(a: Record<string, boolean>): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0511', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc511.ts', `function fnExp511(a: Record<string, boolean>): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp511');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Record<string, boolean>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0511 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0512
  * @tc.name : dts2cpp_func_0512
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp512(a: Promise<string>): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0512', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc512.ts', `function fnExp512(a: Promise<string>): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp512');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Promise<string>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0512 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0513
  * @tc.name : dts2cpp_func_0513
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp513(a: Promise<number>): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0513', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc513.ts', `function fnExp513(a: Promise<number>): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp513');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Promise<number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0513 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0514
  * @tc.name : dts2cpp_func_0514
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp514(a: [string, number]): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0514', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc514.ts', `function fnExp514(a: [string, number]): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp514');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '[string, number]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0514 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0515
  * @tc.name : dts2cpp_func_0515
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp515(a: [number, number, number]): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0515', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc515.ts', `function fnExp515(a: [number, number, number]): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp515');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '[number, number, number]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0515 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0516
  * @tc.name : dts2cpp_func_0516
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp516(a: (x: number) => void): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0516', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc516.ts', `function fnExp516(a: (x: number) => void): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp516');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '(x: number) => void');
          } catch (err) {
      assert.fail(`dts2cpp_func_0516 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0517
  * @tc.name : dts2cpp_func_0517
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp517(a: (a: string, b: number) => boolean): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0517', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc517.ts', `function fnExp517(a: (a: string, b: number) => boolean): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp517');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '(a: string, b: number) => boolean');
          } catch (err) {
      assert.fail(`dts2cpp_func_0517 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0518
  * @tc.name : dts2cpp_func_0518
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp518(a: number | string): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0518', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc518.ts', `function fnExp518(a: number | string): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp518');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number | string');
          } catch (err) {
      assert.fail(`dts2cpp_func_0518 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0519
  * @tc.name : dts2cpp_func_0519
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp519(a: string | null): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0519', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc519.ts', `function fnExp519(a: string | null): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp519');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string | null');
          } catch (err) {
      assert.fail(`dts2cpp_func_0519 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0520
  * @tc.name : dts2cpp_func_0520
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp520(a: number | undefined): string` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0520', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc520.ts', `function fnExp520(a: number | undefined): string {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp520');
      assert.strictEqual(parseObj.funcs![0].returns, 'string');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number | undefined');
          } catch (err) {
      assert.fail(`dts2cpp_func_0520 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0521
  * @tc.name : dts2cpp_func_0521
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp521(a: number): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0521', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc521.ts', `function fnExp521(a: number): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp521');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number');
          } catch (err) {
      assert.fail(`dts2cpp_func_0521 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0522
  * @tc.name : dts2cpp_func_0522
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp522(a: string): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0522', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc522.ts', `function fnExp522(a: string): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp522');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string');
          } catch (err) {
      assert.fail(`dts2cpp_func_0522 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0523
  * @tc.name : dts2cpp_func_0523
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp523(a: boolean): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0523', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc523.ts', `function fnExp523(a: boolean): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp523');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_func_0523 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0524
  * @tc.name : dts2cpp_func_0524
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp524(a: void): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0524', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc524.ts', `function fnExp524(a: void): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp524');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'void');
          } catch (err) {
      assert.fail(`dts2cpp_func_0524 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0525
  * @tc.name : dts2cpp_func_0525
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp525(a: any): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0525', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc525.ts', `function fnExp525(a: any): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp525');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'any');
          } catch (err) {
      assert.fail(`dts2cpp_func_0525 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0526
  * @tc.name : dts2cpp_func_0526
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp526(a: unknown): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0526', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc526.ts', `function fnExp526(a: unknown): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp526');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'unknown');
          } catch (err) {
      assert.fail(`dts2cpp_func_0526 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0527
  * @tc.name : dts2cpp_func_0527
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp527(a: never): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0527', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc527.ts', `function fnExp527(a: never): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp527');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'never');
          } catch (err) {
      assert.fail(`dts2cpp_func_0527 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0528
  * @tc.name : dts2cpp_func_0528
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp528(a: number[]): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0528', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc528.ts', `function fnExp528(a: number[]): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp528');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0528 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0529
  * @tc.name : dts2cpp_func_0529
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp529(a: string[]): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0529', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc529.ts', `function fnExp529(a: string[]): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp529');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0529 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0530
  * @tc.name : dts2cpp_func_0530
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp530(a: boolean[]): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0530', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc530.ts', `function fnExp530(a: boolean[]): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp530');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'boolean[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0530 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0531
  * @tc.name : dts2cpp_func_0531
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp531(a: number[]): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0531', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc531.ts', `function fnExp531(a: number[]): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp531');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0531 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0532
  * @tc.name : dts2cpp_func_0532
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp532(a: ReadonlyArray<string>): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0532', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc532.ts', `function fnExp532(a: ReadonlyArray<string>): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp532');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'ReadonlyArray<string>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0532 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0533
  * @tc.name : dts2cpp_func_0533
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp533(a: Map<string, number>): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0533', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc533.ts', `function fnExp533(a: Map<string, number>): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp533');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Map<string, number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0533 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0534
  * @tc.name : dts2cpp_func_0534
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp534(a: Set<number>): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0534', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc534.ts', `function fnExp534(a: Set<number>): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp534');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Set<number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0534 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0535
  * @tc.name : dts2cpp_func_0535
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp535(a: Record<string, boolean>): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0535', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc535.ts', `function fnExp535(a: Record<string, boolean>): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp535');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Record<string, boolean>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0535 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0536
  * @tc.name : dts2cpp_func_0536
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp536(a: Promise<string>): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0536', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc536.ts', `function fnExp536(a: Promise<string>): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp536');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Promise<string>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0536 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0537
  * @tc.name : dts2cpp_func_0537
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp537(a: Promise<number>): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0537', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc537.ts', `function fnExp537(a: Promise<number>): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp537');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Promise<number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0537 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0538
  * @tc.name : dts2cpp_func_0538
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp538(a: [string, number]): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0538', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc538.ts', `function fnExp538(a: [string, number]): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp538');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '[string, number]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0538 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0539
  * @tc.name : dts2cpp_func_0539
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp539(a: [number, number, number]): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0539', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc539.ts', `function fnExp539(a: [number, number, number]): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp539');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '[number, number, number]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0539 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0540
  * @tc.name : dts2cpp_func_0540
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp540(a: (x: number) => void): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0540', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc540.ts', `function fnExp540(a: (x: number) => void): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp540');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '(x: number) => void');
          } catch (err) {
      assert.fail(`dts2cpp_func_0540 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0541
  * @tc.name : dts2cpp_func_0541
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp541(a: (a: string, b: number) => boolean): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0541', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc541.ts', `function fnExp541(a: (a: string, b: number) => boolean): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp541');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '(a: string, b: number) => boolean');
          } catch (err) {
      assert.fail(`dts2cpp_func_0541 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0542
  * @tc.name : dts2cpp_func_0542
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp542(a: number | string): boolean` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0542', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc542.ts', `function fnExp542(a: number | string): boolean {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp542');
      assert.strictEqual(parseObj.funcs![0].returns, 'boolean');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number | string');
          } catch (err) {
      assert.fail(`dts2cpp_func_0542 执行异常: ${String(err)}`);
    }
  });
});
