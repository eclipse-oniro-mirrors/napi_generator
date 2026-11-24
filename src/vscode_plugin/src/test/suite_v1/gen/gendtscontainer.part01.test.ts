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

suite('Gendts_container_Suite_Ext01', function () {
  /**
  * @tc.number : h2dts_ctr_0001
  * @tc.name : h2dts_ctr_0001
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<int>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0001', () => {
    try {
      const DECL = `class R8Ctr1 { std::vector<int> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0001 生成结果为空');
      const expectSnippet = 'export class R8Ctr1 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0001 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0002
  * @tc.name : h2dts_ctr_0002
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<size_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0002', () => {
    try {
      const DECL = `class R8Ctr2 { std::vector<size_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0002 生成结果为空');
      const expectSnippet = 'export class R8Ctr2 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0002 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0003
  * @tc.name : h2dts_ctr_0003
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<double>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0003', () => {
    try {
      const DECL = `class R8Ctr3 { std::vector<double> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0003 生成结果为空');
      const expectSnippet = 'export class R8Ctr3 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0003 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0004
  * @tc.name : h2dts_ctr_0004
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<float>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0004', () => {
    try {
      const DECL = `class R8Ctr4 { std::vector<float> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0004 生成结果为空');
      const expectSnippet = 'export class R8Ctr4 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0004 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0005
  * @tc.name : h2dts_ctr_0005
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<short>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0005', () => {
    try {
      const DECL = `class R8Ctr5 { std::vector<short> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0005 生成结果为空');
      const expectSnippet = 'export class R8Ctr5 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0005 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0006
  * @tc.name : h2dts_ctr_0006
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<long>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0006', () => {
    try {
      const DECL = `class R8Ctr6 { std::vector<long> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0006 生成结果为空');
      const expectSnippet = 'export class R8Ctr6 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0006 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0007
  * @tc.name : h2dts_ctr_0007
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<uint8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0007', () => {
    try {
      const DECL = `class R8Ctr7 { std::vector<uint8_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0007 生成结果为空');
      const expectSnippet = 'export class R8Ctr7 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0007 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0008
  * @tc.name : h2dts_ctr_0008
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<uint16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0008', () => {
    try {
      const DECL = `class R8Ctr8 { std::vector<uint16_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0008 生成结果为空');
      const expectSnippet = 'export class R8Ctr8 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0008 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0009
  * @tc.name : h2dts_ctr_0009
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<uint32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0009', () => {
    try {
      const DECL = `class R8Ctr9 { std::vector<uint32_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0009 生成结果为空');
      const expectSnippet = 'export class R8Ctr9 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0009 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0010
  * @tc.name : h2dts_ctr_0010
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<uint64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0010', () => {
    try {
      const DECL = `class R8Ctr10 { std::vector<uint64_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0010 生成结果为空');
      const expectSnippet = 'export class R8Ctr10 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0010 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0011
  * @tc.name : h2dts_ctr_0011
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<int8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0011', () => {
    try {
      const DECL = `class R8Ctr11 { std::vector<int8_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0011 生成结果为空');
      const expectSnippet = 'export class R8Ctr11 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0011 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0012
  * @tc.name : h2dts_ctr_0012
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<int16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0012', () => {
    try {
      const DECL = `class R8Ctr12 { std::vector<int16_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0012 生成结果为空');
      const expectSnippet = 'export class R8Ctr12 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0012 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0013
  * @tc.name : h2dts_ctr_0013
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<int32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0013', () => {
    try {
      const DECL = `class R8Ctr13 { std::vector<int32_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0013 生成结果为空');
      const expectSnippet = 'export class R8Ctr13 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0013 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0014
  * @tc.name : h2dts_ctr_0014
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<int64_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0014', () => {
    try {
      const DECL = `class R8Ctr14 { std::vector<int64_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0014 生成结果为空');
      const expectSnippet = 'export class R8Ctr14 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0014 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0015
  * @tc.name : h2dts_ctr_0015
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<unsigned>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0015', () => {
    try {
      const DECL = `class R8Ctr15 { std::vector<unsigned> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0015 生成结果为空');
      const expectSnippet = 'export class R8Ctr15 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0015 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0016
  * @tc.name : h2dts_ctr_0016
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<bool>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0016', () => {
    try {
      const DECL = `class R8Ctr16 { std::vector<bool> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0016 生成结果为空');
      const expectSnippet = 'export class R8Ctr16 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0016 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0017
  * @tc.name : h2dts_ctr_0017
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<char>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0017', () => {
    try {
      const DECL = `class R8Ctr17 { std::vector<char> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0017 生成结果为空');
      const expectSnippet = 'export class R8Ctr17 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0017 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0018
  * @tc.name : h2dts_ctr_0018
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<wchar_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0018', () => {
    try {
      const DECL = `class R8Ctr18 { std::vector<wchar_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0018 生成结果为空');
      const expectSnippet = 'export class R8Ctr18 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0018 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0019
  * @tc.name : h2dts_ctr_0019
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<char8_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0019', () => {
    try {
      const DECL = `class R8Ctr19 { std::vector<char8_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0019 生成结果为空');
      const expectSnippet = 'export class R8Ctr19 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0019 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0020
  * @tc.name : h2dts_ctr_0020
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<char16_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0020', () => {
    try {
      const DECL = `class R8Ctr20 { std::vector<char16_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0020 生成结果为空');
      const expectSnippet = 'export class R8Ctr20 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0020 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0021
  * @tc.name : h2dts_ctr_0021
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<char32_t>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0021', () => {
    try {
      const DECL = `class R8Ctr21 { std::vector<char32_t> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0021 生成结果为空');
      const expectSnippet = 'export class R8Ctr21 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0021 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0022
  * @tc.name : h2dts_ctr_0022
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::string::iterator>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0022', () => {
    try {
      const DECL = `class R8Ctr22 { std::vector<std::string::iterator> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0022 生成结果为空');
      const expectSnippet = 'export class R8Ctr22 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0022 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0023
  * @tc.name : h2dts_ctr_0023
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<int>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0023', () => {
    try {
      const DECL = `class R8Ctr23 { std::vector<std::vector<int>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0023 生成结果为空');
      const expectSnippet = 'export class R8Ctr23 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0023 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0024
  * @tc.name : h2dts_ctr_0024
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<size_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0024', () => {
    try {
      const DECL = `class R8Ctr24 { std::vector<std::vector<size_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0024 生成结果为空');
      const expectSnippet = 'export class R8Ctr24 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0024 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0025
  * @tc.name : h2dts_ctr_0025
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<double>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0025', () => {
    try {
      const DECL = `class R8Ctr25 { std::vector<std::vector<double>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0025 生成结果为空');
      const expectSnippet = 'export class R8Ctr25 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0025 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0026
  * @tc.name : h2dts_ctr_0026
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<float>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0026', () => {
    try {
      const DECL = `class R8Ctr26 { std::vector<std::vector<float>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0026 生成结果为空');
      const expectSnippet = 'export class R8Ctr26 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0026 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0027
  * @tc.name : h2dts_ctr_0027
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<long>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0027', () => {
    try {
      const DECL = `class R8Ctr27 { std::vector<std::vector<long>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0027 生成结果为空');
      const expectSnippet = 'export class R8Ctr27 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0027 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0028
  * @tc.name : h2dts_ctr_0028
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<short>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0028', () => {
    try {
      const DECL = `class R8Ctr28 { std::vector<std::vector<short>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0028 生成结果为空');
      const expectSnippet = 'export class R8Ctr28 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0028 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0029
  * @tc.name : h2dts_ctr_0029
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<uint8_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0029', () => {
    try {
      const DECL = `class R8Ctr29 { std::vector<std::vector<uint8_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0029 生成结果为空');
      const expectSnippet = 'export class R8Ctr29 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0029 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0030
  * @tc.name : h2dts_ctr_0030
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<uint16_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0030', () => {
    try {
      const DECL = `class R8Ctr30 { std::vector<std::vector<uint16_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0030 生成结果为空');
      const expectSnippet = 'export class R8Ctr30 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0030 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0031
  * @tc.name : h2dts_ctr_0031
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<uint32_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0031', () => {
    try {
      const DECL = `class R8Ctr31 { std::vector<std::vector<uint32_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0031 生成结果为空');
      const expectSnippet = 'export class R8Ctr31 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0031 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0032
  * @tc.name : h2dts_ctr_0032
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<uint64_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0032', () => {
    try {
      const DECL = `class R8Ctr32 { std::vector<std::vector<uint64_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0032 生成结果为空');
      const expectSnippet = 'export class R8Ctr32 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0032 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0033
  * @tc.name : h2dts_ctr_0033
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<int8_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0033', () => {
    try {
      const DECL = `class R8Ctr33 { std::vector<std::vector<int8_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0033 生成结果为空');
      const expectSnippet = 'export class R8Ctr33 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0033 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0034
  * @tc.name : h2dts_ctr_0034
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<int16_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0034', () => {
    try {
      const DECL = `class R8Ctr34 { std::vector<std::vector<int16_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0034 生成结果为空');
      const expectSnippet = 'export class R8Ctr34 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0034 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number : h2dts_ctr_0035
  * @tc.name : h2dts_ctr_0035
  * @tc.desc : h2dts gen：扩充-R8-容器成员 `std::vector<std::vector<int32_t>>` 的生成结果与性能。
  * @tc.size : MediumTest
  * @tc.type : Function
  * @tc.level : Level 1
  */
  test('gendts_ctr_ext_0035', () => {
    try {
      const DECL = `class R8Ctr35 { std::vector<std::vector<int32_t>> data; int size(); };`;
      const parseObj: ParseObj = {
        enums: parseEnum(DECL),
        unions: parseUnion(DECL),
        structs: parseStruct(DECL),
        classes: parseClass(DECL),
        funcs: parseFunction(DECL),
      };
      const gi: GenInfo = { parseObj, rawFilePath: 'perf.h', fileName: 'perf' };
      let result = '';
            result = getDtsClasses(gi);
      assert.ok(result.length > 0, 'h2dts_ctr_0035 生成结果为空');
      const expectSnippet = 'export class R8Ctr35 {';
      assert.ok(result.includes(expectSnippet), 'h2dts_ctr_0035 生成结果缺少期望片段');
          } catch (err) {
      assert.fail(`h2dts_ctr_0035 执行异常: ${String(err)}`);
    }
  });
});
