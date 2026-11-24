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

suite('Gendts_gen_Suite_Ext92', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext92');
  /**
  * @tc.number : h2dts_gen_3068
  * @tc.name : h2dts_gen_3068
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<unsigned short>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3068', () => {
    try {
      const DECL = `void r5ts3068(std::unordered_set<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3068 生成结果为空');
      const expectSnippet0 = 'export function r5ts3068(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3068 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3069
  * @tc.name : h2dts_gen_3069
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<unsigned long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3069', () => {
    try {
      const DECL = `void r5ts3069(std::unordered_set<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3069 生成结果为空');
      const expectSnippet0 = 'export function r5ts3069(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3069 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3070
  * @tc.name : h2dts_gen_3070
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<unsigned long long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3070', () => {
    try {
      const DECL = `void r5ts3070(std::unordered_set<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3070 生成结果为空');
      const expectSnippet0 = 'export function r5ts3070(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3070 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3071
  * @tc.name : h2dts_gen_3071
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<int *>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3071', () => {
    try {
      const DECL = `void r5ts3071(std::unordered_set<int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3071 生成结果为空');
      const expectSnippet0 = 'export function r5ts3071(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3071 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3072
  * @tc.name : h2dts_gen_3072
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<std::string>::iterator` → `IterableIterator<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3072', () => {
    try {
      const DECL = `void r5ts3072(std::unordered_set<std::string>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3072 生成结果为空');
      const expectSnippet0 = 'export function r5ts3072(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3072 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3073
  * @tc.name : h2dts_gen_3073
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<char *>::iterator` → `IterableIterator<Set<s...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3073', () => {
    try {
      const DECL = `void r5ts3073(std::unordered_set<char *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3073 生成结果为空');
      const expectSnippet0 = 'export function r5ts3073(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3073 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3074
  * @tc.name : h2dts_gen_3074
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<long long>::iterator` → `IterableIterator<Se...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3074', () => {
    try {
      const DECL = `void r5ts3074(std::unordered_set<long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3074 生成结果为空');
      const expectSnippet0 = 'export function r5ts3074(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3074 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3075
  * @tc.name : h2dts_gen_3075
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<unsigned short>::iterator` → `IterableIterat...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3075', () => {
    try {
      const DECL = `void r5ts3075(std::unordered_set<unsigned short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3075 生成结果为空');
      const expectSnippet0 = 'export function r5ts3075(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3075 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3076
  * @tc.name : h2dts_gen_3076
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<unsigned long>::iterator` → `IterableIterato...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3076', () => {
    try {
      const DECL = `void r5ts3076(std::unordered_set<unsigned long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3076 生成结果为空');
      const expectSnippet0 = 'export function r5ts3076(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3076 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3077
  * @tc.name : h2dts_gen_3077
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<unsigned long long>::iterator` → `IterableIt...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3077', () => {
    try {
      const DECL = `void r5ts3077(std::unordered_set<unsigned long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3077 生成结果为空');
      const expectSnippet0 = 'export function r5ts3077(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3077 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3078
  * @tc.name : h2dts_gen_3078
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<int *>::iterator` → `IterableIterator<Set<nu...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3078', () => {
    try {
      const DECL = `void r5ts3078(std::unordered_set<int *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3078 生成结果为空');
      const expectSnippet0 = 'export function r5ts3078(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3078 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3079
  * @tc.name : h2dts_gen_3079
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<std::string>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3079', () => {
    try {
      const DECL = `void r5ts3079(std::multiset<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3079 生成结果为空');
      const expectSnippet0 = 'export function r5ts3079(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3079 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3080
  * @tc.name : h2dts_gen_3080
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<char *>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3080', () => {
    try {
      const DECL = `void r5ts3080(std::multiset<char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3080 生成结果为空');
      const expectSnippet0 = 'export function r5ts3080(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3080 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3081
  * @tc.name : h2dts_gen_3081
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<long long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3081', () => {
    try {
      const DECL = `void r5ts3081(std::multiset<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3081 生成结果为空');
      const expectSnippet0 = 'export function r5ts3081(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3081 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3082
  * @tc.name : h2dts_gen_3082
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<unsigned short>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3082', () => {
    try {
      const DECL = `void r5ts3082(std::multiset<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3082 生成结果为空');
      const expectSnippet0 = 'export function r5ts3082(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3082 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3083
  * @tc.name : h2dts_gen_3083
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<unsigned long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3083', () => {
    try {
      const DECL = `void r5ts3083(std::multiset<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3083 生成结果为空');
      const expectSnippet0 = 'export function r5ts3083(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3083 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3084
  * @tc.name : h2dts_gen_3084
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<unsigned long long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3084', () => {
    try {
      const DECL = `void r5ts3084(std::multiset<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3084 生成结果为空');
      const expectSnippet0 = 'export function r5ts3084(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3084 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3085
  * @tc.name : h2dts_gen_3085
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multiset<int *>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3085', () => {
    try {
      const DECL = `void r5ts3085(std::multiset<int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3085 生成结果为空');
      const expectSnippet0 = 'export function r5ts3085(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3085 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3086
  * @tc.name : h2dts_gen_3086
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multiset<std::string>::iterator` → `IterableIterator<Set<s...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3086', () => {
    try {
      const DECL = `void r5ts3086(std::multiset<std::string>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3086 生成结果为空');
      const expectSnippet0 = 'export function r5ts3086(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3086 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3087
  * @tc.name : h2dts_gen_3087
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multiset<char *>::iterator` → `IterableIterator<Set<string...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3087', () => {
    try {
      const DECL = `void r5ts3087(std::multiset<char *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3087 生成结果为空');
      const expectSnippet0 = 'export function r5ts3087(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3087 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3088
  * @tc.name : h2dts_gen_3088
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multiset<long long>::iterator` → `IterableIterator<Set<num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3088', () => {
    try {
      const DECL = `void r5ts3088(std::multiset<long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3088 生成结果为空');
      const expectSnippet0 = 'export function r5ts3088(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3088 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3089
  * @tc.name : h2dts_gen_3089
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multiset<unsigned short>::iterator` → `IterableIterator<Se...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3089', () => {
    try {
      const DECL = `void r5ts3089(std::multiset<unsigned short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3089 生成结果为空');
      const expectSnippet0 = 'export function r5ts3089(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3089 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3090
  * @tc.name : h2dts_gen_3090
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multiset<unsigned long>::iterator` → `IterableIterator<Set...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3090', () => {
    try {
      const DECL = `void r5ts3090(std::multiset<unsigned long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3090 生成结果为空');
      const expectSnippet0 = 'export function r5ts3090(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3090 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3091
  * @tc.name : h2dts_gen_3091
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multiset<unsigned long long>::iterator` → `IterableIterato...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3091', () => {
    try {
      const DECL = `void r5ts3091(std::multiset<unsigned long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3091 生成结果为空');
      const expectSnippet0 = 'export function r5ts3091(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3091 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3092
  * @tc.name : h2dts_gen_3092
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multiset<int *>::iterator` → `IterableIterator<Set<number>...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3092', () => {
    try {
      const DECL = `void r5ts3092(std::multiset<int *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3092 生成结果为空');
      const expectSnippet0 = 'export function r5ts3092(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3092 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3093
  * @tc.name : h2dts_gen_3093
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<std::string>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3093', () => {
    try {
      const DECL = `void r5ts3093(std::unordered_multiset<std::string> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3093 生成结果为空');
      const expectSnippet0 = 'export function r5ts3093(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3093 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3094
  * @tc.name : h2dts_gen_3094
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<char *>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3094', () => {
    try {
      const DECL = `void r5ts3094(std::unordered_multiset<char *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3094 生成结果为空');
      const expectSnippet0 = 'export function r5ts3094(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3094 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3095
  * @tc.name : h2dts_gen_3095
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<long long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3095', () => {
    try {
      const DECL = `void r5ts3095(std::unordered_multiset<long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3095 生成结果为空');
      const expectSnippet0 = 'export function r5ts3095(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3095 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3096
  * @tc.name : h2dts_gen_3096
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<unsigned short>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3096', () => {
    try {
      const DECL = `void r5ts3096(std::unordered_multiset<unsigned short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3096 生成结果为空');
      const expectSnippet0 = 'export function r5ts3096(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3096 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3097
  * @tc.name : h2dts_gen_3097
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<unsigned long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3097', () => {
    try {
      const DECL = `void r5ts3097(std::unordered_multiset<unsigned long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3097 生成结果为空');
      const expectSnippet0 = 'export function r5ts3097(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3097 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3098
  * @tc.name : h2dts_gen_3098
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<unsigned long long>` → `Set<number>` 的生成结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3098', () => {
    try {
      const DECL = `void r5ts3098(std::unordered_multiset<unsigned long long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3098 生成结果为空');
      const expectSnippet0 = 'export function r5ts3098(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3098 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3099
  * @tc.name : h2dts_gen_3099
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<int *>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3099', () => {
    try {
      const DECL = `void r5ts3099(std::unordered_multiset<int *> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3099 生成结果为空');
      const expectSnippet0 = 'export function r5ts3099(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3099 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3100
  * @tc.name : h2dts_gen_3100
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<std::string>::iterator` → `IterableIter...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3100', () => {
    try {
      const DECL = `void r5ts3100(std::unordered_multiset<std::string>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3100 生成结果为空');
      const expectSnippet0 = 'export function r5ts3100(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3100 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3101
  * @tc.name : h2dts_gen_3101
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<char *>::iterator` → `IterableIterator<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3101', () => {
    try {
      const DECL = `void r5ts3101(std::unordered_multiset<char *>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3101 生成结果为空');
      const expectSnippet0 = 'export function r5ts3101(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3101 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_3102
  * @tc.name : h2dts_gen_3102
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<long long>::iterator` → `IterableIterat...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_3102', () => {
    try {
      const DECL = `void r5ts3102(std::unordered_multiset<long long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_3102 生成结果为空');
      const expectSnippet0 = 'export function r5ts3102(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_3102 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_3102 执行异常: ${String(err)}`);
    }
  });
});
