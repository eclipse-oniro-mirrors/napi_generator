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
import { parseFunction, parseClass, parseStruct, parseEnum, parseUnion } from '../../../parse/parsec';
import { getDtsFunction, getDtsClasses, getDtsStructs, getDtsEnum, getDtsUnions, genDtsFile } from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj, ClassObj, FuncObj, StructObj, EnumObj, UnionObj } from '../../../gen/datatype';

suite('Gendts_gen_Suite_Ext08', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext08');
  /**
  * @tc.number : h2dts_gen_0221
  * @tc.name : h2dts_gen_0221
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0221', () => {
    try {
      const DECL = `void genType221(std::vector<int64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0221 生成结果为空');
      const expectSnippet0 = 'export function genType221(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0221 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0221 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0222
  * @tc.name : h2dts_gen_0222
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0222', () => {
    try {
      const DECL = `void genType222(std::vector<unsigned> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0222 生成结果为空');
      const expectSnippet0 = 'export function genType222(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0222 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0222 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0223
  * @tc.name : h2dts_gen_0223
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0223', () => {
    try {
      const DECL = `void genType223(std::vector<bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0223 生成结果为空');
      const expectSnippet0 = 'export function genType223(v: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0223 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0223 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0224
  * @tc.name : h2dts_gen_0224
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0224', () => {
    try {
      const DECL = `void genType224(std::vector<char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0224 生成结果为空');
      const expectSnippet0 = 'export function genType224(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0224 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0224 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0225
  * @tc.name : h2dts_gen_0225
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0225', () => {
    try {
      const DECL = `void genType225(std::vector<wchar_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0225 生成结果为空');
      const expectSnippet0 = 'export function genType225(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0225 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0225 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0226
  * @tc.name : h2dts_gen_0226
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0226', () => {
    try {
      const DECL = `void genType226(std::vector<char8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0226 生成结果为空');
      const expectSnippet0 = 'export function genType226(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0226 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0226 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0227
  * @tc.name : h2dts_gen_0227
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0227', () => {
    try {
      const DECL = `void genType227(std::vector<char16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0227 生成结果为空');
      const expectSnippet0 = 'export function genType227(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0227 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0227 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0228
  * @tc.name : h2dts_gen_0228
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0228', () => {
    try {
      const DECL = `void genType228(std::vector<char32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0228 生成结果为空');
      const expectSnippet0 = 'export function genType228(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0228 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0228 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0229
  * @tc.name : h2dts_gen_0229
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0229', () => {
    try {
      const DECL = `void genType229(std::vector<int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0229 生成结果为空');
      const expectSnippet0 = 'export function genType229(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0229 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0229 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0230
  * @tc.name : h2dts_gen_0230
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0230', () => {
    try {
      const DECL = `void genType230(std::vector<size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0230 生成结果为空');
      const expectSnippet0 = 'export function genType230(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0230 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0230 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0231
  * @tc.name : h2dts_gen_0231
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0231', () => {
    try {
      const DECL = `void genType231(std::vector<double>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0231 生成结果为空');
      const expectSnippet0 = 'export function genType231(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0231 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0231 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0232
  * @tc.name : h2dts_gen_0232
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0232', () => {
    try {
      const DECL = `void genType232(std::vector<float>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0232 生成结果为空');
      const expectSnippet0 = 'export function genType232(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0232 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0232 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0233
  * @tc.name : h2dts_gen_0233
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0233', () => {
    try {
      const DECL = `void genType233(std::vector<long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0233 生成结果为空');
      const expectSnippet0 = 'export function genType233(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0233 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0233 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0234
  * @tc.name : h2dts_gen_0234
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0234', () => {
    try {
      const DECL = `void genType234(std::vector<short>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0234 生成结果为空');
      const expectSnippet0 = 'export function genType234(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0234 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0234 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0235
  * @tc.name : h2dts_gen_0235
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0235', () => {
    try {
      const DECL = `void genType235(std::vector<uint8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0235 生成结果为空');
      const expectSnippet0 = 'export function genType235(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0235 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0235 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0236
  * @tc.name : h2dts_gen_0236
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0236', () => {
    try {
      const DECL = `void genType236(std::vector<uint16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0236 生成结果为空');
      const expectSnippet0 = 'export function genType236(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0236 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0236 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0237
  * @tc.name : h2dts_gen_0237
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0237', () => {
    try {
      const DECL = `void genType237(std::vector<uint32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0237 生成结果为空');
      const expectSnippet0 = 'export function genType237(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0237 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0237 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0238
  * @tc.name : h2dts_gen_0238
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0238', () => {
    try {
      const DECL = `void genType238(std::vector<uint64_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0238 生成结果为空');
      const expectSnippet0 = 'export function genType238(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0238 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0238 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0239
  * @tc.name : h2dts_gen_0239
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0239', () => {
    try {
      const DECL = `void genType239(std::vector<int8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0239 生成结果为空');
      const expectSnippet0 = 'export function genType239(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0239 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0239 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0240
  * @tc.name : h2dts_gen_0240
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0240', () => {
    try {
      const DECL = `void genType240(std::vector<int16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0240 生成结果为空');
      const expectSnippet0 = 'export function genType240(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0240 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0240 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0241
  * @tc.name : h2dts_gen_0241
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0241', () => {
    try {
      const DECL = `void genType241(std::vector<int32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0241 生成结果为空');
      const expectSnippet0 = 'export function genType241(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0241 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0241 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0242
  * @tc.name : h2dts_gen_0242
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0242', () => {
    try {
      const DECL = `void genType242(std::vector<int64_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0242 生成结果为空');
      const expectSnippet0 = 'export function genType242(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0242 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0242 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0243
  * @tc.name : h2dts_gen_0243
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0243', () => {
    try {
      const DECL = `void genType243(std::vector<unsigned>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0243 生成结果为空');
      const expectSnippet0 = 'export function genType243(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0243 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0243 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0244
  * @tc.name : h2dts_gen_0244
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0244', () => {
    try {
      const DECL = `void genType244(std::vector<bool>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0244 生成结果为空');
      const expectSnippet0 = 'export function genType244(v: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0244 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0244 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0245
  * @tc.name : h2dts_gen_0245
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0245', () => {
    try {
      const DECL = `void genType245(std::vector<char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0245 生成结果为空');
      const expectSnippet0 = 'export function genType245(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0245 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0245 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0246
  * @tc.name : h2dts_gen_0246
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0246', () => {
    try {
      const DECL = `void genType246(std::vector<wchar_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0246 生成结果为空');
      const expectSnippet0 = 'export function genType246(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0246 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0246 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0247
  * @tc.name : h2dts_gen_0247
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0247', () => {
    try {
      const DECL = `void genType247(std::vector<char8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0247 生成结果为空');
      const expectSnippet0 = 'export function genType247(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0247 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0247 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0248
  * @tc.name : h2dts_gen_0248
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0248', () => {
    try {
      const DECL = `void genType248(std::vector<char16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0248 生成结果为空');
      const expectSnippet0 = 'export function genType248(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0248 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0248 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0249
  * @tc.name : h2dts_gen_0249
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::vector<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0249', () => {
    try {
      const DECL = `void genType249(std::vector<char32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0249 生成结果为空');
      const expectSnippet0 = 'export function genType249(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0249 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0249 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0250
  * @tc.name : h2dts_gen_0250
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::array<int, 10>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0250', () => {
    try {
      const DECL = `void genType250(std::array<int, 10> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0250 生成结果为空');
      const expectSnippet0 = 'export function genType250(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0250 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0250 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0251
  * @tc.name : h2dts_gen_0251
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::array<size_t, 10>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0251', () => {
    try {
      const DECL = `void genType251(std::array<size_t, 10> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0251 生成结果为空');
      const expectSnippet0 = 'export function genType251(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0251 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0251 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0252
  * @tc.name : h2dts_gen_0252
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::array<double, 10>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0252', () => {
    try {
      const DECL = `void genType252(std::array<double, 10> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0252 生成结果为空');
      const expectSnippet0 = 'export function genType252(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0252 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0252 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0253
  * @tc.name : h2dts_gen_0253
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::array<float, 10>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0253', () => {
    try {
      const DECL = `void genType253(std::array<float, 10> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0253 生成结果为空');
      const expectSnippet0 = 'export function genType253(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0253 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0253 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0254
  * @tc.name : h2dts_gen_0254
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::array<long, 10>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0254', () => {
    try {
      const DECL = `void genType254(std::array<long, 10> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0254 生成结果为空');
      const expectSnippet0 = 'export function genType254(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0254 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0254 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0255
  * @tc.name : h2dts_gen_0255
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::array<short, 10>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0255', () => {
    try {
      const DECL = `void genType255(std::array<short, 10> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0255 生成结果为空');
      const expectSnippet0 = 'export function genType255(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0255 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0255 执行异常: ${String(err)}`);
    }
  });
});
