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

suite('Parse_Union_TS_Suite_Ext13b', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Union_TS_Suite_Ext13b');
  /**
  * @tc.number dts2cpp_union_0530
  * @tc.name parseUnion_ts_ext_0530
  * @tc.desc dts2cpp union type alias 同文件 30 个 union 批量解析。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0530', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0530.ts',
            `type UnionType0530A = string | number;
type UnionType0530B = boolean | null;
type UnionType0530C = string[] | number[];
type UnionType0530D = Set<string> | Map<string, number>;
type UnionType0530E = "a" | "b" | "c";
type UnionType0530F = [string, number] | [boolean];
type UnionType0530G = Record<string, string> | Map<string, number>;
type UnionType0530H = Promise<string> | Promise<number>;
type UnionType0530I = { id: number } | { name: string };
type UnionType0530J = keyof Options | "auto";
type UnionType0530K = bigint | number;
type UnionType0530L = symbol | string;
type UnionType0530M = object | null;
type UnionType0530N = any | unknown;
type UnionType0530O = void | never;
type UnionType0530P = readonly [string, number] | [string];
type UnionType0530Q = Array<string | number> | Array<boolean>;
type UnionType0530R = ReadonlySet<string> | ReadonlySet<number>;
type UnionType0530S = WeakMap<object, string> | WeakMap<object, number>;
type UnionType0530T = ((a: string) => void) | ((a: number) => void);
type UnionType0530U = 0x1F | 0x2A;
type UnionType0530V = 1n | 2n;
type UnionType0530W = "on" | "off";
type UnionType0530X = [string] | [number];
type UnionType0530Y = Map<number, string> | Record<number, string>;
type UnionType0530Z = { a?: string } | { b: number };
type UnionType0530AA = Date | RegExp;
type UnionType0530AB = Error | TypeError;
type UnionType0530AC = Uint8Array | Uint16Array;
type UnionType0530AD = ((err: Error) => void) | ((data: string) => void);`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types!.length, 30);
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530A'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530B'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530C'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530D'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530E'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530F'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530G'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530H'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530I'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530J'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530K'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530L'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530M'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530N'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530O'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530P'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530Q'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530R'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530S'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530T'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530U'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530V'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530W'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530X'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530Y'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530Z'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530AA'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530AB'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530AC'));
      assert.ok(parseObj.types!.some(item => item.name === 'UnionType0530AD'));
          } catch (err) {
      assert.fail(`dts2cpp_union_0530 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0531
  * @tc.name parseUnion_ts_ext_0531
  * @tc.desc dts2cpp union type alias 容错：括号不配对（成员不可拆分，断言 types 为空）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0531', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0531.ts',
            `type UnionType0531 = (string | number;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0531');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_union_0531 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0532
  * @tc.name parseUnion_ts_ext_0532
  * @tc.desc dts2cpp union type alias 容错：双竖线（成员不可拆分，断言 types 为空）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0532', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0532.ts',
            `type UnionType0532 = string || number;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0532');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_union_0532 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0533
  * @tc.name parseUnion_ts_ext_0533
  * @tc.desc dts2cpp union type alias 容错：泛型括号不闭合（成员不可拆分，断言 types 为空）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0533', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0533.ts',
            `type UnionType0533 = Array<string |;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0533');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 0);
          } catch (err) {
      assert.fail(`dts2cpp_union_0533 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0534
  * @tc.name parseUnion_ts_ext_0534
  * @tc.desc dts2cpp union type alias 容错：泛型括号不闭合（残留成员）。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0534', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0534.ts',
            `type UnionType0534 = Set<string> | Set<;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0534');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Set<string>');
      assert.strictEqual(typeItem!.types[1], 'Set<');
          } catch (err) {
      assert.fail(`dts2cpp_union_0534 执行异常: ${String(err)}`);
    }
  });
});

