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

suite('Gendts_gen_Suite_Ext57', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext57');
  /**
  * @tc.number : h2dts_gen_1858
  * @tc.name : h2dts_gen_1858
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1858', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1858 { int fieldA; std::deque<char8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1858 { int fieldA; std::deque<char8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1858 { int fieldA; std::deque<char8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1858 { int fieldA; std::deque<char8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1858 { int fieldA; std::deque<char8_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1858 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1858 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1858 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1858 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1858 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1859
  * @tc.name : h2dts_gen_1859
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1859', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1859 { int fieldA; std::deque<char16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1859 { int fieldA; std::deque<char16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1859 { int fieldA; std::deque<char16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1859 { int fieldA; std::deque<char16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1859 { int fieldA; std::deque<char16_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1859 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1859 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1859 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1859 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1859 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1860
  * @tc.name : h2dts_gen_1860
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::deque<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1860', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1860 { int fieldA; std::deque<char32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1860 { int fieldA; std::deque<char32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1860 { int fieldA; std::deque<char32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1860 { int fieldA; std::deque<char32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1860 { int fieldA; std::deque<char32_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1860 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1860 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1860 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1860 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1860 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1861
  * @tc.name : h2dts_gen_1861
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1861', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1861 { int fieldA; std::list<int> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1861 { int fieldA; std::list<int> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1861 { int fieldA; std::list<int> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1861 { int fieldA; std::list<int> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1861 { int fieldA; std::list<int> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1861 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1861 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1861 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1861 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1861 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1862
  * @tc.name : h2dts_gen_1862
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1862', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1862 { int fieldA; std::list<size_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1862 { int fieldA; std::list<size_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1862 { int fieldA; std::list<size_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1862 { int fieldA; std::list<size_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1862 { int fieldA; std::list<size_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1862 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1862 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1862 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1862 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1862 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1863
  * @tc.name : h2dts_gen_1863
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1863', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1863 { int fieldA; std::list<double> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1863 { int fieldA; std::list<double> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1863 { int fieldA; std::list<double> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1863 { int fieldA; std::list<double> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1863 { int fieldA; std::list<double> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1863 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1863 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1863 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1863 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1863 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1864
  * @tc.name : h2dts_gen_1864
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1864', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1864 { int fieldA; std::list<float> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1864 { int fieldA; std::list<float> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1864 { int fieldA; std::list<float> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1864 { int fieldA; std::list<float> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1864 { int fieldA; std::list<float> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1864 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1864 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1864 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1864 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1864 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1865
  * @tc.name : h2dts_gen_1865
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1865', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1865 { int fieldA; std::list<long> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1865 { int fieldA; std::list<long> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1865 { int fieldA; std::list<long> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1865 { int fieldA; std::list<long> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1865 { int fieldA; std::list<long> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1865 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1865 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1865 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1865 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1865 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1866
  * @tc.name : h2dts_gen_1866
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1866', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1866 { int fieldA; std::list<short> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1866 { int fieldA; std::list<short> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1866 { int fieldA; std::list<short> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1866 { int fieldA; std::list<short> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1866 { int fieldA; std::list<short> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1866 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1866 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1866 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1866 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1866 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1867
  * @tc.name : h2dts_gen_1867
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1867', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1867 { int fieldA; std::list<uint8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1867 { int fieldA; std::list<uint8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1867 { int fieldA; std::list<uint8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1867 { int fieldA; std::list<uint8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1867 { int fieldA; std::list<uint8_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1867 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1867 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1867 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1867 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1867 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1868
  * @tc.name : h2dts_gen_1868
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1868', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1868 { int fieldA; std::list<uint16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1868 { int fieldA; std::list<uint16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1868 { int fieldA; std::list<uint16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1868 { int fieldA; std::list<uint16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1868 { int fieldA; std::list<uint16_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1868 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1868 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1868 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1868 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1868 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1869
  * @tc.name : h2dts_gen_1869
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1869', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1869 { int fieldA; std::list<uint32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1869 { int fieldA; std::list<uint32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1869 { int fieldA; std::list<uint32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1869 { int fieldA; std::list<uint32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1869 { int fieldA; std::list<uint32_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1869 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1869 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1869 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1869 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1869 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1870
  * @tc.name : h2dts_gen_1870
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1870', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1870 { int fieldA; std::list<uint64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1870 { int fieldA; std::list<uint64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1870 { int fieldA; std::list<uint64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1870 { int fieldA; std::list<uint64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1870 { int fieldA; std::list<uint64_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1870 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1870 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1870 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1870 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1870 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1871
  * @tc.name : h2dts_gen_1871
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1871', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1871 { int fieldA; std::list<int8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1871 { int fieldA; std::list<int8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1871 { int fieldA; std::list<int8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1871 { int fieldA; std::list<int8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1871 { int fieldA; std::list<int8_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1871 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1871 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1871 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1871 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1871 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1872
  * @tc.name : h2dts_gen_1872
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1872', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1872 { int fieldA; std::list<int16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1872 { int fieldA; std::list<int16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1872 { int fieldA; std::list<int16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1872 { int fieldA; std::list<int16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1872 { int fieldA; std::list<int16_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1872 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1872 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1872 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1872 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1872 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1873
  * @tc.name : h2dts_gen_1873
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1873', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1873 { int fieldA; std::list<int32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1873 { int fieldA; std::list<int32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1873 { int fieldA; std::list<int32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1873 { int fieldA; std::list<int32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1873 { int fieldA; std::list<int32_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1873 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1873 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1873 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1873 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1873 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1874
  * @tc.name : h2dts_gen_1874
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1874', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1874 { int fieldA; std::list<int64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1874 { int fieldA; std::list<int64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1874 { int fieldA; std::list<int64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1874 { int fieldA; std::list<int64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1874 { int fieldA; std::list<int64_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1874 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1874 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1874 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1874 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1874 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1875
  * @tc.name : h2dts_gen_1875
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1875', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1875 { int fieldA; std::list<unsigned> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1875 { int fieldA; std::list<unsigned> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1875 { int fieldA; std::list<unsigned> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1875 { int fieldA; std::list<unsigned> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1875 { int fieldA; std::list<unsigned> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1875 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1875 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1875 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1875 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1875 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1876
  * @tc.name : h2dts_gen_1876
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1876', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1876 { int fieldA; std::list<bool> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1876 { int fieldA; std::list<bool> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1876 { int fieldA; std::list<bool> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1876 { int fieldA; std::list<bool> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1876 { int fieldA; std::list<bool> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1876 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1876 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1876 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1876 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1876 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1877
  * @tc.name : h2dts_gen_1877
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1877', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1877 { int fieldA; std::list<char> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1877 { int fieldA; std::list<char> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1877 { int fieldA; std::list<char> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1877 { int fieldA; std::list<char> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1877 { int fieldA; std::list<char> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1877 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1877 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1877 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1877 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1877 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1878
  * @tc.name : h2dts_gen_1878
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1878', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1878 { int fieldA; std::list<wchar_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1878 { int fieldA; std::list<wchar_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1878 { int fieldA; std::list<wchar_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1878 { int fieldA; std::list<wchar_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1878 { int fieldA; std::list<wchar_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1878 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1878 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1878 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1878 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1878 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1879
  * @tc.name : h2dts_gen_1879
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1879', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1879 { int fieldA; std::list<char8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1879 { int fieldA; std::list<char8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1879 { int fieldA; std::list<char8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1879 { int fieldA; std::list<char8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1879 { int fieldA; std::list<char8_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1879 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1879 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1879 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1879 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1879 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1880
  * @tc.name : h2dts_gen_1880
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1880', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1880 { int fieldA; std::list<char16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1880 { int fieldA; std::list<char16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1880 { int fieldA; std::list<char16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1880 { int fieldA; std::list<char16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1880 { int fieldA; std::list<char16_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1880 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1880 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1880 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1880 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1880 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1881
  * @tc.name : h2dts_gen_1881
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::list<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1881', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1881 { int fieldA; std::list<char32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1881 { int fieldA; std::list<char32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1881 { int fieldA; std::list<char32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1881 { int fieldA; std::list<char32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1881 { int fieldA; std::list<char32_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1881 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1881 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1881 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1881 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1881 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1882
  * @tc.name : h2dts_gen_1882
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1882', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1882 { int fieldA; std::forward_list<int> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1882 { int fieldA; std::forward_list<int> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1882 { int fieldA; std::forward_list<int> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1882 { int fieldA; std::forward_list<int> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1882 { int fieldA; std::forward_list<int> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1882 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1882 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1882 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1882 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1882 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1883
  * @tc.name : h2dts_gen_1883
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1883', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1883 { int fieldA; std::forward_list<size_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1883 { int fieldA; std::forward_list<size_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1883 { int fieldA; std::forward_list<size_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1883 { int fieldA; std::forward_list<size_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1883 { int fieldA; std::forward_list<size_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1883 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1883 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1883 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1883 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1883 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1884
  * @tc.name : h2dts_gen_1884
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1884', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1884 { int fieldA; std::forward_list<double> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1884 { int fieldA; std::forward_list<double> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1884 { int fieldA; std::forward_list<double> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1884 { int fieldA; std::forward_list<double> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1884 { int fieldA; std::forward_list<double> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1884 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1884 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1884 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1884 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1884 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1885
  * @tc.name : h2dts_gen_1885
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1885', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1885 { int fieldA; std::forward_list<float> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1885 { int fieldA; std::forward_list<float> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1885 { int fieldA; std::forward_list<float> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1885 { int fieldA; std::forward_list<float> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1885 { int fieldA; std::forward_list<float> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1885 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1885 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1885 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1885 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1885 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1886
  * @tc.name : h2dts_gen_1886
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1886', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1886 { int fieldA; std::forward_list<long> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1886 { int fieldA; std::forward_list<long> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1886 { int fieldA; std::forward_list<long> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1886 { int fieldA; std::forward_list<long> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1886 { int fieldA; std::forward_list<long> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1886 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1886 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1886 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1886 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1886 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1887
  * @tc.name : h2dts_gen_1887
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1887', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1887 { int fieldA; std::forward_list<short> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1887 { int fieldA; std::forward_list<short> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1887 { int fieldA; std::forward_list<short> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1887 { int fieldA; std::forward_list<short> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1887 { int fieldA; std::forward_list<short> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1887 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1887 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1887 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1887 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1887 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1888
  * @tc.name : h2dts_gen_1888
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1888', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1888 { int fieldA; std::forward_list<uint8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1888 { int fieldA; std::forward_list<uint8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1888 { int fieldA; std::forward_list<uint8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1888 { int fieldA; std::forward_list<uint8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1888 { int fieldA; std::forward_list<uint8_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1888 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1888 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1888 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1888 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1888 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1889
  * @tc.name : h2dts_gen_1889
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1889', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1889 { int fieldA; std::forward_list<uint16_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1889 { int fieldA; std::forward_list<uint16_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1889 { int fieldA; std::forward_list<uint16_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1889 { int fieldA; std::forward_list<uint16_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1889 { int fieldA; std::forward_list<uint16_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1889 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1889 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1889 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1889 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1889 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1890
  * @tc.name : h2dts_gen_1890
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1890', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1890 { int fieldA; std::forward_list<uint32_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1890 { int fieldA; std::forward_list<uint32_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1890 { int fieldA; std::forward_list<uint32_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1890 { int fieldA; std::forward_list<uint32_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1890 { int fieldA; std::forward_list<uint32_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1890 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1890 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1890 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1890 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1890 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1891
  * @tc.name : h2dts_gen_1891
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1891', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1891 { int fieldA; std::forward_list<uint64_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1891 { int fieldA; std::forward_list<uint64_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1891 { int fieldA; std::forward_list<uint64_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1891 { int fieldA; std::forward_list<uint64_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1891 { int fieldA; std::forward_list<uint64_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1891 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1891 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1891 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1891 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1891 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_1892
  * @tc.name : h2dts_gen_1892
  * @tc.desc : h2dts gen：扩充-R4-class 双成员 `int`+`std::forward_list<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_1892', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`class R4Cls1892 { int fieldA; std::forward_list<int8_t> fieldB; void touch(); };`),
        unions: parseUnion(`class R4Cls1892 { int fieldA; std::forward_list<int8_t> fieldB; void touch(); };`),
        structs: parseStruct(`class R4Cls1892 { int fieldA; std::forward_list<int8_t> fieldB; void touch(); };`),
        classes: parseClass(`class R4Cls1892 { int fieldA; std::forward_list<int8_t> fieldB; void touch(); };`),
        funcs: parseFunction(`class R4Cls1892 { int fieldA; std::forward_list<int8_t> fieldB; void touch(); };`),
        types: [],
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_gen_1892 生成结果为空');
      const expectSnippet0 = 'export class R4Cls1892 {';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_1892 生成结果缺少片段 0');
      const expectSnippet1 = 'number';
      assert.ok(result.includes(expectSnippet1), 'h2dts_gen_1892 生成结果缺少片段 1');
          } catch (err) {
      assert.fail(`h2dts_gen_1892 执行异常: ${String(err)}`);
    }
  });
});
