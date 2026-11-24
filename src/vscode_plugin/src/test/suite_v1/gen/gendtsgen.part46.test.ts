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

suite('Gendts_gen_Suite_Ext46', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext46');
  /**
  * @tc.number : h2dts_gen_1473
  * @tc.name : h2dts_gen_1473
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<uint16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1473', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1473(int a, std::forward_list<uint16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1473(int a, std::forward_list<uint16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1473(int a, std::forward_list<uint16_t>::iterator b);`),
        classes: parseClass(`void r4mp1473(int a, std::forward_list<uint16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1473(int a, std::forward_list<uint16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1473 生成结果为空');
      const expectSnippet0 = 'export function r4mp1473(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1473 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1473 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1474
  * @tc.name : h2dts_gen_1474
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<uint32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1474', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1474(int a, std::forward_list<uint32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1474(int a, std::forward_list<uint32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1474(int a, std::forward_list<uint32_t>::iterator b);`),
        classes: parseClass(`void r4mp1474(int a, std::forward_list<uint32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1474(int a, std::forward_list<uint32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1474 生成结果为空');
      const expectSnippet0 = 'export function r4mp1474(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1474 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1474 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1475
  * @tc.name : h2dts_gen_1475
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<uint64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1475', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1475(int a, std::forward_list<uint64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1475(int a, std::forward_list<uint64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1475(int a, std::forward_list<uint64_t>::iterator b);`),
        classes: parseClass(`void r4mp1475(int a, std::forward_list<uint64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1475(int a, std::forward_list<uint64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1475 生成结果为空');
      const expectSnippet0 = 'export function r4mp1475(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1475 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1475 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1476
  * @tc.name : h2dts_gen_1476
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<int8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1476', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1476(int a, std::forward_list<int8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1476(int a, std::forward_list<int8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1476(int a, std::forward_list<int8_t>::iterator b);`),
        classes: parseClass(`void r4mp1476(int a, std::forward_list<int8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1476(int a, std::forward_list<int8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1476 生成结果为空');
      const expectSnippet0 = 'export function r4mp1476(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1476 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1476 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1477
  * @tc.name : h2dts_gen_1477
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<int16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1477', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1477(int a, std::forward_list<int16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1477(int a, std::forward_list<int16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1477(int a, std::forward_list<int16_t>::iterator b);`),
        classes: parseClass(`void r4mp1477(int a, std::forward_list<int16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1477(int a, std::forward_list<int16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1477 生成结果为空');
      const expectSnippet0 = 'export function r4mp1477(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1477 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1477 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1478
  * @tc.name : h2dts_gen_1478
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<int32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1478', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1478(int a, std::forward_list<int32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1478(int a, std::forward_list<int32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1478(int a, std::forward_list<int32_t>::iterator b);`),
        classes: parseClass(`void r4mp1478(int a, std::forward_list<int32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1478(int a, std::forward_list<int32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1478 生成结果为空');
      const expectSnippet0 = 'export function r4mp1478(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1478 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1478 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1479
  * @tc.name : h2dts_gen_1479
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<int64_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1479', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1479(int a, std::forward_list<int64_t>::iterator b);`),
        unions: parseUnion(`void r4mp1479(int a, std::forward_list<int64_t>::iterator b);`),
        structs: parseStruct(`void r4mp1479(int a, std::forward_list<int64_t>::iterator b);`),
        classes: parseClass(`void r4mp1479(int a, std::forward_list<int64_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1479(int a, std::forward_list<int64_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1479 生成结果为空');
      const expectSnippet0 = 'export function r4mp1479(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1479 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1479 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1480
  * @tc.name : h2dts_gen_1480
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<unsigned>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1480', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1480(int a, std::forward_list<unsigned>::iterator b);`),
        unions: parseUnion(`void r4mp1480(int a, std::forward_list<unsigned>::iterator b);`),
        structs: parseStruct(`void r4mp1480(int a, std::forward_list<unsigned>::iterator b);`),
        classes: parseClass(`void r4mp1480(int a, std::forward_list<unsigned>::iterator b);`),
        funcs: parseFunction(`void r4mp1480(int a, std::forward_list<unsigned>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1480 生成结果为空');
      const expectSnippet0 = 'export function r4mp1480(a: number, b: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1480 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1480 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1481
  * @tc.name : h2dts_gen_1481
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<bool>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1481', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1481(int a, std::forward_list<bool>::iterator b);`),
        unions: parseUnion(`void r4mp1481(int a, std::forward_list<bool>::iterator b);`),
        structs: parseStruct(`void r4mp1481(int a, std::forward_list<bool>::iterator b);`),
        classes: parseClass(`void r4mp1481(int a, std::forward_list<bool>::iterator b);`),
        funcs: parseFunction(`void r4mp1481(int a, std::forward_list<bool>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1481 生成结果为空');
      const expectSnippet0 = 'export function r4mp1481(a: number, b: IterableIterator<Array<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1481 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1481 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1482
  * @tc.name : h2dts_gen_1482
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<char>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1482', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1482(int a, std::forward_list<char>::iterator b);`),
        unions: parseUnion(`void r4mp1482(int a, std::forward_list<char>::iterator b);`),
        structs: parseStruct(`void r4mp1482(int a, std::forward_list<char>::iterator b);`),
        classes: parseClass(`void r4mp1482(int a, std::forward_list<char>::iterator b);`),
        funcs: parseFunction(`void r4mp1482(int a, std::forward_list<char>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1482 生成结果为空');
      const expectSnippet0 = 'export function r4mp1482(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1482 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1482 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1483
  * @tc.name : h2dts_gen_1483
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<wchar_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1483', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1483(int a, std::forward_list<wchar_t>::iterator b);`),
        unions: parseUnion(`void r4mp1483(int a, std::forward_list<wchar_t>::iterator b);`),
        structs: parseStruct(`void r4mp1483(int a, std::forward_list<wchar_t>::iterator b);`),
        classes: parseClass(`void r4mp1483(int a, std::forward_list<wchar_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1483(int a, std::forward_list<wchar_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1483 生成结果为空');
      const expectSnippet0 = 'export function r4mp1483(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1483 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1483 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1484
  * @tc.name : h2dts_gen_1484
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<char8_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1484', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1484(int a, std::forward_list<char8_t>::iterator b);`),
        unions: parseUnion(`void r4mp1484(int a, std::forward_list<char8_t>::iterator b);`),
        structs: parseStruct(`void r4mp1484(int a, std::forward_list<char8_t>::iterator b);`),
        classes: parseClass(`void r4mp1484(int a, std::forward_list<char8_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1484(int a, std::forward_list<char8_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1484 生成结果为空');
      const expectSnippet0 = 'export function r4mp1484(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1484 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1484 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1485
  * @tc.name : h2dts_gen_1485
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<char16_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1485', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1485(int a, std::forward_list<char16_t>::iterator b);`),
        unions: parseUnion(`void r4mp1485(int a, std::forward_list<char16_t>::iterator b);`),
        structs: parseStruct(`void r4mp1485(int a, std::forward_list<char16_t>::iterator b);`),
        classes: parseClass(`void r4mp1485(int a, std::forward_list<char16_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1485(int a, std::forward_list<char16_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1485 生成结果为空');
      const expectSnippet0 = 'export function r4mp1485(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1485 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1485 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1486
  * @tc.name : h2dts_gen_1486
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::forward_list<char32_t>::iterator` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1486', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1486(int a, std::forward_list<char32_t>::iterator b);`),
        unions: parseUnion(`void r4mp1486(int a, std::forward_list<char32_t>::iterator b);`),
        structs: parseStruct(`void r4mp1486(int a, std::forward_list<char32_t>::iterator b);`),
        classes: parseClass(`void r4mp1486(int a, std::forward_list<char32_t>::iterator b);`),
        funcs: parseFunction(`void r4mp1486(int a, std::forward_list<char32_t>::iterator b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1486 生成结果为空');
      const expectSnippet0 = 'export function r4mp1486(a: number, b: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1486 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1486 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1487
  * @tc.name : h2dts_gen_1487
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1487', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1487(int a, std::stack<int> b);`),
        unions: parseUnion(`void r4mp1487(int a, std::stack<int> b);`),
        structs: parseStruct(`void r4mp1487(int a, std::stack<int> b);`),
        classes: parseClass(`void r4mp1487(int a, std::stack<int> b);`),
        funcs: parseFunction(`void r4mp1487(int a, std::stack<int> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1487 生成结果为空');
      const expectSnippet0 = 'export function r4mp1487(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1487 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1487 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1488
  * @tc.name : h2dts_gen_1488
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1488', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1488(int a, std::stack<size_t> b);`),
        unions: parseUnion(`void r4mp1488(int a, std::stack<size_t> b);`),
        structs: parseStruct(`void r4mp1488(int a, std::stack<size_t> b);`),
        classes: parseClass(`void r4mp1488(int a, std::stack<size_t> b);`),
        funcs: parseFunction(`void r4mp1488(int a, std::stack<size_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1488 生成结果为空');
      const expectSnippet0 = 'export function r4mp1488(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1488 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1488 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1489
  * @tc.name : h2dts_gen_1489
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1489', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1489(int a, std::stack<double> b);`),
        unions: parseUnion(`void r4mp1489(int a, std::stack<double> b);`),
        structs: parseStruct(`void r4mp1489(int a, std::stack<double> b);`),
        classes: parseClass(`void r4mp1489(int a, std::stack<double> b);`),
        funcs: parseFunction(`void r4mp1489(int a, std::stack<double> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1489 生成结果为空');
      const expectSnippet0 = 'export function r4mp1489(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1489 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1489 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1490
  * @tc.name : h2dts_gen_1490
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1490', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1490(int a, std::stack<float> b);`),
        unions: parseUnion(`void r4mp1490(int a, std::stack<float> b);`),
        structs: parseStruct(`void r4mp1490(int a, std::stack<float> b);`),
        classes: parseClass(`void r4mp1490(int a, std::stack<float> b);`),
        funcs: parseFunction(`void r4mp1490(int a, std::stack<float> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1490 生成结果为空');
      const expectSnippet0 = 'export function r4mp1490(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1490 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1490 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1491
  * @tc.name : h2dts_gen_1491
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1491', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1491(int a, std::stack<long> b);`),
        unions: parseUnion(`void r4mp1491(int a, std::stack<long> b);`),
        structs: parseStruct(`void r4mp1491(int a, std::stack<long> b);`),
        classes: parseClass(`void r4mp1491(int a, std::stack<long> b);`),
        funcs: parseFunction(`void r4mp1491(int a, std::stack<long> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1491 生成结果为空');
      const expectSnippet0 = 'export function r4mp1491(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1491 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1491 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1492
  * @tc.name : h2dts_gen_1492
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1492', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1492(int a, std::stack<short> b);`),
        unions: parseUnion(`void r4mp1492(int a, std::stack<short> b);`),
        structs: parseStruct(`void r4mp1492(int a, std::stack<short> b);`),
        classes: parseClass(`void r4mp1492(int a, std::stack<short> b);`),
        funcs: parseFunction(`void r4mp1492(int a, std::stack<short> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1492 生成结果为空');
      const expectSnippet0 = 'export function r4mp1492(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1492 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1492 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1493
  * @tc.name : h2dts_gen_1493
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1493', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1493(int a, std::stack<uint8_t> b);`),
        unions: parseUnion(`void r4mp1493(int a, std::stack<uint8_t> b);`),
        structs: parseStruct(`void r4mp1493(int a, std::stack<uint8_t> b);`),
        classes: parseClass(`void r4mp1493(int a, std::stack<uint8_t> b);`),
        funcs: parseFunction(`void r4mp1493(int a, std::stack<uint8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1493 生成结果为空');
      const expectSnippet0 = 'export function r4mp1493(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1493 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1493 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1494
  * @tc.name : h2dts_gen_1494
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1494', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1494(int a, std::stack<uint16_t> b);`),
        unions: parseUnion(`void r4mp1494(int a, std::stack<uint16_t> b);`),
        structs: parseStruct(`void r4mp1494(int a, std::stack<uint16_t> b);`),
        classes: parseClass(`void r4mp1494(int a, std::stack<uint16_t> b);`),
        funcs: parseFunction(`void r4mp1494(int a, std::stack<uint16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1494 生成结果为空');
      const expectSnippet0 = 'export function r4mp1494(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1494 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1494 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1495
  * @tc.name : h2dts_gen_1495
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1495', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1495(int a, std::stack<uint32_t> b);`),
        unions: parseUnion(`void r4mp1495(int a, std::stack<uint32_t> b);`),
        structs: parseStruct(`void r4mp1495(int a, std::stack<uint32_t> b);`),
        classes: parseClass(`void r4mp1495(int a, std::stack<uint32_t> b);`),
        funcs: parseFunction(`void r4mp1495(int a, std::stack<uint32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1495 生成结果为空');
      const expectSnippet0 = 'export function r4mp1495(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1495 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1495 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1496
  * @tc.name : h2dts_gen_1496
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1496', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1496(int a, std::stack<uint64_t> b);`),
        unions: parseUnion(`void r4mp1496(int a, std::stack<uint64_t> b);`),
        structs: parseStruct(`void r4mp1496(int a, std::stack<uint64_t> b);`),
        classes: parseClass(`void r4mp1496(int a, std::stack<uint64_t> b);`),
        funcs: parseFunction(`void r4mp1496(int a, std::stack<uint64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1496 生成结果为空');
      const expectSnippet0 = 'export function r4mp1496(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1496 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1496 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1497
  * @tc.name : h2dts_gen_1497
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1497', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1497(int a, std::stack<int8_t> b);`),
        unions: parseUnion(`void r4mp1497(int a, std::stack<int8_t> b);`),
        structs: parseStruct(`void r4mp1497(int a, std::stack<int8_t> b);`),
        classes: parseClass(`void r4mp1497(int a, std::stack<int8_t> b);`),
        funcs: parseFunction(`void r4mp1497(int a, std::stack<int8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1497 生成结果为空');
      const expectSnippet0 = 'export function r4mp1497(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1497 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1497 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1498
  * @tc.name : h2dts_gen_1498
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1498', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1498(int a, std::stack<int16_t> b);`),
        unions: parseUnion(`void r4mp1498(int a, std::stack<int16_t> b);`),
        structs: parseStruct(`void r4mp1498(int a, std::stack<int16_t> b);`),
        classes: parseClass(`void r4mp1498(int a, std::stack<int16_t> b);`),
        funcs: parseFunction(`void r4mp1498(int a, std::stack<int16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1498 生成结果为空');
      const expectSnippet0 = 'export function r4mp1498(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1498 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1498 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1499
  * @tc.name : h2dts_gen_1499
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1499', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1499(int a, std::stack<int32_t> b);`),
        unions: parseUnion(`void r4mp1499(int a, std::stack<int32_t> b);`),
        structs: parseStruct(`void r4mp1499(int a, std::stack<int32_t> b);`),
        classes: parseClass(`void r4mp1499(int a, std::stack<int32_t> b);`),
        funcs: parseFunction(`void r4mp1499(int a, std::stack<int32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1499 生成结果为空');
      const expectSnippet0 = 'export function r4mp1499(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1499 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1499 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1500
  * @tc.name : h2dts_gen_1500
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1500', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1500(int a, std::stack<int64_t> b);`),
        unions: parseUnion(`void r4mp1500(int a, std::stack<int64_t> b);`),
        structs: parseStruct(`void r4mp1500(int a, std::stack<int64_t> b);`),
        classes: parseClass(`void r4mp1500(int a, std::stack<int64_t> b);`),
        funcs: parseFunction(`void r4mp1500(int a, std::stack<int64_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1500 生成结果为空');
      const expectSnippet0 = 'export function r4mp1500(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1500 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1500 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1501
  * @tc.name : h2dts_gen_1501
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1501', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1501(int a, std::stack<unsigned> b);`),
        unions: parseUnion(`void r4mp1501(int a, std::stack<unsigned> b);`),
        structs: parseStruct(`void r4mp1501(int a, std::stack<unsigned> b);`),
        classes: parseClass(`void r4mp1501(int a, std::stack<unsigned> b);`),
        funcs: parseFunction(`void r4mp1501(int a, std::stack<unsigned> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1501 生成结果为空');
      const expectSnippet0 = 'export function r4mp1501(a: number, b: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1501 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1501 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1502
  * @tc.name : h2dts_gen_1502
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1502', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1502(int a, std::stack<bool> b);`),
        unions: parseUnion(`void r4mp1502(int a, std::stack<bool> b);`),
        structs: parseStruct(`void r4mp1502(int a, std::stack<bool> b);`),
        classes: parseClass(`void r4mp1502(int a, std::stack<bool> b);`),
        funcs: parseFunction(`void r4mp1502(int a, std::stack<bool> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1502 生成结果为空');
      const expectSnippet0 = 'export function r4mp1502(a: number, b: Array<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1502 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1502 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1503
  * @tc.name : h2dts_gen_1503
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1503', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1503(int a, std::stack<char> b);`),
        unions: parseUnion(`void r4mp1503(int a, std::stack<char> b);`),
        structs: parseStruct(`void r4mp1503(int a, std::stack<char> b);`),
        classes: parseClass(`void r4mp1503(int a, std::stack<char> b);`),
        funcs: parseFunction(`void r4mp1503(int a, std::stack<char> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1503 生成结果为空');
      const expectSnippet0 = 'export function r4mp1503(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1503 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1503 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1504
  * @tc.name : h2dts_gen_1504
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1504', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1504(int a, std::stack<wchar_t> b);`),
        unions: parseUnion(`void r4mp1504(int a, std::stack<wchar_t> b);`),
        structs: parseStruct(`void r4mp1504(int a, std::stack<wchar_t> b);`),
        classes: parseClass(`void r4mp1504(int a, std::stack<wchar_t> b);`),
        funcs: parseFunction(`void r4mp1504(int a, std::stack<wchar_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1504 生成结果为空');
      const expectSnippet0 = 'export function r4mp1504(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1504 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1504 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1505
  * @tc.name : h2dts_gen_1505
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1505', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1505(int a, std::stack<char8_t> b);`),
        unions: parseUnion(`void r4mp1505(int a, std::stack<char8_t> b);`),
        structs: parseStruct(`void r4mp1505(int a, std::stack<char8_t> b);`),
        classes: parseClass(`void r4mp1505(int a, std::stack<char8_t> b);`),
        funcs: parseFunction(`void r4mp1505(int a, std::stack<char8_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1505 生成结果为空');
      const expectSnippet0 = 'export function r4mp1505(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1505 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1505 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1506
  * @tc.name : h2dts_gen_1506
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1506', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1506(int a, std::stack<char16_t> b);`),
        unions: parseUnion(`void r4mp1506(int a, std::stack<char16_t> b);`),
        structs: parseStruct(`void r4mp1506(int a, std::stack<char16_t> b);`),
        classes: parseClass(`void r4mp1506(int a, std::stack<char16_t> b);`),
        funcs: parseFunction(`void r4mp1506(int a, std::stack<char16_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1506 生成结果为空');
      const expectSnippet0 = 'export function r4mp1506(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1506 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1506 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1507
  * @tc.name : h2dts_gen_1507
  * @tc.desc : h2dts gen：扩充-R4-双参数 `int`+`std::stack<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1507', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r4mp1507(int a, std::stack<char32_t> b);`),
        unions: parseUnion(`void r4mp1507(int a, std::stack<char32_t> b);`),
        structs: parseStruct(`void r4mp1507(int a, std::stack<char32_t> b);`),
        classes: parseClass(`void r4mp1507(int a, std::stack<char32_t> b);`),
        funcs: parseFunction(`void r4mp1507(int a, std::stack<char32_t> b);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1507 生成结果为空');
      const expectSnippet0 = 'export function r4mp1507(a: number, b: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1507 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_1507 执行异常: ${String(err)}`);
    }
  });
});
