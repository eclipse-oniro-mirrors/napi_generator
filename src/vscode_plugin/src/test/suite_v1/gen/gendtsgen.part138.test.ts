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

suite('Gendts_gen_Suite_Ext138', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext138');
  /**
  * @tc.number : h2dts_gen_4647
  * @tc.name : h2dts_gen_4647
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::stack<unsigned long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4647', () => {
    try {
      const DECL = `void r5ts4647(std::stack<unsigned long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4647 生成结果为空');
      const expectSnippet0 = 'export function r5ts4647(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4647 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4647 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4648
  * @tc.name : h2dts_gen_4648
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::stack<int *>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4648', () => {
    try {
      const DECL = `void r5ts4648(std::stack<int *> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4648 生成结果为空');
      const expectSnippet0 = 'export function r5ts4648(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4648 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4648 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4649
  * @tc.name : h2dts_gen_4649
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::stack<std::string>::iterator` → `IterableIterator<string[]...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4649', () => {
    try {
      const DECL = `void r5ts4649(std::stack<std::string>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4649 生成结果为空');
      const expectSnippet0 = 'export function r5ts4649(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4649 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4649 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4650
  * @tc.name : h2dts_gen_4650
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::stack<char *>::iterator` → `IterableIterator<string[]>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4650', () => {
    try {
      const DECL = `void r5ts4650(std::stack<char *>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4650 生成结果为空');
      const expectSnippet0 = 'export function r5ts4650(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4650 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4650 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4651
  * @tc.name : h2dts_gen_4651
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::stack<long long>::iterator` → `IterableIterator<number[]>`...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4651', () => {
    try {
      const DECL = `void r5ts4651(std::stack<long long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4651 生成结果为空');
      const expectSnippet0 = 'export function r5ts4651(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4651 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4651 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4652
  * @tc.name : h2dts_gen_4652
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::stack<unsigned short>::iterator` → `IterableIterator<numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4652', () => {
    try {
      const DECL = `void r5ts4652(std::stack<unsigned short>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4652 生成结果为空');
      const expectSnippet0 = 'export function r5ts4652(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4652 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4652 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4653
  * @tc.name : h2dts_gen_4653
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::stack<unsigned long>::iterator` → `IterableIterator<number...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4653', () => {
    try {
      const DECL = `void r5ts4653(std::stack<unsigned long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4653 生成结果为空');
      const expectSnippet0 = 'export function r5ts4653(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4653 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4653 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4654
  * @tc.name : h2dts_gen_4654
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::stack<unsigned long long>::iterator` → `IterableIterator<n...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4654', () => {
    try {
      const DECL = `void r5ts4654(std::stack<unsigned long long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4654 生成结果为空');
      const expectSnippet0 = 'export function r5ts4654(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4654 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4654 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4655
  * @tc.name : h2dts_gen_4655
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::stack<int *>::iterator` → `IterableIterator<number[]>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4655', () => {
    try {
      const DECL = `void r5ts4655(std::stack<int *>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4655 生成结果为空');
      const expectSnippet0 = 'export function r5ts4655(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4655 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4655 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4656
  * @tc.name : h2dts_gen_4656
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<std::string>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4656', () => {
    try {
      const DECL = `void r5ts4656(std::queue<std::string> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4656 生成结果为空');
      const expectSnippet0 = 'export function r5ts4656(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4656 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4656 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4657
  * @tc.name : h2dts_gen_4657
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<char *>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4657', () => {
    try {
      const DECL = `void r5ts4657(std::queue<char *> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4657 生成结果为空');
      const expectSnippet0 = 'export function r5ts4657(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4657 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4657 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4658
  * @tc.name : h2dts_gen_4658
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4658', () => {
    try {
      const DECL = `void r5ts4658(std::queue<long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4658 生成结果为空');
      const expectSnippet0 = 'export function r5ts4658(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4658 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4658 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4659
  * @tc.name : h2dts_gen_4659
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<unsigned short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4659', () => {
    try {
      const DECL = `void r5ts4659(std::queue<unsigned short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4659 生成结果为空');
      const expectSnippet0 = 'export function r5ts4659(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4659 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4659 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4660
  * @tc.name : h2dts_gen_4660
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<unsigned long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4660', () => {
    try {
      const DECL = `void r5ts4660(std::queue<unsigned long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4660 生成结果为空');
      const expectSnippet0 = 'export function r5ts4660(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4660 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4660 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4661
  * @tc.name : h2dts_gen_4661
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<unsigned long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4661', () => {
    try {
      const DECL = `void r5ts4661(std::queue<unsigned long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4661 生成结果为空');
      const expectSnippet0 = 'export function r5ts4661(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4661 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4661 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4662
  * @tc.name : h2dts_gen_4662
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::queue<int *>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4662', () => {
    try {
      const DECL = `void r5ts4662(std::queue<int *> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4662 生成结果为空');
      const expectSnippet0 = 'export function r5ts4662(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4662 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4662 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4663
  * @tc.name : h2dts_gen_4663
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<std::string>::iterator` → `IterableIterator<string[]...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4663', () => {
    try {
      const DECL = `void r5ts4663(std::queue<std::string>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4663 生成结果为空');
      const expectSnippet0 = 'export function r5ts4663(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4663 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4663 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4664
  * @tc.name : h2dts_gen_4664
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<char *>::iterator` → `IterableIterator<string[]>` 的生...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4664', () => {
    try {
      const DECL = `void r5ts4664(std::queue<char *>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4664 生成结果为空');
      const expectSnippet0 = 'export function r5ts4664(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4664 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4664 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4665
  * @tc.name : h2dts_gen_4665
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<long long>::iterator` → `IterableIterator<number[]>`...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4665', () => {
    try {
      const DECL = `void r5ts4665(std::queue<long long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4665 生成结果为空');
      const expectSnippet0 = 'export function r5ts4665(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4665 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4665 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4666
  * @tc.name : h2dts_gen_4666
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<unsigned short>::iterator` → `IterableIterator<numbe...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4666', () => {
    try {
      const DECL = `void r5ts4666(std::queue<unsigned short>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4666 生成结果为空');
      const expectSnippet0 = 'export function r5ts4666(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4666 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4666 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4667
  * @tc.name : h2dts_gen_4667
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<unsigned long>::iterator` → `IterableIterator<number...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4667', () => {
    try {
      const DECL = `void r5ts4667(std::queue<unsigned long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4667 生成结果为空');
      const expectSnippet0 = 'export function r5ts4667(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4667 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4667 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4668
  * @tc.name : h2dts_gen_4668
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<unsigned long long>::iterator` → `IterableIterator<n...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4668', () => {
    try {
      const DECL = `void r5ts4668(std::queue<unsigned long long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4668 生成结果为空');
      const expectSnippet0 = 'export function r5ts4668(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4668 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4668 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4669
  * @tc.name : h2dts_gen_4669
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::queue<int *>::iterator` → `IterableIterator<number[]>` 的生成...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4669', () => {
    try {
      const DECL = `void r5ts4669(std::queue<int *>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4669 生成结果为空');
      const expectSnippet0 = 'export function r5ts4669(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4669 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4669 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4670
  * @tc.name : h2dts_gen_4670
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::valarray<std::string>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4670', () => {
    try {
      const DECL = `void r5ts4670(std::valarray<std::string> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4670 生成结果为空');
      const expectSnippet0 = 'export function r5ts4670(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4670 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4670 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4671
  * @tc.name : h2dts_gen_4671
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::valarray<char *>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4671', () => {
    try {
      const DECL = `void r5ts4671(std::valarray<char *> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4671 生成结果为空');
      const expectSnippet0 = 'export function r5ts4671(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4671 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4671 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4672
  * @tc.name : h2dts_gen_4672
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::valarray<long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4672', () => {
    try {
      const DECL = `void r5ts4672(std::valarray<long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4672 生成结果为空');
      const expectSnippet0 = 'export function r5ts4672(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4672 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4672 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4673
  * @tc.name : h2dts_gen_4673
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::valarray<unsigned short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4673', () => {
    try {
      const DECL = `void r5ts4673(std::valarray<unsigned short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4673 生成结果为空');
      const expectSnippet0 = 'export function r5ts4673(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4673 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4673 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4674
  * @tc.name : h2dts_gen_4674
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::valarray<unsigned long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4674', () => {
    try {
      const DECL = `void r5ts4674(std::valarray<unsigned long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4674 生成结果为空');
      const expectSnippet0 = 'export function r5ts4674(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4674 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4674 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4675
  * @tc.name : h2dts_gen_4675
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::valarray<unsigned long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4675', () => {
    try {
      const DECL = `void r5ts4675(std::valarray<unsigned long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4675 生成结果为空');
      const expectSnippet0 = 'export function r5ts4675(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4675 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4675 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4676
  * @tc.name : h2dts_gen_4676
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::valarray<int *>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4676', () => {
    try {
      const DECL = `void r5ts4676(std::valarray<int *> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4676 生成结果为空');
      const expectSnippet0 = 'export function r5ts4676(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4676 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4676 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4677
  * @tc.name : h2dts_gen_4677
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<std::string>::iterator` → `IterableIterator<strin...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4677', () => {
    try {
      const DECL = `void r5ts4677(std::valarray<std::string>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4677 生成结果为空');
      const expectSnippet0 = 'export function r5ts4677(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4677 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4677 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4678
  * @tc.name : h2dts_gen_4678
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<char *>::iterator` → `IterableIterator<string[]>`...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4678', () => {
    try {
      const DECL = `void r5ts4678(std::valarray<char *>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4678 生成结果为空');
      const expectSnippet0 = 'export function r5ts4678(v: IterableIterator<Array<string>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4678 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4678 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4679
  * @tc.name : h2dts_gen_4679
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<long long>::iterator` → `IterableIterator<number[...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4679', () => {
    try {
      const DECL = `void r5ts4679(std::valarray<long long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4679 生成结果为空');
      const expectSnippet0 = 'export function r5ts4679(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4679 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4679 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4680
  * @tc.name : h2dts_gen_4680
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<unsigned short>::iterator` → `IterableIterator<nu...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4680', () => {
    try {
      const DECL = `void r5ts4680(std::valarray<unsigned short>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4680 生成结果为空');
      const expectSnippet0 = 'export function r5ts4680(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4680 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4680 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4681
  * @tc.name : h2dts_gen_4681
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-iterator `std::valarray<unsigned long>::iterator` → `IterableIterator<num...
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4681', () => {
    try {
      const DECL = `void r5ts4681(std::valarray<unsigned long>::iterator v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4681 生成结果为空');
      const expectSnippet0 = 'export function r5ts4681(v: IterableIterator<Array<number>>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4681 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4681 执行异常: ${String(err)}`);
    }
  });
});
