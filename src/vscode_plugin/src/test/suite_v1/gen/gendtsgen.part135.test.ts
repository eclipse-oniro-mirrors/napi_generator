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

suite('Gendts_gen_Suite_Ext135', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Gendts_gen_Suite_Ext135');
  /**
  * @tc.number : h2dts_gen_4542
  * @tc.name : h2dts_gen_4542
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<char8_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4542', () => {
    try {
      const DECL = `void r5ts4542(std::shared_ptr<char8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4542 生成结果为空');
      const expectSnippet0 = 'export function r5ts4542(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4542 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4542 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4543
  * @tc.name : h2dts_gen_4543
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<char16_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4543', () => {
    try {
      const DECL = `void r5ts4543(std::shared_ptr<char16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4543 生成结果为空');
      const expectSnippet0 = 'export function r5ts4543(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4543 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4543 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4544
  * @tc.name : h2dts_gen_4544
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-smart `std::shared_ptr<char32_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4544', () => {
    try {
      const DECL = `void r5ts4544(std::shared_ptr<char32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4544 生成结果为空');
      const expectSnippet0 = 'export function r5ts4544(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4544 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4544 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4545
  * @tc.name : h2dts_gen_4545
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4545', () => {
    try {
      const DECL = `void r5ts4545(std::weak_ptr<int> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4545 生成结果为空');
      const expectSnippet0 = 'export function r5ts4545(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4545 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4545 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4546
  * @tc.name : h2dts_gen_4546
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<size_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4546', () => {
    try {
      const DECL = `void r5ts4546(std::weak_ptr<size_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4546 生成结果为空');
      const expectSnippet0 = 'export function r5ts4546(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4546 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4546 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4547
  * @tc.name : h2dts_gen_4547
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<double>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4547', () => {
    try {
      const DECL = `void r5ts4547(std::weak_ptr<double> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4547 生成结果为空');
      const expectSnippet0 = 'export function r5ts4547(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4547 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4547 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4548
  * @tc.name : h2dts_gen_4548
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<float>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4548', () => {
    try {
      const DECL = `void r5ts4548(std::weak_ptr<float> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4548 生成结果为空');
      const expectSnippet0 = 'export function r5ts4548(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4548 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4548 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4549
  * @tc.name : h2dts_gen_4549
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<long>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4549', () => {
    try {
      const DECL = `void r5ts4549(std::weak_ptr<long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4549 生成结果为空');
      const expectSnippet0 = 'export function r5ts4549(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4549 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4549 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4550
  * @tc.name : h2dts_gen_4550
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<short>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4550', () => {
    try {
      const DECL = `void r5ts4550(std::weak_ptr<short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4550 生成结果为空');
      const expectSnippet0 = 'export function r5ts4550(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4550 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4550 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4551
  * @tc.name : h2dts_gen_4551
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<uint8_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4551', () => {
    try {
      const DECL = `void r5ts4551(std::weak_ptr<uint8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4551 生成结果为空');
      const expectSnippet0 = 'export function r5ts4551(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4551 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4551 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4552
  * @tc.name : h2dts_gen_4552
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<uint16_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4552', () => {
    try {
      const DECL = `void r5ts4552(std::weak_ptr<uint16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4552 生成结果为空');
      const expectSnippet0 = 'export function r5ts4552(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4552 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4552 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4553
  * @tc.name : h2dts_gen_4553
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<uint32_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4553', () => {
    try {
      const DECL = `void r5ts4553(std::weak_ptr<uint32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4553 生成结果为空');
      const expectSnippet0 = 'export function r5ts4553(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4553 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4553 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4554
  * @tc.name : h2dts_gen_4554
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<uint64_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4554', () => {
    try {
      const DECL = `void r5ts4554(std::weak_ptr<uint64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4554 生成结果为空');
      const expectSnippet0 = 'export function r5ts4554(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4554 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4554 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4555
  * @tc.name : h2dts_gen_4555
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int8_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4555', () => {
    try {
      const DECL = `void r5ts4555(std::weak_ptr<int8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4555 生成结果为空');
      const expectSnippet0 = 'export function r5ts4555(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4555 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4555 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4556
  * @tc.name : h2dts_gen_4556
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int16_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4556', () => {
    try {
      const DECL = `void r5ts4556(std::weak_ptr<int16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4556 生成结果为空');
      const expectSnippet0 = 'export function r5ts4556(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4556 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4556 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4557
  * @tc.name : h2dts_gen_4557
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int32_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4557', () => {
    try {
      const DECL = `void r5ts4557(std::weak_ptr<int32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4557 生成结果为空');
      const expectSnippet0 = 'export function r5ts4557(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4557 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4557 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4558
  * @tc.name : h2dts_gen_4558
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<int64_t>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4558', () => {
    try {
      const DECL = `void r5ts4558(std::weak_ptr<int64_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4558 生成结果为空');
      const expectSnippet0 = 'export function r5ts4558(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4558 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4558 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4559
  * @tc.name : h2dts_gen_4559
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<unsigned>` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4559', () => {
    try {
      const DECL = `void r5ts4559(std::weak_ptr<unsigned> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4559 生成结果为空');
      const expectSnippet0 = 'export function r5ts4559(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4559 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4559 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4560
  * @tc.name : h2dts_gen_4560
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<bool>` → `boolean` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4560', () => {
    try {
      const DECL = `void r5ts4560(std::weak_ptr<bool> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4560 生成结果为空');
      const expectSnippet0 = 'export function r5ts4560(v: boolean): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4560 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4560 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4561
  * @tc.name : h2dts_gen_4561
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<char>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4561', () => {
    try {
      const DECL = `void r5ts4561(std::weak_ptr<char> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4561 生成结果为空');
      const expectSnippet0 = 'export function r5ts4561(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4561 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4561 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4562
  * @tc.name : h2dts_gen_4562
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<wchar_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4562', () => {
    try {
      const DECL = `void r5ts4562(std::weak_ptr<wchar_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4562 生成结果为空');
      const expectSnippet0 = 'export function r5ts4562(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4562 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4562 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4563
  * @tc.name : h2dts_gen_4563
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<char8_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4563', () => {
    try {
      const DECL = `void r5ts4563(std::weak_ptr<char8_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4563 生成结果为空');
      const expectSnippet0 = 'export function r5ts4563(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4563 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4563 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4564
  * @tc.name : h2dts_gen_4564
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<char16_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4564', () => {
    try {
      const DECL = `void r5ts4564(std::weak_ptr<char16_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4564 生成结果为空');
      const expectSnippet0 = 'export function r5ts4564(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4564 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4564 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4565
  * @tc.name : h2dts_gen_4565
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::weak_ptr<char32_t>` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4565', () => {
    try {
      const DECL = `void r5ts4565(std::weak_ptr<char32_t> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4565 生成结果为空');
      const expectSnippet0 = 'export function r5ts4565(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4565 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4565 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4566
  * @tc.name : h2dts_gen_4566
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `std::string` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4566', () => {
    try {
      const DECL = `void r5ts4566(std::string v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4566 生成结果为空');
      const expectSnippet0 = 'export function r5ts4566(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4566 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4566 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4567
  * @tc.name : h2dts_gen_4567
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<std::string>` → `string[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4567', () => {
    try {
      const DECL = `void r5ts4567(std::vector<std::string> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4567 生成结果为空');
      const expectSnippet0 = 'export function r5ts4567(v: Array<string>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4567 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4567 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4568
  * @tc.name : h2dts_gen_4568
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `char *` → `string` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4568', () => {
    try {
      const DECL = `void r5ts4568(char * v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4568 生成结果为空');
      const expectSnippet0 = 'export function r5ts4568(v: string): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4568 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4568 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4569
  * @tc.name : h2dts_gen_4569
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `long long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4569', () => {
    try {
      const DECL = `void r5ts4569(long long v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4569 生成结果为空');
      const expectSnippet0 = 'export function r5ts4569(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4569 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4569 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4570
  * @tc.name : h2dts_gen_4570
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `unsigned short` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4570', () => {
    try {
      const DECL = `void r5ts4570(unsigned short v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4570 生成结果为空');
      const expectSnippet0 = 'export function r5ts4570(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4570 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4570 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4571
  * @tc.name : h2dts_gen_4571
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `unsigned long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4571', () => {
    try {
      const DECL = `void r5ts4571(unsigned long v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4571 生成结果为空');
      const expectSnippet0 = 'export function r5ts4571(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4571 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4571 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4572
  * @tc.name : h2dts_gen_4572
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-basic `unsigned long long` → `number` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4572', () => {
    try {
      const DECL = `void r5ts4572(unsigned long long v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4572 生成结果为空');
      const expectSnippet0 = 'export function r5ts4572(v: number): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4572 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4572 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4573
  * @tc.name : h2dts_gen_4573
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4573', () => {
    try {
      const DECL = `void r5ts4573(std::vector<long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4573 生成结果为空');
      const expectSnippet0 = 'export function r5ts4573(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4573 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4573 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4574
  * @tc.name : h2dts_gen_4574
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<unsigned short>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4574', () => {
    try {
      const DECL = `void r5ts4574(std::vector<unsigned short> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4574 生成结果为空');
      const expectSnippet0 = 'export function r5ts4574(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4574 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4574 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4575
  * @tc.name : h2dts_gen_4575
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<unsigned long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4575', () => {
    try {
      const DECL = `void r5ts4575(std::vector<unsigned long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4575 生成结果为空');
      const expectSnippet0 = 'export function r5ts4575(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4575 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4575 执行异常: ${String(err)}`);
    }
  });
  /**
  * @tc.number : h2dts_gen_4576
  * @tc.name : h2dts_gen_4576
  * @tc.desc : h2dts gen：扩充-R5-transTskey缺口-Array `std::vector<unsigned long long>` → `number[]` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_gen_ext_4576', () => {
    try {
      const DECL = `void r5ts4576(std::vector<unsigned long long> v);`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsFunction(gi);
      assert.ok(result.length > 0, 'h2dts_gen_4576 生成结果为空');
      const expectSnippet0 = 'export function r5ts4576(v: Array<number>): void;';
      assert.ok(result.includes(expectSnippet0), 'h2dts_gen_4576 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_gen_4576 执行异常: ${String(err)}`);
    }
  });
});
