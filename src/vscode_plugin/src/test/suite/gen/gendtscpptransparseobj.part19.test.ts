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

suite('Gendtscpp_transParseObj_Suite_Ext19', function () {
  /**
  * @tc.number h2dtscpp_tpo_0631
  * @tc.name gendtscpp_tpo_ext_0631
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0631', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp631(std::multiset<char8_t> v);`),
        unions: parseUnion(`void r8sp631(std::multiset<char8_t> v);`),
        structs: parseStruct(`void r8sp631(std::multiset<char8_t> v);`),
        classes: parseClass(`void r8sp631(std::multiset<char8_t> v);`),
        funcs: parseFunction(`void r8sp631(std::multiset<char8_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0631 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0632
  * @tc.name gendtscpp_tpo_ext_0632
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0632', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp632(std::multiset<char16_t> v);`),
        unions: parseUnion(`void r8sp632(std::multiset<char16_t> v);`),
        structs: parseStruct(`void r8sp632(std::multiset<char16_t> v);`),
        classes: parseClass(`void r8sp632(std::multiset<char16_t> v);`),
        funcs: parseFunction(`void r8sp632(std::multiset<char16_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0632 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0633
  * @tc.name gendtscpp_tpo_ext_0633
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0633', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp633(std::multiset<char32_t> v);`),
        unions: parseUnion(`void r8sp633(std::multiset<char32_t> v);`),
        structs: parseStruct(`void r8sp633(std::multiset<char32_t> v);`),
        classes: parseClass(`void r8sp633(std::multiset<char32_t> v);`),
        funcs: parseFunction(`void r8sp633(std::multiset<char32_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0633 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0634
  * @tc.name gendtscpp_tpo_ext_0634
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0634', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp634(std::multiset<int>::iterator v);`),
        unions: parseUnion(`void r8sp634(std::multiset<int>::iterator v);`),
        structs: parseStruct(`void r8sp634(std::multiset<int>::iterator v);`),
        classes: parseClass(`void r8sp634(std::multiset<int>::iterator v);`),
        funcs: parseFunction(`void r8sp634(std::multiset<int>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0634 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0635
  * @tc.name gendtscpp_tpo_ext_0635
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0635', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp635(std::multiset<size_t>::iterator v);`),
        unions: parseUnion(`void r8sp635(std::multiset<size_t>::iterator v);`),
        structs: parseStruct(`void r8sp635(std::multiset<size_t>::iterator v);`),
        classes: parseClass(`void r8sp635(std::multiset<size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp635(std::multiset<size_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0635 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0636
  * @tc.name gendtscpp_tpo_ext_0636
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0636', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp636(std::multiset<double>::iterator v);`),
        unions: parseUnion(`void r8sp636(std::multiset<double>::iterator v);`),
        structs: parseStruct(`void r8sp636(std::multiset<double>::iterator v);`),
        classes: parseClass(`void r8sp636(std::multiset<double>::iterator v);`),
        funcs: parseFunction(`void r8sp636(std::multiset<double>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0636 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0637
  * @tc.name gendtscpp_tpo_ext_0637
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0637', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp637(std::multiset<float>::iterator v);`),
        unions: parseUnion(`void r8sp637(std::multiset<float>::iterator v);`),
        structs: parseStruct(`void r8sp637(std::multiset<float>::iterator v);`),
        classes: parseClass(`void r8sp637(std::multiset<float>::iterator v);`),
        funcs: parseFunction(`void r8sp637(std::multiset<float>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0637 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0638
  * @tc.name gendtscpp_tpo_ext_0638
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0638', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp638(std::multiset<long>::iterator v);`),
        unions: parseUnion(`void r8sp638(std::multiset<long>::iterator v);`),
        structs: parseStruct(`void r8sp638(std::multiset<long>::iterator v);`),
        classes: parseClass(`void r8sp638(std::multiset<long>::iterator v);`),
        funcs: parseFunction(`void r8sp638(std::multiset<long>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0638 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0639
  * @tc.name gendtscpp_tpo_ext_0639
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0639', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp639(std::multiset<short>::iterator v);`),
        unions: parseUnion(`void r8sp639(std::multiset<short>::iterator v);`),
        structs: parseStruct(`void r8sp639(std::multiset<short>::iterator v);`),
        classes: parseClass(`void r8sp639(std::multiset<short>::iterator v);`),
        funcs: parseFunction(`void r8sp639(std::multiset<short>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0639 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0640
  * @tc.name gendtscpp_tpo_ext_0640
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0640', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp640(std::multiset<uint8_t>::iterator v);`),
        unions: parseUnion(`void r8sp640(std::multiset<uint8_t>::iterator v);`),
        structs: parseStruct(`void r8sp640(std::multiset<uint8_t>::iterator v);`),
        classes: parseClass(`void r8sp640(std::multiset<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp640(std::multiset<uint8_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0640 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0641
  * @tc.name gendtscpp_tpo_ext_0641
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0641', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp641(std::multiset<uint16_t>::iterator v);`),
        unions: parseUnion(`void r8sp641(std::multiset<uint16_t>::iterator v);`),
        structs: parseStruct(`void r8sp641(std::multiset<uint16_t>::iterator v);`),
        classes: parseClass(`void r8sp641(std::multiset<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp641(std::multiset<uint16_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0641 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0642
  * @tc.name gendtscpp_tpo_ext_0642
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0642', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp642(std::multiset<uint32_t>::iterator v);`),
        unions: parseUnion(`void r8sp642(std::multiset<uint32_t>::iterator v);`),
        structs: parseStruct(`void r8sp642(std::multiset<uint32_t>::iterator v);`),
        classes: parseClass(`void r8sp642(std::multiset<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp642(std::multiset<uint32_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0642 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0643
  * @tc.name gendtscpp_tpo_ext_0643
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0643', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp643(std::multiset<uint64_t>::iterator v);`),
        unions: parseUnion(`void r8sp643(std::multiset<uint64_t>::iterator v);`),
        structs: parseStruct(`void r8sp643(std::multiset<uint64_t>::iterator v);`),
        classes: parseClass(`void r8sp643(std::multiset<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r8sp643(std::multiset<uint64_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0643 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0644
  * @tc.name gendtscpp_tpo_ext_0644
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0644', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp644(std::multiset<int8_t>::iterator v);`),
        unions: parseUnion(`void r8sp644(std::multiset<int8_t>::iterator v);`),
        structs: parseStruct(`void r8sp644(std::multiset<int8_t>::iterator v);`),
        classes: parseClass(`void r8sp644(std::multiset<int8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp644(std::multiset<int8_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0644 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0645
  * @tc.name gendtscpp_tpo_ext_0645
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0645', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp645(std::multiset<int16_t>::iterator v);`),
        unions: parseUnion(`void r8sp645(std::multiset<int16_t>::iterator v);`),
        structs: parseStruct(`void r8sp645(std::multiset<int16_t>::iterator v);`),
        classes: parseClass(`void r8sp645(std::multiset<int16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp645(std::multiset<int16_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0645 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0646
  * @tc.name gendtscpp_tpo_ext_0646
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0646', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp646(std::multiset<int32_t>::iterator v);`),
        unions: parseUnion(`void r8sp646(std::multiset<int32_t>::iterator v);`),
        structs: parseStruct(`void r8sp646(std::multiset<int32_t>::iterator v);`),
        classes: parseClass(`void r8sp646(std::multiset<int32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp646(std::multiset<int32_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0646 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0647
  * @tc.name gendtscpp_tpo_ext_0647
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0647', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp647(std::multiset<int64_t>::iterator v);`),
        unions: parseUnion(`void r8sp647(std::multiset<int64_t>::iterator v);`),
        structs: parseStruct(`void r8sp647(std::multiset<int64_t>::iterator v);`),
        classes: parseClass(`void r8sp647(std::multiset<int64_t>::iterator v);`),
        funcs: parseFunction(`void r8sp647(std::multiset<int64_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0647 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0648
  * @tc.name gendtscpp_tpo_ext_0648
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0648', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp648(std::multiset<unsigned>::iterator v);`),
        unions: parseUnion(`void r8sp648(std::multiset<unsigned>::iterator v);`),
        structs: parseStruct(`void r8sp648(std::multiset<unsigned>::iterator v);`),
        classes: parseClass(`void r8sp648(std::multiset<unsigned>::iterator v);`),
        funcs: parseFunction(`void r8sp648(std::multiset<unsigned>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0648 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0649
  * @tc.name gendtscpp_tpo_ext_0649
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0649', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp649(std::multiset<bool>::iterator v);`),
        unions: parseUnion(`void r8sp649(std::multiset<bool>::iterator v);`),
        structs: parseStruct(`void r8sp649(std::multiset<bool>::iterator v);`),
        classes: parseClass(`void r8sp649(std::multiset<bool>::iterator v);`),
        funcs: parseFunction(`void r8sp649(std::multiset<bool>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0649 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0650
  * @tc.name gendtscpp_tpo_ext_0650
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0650', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp650(std::multiset<char>::iterator v);`),
        unions: parseUnion(`void r8sp650(std::multiset<char>::iterator v);`),
        structs: parseStruct(`void r8sp650(std::multiset<char>::iterator v);`),
        classes: parseClass(`void r8sp650(std::multiset<char>::iterator v);`),
        funcs: parseFunction(`void r8sp650(std::multiset<char>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0650 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0651
  * @tc.name gendtscpp_tpo_ext_0651
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0651', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp651(std::multiset<wchar_t>::iterator v);`),
        unions: parseUnion(`void r8sp651(std::multiset<wchar_t>::iterator v);`),
        structs: parseStruct(`void r8sp651(std::multiset<wchar_t>::iterator v);`),
        classes: parseClass(`void r8sp651(std::multiset<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r8sp651(std::multiset<wchar_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0651 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0652
  * @tc.name gendtscpp_tpo_ext_0652
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0652', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp652(std::multiset<char8_t>::iterator v);`),
        unions: parseUnion(`void r8sp652(std::multiset<char8_t>::iterator v);`),
        structs: parseStruct(`void r8sp652(std::multiset<char8_t>::iterator v);`),
        classes: parseClass(`void r8sp652(std::multiset<char8_t>::iterator v);`),
        funcs: parseFunction(`void r8sp652(std::multiset<char8_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0652 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0653
  * @tc.name gendtscpp_tpo_ext_0653
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0653', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp653(std::multiset<char16_t>::iterator v);`),
        unions: parseUnion(`void r8sp653(std::multiset<char16_t>::iterator v);`),
        structs: parseStruct(`void r8sp653(std::multiset<char16_t>::iterator v);`),
        classes: parseClass(`void r8sp653(std::multiset<char16_t>::iterator v);`),
        funcs: parseFunction(`void r8sp653(std::multiset<char16_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0653 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0654
  * @tc.name gendtscpp_tpo_ext_0654
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0654', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp654(std::multiset<char32_t>::iterator v);`),
        unions: parseUnion(`void r8sp654(std::multiset<char32_t>::iterator v);`),
        structs: parseStruct(`void r8sp654(std::multiset<char32_t>::iterator v);`),
        classes: parseClass(`void r8sp654(std::multiset<char32_t>::iterator v);`),
        funcs: parseFunction(`void r8sp654(std::multiset<char32_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_0654 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0656
  * @tc.name gendtscpp_tpo_ext_0656
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0656', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp656(std::unordered_multiset<size_t> v);`),
        unions: parseUnion(`void r8sp656(std::unordered_multiset<size_t> v);`),
        structs: parseStruct(`void r8sp656(std::unordered_multiset<size_t> v);`),
        classes: parseClass(`void r8sp656(std::unordered_multiset<size_t> v);`),
        funcs: parseFunction(`void r8sp656(std::unordered_multiset<size_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0656 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0657
  * @tc.name gendtscpp_tpo_ext_0657
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0657', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp657(std::unordered_multiset<double> v);`),
        unions: parseUnion(`void r8sp657(std::unordered_multiset<double> v);`),
        structs: parseStruct(`void r8sp657(std::unordered_multiset<double> v);`),
        classes: parseClass(`void r8sp657(std::unordered_multiset<double> v);`),
        funcs: parseFunction(`void r8sp657(std::unordered_multiset<double> v);`),
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
      assert.fail(`h2dtscpp_tpo_0657 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0658
  * @tc.name gendtscpp_tpo_ext_0658
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0658', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp658(std::unordered_multiset<float> v);`),
        unions: parseUnion(`void r8sp658(std::unordered_multiset<float> v);`),
        structs: parseStruct(`void r8sp658(std::unordered_multiset<float> v);`),
        classes: parseClass(`void r8sp658(std::unordered_multiset<float> v);`),
        funcs: parseFunction(`void r8sp658(std::unordered_multiset<float> v);`),
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
      assert.fail(`h2dtscpp_tpo_0658 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0659
  * @tc.name gendtscpp_tpo_ext_0659
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0659', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp659(std::unordered_multiset<long> v);`),
        unions: parseUnion(`void r8sp659(std::unordered_multiset<long> v);`),
        structs: parseStruct(`void r8sp659(std::unordered_multiset<long> v);`),
        classes: parseClass(`void r8sp659(std::unordered_multiset<long> v);`),
        funcs: parseFunction(`void r8sp659(std::unordered_multiset<long> v);`),
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
      assert.fail(`h2dtscpp_tpo_0659 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0660
  * @tc.name gendtscpp_tpo_ext_0660
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0660', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp660(std::unordered_multiset<short> v);`),
        unions: parseUnion(`void r8sp660(std::unordered_multiset<short> v);`),
        structs: parseStruct(`void r8sp660(std::unordered_multiset<short> v);`),
        classes: parseClass(`void r8sp660(std::unordered_multiset<short> v);`),
        funcs: parseFunction(`void r8sp660(std::unordered_multiset<short> v);`),
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
      assert.fail(`h2dtscpp_tpo_0660 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0661
  * @tc.name gendtscpp_tpo_ext_0661
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0661', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp661(std::unordered_multiset<uint8_t> v);`),
        unions: parseUnion(`void r8sp661(std::unordered_multiset<uint8_t> v);`),
        structs: parseStruct(`void r8sp661(std::unordered_multiset<uint8_t> v);`),
        classes: parseClass(`void r8sp661(std::unordered_multiset<uint8_t> v);`),
        funcs: parseFunction(`void r8sp661(std::unordered_multiset<uint8_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0661 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0662
  * @tc.name gendtscpp_tpo_ext_0662
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0662', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp662(std::unordered_multiset<uint16_t> v);`),
        unions: parseUnion(`void r8sp662(std::unordered_multiset<uint16_t> v);`),
        structs: parseStruct(`void r8sp662(std::unordered_multiset<uint16_t> v);`),
        classes: parseClass(`void r8sp662(std::unordered_multiset<uint16_t> v);`),
        funcs: parseFunction(`void r8sp662(std::unordered_multiset<uint16_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0662 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0663
  * @tc.name gendtscpp_tpo_ext_0663
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0663', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp663(std::unordered_multiset<uint32_t> v);`),
        unions: parseUnion(`void r8sp663(std::unordered_multiset<uint32_t> v);`),
        structs: parseStruct(`void r8sp663(std::unordered_multiset<uint32_t> v);`),
        classes: parseClass(`void r8sp663(std::unordered_multiset<uint32_t> v);`),
        funcs: parseFunction(`void r8sp663(std::unordered_multiset<uint32_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0663 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0664
  * @tc.name gendtscpp_tpo_ext_0664
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0664', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp664(std::unordered_multiset<uint64_t> v);`),
        unions: parseUnion(`void r8sp664(std::unordered_multiset<uint64_t> v);`),
        structs: parseStruct(`void r8sp664(std::unordered_multiset<uint64_t> v);`),
        classes: parseClass(`void r8sp664(std::unordered_multiset<uint64_t> v);`),
        funcs: parseFunction(`void r8sp664(std::unordered_multiset<uint64_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0664 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0665
  * @tc.name gendtscpp_tpo_ext_0665
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0665', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp665(std::unordered_multiset<int8_t> v);`),
        unions: parseUnion(`void r8sp665(std::unordered_multiset<int8_t> v);`),
        structs: parseStruct(`void r8sp665(std::unordered_multiset<int8_t> v);`),
        classes: parseClass(`void r8sp665(std::unordered_multiset<int8_t> v);`),
        funcs: parseFunction(`void r8sp665(std::unordered_multiset<int8_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0665 执行异常: ${String(err)}`);
    }
  });
});
