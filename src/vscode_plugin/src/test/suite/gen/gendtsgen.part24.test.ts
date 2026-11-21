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

suite('Gendts_gen_Suite_Ext24', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext24');
  /**
  * @tc.number : h2dts_gen_0781
  * @tc.name : h2dts_gen_0781
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<long>::iterator` → `IterableIterator<Set<number>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0781', () => {
    try {
      const DECL = `void genType781(std::unordered_set<long>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0781 生成结果为空');
      const expectSnippet0 = 'export function genType781(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0781 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0781 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0782
  * @tc.name : h2dts_gen_0782
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<short>::iterator` → `IterableIterator<Set<number>>` 的生成结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0782', () => {
    try {
      const DECL = `void genType782(std::unordered_set<short>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0782 生成结果为空');
      const expectSnippet0 = 'export function genType782(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0782 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0782 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0783
  * @tc.name : h2dts_gen_0783
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<uint8_t>::iterator` → `IterableIterator<Set<number>>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0783', () => {
    try {
      const DECL = `void genType783(std::unordered_set<uint8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0783 生成结果为空');
      const expectSnippet0 = 'export function genType783(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0783 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0783 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0784
  * @tc.name : h2dts_gen_0784
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<uint16_t>::iterator` → `IterableIterator<Set<number>>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0784', () => {
    try {
      const DECL = `void genType784(std::unordered_set<uint16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0784 生成结果为空');
      const expectSnippet0 = 'export function genType784(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0784 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0784 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0785
  * @tc.name : h2dts_gen_0785
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<uint32_t>::iterator` → `IterableIterator<Set<number>>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0785', () => {
    try {
      const DECL = `void genType785(std::unordered_set<uint32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0785 生成结果为空');
      const expectSnippet0 = 'export function genType785(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0785 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0785 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0786
  * @tc.name : h2dts_gen_0786
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<uint64_t>::iterator` → `IterableIterator<Set<number>>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0786', () => {
    try {
      const DECL = `void genType786(std::unordered_set<uint64_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0786 生成结果为空');
      const expectSnippet0 = 'export function genType786(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0786 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0786 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0787
  * @tc.name : h2dts_gen_0787
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<int8_t>::iterator` → `IterableIterator<Set<number>>` 的生成结...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0787', () => {
    try {
      const DECL = `void genType787(std::unordered_set<int8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0787 生成结果为空');
      const expectSnippet0 = 'export function genType787(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0787 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0787 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0788
  * @tc.name : h2dts_gen_0788
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<int16_t>::iterator` → `IterableIterator<Set<number>>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0788', () => {
    try {
      const DECL = `void genType788(std::unordered_set<int16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0788 生成结果为空');
      const expectSnippet0 = 'export function genType788(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0788 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0788 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0789
  * @tc.name : h2dts_gen_0789
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<int32_t>::iterator` → `IterableIterator<Set<number>>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0789', () => {
    try {
      const DECL = `void genType789(std::unordered_set<int32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0789 生成结果为空');
      const expectSnippet0 = 'export function genType789(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0789 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0789 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0790
  * @tc.name : h2dts_gen_0790
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<int64_t>::iterator` → `IterableIterator<Set<number>>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0790', () => {
    try {
      const DECL = `void genType790(std::unordered_set<int64_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0790 生成结果为空');
      const expectSnippet0 = 'export function genType790(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0790 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0790 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0791
  * @tc.name : h2dts_gen_0791
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<unsigned>::iterator` → `IterableIterator<Set<number>>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0791', () => {
    try {
      const DECL = `void genType791(std::unordered_set<unsigned>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0791 生成结果为空');
      const expectSnippet0 = 'export function genType791(v: IterableIterator<Set<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0791 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0791 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0792
  * @tc.name : h2dts_gen_0792
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<bool>::iterator` → `IterableIterator<Set<boolean>>` 的生成结果...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0792', () => {
    try {
      const DECL = `void genType792(std::unordered_set<bool>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0792 生成结果为空');
      const expectSnippet0 = 'export function genType792(v: IterableIterator<Set<boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0792 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0792 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0793
  * @tc.name : h2dts_gen_0793
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<char>::iterator` → `IterableIterator<Set<string>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0793', () => {
    try {
      const DECL = `void genType793(std::unordered_set<char>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0793 生成结果为空');
      const expectSnippet0 = 'export function genType793(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0793 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0793 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0794
  * @tc.name : h2dts_gen_0794
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<wchar_t>::iterator` → `IterableIterator<Set<string>>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0794', () => {
    try {
      const DECL = `void genType794(std::unordered_set<wchar_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0794 生成结果为空');
      const expectSnippet0 = 'export function genType794(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0794 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0794 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0795
  * @tc.name : h2dts_gen_0795
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<char8_t>::iterator` → `IterableIterator<Set<string>>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0795', () => {
    try {
      const DECL = `void genType795(std::unordered_set<char8_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0795 生成结果为空');
      const expectSnippet0 = 'export function genType795(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0795 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0795 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0796
  * @tc.name : h2dts_gen_0796
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<char16_t>::iterator` → `IterableIterator<Set<string>>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0796', () => {
    try {
      const DECL = `void genType796(std::unordered_set<char16_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0796 生成结果为空');
      const expectSnippet0 = 'export function genType796(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0796 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0796 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0797
  * @tc.name : h2dts_gen_0797
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_set<char32_t>::iterator` → `IterableIterator<Set<string>>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0797', () => {
    try {
      const DECL = `void genType797(std::unordered_set<char32_t>::iterator v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0797 生成结果为空');
      const expectSnippet0 = 'export function genType797(v: IterableIterator<Set<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0797 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0797 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0798
  * @tc.name : h2dts_gen_0798
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<int>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0798', () => {
    try {
      const DECL = `void genType798(std::multiset<int> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0798 生成结果为空');
      const expectSnippet0 = 'export function genType798(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0798 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0798 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0799
  * @tc.name : h2dts_gen_0799
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<size_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0799', () => {
    try {
      const DECL = `void genType799(std::multiset<size_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0799 生成结果为空');
      const expectSnippet0 = 'export function genType799(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0799 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0799 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0800
  * @tc.name : h2dts_gen_0800
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<double>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0800', () => {
    try {
      const DECL = `void genType800(std::multiset<double> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0800 生成结果为空');
      const expectSnippet0 = 'export function genType800(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0800 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0800 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0801
  * @tc.name : h2dts_gen_0801
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<float>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0801', () => {
    try {
      const DECL = `void genType801(std::multiset<float> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0801 生成结果为空');
      const expectSnippet0 = 'export function genType801(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0801 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0801 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0802
  * @tc.name : h2dts_gen_0802
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<long>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0802', () => {
    try {
      const DECL = `void genType802(std::multiset<long> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0802 生成结果为空');
      const expectSnippet0 = 'export function genType802(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0802 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0802 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0803
  * @tc.name : h2dts_gen_0803
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<short>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0803', () => {
    try {
      const DECL = `void genType803(std::multiset<short> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0803 生成结果为空');
      const expectSnippet0 = 'export function genType803(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0803 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0803 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0804
  * @tc.name : h2dts_gen_0804
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<uint8_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0804', () => {
    try {
      const DECL = `void genType804(std::multiset<uint8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0804 生成结果为空');
      const expectSnippet0 = 'export function genType804(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0804 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0804 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0805
  * @tc.name : h2dts_gen_0805
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<uint16_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0805', () => {
    try {
      const DECL = `void genType805(std::multiset<uint16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0805 生成结果为空');
      const expectSnippet0 = 'export function genType805(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0805 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0805 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0806
  * @tc.name : h2dts_gen_0806
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<uint32_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0806', () => {
    try {
      const DECL = `void genType806(std::multiset<uint32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0806 生成结果为空');
      const expectSnippet0 = 'export function genType806(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0806 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0806 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0807
  * @tc.name : h2dts_gen_0807
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<uint64_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0807', () => {
    try {
      const DECL = `void genType807(std::multiset<uint64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0807 生成结果为空');
      const expectSnippet0 = 'export function genType807(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0807 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0807 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0808
  * @tc.name : h2dts_gen_0808
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<int8_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0808', () => {
    try {
      const DECL = `void genType808(std::multiset<int8_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0808 生成结果为空');
      const expectSnippet0 = 'export function genType808(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0808 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0808 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0809
  * @tc.name : h2dts_gen_0809
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<int16_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0809', () => {
    try {
      const DECL = `void genType809(std::multiset<int16_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0809 生成结果为空');
      const expectSnippet0 = 'export function genType809(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0809 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0809 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0810
  * @tc.name : h2dts_gen_0810
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<int32_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0810', () => {
    try {
      const DECL = `void genType810(std::multiset<int32_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0810 生成结果为空');
      const expectSnippet0 = 'export function genType810(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0810 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0810 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0811
  * @tc.name : h2dts_gen_0811
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<int64_t>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0811', () => {
    try {
      const DECL = `void genType811(std::multiset<int64_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0811 生成结果为空');
      const expectSnippet0 = 'export function genType811(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0811 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0811 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0812
  * @tc.name : h2dts_gen_0812
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<unsigned>` → `Set<number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0812', () => {
    try {
      const DECL = `void genType812(std::multiset<unsigned> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0812 生成结果为空');
      const expectSnippet0 = 'export function genType812(v: Set<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0812 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0812 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0813
  * @tc.name : h2dts_gen_0813
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<bool>` → `Set<boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0813', () => {
    try {
      const DECL = `void genType813(std::multiset<bool> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0813 生成结果为空');
      const expectSnippet0 = 'export function genType813(v: Set<boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0813 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0813 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0814
  * @tc.name : h2dts_gen_0814
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<char>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0814', () => {
    try {
      const DECL = `void genType814(std::multiset<char> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0814 生成结果为空');
      const expectSnippet0 = 'export function genType814(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0814 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0814 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0815
  * @tc.name : h2dts_gen_0815
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::multiset<wchar_t>` → `Set<string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0815', () => {
    try {
      const DECL = `void genType815(std::multiset<wchar_t> v);`;
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
      assert.ok(result.length > 0, 'h2dts_gen_0815 生成结果为空');
      const expectSnippet0 = 'export function genType815(v: Set<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0815 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0815 执行异常: ${String(err)}`);
    }
  });
});
