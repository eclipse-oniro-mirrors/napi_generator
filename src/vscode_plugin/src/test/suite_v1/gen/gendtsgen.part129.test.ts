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

suite('Gendts_gen_Suite_Ext129', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext129');
  /**
  * @tc.number : h2dts_gen_4332
  * @tc.name : h2dts_gen_4332
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<int16_t>::iterator` → `IterableIterator<Set<number>>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4332', () => {
    try {
      const DECL = `void r5ts4332(std::set<int16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4332 生成结果为空');
      const expectSnippet0 = 'export function r5ts4332(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4332 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4332 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4333
  * @tc.name : h2dts_gen_4333
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<int32_t>::iterator` → `IterableIterator<Set<number>>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4333', () => {
    try {
      const DECL = `void r5ts4333(std::set<int32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4333 生成结果为空');
      const expectSnippet0 = 'export function r5ts4333(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4333 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4333 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4334
  * @tc.name : h2dts_gen_4334
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<int64_t>::iterator` → `IterableIterator<Set<number>>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4334', () => {
    try {
      const DECL = `void r5ts4334(std::set<int64_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4334 生成结果为空');
      const expectSnippet0 = 'export function r5ts4334(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4334 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4334 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4335
  * @tc.name : h2dts_gen_4335
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<unsigned>::iterator` → `IterableIterator<Set<number>>`...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4335', () => {
    try {
      const DECL = `void r5ts4335(std::set<unsigned>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4335 生成结果为空');
      const expectSnippet0 = 'export function r5ts4335(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4335 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4335 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4336
  * @tc.name : h2dts_gen_4336
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<bool>::iterator` → `IterableIterator<Set<boolean>>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4336', () => {
    try {
      const DECL = `void r5ts4336(std::set<bool>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4336 生成结果为空');
      const expectSnippet0 = 'export function r5ts4336(v: IterableIterator<Set<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4336 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4336 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4337
  * @tc.name : h2dts_gen_4337
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<char>::iterator` → `IterableIterator<Set<string>>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4337', () => {
    try {
      const DECL = `void r5ts4337(std::set<char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4337 生成结果为空');
      const expectSnippet0 = 'export function r5ts4337(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4337 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4337 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4338
  * @tc.name : h2dts_gen_4338
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<wchar_t>::iterator` → `IterableIterator<Set<string>>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4338', () => {
    try {
      const DECL = `void r5ts4338(std::set<wchar_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4338 生成结果为空');
      const expectSnippet0 = 'export function r5ts4338(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4338 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4338 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4339
  * @tc.name : h2dts_gen_4339
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<char8_t>::iterator` → `IterableIterator<Set<string>>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4339', () => {
    try {
      const DECL = `void r5ts4339(std::set<char8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4339 生成结果为空');
      const expectSnippet0 = 'export function r5ts4339(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4339 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4339 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4340
  * @tc.name : h2dts_gen_4340
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<char16_t>::iterator` → `IterableIterator<Set<string>>`...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4340', () => {
    try {
      const DECL = `void r5ts4340(std::set<char16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4340 生成结果为空');
      const expectSnippet0 = 'export function r5ts4340(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4340 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4340 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4341
  * @tc.name : h2dts_gen_4341
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::set<char32_t>::iterator` → `IterableIterator<Set<string>>`...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4341', () => {
    try {
      const DECL = `void r5ts4341(std::set<char32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4341 生成结果为空');
      const expectSnippet0 = 'export function r5ts4341(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4341 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4341 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4342
  * @tc.name : h2dts_gen_4342
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<int>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4342', () => {
    try {
      const DECL = `void r5ts4342(std::unordered_set<int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4342 生成结果为空');
      const expectSnippet0 = 'export function r5ts4342(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4342 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4342 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4343
  * @tc.name : h2dts_gen_4343
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<size_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4343', () => {
    try {
      const DECL = `void r5ts4343(std::unordered_set<size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4343 生成结果为空');
      const expectSnippet0 = 'export function r5ts4343(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4343 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4343 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4344
  * @tc.name : h2dts_gen_4344
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<double>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4344', () => {
    try {
      const DECL = `void r5ts4344(std::unordered_set<double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4344 生成结果为空');
      const expectSnippet0 = 'export function r5ts4344(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4344 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4344 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4345
  * @tc.name : h2dts_gen_4345
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<float>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4345', () => {
    try {
      const DECL = `void r5ts4345(std::unordered_set<float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4345 生成结果为空');
      const expectSnippet0 = 'export function r5ts4345(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4345 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4345 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4346
  * @tc.name : h2dts_gen_4346
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4346', () => {
    try {
      const DECL = `void r5ts4346(std::unordered_set<long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4346 生成结果为空');
      const expectSnippet0 = 'export function r5ts4346(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4346 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4346 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4347
  * @tc.name : h2dts_gen_4347
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<short>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4347', () => {
    try {
      const DECL = `void r5ts4347(std::unordered_set<short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4347 生成结果为空');
      const expectSnippet0 = 'export function r5ts4347(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4347 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4347 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4348
  * @tc.name : h2dts_gen_4348
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<uint8_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4348', () => {
    try {
      const DECL = `void r5ts4348(std::unordered_set<uint8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4348 生成结果为空');
      const expectSnippet0 = 'export function r5ts4348(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4348 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4348 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4349
  * @tc.name : h2dts_gen_4349
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<uint16_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4349', () => {
    try {
      const DECL = `void r5ts4349(std::unordered_set<uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4349 生成结果为空');
      const expectSnippet0 = 'export function r5ts4349(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4349 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4349 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4350
  * @tc.name : h2dts_gen_4350
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<uint32_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4350', () => {
    try {
      const DECL = `void r5ts4350(std::unordered_set<uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4350 生成结果为空');
      const expectSnippet0 = 'export function r5ts4350(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4350 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4350 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4351
  * @tc.name : h2dts_gen_4351
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<uint64_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4351', () => {
    try {
      const DECL = `void r5ts4351(std::unordered_set<uint64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4351 生成结果为空');
      const expectSnippet0 = 'export function r5ts4351(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4351 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4351 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4352
  * @tc.name : h2dts_gen_4352
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<int8_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4352', () => {
    try {
      const DECL = `void r5ts4352(std::unordered_set<int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4352 生成结果为空');
      const expectSnippet0 = 'export function r5ts4352(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4352 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4352 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4353
  * @tc.name : h2dts_gen_4353
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<int16_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4353', () => {
    try {
      const DECL = `void r5ts4353(std::unordered_set<int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4353 生成结果为空');
      const expectSnippet0 = 'export function r5ts4353(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4353 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4353 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4354
  * @tc.name : h2dts_gen_4354
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<int32_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4354', () => {
    try {
      const DECL = `void r5ts4354(std::unordered_set<int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4354 生成结果为空');
      const expectSnippet0 = 'export function r5ts4354(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4354 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4354 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4355
  * @tc.name : h2dts_gen_4355
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<int64_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4355', () => {
    try {
      const DECL = `void r5ts4355(std::unordered_set<int64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4355 生成结果为空');
      const expectSnippet0 = 'export function r5ts4355(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4355 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4356
  * @tc.name : h2dts_gen_4356
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<unsigned>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4356', () => {
    try {
      const DECL = `void r5ts4356(std::unordered_set<unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4356 生成结果为空');
      const expectSnippet0 = 'export function r5ts4356(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4356 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4356 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4357
  * @tc.name : h2dts_gen_4357
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<bool>` → `Set<boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4357', () => {
    try {
      const DECL = `void r5ts4357(std::unordered_set<bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4357 生成结果为空');
      const expectSnippet0 = 'export function r5ts4357(v: Set<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4357 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4357 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4358
  * @tc.name : h2dts_gen_4358
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<char>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4358', () => {
    try {
      const DECL = `void r5ts4358(std::unordered_set<char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4358 生成结果为空');
      const expectSnippet0 = 'export function r5ts4358(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4358 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4358 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4359
  * @tc.name : h2dts_gen_4359
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<wchar_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4359', () => {
    try {
      const DECL = `void r5ts4359(std::unordered_set<wchar_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4359 生成结果为空');
      const expectSnippet0 = 'export function r5ts4359(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4359 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4360
  * @tc.name : h2dts_gen_4360
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<char8_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4360', () => {
    try {
      const DECL = `void r5ts4360(std::unordered_set<char8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4360 生成结果为空');
      const expectSnippet0 = 'export function r5ts4360(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4360 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4360 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4361
  * @tc.name : h2dts_gen_4361
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<char16_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4361', () => {
    try {
      const DECL = `void r5ts4361(std::unordered_set<char16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4361 生成结果为空');
      const expectSnippet0 = 'export function r5ts4361(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4361 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4361 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4362
  * @tc.name : h2dts_gen_4362
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Set `std::unordered_set<char32_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4362', () => {
    try {
      const DECL = `void r5ts4362(std::unordered_set<char32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4362 生成结果为空');
      const expectSnippet0 = 'export function r5ts4362(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4362 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4362 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4363
  * @tc.name : h2dts_gen_4363
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<int>::iterator` → `IterableIterator<Set<numb...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4363', () => {
    try {
      const DECL = `void r5ts4363(std::unordered_set<int>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4363 生成结果为空');
      const expectSnippet0 = 'export function r5ts4363(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4363 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4363 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4364
  * @tc.name : h2dts_gen_4364
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<size_t>::iterator` → `IterableIterator<Set<n...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4364', () => {
    try {
      const DECL = `void r5ts4364(std::unordered_set<size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4364 生成结果为空');
      const expectSnippet0 = 'export function r5ts4364(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4364 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4364 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4365
  * @tc.name : h2dts_gen_4365
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<double>::iterator` → `IterableIterator<Set<n...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4365', () => {
    try {
      const DECL = `void r5ts4365(std::unordered_set<double>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4365 生成结果为空');
      const expectSnippet0 = 'export function r5ts4365(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4365 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4365 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4366
  * @tc.name : h2dts_gen_4366
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_set<float>::iterator` → `IterableIterator<Set<nu...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4366', () => {
    try {
      const DECL = `void r5ts4366(std::unordered_set<float>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_4366 生成结果为空');
      const expectSnippet0 = 'export function r5ts4366(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4366 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4366 执行异常: ${String(err)}`);
    }
  });
});
