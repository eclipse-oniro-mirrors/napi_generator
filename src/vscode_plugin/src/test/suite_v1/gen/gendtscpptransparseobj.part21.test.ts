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

suite('Gendtscpp_transParseObj_Suite_Ext21', function () {
  /**
  * @tc.number h2dtscpp_tpo_0701
  * @tc.name gendtscpp_tpo_ext_0701
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::pair<double, wchar_t, uint32_t, float, long, short, char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0701', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp701(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);`),
        unions: parseUnion(`void r8sp701(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);`),
        structs: parseStruct(`void r8sp701(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);`),
        classes: parseClass(`void r8sp701(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);`),
        funcs: parseFunction(`void r8sp701(std::pair<double, wchar_t, uint32_t, float, long, short, char32_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0701 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0702
  * @tc.name gendtscpp_tpo_ext_0702
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0702', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp702(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`),
        unions: parseUnion(`void r8sp702(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`),
        structs: parseStruct(`void r8sp702(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`),
        classes: parseClass(`void r8sp702(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`),
        funcs: parseFunction(`void r8sp702(std::pair<char16_t, uint16_t, char8_t, uint8_t, unsigned> v);`),
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
      assert.fail(`h2dtscpp_tpo_0702 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0703
  * @tc.name gendtscpp_tpo_ext_0703
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::complex<int, double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0703', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp703(std::complex<int, double> v);`),
        unions: parseUnion(`void r8sp703(std::complex<int, double> v);`),
        structs: parseStruct(`void r8sp703(std::complex<int, double> v);`),
        classes: parseClass(`void r8sp703(std::complex<int, double> v);`),
        funcs: parseFunction(`void r8sp703(std::complex<int, double> v);`),
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
      assert.fail(`h2dtscpp_tpo_0703 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0704
  * @tc.name gendtscpp_tpo_ext_0704
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::complex<float, int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0704', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp704(std::complex<float, int32_t> v);`),
        unions: parseUnion(`void r8sp704(std::complex<float, int32_t> v);`),
        structs: parseStruct(`void r8sp704(std::complex<float, int32_t> v);`),
        classes: parseClass(`void r8sp704(std::complex<float, int32_t> v);`),
        funcs: parseFunction(`void r8sp704(std::complex<float, int32_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0704 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0705
  * @tc.name gendtscpp_tpo_ext_0705
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::complex<long, uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0705', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp705(std::complex<long, uint32_t> v);`),
        unions: parseUnion(`void r8sp705(std::complex<long, uint32_t> v);`),
        structs: parseStruct(`void r8sp705(std::complex<long, uint32_t> v);`),
        classes: parseClass(`void r8sp705(std::complex<long, uint32_t> v);`),
        funcs: parseFunction(`void r8sp705(std::complex<long, uint32_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0705 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0706
  * @tc.name gendtscpp_tpo_ext_0706
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::complex<unsigned, short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0706', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp706(std::complex<unsigned, short> v);`),
        unions: parseUnion(`void r8sp706(std::complex<unsigned, short> v);`),
        structs: parseStruct(`void r8sp706(std::complex<unsigned, short> v);`),
        classes: parseClass(`void r8sp706(std::complex<unsigned, short> v);`),
        funcs: parseFunction(`void r8sp706(std::complex<unsigned, short> v);`),
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
      assert.fail(`h2dtscpp_tpo_0706 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0707
  * @tc.name gendtscpp_tpo_ext_0707
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::complex<uint8_t, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0707', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp707(std::complex<uint8_t, size_t> v);`),
        unions: parseUnion(`void r8sp707(std::complex<uint8_t, size_t> v);`),
        structs: parseStruct(`void r8sp707(std::complex<uint8_t, size_t> v);`),
        classes: parseClass(`void r8sp707(std::complex<uint8_t, size_t> v);`),
        funcs: parseFunction(`void r8sp707(std::complex<uint8_t, size_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0707 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0708
  * @tc.name gendtscpp_tpo_ext_0708
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::complex<uint16_t, uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0708', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp708(std::complex<uint16_t, uint64_t> v);`),
        unions: parseUnion(`void r8sp708(std::complex<uint16_t, uint64_t> v);`),
        structs: parseStruct(`void r8sp708(std::complex<uint16_t, uint64_t> v);`),
        classes: parseClass(`void r8sp708(std::complex<uint16_t, uint64_t> v);`),
        funcs: parseFunction(`void r8sp708(std::complex<uint16_t, uint64_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0708 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0709
  * @tc.name gendtscpp_tpo_ext_0709
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::complex<int8_t, int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0709', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp709(std::complex<int8_t, int16_t> v);`),
        unions: parseUnion(`void r8sp709(std::complex<int8_t, int16_t> v);`),
        structs: parseStruct(`void r8sp709(std::complex<int8_t, int16_t> v);`),
        classes: parseClass(`void r8sp709(std::complex<int8_t, int16_t> v);`),
        funcs: parseFunction(`void r8sp709(std::complex<int8_t, int16_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0709 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0710
  * @tc.name gendtscpp_tpo_ext_0710
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::time_t` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0710', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp710(std::time_t v);`),
        unions: parseUnion(`void r8sp710(std::time_t v);`),
        structs: parseStruct(`void r8sp710(std::time_t v);`),
        classes: parseClass(`void r8sp710(std::time_t v);`),
        funcs: parseFunction(`void r8sp710(std::time_t v);`),
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
      assert.fail(`h2dtscpp_tpo_0710 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0711
  * @tc.name gendtscpp_tpo_ext_0711
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::clock_t` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0711', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp711(std::clock_t v);`),
        unions: parseUnion(`void r8sp711(std::clock_t v);`),
        structs: parseStruct(`void r8sp711(std::clock_t v);`),
        classes: parseClass(`void r8sp711(std::clock_t v);`),
        funcs: parseFunction(`void r8sp711(std::clock_t v);`),
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
      assert.fail(`h2dtscpp_tpo_0711 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0712
  * @tc.name gendtscpp_tpo_ext_0712
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::tm` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0712', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp712(std::tm v);`),
        unions: parseUnion(`void r8sp712(std::tm v);`),
        structs: parseStruct(`void r8sp712(std::tm v);`),
        classes: parseClass(`void r8sp712(std::tm v);`),
        funcs: parseFunction(`void r8sp712(std::tm v);`),
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
      assert.fail(`h2dtscpp_tpo_0712 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0713
  * @tc.name gendtscpp_tpo_ext_0713
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::chrono::duration<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0713', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp713(std::chrono::duration<double> v);`),
        unions: parseUnion(`void r8sp713(std::chrono::duration<double> v);`),
        structs: parseStruct(`void r8sp713(std::chrono::duration<double> v);`),
        classes: parseClass(`void r8sp713(std::chrono::duration<double> v);`),
        funcs: parseFunction(`void r8sp713(std::chrono::duration<double> v);`),
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
      assert.fail(`h2dtscpp_tpo_0713 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0715
  * @tc.name gendtscpp_tpo_ext_0715
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::chrono::steady_clock::time_point` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0715', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp715(std::chrono::steady_clock::time_point v);`),
        unions: parseUnion(`void r8sp715(std::chrono::steady_clock::time_point v);`),
        structs: parseStruct(`void r8sp715(std::chrono::steady_clock::time_point v);`),
        classes: parseClass(`void r8sp715(std::chrono::steady_clock::time_point v);`),
        funcs: parseFunction(`void r8sp715(std::chrono::steady_clock::time_point v);`),
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
      assert.fail(`h2dtscpp_tpo_0715 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0718
  * @tc.name gendtscpp_tpo_ext_0718
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::chrono::microseconds` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0718', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp718(std::chrono::microseconds v);`),
        unions: parseUnion(`void r8sp718(std::chrono::microseconds v);`),
        structs: parseStruct(`void r8sp718(std::chrono::microseconds v);`),
        classes: parseClass(`void r8sp718(std::chrono::microseconds v);`),
        funcs: parseFunction(`void r8sp718(std::chrono::microseconds v);`),
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
      assert.fail(`h2dtscpp_tpo_0718 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0719
  * @tc.name gendtscpp_tpo_ext_0719
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::chrono::nanoseconds` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0719', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp719(std::chrono::nanoseconds v);`),
        unions: parseUnion(`void r8sp719(std::chrono::nanoseconds v);`),
        structs: parseStruct(`void r8sp719(std::chrono::nanoseconds v);`),
        classes: parseClass(`void r8sp719(std::chrono::nanoseconds v);`),
        funcs: parseFunction(`void r8sp719(std::chrono::nanoseconds v);`),
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
      assert.fail(`h2dtscpp_tpo_0719 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0720
  * @tc.name gendtscpp_tpo_ext_0720
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::time` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0720', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp720(std::time v);`),
        unions: parseUnion(`void r8sp720(std::time v);`),
        structs: parseStruct(`void r8sp720(std::time v);`),
        classes: parseClass(`void r8sp720(std::time v);`),
        funcs: parseFunction(`void r8sp720(std::time v);`),
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
      assert.fail(`h2dtscpp_tpo_0720 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0721
  * @tc.name gendtscpp_tpo_ext_0721
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::strftime` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0721', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp721(std::strftime v);`),
        unions: parseUnion(`void r8sp721(std::strftime v);`),
        structs: parseStruct(`void r8sp721(std::strftime v);`),
        classes: parseClass(`void r8sp721(std::strftime v);`),
        funcs: parseFunction(`void r8sp721(std::strftime v);`),
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
      assert.fail(`h2dtscpp_tpo_0721 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0722
  * @tc.name gendtscpp_tpo_ext_0722
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::localtime` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0722', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp722(std::localtime v);`),
        unions: parseUnion(`void r8sp722(std::localtime v);`),
        structs: parseStruct(`void r8sp722(std::localtime v);`),
        classes: parseClass(`void r8sp722(std::localtime v);`),
        funcs: parseFunction(`void r8sp722(std::localtime v);`),
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
      assert.fail(`h2dtscpp_tpo_0722 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0723
  * @tc.name gendtscpp_tpo_ext_0723
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::gmtime` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0723', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp723(std::gmtime v);`),
        unions: parseUnion(`void r8sp723(std::gmtime v);`),
        structs: parseStruct(`void r8sp723(std::gmtime v);`),
        classes: parseClass(`void r8sp723(std::gmtime v);`),
        funcs: parseFunction(`void r8sp723(std::gmtime v);`),
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
      assert.fail(`h2dtscpp_tpo_0723 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0724
  * @tc.name gendtscpp_tpo_ext_0724
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::mktime` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0724', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp724(std::mktime v);`),
        unions: parseUnion(`void r8sp724(std::mktime v);`),
        structs: parseStruct(`void r8sp724(std::mktime v);`),
        classes: parseClass(`void r8sp724(std::mktime v);`),
        funcs: parseFunction(`void r8sp724(std::mktime v);`),
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
      assert.fail(`h2dtscpp_tpo_0724 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0725
  * @tc.name gendtscpp_tpo_ext_0725
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<int(int, int)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0725', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp725(std::function<int(int, int)> v);`),
        unions: parseUnion(`void r8sp725(std::function<int(int, int)> v);`),
        structs: parseStruct(`void r8sp725(std::function<int(int, int)> v);`),
        classes: parseClass(`void r8sp725(std::function<int(int, int)> v);`),
        funcs: parseFunction(`void r8sp725(std::function<int(int, int)> v);`),
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
      assert.fail(`h2dtscpp_tpo_0725 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0726
  * @tc.name gendtscpp_tpo_ext_0726
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<void(long, long)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0726', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp726(std::function<void(long, long)> v);`),
        unions: parseUnion(`void r8sp726(std::function<void(long, long)> v);`),
        structs: parseStruct(`void r8sp726(std::function<void(long, long)> v);`),
        classes: parseClass(`void r8sp726(std::function<void(long, long)> v);`),
        funcs: parseFunction(`void r8sp726(std::function<void(long, long)> v);`),
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
      assert.fail(`h2dtscpp_tpo_0726 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0728
  * @tc.name gendtscpp_tpo_ext_0728
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<int(float)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0728', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp728(std::function<int(float)> v);`),
        unions: parseUnion(`void r8sp728(std::function<int(float)> v);`),
        structs: parseStruct(`void r8sp728(std::function<int(float)> v);`),
        classes: parseClass(`void r8sp728(std::function<int(float)> v);`),
        funcs: parseFunction(`void r8sp728(std::function<int(float)> v);`),
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
      assert.fail(`h2dtscpp_tpo_0728 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0729
  * @tc.name gendtscpp_tpo_ext_0729
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<void(double)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0729', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp729(std::function<void(double)> v);`),
        unions: parseUnion(`void r8sp729(std::function<void(double)> v);`),
        structs: parseStruct(`void r8sp729(std::function<void(double)> v);`),
        classes: parseClass(`void r8sp729(std::function<void(double)> v);`),
        funcs: parseFunction(`void r8sp729(std::function<void(double)> v);`),
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
      assert.fail(`h2dtscpp_tpo_0729 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0730
  * @tc.name gendtscpp_tpo_ext_0730
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<void(char, short, short)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0730', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp730(std::function<void(char, short, short)> v);`),
        unions: parseUnion(`void r8sp730(std::function<void(char, short, short)> v);`),
        structs: parseStruct(`void r8sp730(std::function<void(char, short, short)> v);`),
        classes: parseClass(`void r8sp730(std::function<void(char, short, short)> v);`),
        funcs: parseFunction(`void r8sp730(std::function<void(char, short, short)> v);`),
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
      assert.fail(`h2dtscpp_tpo_0730 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0731
  * @tc.name gendtscpp_tpo_ext_0731
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<void(char16_t, uint16_t)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0731', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp731(std::function<void(char16_t, uint16_t)> v);`),
        unions: parseUnion(`void r8sp731(std::function<void(char16_t, uint16_t)> v);`),
        structs: parseStruct(`void r8sp731(std::function<void(char16_t, uint16_t)> v);`),
        classes: parseClass(`void r8sp731(std::function<void(char16_t, uint16_t)> v);`),
        funcs: parseFunction(`void r8sp731(std::function<void(char16_t, uint16_t)> v);`),
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
      assert.fail(`h2dtscpp_tpo_0731 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0732
  * @tc.name gendtscpp_tpo_ext_0732
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<unsigned(char64_t, size_t)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0732', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp732(std::function<unsigned(char64_t, size_t)> v);`),
        unions: parseUnion(`void r8sp732(std::function<unsigned(char64_t, size_t)> v);`),
        structs: parseStruct(`void r8sp732(std::function<unsigned(char64_t, size_t)> v);`),
        classes: parseClass(`void r8sp732(std::function<unsigned(char64_t, size_t)> v);`),
        funcs: parseFunction(`void r8sp732(std::function<unsigned(char64_t, size_t)> v);`),
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
      assert.fail(`h2dtscpp_tpo_0732 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0733
  * @tc.name gendtscpp_tpo_ext_0733
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<char32_t(char8_t, int32_t)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0733', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp733(std::function<char32_t(char8_t, int32_t)> v);`),
        unions: parseUnion(`void r8sp733(std::function<char32_t(char8_t, int32_t)> v);`),
        structs: parseStruct(`void r8sp733(std::function<char32_t(char8_t, int32_t)> v);`),
        classes: parseClass(`void r8sp733(std::function<char32_t(char8_t, int32_t)> v);`),
        funcs: parseFunction(`void r8sp733(std::function<char32_t(char8_t, int32_t)> v);`),
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
      assert.fail(`h2dtscpp_tpo_0733 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0734
  * @tc.name gendtscpp_tpo_ext_0734
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<uint64_t(wchar_t, uint32_t)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0734', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp734(std::function<uint64_t(wchar_t, uint32_t)> v);`),
        unions: parseUnion(`void r8sp734(std::function<uint64_t(wchar_t, uint32_t)> v);`),
        structs: parseStruct(`void r8sp734(std::function<uint64_t(wchar_t, uint32_t)> v);`),
        classes: parseClass(`void r8sp734(std::function<uint64_t(wchar_t, uint32_t)> v);`),
        funcs: parseFunction(`void r8sp734(std::function<uint64_t(wchar_t, uint32_t)> v);`),
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
      assert.fail(`h2dtscpp_tpo_0734 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0735
  * @tc.name gendtscpp_tpo_ext_0735
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::function<int64_t(int8_t, int16_t)>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0735', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp735(std::function<int64_t(int8_t, int16_t)> v);`),
        unions: parseUnion(`void r8sp735(std::function<int64_t(int8_t, int16_t)> v);`),
        structs: parseStruct(`void r8sp735(std::function<int64_t(int8_t, int16_t)> v);`),
        classes: parseClass(`void r8sp735(std::function<int64_t(int8_t, int16_t)> v);`),
        funcs: parseFunction(`void r8sp735(std::function<int64_t(int8_t, int16_t)> v);`),
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
      assert.fail(`h2dtscpp_tpo_0735 执行异常: ${String(err)}`);
    }
  });
});
