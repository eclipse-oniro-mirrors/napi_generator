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

suite('Gendts_gen_Suite_Ext23', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext23');
  /**
  * @tc.number : h2dts_gen_0746
  * @tc.name : h2dts_gen_0746
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::set<int16_t>::iterator` → `IterableIterator<Set<number>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0746', () => {
    try {
      const DECL = `void genType746(std::set<int16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0746 生成结果为空');
      const expectSnippet0 = 'export function genType746(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0746 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0746 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0747
  * @tc.name : h2dts_gen_0747
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::set<int32_t>::iterator` → `IterableIterator<Set<number>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0747', () => {
    try {
      const DECL = `void genType747(std::set<int32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0747 生成结果为空');
      const expectSnippet0 = 'export function genType747(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0747 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0747 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0748
  * @tc.name : h2dts_gen_0748
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::set<int64_t>::iterator` → `IterableIterator<Set<number>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0748', () => {
    try {
      const DECL = `void genType748(std::set<int64_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0748 生成结果为空');
      const expectSnippet0 = 'export function genType748(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0748 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0748 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0749
  * @tc.name : h2dts_gen_0749
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::set<unsigned>::iterator` → `IterableIterator<Set<number>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0749', () => {
    try {
      const DECL = `void genType749(std::set<unsigned>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0749 生成结果为空');
      const expectSnippet0 = 'export function genType749(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0749 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0749 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0750
  * @tc.name : h2dts_gen_0750
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::set<bool>::iterator` → `IterableIterator<Set<boolean>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0750', () => {
    try {
      const DECL = `void genType750(std::set<bool>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0750 生成结果为空');
      const expectSnippet0 = 'export function genType750(v: IterableIterator<Set<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0750 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0750 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0751
  * @tc.name : h2dts_gen_0751
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::set<char>::iterator` → `IterableIterator<Set<string>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0751', () => {
    try {
      const DECL = `void genType751(std::set<char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0751 生成结果为空');
      const expectSnippet0 = 'export function genType751(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0751 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0751 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0752
  * @tc.name : h2dts_gen_0752
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::set<wchar_t>::iterator` → `IterableIterator<Set<string>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0752', () => {
    try {
      const DECL = `void genType752(std::set<wchar_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0752 生成结果为空');
      const expectSnippet0 = 'export function genType752(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0752 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0752 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0753
  * @tc.name : h2dts_gen_0753
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::set<char8_t>::iterator` → `IterableIterator<Set<string>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0753', () => {
    try {
      const DECL = `void genType753(std::set<char8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0753 生成结果为空');
      const expectSnippet0 = 'export function genType753(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0753 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0753 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0754
  * @tc.name : h2dts_gen_0754
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::set<char16_t>::iterator` → `IterableIterator<Set<string>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0754', () => {
    try {
      const DECL = `void genType754(std::set<char16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0754 生成结果为空');
      const expectSnippet0 = 'export function genType754(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0754 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0754 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0755
  * @tc.name : h2dts_gen_0755
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::set<char32_t>::iterator` → `IterableIterator<Set<string>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0755', () => {
    try {
      const DECL = `void genType755(std::set<char32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0755 生成结果为空');
      const expectSnippet0 = 'export function genType755(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0755 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0755 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0756
  * @tc.name : h2dts_gen_0756
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<int>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0756', () => {
    try {
      const DECL = `void genType756(std::unordered_set<int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0756 生成结果为空');
      const expectSnippet0 = 'export function genType756(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0756 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0756 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0757
  * @tc.name : h2dts_gen_0757
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<size_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0757', () => {
    try {
      const DECL = `void genType757(std::unordered_set<size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0757 生成结果为空');
      const expectSnippet0 = 'export function genType757(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0757 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0757 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0758
  * @tc.name : h2dts_gen_0758
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<double>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0758', () => {
    try {
      const DECL = `void genType758(std::unordered_set<double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0758 生成结果为空');
      const expectSnippet0 = 'export function genType758(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0758 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0758 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0759
  * @tc.name : h2dts_gen_0759
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<float>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0759', () => {
    try {
      const DECL = `void genType759(std::unordered_set<float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0759 生成结果为空');
      const expectSnippet0 = 'export function genType759(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0759 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0759 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0760
  * @tc.name : h2dts_gen_0760
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0760', () => {
    try {
      const DECL = `void genType760(std::unordered_set<long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0760 生成结果为空');
      const expectSnippet0 = 'export function genType760(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0760 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0760 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0761
  * @tc.name : h2dts_gen_0761
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<short>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0761', () => {
    try {
      const DECL = `void genType761(std::unordered_set<short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0761 生成结果为空');
      const expectSnippet0 = 'export function genType761(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0761 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0761 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0762
  * @tc.name : h2dts_gen_0762
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<uint8_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0762', () => {
    try {
      const DECL = `void genType762(std::unordered_set<uint8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0762 生成结果为空');
      const expectSnippet0 = 'export function genType762(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0762 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0762 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0763
  * @tc.name : h2dts_gen_0763
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<uint16_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0763', () => {
    try {
      const DECL = `void genType763(std::unordered_set<uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0763 生成结果为空');
      const expectSnippet0 = 'export function genType763(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0763 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0763 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0764
  * @tc.name : h2dts_gen_0764
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<uint32_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0764', () => {
    try {
      const DECL = `void genType764(std::unordered_set<uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0764 生成结果为空');
      const expectSnippet0 = 'export function genType764(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0764 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0764 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0765
  * @tc.name : h2dts_gen_0765
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<uint64_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0765', () => {
    try {
      const DECL = `void genType765(std::unordered_set<uint64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0765 生成结果为空');
      const expectSnippet0 = 'export function genType765(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0765 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0765 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0766
  * @tc.name : h2dts_gen_0766
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<int8_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0766', () => {
    try {
      const DECL = `void genType766(std::unordered_set<int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0766 生成结果为空');
      const expectSnippet0 = 'export function genType766(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0766 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0766 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0767
  * @tc.name : h2dts_gen_0767
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<int16_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0767', () => {
    try {
      const DECL = `void genType767(std::unordered_set<int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0767 生成结果为空');
      const expectSnippet0 = 'export function genType767(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0767 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0767 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0768
  * @tc.name : h2dts_gen_0768
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<int32_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0768', () => {
    try {
      const DECL = `void genType768(std::unordered_set<int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0768 生成结果为空');
      const expectSnippet0 = 'export function genType768(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0768 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0768 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0769
  * @tc.name : h2dts_gen_0769
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<int64_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0769', () => {
    try {
      const DECL = `void genType769(std::unordered_set<int64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0769 生成结果为空');
      const expectSnippet0 = 'export function genType769(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0769 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0769 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0770
  * @tc.name : h2dts_gen_0770
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<unsigned>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0770', () => {
    try {
      const DECL = `void genType770(std::unordered_set<unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0770 生成结果为空');
      const expectSnippet0 = 'export function genType770(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0770 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0770 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0771
  * @tc.name : h2dts_gen_0771
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<bool>` → `Set<boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0771', () => {
    try {
      const DECL = `void genType771(std::unordered_set<bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0771 生成结果为空');
      const expectSnippet0 = 'export function genType771(v: Set<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0771 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0771 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0772
  * @tc.name : h2dts_gen_0772
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<char>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0772', () => {
    try {
      const DECL = `void genType772(std::unordered_set<char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0772 生成结果为空');
      const expectSnippet0 = 'export function genType772(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0772 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0772 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0773
  * @tc.name : h2dts_gen_0773
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<wchar_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0773', () => {
    try {
      const DECL = `void genType773(std::unordered_set<wchar_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0773 生成结果为空');
      const expectSnippet0 = 'export function genType773(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0773 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0773 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0774
  * @tc.name : h2dts_gen_0774
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<char8_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0774', () => {
    try {
      const DECL = `void genType774(std::unordered_set<char8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0774 生成结果为空');
      const expectSnippet0 = 'export function genType774(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0774 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0774 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0775
  * @tc.name : h2dts_gen_0775
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<char16_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0775', () => {
    try {
      const DECL = `void genType775(std::unordered_set<char16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0775 生成结果为空');
      const expectSnippet0 = 'export function genType775(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0775 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0775 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0776
  * @tc.name : h2dts_gen_0776
  * @tc.desc : h2dts gen：扩充-Set 类型 `std::unordered_set<char32_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0776', () => {
    try {
      const DECL = `void genType776(std::unordered_set<char32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0776 生成结果为空');
      const expectSnippet0 = 'export function genType776(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0776 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0776 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0777
  * @tc.name : h2dts_gen_0777
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<int>::iterator` → `IterableIterator<Set<number>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0777', () => {
    try {
      const DECL = `void genType777(std::unordered_set<int>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0777 生成结果为空');
      const expectSnippet0 = 'export function genType777(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0777 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0777 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0778
  * @tc.name : h2dts_gen_0778
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<size_t>::iterator` → `IterableIterator<Set<number>>` 的生成结...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0778', () => {
    try {
      const DECL = `void genType778(std::unordered_set<size_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0778 生成结果为空');
      const expectSnippet0 = 'export function genType778(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0778 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0778 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0779
  * @tc.name : h2dts_gen_0779
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<double>::iterator` → `IterableIterator<Set<number>>` 的生成结...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0779', () => {
    try {
      const DECL = `void genType779(std::unordered_set<double>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0779 生成结果为空');
      const expectSnippet0 = 'export function genType779(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0779 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0779 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0780
  * @tc.name : h2dts_gen_0780
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<float>::iterator` → `IterableIterator<Set<number>>` 的生成结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0780', () => {
    try {
      const DECL = `void genType780(std::unordered_set<float>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0780 生成结果为空');
      const expectSnippet0 = 'export function genType780(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0780 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0780 执行异常: ${String(err)}`);
    }
  });
});
