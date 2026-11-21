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

suite('Gendts_gen_Suite_Ext28', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext28');
  /**
  * @tc.number : h2dts_gen_0921
  * @tc.name : h2dts_gen_0921
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0921', () => {
    try {
      const DECL = `void genType921(std::unique_ptr<long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0921 生成结果为空');
      const expectSnippet0 = 'export function genType921(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0921 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0921 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0922
  * @tc.name : h2dts_gen_0922
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<short>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0922', () => {
    try {
      const DECL = `void genType922(std::unique_ptr<short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0922 生成结果为空');
      const expectSnippet0 = 'export function genType922(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0922 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0922 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0923
  * @tc.name : h2dts_gen_0923
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<uint8_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0923', () => {
    try {
      const DECL = `void genType923(std::unique_ptr<uint8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0923 生成结果为空');
      const expectSnippet0 = 'export function genType923(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0923 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0923 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0924
  * @tc.name : h2dts_gen_0924
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<uint16_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0924', () => {
    try {
      const DECL = `void genType924(std::unique_ptr<uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0924 生成结果为空');
      const expectSnippet0 = 'export function genType924(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0924 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0924 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0925
  * @tc.name : h2dts_gen_0925
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<uint32_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0925', () => {
    try {
      const DECL = `void genType925(std::unique_ptr<uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0925 生成结果为空');
      const expectSnippet0 = 'export function genType925(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0925 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0925 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0926
  * @tc.name : h2dts_gen_0926
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<uint64_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0926', () => {
    try {
      const DECL = `void genType926(std::unique_ptr<uint64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0926 生成结果为空');
      const expectSnippet0 = 'export function genType926(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0926 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0926 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0927
  * @tc.name : h2dts_gen_0927
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<int8_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0927', () => {
    try {
      const DECL = `void genType927(std::unique_ptr<int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0927 生成结果为空');
      const expectSnippet0 = 'export function genType927(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0927 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0927 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0928
  * @tc.name : h2dts_gen_0928
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<int16_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0928', () => {
    try {
      const DECL = `void genType928(std::unique_ptr<int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0928 生成结果为空');
      const expectSnippet0 = 'export function genType928(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0928 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0928 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0929
  * @tc.name : h2dts_gen_0929
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<int32_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0929', () => {
    try {
      const DECL = `void genType929(std::unique_ptr<int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0929 生成结果为空');
      const expectSnippet0 = 'export function genType929(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0929 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0929 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0930
  * @tc.name : h2dts_gen_0930
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<int64_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0930', () => {
    try {
      const DECL = `void genType930(std::unique_ptr<int64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0930 生成结果为空');
      const expectSnippet0 = 'export function genType930(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0930 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0930 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0931
  * @tc.name : h2dts_gen_0931
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<unsigned>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0931', () => {
    try {
      const DECL = `void genType931(std::unique_ptr<unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0931 生成结果为空');
      const expectSnippet0 = 'export function genType931(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0931 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0931 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0932
  * @tc.name : h2dts_gen_0932
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<bool>` → `boolean` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0932', () => {
    try {
      const DECL = `void genType932(std::unique_ptr<bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0932 生成结果为空');
      const expectSnippet0 = 'export function genType932(v: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0932 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0932 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0933
  * @tc.name : h2dts_gen_0933
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<char>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0933', () => {
    try {
      const DECL = `void genType933(std::unique_ptr<char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0933 生成结果为空');
      const expectSnippet0 = 'export function genType933(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0933 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0933 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0934
  * @tc.name : h2dts_gen_0934
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<wchar_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0934', () => {
    try {
      const DECL = `void genType934(std::unique_ptr<wchar_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0934 生成结果为空');
      const expectSnippet0 = 'export function genType934(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0934 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0934 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0935
  * @tc.name : h2dts_gen_0935
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<char8_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0935', () => {
    try {
      const DECL = `void genType935(std::unique_ptr<char8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0935 生成结果为空');
      const expectSnippet0 = 'export function genType935(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0935 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0935 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0936
  * @tc.name : h2dts_gen_0936
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<char16_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0936', () => {
    try {
      const DECL = `void genType936(std::unique_ptr<char16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0936 生成结果为空');
      const expectSnippet0 = 'export function genType936(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0936 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0936 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0937
  * @tc.name : h2dts_gen_0937
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::unique_ptr<char32_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0937', () => {
    try {
      const DECL = `void genType937(std::unique_ptr<char32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0937 生成结果为空');
      const expectSnippet0 = 'export function genType937(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0937 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0937 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0938
  * @tc.name : h2dts_gen_0938
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<int>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0938', () => {
    try {
      const DECL = `void genType938(std::shared_ptr<int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0938 生成结果为空');
      const expectSnippet0 = 'export function genType938(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0938 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0938 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0939
  * @tc.name : h2dts_gen_0939
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<size_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0939', () => {
    try {
      const DECL = `void genType939(std::shared_ptr<size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0939 生成结果为空');
      const expectSnippet0 = 'export function genType939(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0939 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0939 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0940
  * @tc.name : h2dts_gen_0940
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<double>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0940', () => {
    try {
      const DECL = `void genType940(std::shared_ptr<double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0940 生成结果为空');
      const expectSnippet0 = 'export function genType940(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0940 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0940 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0941
  * @tc.name : h2dts_gen_0941
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<float>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0941', () => {
    try {
      const DECL = `void genType941(std::shared_ptr<float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0941 生成结果为空');
      const expectSnippet0 = 'export function genType941(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0941 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0941 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0942
  * @tc.name : h2dts_gen_0942
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0942', () => {
    try {
      const DECL = `void genType942(std::shared_ptr<long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0942 生成结果为空');
      const expectSnippet0 = 'export function genType942(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0942 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0942 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0943
  * @tc.name : h2dts_gen_0943
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<short>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0943', () => {
    try {
      const DECL = `void genType943(std::shared_ptr<short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0943 生成结果为空');
      const expectSnippet0 = 'export function genType943(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0943 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0943 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0944
  * @tc.name : h2dts_gen_0944
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<uint8_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0944', () => {
    try {
      const DECL = `void genType944(std::shared_ptr<uint8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0944 生成结果为空');
      const expectSnippet0 = 'export function genType944(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0944 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0944 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0945
  * @tc.name : h2dts_gen_0945
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<uint16_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0945', () => {
    try {
      const DECL = `void genType945(std::shared_ptr<uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0945 生成结果为空');
      const expectSnippet0 = 'export function genType945(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0945 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0945 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0946
  * @tc.name : h2dts_gen_0946
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<uint32_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0946', () => {
    try {
      const DECL = `void genType946(std::shared_ptr<uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0946 生成结果为空');
      const expectSnippet0 = 'export function genType946(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0946 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0946 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0947
  * @tc.name : h2dts_gen_0947
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<uint64_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0947', () => {
    try {
      const DECL = `void genType947(std::shared_ptr<uint64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0947 生成结果为空');
      const expectSnippet0 = 'export function genType947(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0947 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0947 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0948
  * @tc.name : h2dts_gen_0948
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<int8_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0948', () => {
    try {
      const DECL = `void genType948(std::shared_ptr<int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0948 生成结果为空');
      const expectSnippet0 = 'export function genType948(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0948 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0948 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0949
  * @tc.name : h2dts_gen_0949
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<int16_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0949', () => {
    try {
      const DECL = `void genType949(std::shared_ptr<int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0949 生成结果为空');
      const expectSnippet0 = 'export function genType949(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0949 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0949 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0950
  * @tc.name : h2dts_gen_0950
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<int32_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0950', () => {
    try {
      const DECL = `void genType950(std::shared_ptr<int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0950 生成结果为空');
      const expectSnippet0 = 'export function genType950(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0950 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0950 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0951
  * @tc.name : h2dts_gen_0951
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<int64_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0951', () => {
    try {
      const DECL = `void genType951(std::shared_ptr<int64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0951 生成结果为空');
      const expectSnippet0 = 'export function genType951(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0951 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0951 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0952
  * @tc.name : h2dts_gen_0952
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<unsigned>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0952', () => {
    try {
      const DECL = `void genType952(std::shared_ptr<unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0952 生成结果为空');
      const expectSnippet0 = 'export function genType952(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0952 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0952 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0953
  * @tc.name : h2dts_gen_0953
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<bool>` → `boolean` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0953', () => {
    try {
      const DECL = `void genType953(std::shared_ptr<bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0953 生成结果为空');
      const expectSnippet0 = 'export function genType953(v: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0953 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0953 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0954
  * @tc.name : h2dts_gen_0954
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<char>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0954', () => {
    try {
      const DECL = `void genType954(std::shared_ptr<char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0954 生成结果为空');
      const expectSnippet0 = 'export function genType954(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0954 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0954 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0955
  * @tc.name : h2dts_gen_0955
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<wchar_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0955', () => {
    try {
      const DECL = `void genType955(std::shared_ptr<wchar_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0955 生成结果为空');
      const expectSnippet0 = 'export function genType955(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0955 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0955 执行异常: ${String(err)}`);
    }
  });
});
