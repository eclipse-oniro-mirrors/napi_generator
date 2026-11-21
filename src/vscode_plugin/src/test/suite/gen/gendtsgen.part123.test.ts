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

suite('Gendts_gen_Suite_Ext123', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext123');
  /**
  * @tc.number : h2dts_gen_4122
  * @tc.name : h2dts_gen_4122
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<int64_t>::iterator` → `IterableIterator<number[]>...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4122', () => {
    try {
      const DECL = `void r5ts4122(std::valarray<int64_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4122 生成结果为空');
      const expectSnippet0 = 'export function r5ts4122(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4122 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4122 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4123
  * @tc.name : h2dts_gen_4123
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<unsigned>::iterator` → `IterableIterator<number[]...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4123', () => {
    try {
      const DECL = `void r5ts4123(std::valarray<unsigned>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4123 生成结果为空');
      const expectSnippet0 = 'export function r5ts4123(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4123 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4123 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4124
  * @tc.name : h2dts_gen_4124
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<bool>::iterator` → `IterableIterator<boolean[]>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4124', () => {
    try {
      const DECL = `void r5ts4124(std::valarray<bool>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4124 生成结果为空');
      const expectSnippet0 = 'export function r5ts4124(v: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4124 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4124 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4125
  * @tc.name : h2dts_gen_4125
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<char>::iterator` → `IterableIterator<string[]>` 的...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4125', () => {
    try {
      const DECL = `void r5ts4125(std::valarray<char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4125 生成结果为空');
      const expectSnippet0 = 'export function r5ts4125(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4125 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4125 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4126
  * @tc.name : h2dts_gen_4126
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<wchar_t>::iterator` → `IterableIterator<string[]>...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4126', () => {
    try {
      const DECL = `void r5ts4126(std::valarray<wchar_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4126 生成结果为空');
      const expectSnippet0 = 'export function r5ts4126(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4126 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4126 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4127
  * @tc.name : h2dts_gen_4127
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<char8_t>::iterator` → `IterableIterator<string[]>...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4127', () => {
    try {
      const DECL = `void r5ts4127(std::valarray<char8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4127 生成结果为空');
      const expectSnippet0 = 'export function r5ts4127(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4127 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4127 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4128
  * @tc.name : h2dts_gen_4128
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<char16_t>::iterator` → `IterableIterator<string[]...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4128', () => {
    try {
      const DECL = `void r5ts4128(std::valarray<char16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4128 生成结果为空');
      const expectSnippet0 = 'export function r5ts4128(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4128 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4128 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4129
  * @tc.name : h2dts_gen_4129
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<char32_t>::iterator` → `IterableIterator<string[]...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4129', () => {
    try {
      const DECL = `void r5ts4129(std::valarray<char32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4129 生成结果为空');
      const expectSnippet0 = 'export function r5ts4129(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4129 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4129 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4130
  * @tc.name : h2dts_gen_4130
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4130', () => {
    try {
      const DECL = `void r5ts4130(std::priority_queue<int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4130 生成结果为空');
      const expectSnippet0 = 'export function r5ts4130(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4130 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4130 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4131
  * @tc.name : h2dts_gen_4131
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4131', () => {
    try {
      const DECL = `void r5ts4131(std::priority_queue<size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4131 生成结果为空');
      const expectSnippet0 = 'export function r5ts4131(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4131 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4131 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4132
  * @tc.name : h2dts_gen_4132
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4132', () => {
    try {
      const DECL = `void r5ts4132(std::priority_queue<double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4132 生成结果为空');
      const expectSnippet0 = 'export function r5ts4132(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4132 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4132 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4133
  * @tc.name : h2dts_gen_4133
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4133', () => {
    try {
      const DECL = `void r5ts4133(std::priority_queue<float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4133 生成结果为空');
      const expectSnippet0 = 'export function r5ts4133(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4133 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4133 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4134
  * @tc.name : h2dts_gen_4134
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4134', () => {
    try {
      const DECL = `void r5ts4134(std::priority_queue<long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4134 生成结果为空');
      const expectSnippet0 = 'export function r5ts4134(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4134 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4134 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4135
  * @tc.name : h2dts_gen_4135
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4135', () => {
    try {
      const DECL = `void r5ts4135(std::priority_queue<short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4135 生成结果为空');
      const expectSnippet0 = 'export function r5ts4135(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4135 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4135 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4136
  * @tc.name : h2dts_gen_4136
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4136', () => {
    try {
      const DECL = `void r5ts4136(std::priority_queue<uint8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4136 生成结果为空');
      const expectSnippet0 = 'export function r5ts4136(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4136 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4136 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4137
  * @tc.name : h2dts_gen_4137
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4137', () => {
    try {
      const DECL = `void r5ts4137(std::priority_queue<uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4137 生成结果为空');
      const expectSnippet0 = 'export function r5ts4137(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4137 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4137 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4138
  * @tc.name : h2dts_gen_4138
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4138', () => {
    try {
      const DECL = `void r5ts4138(std::priority_queue<uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4138 生成结果为空');
      const expectSnippet0 = 'export function r5ts4138(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4138 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4138 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4139
  * @tc.name : h2dts_gen_4139
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4139', () => {
    try {
      const DECL = `void r5ts4139(std::priority_queue<uint64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4139 生成结果为空');
      const expectSnippet0 = 'export function r5ts4139(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4139 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4139 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4140
  * @tc.name : h2dts_gen_4140
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4140', () => {
    try {
      const DECL = `void r5ts4140(std::priority_queue<int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4140 生成结果为空');
      const expectSnippet0 = 'export function r5ts4140(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4140 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4140 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4141
  * @tc.name : h2dts_gen_4141
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4141', () => {
    try {
      const DECL = `void r5ts4141(std::priority_queue<int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4141 生成结果为空');
      const expectSnippet0 = 'export function r5ts4141(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4141 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4141 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4142
  * @tc.name : h2dts_gen_4142
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4142', () => {
    try {
      const DECL = `void r5ts4142(std::priority_queue<int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4142 生成结果为空');
      const expectSnippet0 = 'export function r5ts4142(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4142 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4142 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4143
  * @tc.name : h2dts_gen_4143
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4143', () => {
    try {
      const DECL = `void r5ts4143(std::priority_queue<int64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4143 生成结果为空');
      const expectSnippet0 = 'export function r5ts4143(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4143 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4143 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4144
  * @tc.name : h2dts_gen_4144
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4144', () => {
    try {
      const DECL = `void r5ts4144(std::priority_queue<unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4144 生成结果为空');
      const expectSnippet0 = 'export function r5ts4144(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4144 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4144 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4145
  * @tc.name : h2dts_gen_4145
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4145', () => {
    try {
      const DECL = `void r5ts4145(std::priority_queue<bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4145 生成结果为空');
      const expectSnippet0 = 'export function r5ts4145(v: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4145 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4145 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4146
  * @tc.name : h2dts_gen_4146
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4146', () => {
    try {
      const DECL = `void r5ts4146(std::priority_queue<char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4146 生成结果为空');
      const expectSnippet0 = 'export function r5ts4146(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4146 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4146 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4147
  * @tc.name : h2dts_gen_4147
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4147', () => {
    try {
      const DECL = `void r5ts4147(std::priority_queue<wchar_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4147 生成结果为空');
      const expectSnippet0 = 'export function r5ts4147(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4147 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4147 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4148
  * @tc.name : h2dts_gen_4148
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4148', () => {
    try {
      const DECL = `void r5ts4148(std::priority_queue<char8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4148 生成结果为空');
      const expectSnippet0 = 'export function r5ts4148(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4148 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4148 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4149
  * @tc.name : h2dts_gen_4149
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4149', () => {
    try {
      const DECL = `void r5ts4149(std::priority_queue<char16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4149 生成结果为空');
      const expectSnippet0 = 'export function r5ts4149(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4149 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4149 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4150
  * @tc.name : h2dts_gen_4150
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::priority_queue<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4150', () => {
    try {
      const DECL = `void r5ts4150(std::priority_queue<char32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4150 生成结果为空');
      const expectSnippet0 = 'export function r5ts4150(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4150 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4150 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4151
  * @tc.name : h2dts_gen_4151
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<int>::iterator` → `IterableIterator<number[...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4151', () => {
    try {
      const DECL = `void r5ts4151(std::priority_queue<int>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4151 生成结果为空');
      const expectSnippet0 = 'export function r5ts4151(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4151 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4151 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4152
  * @tc.name : h2dts_gen_4152
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<size_t>::iterator` → `IterableIterator<numb...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4152', () => {
    try {
      const DECL = `void r5ts4152(std::priority_queue<size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4152 生成结果为空');
      const expectSnippet0 = 'export function r5ts4152(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4152 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4152 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4153
  * @tc.name : h2dts_gen_4153
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<double>::iterator` → `IterableIterator<numb...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4153', () => {
    try {
      const DECL = `void r5ts4153(std::priority_queue<double>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4153 生成结果为空');
      const expectSnippet0 = 'export function r5ts4153(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4153 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4153 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4154
  * @tc.name : h2dts_gen_4154
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<float>::iterator` → `IterableIterator<numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4154', () => {
    try {
      const DECL = `void r5ts4154(std::priority_queue<float>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4154 生成结果为空');
      const expectSnippet0 = 'export function r5ts4154(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4154 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4154 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4155
  * @tc.name : h2dts_gen_4155
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<long>::iterator` → `IterableIterator<number...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4155', () => {
    try {
      const DECL = `void r5ts4155(std::priority_queue<long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4155 生成结果为空');
      const expectSnippet0 = 'export function r5ts4155(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4155 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4155 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4156
  * @tc.name : h2dts_gen_4156
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::priority_queue<short>::iterator` → `IterableIterator<numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4156', () => {
    try {
      const DECL = `void r5ts4156(std::priority_queue<short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4156 生成结果为空');
      const expectSnippet0 = 'export function r5ts4156(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4156 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4156 执行异常: ${String(err)}`);
    }
  });
});
