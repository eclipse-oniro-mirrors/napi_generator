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

suite('Gendtscpp_transParseObj_Suite_Ext23', function () {
  /**
  * @tc.number h2dtscpp_tpo_0771
  * @tc.name gendtscpp_tpo_ext_0771
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0771', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp771(std::shared_ptr<int64_t> v);`),
        unions: parseUnion(`void r8sp771(std::shared_ptr<int64_t> v);`),
        structs: parseStruct(`void r8sp771(std::shared_ptr<int64_t> v);`),
        classes: parseClass(`void r8sp771(std::shared_ptr<int64_t> v);`),
        funcs: parseFunction(`void r8sp771(std::shared_ptr<int64_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0771 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0772
  * @tc.name gendtscpp_tpo_ext_0772
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0772', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp772(std::shared_ptr<unsigned> v);`),
        unions: parseUnion(`void r8sp772(std::shared_ptr<unsigned> v);`),
        structs: parseStruct(`void r8sp772(std::shared_ptr<unsigned> v);`),
        classes: parseClass(`void r8sp772(std::shared_ptr<unsigned> v);`),
        funcs: parseFunction(`void r8sp772(std::shared_ptr<unsigned> v);`),
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
      assert.fail(`h2dtscpp_tpo_0772 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0773
  * @tc.name gendtscpp_tpo_ext_0773
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0773', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp773(std::shared_ptr<bool> v);`),
        unions: parseUnion(`void r8sp773(std::shared_ptr<bool> v);`),
        structs: parseStruct(`void r8sp773(std::shared_ptr<bool> v);`),
        classes: parseClass(`void r8sp773(std::shared_ptr<bool> v);`),
        funcs: parseFunction(`void r8sp773(std::shared_ptr<bool> v);`),
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
      assert.fail(`h2dtscpp_tpo_0773 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0774
  * @tc.name gendtscpp_tpo_ext_0774
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0774', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp774(std::shared_ptr<char> v);`),
        unions: parseUnion(`void r8sp774(std::shared_ptr<char> v);`),
        structs: parseStruct(`void r8sp774(std::shared_ptr<char> v);`),
        classes: parseClass(`void r8sp774(std::shared_ptr<char> v);`),
        funcs: parseFunction(`void r8sp774(std::shared_ptr<char> v);`),
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
      assert.fail(`h2dtscpp_tpo_0774 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0775
  * @tc.name gendtscpp_tpo_ext_0775
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0775', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp775(std::shared_ptr<wchar_t> v);`),
        unions: parseUnion(`void r8sp775(std::shared_ptr<wchar_t> v);`),
        structs: parseStruct(`void r8sp775(std::shared_ptr<wchar_t> v);`),
        classes: parseClass(`void r8sp775(std::shared_ptr<wchar_t> v);`),
        funcs: parseFunction(`void r8sp775(std::shared_ptr<wchar_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0775 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0776
  * @tc.name gendtscpp_tpo_ext_0776
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0776', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp776(std::shared_ptr<char8_t> v);`),
        unions: parseUnion(`void r8sp776(std::shared_ptr<char8_t> v);`),
        structs: parseStruct(`void r8sp776(std::shared_ptr<char8_t> v);`),
        classes: parseClass(`void r8sp776(std::shared_ptr<char8_t> v);`),
        funcs: parseFunction(`void r8sp776(std::shared_ptr<char8_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0776 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0777
  * @tc.name gendtscpp_tpo_ext_0777
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0777', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp777(std::shared_ptr<char16_t> v);`),
        unions: parseUnion(`void r8sp777(std::shared_ptr<char16_t> v);`),
        structs: parseStruct(`void r8sp777(std::shared_ptr<char16_t> v);`),
        classes: parseClass(`void r8sp777(std::shared_ptr<char16_t> v);`),
        funcs: parseFunction(`void r8sp777(std::shared_ptr<char16_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0777 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0778
  * @tc.name gendtscpp_tpo_ext_0778
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::shared_ptr<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0778', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp778(std::shared_ptr<char32_t> v);`),
        unions: parseUnion(`void r8sp778(std::shared_ptr<char32_t> v);`),
        structs: parseStruct(`void r8sp778(std::shared_ptr<char32_t> v);`),
        classes: parseClass(`void r8sp778(std::shared_ptr<char32_t> v);`),
        funcs: parseFunction(`void r8sp778(std::shared_ptr<char32_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0778 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0780
  * @tc.name gendtscpp_tpo_ext_0780
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0780', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp780(std::weak_ptr<size_t> v);`),
        unions: parseUnion(`void r8sp780(std::weak_ptr<size_t> v);`),
        structs: parseStruct(`void r8sp780(std::weak_ptr<size_t> v);`),
        classes: parseClass(`void r8sp780(std::weak_ptr<size_t> v);`),
        funcs: parseFunction(`void r8sp780(std::weak_ptr<size_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0780 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0781
  * @tc.name gendtscpp_tpo_ext_0781
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<double>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0781', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp781(std::weak_ptr<double> v);`),
        unions: parseUnion(`void r8sp781(std::weak_ptr<double> v);`),
        structs: parseStruct(`void r8sp781(std::weak_ptr<double> v);`),
        classes: parseClass(`void r8sp781(std::weak_ptr<double> v);`),
        funcs: parseFunction(`void r8sp781(std::weak_ptr<double> v);`),
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
      assert.fail(`h2dtscpp_tpo_0781 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0782
  * @tc.name gendtscpp_tpo_ext_0782
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<float>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0782', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp782(std::weak_ptr<float> v);`),
        unions: parseUnion(`void r8sp782(std::weak_ptr<float> v);`),
        structs: parseStruct(`void r8sp782(std::weak_ptr<float> v);`),
        classes: parseClass(`void r8sp782(std::weak_ptr<float> v);`),
        funcs: parseFunction(`void r8sp782(std::weak_ptr<float> v);`),
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
      assert.fail(`h2dtscpp_tpo_0782 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0783
  * @tc.name gendtscpp_tpo_ext_0783
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0783', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp783(std::weak_ptr<long> v);`),
        unions: parseUnion(`void r8sp783(std::weak_ptr<long> v);`),
        structs: parseStruct(`void r8sp783(std::weak_ptr<long> v);`),
        classes: parseClass(`void r8sp783(std::weak_ptr<long> v);`),
        funcs: parseFunction(`void r8sp783(std::weak_ptr<long> v);`),
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
      assert.fail(`h2dtscpp_tpo_0783 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0784
  * @tc.name gendtscpp_tpo_ext_0784
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0784', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp784(std::weak_ptr<short> v);`),
        unions: parseUnion(`void r8sp784(std::weak_ptr<short> v);`),
        structs: parseStruct(`void r8sp784(std::weak_ptr<short> v);`),
        classes: parseClass(`void r8sp784(std::weak_ptr<short> v);`),
        funcs: parseFunction(`void r8sp784(std::weak_ptr<short> v);`),
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
      assert.fail(`h2dtscpp_tpo_0784 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0785
  * @tc.name gendtscpp_tpo_ext_0785
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0785', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp785(std::weak_ptr<uint8_t> v);`),
        unions: parseUnion(`void r8sp785(std::weak_ptr<uint8_t> v);`),
        structs: parseStruct(`void r8sp785(std::weak_ptr<uint8_t> v);`),
        classes: parseClass(`void r8sp785(std::weak_ptr<uint8_t> v);`),
        funcs: parseFunction(`void r8sp785(std::weak_ptr<uint8_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0785 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0786
  * @tc.name gendtscpp_tpo_ext_0786
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0786', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp786(std::weak_ptr<uint16_t> v);`),
        unions: parseUnion(`void r8sp786(std::weak_ptr<uint16_t> v);`),
        structs: parseStruct(`void r8sp786(std::weak_ptr<uint16_t> v);`),
        classes: parseClass(`void r8sp786(std::weak_ptr<uint16_t> v);`),
        funcs: parseFunction(`void r8sp786(std::weak_ptr<uint16_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0786 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0787
  * @tc.name gendtscpp_tpo_ext_0787
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0787', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp787(std::weak_ptr<uint32_t> v);`),
        unions: parseUnion(`void r8sp787(std::weak_ptr<uint32_t> v);`),
        structs: parseStruct(`void r8sp787(std::weak_ptr<uint32_t> v);`),
        classes: parseClass(`void r8sp787(std::weak_ptr<uint32_t> v);`),
        funcs: parseFunction(`void r8sp787(std::weak_ptr<uint32_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0787 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0788
  * @tc.name gendtscpp_tpo_ext_0788
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0788', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp788(std::weak_ptr<uint64_t> v);`),
        unions: parseUnion(`void r8sp788(std::weak_ptr<uint64_t> v);`),
        structs: parseStruct(`void r8sp788(std::weak_ptr<uint64_t> v);`),
        classes: parseClass(`void r8sp788(std::weak_ptr<uint64_t> v);`),
        funcs: parseFunction(`void r8sp788(std::weak_ptr<uint64_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0788 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0789
  * @tc.name gendtscpp_tpo_ext_0789
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0789', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp789(std::weak_ptr<int8_t> v);`),
        unions: parseUnion(`void r8sp789(std::weak_ptr<int8_t> v);`),
        structs: parseStruct(`void r8sp789(std::weak_ptr<int8_t> v);`),
        classes: parseClass(`void r8sp789(std::weak_ptr<int8_t> v);`),
        funcs: parseFunction(`void r8sp789(std::weak_ptr<int8_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0789 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0790
  * @tc.name gendtscpp_tpo_ext_0790
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0790', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp790(std::weak_ptr<int16_t> v);`),
        unions: parseUnion(`void r8sp790(std::weak_ptr<int16_t> v);`),
        structs: parseStruct(`void r8sp790(std::weak_ptr<int16_t> v);`),
        classes: parseClass(`void r8sp790(std::weak_ptr<int16_t> v);`),
        funcs: parseFunction(`void r8sp790(std::weak_ptr<int16_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0790 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0791
  * @tc.name gendtscpp_tpo_ext_0791
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0791', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp791(std::weak_ptr<int32_t> v);`),
        unions: parseUnion(`void r8sp791(std::weak_ptr<int32_t> v);`),
        structs: parseStruct(`void r8sp791(std::weak_ptr<int32_t> v);`),
        classes: parseClass(`void r8sp791(std::weak_ptr<int32_t> v);`),
        funcs: parseFunction(`void r8sp791(std::weak_ptr<int32_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0791 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0792
  * @tc.name gendtscpp_tpo_ext_0792
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0792', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp792(std::weak_ptr<int64_t> v);`),
        unions: parseUnion(`void r8sp792(std::weak_ptr<int64_t> v);`),
        structs: parseStruct(`void r8sp792(std::weak_ptr<int64_t> v);`),
        classes: parseClass(`void r8sp792(std::weak_ptr<int64_t> v);`),
        funcs: parseFunction(`void r8sp792(std::weak_ptr<int64_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0792 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0793
  * @tc.name gendtscpp_tpo_ext_0793
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0793', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp793(std::weak_ptr<unsigned> v);`),
        unions: parseUnion(`void r8sp793(std::weak_ptr<unsigned> v);`),
        structs: parseStruct(`void r8sp793(std::weak_ptr<unsigned> v);`),
        classes: parseClass(`void r8sp793(std::weak_ptr<unsigned> v);`),
        funcs: parseFunction(`void r8sp793(std::weak_ptr<unsigned> v);`),
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
      assert.fail(`h2dtscpp_tpo_0793 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0794
  * @tc.name gendtscpp_tpo_ext_0794
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0794', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp794(std::weak_ptr<bool> v);`),
        unions: parseUnion(`void r8sp794(std::weak_ptr<bool> v);`),
        structs: parseStruct(`void r8sp794(std::weak_ptr<bool> v);`),
        classes: parseClass(`void r8sp794(std::weak_ptr<bool> v);`),
        funcs: parseFunction(`void r8sp794(std::weak_ptr<bool> v);`),
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
      assert.fail(`h2dtscpp_tpo_0794 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0795
  * @tc.name gendtscpp_tpo_ext_0795
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0795', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp795(std::weak_ptr<char> v);`),
        unions: parseUnion(`void r8sp795(std::weak_ptr<char> v);`),
        structs: parseStruct(`void r8sp795(std::weak_ptr<char> v);`),
        classes: parseClass(`void r8sp795(std::weak_ptr<char> v);`),
        funcs: parseFunction(`void r8sp795(std::weak_ptr<char> v);`),
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
      assert.fail(`h2dtscpp_tpo_0795 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0796
  * @tc.name gendtscpp_tpo_ext_0796
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0796', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp796(std::weak_ptr<wchar_t> v);`),
        unions: parseUnion(`void r8sp796(std::weak_ptr<wchar_t> v);`),
        structs: parseStruct(`void r8sp796(std::weak_ptr<wchar_t> v);`),
        classes: parseClass(`void r8sp796(std::weak_ptr<wchar_t> v);`),
        funcs: parseFunction(`void r8sp796(std::weak_ptr<wchar_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0796 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0797
  * @tc.name gendtscpp_tpo_ext_0797
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0797', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp797(std::weak_ptr<char8_t> v);`),
        unions: parseUnion(`void r8sp797(std::weak_ptr<char8_t> v);`),
        structs: parseStruct(`void r8sp797(std::weak_ptr<char8_t> v);`),
        classes: parseClass(`void r8sp797(std::weak_ptr<char8_t> v);`),
        funcs: parseFunction(`void r8sp797(std::weak_ptr<char8_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0797 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0798
  * @tc.name gendtscpp_tpo_ext_0798
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0798', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp798(std::weak_ptr<char16_t> v);`),
        unions: parseUnion(`void r8sp798(std::weak_ptr<char16_t> v);`),
        structs: parseStruct(`void r8sp798(std::weak_ptr<char16_t> v);`),
        classes: parseClass(`void r8sp798(std::weak_ptr<char16_t> v);`),
        funcs: parseFunction(`void r8sp798(std::weak_ptr<char16_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0798 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0799
  * @tc.name gendtscpp_tpo_ext_0799
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0799', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp799(std::weak_ptr<char32_t> v);`),
        unions: parseUnion(`void r8sp799(std::weak_ptr<char32_t> v);`),
        structs: parseStruct(`void r8sp799(std::weak_ptr<char32_t> v);`),
        classes: parseClass(`void r8sp799(std::weak_ptr<char32_t> v);`),
        funcs: parseFunction(`void r8sp799(std::weak_ptr<char32_t> v);`),
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
      assert.fail(`h2dtscpp_tpo_0799 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0802
  * @tc.name gendtscpp_tpo_ext_0802
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `char *` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0802', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp802(char * v);`),
        unions: parseUnion(`void r8sp802(char * v);`),
        structs: parseStruct(`void r8sp802(char * v);`),
        classes: parseClass(`void r8sp802(char * v);`),
        funcs: parseFunction(`void r8sp802(char * v);`),
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
      assert.fail(`h2dtscpp_tpo_0802 执行异常: ${String(err)}`);
    }
  });
});
