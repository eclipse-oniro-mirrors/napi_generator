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

suite('Gendts_gen_Suite_Ext140', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext140');
  /**
  * @tc.number : h2dts_gen_4717
  * @tc.name : h2dts_gen_4717
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<charb *, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4717', () => {
    try {
      const DECL = `void r5ts4717(std::unordered_map<charb *, size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4717 生成结果为空');
      const expectSnippet0 = 'export function r5ts4717(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4717 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4717 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4718
  * @tc.name : h2dts_gen_4718
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<std::string, long long>` → `Map<string, number>` ...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4718', () => {
    try {
      const DECL = `void r5ts4718(std::unordered_map<std::string, long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4718 生成结果为空');
      const expectSnippet0 = 'export function r5ts4718(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4718 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4718 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4719
  * @tc.name : h2dts_gen_4719
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char *, int *>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4719', () => {
    try {
      const DECL = `void r5ts4719(std::unordered_map<char *, int *> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4719 生成结果为空');
      const expectSnippet0 = 'export function r5ts4719(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4719 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4719 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4720
  * @tc.name : h2dts_gen_4720
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<char *, unsigned long long>` → `Map<string, numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4720', () => {
    try {
      const DECL = `void r5ts4720(std::unordered_map<char *, unsigned long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4720 生成结果为空');
      const expectSnippet0 = 'export function r5ts4720(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4720 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4720 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4721
  * @tc.name : h2dts_gen_4721
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<std::string, unsigned short>` → `Map<string, numb...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4721', () => {
    try {
      const DECL = `void r5ts4721(std::unordered_map<std::string, unsigned short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4721 生成结果为空');
      const expectSnippet0 = 'export function r5ts4721(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4721 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4721 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4722
  * @tc.name : h2dts_gen_4722
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<int *, std::string>` → `Map<number, string>` 的生成结...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4722', () => {
    try {
      const DECL = `void r5ts4722(std::unordered_map<int *, std::string> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4722 生成结果为空');
      const expectSnippet0 = 'export function r5ts4722(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4722 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4722 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4723
  * @tc.name : h2dts_gen_4723
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<double, char *>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4723', () => {
    try {
      const DECL = `void r5ts4723(std::unordered_map<double, char *> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4723 生成结果为空');
      const expectSnippet0 = 'export function r5ts4723(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4723 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4723 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4724
  * @tc.name : h2dts_gen_4724
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Map `std::unordered_map<int *, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4724', () => {
    try {
      const DECL = `void r5ts4724(std::unordered_map<int *, char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4724 生成结果为空');
      const expectSnippet0 = 'export function r5ts4724(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4724 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4724 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4725
  * @tc.name : h2dts_gen_4725
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<std::string, int>::iterator` → `IterableIter...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4725', () => {
    try {
      const DECL = `void r5ts4725(std::unordered_map<std::string, int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4725 生成结果为空');
      const expectSnippet0 = 'export function r5ts4725(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4725 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4725 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4726
  * @tc.name : h2dts_gen_4726
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<charb *, size_t>::iterator` → `IterableItera...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4726', () => {
    try {
      const DECL = `void r5ts4726(std::unordered_map<charb *, size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4726 生成结果为空');
      const expectSnippet0 = 'export function r5ts4726(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4726 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4726 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4727
  * @tc.name : h2dts_gen_4727
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<std::string, long long>::iterator` → `Iterab...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4727', () => {
    try {
      const DECL = `void r5ts4727(std::unordered_map<std::string, long long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4727 生成结果为空');
      const expectSnippet0 = 'export function r5ts4727(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4727 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4727 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4728
  * @tc.name : h2dts_gen_4728
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char *, int *>::iterator` → `IterableIterato...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4728', () => {
    try {
      const DECL = `void r5ts4728(std::unordered_map<char *, int *>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4728 生成结果为空');
      const expectSnippet0 = 'export function r5ts4728(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4728 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4728 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4729
  * @tc.name : h2dts_gen_4729
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<char *, unsigned long long>::iterator` → `It...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4729', () => {
    try {
      const DECL = `void r5ts4729(std::unordered_map<char *, unsigned long long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4729 生成结果为空');
      const expectSnippet0 = 'export function r5ts4729(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4729 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4729 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4730
  * @tc.name : h2dts_gen_4730
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<std::string, unsigned short>::iterator` → `I...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4730', () => {
    try {
      const DECL = `void r5ts4730(std::unordered_map<std::string, unsigned short>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4730 生成结果为空');
      const expectSnippet0 = 'export function r5ts4730(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4730 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4730 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4731
  * @tc.name : h2dts_gen_4731
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<int *, std::string>::iterator` → `IterableIt...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4731', () => {
    try {
      const DECL = `void r5ts4731(std::unordered_map<int *, std::string>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4731 生成结果为空');
      const expectSnippet0 = 'export function r5ts4731(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4731 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4731 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4732
  * @tc.name : h2dts_gen_4732
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<double, char *>::iterator` → `IterableIterat...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4732', () => {
    try {
      const DECL = `void r5ts4732(std::unordered_map<double, char *>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4732 生成结果为空');
      const expectSnippet0 = 'export function r5ts4732(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4732 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4732 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4733
  * @tc.name : h2dts_gen_4733
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::unordered_map<int *, char>::iterator` → `IterableIterator<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4733', () => {
    try {
      const DECL = `void r5ts4733(std::unordered_map<int *, char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4733 生成结果为空');
      const expectSnippet0 = 'export function r5ts4733(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4733 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4733 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4734
  * @tc.name : h2dts_gen_4734
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<std::string, int>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4734', () => {
    try {
      const DECL = `void r5ts4734(std::multimap<std::string, int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4734 生成结果为空');
      const expectSnippet0 = 'export function r5ts4734(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4734 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4734 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4735
  * @tc.name : h2dts_gen_4735
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<charb *, size_t>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4735', () => {
    try {
      const DECL = `void r5ts4735(std::multimap<charb *, size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4735 生成结果为空');
      const expectSnippet0 = 'export function r5ts4735(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4735 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4735 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4736
  * @tc.name : h2dts_gen_4736
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<std::string, long long>` → `Map<string, number>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4736', () => {
    try {
      const DECL = `void r5ts4736(std::multimap<std::string, long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4736 生成结果为空');
      const expectSnippet0 = 'export function r5ts4736(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4736 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4736 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4737
  * @tc.name : h2dts_gen_4737
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char *, int *>` → `Map<string, number>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4737', () => {
    try {
      const DECL = `void r5ts4737(std::multimap<char *, int *> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4737 生成结果为空');
      const expectSnippet0 = 'export function r5ts4737(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4737 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4737 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4738
  * @tc.name : h2dts_gen_4738
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<char *, unsigned long long>` → `Map<string, number>`...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4738', () => {
    try {
      const DECL = `void r5ts4738(std::multimap<char *, unsigned long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4738 生成结果为空');
      const expectSnippet0 = 'export function r5ts4738(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4738 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4738 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4739
  * @tc.name : h2dts_gen_4739
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<std::string, unsigned short>` → `Map<string, number>...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4739', () => {
    try {
      const DECL = `void r5ts4739(std::multimap<std::string, unsigned short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4739 生成结果为空');
      const expectSnippet0 = 'export function r5ts4739(v: Map<string, number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4739 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4739 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4740
  * @tc.name : h2dts_gen_4740
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<int *, std::string>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4740', () => {
    try {
      const DECL = `void r5ts4740(std::multimap<int *, std::string> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4740 生成结果为空');
      const expectSnippet0 = 'export function r5ts4740(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4740 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4740 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4741
  * @tc.name : h2dts_gen_4741
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<double, char *>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4741', () => {
    try {
      const DECL = `void r5ts4741(std::multimap<double, char *> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4741 生成结果为空');
      const expectSnippet0 = 'export function r5ts4741(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4741 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4741 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4742
  * @tc.name : h2dts_gen_4742
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::multimap<int *, char>` → `Map<number, string>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4742', () => {
    try {
      const DECL = `void r5ts4742(std::multimap<int *, char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4742 生成结果为空');
      const expectSnippet0 = 'export function r5ts4742(v: Map<number, string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4742 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4742 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4743
  * @tc.name : h2dts_gen_4743
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<std::string, int>::iterator` → `IterableIterator<...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4743', () => {
    try {
      const DECL = `void r5ts4743(std::multimap<std::string, int>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4743 生成结果为空');
      const expectSnippet0 = 'export function r5ts4743(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4743 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4743 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4744
  * @tc.name : h2dts_gen_4744
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<charb *, size_t>::iterator` → `IterableIterator<M...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4744', () => {
    try {
      const DECL = `void r5ts4744(std::multimap<charb *, size_t>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4744 生成结果为空');
      const expectSnippet0 = 'export function r5ts4744(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4744 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4744 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4745
  * @tc.name : h2dts_gen_4745
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<std::string, long long>::iterator` → `IterableIte...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4745', () => {
    try {
      const DECL = `void r5ts4745(std::multimap<std::string, long long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4745 生成结果为空');
      const expectSnippet0 = 'export function r5ts4745(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4745 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4745 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4746
  * @tc.name : h2dts_gen_4746
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<char *, int *>::iterator` → `IterableIterator<Map...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4746', () => {
    try {
      const DECL = `void r5ts4746(std::multimap<char *, int *>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4746 生成结果为空');
      const expectSnippet0 = 'export function r5ts4746(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4746 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4746 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4747
  * @tc.name : h2dts_gen_4747
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<char *, unsigned long long>::iterator` → `Iterabl...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4747', () => {
    try {
      const DECL = `void r5ts4747(std::multimap<char *, unsigned long long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4747 生成结果为空');
      const expectSnippet0 = 'export function r5ts4747(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4747 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4747 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4748
  * @tc.name : h2dts_gen_4748
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<std::string, unsigned short>::iterator` → `Iterab...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4748', () => {
    try {
      const DECL = `void r5ts4748(std::multimap<std::string, unsigned short>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4748 生成结果为空');
      const expectSnippet0 = 'export function r5ts4748(v: IterableIterator<Map<string, number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4748 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4748 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4749
  * @tc.name : h2dts_gen_4749
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<int *, std::string>::iterator` → `IterableIterato...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4749', () => {
    try {
      const DECL = `void r5ts4749(std::multimap<int *, std::string>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4749 生成结果为空');
      const expectSnippet0 = 'export function r5ts4749(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4749 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4749 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4750
  * @tc.name : h2dts_gen_4750
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<double, char *>::iterator` → `IterableIterator<Ma...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4750', () => {
    try {
      const DECL = `void r5ts4750(std::multimap<double, char *>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4750 生成结果为空');
      const expectSnippet0 = 'export function r5ts4750(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4750 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4750 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_gen_4751
  * @tc.name : h2dts_gen_4751
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::multimap<int *, char>::iterator` → `IterableIterator<Map<n...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4751', () => {
    try {
      const DECL = `void r5ts4751(std::multimap<int *, char>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4751 生成结果为空');
      const expectSnippet0 = 'export function r5ts4751(v: IterableIterator<Map<number, string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4751 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4751 执行异常: ${String(err)}`);
    }
  });
});
