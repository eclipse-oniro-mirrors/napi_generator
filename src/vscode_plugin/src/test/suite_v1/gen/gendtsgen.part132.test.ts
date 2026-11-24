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

suite('Gendts_gen_Suite_Ext132', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext132');
  /**
  * @tc.number : h2dts_gen_4437
  * @tc.name : h2dts_gen_4437
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<int16_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4437', () => {
    try {
      const DECL = `void r5ts4437(std::unordered_multiset<int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4437 生成结果为空');
      const expectSnippet0 = 'export function r5ts4437(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4437 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4437 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4438
  * @tc.name : h2dts_gen_4438
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<int32_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4438', () => {
    try {
      const DECL = `void r5ts4438(std::unordered_multiset<int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4438 生成结果为空');
      const expectSnippet0 = 'export function r5ts4438(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4438 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4438 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4439
  * @tc.name : h2dts_gen_4439
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<int64_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4439', () => {
    try {
      const DECL = `void r5ts4439(std::unordered_multiset<int64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4439 生成结果为空');
      const expectSnippet0 = 'export function r5ts4439(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4439 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4439 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4440
  * @tc.name : h2dts_gen_4440
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<unsigned>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4440', () => {
    try {
      const DECL = `void r5ts4440(std::unordered_multiset<unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4440 生成结果为空');
      const expectSnippet0 = 'export function r5ts4440(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4440 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4440 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4441
  * @tc.name : h2dts_gen_4441
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<bool>` → `Set<boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4441', () => {
    try {
      const DECL = `void r5ts4441(std::unordered_multiset<bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4441 生成结果为空');
      const expectSnippet0 = 'export function r5ts4441(v: Set<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4441 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4441 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4442
  * @tc.name : h2dts_gen_4442
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<char>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4442', () => {
    try {
      const DECL = `void r5ts4442(std::unordered_multiset<char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4442 生成结果为空');
      const expectSnippet0 = 'export function r5ts4442(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4442 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4442 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4443
  * @tc.name : h2dts_gen_4443
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<wchar_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4443', () => {
    try {
      const DECL = `void r5ts4443(std::unordered_multiset<wchar_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4443 生成结果为空');
      const expectSnippet0 = 'export function r5ts4443(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4443 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4443 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4444
  * @tc.name : h2dts_gen_4444
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<char8_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4444', () => {
    try {
      const DECL = `void r5ts4444(std::unordered_multiset<char8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4444 生成结果为空');
      const expectSnippet0 = 'export function r5ts4444(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4444 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4444 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4445
  * @tc.name : h2dts_gen_4445
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<char16_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4445', () => {
    try {
      const DECL = `void r5ts4445(std::unordered_multiset<char16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4445 生成结果为空');
      const expectSnippet0 = 'export function r5ts4445(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4445 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4445 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4446
  * @tc.name : h2dts_gen_4446
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::unordered_multiset<char32_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4446', () => {
    try {
      const DECL = `void r5ts4446(std::unordered_multiset<char32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4446 生成结果为空');
      const expectSnippet0 = 'export function r5ts4446(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4446 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4446 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4447
  * @tc.name : h2dts_gen_4447
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<int>::iterator` → `IterableIterator<Set...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4447', () => {
    try {
      const DECL = `void r5ts4447(std::unordered_multiset<int>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4447 生成结果为空');
      const expectSnippet0 = 'export function r5ts4447(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4447 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4447 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4448
  * @tc.name : h2dts_gen_4448
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<size_t>::iterator` → `IterableIterator<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4448', () => {
    try {
      const DECL = `void r5ts4448(std::unordered_multiset<size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4448 生成结果为空');
      const expectSnippet0 = 'export function r5ts4448(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4448 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4448 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4449
  * @tc.name : h2dts_gen_4449
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<double>::iterator` → `IterableIterator<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4449', () => {
    try {
      const DECL = `void r5ts4449(std::unordered_multiset<double>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4449 生成结果为空');
      const expectSnippet0 = 'export function r5ts4449(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4449 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4449 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4450
  * @tc.name : h2dts_gen_4450
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<float>::iterator` → `IterableIterator<S...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4450', () => {
    try {
      const DECL = `void r5ts4450(std::unordered_multiset<float>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4450 生成结果为空');
      const expectSnippet0 = 'export function r5ts4450(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4450 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4450 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4451
  * @tc.name : h2dts_gen_4451
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<long>::iterator` → `IterableIterator<Se...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4451', () => {
    try {
      const DECL = `void r5ts4451(std::unordered_multiset<long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4451 生成结果为空');
      const expectSnippet0 = 'export function r5ts4451(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4451 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4451 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4452
  * @tc.name : h2dts_gen_4452
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<short>::iterator` → `IterableIterator<S...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4452', () => {
    try {
      const DECL = `void r5ts4452(std::unordered_multiset<short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4452 生成结果为空');
      const expectSnippet0 = 'export function r5ts4452(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4452 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4452 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4453
  * @tc.name : h2dts_gen_4453
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<uint8_t>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4453', () => {
    try {
      const DECL = `void r5ts4453(std::unordered_multiset<uint8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4453 生成结果为空');
      const expectSnippet0 = 'export function r5ts4453(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4453 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4453 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4454
  * @tc.name : h2dts_gen_4454
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<uint16_t>::iterator` → `IterableIterato...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4454', () => {
    try {
      const DECL = `void r5ts4454(std::unordered_multiset<uint16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4454 生成结果为空');
      const expectSnippet0 = 'export function r5ts4454(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4454 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4454 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4455
  * @tc.name : h2dts_gen_4455
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<uint32_t>::iterator` → `IterableIterato...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4455', () => {
    try {
      const DECL = `void r5ts4455(std::unordered_multiset<uint32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4455 生成结果为空');
      const expectSnippet0 = 'export function r5ts4455(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4455 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4455 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4456
  * @tc.name : h2dts_gen_4456
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<uint64_t>::iterator` → `IterableIterato...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4456', () => {
    try {
      const DECL = `void r5ts4456(std::unordered_multiset<uint64_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4456 生成结果为空');
      const expectSnippet0 = 'export function r5ts4456(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4456 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4456 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4457
  * @tc.name : h2dts_gen_4457
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<int8_t>::iterator` → `IterableIterator<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4457', () => {
    try {
      const DECL = `void r5ts4457(std::unordered_multiset<int8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4457 生成结果为空');
      const expectSnippet0 = 'export function r5ts4457(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4457 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4457 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4458
  * @tc.name : h2dts_gen_4458
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<int16_t>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4458', () => {
    try {
      const DECL = `void r5ts4458(std::unordered_multiset<int16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4458 生成结果为空');
      const expectSnippet0 = 'export function r5ts4458(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4458 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4458 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4459
  * @tc.name : h2dts_gen_4459
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<int32_t>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4459', () => {
    try {
      const DECL = `void r5ts4459(std::unordered_multiset<int32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4459 生成结果为空');
      const expectSnippet0 = 'export function r5ts4459(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4459 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4459 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4460
  * @tc.name : h2dts_gen_4460
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<int64_t>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4460', () => {
    try {
      const DECL = `void r5ts4460(std::unordered_multiset<int64_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4460 生成结果为空');
      const expectSnippet0 = 'export function r5ts4460(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4460 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4460 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4461
  * @tc.name : h2dts_gen_4461
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<unsigned>::iterator` → `IterableIterato...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4461', () => {
    try {
      const DECL = `void r5ts4461(std::unordered_multiset<unsigned>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4461 生成结果为空');
      const expectSnippet0 = 'export function r5ts4461(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4461 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4461 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4462
  * @tc.name : h2dts_gen_4462
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<bool>::iterator` → `IterableIterator<Se...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4462', () => {
    try {
      const DECL = `void r5ts4462(std::unordered_multiset<bool>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4462 生成结果为空');
      const expectSnippet0 = 'export function r5ts4462(v: IterableIterator<Set<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4462 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4462 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4463
  * @tc.name : h2dts_gen_4463
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<char>::iterator` → `IterableIterator<Se...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4463', () => {
    try {
      const DECL = `void r5ts4463(std::unordered_multiset<char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4463 生成结果为空');
      const expectSnippet0 = 'export function r5ts4463(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4463 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4463 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4464
  * @tc.name : h2dts_gen_4464
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<wchar_t>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4464', () => {
    try {
      const DECL = `void r5ts4464(std::unordered_multiset<wchar_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4464 生成结果为空');
      const expectSnippet0 = 'export function r5ts4464(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4464 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4464 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4465
  * @tc.name : h2dts_gen_4465
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<char8_t>::iterator` → `IterableIterator...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4465', () => {
    try {
      const DECL = `void r5ts4465(std::unordered_multiset<char8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4465 生成结果为空');
      const expectSnippet0 = 'export function r5ts4465(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4465 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4465 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4466
  * @tc.name : h2dts_gen_4466
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<char16_t>::iterator` → `IterableIterato...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4466', () => {
    try {
      const DECL = `void r5ts4466(std::unordered_multiset<char16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4466 生成结果为空');
      const expectSnippet0 = 'export function r5ts4466(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4466 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4466 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4467
  * @tc.name : h2dts_gen_4467
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_multiset<char32_t>::iterator` → `IterableIterato...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4467', () => {
    try {
      const DECL = `void r5ts4467(std::unordered_multiset<char32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4467 生成结果为空');
      const expectSnippet0 = 'export function r5ts4467(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4467 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4467 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4468
  * @tc.name : h2dts_gen_4468
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-tuple `std::tuple<int, char, bool, size_t>` → `[number, string, boolean, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4468', () => {
    try {
      const DECL = `void r5ts4468(std::tuple<int, char, bool, size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4468 生成结果为空');
      const expectSnippet0 = 'export function r5ts4468(v: [number, string, boolean, number]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4468 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4468 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4469
  * @tc.name : h2dts_gen_4469
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-tuple `std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4469', () => {
    try {
      const DECL = `void r5ts4469(std::tuple<double, wchar_t, uint32_t, float, long, short, char32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4469 生成结果为空');
      const expectSnippet0 = 'export function r5ts4469(v: [number, string, number, number, number, number, string]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4469 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4469 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4470
  * @tc.name : h2dts_gen_4470
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-tuple `std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned>` → `[st...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4470', () => {
    try {
      const DECL = `void r5ts4470(std::tuple<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4470 生成结果为空');
      const expectSnippet0 = 'export function r5ts4470(v: [string, number, string, number, number]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4470 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4470 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4471
  * @tc.name : h2dts_gen_4471
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-tuple `std::pair<int, char, bool, size_t>` → `[number, string, boolean, n...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4471', () => {
    try {
      const DECL = `void r5ts4471(std::pair<int, char, bool, size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4471 生成结果为空');
      const expectSnippet0 = 'export function r5ts4471(v: [number, string, boolean, number]): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4471 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4471 执行异常: ${String(err)}`);
    }
  });
});
