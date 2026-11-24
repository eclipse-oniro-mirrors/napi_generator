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
import { transParseObj } from '../../../gen/gendtscpp';
import { ParseObj } from '../../../gen/datatype';

suite('Gendtscpp_transParseObj_Suite_Ext18', function () {
  /**
  * @tc.number h2dtscpp_tpo_0596
  * @tc.name gendtscpp_tpo_ext_0596
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0596', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp596(std::unordered_set<long>::iterator v);`),
        unions: parseUnion(`void r8sp596(std::unordered_set<long>::iterator v);`),
        structs: parseStruct(`void r8sp596(std::unordered_set<long>::iterator v);`),
        classes: parseClass(`void r8sp596(std::unordered_set<long>::iterator v);`),
        funcs: parseFunction(`void r8sp596(std::unordered_set<long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0596 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0597
  * @tc.name gendtscpp_tpo_ext_0597
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0597', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp597(std::unordered_set<short>::iterator v);`),
        unions: parseUnion(`void r8sp597(std::unordered_set<short>::iterator v);`),
        structs: parseStruct(`void r8sp597(std::unordered_set<short>::iterator v);`),
        classes: parseClass(`void r8sp597(std::unordered_set<short>::iterator v);`),
        funcs: parseFunction(`void r8sp597(std::unordered_set<short>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0597 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0598
  * @tc.name gendtscpp_tpo_ext_0598
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0598', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp598(std::unordered_set<uint8_t>::iterator v);`),
        unions: parseUnion(`void r8sp598(std::unordered_set<uint8_t>::iterator v);`),
        structs: parseStruct(`void r8sp598(std::unordered_set<uint8_t>::iterator v);`),
        classes: parseClass(`void r8sp598(std::unordered_set<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp598(std::unordered_set<uint8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0598 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0599
  * @tc.name gendtscpp_tpo_ext_0599
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0599', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp599(std::unordered_set<uint16_t>::iterator v);`),
        unions: parseUnion(`void r8sp599(std::unordered_set<uint16_t>::iterator v);`),
        structs: parseStruct(`void r8sp599(std::unordered_set<uint16_t>::iterator v);`),
        classes: parseClass(`void r8sp599(std::unordered_set<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp599(std::unordered_set<uint16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0599 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0600
  * @tc.name gendtscpp_tpo_ext_0600
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0600', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp600(std::unordered_set<uint32_t>::iterator v);`),
        unions: parseUnion(`void r8sp600(std::unordered_set<uint32_t>::iterator v);`),
        structs: parseStruct(`void r8sp600(std::unordered_set<uint32_t>::iterator v);`),
        classes: parseClass(`void r8sp600(std::unordered_set<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp600(std::unordered_set<uint32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0600 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0601
  * @tc.name gendtscpp_tpo_ext_0601
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0601', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp601(std::unordered_set<uint64_t>::iterator v);`),
        unions: parseUnion(`void r8sp601(std::unordered_set<uint64_t>::iterator v);`),
        structs: parseStruct(`void r8sp601(std::unordered_set<uint64_t>::iterator v);`),
        classes: parseClass(`void r8sp601(std::unordered_set<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r8sp601(std::unordered_set<uint64_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0601 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0602
  * @tc.name gendtscpp_tpo_ext_0602
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0602', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp602(std::unordered_set<int8_t>::iterator v);`),
        unions: parseUnion(`void r8sp602(std::unordered_set<int8_t>::iterator v);`),
        structs: parseStruct(`void r8sp602(std::unordered_set<int8_t>::iterator v);`),
        classes: parseClass(`void r8sp602(std::unordered_set<int8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp602(std::unordered_set<int8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0602 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0603
  * @tc.name gendtscpp_tpo_ext_0603
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0603', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp603(std::unordered_set<int16_t>::iterator v);`),
        unions: parseUnion(`void r8sp603(std::unordered_set<int16_t>::iterator v);`),
        structs: parseStruct(`void r8sp603(std::unordered_set<int16_t>::iterator v);`),
        classes: parseClass(`void r8sp603(std::unordered_set<int16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp603(std::unordered_set<int16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0603 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0604
  * @tc.name gendtscpp_tpo_ext_0604
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0604', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp604(std::unordered_set<int32_t>::iterator v);`),
        unions: parseUnion(`void r8sp604(std::unordered_set<int32_t>::iterator v);`),
        structs: parseStruct(`void r8sp604(std::unordered_set<int32_t>::iterator v);`),
        classes: parseClass(`void r8sp604(std::unordered_set<int32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp604(std::unordered_set<int32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0604 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0605
  * @tc.name gendtscpp_tpo_ext_0605
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0605', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp605(std::unordered_set<int64_t>::iterator v);`),
        unions: parseUnion(`void r8sp605(std::unordered_set<int64_t>::iterator v);`),
        structs: parseStruct(`void r8sp605(std::unordered_set<int64_t>::iterator v);`),
        classes: parseClass(`void r8sp605(std::unordered_set<int64_t>::iterator v);`),
        funcs: parseFunction(`void r8sp605(std::unordered_set<int64_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0605 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0606
  * @tc.name gendtscpp_tpo_ext_0606
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0606', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp606(std::unordered_set<unsigned>::iterator v);`),
        unions: parseUnion(`void r8sp606(std::unordered_set<unsigned>::iterator v);`),
        structs: parseStruct(`void r8sp606(std::unordered_set<unsigned>::iterator v);`),
        classes: parseClass(`void r8sp606(std::unordered_set<unsigned>::iterator v);`),
        funcs: parseFunction(`void r8sp606(std::unordered_set<unsigned>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0606 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0607
  * @tc.name gendtscpp_tpo_ext_0607
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0607', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp607(std::unordered_set<bool>::iterator v);`),
        unions: parseUnion(`void r8sp607(std::unordered_set<bool>::iterator v);`),
        structs: parseStruct(`void r8sp607(std::unordered_set<bool>::iterator v);`),
        classes: parseClass(`void r8sp607(std::unordered_set<bool>::iterator v);`),
        funcs: parseFunction(`void r8sp607(std::unordered_set<bool>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0607 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0608
  * @tc.name gendtscpp_tpo_ext_0608
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0608', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp608(std::unordered_set<char>::iterator v);`),
        unions: parseUnion(`void r8sp608(std::unordered_set<char>::iterator v);`),
        structs: parseStruct(`void r8sp608(std::unordered_set<char>::iterator v);`),
        classes: parseClass(`void r8sp608(std::unordered_set<char>::iterator v);`),
        funcs: parseFunction(`void r8sp608(std::unordered_set<char>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0608 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0609
  * @tc.name gendtscpp_tpo_ext_0609
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0609', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp609(std::unordered_set<wchar_t>::iterator v);`),
        unions: parseUnion(`void r8sp609(std::unordered_set<wchar_t>::iterator v);`),
        structs: parseStruct(`void r8sp609(std::unordered_set<wchar_t>::iterator v);`),
        classes: parseClass(`void r8sp609(std::unordered_set<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r8sp609(std::unordered_set<wchar_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0609 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0610
  * @tc.name gendtscpp_tpo_ext_0610
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0610', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp610(std::unordered_set<char8_t>::iterator v);`),
        unions: parseUnion(`void r8sp610(std::unordered_set<char8_t>::iterator v);`),
        structs: parseStruct(`void r8sp610(std::unordered_set<char8_t>::iterator v);`),
        classes: parseClass(`void r8sp610(std::unordered_set<char8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp610(std::unordered_set<char8_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0610 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0611
  * @tc.name gendtscpp_tpo_ext_0611
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0611', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp611(std::unordered_set<char16_t>::iterator v);`),
        unions: parseUnion(`void r8sp611(std::unordered_set<char16_t>::iterator v);`),
        structs: parseStruct(`void r8sp611(std::unordered_set<char16_t>::iterator v);`),
        classes: parseClass(`void r8sp611(std::unordered_set<char16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp611(std::unordered_set<char16_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0611 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0612
  * @tc.name gendtscpp_tpo_ext_0612
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0612', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp612(std::unordered_set<char32_t>::iterator v);`),
        unions: parseUnion(`void r8sp612(std::unordered_set<char32_t>::iterator v);`),
        structs: parseStruct(`void r8sp612(std::unordered_set<char32_t>::iterator v);`),
        classes: parseClass(`void r8sp612(std::unordered_set<char32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp612(std::unordered_set<char32_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0612 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0614
  * @tc.name gendtscpp_tpo_ext_0614
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0614', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp614(std::multiset<size_t> v);`),
        unions: parseUnion(`void r8sp614(std::multiset<size_t> v);`),
        structs: parseStruct(`void r8sp614(std::multiset<size_t> v);`),
        classes: parseClass(`void r8sp614(std::multiset<size_t> v);`),
        funcs: parseFunction(`void r8sp614(std::multiset<size_t> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0614 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0615
  * @tc.name gendtscpp_tpo_ext_0615
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0615', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp615(std::multiset<double> v);`),
        unions: parseUnion(`void r8sp615(std::multiset<double> v);`),
        structs: parseStruct(`void r8sp615(std::multiset<double> v);`),
        classes: parseClass(`void r8sp615(std::multiset<double> v);`),
        funcs: parseFunction(`void r8sp615(std::multiset<double> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0615 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0616
  * @tc.name gendtscpp_tpo_ext_0616
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0616', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp616(std::multiset<float> v);`),
        unions: parseUnion(`void r8sp616(std::multiset<float> v);`),
        structs: parseStruct(`void r8sp616(std::multiset<float> v);`),
        classes: parseClass(`void r8sp616(std::multiset<float> v);`),
        funcs: parseFunction(`void r8sp616(std::multiset<float> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0616 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0617
  * @tc.name gendtscpp_tpo_ext_0617
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0617', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp617(std::multiset<long> v);`),
        unions: parseUnion(`void r8sp617(std::multiset<long> v);`),
        structs: parseStruct(`void r8sp617(std::multiset<long> v);`),
        classes: parseClass(`void r8sp617(std::multiset<long> v);`),
        funcs: parseFunction(`void r8sp617(std::multiset<long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0617 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0618
  * @tc.name gendtscpp_tpo_ext_0618
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0618', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp618(std::multiset<short> v);`),
        unions: parseUnion(`void r8sp618(std::multiset<short> v);`),
        structs: parseStruct(`void r8sp618(std::multiset<short> v);`),
        classes: parseClass(`void r8sp618(std::multiset<short> v);`),
        funcs: parseFunction(`void r8sp618(std::multiset<short> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0618 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0619
  * @tc.name gendtscpp_tpo_ext_0619
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0619', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp619(std::multiset<uint8_t> v);`),
        unions: parseUnion(`void r8sp619(std::multiset<uint8_t> v);`),
        structs: parseStruct(`void r8sp619(std::multiset<uint8_t> v);`),
        classes: parseClass(`void r8sp619(std::multiset<uint8_t> v);`),
        funcs: parseFunction(`void r8sp619(std::multiset<uint8_t> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0619 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0620
  * @tc.name gendtscpp_tpo_ext_0620
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0620', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp620(std::multiset<uint16_t> v);`),
        unions: parseUnion(`void r8sp620(std::multiset<uint16_t> v);`),
        structs: parseStruct(`void r8sp620(std::multiset<uint16_t> v);`),
        classes: parseClass(`void r8sp620(std::multiset<uint16_t> v);`),
        funcs: parseFunction(`void r8sp620(std::multiset<uint16_t> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0620 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0621
  * @tc.name gendtscpp_tpo_ext_0621
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0621', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp621(std::multiset<uint32_t> v);`),
        unions: parseUnion(`void r8sp621(std::multiset<uint32_t> v);`),
        structs: parseStruct(`void r8sp621(std::multiset<uint32_t> v);`),
        classes: parseClass(`void r8sp621(std::multiset<uint32_t> v);`),
        funcs: parseFunction(`void r8sp621(std::multiset<uint32_t> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0621 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0622
  * @tc.name gendtscpp_tpo_ext_0622
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0622', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp622(std::multiset<uint64_t> v);`),
        unions: parseUnion(`void r8sp622(std::multiset<uint64_t> v);`),
        structs: parseStruct(`void r8sp622(std::multiset<uint64_t> v);`),
        classes: parseClass(`void r8sp622(std::multiset<uint64_t> v);`),
        funcs: parseFunction(`void r8sp622(std::multiset<uint64_t> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0622 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0623
  * @tc.name gendtscpp_tpo_ext_0623
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0623', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp623(std::multiset<int8_t> v);`),
        unions: parseUnion(`void r8sp623(std::multiset<int8_t> v);`),
        structs: parseStruct(`void r8sp623(std::multiset<int8_t> v);`),
        classes: parseClass(`void r8sp623(std::multiset<int8_t> v);`),
        funcs: parseFunction(`void r8sp623(std::multiset<int8_t> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0623 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0624
  * @tc.name gendtscpp_tpo_ext_0624
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0624', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp624(std::multiset<int16_t> v);`),
        unions: parseUnion(`void r8sp624(std::multiset<int16_t> v);`),
        structs: parseStruct(`void r8sp624(std::multiset<int16_t> v);`),
        classes: parseClass(`void r8sp624(std::multiset<int16_t> v);`),
        funcs: parseFunction(`void r8sp624(std::multiset<int16_t> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0624 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0625
  * @tc.name gendtscpp_tpo_ext_0625
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0625', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp625(std::multiset<int32_t> v);`),
        unions: parseUnion(`void r8sp625(std::multiset<int32_t> v);`),
        structs: parseStruct(`void r8sp625(std::multiset<int32_t> v);`),
        classes: parseClass(`void r8sp625(std::multiset<int32_t> v);`),
        funcs: parseFunction(`void r8sp625(std::multiset<int32_t> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0625 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0626
  * @tc.name gendtscpp_tpo_ext_0626
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0626', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp626(std::multiset<int64_t> v);`),
        unions: parseUnion(`void r8sp626(std::multiset<int64_t> v);`),
        structs: parseStruct(`void r8sp626(std::multiset<int64_t> v);`),
        classes: parseClass(`void r8sp626(std::multiset<int64_t> v);`),
        funcs: parseFunction(`void r8sp626(std::multiset<int64_t> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0626 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0627
  * @tc.name gendtscpp_tpo_ext_0627
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0627', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp627(std::multiset<unsigned> v);`),
        unions: parseUnion(`void r8sp627(std::multiset<unsigned> v);`),
        structs: parseStruct(`void r8sp627(std::multiset<unsigned> v);`),
        classes: parseClass(`void r8sp627(std::multiset<unsigned> v);`),
        funcs: parseFunction(`void r8sp627(std::multiset<unsigned> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0627 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0628
  * @tc.name gendtscpp_tpo_ext_0628
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0628', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp628(std::multiset<bool> v);`),
        unions: parseUnion(`void r8sp628(std::multiset<bool> v);`),
        structs: parseStruct(`void r8sp628(std::multiset<bool> v);`),
        classes: parseClass(`void r8sp628(std::multiset<bool> v);`),
        funcs: parseFunction(`void r8sp628(std::multiset<bool> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0628 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0629
  * @tc.name gendtscpp_tpo_ext_0629
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0629', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp629(std::multiset<char> v);`),
        unions: parseUnion(`void r8sp629(std::multiset<char> v);`),
        structs: parseStruct(`void r8sp629(std::multiset<char> v);`),
        classes: parseClass(`void r8sp629(std::multiset<char> v);`),
        funcs: parseFunction(`void r8sp629(std::multiset<char> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0629 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0630
  * @tc.name gendtscpp_tpo_ext_0630
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0630', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp630(std::multiset<wchar_t> v);`),
        unions: parseUnion(`void r8sp630(std::multiset<wchar_t> v);`),
        structs: parseStruct(`void r8sp630(std::multiset<wchar_t> v);`),
        classes: parseClass(`void r8sp630(std::multiset<wchar_t> v);`),
        funcs: parseFunction(`void r8sp630(std::multiset<wchar_t> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0630 执行异常: ${String(err)}`);
    }
  });
});
