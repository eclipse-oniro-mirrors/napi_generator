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

suite('Gendtscpp_mixed_Suite_Ext27', function () {
  /**
  * @tc.number h2dtscpp_gen_1481
  * @tc.name gendtscpp_mix_ext_1481
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1481', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1481(std::deque<int64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1481(std::deque<int64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1481(std::deque<int64_t>::iterator v);`),
        classes: parseClass(`void r7sp1481(std::deque<int64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1481(std::deque<int64_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1481 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1482
  * @tc.name gendtscpp_mix_ext_1482
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1482', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1482(std::deque<unsigned>::iterator v);`),
        unions: parseUnion(`void r7sp1482(std::deque<unsigned>::iterator v);`),
        structs: parseStruct(`void r7sp1482(std::deque<unsigned>::iterator v);`),
        classes: parseClass(`void r7sp1482(std::deque<unsigned>::iterator v);`),
        funcs: parseFunction(`void r7sp1482(std::deque<unsigned>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1482 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1483
  * @tc.name gendtscpp_mix_ext_1483
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1483', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1483(std::deque<bool>::iterator v);`),
        unions: parseUnion(`void r7sp1483(std::deque<bool>::iterator v);`),
        structs: parseStruct(`void r7sp1483(std::deque<bool>::iterator v);`),
        classes: parseClass(`void r7sp1483(std::deque<bool>::iterator v);`),
        funcs: parseFunction(`void r7sp1483(std::deque<bool>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1483 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1484
  * @tc.name gendtscpp_mix_ext_1484
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1484', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1484(std::deque<char>::iterator v);`),
        unions: parseUnion(`void r7sp1484(std::deque<char>::iterator v);`),
        structs: parseStruct(`void r7sp1484(std::deque<char>::iterator v);`),
        classes: parseClass(`void r7sp1484(std::deque<char>::iterator v);`),
        funcs: parseFunction(`void r7sp1484(std::deque<char>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1484 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1485
  * @tc.name gendtscpp_mix_ext_1485
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1485', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1485(std::deque<wchar_t>::iterator v);`),
        unions: parseUnion(`void r7sp1485(std::deque<wchar_t>::iterator v);`),
        structs: parseStruct(`void r7sp1485(std::deque<wchar_t>::iterator v);`),
        classes: parseClass(`void r7sp1485(std::deque<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1485(std::deque<wchar_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1485 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1486
  * @tc.name gendtscpp_mix_ext_1486
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1486', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1486(std::deque<char8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1486(std::deque<char8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1486(std::deque<char8_t>::iterator v);`),
        classes: parseClass(`void r7sp1486(std::deque<char8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1486(std::deque<char8_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1486 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1487
  * @tc.name gendtscpp_mix_ext_1487
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1487', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1487(std::deque<char16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1487(std::deque<char16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1487(std::deque<char16_t>::iterator v);`),
        classes: parseClass(`void r7sp1487(std::deque<char16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1487(std::deque<char16_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1487 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1488
  * @tc.name gendtscpp_mix_ext_1488
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::deque<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1488', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1488(std::deque<char32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1488(std::deque<char32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1488(std::deque<char32_t>::iterator v);`),
        classes: parseClass(`void r7sp1488(std::deque<char32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1488(std::deque<char32_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1488 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1490
  * @tc.name gendtscpp_mix_ext_1490
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1490', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1490(std::list<size_t> v);`),
        unions: parseUnion(`void r7sp1490(std::list<size_t> v);`),
        structs: parseStruct(`void r7sp1490(std::list<size_t> v);`),
        classes: parseClass(`void r7sp1490(std::list<size_t> v);`),
        funcs: parseFunction(`void r7sp1490(std::list<size_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1490 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1491
  * @tc.name gendtscpp_mix_ext_1491
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1491', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1491(std::list<double> v);`),
        unions: parseUnion(`void r7sp1491(std::list<double> v);`),
        structs: parseStruct(`void r7sp1491(std::list<double> v);`),
        classes: parseClass(`void r7sp1491(std::list<double> v);`),
        funcs: parseFunction(`void r7sp1491(std::list<double> v);`),
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
      assert.fail(`h2dtscpp_gen_1491 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1493
  * @tc.name gendtscpp_mix_ext_1493
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1493', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1493(std::list<long> v);`),
        unions: parseUnion(`void r7sp1493(std::list<long> v);`),
        structs: parseStruct(`void r7sp1493(std::list<long> v);`),
        classes: parseClass(`void r7sp1493(std::list<long> v);`),
        funcs: parseFunction(`void r7sp1493(std::list<long> v);`),
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
      assert.fail(`h2dtscpp_gen_1493 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1494
  * @tc.name gendtscpp_mix_ext_1494
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1494', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1494(std::list<short> v);`),
        unions: parseUnion(`void r7sp1494(std::list<short> v);`),
        structs: parseStruct(`void r7sp1494(std::list<short> v);`),
        classes: parseClass(`void r7sp1494(std::list<short> v);`),
        funcs: parseFunction(`void r7sp1494(std::list<short> v);`),
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
      assert.fail(`h2dtscpp_gen_1494 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1495
  * @tc.name gendtscpp_mix_ext_1495
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1495', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1495(std::list<uint8_t> v);`),
        unions: parseUnion(`void r7sp1495(std::list<uint8_t> v);`),
        structs: parseStruct(`void r7sp1495(std::list<uint8_t> v);`),
        classes: parseClass(`void r7sp1495(std::list<uint8_t> v);`),
        funcs: parseFunction(`void r7sp1495(std::list<uint8_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1495 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1496
  * @tc.name gendtscpp_mix_ext_1496
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1496', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1496(std::list<uint16_t> v);`),
        unions: parseUnion(`void r7sp1496(std::list<uint16_t> v);`),
        structs: parseStruct(`void r7sp1496(std::list<uint16_t> v);`),
        classes: parseClass(`void r7sp1496(std::list<uint16_t> v);`),
        funcs: parseFunction(`void r7sp1496(std::list<uint16_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1496 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1497
  * @tc.name gendtscpp_mix_ext_1497
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1497', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1497(std::list<uint32_t> v);`),
        unions: parseUnion(`void r7sp1497(std::list<uint32_t> v);`),
        structs: parseStruct(`void r7sp1497(std::list<uint32_t> v);`),
        classes: parseClass(`void r7sp1497(std::list<uint32_t> v);`),
        funcs: parseFunction(`void r7sp1497(std::list<uint32_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1497 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1498
  * @tc.name gendtscpp_mix_ext_1498
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1498', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1498(std::list<uint64_t> v);`),
        unions: parseUnion(`void r7sp1498(std::list<uint64_t> v);`),
        structs: parseStruct(`void r7sp1498(std::list<uint64_t> v);`),
        classes: parseClass(`void r7sp1498(std::list<uint64_t> v);`),
        funcs: parseFunction(`void r7sp1498(std::list<uint64_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1498 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1499
  * @tc.name gendtscpp_mix_ext_1499
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1499', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1499(std::list<int8_t> v);`),
        unions: parseUnion(`void r7sp1499(std::list<int8_t> v);`),
        structs: parseStruct(`void r7sp1499(std::list<int8_t> v);`),
        classes: parseClass(`void r7sp1499(std::list<int8_t> v);`),
        funcs: parseFunction(`void r7sp1499(std::list<int8_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1499 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1500
  * @tc.name gendtscpp_mix_ext_1500
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1500', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1500(std::list<int16_t> v);`),
        unions: parseUnion(`void r7sp1500(std::list<int16_t> v);`),
        structs: parseStruct(`void r7sp1500(std::list<int16_t> v);`),
        classes: parseClass(`void r7sp1500(std::list<int16_t> v);`),
        funcs: parseFunction(`void r7sp1500(std::list<int16_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1500 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1501
  * @tc.name gendtscpp_mix_ext_1501
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1501', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1501(std::list<int32_t> v);`),
        unions: parseUnion(`void r7sp1501(std::list<int32_t> v);`),
        structs: parseStruct(`void r7sp1501(std::list<int32_t> v);`),
        classes: parseClass(`void r7sp1501(std::list<int32_t> v);`),
        funcs: parseFunction(`void r7sp1501(std::list<int32_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1501 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1502
  * @tc.name gendtscpp_mix_ext_1502
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1502', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1502(std::list<int64_t> v);`),
        unions: parseUnion(`void r7sp1502(std::list<int64_t> v);`),
        structs: parseStruct(`void r7sp1502(std::list<int64_t> v);`),
        classes: parseClass(`void r7sp1502(std::list<int64_t> v);`),
        funcs: parseFunction(`void r7sp1502(std::list<int64_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1502 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1503
  * @tc.name gendtscpp_mix_ext_1503
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1503', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1503(std::list<unsigned> v);`),
        unions: parseUnion(`void r7sp1503(std::list<unsigned> v);`),
        structs: parseStruct(`void r7sp1503(std::list<unsigned> v);`),
        classes: parseClass(`void r7sp1503(std::list<unsigned> v);`),
        funcs: parseFunction(`void r7sp1503(std::list<unsigned> v);`),
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
      assert.fail(`h2dtscpp_gen_1503 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1504
  * @tc.name gendtscpp_mix_ext_1504
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1504', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1504(std::list<bool> v);`),
        unions: parseUnion(`void r7sp1504(std::list<bool> v);`),
        structs: parseStruct(`void r7sp1504(std::list<bool> v);`),
        classes: parseClass(`void r7sp1504(std::list<bool> v);`),
        funcs: parseFunction(`void r7sp1504(std::list<bool> v);`),
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
      assert.fail(`h2dtscpp_gen_1504 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1505
  * @tc.name gendtscpp_mix_ext_1505
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1505', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1505(std::list<char> v);`),
        unions: parseUnion(`void r7sp1505(std::list<char> v);`),
        structs: parseStruct(`void r7sp1505(std::list<char> v);`),
        classes: parseClass(`void r7sp1505(std::list<char> v);`),
        funcs: parseFunction(`void r7sp1505(std::list<char> v);`),
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
      assert.fail(`h2dtscpp_gen_1505 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1506
  * @tc.name gendtscpp_mix_ext_1506
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1506', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1506(std::list<wchar_t> v);`),
        unions: parseUnion(`void r7sp1506(std::list<wchar_t> v);`),
        structs: parseStruct(`void r7sp1506(std::list<wchar_t> v);`),
        classes: parseClass(`void r7sp1506(std::list<wchar_t> v);`),
        funcs: parseFunction(`void r7sp1506(std::list<wchar_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1506 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1507
  * @tc.name gendtscpp_mix_ext_1507
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1507', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1507(std::list<char8_t> v);`),
        unions: parseUnion(`void r7sp1507(std::list<char8_t> v);`),
        structs: parseStruct(`void r7sp1507(std::list<char8_t> v);`),
        classes: parseClass(`void r7sp1507(std::list<char8_t> v);`),
        funcs: parseFunction(`void r7sp1507(std::list<char8_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1507 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1508
  * @tc.name gendtscpp_mix_ext_1508
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1508', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1508(std::list<char16_t> v);`),
        unions: parseUnion(`void r7sp1508(std::list<char16_t> v);`),
        structs: parseStruct(`void r7sp1508(std::list<char16_t> v);`),
        classes: parseClass(`void r7sp1508(std::list<char16_t> v);`),
        funcs: parseFunction(`void r7sp1508(std::list<char16_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1508 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1509
  * @tc.name gendtscpp_mix_ext_1509
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1509', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1509(std::list<char32_t> v);`),
        unions: parseUnion(`void r7sp1509(std::list<char32_t> v);`),
        structs: parseStruct(`void r7sp1509(std::list<char32_t> v);`),
        classes: parseClass(`void r7sp1509(std::list<char32_t> v);`),
        funcs: parseFunction(`void r7sp1509(std::list<char32_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1509 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1510
  * @tc.name gendtscpp_mix_ext_1510
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1510', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1510(std::list<int>::iterator v);`),
        unions: parseUnion(`void r7sp1510(std::list<int>::iterator v);`),
        structs: parseStruct(`void r7sp1510(std::list<int>::iterator v);`),
        classes: parseClass(`void r7sp1510(std::list<int>::iterator v);`),
        funcs: parseFunction(`void r7sp1510(std::list<int>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1510 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1511
  * @tc.name gendtscpp_mix_ext_1511
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1511', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1511(std::list<size_t>::iterator v);`),
        unions: parseUnion(`void r7sp1511(std::list<size_t>::iterator v);`),
        structs: parseStruct(`void r7sp1511(std::list<size_t>::iterator v);`),
        classes: parseClass(`void r7sp1511(std::list<size_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1511(std::list<size_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1511 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1512
  * @tc.name gendtscpp_mix_ext_1512
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1512', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1512(std::list<double>::iterator v);`),
        unions: parseUnion(`void r7sp1512(std::list<double>::iterator v);`),
        structs: parseStruct(`void r7sp1512(std::list<double>::iterator v);`),
        classes: parseClass(`void r7sp1512(std::list<double>::iterator v);`),
        funcs: parseFunction(`void r7sp1512(std::list<double>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1512 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1513
  * @tc.name gendtscpp_mix_ext_1513
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1513', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1513(std::list<float>::iterator v);`),
        unions: parseUnion(`void r7sp1513(std::list<float>::iterator v);`),
        structs: parseStruct(`void r7sp1513(std::list<float>::iterator v);`),
        classes: parseClass(`void r7sp1513(std::list<float>::iterator v);`),
        funcs: parseFunction(`void r7sp1513(std::list<float>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1513 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1514
  * @tc.name gendtscpp_mix_ext_1514
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1514', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1514(std::list<long>::iterator v);`),
        unions: parseUnion(`void r7sp1514(std::list<long>::iterator v);`),
        structs: parseStruct(`void r7sp1514(std::list<long>::iterator v);`),
        classes: parseClass(`void r7sp1514(std::list<long>::iterator v);`),
        funcs: parseFunction(`void r7sp1514(std::list<long>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1514 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1515
  * @tc.name gendtscpp_mix_ext_1515
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::list<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1515', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1515(std::list<short>::iterator v);`),
        unions: parseUnion(`void r7sp1515(std::list<short>::iterator v);`),
        structs: parseStruct(`void r7sp1515(std::list<short>::iterator v);`),
        classes: parseClass(`void r7sp1515(std::list<short>::iterator v);`),
        funcs: parseFunction(`void r7sp1515(std::list<short>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1515 执行异常: ${String(err)}`);
    }
  });
});
