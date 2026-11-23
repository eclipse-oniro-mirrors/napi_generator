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

suite('Gendts_gen_Suite_Ext43', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext43');
  /**
  * @tc.number : h2dts_gen_1368
  * @tc.name : h2dts_gen_1368
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1368', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1368(int a, std::deque<uint16_t> b);`),
        unions: parseUnion(`void r4mp1368(int a, std::deque<uint16_t> b);`),
        structs: parseStruct(`void r4mp1368(int a, std::deque<uint16_t> b);`),
        classes: parseClass(`void r4mp1368(int a, std::deque<uint16_t> b);`),
        funcs: parseFunction(`void r4mp1368(int a, std::deque<uint16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1368 生成结果为空');
      const expectSnippet0 = 'export function r4mp1368(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1368 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1368 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1369
  * @tc.name : h2dts_gen_1369
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1369', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1369(int a, std::deque<uint32_t> b);`),
        unions: parseUnion(`void r4mp1369(int a, std::deque<uint32_t> b);`),
        structs: parseStruct(`void r4mp1369(int a, std::deque<uint32_t> b);`),
        classes: parseClass(`void r4mp1369(int a, std::deque<uint32_t> b);`),
        funcs: parseFunction(`void r4mp1369(int a, std::deque<uint32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1369 生成结果为空');
      const expectSnippet0 = 'export function r4mp1369(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1369 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1369 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1370
  * @tc.name : h2dts_gen_1370
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1370', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1370(int a, std::deque<uint64_t> b);`),
        unions: parseUnion(`void r4mp1370(int a, std::deque<uint64_t> b);`),
        structs: parseStruct(`void r4mp1370(int a, std::deque<uint64_t> b);`),
        classes: parseClass(`void r4mp1370(int a, std::deque<uint64_t> b);`),
        funcs: parseFunction(`void r4mp1370(int a, std::deque<uint64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1370 生成结果为空');
      const expectSnippet0 = 'export function r4mp1370(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1370 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1370 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1371
  * @tc.name : h2dts_gen_1371
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1371', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1371(int a, std::deque<int8_t> b);`),
        unions: parseUnion(`void r4mp1371(int a, std::deque<int8_t> b);`),
        structs: parseStruct(`void r4mp1371(int a, std::deque<int8_t> b);`),
        classes: parseClass(`void r4mp1371(int a, std::deque<int8_t> b);`),
        funcs: parseFunction(`void r4mp1371(int a, std::deque<int8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1371 生成结果为空');
      const expectSnippet0 = 'export function r4mp1371(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1371 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1371 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1372
  * @tc.name : h2dts_gen_1372
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1372', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1372(int a, std::deque<int16_t> b);`),
        unions: parseUnion(`void r4mp1372(int a, std::deque<int16_t> b);`),
        structs: parseStruct(`void r4mp1372(int a, std::deque<int16_t> b);`),
        classes: parseClass(`void r4mp1372(int a, std::deque<int16_t> b);`),
        funcs: parseFunction(`void r4mp1372(int a, std::deque<int16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1372 生成结果为空');
      const expectSnippet0 = 'export function r4mp1372(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1372 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1372 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1373
  * @tc.name : h2dts_gen_1373
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1373', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1373(int a, std::deque<int32_t> b);`),
        unions: parseUnion(`void r4mp1373(int a, std::deque<int32_t> b);`),
        structs: parseStruct(`void r4mp1373(int a, std::deque<int32_t> b);`),
        classes: parseClass(`void r4mp1373(int a, std::deque<int32_t> b);`),
        funcs: parseFunction(`void r4mp1373(int a, std::deque<int32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1373 生成结果为空');
      const expectSnippet0 = 'export function r4mp1373(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1373 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1373 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1374
  * @tc.name : h2dts_gen_1374
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1374', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1374(int a, std::deque<int64_t> b);`),
        unions: parseUnion(`void r4mp1374(int a, std::deque<int64_t> b);`),
        structs: parseStruct(`void r4mp1374(int a, std::deque<int64_t> b);`),
        classes: parseClass(`void r4mp1374(int a, std::deque<int64_t> b);`),
        funcs: parseFunction(`void r4mp1374(int a, std::deque<int64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1374 生成结果为空');
      const expectSnippet0 = 'export function r4mp1374(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1374 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1374 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1375
  * @tc.name : h2dts_gen_1375
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1375', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1375(int a, std::deque<unsigned> b);`),
        unions: parseUnion(`void r4mp1375(int a, std::deque<unsigned> b);`),
        structs: parseStruct(`void r4mp1375(int a, std::deque<unsigned> b);`),
        classes: parseClass(`void r4mp1375(int a, std::deque<unsigned> b);`),
        funcs: parseFunction(`void r4mp1375(int a, std::deque<unsigned> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1375 生成结果为空');
      const expectSnippet0 = 'export function r4mp1375(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1375 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1375 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1376
  * @tc.name : h2dts_gen_1376
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1376', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1376(int a, std::deque<bool> b);`),
        unions: parseUnion(`void r4mp1376(int a, std::deque<bool> b);`),
        structs: parseStruct(`void r4mp1376(int a, std::deque<bool> b);`),
        classes: parseClass(`void r4mp1376(int a, std::deque<bool> b);`),
        funcs: parseFunction(`void r4mp1376(int a, std::deque<bool> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1376 生成结果为空');
      const expectSnippet0 = 'export function r4mp1376(a: number, b: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1376 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1376 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1377
  * @tc.name : h2dts_gen_1377
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1377', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1377(int a, std::deque<char> b);`),
        unions: parseUnion(`void r4mp1377(int a, std::deque<char> b);`),
        structs: parseStruct(`void r4mp1377(int a, std::deque<char> b);`),
        classes: parseClass(`void r4mp1377(int a, std::deque<char> b);`),
        funcs: parseFunction(`void r4mp1377(int a, std::deque<char> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1377 生成结果为空');
      const expectSnippet0 = 'export function r4mp1377(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1377 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1377 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1378
  * @tc.name : h2dts_gen_1378
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1378', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1378(int a, std::deque<wchar_t> b);`),
        unions: parseUnion(`void r4mp1378(int a, std::deque<wchar_t> b);`),
        structs: parseStruct(`void r4mp1378(int a, std::deque<wchar_t> b);`),
        classes: parseClass(`void r4mp1378(int a, std::deque<wchar_t> b);`),
        funcs: parseFunction(`void r4mp1378(int a, std::deque<wchar_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1378 生成结果为空');
      const expectSnippet0 = 'export function r4mp1378(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1378 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1378 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1379
  * @tc.name : h2dts_gen_1379
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1379', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1379(int a, std::deque<char8_t> b);`),
        unions: parseUnion(`void r4mp1379(int a, std::deque<char8_t> b);`),
        structs: parseStruct(`void r4mp1379(int a, std::deque<char8_t> b);`),
        classes: parseClass(`void r4mp1379(int a, std::deque<char8_t> b);`),
        funcs: parseFunction(`void r4mp1379(int a, std::deque<char8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1379 生成结果为空');
      const expectSnippet0 = 'export function r4mp1379(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1379 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1379 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1380
  * @tc.name : h2dts_gen_1380
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1380', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1380(int a, std::deque<char16_t> b);`),
        unions: parseUnion(`void r4mp1380(int a, std::deque<char16_t> b);`),
        structs: parseStruct(`void r4mp1380(int a, std::deque<char16_t> b);`),
        classes: parseClass(`void r4mp1380(int a, std::deque<char16_t> b);`),
        funcs: parseFunction(`void r4mp1380(int a, std::deque<char16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1380 生成结果为空');
      const expectSnippet0 = 'export function r4mp1380(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1380 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1380 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1381
  * @tc.name : h2dts_gen_1381
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1381', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1381(int a, std::deque<char32_t> b);`),
        unions: parseUnion(`void r4mp1381(int a, std::deque<char32_t> b);`),
        structs: parseStruct(`void r4mp1381(int a, std::deque<char32_t> b);`),
        classes: parseClass(`void r4mp1381(int a, std::deque<char32_t> b);`),
        funcs: parseFunction(`void r4mp1381(int a, std::deque<char32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1381 生成结果为空');
      const expectSnippet0 = 'export function r4mp1381(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1381 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1381 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1382
  * @tc.name : h2dts_gen_1382
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<int>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1382', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1382(int a, std::deque<int>::iterator b);`),
        unions: parseUnion(`void r4mp1382(int a, std::deque<int>::iterator b);`),
        structs: parseStruct(`void r4mp1382(int a, std::deque<int>::iterator b);`),
        classes: parseClass(`void r4mp1382(int a, std::deque<int>::iterator b);`),
        funcs: parseFunction(`void r4mp1382(int a, std::deque<int>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1382 生成结果为空');
      const expectSnippet0 = 'export function r4mp1382(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1382 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1382 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1383
  * @tc.name : h2dts_gen_1383
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<size_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1383', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1383(int a, std::deque<size_t>::iterator b);`),
        unions: parseUnion(`void r4mp1383(int a, std::deque<size_t>::iterator b);`),
        structs: parseStruct(`void r4mp1383(int a, std::deque<size_t>::iterator b);`),
        classes: parseClass(`void r4mp1383(int a, std::deque<size_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1383(int a, std::deque<size_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1383 生成结果为空');
      const expectSnippet0 = 'export function r4mp1383(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1383 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1383 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1384
  * @tc.name : h2dts_gen_1384
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<double>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1384', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1384(int a, std::deque<double>::iterator b);`),
        unions: parseUnion(`void r4mp1384(int a, std::deque<double>::iterator b);`),
        structs: parseStruct(`void r4mp1384(int a, std::deque<double>::iterator b);`),
        classes: parseClass(`void r4mp1384(int a, std::deque<double>::iterator b);`),
        funcs: parseFunction(`void r4mp1384(int a, std::deque<double>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1384 生成结果为空');
      const expectSnippet0 = 'export function r4mp1384(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1384 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1384 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1385
  * @tc.name : h2dts_gen_1385
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<float>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1385', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1385(int a, std::deque<float>::iterator b);`),
        unions: parseUnion(`void r4mp1385(int a, std::deque<float>::iterator b);`),
        structs: parseStruct(`void r4mp1385(int a, std::deque<float>::iterator b);`),
        classes: parseClass(`void r4mp1385(int a, std::deque<float>::iterator b);`),
        funcs: parseFunction(`void r4mp1385(int a, std::deque<float>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1385 生成结果为空');
      const expectSnippet0 = 'export function r4mp1385(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1385 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1385 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1386
  * @tc.name : h2dts_gen_1386
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<long>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1386', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1386(int a, std::deque<long>::iterator b);`),
        unions: parseUnion(`void r4mp1386(int a, std::deque<long>::iterator b);`),
        structs: parseStruct(`void r4mp1386(int a, std::deque<long>::iterator b);`),
        classes: parseClass(`void r4mp1386(int a, std::deque<long>::iterator b);`),
        funcs: parseFunction(`void r4mp1386(int a, std::deque<long>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1386 生成结果为空');
      const expectSnippet0 = 'export function r4mp1386(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1386 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1386 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1387
  * @tc.name : h2dts_gen_1387
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<short>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1387', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1387(int a, std::deque<short>::iterator b);`),
        unions: parseUnion(`void r4mp1387(int a, std::deque<short>::iterator b);`),
        structs: parseStruct(`void r4mp1387(int a, std::deque<short>::iterator b);`),
        classes: parseClass(`void r4mp1387(int a, std::deque<short>::iterator b);`),
        funcs: parseFunction(`void r4mp1387(int a, std::deque<short>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1387 生成结果为空');
      const expectSnippet0 = 'export function r4mp1387(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1387 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1387 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1388
  * @tc.name : h2dts_gen_1388
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<uint8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1388', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1388(int a, std::deque<uint8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1388(int a, std::deque<uint8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1388(int a, std::deque<uint8_t>::iterator b);`),
        classes: parseClass(`void r4mp1388(int a, std::deque<uint8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1388(int a, std::deque<uint8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1388 生成结果为空');
      const expectSnippet0 = 'export function r4mp1388(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1388 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1388 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1389
  * @tc.name : h2dts_gen_1389
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<uint16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1389', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1389(int a, std::deque<uint16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1389(int a, std::deque<uint16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1389(int a, std::deque<uint16_t>::iterator b);`),
        classes: parseClass(`void r4mp1389(int a, std::deque<uint16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1389(int a, std::deque<uint16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1389 生成结果为空');
      const expectSnippet0 = 'export function r4mp1389(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1389 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1389 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1390
  * @tc.name : h2dts_gen_1390
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<uint32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1390', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1390(int a, std::deque<uint32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1390(int a, std::deque<uint32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1390(int a, std::deque<uint32_t>::iterator b);`),
        classes: parseClass(`void r4mp1390(int a, std::deque<uint32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1390(int a, std::deque<uint32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1390 生成结果为空');
      const expectSnippet0 = 'export function r4mp1390(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1390 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1390 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1391
  * @tc.name : h2dts_gen_1391
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<uint64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1391', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1391(int a, std::deque<uint64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1391(int a, std::deque<uint64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1391(int a, std::deque<uint64_t>::iterator b);`),
        classes: parseClass(`void r4mp1391(int a, std::deque<uint64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1391(int a, std::deque<uint64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1391 生成结果为空');
      const expectSnippet0 = 'export function r4mp1391(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1391 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1391 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1392
  * @tc.name : h2dts_gen_1392
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<int8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1392', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1392(int a, std::deque<int8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1392(int a, std::deque<int8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1392(int a, std::deque<int8_t>::iterator b);`),
        classes: parseClass(`void r4mp1392(int a, std::deque<int8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1392(int a, std::deque<int8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1392 生成结果为空');
      const expectSnippet0 = 'export function r4mp1392(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1392 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1392 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1393
  * @tc.name : h2dts_gen_1393
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<int16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1393', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1393(int a, std::deque<int16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1393(int a, std::deque<int16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1393(int a, std::deque<int16_t>::iterator b);`),
        classes: parseClass(`void r4mp1393(int a, std::deque<int16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1393(int a, std::deque<int16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1393 生成结果为空');
      const expectSnippet0 = 'export function r4mp1393(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1393 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1393 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1394
  * @tc.name : h2dts_gen_1394
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<int32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1394', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1394(int a, std::deque<int32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1394(int a, std::deque<int32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1394(int a, std::deque<int32_t>::iterator b);`),
        classes: parseClass(`void r4mp1394(int a, std::deque<int32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1394(int a, std::deque<int32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1394 生成结果为空');
      const expectSnippet0 = 'export function r4mp1394(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1394 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1394 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1395
  * @tc.name : h2dts_gen_1395
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<int64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1395', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1395(int a, std::deque<int64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1395(int a, std::deque<int64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1395(int a, std::deque<int64_t>::iterator b);`),
        classes: parseClass(`void r4mp1395(int a, std::deque<int64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1395(int a, std::deque<int64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1395 生成结果为空');
      const expectSnippet0 = 'export function r4mp1395(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1395 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1395 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1396
  * @tc.name : h2dts_gen_1396
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<unsigned>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1396', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1396(int a, std::deque<unsigned>::iterator b);`),
        unions: parseUnion(`void r4mp1396(int a, std::deque<unsigned>::iterator b);`),
        structs: parseStruct(`void r4mp1396(int a, std::deque<unsigned>::iterator b);`),
        classes: parseClass(`void r4mp1396(int a, std::deque<unsigned>::iterator b);`),
        funcs: parseFunction(`void r4mp1396(int a, std::deque<unsigned>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1396 生成结果为空');
      const expectSnippet0 = 'export function r4mp1396(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1396 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1396 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1397
  * @tc.name : h2dts_gen_1397
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<bool>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1397', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1397(int a, std::deque<bool>::iterator b);`),
        unions: parseUnion(`void r4mp1397(int a, std::deque<bool>::iterator b);`),
        structs: parseStruct(`void r4mp1397(int a, std::deque<bool>::iterator b);`),
        classes: parseClass(`void r4mp1397(int a, std::deque<bool>::iterator b);`),
        funcs: parseFunction(`void r4mp1397(int a, std::deque<bool>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1397 生成结果为空');
      const expectSnippet0 = 'export function r4mp1397(a: number, b: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1397 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1397 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1398
  * @tc.name : h2dts_gen_1398
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<char>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1398', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1398(int a, std::deque<char>::iterator b);`),
        unions: parseUnion(`void r4mp1398(int a, std::deque<char>::iterator b);`),
        structs: parseStruct(`void r4mp1398(int a, std::deque<char>::iterator b);`),
        classes: parseClass(`void r4mp1398(int a, std::deque<char>::iterator b);`),
        funcs: parseFunction(`void r4mp1398(int a, std::deque<char>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1398 生成结果为空');
      const expectSnippet0 = 'export function r4mp1398(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1398 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1398 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1399
  * @tc.name : h2dts_gen_1399
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<wchar_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1399', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1399(int a, std::deque<wchar_t>::iterator b);`),
        unions: parseUnion(`void r4mp1399(int a, std::deque<wchar_t>::iterator b);`),
        structs: parseStruct(`void r4mp1399(int a, std::deque<wchar_t>::iterator b);`),
        classes: parseClass(`void r4mp1399(int a, std::deque<wchar_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1399(int a, std::deque<wchar_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1399 生成结果为空');
      const expectSnippet0 = 'export function r4mp1399(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1399 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1399 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1400
  * @tc.name : h2dts_gen_1400
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<char8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1400', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1400(int a, std::deque<char8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1400(int a, std::deque<char8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1400(int a, std::deque<char8_t>::iterator b);`),
        classes: parseClass(`void r4mp1400(int a, std::deque<char8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1400(int a, std::deque<char8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1400 生成结果为空');
      const expectSnippet0 = 'export function r4mp1400(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1400 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1400 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1401
  * @tc.name : h2dts_gen_1401
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<char16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1401', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1401(int a, std::deque<char16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1401(int a, std::deque<char16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1401(int a, std::deque<char16_t>::iterator b);`),
        classes: parseClass(`void r4mp1401(int a, std::deque<char16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1401(int a, std::deque<char16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1401 生成结果为空');
      const expectSnippet0 = 'export function r4mp1401(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1401 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1401 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1402
  * @tc.name : h2dts_gen_1402
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::deque<char32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1402', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1402(int a, std::deque<char32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1402(int a, std::deque<char32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1402(int a, std::deque<char32_t>::iterator b);`),
        classes: parseClass(`void r4mp1402(int a, std::deque<char32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1402(int a, std::deque<char32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1402 生成结果为空');
      const expectSnippet0 = 'export function r4mp1402(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1402 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1402 执行异常: ${String(err)}`);
    }
  });
});
