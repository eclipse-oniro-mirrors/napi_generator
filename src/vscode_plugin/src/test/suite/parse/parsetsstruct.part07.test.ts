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

suite('Parse_Struct_TS_Suite_Ext07', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Struct_TS_Suite_Ext07');
  /**
  * @tc.number : dts2cpp_struct_0318
  * @tc.name : dts2cpp_struct_0318
  * @tc.desc : dts2cpp struct 扩充-interface `Opt` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0318', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct318.ts', `interface Opt { a?: number; b?: string; c?: boolean; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'Opt');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 3);
      assert.strictEqual(structItem!.members![0].name, 'a');
      assert.strictEqual(structItem!.members![0].type, 'number');
      assert.strictEqual(structItem!.members![1].name, 'b');
      assert.strictEqual(structItem!.members![1].type, 'string');
      assert.strictEqual(structItem!.members![2].name, 'c');
      assert.strictEqual(structItem!.members![2].type, 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0318 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0319
  * @tc.name : dts2cpp_struct_0319
  * @tc.desc : dts2cpp struct 扩充-interface `RW` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0319', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct319.ts', `interface RW { readonly id: number; label: string; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'RW');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 2);
      assert.strictEqual(structItem!.members![0].name, 'id');
      assert.strictEqual(structItem!.members![0].type, 'number');
      assert.strictEqual(structItem!.members![1].name, 'label');
      assert.strictEqual(structItem!.members![1].type, 'string');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0319 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0320
  * @tc.name : dts2cpp_struct_0320
  * @tc.desc : dts2cpp struct 扩充-interface `Idx` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0320', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct320.ts', `interface Idx { [key: string]: number; total: number; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'Idx');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 1);
      assert.strictEqual(structItem!.members![0].name, 'total');
      assert.strictEqual(structItem!.members![0].type, 'number');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0320 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0321
  * @tc.name : dts2cpp_struct_0321
  * @tc.desc : dts2cpp struct 扩充-interface `Child` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0321', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct321.ts', `interface Base { x: number; } interface Child extends Base { y: string; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 2);
      const structItem = parseObj.structs!.find(s => s.name === 'Child');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 1);
      assert.strictEqual(structItem!.members![0].name, 'y');
      assert.strictEqual(structItem!.members![0].type, 'string');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0321 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0322
  * @tc.name : dts2cpp_struct_0322
  * @tc.desc : dts2cpp struct 扩充-interface `Pair` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0322', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct322.ts', `interface Pair { first: string; second: number; third?: boolean; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'Pair');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 3);
      assert.strictEqual(structItem!.members![0].name, 'first');
      assert.strictEqual(structItem!.members![0].type, 'string');
      assert.strictEqual(structItem!.members![1].name, 'second');
      assert.strictEqual(structItem!.members![1].type, 'number');
      assert.strictEqual(structItem!.members![2].name, 'third');
      assert.strictEqual(structItem!.members![2].type, 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0322 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0323
  * @tc.name : dts2cpp_struct_0323
  * @tc.desc : dts2cpp struct 扩充-interface `Nested` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0323', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct323.ts', `interface Nested { outer: { inner: number; }; flag: boolean; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'Nested');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 2);
      assert.strictEqual(structItem!.members![0].name, 'outer');
      assert.strictEqual(structItem!.members![0].type, '{ inner: number; }');
      assert.strictEqual(structItem!.members![1].name, 'flag');
      assert.strictEqual(structItem!.members![1].type, 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0323 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0324
  * @tc.name : dts2cpp_struct_0324
  * @tc.desc : dts2cpp struct 扩充-interface `Callable` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0324', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct324.ts', `interface Callable { (x: number): string; label: string; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'Callable');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 1);
      assert.strictEqual(structItem!.members![0].name, 'label');
      assert.strictEqual(structItem!.members![0].type, 'string');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0324 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0325
  * @tc.name : dts2cpp_struct_0325
  * @tc.desc : dts2cpp struct 扩充-interface `GenericIF` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0325', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct325.ts', `interface GenericIF<T> { value: T; items: T[]; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'GenericIF');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 2);
      assert.strictEqual(structItem!.members![0].name, 'value');
      assert.strictEqual(structItem!.members![0].type, 'T');
      assert.strictEqual(structItem!.members![1].name, 'items');
      assert.strictEqual(structItem!.members![1].type, 'T[]');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0325 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0326
  * @tc.name : dts2cpp_struct_0326
  * @tc.desc : dts2cpp struct 扩充-interface `ExportedIF` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0326', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct326.ts', `export interface ExportedIF { id: number; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'ExportedIF');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 1);
      assert.strictEqual(structItem!.members![0].name, 'id');
      assert.strictEqual(structItem!.members![0].type, 'number');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0326 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0327
  * @tc.name : dts2cpp_struct_0327
  * @tc.desc : dts2cpp struct 扩充-interface `UnionIF` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0327', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct327.ts', `interface UnionIF { kind: "a" | "b"; data: number | string; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'UnionIF');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 2);
      assert.strictEqual(structItem!.members![0].name, 'kind');
      assert.strictEqual(structItem!.members![0].type, '"a" | "b"');
      assert.strictEqual(structItem!.members![1].name, 'data');
      assert.strictEqual(structItem!.members![1].type, 'number | string');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0327 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0328
  * @tc.name : dts2cpp_struct_0328
  * @tc.desc : dts2cpp struct 扩充-interface `MethodIF` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0328', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct328.ts', `interface MethodIF { run(): void; compute(x: number): number; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'MethodIF');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_struct_0328 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0329
  * @tc.name : dts2cpp_struct_0329
  * @tc.desc : dts2cpp struct 扩充-interface `ArrayIF` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0329', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct329.ts', `interface ArrayIF { nums: number[]; strs: ReadonlyArray<string>; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'ArrayIF');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 2);
      assert.strictEqual(structItem!.members![0].name, 'nums');
      assert.strictEqual(structItem!.members![0].type, 'number[]');
      assert.strictEqual(structItem!.members![1].name, 'strs');
      assert.strictEqual(structItem!.members![1].type, 'ReadonlyArray<string>');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0329 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0330
  * @tc.name : dts2cpp_struct_0330
  * @tc.desc : dts2cpp struct 扩充-interface `MapIF` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0330', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct330.ts', `interface MapIF { table: Map<string, number>; keys: Set<string>; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'MapIF');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 2);
      assert.strictEqual(structItem!.members![0].name, 'table');
      assert.strictEqual(structItem!.members![0].type, 'Map<string, number>');
      assert.strictEqual(structItem!.members![1].name, 'keys');
      assert.strictEqual(structItem!.members![1].type, 'Set<string>');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0330 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0331
  * @tc.name : dts2cpp_struct_0331
  * @tc.desc : dts2cpp struct 扩充-interface `PromiseIF` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0331', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct331.ts', `interface PromiseIF { task: Promise<number>; label: string; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 1);
      const structItem = parseObj.structs!.find(s => s.name === 'PromiseIF');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 2);
      assert.strictEqual(structItem!.members![0].name, 'task');
      assert.strictEqual(structItem!.members![0].type, 'Promise<number>');
      assert.strictEqual(structItem!.members![1].name, 'label');
      assert.strictEqual(structItem!.members![1].type, 'string');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0331 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : dts2cpp_struct_0332
  * @tc.name : dts2cpp_struct_0332
  * @tc.desc : dts2cpp struct 扩充-interface `DeepExt` 的解析结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('parseStruct_ts_ext_0332', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs('parseStruct332.ts', `interface DeepExt extends Base { z: boolean; } interface Base { x: number; y: string; }`);
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs!.length, 2);
      const structItem = parseObj.structs!.find(s => s.name === 'DeepExt');
      assert.ok(structItem);
      assert.strictEqual(structItem!.members!.length, 1);
      assert.strictEqual(structItem!.members![0].name, 'z');
      assert.strictEqual(structItem!.members![0].type, 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_struct_0332 执行异常: ${String(err)}`);
    }
  });
});
