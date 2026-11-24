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

suite('Gendts_gen_Suite_Ext21', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext21');
  /**
  * @tc.number : h2dts_gen_0676
  * @tc.name : h2dts_gen_0676
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<wchar_t, uint16_t>::iterator` → `IterableIterator<Map<string, ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0676', () => {
    try {
      const DECL = `void genType676(std::multimap<wchar_t, uint16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0676 生成结果为空');
      const expectSnippet0 = 'export function genType676(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0676 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0676 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0677
  * @tc.name : h2dts_gen_0677
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<int, bool>::iterator` → `IterableIterator<Map<number, boolean>...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0677', () => {
    try {
      const DECL = `void genType677(std::multimap<int, bool>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0677 生成结果为空');
      const expectSnippet0 = 'export function genType677(v: IterableIterator<Map<number, boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0677 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0677 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0678
  * @tc.name : h2dts_gen_0678
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<char, bool>::iterator` → `IterableIterator<Map<string, boolean...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0678', () => {
    try {
      const DECL = `void genType678(std::multimap<char, bool>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0678 生成结果为空');
      const expectSnippet0 = 'export function genType678(v: IterableIterator<Map<string, boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0678 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0678 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0679
  * @tc.name : h2dts_gen_0679
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<int, char>::iterator` → `IterableIterator<Map<number, string>>...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0679', () => {
    try {
      const DECL = `void genType679(std::multimap<int, char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0679 生成结果为空');
      const expectSnippet0 = 'export function genType679(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0679 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0679 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0680
  * @tc.name : h2dts_gen_0680
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<size_t, char>::iterator` → `IterableIterator<Map<number, strin...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0680', () => {
    try {
      const DECL = `void genType680(std::multimap<size_t, char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0680 生成结果为空');
      const expectSnippet0 = 'export function genType680(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0680 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0680 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0681
  * @tc.name : h2dts_gen_0681
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::multimap<unsigned, char>::iterator` → `IterableIterator<Map<number, str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0681', () => {
    try {
      const DECL = `void genType681(std::multimap<unsigned, char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0681 生成结果为空');
      const expectSnippet0 = 'export function genType681(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0681 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0681 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0682
  * @tc.name : h2dts_gen_0682
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<int, int>` → `Map<number, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0682', () => {
    try {
      const DECL = `void genType682(std::unordered_multimap<int, int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0682 生成结果为空');
      const expectSnippet0 = 'export function genType682(v: Map<number, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0682 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0682 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0683
  * @tc.name : h2dts_gen_0683
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<char, int>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0683', () => {
    try {
      const DECL = `void genType683(std::unordered_multimap<char, int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0683 生成结果为空');
      const expectSnippet0 = 'export function genType683(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0683 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0683 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0684
  * @tc.name : h2dts_gen_0684
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<char, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0684', () => {
    try {
      const DECL = `void genType684(std::unordered_multimap<char, size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0684 生成结果为空');
      const expectSnippet0 = 'export function genType684(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0684 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0684 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0685
  * @tc.name : h2dts_gen_0685
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<char, unsigned>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0685', () => {
    try {
      const DECL = `void genType685(std::unordered_multimap<char, unsigned> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0685 生成结果为空');
      const expectSnippet0 = 'export function genType685(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0685 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0685 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0686
  * @tc.name : h2dts_gen_0686
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<char, double>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0686', () => {
    try {
      const DECL = `void genType686(std::unordered_multimap<char, double> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0686 生成结果为空');
      const expectSnippet0 = 'export function genType686(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0686 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0686 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0687
  * @tc.name : h2dts_gen_0687
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<char, float>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0687', () => {
    try {
      const DECL = `void genType687(std::unordered_multimap<char, float> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0687 生成结果为空');
      const expectSnippet0 = 'export function genType687(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0687 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0687 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0688
  * @tc.name : h2dts_gen_0688
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<char16_t, int32_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0688', () => {
    try {
      const DECL = `void genType688(std::unordered_multimap<char16_t, int32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0688 生成结果为空');
      const expectSnippet0 = 'export function genType688(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0688 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0688 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0689
  * @tc.name : h2dts_gen_0689
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<char32_t, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0689', () => {
    try {
      const DECL = `void genType689(std::unordered_multimap<char32_t, size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0689 生成结果为空');
      const expectSnippet0 = 'export function genType689(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0689 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0689 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0690
  * @tc.name : h2dts_gen_0690
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<char8_t, uint32_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0690', () => {
    try {
      const DECL = `void genType690(std::unordered_multimap<char8_t, uint32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0690 生成结果为空');
      const expectSnippet0 = 'export function genType690(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0690 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0690 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0691
  * @tc.name : h2dts_gen_0691
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<char32_t, int8_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0691', () => {
    try {
      const DECL = `void genType691(std::unordered_multimap<char32_t, int8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0691 生成结果为空');
      const expectSnippet0 = 'export function genType691(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0691 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0691 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0692
  * @tc.name : h2dts_gen_0692
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<wchar_t, uint16_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0692', () => {
    try {
      const DECL = `void genType692(std::unordered_multimap<wchar_t, uint16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0692 生成结果为空');
      const expectSnippet0 = 'export function genType692(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0692 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0692 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0693
  * @tc.name : h2dts_gen_0693
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<int, bool>` → `Map<number, boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0693', () => {
    try {
      const DECL = `void genType693(std::unordered_multimap<int, bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0693 生成结果为空');
      const expectSnippet0 = 'export function genType693(v: Map<number, boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0693 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0693 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0694
  * @tc.name : h2dts_gen_0694
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<char, bool>` → `Map<string, boolean>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0694', () => {
    try {
      const DECL = `void genType694(std::unordered_multimap<char, bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0694 生成结果为空');
      const expectSnippet0 = 'export function genType694(v: Map<string, boolean>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0694 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0694 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0695
  * @tc.name : h2dts_gen_0695
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<int, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0695', () => {
    try {
      const DECL = `void genType695(std::unordered_multimap<int, char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0695 生成结果为空');
      const expectSnippet0 = 'export function genType695(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0695 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0695 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0696
  * @tc.name : h2dts_gen_0696
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<size_t, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0696', () => {
    try {
      const DECL = `void genType696(std::unordered_multimap<size_t, char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0696 生成结果为空');
      const expectSnippet0 = 'export function genType696(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0696 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0696 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0697
  * @tc.name : h2dts_gen_0697
  * @tc.desc : h2dts gen：扩充-basic 类型 `std::unordered_multimap<unsigned, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0697', () => {
    try {
      const DECL = `void genType697(std::unordered_multimap<unsigned, char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0697 生成结果为空');
      const expectSnippet0 = 'export function genType697(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0697 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0697 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0698
  * @tc.name : h2dts_gen_0698
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<int, int>::iterator` → `IterableIterator<Map<number,...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0698', () => {
    try {
      const DECL = `void genType698(std::unordered_multimap<int, int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0698 生成结果为空');
      const expectSnippet0 = 'export function genType698(v: IterableIterator<Map<number, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0698 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0698 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0699
  * @tc.name : h2dts_gen_0699
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<char, int>::iterator` → `IterableIterator<Map<string...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0699', () => {
    try {
      const DECL = `void genType699(std::unordered_multimap<char, int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0699 生成结果为空');
      const expectSnippet0 = 'export function genType699(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0699 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0699 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0700
  * @tc.name : h2dts_gen_0700
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<char, size_t>::iterator` → `IterableIterator<Map<str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0700', () => {
    try {
      const DECL = `void genType700(std::unordered_multimap<char, size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0700 生成结果为空');
      const expectSnippet0 = 'export function genType700(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0700 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0700 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0701
  * @tc.name : h2dts_gen_0701
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<char, unsigned>::iterator` → `IterableIterator<Map<s...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0701', () => {
    try {
      const DECL = `void genType701(std::unordered_multimap<char, unsigned>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0701 生成结果为空');
      const expectSnippet0 = 'export function genType701(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0701 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0701 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0702
  * @tc.name : h2dts_gen_0702
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<char, double>::iterator` → `IterableIterator<Map<str...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0702', () => {
    try {
      const DECL = `void genType702(std::unordered_multimap<char, double>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0702 生成结果为空');
      const expectSnippet0 = 'export function genType702(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0702 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0702 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0703
  * @tc.name : h2dts_gen_0703
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<char, float>::iterator` → `IterableIterator<Map<stri...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0703', () => {
    try {
      const DECL = `void genType703(std::unordered_multimap<char, float>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0703 生成结果为空');
      const expectSnippet0 = 'export function genType703(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0703 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0703 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0704
  * @tc.name : h2dts_gen_0704
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<char16_t, int32_t>::iterator` → `IterableIterator<Ma...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0704', () => {
    try {
      const DECL = `void genType704(std::unordered_multimap<char16_t, int32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0704 生成结果为空');
      const expectSnippet0 = 'export function genType704(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0704 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0704 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0705
  * @tc.name : h2dts_gen_0705
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<char32_t, size_t>::iterator` → `IterableIterator<Map...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0705', () => {
    try {
      const DECL = `void genType705(std::unordered_multimap<char32_t, size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0705 生成结果为空');
      const expectSnippet0 = 'export function genType705(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0705 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0705 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0706
  * @tc.name : h2dts_gen_0706
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<char8_t, uint32_t>::iterator` → `IterableIterator<Ma...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0706', () => {
    try {
      const DECL = `void genType706(std::unordered_multimap<char8_t, uint32_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0706 生成结果为空');
      const expectSnippet0 = 'export function genType706(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0706 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0706 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0707
  * @tc.name : h2dts_gen_0707
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<char32_t, int8_t>::iterator` → `IterableIterator<Map...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0707', () => {
    try {
      const DECL = `void genType707(std::unordered_multimap<char32_t, int8_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0707 生成结果为空');
      const expectSnippet0 = 'export function genType707(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0707 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0707 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0708
  * @tc.name : h2dts_gen_0708
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<wchar_t, uint16_t>::iterator` → `IterableIterator<Ma...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0708', () => {
    try {
      const DECL = `void genType708(std::unordered_multimap<wchar_t, uint16_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0708 生成结果为空');
      const expectSnippet0 = 'export function genType708(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0708 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0708 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0709
  * @tc.name : h2dts_gen_0709
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<int, bool>::iterator` → `IterableIterator<Map<number...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0709', () => {
    try {
      const DECL = `void genType709(std::unordered_multimap<int, bool>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0709 生成结果为空');
      const expectSnippet0 = 'export function genType709(v: IterableIterator<Map<number, boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0709 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0709 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_0710
  * @tc.name : h2dts_gen_0710
  * @tc.desc : h2dts gen：扩充-iterator 类型 `std::unordered_multimap<char, bool>::iterator` → `IterableIterator<Map<strin...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_0710', () => {
    try {
      const DECL = `void genType710(std::unordered_multimap<char, bool>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_0710 生成结果为空');
      const expectSnippet0 = 'export function genType710(v: IterableIterator<Map<string, boolean>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_0710 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_0710 执行异常: ${String(err)}`);
    }
  });
});
