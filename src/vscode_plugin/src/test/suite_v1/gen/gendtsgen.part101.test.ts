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

suite('Gendts_gen_Suite_Ext101', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext101');
  /**
  * @tc.number : h2dts_gen_3383
  * @tc.name : h2dts_gen_3383
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3383', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int16_t> r5ret3383(int seed);`),
        unions: parseUnion(`std::queue<int16_t> r5ret3383(int seed);`),
        structs: parseStruct(`std::queue<int16_t> r5ret3383(int seed);`),
        classes: parseClass(`std::queue<int16_t> r5ret3383(int seed);`),
        funcs: parseFunction(`std::queue<int16_t> r5ret3383(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3383 生成结果为空');
      const expectSnippet0 = 'export function r5ret3383(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3383 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3383 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3384
  * @tc.name : h2dts_gen_3384
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3384', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int32_t> r5ret3384(int seed);`),
        unions: parseUnion(`std::queue<int32_t> r5ret3384(int seed);`),
        structs: parseStruct(`std::queue<int32_t> r5ret3384(int seed);`),
        classes: parseClass(`std::queue<int32_t> r5ret3384(int seed);`),
        funcs: parseFunction(`std::queue<int32_t> r5ret3384(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3384 生成结果为空');
      const expectSnippet0 = 'export function r5ret3384(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3384 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3384 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3385
  * @tc.name : h2dts_gen_3385
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3385', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int64_t> r5ret3385(int seed);`),
        unions: parseUnion(`std::queue<int64_t> r5ret3385(int seed);`),
        structs: parseStruct(`std::queue<int64_t> r5ret3385(int seed);`),
        classes: parseClass(`std::queue<int64_t> r5ret3385(int seed);`),
        funcs: parseFunction(`std::queue<int64_t> r5ret3385(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3385 生成结果为空');
      const expectSnippet0 = 'export function r5ret3385(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3385 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3385 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3386
  * @tc.name : h2dts_gen_3386
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<unsigned>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3386', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<unsigned> r5ret3386(int seed);`),
        unions: parseUnion(`std::queue<unsigned> r5ret3386(int seed);`),
        structs: parseStruct(`std::queue<unsigned> r5ret3386(int seed);`),
        classes: parseClass(`std::queue<unsigned> r5ret3386(int seed);`),
        funcs: parseFunction(`std::queue<unsigned> r5ret3386(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3386 生成结果为空');
      const expectSnippet0 = 'export function r5ret3386(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3386 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3386 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3387
  * @tc.name : h2dts_gen_3387
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<bool>` → `boolean[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3387', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<bool> r5ret3387(int seed);`),
        unions: parseUnion(`std::queue<bool> r5ret3387(int seed);`),
        structs: parseStruct(`std::queue<bool> r5ret3387(int seed);`),
        classes: parseClass(`std::queue<bool> r5ret3387(int seed);`),
        funcs: parseFunction(`std::queue<bool> r5ret3387(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3387 生成结果为空');
      const expectSnippet0 = 'export function r5ret3387(seed: number): Array<boolean>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3387 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3387 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3388
  * @tc.name : h2dts_gen_3388
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3388', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char> r5ret3388(int seed);`),
        unions: parseUnion(`std::queue<char> r5ret3388(int seed);`),
        structs: parseStruct(`std::queue<char> r5ret3388(int seed);`),
        classes: parseClass(`std::queue<char> r5ret3388(int seed);`),
        funcs: parseFunction(`std::queue<char> r5ret3388(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3388 生成结果为空');
      const expectSnippet0 = 'export function r5ret3388(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3388 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3388 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3389
  * @tc.name : h2dts_gen_3389
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<wchar_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3389', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<wchar_t> r5ret3389(int seed);`),
        unions: parseUnion(`std::queue<wchar_t> r5ret3389(int seed);`),
        structs: parseStruct(`std::queue<wchar_t> r5ret3389(int seed);`),
        classes: parseClass(`std::queue<wchar_t> r5ret3389(int seed);`),
        funcs: parseFunction(`std::queue<wchar_t> r5ret3389(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3389 生成结果为空');
      const expectSnippet0 = 'export function r5ret3389(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3389 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3389 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3390
  * @tc.name : h2dts_gen_3390
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char8_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3390', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char8_t> r5ret3390(int seed);`),
        unions: parseUnion(`std::queue<char8_t> r5ret3390(int seed);`),
        structs: parseStruct(`std::queue<char8_t> r5ret3390(int seed);`),
        classes: parseClass(`std::queue<char8_t> r5ret3390(int seed);`),
        funcs: parseFunction(`std::queue<char8_t> r5ret3390(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3390 生成结果为空');
      const expectSnippet0 = 'export function r5ret3390(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3390 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3390 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3391
  * @tc.name : h2dts_gen_3391
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char16_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3391', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char16_t> r5ret3391(int seed);`),
        unions: parseUnion(`std::queue<char16_t> r5ret3391(int seed);`),
        structs: parseStruct(`std::queue<char16_t> r5ret3391(int seed);`),
        classes: parseClass(`std::queue<char16_t> r5ret3391(int seed);`),
        funcs: parseFunction(`std::queue<char16_t> r5ret3391(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3391 生成结果为空');
      const expectSnippet0 = 'export function r5ret3391(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3391 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3391 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3392
  * @tc.name : h2dts_gen_3392
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char32_t>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3392', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char32_t> r5ret3392(int seed);`),
        unions: parseUnion(`std::queue<char32_t> r5ret3392(int seed);`),
        structs: parseStruct(`std::queue<char32_t> r5ret3392(int seed);`),
        classes: parseClass(`std::queue<char32_t> r5ret3392(int seed);`),
        funcs: parseFunction(`std::queue<char32_t> r5ret3392(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3392 生成结果为空');
      const expectSnippet0 = 'export function r5ret3392(seed: number): Array<string>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3392 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3392 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3393
  * @tc.name : h2dts_gen_3393
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3393', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int>::iterator r5ret3393(int seed);`),
        unions: parseUnion(`std::queue<int>::iterator r5ret3393(int seed);`),
        structs: parseStruct(`std::queue<int>::iterator r5ret3393(int seed);`),
        classes: parseClass(`std::queue<int>::iterator r5ret3393(int seed);`),
        funcs: parseFunction(`std::queue<int>::iterator r5ret3393(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3393 生成结果为空');
      const expectSnippet0 = 'export function r5ret3393(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3393 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3393 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3394
  * @tc.name : h2dts_gen_3394
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<size_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3394', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<size_t>::iterator r5ret3394(int seed);`),
        unions: parseUnion(`std::queue<size_t>::iterator r5ret3394(int seed);`),
        structs: parseStruct(`std::queue<size_t>::iterator r5ret3394(int seed);`),
        classes: parseClass(`std::queue<size_t>::iterator r5ret3394(int seed);`),
        funcs: parseFunction(`std::queue<size_t>::iterator r5ret3394(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3394 生成结果为空');
      const expectSnippet0 = 'export function r5ret3394(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3394 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3394 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3395
  * @tc.name : h2dts_gen_3395
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<double>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3395', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<double>::iterator r5ret3395(int seed);`),
        unions: parseUnion(`std::queue<double>::iterator r5ret3395(int seed);`),
        structs: parseStruct(`std::queue<double>::iterator r5ret3395(int seed);`),
        classes: parseClass(`std::queue<double>::iterator r5ret3395(int seed);`),
        funcs: parseFunction(`std::queue<double>::iterator r5ret3395(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3395 生成结果为空');
      const expectSnippet0 = 'export function r5ret3395(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3395 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3395 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3396
  * @tc.name : h2dts_gen_3396
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<float>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3396', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<float>::iterator r5ret3396(int seed);`),
        unions: parseUnion(`std::queue<float>::iterator r5ret3396(int seed);`),
        structs: parseStruct(`std::queue<float>::iterator r5ret3396(int seed);`),
        classes: parseClass(`std::queue<float>::iterator r5ret3396(int seed);`),
        funcs: parseFunction(`std::queue<float>::iterator r5ret3396(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3396 生成结果为空');
      const expectSnippet0 = 'export function r5ret3396(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3396 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3396 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3397
  * @tc.name : h2dts_gen_3397
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<long>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3397', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<long>::iterator r5ret3397(int seed);`),
        unions: parseUnion(`std::queue<long>::iterator r5ret3397(int seed);`),
        structs: parseStruct(`std::queue<long>::iterator r5ret3397(int seed);`),
        classes: parseClass(`std::queue<long>::iterator r5ret3397(int seed);`),
        funcs: parseFunction(`std::queue<long>::iterator r5ret3397(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3397 生成结果为空');
      const expectSnippet0 = 'export function r5ret3397(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3397 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3397 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3398
  * @tc.name : h2dts_gen_3398
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<short>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3398', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<short>::iterator r5ret3398(int seed);`),
        unions: parseUnion(`std::queue<short>::iterator r5ret3398(int seed);`),
        structs: parseStruct(`std::queue<short>::iterator r5ret3398(int seed);`),
        classes: parseClass(`std::queue<short>::iterator r5ret3398(int seed);`),
        funcs: parseFunction(`std::queue<short>::iterator r5ret3398(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3398 生成结果为空');
      const expectSnippet0 = 'export function r5ret3398(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3398 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3398 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3399
  * @tc.name : h2dts_gen_3399
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3399', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint8_t>::iterator r5ret3399(int seed);`),
        unions: parseUnion(`std::queue<uint8_t>::iterator r5ret3399(int seed);`),
        structs: parseStruct(`std::queue<uint8_t>::iterator r5ret3399(int seed);`),
        classes: parseClass(`std::queue<uint8_t>::iterator r5ret3399(int seed);`),
        funcs: parseFunction(`std::queue<uint8_t>::iterator r5ret3399(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3399 生成结果为空');
      const expectSnippet0 = 'export function r5ret3399(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3399 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3399 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3400
  * @tc.name : h2dts_gen_3400
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3400', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint16_t>::iterator r5ret3400(int seed);`),
        unions: parseUnion(`std::queue<uint16_t>::iterator r5ret3400(int seed);`),
        structs: parseStruct(`std::queue<uint16_t>::iterator r5ret3400(int seed);`),
        classes: parseClass(`std::queue<uint16_t>::iterator r5ret3400(int seed);`),
        funcs: parseFunction(`std::queue<uint16_t>::iterator r5ret3400(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3400 生成结果为空');
      const expectSnippet0 = 'export function r5ret3400(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3400 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3400 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3401
  * @tc.name : h2dts_gen_3401
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3401', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint32_t>::iterator r5ret3401(int seed);`),
        unions: parseUnion(`std::queue<uint32_t>::iterator r5ret3401(int seed);`),
        structs: parseStruct(`std::queue<uint32_t>::iterator r5ret3401(int seed);`),
        classes: parseClass(`std::queue<uint32_t>::iterator r5ret3401(int seed);`),
        funcs: parseFunction(`std::queue<uint32_t>::iterator r5ret3401(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3401 生成结果为空');
      const expectSnippet0 = 'export function r5ret3401(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3401 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3401 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3402
  * @tc.name : h2dts_gen_3402
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<uint64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3402', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<uint64_t>::iterator r5ret3402(int seed);`),
        unions: parseUnion(`std::queue<uint64_t>::iterator r5ret3402(int seed);`),
        structs: parseStruct(`std::queue<uint64_t>::iterator r5ret3402(int seed);`),
        classes: parseClass(`std::queue<uint64_t>::iterator r5ret3402(int seed);`),
        funcs: parseFunction(`std::queue<uint64_t>::iterator r5ret3402(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3402 生成结果为空');
      const expectSnippet0 = 'export function r5ret3402(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3402 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3402 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3403
  * @tc.name : h2dts_gen_3403
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int8_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3403', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int8_t>::iterator r5ret3403(int seed);`),
        unions: parseUnion(`std::queue<int8_t>::iterator r5ret3403(int seed);`),
        structs: parseStruct(`std::queue<int8_t>::iterator r5ret3403(int seed);`),
        classes: parseClass(`std::queue<int8_t>::iterator r5ret3403(int seed);`),
        funcs: parseFunction(`std::queue<int8_t>::iterator r5ret3403(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3403 生成结果为空');
      const expectSnippet0 = 'export function r5ret3403(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3403 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3403 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3404
  * @tc.name : h2dts_gen_3404
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int16_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3404', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int16_t>::iterator r5ret3404(int seed);`),
        unions: parseUnion(`std::queue<int16_t>::iterator r5ret3404(int seed);`),
        structs: parseStruct(`std::queue<int16_t>::iterator r5ret3404(int seed);`),
        classes: parseClass(`std::queue<int16_t>::iterator r5ret3404(int seed);`),
        funcs: parseFunction(`std::queue<int16_t>::iterator r5ret3404(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3404 生成结果为空');
      const expectSnippet0 = 'export function r5ret3404(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3404 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3404 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3405
  * @tc.name : h2dts_gen_3405
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int32_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3405', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int32_t>::iterator r5ret3405(int seed);`),
        unions: parseUnion(`std::queue<int32_t>::iterator r5ret3405(int seed);`),
        structs: parseStruct(`std::queue<int32_t>::iterator r5ret3405(int seed);`),
        classes: parseClass(`std::queue<int32_t>::iterator r5ret3405(int seed);`),
        funcs: parseFunction(`std::queue<int32_t>::iterator r5ret3405(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3405 生成结果为空');
      const expectSnippet0 = 'export function r5ret3405(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3405 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3405 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3406
  * @tc.name : h2dts_gen_3406
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<int64_t>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3406', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<int64_t>::iterator r5ret3406(int seed);`),
        unions: parseUnion(`std::queue<int64_t>::iterator r5ret3406(int seed);`),
        structs: parseStruct(`std::queue<int64_t>::iterator r5ret3406(int seed);`),
        classes: parseClass(`std::queue<int64_t>::iterator r5ret3406(int seed);`),
        funcs: parseFunction(`std::queue<int64_t>::iterator r5ret3406(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3406 生成结果为空');
      const expectSnippet0 = 'export function r5ret3406(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3406 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3406 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3407
  * @tc.name : h2dts_gen_3407
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<unsigned>::iterator` → `IterableIterator<number[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3407', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<unsigned>::iterator r5ret3407(int seed);`),
        unions: parseUnion(`std::queue<unsigned>::iterator r5ret3407(int seed);`),
        structs: parseStruct(`std::queue<unsigned>::iterator r5ret3407(int seed);`),
        classes: parseClass(`std::queue<unsigned>::iterator r5ret3407(int seed);`),
        funcs: parseFunction(`std::queue<unsigned>::iterator r5ret3407(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3407 生成结果为空');
      const expectSnippet0 = 'export function r5ret3407(seed: number): IterableIterator<Array<number>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3407 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3407 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3408
  * @tc.name : h2dts_gen_3408
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<bool>::iterator` → `IterableIterator<boolean[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3408', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<bool>::iterator r5ret3408(int seed);`),
        unions: parseUnion(`std::queue<bool>::iterator r5ret3408(int seed);`),
        structs: parseStruct(`std::queue<bool>::iterator r5ret3408(int seed);`),
        classes: parseClass(`std::queue<bool>::iterator r5ret3408(int seed);`),
        funcs: parseFunction(`std::queue<bool>::iterator r5ret3408(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3408 生成结果为空');
      const expectSnippet0 = 'export function r5ret3408(seed: number): IterableIterator<Array<boolean>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3408 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3408 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3409
  * @tc.name : h2dts_gen_3409
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3409', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char>::iterator r5ret3409(int seed);`),
        unions: parseUnion(`std::queue<char>::iterator r5ret3409(int seed);`),
        structs: parseStruct(`std::queue<char>::iterator r5ret3409(int seed);`),
        classes: parseClass(`std::queue<char>::iterator r5ret3409(int seed);`),
        funcs: parseFunction(`std::queue<char>::iterator r5ret3409(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3409 生成结果为空');
      const expectSnippet0 = 'export function r5ret3409(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3409 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3409 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3410
  * @tc.name : h2dts_gen_3410
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<wchar_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3410', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<wchar_t>::iterator r5ret3410(int seed);`),
        unions: parseUnion(`std::queue<wchar_t>::iterator r5ret3410(int seed);`),
        structs: parseStruct(`std::queue<wchar_t>::iterator r5ret3410(int seed);`),
        classes: parseClass(`std::queue<wchar_t>::iterator r5ret3410(int seed);`),
        funcs: parseFunction(`std::queue<wchar_t>::iterator r5ret3410(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3410 生成结果为空');
      const expectSnippet0 = 'export function r5ret3410(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3410 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3410 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3411
  * @tc.name : h2dts_gen_3411
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char8_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3411', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char8_t>::iterator r5ret3411(int seed);`),
        unions: parseUnion(`std::queue<char8_t>::iterator r5ret3411(int seed);`),
        structs: parseStruct(`std::queue<char8_t>::iterator r5ret3411(int seed);`),
        classes: parseClass(`std::queue<char8_t>::iterator r5ret3411(int seed);`),
        funcs: parseFunction(`std::queue<char8_t>::iterator r5ret3411(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3411 生成结果为空');
      const expectSnippet0 = 'export function r5ret3411(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3411 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3411 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3412
  * @tc.name : h2dts_gen_3412
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char16_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3412', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char16_t>::iterator r5ret3412(int seed);`),
        unions: parseUnion(`std::queue<char16_t>::iterator r5ret3412(int seed);`),
        structs: parseStruct(`std::queue<char16_t>::iterator r5ret3412(int seed);`),
        classes: parseClass(`std::queue<char16_t>::iterator r5ret3412(int seed);`),
        funcs: parseFunction(`std::queue<char16_t>::iterator r5ret3412(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3412 生成结果为空');
      const expectSnippet0 = 'export function r5ret3412(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3412 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3412 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3413
  * @tc.name : h2dts_gen_3413
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::queue<char32_t>::iterator` → `IterableIterator<string[]>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3413', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::queue<char32_t>::iterator r5ret3413(int seed);`),
        unions: parseUnion(`std::queue<char32_t>::iterator r5ret3413(int seed);`),
        structs: parseStruct(`std::queue<char32_t>::iterator r5ret3413(int seed);`),
        classes: parseClass(`std::queue<char32_t>::iterator r5ret3413(int seed);`),
        funcs: parseFunction(`std::queue<char32_t>::iterator r5ret3413(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3413 生成结果为空');
      const expectSnippet0 = 'export function r5ret3413(seed: number): IterableIterator<Array<string>>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3413 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3413 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3414
  * @tc.name : h2dts_gen_3414
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3414', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<int> r5ret3414(int seed);`),
        unions: parseUnion(`std::valarray<int> r5ret3414(int seed);`),
        structs: parseStruct(`std::valarray<int> r5ret3414(int seed);`),
        classes: parseClass(`std::valarray<int> r5ret3414(int seed);`),
        funcs: parseFunction(`std::valarray<int> r5ret3414(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3414 生成结果为空');
      const expectSnippet0 = 'export function r5ret3414(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3414 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3414 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3415
  * @tc.name : h2dts_gen_3415
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3415', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<size_t> r5ret3415(int seed);`),
        unions: parseUnion(`std::valarray<size_t> r5ret3415(int seed);`),
        structs: parseStruct(`std::valarray<size_t> r5ret3415(int seed);`),
        classes: parseClass(`std::valarray<size_t> r5ret3415(int seed);`),
        funcs: parseFunction(`std::valarray<size_t> r5ret3415(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3415 生成结果为空');
      const expectSnippet0 = 'export function r5ret3415(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3415 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3415 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3416
  * @tc.name : h2dts_gen_3416
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3416', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<double> r5ret3416(int seed);`),
        unions: parseUnion(`std::valarray<double> r5ret3416(int seed);`),
        structs: parseStruct(`std::valarray<double> r5ret3416(int seed);`),
        classes: parseClass(`std::valarray<double> r5ret3416(int seed);`),
        funcs: parseFunction(`std::valarray<double> r5ret3416(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3416 生成结果为空');
      const expectSnippet0 = 'export function r5ret3416(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3416 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3416 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3417
  * @tc.name : h2dts_gen_3417
  * @tc.desc : h2dts gen：扩充-R5-返回类型 `std::valarray<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3417', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`std::valarray<float> r5ret3417(int seed);`),
        unions: parseUnion(`std::valarray<float> r5ret3417(int seed);`),
        structs: parseStruct(`std::valarray<float> r5ret3417(int seed);`),
        classes: parseClass(`std::valarray<float> r5ret3417(int seed);`),
        funcs: parseFunction(`std::valarray<float> r5ret3417(int seed);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_3417 生成结果为空');
      const expectSnippet0 = 'export function r5ret3417(seed: number): Array<number>;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3417 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3417 执行异常: ${String(err)}`);
    }
  });
});
