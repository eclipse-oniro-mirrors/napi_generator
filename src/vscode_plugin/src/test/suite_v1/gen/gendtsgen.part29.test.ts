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

suite('Gendts_gen_Suite_Ext29', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext29');
  /**
  * @tc.number : h2dts_gen_0956
  * @tc.name : h2dts_gen_0956
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<char8_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0956', () => {
    try {
      const DECL = `void genType956(std::shared_ptr<char8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0956 生成结果为空');
      const expectSnippet0 = 'export function genType956(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0956 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0956 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0957
  * @tc.name : h2dts_gen_0957
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<char16_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0957', () => {
    try {
      const DECL = `void genType957(std::shared_ptr<char16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0957 生成结果为空');
      const expectSnippet0 = 'export function genType957(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0957 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0957 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0958
  * @tc.name : h2dts_gen_0958
  * @tc.desc : h2dts gen：扩充-smart 类型 `std::shared_ptr<char32_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0958', () => {
    try {
      const DECL = `void genType958(std::shared_ptr<char32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0958 生成结果为空');
      const expectSnippet0 = 'export function genType958(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0958 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0958 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0959
  * @tc.name : h2dts_gen_0959
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<int>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0959', () => {
    try {
      const DECL = `void genType959(std::weak_ptr<int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0959 生成结果为空');
      const expectSnippet0 = 'export function genType959(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0959 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0959 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0960
  * @tc.name : h2dts_gen_0960
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<size_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0960', () => {
    try {
      const DECL = `void genType960(std::weak_ptr<size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0960 生成结果为空');
      const expectSnippet0 = 'export function genType960(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0960 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0960 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0961
  * @tc.name : h2dts_gen_0961
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<double>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0961', () => {
    try {
      const DECL = `void genType961(std::weak_ptr<double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0961 生成结果为空');
      const expectSnippet0 = 'export function genType961(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0961 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0961 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0962
  * @tc.name : h2dts_gen_0962
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<float>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0962', () => {
    try {
      const DECL = `void genType962(std::weak_ptr<float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0962 生成结果为空');
      const expectSnippet0 = 'export function genType962(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0962 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0962 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0963
  * @tc.name : h2dts_gen_0963
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0963', () => {
    try {
      const DECL = `void genType963(std::weak_ptr<long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0963 生成结果为空');
      const expectSnippet0 = 'export function genType963(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0963 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0963 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0964
  * @tc.name : h2dts_gen_0964
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<short>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0964', () => {
    try {
      const DECL = `void genType964(std::weak_ptr<short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0964 生成结果为空');
      const expectSnippet0 = 'export function genType964(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0964 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0964 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0965
  * @tc.name : h2dts_gen_0965
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<uint8_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0965', () => {
    try {
      const DECL = `void genType965(std::weak_ptr<uint8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0965 生成结果为空');
      const expectSnippet0 = 'export function genType965(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0965 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0965 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0966
  * @tc.name : h2dts_gen_0966
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<uint16_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0966', () => {
    try {
      const DECL = `void genType966(std::weak_ptr<uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0966 生成结果为空');
      const expectSnippet0 = 'export function genType966(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0966 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0966 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0967
  * @tc.name : h2dts_gen_0967
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<uint32_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0967', () => {
    try {
      const DECL = `void genType967(std::weak_ptr<uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0967 生成结果为空');
      const expectSnippet0 = 'export function genType967(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0967 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0967 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0968
  * @tc.name : h2dts_gen_0968
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<uint64_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0968', () => {
    try {
      const DECL = `void genType968(std::weak_ptr<uint64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0968 生成结果为空');
      const expectSnippet0 = 'export function genType968(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0968 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0968 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0969
  * @tc.name : h2dts_gen_0969
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<int8_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0969', () => {
    try {
      const DECL = `void genType969(std::weak_ptr<int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0969 生成结果为空');
      const expectSnippet0 = 'export function genType969(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0969 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0969 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0970
  * @tc.name : h2dts_gen_0970
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<int16_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0970', () => {
    try {
      const DECL = `void genType970(std::weak_ptr<int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0970 生成结果为空');
      const expectSnippet0 = 'export function genType970(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0970 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0970 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0971
  * @tc.name : h2dts_gen_0971
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<int32_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0971', () => {
    try {
      const DECL = `void genType971(std::weak_ptr<int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0971 生成结果为空');
      const expectSnippet0 = 'export function genType971(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0971 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0971 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0972
  * @tc.name : h2dts_gen_0972
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<int64_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0972', () => {
    try {
      const DECL = `void genType972(std::weak_ptr<int64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0972 生成结果为空');
      const expectSnippet0 = 'export function genType972(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0972 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0972 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0973
  * @tc.name : h2dts_gen_0973
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<unsigned>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0973', () => {
    try {
      const DECL = `void genType973(std::weak_ptr<unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0973 生成结果为空');
      const expectSnippet0 = 'export function genType973(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0973 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0973 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0974
  * @tc.name : h2dts_gen_0974
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<bool>` → `boolean` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0974', () => {
    try {
      const DECL = `void genType974(std::weak_ptr<bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0974 生成结果为空');
      const expectSnippet0 = 'export function genType974(v: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0974 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0974 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0975
  * @tc.name : h2dts_gen_0975
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<char>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0975', () => {
    try {
      const DECL = `void genType975(std::weak_ptr<char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0975 生成结果为空');
      const expectSnippet0 = 'export function genType975(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0975 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0975 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0976
  * @tc.name : h2dts_gen_0976
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<wchar_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0976', () => {
    try {
      const DECL = `void genType976(std::weak_ptr<wchar_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0976 生成结果为空');
      const expectSnippet0 = 'export function genType976(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0976 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0976 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0977
  * @tc.name : h2dts_gen_0977
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<char8_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0977', () => {
    try {
      const DECL = `void genType977(std::weak_ptr<char8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0977 生成结果为空');
      const expectSnippet0 = 'export function genType977(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0977 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0977 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0978
  * @tc.name : h2dts_gen_0978
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<char16_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0978', () => {
    try {
      const DECL = `void genType978(std::weak_ptr<char16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0978 生成结果为空');
      const expectSnippet0 = 'export function genType978(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0978 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0978 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0979
  * @tc.name : h2dts_gen_0979
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::weak_ptr<char32_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0979', () => {
    try {
      const DECL = `void genType979(std::weak_ptr<char32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0979 生成结果为空');
      const expectSnippet0 = 'export function genType979(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0979 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0979 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0980
  * @tc.name : h2dts_gen_0980
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::string` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0980', () => {
    try {
      const DECL = `void genType980(std::string v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0980 生成结果为空');
      const expectSnippet0 = 'export function genType980(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0980 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0980 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0981
  * @tc.name : h2dts_gen_0981
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<std::string>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0981', () => {
    try {
      const DECL = `void genType981(std::vector<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0981 生成结果为空');
      const expectSnippet0 = 'export function genType981(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0981 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0981 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0982
  * @tc.name : h2dts_gen_0982
  * @tc.desc : h2dts gen：扩充-basic 类型 `char *` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0982', () => {
    try {
      const DECL = `void genType982(char * v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0982 生成结果为空');
      const expectSnippet0 = 'export function genType982(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0982 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0982 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0983
  * @tc.name : h2dts_gen_0983
  * @tc.desc : h2dts gen：扩充-basic 类型 `long long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0983', () => {
    try {
      const DECL = `void genType983(long long v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0983 生成结果为空');
      const expectSnippet0 = 'export function genType983(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0983 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0983 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0984
  * @tc.name : h2dts_gen_0984
  * @tc.desc : h2dts gen：扩充-basic 类型 `unsigned short` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0984', () => {
    try {
      const DECL = `void genType984(unsigned short v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0984 生成结果为空');
      const expectSnippet0 = 'export function genType984(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0984 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0984 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0985
  * @tc.name : h2dts_gen_0985
  * @tc.desc : h2dts gen：扩充-basic 类型 `unsigned long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0985', () => {
    try {
      const DECL = `void genType985(unsigned long v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0985 生成结果为空');
      const expectSnippet0 = 'export function genType985(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0985 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0985 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0986
  * @tc.name : h2dts_gen_0986
  * @tc.desc : h2dts gen：扩充-basic 类型 `unsigned long long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0986', () => {
    try {
      const DECL = `void genType986(unsigned long long v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0986 生成结果为空');
      const expectSnippet0 = 'export function genType986(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0986 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0986 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0987
  * @tc.name : h2dts_gen_0987
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0987', () => {
    try {
      const DECL = `void genType987(std::vector<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0987 生成结果为空');
      const expectSnippet0 = 'export function genType987(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0987 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0987 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0988
  * @tc.name : h2dts_gen_0988
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<unsigned short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0988', () => {
    try {
      const DECL = `void genType988(std::vector<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0988 生成结果为空');
      const expectSnippet0 = 'export function genType988(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0988 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0988 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0989
  * @tc.name : h2dts_gen_0989
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<unsigned long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0989', () => {
    try {
      const DECL = `void genType989(std::vector<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0989 生成结果为空');
      const expectSnippet0 = 'export function genType989(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0989 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0989 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_0990
  * @tc.name : h2dts_gen_0990
  * @tc.desc : h2dts gen：扩充-Array 类型 `std::vector<unsigned long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0990', () => {
    try {
      const DECL = `void genType990(std::vector<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0990 生成结果为空');
      const expectSnippet0 = 'export function genType990(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0990 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0990 执行异常: ${String(err)}`);
    }
  });
});
