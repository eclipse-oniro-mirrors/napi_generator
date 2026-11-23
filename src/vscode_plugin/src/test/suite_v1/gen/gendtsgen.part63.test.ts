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

suite('Gendts_gen_Suite_Ext63', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext63');
  /**
  * @tc.number : h2dts_gen_2053
  * @tc.name : h2dts_gen_2053
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `int` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2053', () => {
    try {
      const DECL = `void r5ts2053(int v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2053 生成结果为空');
      const expectSnippet0 = 'export function r5ts2053(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2053 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2053 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2054
  * @tc.name : h2dts_gen_2054
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `size_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2054', () => {
    try {
      const DECL = `void r5ts2054(size_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2054 生成结果为空');
      const expectSnippet0 = 'export function r5ts2054(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2054 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2054 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2055
  * @tc.name : h2dts_gen_2055
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `double` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2055', () => {
    try {
      const DECL = `void r5ts2055(double v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2055 生成结果为空');
      const expectSnippet0 = 'export function r5ts2055(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2055 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2055 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2056
  * @tc.name : h2dts_gen_2056
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `float` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2056', () => {
    try {
      const DECL = `void r5ts2056(float v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2056 生成结果为空');
      const expectSnippet0 = 'export function r5ts2056(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2056 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2056 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2057
  * @tc.name : h2dts_gen_2057
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `short` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2057', () => {
    try {
      const DECL = `void r5ts2057(short v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2057 生成结果为空');
      const expectSnippet0 = 'export function r5ts2057(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2057 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2057 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2058
  * @tc.name : h2dts_gen_2058
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2058', () => {
    try {
      const DECL = `void r5ts2058(long v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2058 生成结果为空');
      const expectSnippet0 = 'export function r5ts2058(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2058 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2058 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2059
  * @tc.name : h2dts_gen_2059
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `uint8_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2059', () => {
    try {
      const DECL = `void r5ts2059(uint8_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2059 生成结果为空');
      const expectSnippet0 = 'export function r5ts2059(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2059 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2059 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2060
  * @tc.name : h2dts_gen_2060
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `uint16_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2060', () => {
    try {
      const DECL = `void r5ts2060(uint16_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2060 生成结果为空');
      const expectSnippet0 = 'export function r5ts2060(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2060 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2060 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2061
  * @tc.name : h2dts_gen_2061
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `uint32_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2061', () => {
    try {
      const DECL = `void r5ts2061(uint32_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2061 生成结果为空');
      const expectSnippet0 = 'export function r5ts2061(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2061 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2061 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2062
  * @tc.name : h2dts_gen_2062
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `uint64_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2062', () => {
    try {
      const DECL = `void r5ts2062(uint64_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2062 生成结果为空');
      const expectSnippet0 = 'export function r5ts2062(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2062 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2062 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2063
  * @tc.name : h2dts_gen_2063
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `int8_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2063', () => {
    try {
      const DECL = `void r5ts2063(int8_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2063 生成结果为空');
      const expectSnippet0 = 'export function r5ts2063(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2063 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2063 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2064
  * @tc.name : h2dts_gen_2064
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `int16_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2064', () => {
    try {
      const DECL = `void r5ts2064(int16_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2064 生成结果为空');
      const expectSnippet0 = 'export function r5ts2064(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2064 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2064 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2065
  * @tc.name : h2dts_gen_2065
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `int32_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2065', () => {
    try {
      const DECL = `void r5ts2065(int32_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2065 生成结果为空');
      const expectSnippet0 = 'export function r5ts2065(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2065 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2065 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2066
  * @tc.name : h2dts_gen_2066
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `int64_t` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2066', () => {
    try {
      const DECL = `void r5ts2066(int64_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2066 生成结果为空');
      const expectSnippet0 = 'export function r5ts2066(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2066 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2066 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2067
  * @tc.name : h2dts_gen_2067
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `unsigned` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2067', () => {
    try {
      const DECL = `void r5ts2067(unsigned v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2067 生成结果为空');
      const expectSnippet0 = 'export function r5ts2067(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2067 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2067 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2068
  * @tc.name : h2dts_gen_2068
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `bool` → `boolean` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2068', () => {
    try {
      const DECL = `void r5ts2068(bool v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2068 生成结果为空');
      const expectSnippet0 = 'export function r5ts2068(v: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2068 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2068 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2069
  * @tc.name : h2dts_gen_2069
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `char` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2069', () => {
    try {
      const DECL = `void r5ts2069(char v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2069 生成结果为空');
      const expectSnippet0 = 'export function r5ts2069(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2069 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2069 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2070
  * @tc.name : h2dts_gen_2070
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `wchar_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2070', () => {
    try {
      const DECL = `void r5ts2070(wchar_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2070 生成结果为空');
      const expectSnippet0 = 'export function r5ts2070(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2070 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2070 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2071
  * @tc.name : h2dts_gen_2071
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `char8_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2071', () => {
    try {
      const DECL = `void r5ts2071(char8_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2071 生成结果为空');
      const expectSnippet0 = 'export function r5ts2071(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2071 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2071 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2072
  * @tc.name : h2dts_gen_2072
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `char16_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2072', () => {
    try {
      const DECL = `void r5ts2072(char16_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2072 生成结果为空');
      const expectSnippet0 = 'export function r5ts2072(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2072 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2072 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2073
  * @tc.name : h2dts_gen_2073
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `char32_t` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2073', () => {
    try {
      const DECL = `void r5ts2073(char32_t v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2073 生成结果为空');
      const expectSnippet0 = 'export function r5ts2073(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2073 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2073 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2074
  * @tc.name : h2dts_gen_2074
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::string::iterator` → `IterableIterator<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2074', () => {
    try {
      const DECL = `void r5ts2074(std::string::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2074 生成结果为空');
      const expectSnippet0 = 'export function r5ts2074(v: IterableIterator<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2074 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2074 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2075
  * @tc.name : h2dts_gen_2075
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<int>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2075', () => {
    try {
      const DECL = `void r5ts2075(std::vector<int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2075 生成结果为空');
      const expectSnippet0 = 'export function r5ts2075(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2075 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2075 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2076
  * @tc.name : h2dts_gen_2076
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<size_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2076', () => {
    try {
      const DECL = `void r5ts2076(std::vector<size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2076 生成结果为空');
      const expectSnippet0 = 'export function r5ts2076(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2076 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2076 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2077
  * @tc.name : h2dts_gen_2077
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<double>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2077', () => {
    try {
      const DECL = `void r5ts2077(std::vector<double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2077 生成结果为空');
      const expectSnippet0 = 'export function r5ts2077(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2077 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2077 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2078
  * @tc.name : h2dts_gen_2078
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<float>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2078', () => {
    try {
      const DECL = `void r5ts2078(std::vector<float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2078 生成结果为空');
      const expectSnippet0 = 'export function r5ts2078(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2078 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2078 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2079
  * @tc.name : h2dts_gen_2079
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2079', () => {
    try {
      const DECL = `void r5ts2079(std::vector<long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2079 生成结果为空');
      const expectSnippet0 = 'export function r5ts2079(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2079 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2079 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2080
  * @tc.name : h2dts_gen_2080
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2080', () => {
    try {
      const DECL = `void r5ts2080(std::vector<short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2080 生成结果为空');
      const expectSnippet0 = 'export function r5ts2080(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2080 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2080 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2081
  * @tc.name : h2dts_gen_2081
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<uint8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2081', () => {
    try {
      const DECL = `void r5ts2081(std::vector<uint8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2081 生成结果为空');
      const expectSnippet0 = 'export function r5ts2081(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2081 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2081 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2082
  * @tc.name : h2dts_gen_2082
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<uint16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2082', () => {
    try {
      const DECL = `void r5ts2082(std::vector<uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2082 生成结果为空');
      const expectSnippet0 = 'export function r5ts2082(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2082 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2082 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2083
  * @tc.name : h2dts_gen_2083
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<uint32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2083', () => {
    try {
      const DECL = `void r5ts2083(std::vector<uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2083 生成结果为空');
      const expectSnippet0 = 'export function r5ts2083(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2083 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2083 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2084
  * @tc.name : h2dts_gen_2084
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<uint64_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2084', () => {
    try {
      const DECL = `void r5ts2084(std::vector<uint64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2084 生成结果为空');
      const expectSnippet0 = 'export function r5ts2084(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2084 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2084 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2085
  * @tc.name : h2dts_gen_2085
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<int8_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2085', () => {
    try {
      const DECL = `void r5ts2085(std::vector<int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2085 生成结果为空');
      const expectSnippet0 = 'export function r5ts2085(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2085 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2085 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2086
  * @tc.name : h2dts_gen_2086
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<int16_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2086', () => {
    try {
      const DECL = `void r5ts2086(std::vector<int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2086 生成结果为空');
      const expectSnippet0 = 'export function r5ts2086(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2086 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2086 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_2087
  * @tc.name : h2dts_gen_2087
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<int32_t>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_2087', () => {
    try {
      const DECL = `void r5ts2087(std::vector<int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_2087 生成结果为空');
      const expectSnippet0 = 'export function r5ts2087(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_2087 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_2087 执行异常: ${String(err)}`);
    }
  });
});
