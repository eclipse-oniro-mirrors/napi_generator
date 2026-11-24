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

suite('Parse_Union_TS_Suite_Ext03', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_Union_TS_Suite_Ext03');
  /**
  * @tc.number dts2cpp_union_0061
  * @tc.name parseUnion_ts_ext_0061
  * @tc.desc dts2cpp union type alias `type UnionType0061 = { id: number } | { name: string }` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0061', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0061.ts',
            `type UnionType0061 = { id: number } | { name: string };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0061');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ id: number }');
      assert.strictEqual(typeItem!.types[1], '{ name: string }');
          } catch (err) {
      assert.fail(`dts2cpp_union_0061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0062
  * @tc.name parseUnion_ts_ext_0062
  * @tc.desc dts2cpp union type alias `type UnionType0062 = { type: "text"; value: string } | { type: "count"; value: number }` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0062', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0062.ts',
            `type UnionType0062 = { type: "text"; value: string } | { type: "count"; value: number };`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0062');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ type: "text"; value: string }');
      assert.strictEqual(typeItem!.types[1], '{ type: "count"; value: number }');
          } catch (err) {
      assert.fail(`dts2cpp_union_0062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0063
  * @tc.name parseUnion_ts_ext_0063
  * @tc.desc dts2cpp union type alias `type UnionType0063 = { readonly id: number } | null` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0063', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0063.ts',
            `type UnionType0063 = { readonly id: number } | null;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0063');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '{ readonly id: number }');
      assert.strictEqual(typeItem!.types[1], 'null');
          } catch (err) {
      assert.fail(`dts2cpp_union_0063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0064
  * @tc.name parseUnion_ts_ext_0064
  * @tc.desc dts2cpp union type alias `type UnionType0064 = keyof Options | "auto"` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0064', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0064.ts',
            `interface Options { width: number; height: number; }
type UnionType0064 = keyof Options | "auto";`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0064');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'keyof Options');
      assert.strictEqual(typeItem!.types[1], '"auto"');
          } catch (err) {
      assert.fail(`dts2cpp_union_0064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0065
  * @tc.name parseUnion_ts_ext_0065
  * @tc.desc dts2cpp union type alias `type UnionType0065 = Options[keyof Options] | null` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0065', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0065.ts',
            `interface Options { width: number; title: string; }
type UnionType0065 = Options[keyof Options] | null;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0065');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Options[keyof Options]');
      assert.strictEqual(typeItem!.types[1], 'null');
          } catch (err) {
      assert.fail(`dts2cpp_union_0065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0066
  * @tc.name parseUnion_ts_ext_0066
  * @tc.desc dts2cpp union type alias `type UnionType0066 = typeof DEFAULT_VALUE | number` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0066', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0066.ts',
            `const DEFAULT_VALUE = "default";
type UnionType0066 = typeof DEFAULT_VALUE | number;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0066');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'typeof DEFAULT_VALUE');
      assert.strictEqual(typeItem!.types[1], 'number');
          } catch (err) {
      assert.fail(`dts2cpp_union_0066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0067
  * @tc.name parseUnion_ts_ext_0067
  * @tc.desc dts2cpp union type alias `type UnionType0067 = Date | RegExp` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0067', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0067.ts',
            `type UnionType0067 = Date | RegExp;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0067');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Date');
      assert.strictEqual(typeItem!.types[1], 'RegExp');
          } catch (err) {
      assert.fail(`dts2cpp_union_0067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0068
  * @tc.name parseUnion_ts_ext_0068
  * @tc.desc dts2cpp union type alias `type UnionType0068 = Error | string` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0068', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0068.ts',
            `type UnionType0068 = Error | string;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0068');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Error');
      assert.strictEqual(typeItem!.types[1], 'string');
          } catch (err) {
      assert.fail(`dts2cpp_union_0068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0069
  * @tc.name parseUnion_ts_ext_0069
  * @tc.desc dts2cpp union type alias `type UnionType0069 = ArrayBuffer | Uint8Array` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0069', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0069.ts',
            `type UnionType0069 = ArrayBuffer | Uint8Array;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0069');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ArrayBuffer');
      assert.strictEqual(typeItem!.types[1], 'Uint8Array');
          } catch (err) {
      assert.fail(`dts2cpp_union_0069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0070
  * @tc.name parseUnion_ts_ext_0070
  * @tc.desc dts2cpp union type alias `type UnionType0070 = Int8Array | Uint8Array` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0070', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0070.ts',
            `type UnionType0070 = Int8Array | Uint8Array;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0070');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Int8Array');
      assert.strictEqual(typeItem!.types[1], 'Uint8Array');
          } catch (err) {
      assert.fail(`dts2cpp_union_0070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0071
  * @tc.name parseUnion_ts_ext_0071
  * @tc.desc dts2cpp union type alias `type UnionType0071 = number | `${number}px`` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0071', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0071.ts',
            `type UnionType0071 = number | \`\${number}px\`;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0071');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'number');
      assert.strictEqual(typeItem!.types[1], '`${number}px`');
          } catch (err) {
      assert.fail(`dts2cpp_union_0071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0072
  * @tc.name parseUnion_ts_ext_0072
  * @tc.desc dts2cpp union type alias `type UnionType0072 = `get${string}` | `set${string}`` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0072', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0072.ts',
            `type UnionType0072 = \`get\${string}\` | \`set\${string}\`;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0072');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '`get${string}`');
      assert.strictEqual(typeItem!.types[1], '`set${string}`');
          } catch (err) {
      assert.fail(`dts2cpp_union_0072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0073
  * @tc.name parseUnion_ts_ext_0073
  * @tc.desc dts2cpp union type alias `type UnionType0073 = string & { readonly brand: unique symbol } | number` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0073', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0073.ts',
            `type UnionType0073 = string & { readonly brand: unique symbol } | number;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0073');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'string & { readonly brand: unique symbol }');
      assert.strictEqual(typeItem!.types[1], 'number');
          } catch (err) {
      assert.fail(`dts2cpp_union_0073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0074
  * @tc.name parseUnion_ts_ext_0074
  * @tc.desc dts2cpp union type alias `type UnionType0074 = (string & {}) | number` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0074', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0074.ts',
            `type UnionType0074 = (string & {}) | number;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0074');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], '(string & {})');
      assert.strictEqual(typeItem!.types[1], 'number');
          } catch (err) {
      assert.fail(`dts2cpp_union_0074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0075
  * @tc.name parseUnion_ts_ext_0075
  * @tc.desc dts2cpp union type alias `type UnionType0075 = Partial<Options> | Required<Options>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0075', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0075.ts',
            `interface Options { width?: number; title?: string; }
type UnionType0075 = Partial<Options> | Required<Options>;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0075');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Partial<Options>');
      assert.strictEqual(typeItem!.types[1], 'Required<Options>');
          } catch (err) {
      assert.fail(`dts2cpp_union_0075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0076
  * @tc.name parseUnion_ts_ext_0076
  * @tc.desc dts2cpp union type alias `type UnionType0076 = Pick<Options, "width"> | Omit<Options, "width">` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0076', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0076.ts',
            `interface Options { width: number; title: string; }
type UnionType0076 = Pick<Options, "width"> | Omit<Options, "width">;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0076');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Pick<Options, "width">');
      assert.strictEqual(typeItem!.types[1], 'Omit<Options, "width">');
          } catch (err) {
      assert.fail(`dts2cpp_union_0076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0077
  * @tc.name parseUnion_ts_ext_0077
  * @tc.desc dts2cpp union type alias `type UnionType0077 = Readonly<Options> | Options` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0077', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0077.ts',
            `interface Options { width: number; }
type UnionType0077 = Readonly<Options> | Options;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0077');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Readonly<Options>');
      assert.strictEqual(typeItem!.types[1], 'Options');
          } catch (err) {
      assert.fail(`dts2cpp_union_0077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0078
  * @tc.name parseUnion_ts_ext_0078
  * @tc.desc dts2cpp union type alias `type UnionType0078 = Record<"a" | "b", number> | Map<string, number>` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0078', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0078.ts',
            `type UnionType0078 = Record<"a" | "b", number> | Map<string, number>;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0078');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Record<"a" | "b", number>');
      assert.strictEqual(typeItem!.types[1], 'Map<string, number>');
          } catch (err) {
      assert.fail(`dts2cpp_union_0078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0079
  * @tc.name parseUnion_ts_ext_0079
  * @tc.desc dts2cpp union type alias `type UnionType0079 = NonNullable<string | null> | number` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0079', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0079.ts',
            `type UnionType0079 = NonNullable<string | null> | number;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0079');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'NonNullable<string | null>');
      assert.strictEqual(typeItem!.types[1], 'number');
          } catch (err) {
      assert.fail(`dts2cpp_union_0079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0080
  * @tc.name parseUnion_ts_ext_0080
  * @tc.desc dts2cpp union type alias `type UnionType0080 = Exclude<string | number, string> | boolean` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0080', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0080.ts',
            `type UnionType0080 = Exclude<string | number, string> | boolean;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0080');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Exclude<string | number, string>');
      assert.strictEqual(typeItem!.types[1], 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_union_0080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0081
  * @tc.name parseUnion_ts_ext_0081
  * @tc.desc dts2cpp union type alias `type UnionType0081 = Extract<string | number, string> | boolean` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0081', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0081.ts',
            `type UnionType0081 = Extract<string | number, string> | boolean;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0081');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Extract<string | number, string>');
      assert.strictEqual(typeItem!.types[1], 'boolean');
          } catch (err) {
      assert.fail(`dts2cpp_union_0081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0082
  * @tc.name parseUnion_ts_ext_0082
  * @tc.desc dts2cpp union type alias `type UnionType0082 = Awaited<Promise<string>> | number` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0082', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0082.ts',
            `type UnionType0082 = Awaited<Promise<string>> | number;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0082');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Awaited<Promise<string>>');
      assert.strictEqual(typeItem!.types[1], 'number');
          } catch (err) {
      assert.fail(`dts2cpp_union_0082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0083
  * @tc.name parseUnion_ts_ext_0083
  * @tc.desc dts2cpp union type alias `type UnionType0083 = ReturnType<() => string> | number` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0083', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0083.ts',
            `type UnionType0083 = ReturnType<() => string> | number;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0083');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ReturnType<() => string>');
      assert.strictEqual(typeItem!.types[1], 'number');
          } catch (err) {
      assert.fail(`dts2cpp_union_0083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0084
  * @tc.name parseUnion_ts_ext_0084
  * @tc.desc dts2cpp union type alias `type UnionType0084 = Parameters<(s: string) => void> | [number]` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0084', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0084.ts',
            `type UnionType0084 = Parameters<(s: string) => void> | [number];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0084');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Parameters<(s: string) => void>');
      assert.strictEqual(typeItem!.types[1], '[number]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0085
  * @tc.name parseUnion_ts_ext_0085
  * @tc.desc dts2cpp union type alias `type UnionType0085 = ConstructorParameters<ErrorConstructor> | [string]` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0085', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0085.ts',
            `type UnionType0085 = ConstructorParameters<ErrorConstructor> | [string];`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0085');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ConstructorParameters<ErrorConstructor>');
      assert.strictEqual(typeItem!.types[1], '[string]');
          } catch (err) {
      assert.fail(`dts2cpp_union_0085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0086
  * @tc.name parseUnion_ts_ext_0086
  * @tc.desc dts2cpp union type alias `type UnionType0086 = InstanceType<typeof Error> | string` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0086', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0086.ts',
            `type UnionType0086 = InstanceType<typeof Error> | string;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0086');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'InstanceType<typeof Error>');
      assert.strictEqual(typeItem!.types[1], 'string');
          } catch (err) {
      assert.fail(`dts2cpp_union_0086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0087
  * @tc.name parseUnion_ts_ext_0087
  * @tc.desc dts2cpp union type alias `type UnionType0087 = ThisParameterType<(this: Date) => void> | string` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0087', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0087.ts',
            `type UnionType0087 = ThisParameterType<(this: Date) => void> | string;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0087');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'ThisParameterType<(this: Date) => void>');
      assert.strictEqual(typeItem!.types[1], 'string');
          } catch (err) {
      assert.fail(`dts2cpp_union_0087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0088
  * @tc.name parseUnion_ts_ext_0088
  * @tc.desc dts2cpp union type alias `type UnionType0088 = Uppercase<"a"> | Lowercase<"B">` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0088', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0088.ts',
            `type UnionType0088 = Uppercase<"a"> | Lowercase<"B">;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0088');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Uppercase<"a">');
      assert.strictEqual(typeItem!.types[1], 'Lowercase<"B">');
          } catch (err) {
      assert.fail(`dts2cpp_union_0088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_union_0089
  * @tc.name parseUnion_ts_ext_0089
  * @tc.desc dts2cpp union type alias `type UnionType0089 = Capitalize<"name"> | Uncapitalize<"Title">` 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseUnion_ts_ext_0089', () => {
    try {
      let parseObj: ParseObj | undefined;
            parseObj = doParseTs(
            'parseUnion0089.ts',
            `type UnionType0089 = Capitalize<"name"> | Uncapitalize<"Title">;`
          );
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      const typeItem = parseObj.types!.find(item => item.name === 'UnionType0089');
      assert.ok(typeItem);
      assert.strictEqual(typeItem!.types.length, 2);
      assert.strictEqual(typeItem!.types[0], 'Capitalize<"name">');
      assert.strictEqual(typeItem!.types[1], 'Uncapitalize<"Title">');
          } catch (err) {
      assert.fail(`dts2cpp_union_0089 执行异常: ${String(err)}`);
    }
  });

});
