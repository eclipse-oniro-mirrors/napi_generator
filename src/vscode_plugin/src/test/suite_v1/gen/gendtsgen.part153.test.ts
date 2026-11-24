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

suite('Gendts_gen_Suite_Ext153', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext153');
  /**
  * @tc.number : h2dts_gen_5172
  * @tc.name : h2dts_gen_5172
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5172', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5172(int a, size_t b, double c, char d);`),
        unions: parseUnion(`void r5qp5172(int a, size_t b, double c, char d);`),
        structs: parseStruct(`void r5qp5172(int a, size_t b, double c, char d);`),
        classes: parseClass(`void r5qp5172(int a, size_t b, double c, char d);`),
        funcs: parseFunction(`void r5qp5172(int a, size_t b, double c, char d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5172 生成结果为空');
      const expectSnippet0 = 'export function r5qp5172(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5172 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5173
  * @tc.name : h2dts_gen_5173
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5173', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5173(int a, size_t b, double c, wchar_t d);`),
        unions: parseUnion(`void r5qp5173(int a, size_t b, double c, wchar_t d);`),
        structs: parseStruct(`void r5qp5173(int a, size_t b, double c, wchar_t d);`),
        classes: parseClass(`void r5qp5173(int a, size_t b, double c, wchar_t d);`),
        funcs: parseFunction(`void r5qp5173(int a, size_t b, double c, wchar_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5173 生成结果为空');
      const expectSnippet0 = 'export function r5qp5173(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5173 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5174
  * @tc.name : h2dts_gen_5174
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5174', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5174(int a, size_t b, double c, char8_t d);`),
        unions: parseUnion(`void r5qp5174(int a, size_t b, double c, char8_t d);`),
        structs: parseStruct(`void r5qp5174(int a, size_t b, double c, char8_t d);`),
        classes: parseClass(`void r5qp5174(int a, size_t b, double c, char8_t d);`),
        funcs: parseFunction(`void r5qp5174(int a, size_t b, double c, char8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5174 生成结果为空');
      const expectSnippet0 = 'export function r5qp5174(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5174 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5175
  * @tc.name : h2dts_gen_5175
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5175', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5175(int a, size_t b, double c, char16_t d);`),
        unions: parseUnion(`void r5qp5175(int a, size_t b, double c, char16_t d);`),
        structs: parseStruct(`void r5qp5175(int a, size_t b, double c, char16_t d);`),
        classes: parseClass(`void r5qp5175(int a, size_t b, double c, char16_t d);`),
        funcs: parseFunction(`void r5qp5175(int a, size_t b, double c, char16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5175 生成结果为空');
      const expectSnippet0 = 'export function r5qp5175(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5175 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5176
  * @tc.name : h2dts_gen_5176
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5176', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5176(int a, size_t b, double c, char32_t d);`),
        unions: parseUnion(`void r5qp5176(int a, size_t b, double c, char32_t d);`),
        structs: parseStruct(`void r5qp5176(int a, size_t b, double c, char32_t d);`),
        classes: parseClass(`void r5qp5176(int a, size_t b, double c, char32_t d);`),
        funcs: parseFunction(`void r5qp5176(int a, size_t b, double c, char32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5176 生成结果为空');
      const expectSnippet0 = 'export function r5qp5176(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5176 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5177
  * @tc.name : h2dts_gen_5177
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5177', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5177(int a, size_t b, double c, std::deque<int> d);`),
        unions: parseUnion(`void r5qp5177(int a, size_t b, double c, std::deque<int> d);`),
        structs: parseStruct(`void r5qp5177(int a, size_t b, double c, std::deque<int> d);`),
        classes: parseClass(`void r5qp5177(int a, size_t b, double c, std::deque<int> d);`),
        funcs: parseFunction(`void r5qp5177(int a, size_t b, double c, std::deque<int> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5177 生成结果为空');
      const expectSnippet0 = 'export function r5qp5177(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5177 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5178
  * @tc.name : h2dts_gen_5178
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5178', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5178(int a, size_t b, double c, std::deque<size_t> d);`),
        unions: parseUnion(`void r5qp5178(int a, size_t b, double c, std::deque<size_t> d);`),
        structs: parseStruct(`void r5qp5178(int a, size_t b, double c, std::deque<size_t> d);`),
        classes: parseClass(`void r5qp5178(int a, size_t b, double c, std::deque<size_t> d);`),
        funcs: parseFunction(`void r5qp5178(int a, size_t b, double c, std::deque<size_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5178 生成结果为空');
      const expectSnippet0 = 'export function r5qp5178(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5178 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5179
  * @tc.name : h2dts_gen_5179
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5179', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5179(int a, size_t b, double c, std::deque<double> d);`),
        unions: parseUnion(`void r5qp5179(int a, size_t b, double c, std::deque<double> d);`),
        structs: parseStruct(`void r5qp5179(int a, size_t b, double c, std::deque<double> d);`),
        classes: parseClass(`void r5qp5179(int a, size_t b, double c, std::deque<double> d);`),
        funcs: parseFunction(`void r5qp5179(int a, size_t b, double c, std::deque<double> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5179 生成结果为空');
      const expectSnippet0 = 'export function r5qp5179(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5179 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5180
  * @tc.name : h2dts_gen_5180
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5180', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5180(int a, size_t b, double c, std::deque<float> d);`),
        unions: parseUnion(`void r5qp5180(int a, size_t b, double c, std::deque<float> d);`),
        structs: parseStruct(`void r5qp5180(int a, size_t b, double c, std::deque<float> d);`),
        classes: parseClass(`void r5qp5180(int a, size_t b, double c, std::deque<float> d);`),
        funcs: parseFunction(`void r5qp5180(int a, size_t b, double c, std::deque<float> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5180 生成结果为空');
      const expectSnippet0 = 'export function r5qp5180(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5180 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5180 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5181
  * @tc.name : h2dts_gen_5181
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5181', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5181(int a, size_t b, double c, std::deque<long> d);`),
        unions: parseUnion(`void r5qp5181(int a, size_t b, double c, std::deque<long> d);`),
        structs: parseStruct(`void r5qp5181(int a, size_t b, double c, std::deque<long> d);`),
        classes: parseClass(`void r5qp5181(int a, size_t b, double c, std::deque<long> d);`),
        funcs: parseFunction(`void r5qp5181(int a, size_t b, double c, std::deque<long> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5181 生成结果为空');
      const expectSnippet0 = 'export function r5qp5181(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5181 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5182
  * @tc.name : h2dts_gen_5182
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5182', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5182(int a, size_t b, double c, std::deque<short> d);`),
        unions: parseUnion(`void r5qp5182(int a, size_t b, double c, std::deque<short> d);`),
        structs: parseStruct(`void r5qp5182(int a, size_t b, double c, std::deque<short> d);`),
        classes: parseClass(`void r5qp5182(int a, size_t b, double c, std::deque<short> d);`),
        funcs: parseFunction(`void r5qp5182(int a, size_t b, double c, std::deque<short> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5182 生成结果为空');
      const expectSnippet0 = 'export function r5qp5182(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5182 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5183
  * @tc.name : h2dts_gen_5183
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5183', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5183(int a, size_t b, double c, std::deque<uint8_t> d);`),
        unions: parseUnion(`void r5qp5183(int a, size_t b, double c, std::deque<uint8_t> d);`),
        structs: parseStruct(`void r5qp5183(int a, size_t b, double c, std::deque<uint8_t> d);`),
        classes: parseClass(`void r5qp5183(int a, size_t b, double c, std::deque<uint8_t> d);`),
        funcs: parseFunction(`void r5qp5183(int a, size_t b, double c, std::deque<uint8_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5183 生成结果为空');
      const expectSnippet0 = 'export function r5qp5183(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5183 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5184
  * @tc.name : h2dts_gen_5184
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5184', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5184(int a, size_t b, double c, std::deque<uint16_t> d);`),
        unions: parseUnion(`void r5qp5184(int a, size_t b, double c, std::deque<uint16_t> d);`),
        structs: parseStruct(`void r5qp5184(int a, size_t b, double c, std::deque<uint16_t> d);`),
        classes: parseClass(`void r5qp5184(int a, size_t b, double c, std::deque<uint16_t> d);`),
        funcs: parseFunction(`void r5qp5184(int a, size_t b, double c, std::deque<uint16_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5184 生成结果为空');
      const expectSnippet0 = 'export function r5qp5184(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5184 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5185
  * @tc.name : h2dts_gen_5185
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5185', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5185(int a, size_t b, double c, std::deque<uint32_t> d);`),
        unions: parseUnion(`void r5qp5185(int a, size_t b, double c, std::deque<uint32_t> d);`),
        structs: parseStruct(`void r5qp5185(int a, size_t b, double c, std::deque<uint32_t> d);`),
        classes: parseClass(`void r5qp5185(int a, size_t b, double c, std::deque<uint32_t> d);`),
        funcs: parseFunction(`void r5qp5185(int a, size_t b, double c, std::deque<uint32_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5185 生成结果为空');
      const expectSnippet0 = 'export function r5qp5185(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5185 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5185 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5186
  * @tc.name : h2dts_gen_5186
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5186', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5186(int a, size_t b, float c, short d);`),
        unions: parseUnion(`void r5qp5186(int a, size_t b, float c, short d);`),
        structs: parseStruct(`void r5qp5186(int a, size_t b, float c, short d);`),
        classes: parseClass(`void r5qp5186(int a, size_t b, float c, short d);`),
        funcs: parseFunction(`void r5qp5186(int a, size_t b, float c, short d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5186 生成结果为空');
      const expectSnippet0 = 'export function r5qp5186(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5186 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5186 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5187
  * @tc.name : h2dts_gen_5187
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5187', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5187(int a, size_t b, float c, long d);`),
        unions: parseUnion(`void r5qp5187(int a, size_t b, float c, long d);`),
        structs: parseStruct(`void r5qp5187(int a, size_t b, float c, long d);`),
        classes: parseClass(`void r5qp5187(int a, size_t b, float c, long d);`),
        funcs: parseFunction(`void r5qp5187(int a, size_t b, float c, long d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5187 生成结果为空');
      const expectSnippet0 = 'export function r5qp5187(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5187 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5187 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5188
  * @tc.name : h2dts_gen_5188
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5188', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5188(int a, size_t b, float c, uint8_t d);`),
        unions: parseUnion(`void r5qp5188(int a, size_t b, float c, uint8_t d);`),
        structs: parseStruct(`void r5qp5188(int a, size_t b, float c, uint8_t d);`),
        classes: parseClass(`void r5qp5188(int a, size_t b, float c, uint8_t d);`),
        funcs: parseFunction(`void r5qp5188(int a, size_t b, float c, uint8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5188 生成结果为空');
      const expectSnippet0 = 'export function r5qp5188(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5188 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5188 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5189
  * @tc.name : h2dts_gen_5189
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5189', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5189(int a, size_t b, float c, uint16_t d);`),
        unions: parseUnion(`void r5qp5189(int a, size_t b, float c, uint16_t d);`),
        structs: parseStruct(`void r5qp5189(int a, size_t b, float c, uint16_t d);`),
        classes: parseClass(`void r5qp5189(int a, size_t b, float c, uint16_t d);`),
        funcs: parseFunction(`void r5qp5189(int a, size_t b, float c, uint16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5189 生成结果为空');
      const expectSnippet0 = 'export function r5qp5189(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5189 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5189 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5190
  * @tc.name : h2dts_gen_5190
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5190', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5190(int a, size_t b, float c, uint32_t d);`),
        unions: parseUnion(`void r5qp5190(int a, size_t b, float c, uint32_t d);`),
        structs: parseStruct(`void r5qp5190(int a, size_t b, float c, uint32_t d);`),
        classes: parseClass(`void r5qp5190(int a, size_t b, float c, uint32_t d);`),
        funcs: parseFunction(`void r5qp5190(int a, size_t b, float c, uint32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5190 生成结果为空');
      const expectSnippet0 = 'export function r5qp5190(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5190 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5190 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5191
  * @tc.name : h2dts_gen_5191
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5191', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5191(int a, size_t b, float c, uint64_t d);`),
        unions: parseUnion(`void r5qp5191(int a, size_t b, float c, uint64_t d);`),
        structs: parseStruct(`void r5qp5191(int a, size_t b, float c, uint64_t d);`),
        classes: parseClass(`void r5qp5191(int a, size_t b, float c, uint64_t d);`),
        funcs: parseFunction(`void r5qp5191(int a, size_t b, float c, uint64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5191 生成结果为空');
      const expectSnippet0 = 'export function r5qp5191(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5191 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5191 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5192
  * @tc.name : h2dts_gen_5192
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5192', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5192(int a, size_t b, float c, int8_t d);`),
        unions: parseUnion(`void r5qp5192(int a, size_t b, float c, int8_t d);`),
        structs: parseStruct(`void r5qp5192(int a, size_t b, float c, int8_t d);`),
        classes: parseClass(`void r5qp5192(int a, size_t b, float c, int8_t d);`),
        funcs: parseFunction(`void r5qp5192(int a, size_t b, float c, int8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5192 生成结果为空');
      const expectSnippet0 = 'export function r5qp5192(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5192 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5192 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5193
  * @tc.name : h2dts_gen_5193
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5193', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5193(int a, size_t b, float c, int16_t d);`),
        unions: parseUnion(`void r5qp5193(int a, size_t b, float c, int16_t d);`),
        structs: parseStruct(`void r5qp5193(int a, size_t b, float c, int16_t d);`),
        classes: parseClass(`void r5qp5193(int a, size_t b, float c, int16_t d);`),
        funcs: parseFunction(`void r5qp5193(int a, size_t b, float c, int16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5193 生成结果为空');
      const expectSnippet0 = 'export function r5qp5193(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5193 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5193 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5194
  * @tc.name : h2dts_gen_5194
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5194', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5194(int a, size_t b, float c, int32_t d);`),
        unions: parseUnion(`void r5qp5194(int a, size_t b, float c, int32_t d);`),
        structs: parseStruct(`void r5qp5194(int a, size_t b, float c, int32_t d);`),
        classes: parseClass(`void r5qp5194(int a, size_t b, float c, int32_t d);`),
        funcs: parseFunction(`void r5qp5194(int a, size_t b, float c, int32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5194 生成结果为空');
      const expectSnippet0 = 'export function r5qp5194(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5194 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5194 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5195
  * @tc.name : h2dts_gen_5195
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5195', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5195(int a, size_t b, float c, int64_t d);`),
        unions: parseUnion(`void r5qp5195(int a, size_t b, float c, int64_t d);`),
        structs: parseStruct(`void r5qp5195(int a, size_t b, float c, int64_t d);`),
        classes: parseClass(`void r5qp5195(int a, size_t b, float c, int64_t d);`),
        funcs: parseFunction(`void r5qp5195(int a, size_t b, float c, int64_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5195 生成结果为空');
      const expectSnippet0 = 'export function r5qp5195(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5195 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5195 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5196
  * @tc.name : h2dts_gen_5196
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5196', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5196(int a, size_t b, float c, unsigned d);`),
        unions: parseUnion(`void r5qp5196(int a, size_t b, float c, unsigned d);`),
        structs: parseStruct(`void r5qp5196(int a, size_t b, float c, unsigned d);`),
        classes: parseClass(`void r5qp5196(int a, size_t b, float c, unsigned d);`),
        funcs: parseFunction(`void r5qp5196(int a, size_t b, float c, unsigned d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5196 生成结果为空');
      const expectSnippet0 = 'export function r5qp5196(a: number, b: number, c: number, d: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5196 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5196 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5197
  * @tc.name : h2dts_gen_5197
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5197', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5197(int a, size_t b, float c, bool d);`),
        unions: parseUnion(`void r5qp5197(int a, size_t b, float c, bool d);`),
        structs: parseStruct(`void r5qp5197(int a, size_t b, float c, bool d);`),
        classes: parseClass(`void r5qp5197(int a, size_t b, float c, bool d);`),
        funcs: parseFunction(`void r5qp5197(int a, size_t b, float c, bool d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5197 生成结果为空');
      const expectSnippet0 = 'export function r5qp5197(a: number, b: number, c: number, d: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5197 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5197 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5198
  * @tc.name : h2dts_gen_5198
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5198', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5198(int a, size_t b, float c, char d);`),
        unions: parseUnion(`void r5qp5198(int a, size_t b, float c, char d);`),
        structs: parseStruct(`void r5qp5198(int a, size_t b, float c, char d);`),
        classes: parseClass(`void r5qp5198(int a, size_t b, float c, char d);`),
        funcs: parseFunction(`void r5qp5198(int a, size_t b, float c, char d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5198 生成结果为空');
      const expectSnippet0 = 'export function r5qp5198(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5198 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5198 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5199
  * @tc.name : h2dts_gen_5199
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5199', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5199(int a, size_t b, float c, wchar_t d);`),
        unions: parseUnion(`void r5qp5199(int a, size_t b, float c, wchar_t d);`),
        structs: parseStruct(`void r5qp5199(int a, size_t b, float c, wchar_t d);`),
        classes: parseClass(`void r5qp5199(int a, size_t b, float c, wchar_t d);`),
        funcs: parseFunction(`void r5qp5199(int a, size_t b, float c, wchar_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5199 生成结果为空');
      const expectSnippet0 = 'export function r5qp5199(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5199 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5200
  * @tc.name : h2dts_gen_5200
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5200', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5200(int a, size_t b, float c, char8_t d);`),
        unions: parseUnion(`void r5qp5200(int a, size_t b, float c, char8_t d);`),
        structs: parseStruct(`void r5qp5200(int a, size_t b, float c, char8_t d);`),
        classes: parseClass(`void r5qp5200(int a, size_t b, float c, char8_t d);`),
        funcs: parseFunction(`void r5qp5200(int a, size_t b, float c, char8_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5200 生成结果为空');
      const expectSnippet0 = 'export function r5qp5200(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5200 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5200 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5201
  * @tc.name : h2dts_gen_5201
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5201', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5201(int a, size_t b, float c, char16_t d);`),
        unions: parseUnion(`void r5qp5201(int a, size_t b, float c, char16_t d);`),
        structs: parseStruct(`void r5qp5201(int a, size_t b, float c, char16_t d);`),
        classes: parseClass(`void r5qp5201(int a, size_t b, float c, char16_t d);`),
        funcs: parseFunction(`void r5qp5201(int a, size_t b, float c, char16_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5201 生成结果为空');
      const expectSnippet0 = 'export function r5qp5201(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5201 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5202
  * @tc.name : h2dts_gen_5202
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5202', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5202(int a, size_t b, float c, char32_t d);`),
        unions: parseUnion(`void r5qp5202(int a, size_t b, float c, char32_t d);`),
        structs: parseStruct(`void r5qp5202(int a, size_t b, float c, char32_t d);`),
        classes: parseClass(`void r5qp5202(int a, size_t b, float c, char32_t d);`),
        funcs: parseFunction(`void r5qp5202(int a, size_t b, float c, char32_t d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5202 生成结果为空');
      const expectSnippet0 = 'export function r5qp5202(a: number, b: number, c: number, d: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5202 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5202 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5203
  * @tc.name : h2dts_gen_5203
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5203', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5203(int a, size_t b, float c, std::deque<int> d);`),
        unions: parseUnion(`void r5qp5203(int a, size_t b, float c, std::deque<int> d);`),
        structs: parseStruct(`void r5qp5203(int a, size_t b, float c, std::deque<int> d);`),
        classes: parseClass(`void r5qp5203(int a, size_t b, float c, std::deque<int> d);`),
        funcs: parseFunction(`void r5qp5203(int a, size_t b, float c, std::deque<int> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5203 生成结果为空');
      const expectSnippet0 = 'export function r5qp5203(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5203 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5203 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5204
  * @tc.name : h2dts_gen_5204
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5204', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5204(int a, size_t b, float c, std::deque<size_t> d);`),
        unions: parseUnion(`void r5qp5204(int a, size_t b, float c, std::deque<size_t> d);`),
        structs: parseStruct(`void r5qp5204(int a, size_t b, float c, std::deque<size_t> d);`),
        classes: parseClass(`void r5qp5204(int a, size_t b, float c, std::deque<size_t> d);`),
        funcs: parseFunction(`void r5qp5204(int a, size_t b, float c, std::deque<size_t> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5204 生成结果为空');
      const expectSnippet0 = 'export function r5qp5204(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5204 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5205
  * @tc.name : h2dts_gen_5205
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5205', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5205(int a, size_t b, float c, std::deque<double> d);`),
        unions: parseUnion(`void r5qp5205(int a, size_t b, float c, std::deque<double> d);`),
        structs: parseStruct(`void r5qp5205(int a, size_t b, float c, std::deque<double> d);`),
        classes: parseClass(`void r5qp5205(int a, size_t b, float c, std::deque<double> d);`),
        funcs: parseFunction(`void r5qp5205(int a, size_t b, float c, std::deque<double> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5205 生成结果为空');
      const expectSnippet0 = 'export function r5qp5205(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5205 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5205 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_5206
  * @tc.name : h2dts_gen_5206
  * @tc.desc : h2dts gen：扩充-R5-四参数基本类型组合 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_5206', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r5qp5206(int a, size_t b, float c, std::deque<float> d);`),
        unions: parseUnion(`void r5qp5206(int a, size_t b, float c, std::deque<float> d);`),
        structs: parseStruct(`void r5qp5206(int a, size_t b, float c, std::deque<float> d);`),
        classes: parseClass(`void r5qp5206(int a, size_t b, float c, std::deque<float> d);`),
        funcs: parseFunction(`void r5qp5206(int a, size_t b, float c, std::deque<float> d);`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_5206 生成结果为空');
      const expectSnippet0 = 'export function r5qp5206(a: number, b: number, c: number, d: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_5206 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_5206 执行异常: ${String(err)}`);
    }
  });
});
