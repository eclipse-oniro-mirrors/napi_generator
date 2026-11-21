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

suite('Gendts_gen_Suite_Ext67', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext67');
  /**
  * @tc.number : h2dts_gen_2193
  * @tc.name : h2dts_gen_2193
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::deque<int64_t>::iterator` → `IterableIterator<number[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2193', () => {
    try {
      const DECL = `void r5ts2193(std::deque<int64_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2193 生成结果为空');
      const expectSnippet0 = 'export function r5ts2193(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2193 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2193 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2194
  * @tc.name : h2dts_gen_2194
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::deque<unsigned>::iterator` → `IterableIterator<number[]>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2194', () => {
    try {
      const DECL = `void r5ts2194(std::deque<unsigned>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2194 生成结果为空');
      const expectSnippet0 = 'export function r5ts2194(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2194 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2194 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2195
  * @tc.name : h2dts_gen_2195
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::deque<bool>::iterator` → `IterableIterator<boolean[]>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2195', () => {
    try {
      const DECL = `void r5ts2195(std::deque<bool>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2195 生成结果为空');
      const expectSnippet0 = 'export function r5ts2195(v: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2195 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2195 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2196
  * @tc.name : h2dts_gen_2196
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::deque<char>::iterator` → `IterableIterator<string[]>` 的生成结...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2196', () => {
    try {
      const DECL = `void r5ts2196(std::deque<char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2196 生成结果为空');
      const expectSnippet0 = 'export function r5ts2196(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2196 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2196 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2197
  * @tc.name : h2dts_gen_2197
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::deque<wchar_t>::iterator` → `IterableIterator<string[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2197', () => {
    try {
      const DECL = `void r5ts2197(std::deque<wchar_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2197 生成结果为空');
      const expectSnippet0 = 'export function r5ts2197(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2197 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2197 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2198
  * @tc.name : h2dts_gen_2198
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::deque<char8_t>::iterator` → `IterableIterator<string[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2198', () => {
    try {
      const DECL = `void r5ts2198(std::deque<char8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2198 生成结果为空');
      const expectSnippet0 = 'export function r5ts2198(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2198 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2198 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2199
  * @tc.name : h2dts_gen_2199
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::deque<char16_t>::iterator` → `IterableIterator<string[]>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2199', () => {
    try {
      const DECL = `void r5ts2199(std::deque<char16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2199 生成结果为空');
      const expectSnippet0 = 'export function r5ts2199(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2199 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2199 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2200
  * @tc.name : h2dts_gen_2200
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::deque<char32_t>::iterator` → `IterableIterator<string[]>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2200', () => {
    try {
      const DECL = `void r5ts2200(std::deque<char32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2200 生成结果为空');
      const expectSnippet0 = 'export function r5ts2200(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2200 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2200 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2201
  * @tc.name : h2dts_gen_2201
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2201', () => {
    try {
      const DECL = `void r5ts2201(std::list<int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2201 生成结果为空');
      const expectSnippet0 = 'export function r5ts2201(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2201 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2201 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2202
  * @tc.name : h2dts_gen_2202
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2202', () => {
    try {
      const DECL = `void r5ts2202(std::list<size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2202 生成结果为空');
      const expectSnippet0 = 'export function r5ts2202(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2202 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2202 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2203
  * @tc.name : h2dts_gen_2203
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2203', () => {
    try {
      const DECL = `void r5ts2203(std::list<double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2203 生成结果为空');
      const expectSnippet0 = 'export function r5ts2203(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2203 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2203 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2204
  * @tc.name : h2dts_gen_2204
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2204', () => {
    try {
      const DECL = `void r5ts2204(std::list<float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2204 生成结果为空');
      const expectSnippet0 = 'export function r5ts2204(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2204 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2204 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2205
  * @tc.name : h2dts_gen_2205
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2205', () => {
    try {
      const DECL = `void r5ts2205(std::list<long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2205 生成结果为空');
      const expectSnippet0 = 'export function r5ts2205(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2205 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2205 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2206
  * @tc.name : h2dts_gen_2206
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2206', () => {
    try {
      const DECL = `void r5ts2206(std::list<short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2206 生成结果为空');
      const expectSnippet0 = 'export function r5ts2206(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2206 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2206 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2207
  * @tc.name : h2dts_gen_2207
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2207', () => {
    try {
      const DECL = `void r5ts2207(std::list<uint8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2207 生成结果为空');
      const expectSnippet0 = 'export function r5ts2207(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2207 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2207 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2208
  * @tc.name : h2dts_gen_2208
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2208', () => {
    try {
      const DECL = `void r5ts2208(std::list<uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2208 生成结果为空');
      const expectSnippet0 = 'export function r5ts2208(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2208 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2208 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2209
  * @tc.name : h2dts_gen_2209
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2209', () => {
    try {
      const DECL = `void r5ts2209(std::list<uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2209 生成结果为空');
      const expectSnippet0 = 'export function r5ts2209(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2209 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2209 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2210
  * @tc.name : h2dts_gen_2210
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2210', () => {
    try {
      const DECL = `void r5ts2210(std::list<uint64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2210 生成结果为空');
      const expectSnippet0 = 'export function r5ts2210(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2210 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2210 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2211
  * @tc.name : h2dts_gen_2211
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2211', () => {
    try {
      const DECL = `void r5ts2211(std::list<int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2211 生成结果为空');
      const expectSnippet0 = 'export function r5ts2211(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2211 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2211 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2212
  * @tc.name : h2dts_gen_2212
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2212', () => {
    try {
      const DECL = `void r5ts2212(std::list<int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2212 生成结果为空');
      const expectSnippet0 = 'export function r5ts2212(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2212 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2212 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2213
  * @tc.name : h2dts_gen_2213
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2213', () => {
    try {
      const DECL = `void r5ts2213(std::list<int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2213 生成结果为空');
      const expectSnippet0 = 'export function r5ts2213(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2213 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2213 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2214
  * @tc.name : h2dts_gen_2214
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2214', () => {
    try {
      const DECL = `void r5ts2214(std::list<int64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2214 生成结果为空');
      const expectSnippet0 = 'export function r5ts2214(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2214 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2214 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2215
  * @tc.name : h2dts_gen_2215
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2215', () => {
    try {
      const DECL = `void r5ts2215(std::list<unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2215 生成结果为空');
      const expectSnippet0 = 'export function r5ts2215(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2215 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2215 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2216
  * @tc.name : h2dts_gen_2216
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2216', () => {
    try {
      const DECL = `void r5ts2216(std::list<bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2216 生成结果为空');
      const expectSnippet0 = 'export function r5ts2216(v: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2216 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2216 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2217
  * @tc.name : h2dts_gen_2217
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2217', () => {
    try {
      const DECL = `void r5ts2217(std::list<char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2217 生成结果为空');
      const expectSnippet0 = 'export function r5ts2217(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2217 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2217 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2218
  * @tc.name : h2dts_gen_2218
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2218', () => {
    try {
      const DECL = `void r5ts2218(std::list<wchar_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2218 生成结果为空');
      const expectSnippet0 = 'export function r5ts2218(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2218 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2218 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2219
  * @tc.name : h2dts_gen_2219
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2219', () => {
    try {
      const DECL = `void r5ts2219(std::list<char8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2219 生成结果为空');
      const expectSnippet0 = 'export function r5ts2219(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2219 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2219 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2220
  * @tc.name : h2dts_gen_2220
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2220', () => {
    try {
      const DECL = `void r5ts2220(std::list<char16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2220 生成结果为空');
      const expectSnippet0 = 'export function r5ts2220(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2220 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2220 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2221
  * @tc.name : h2dts_gen_2221
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::list<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2221', () => {
    try {
      const DECL = `void r5ts2221(std::list<char32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2221 生成结果为空');
      const expectSnippet0 = 'export function r5ts2221(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2221 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2221 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2222
  * @tc.name : h2dts_gen_2222
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2222', () => {
    try {
      const DECL = `void r5ts2222(std::list<int>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2222 生成结果为空');
      const expectSnippet0 = 'export function r5ts2222(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2222 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2222 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2223
  * @tc.name : h2dts_gen_2223
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<size_t>::iterator` → `IterableIterator<number[]>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2223', () => {
    try {
      const DECL = `void r5ts2223(std::list<size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2223 生成结果为空');
      const expectSnippet0 = 'export function r5ts2223(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2223 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2223 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2224
  * @tc.name : h2dts_gen_2224
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<double>::iterator` → `IterableIterator<number[]>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2224', () => {
    try {
      const DECL = `void r5ts2224(std::list<double>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2224 生成结果为空');
      const expectSnippet0 = 'export function r5ts2224(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2224 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2224 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2225
  * @tc.name : h2dts_gen_2225
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<float>::iterator` → `IterableIterator<number[]>` 的生成结...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2225', () => {
    try {
      const DECL = `void r5ts2225(std::list<float>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2225 生成结果为空');
      const expectSnippet0 = 'export function r5ts2225(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2225 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2225 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2226
  * @tc.name : h2dts_gen_2226
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<long>::iterator` → `IterableIterator<number[]>` 的生成结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2226', () => {
    try {
      const DECL = `void r5ts2226(std::list<long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2226 生成结果为空');
      const expectSnippet0 = 'export function r5ts2226(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2226 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2226 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2227
  * @tc.name : h2dts_gen_2227
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::list<short>::iterator` → `IterableIterator<number[]>` 的生成结...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2227', () => {
    try {
      const DECL = `void r5ts2227(std::list<short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2227 生成结果为空');
      const expectSnippet0 = 'export function r5ts2227(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2227 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2227 执行异常: ${String(err)}`);
    }
  });
});
