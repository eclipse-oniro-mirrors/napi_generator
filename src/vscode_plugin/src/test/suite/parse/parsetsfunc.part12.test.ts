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

suite('Parse_Func_TS_Suite_Ext12', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Func_TS_Suite_Ext12');
  /**
  * @tc.number : dts2cpp_func_0578
  * @tc.name : dts2cpp_func_0578
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp578(a: boolean[]): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0578', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc578.ts', `function fnExp578(a: boolean[]): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp578');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'boolean[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0578 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0579
  * @tc.name : dts2cpp_func_0579
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp579(a: number[]): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0579', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc579.ts', `function fnExp579(a: number[]): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp579');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number[]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0579 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0580
  * @tc.name : dts2cpp_func_0580
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp580(a: ReadonlyArray<string>): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0580', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc580.ts', `function fnExp580(a: ReadonlyArray<string>): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp580');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'ReadonlyArray<string>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0580 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0581
  * @tc.name : dts2cpp_func_0581
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp581(a: Map<string, number>): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0581', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc581.ts', `function fnExp581(a: Map<string, number>): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp581');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Map<string, number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0581 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0582
  * @tc.name : dts2cpp_func_0582
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp582(a: Set<number>): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0582', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc582.ts', `function fnExp582(a: Set<number>): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp582');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Set<number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0582 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0583
  * @tc.name : dts2cpp_func_0583
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp583(a: Record<string, boolean>): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0583', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc583.ts', `function fnExp583(a: Record<string, boolean>): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp583');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Record<string, boolean>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0583 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0584
  * @tc.name : dts2cpp_func_0584
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp584(a: Promise<string>): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0584', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc584.ts', `function fnExp584(a: Promise<string>): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp584');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Promise<string>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0584 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0585
  * @tc.name : dts2cpp_func_0585
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp585(a: Promise<number>): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0585', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc585.ts', `function fnExp585(a: Promise<number>): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp585');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'Promise<number>');
          } catch (err) {
      assert.fail(`dts2cpp_func_0585 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0586
  * @tc.name : dts2cpp_func_0586
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp586(a: [string, number]): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0586', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc586.ts', `function fnExp586(a: [string, number]): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp586');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '[string, number]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0586 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0587
  * @tc.name : dts2cpp_func_0587
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp587(a: [number, number, number]): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0587', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc587.ts', `function fnExp587(a: [number, number, number]): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp587');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '[number, number, number]');
          } catch (err) {
      assert.fail(`dts2cpp_func_0587 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0588
  * @tc.name : dts2cpp_func_0588
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp588(a: (x: number) => void): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0588', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc588.ts', `function fnExp588(a: (x: number) => void): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp588');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '(x: number) => void');
          } catch (err) {
      assert.fail(`dts2cpp_func_0588 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0589
  * @tc.name : dts2cpp_func_0589
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp589(a: (a: string, b: number) => boolean): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0589', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc589.ts', `function fnExp589(a: (a: string, b: number) => boolean): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp589');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, '(a: string, b: number) => boolean');
          } catch (err) {
      assert.fail(`dts2cpp_func_0589 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0590
  * @tc.name : dts2cpp_func_0590
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp590(a: number | string): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0590', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc590.ts', `function fnExp590(a: number | string): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp590');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number | string');
          } catch (err) {
      assert.fail(`dts2cpp_func_0590 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0591
  * @tc.name : dts2cpp_func_0591
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp591(a: string | null): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0591', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc591.ts', `function fnExp591(a: string | null): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp591');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'string | null');
          } catch (err) {
      assert.fail(`dts2cpp_func_0591 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_func_0592
  * @tc.name : dts2cpp_func_0592
  * @tc.desc : dts2cpp func 扩充-签名 `fnExp592(a: number | undefined): any` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseFunc_ts_ext_0592', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseFunc592.ts', `function fnExp592(a: number | undefined): any {}`);
      assert.ok(parseObj);
      assert.ok(parseObj.funcs);
      assert.strictEqual(parseObj.funcs!.length, 1);
      assert.strictEqual(parseObj.funcs![0].name, 'fnExp592');
      assert.strictEqual(parseObj.funcs![0].returns, 'any');
      assert.strictEqual(parseObj.funcs![0].parameters.length, 1);
      assert.strictEqual(parseObj.funcs![0].parameters[0].name, 'a');
      assert.strictEqual(parseObj.funcs![0].parameters[0].type, 'number | undefined');
          } catch (err) {
      assert.fail(`dts2cpp_func_0592 执行异常: ${String(err)}`);
    }
  });
});
