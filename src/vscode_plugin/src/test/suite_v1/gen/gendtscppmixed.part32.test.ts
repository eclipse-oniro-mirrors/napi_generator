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

suite('Gendtscpp_mixed_Suite_Ext32', function () {
  /**
  * @tc.number h2dtscpp_gen_1656
  * @tc.name gendtscpp_mix_ext_1656
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::queue<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1656', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1656(std::queue<char32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1656(std::queue<char32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1656(std::queue<char32_t>::iterator v);`),
        classes: parseClass(`void r7sp1656(std::queue<char32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1656(std::queue<char32_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1656 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1658
  * @tc.name gendtscpp_mix_ext_1658
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1658', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1658(std::valarray<size_t> v);`),
        unions: parseUnion(`void r7sp1658(std::valarray<size_t> v);`),
        structs: parseStruct(`void r7sp1658(std::valarray<size_t> v);`),
        classes: parseClass(`void r7sp1658(std::valarray<size_t> v);`),
        funcs: parseFunction(`void r7sp1658(std::valarray<size_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1658 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1661
  * @tc.name gendtscpp_mix_ext_1661
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1661', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1661(std::valarray<long> v);`),
        unions: parseUnion(`void r7sp1661(std::valarray<long> v);`),
        structs: parseStruct(`void r7sp1661(std::valarray<long> v);`),
        classes: parseClass(`void r7sp1661(std::valarray<long> v);`),
        funcs: parseFunction(`void r7sp1661(std::valarray<long> v);`),
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
      assert.fail(`h2dtscpp_gen_1661 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1662
  * @tc.name gendtscpp_mix_ext_1662
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1662', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1662(std::valarray<short> v);`),
        unions: parseUnion(`void r7sp1662(std::valarray<short> v);`),
        structs: parseStruct(`void r7sp1662(std::valarray<short> v);`),
        classes: parseClass(`void r7sp1662(std::valarray<short> v);`),
        funcs: parseFunction(`void r7sp1662(std::valarray<short> v);`),
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
      assert.fail(`h2dtscpp_gen_1662 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1663
  * @tc.name gendtscpp_mix_ext_1663
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<uint8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1663', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1663(std::valarray<uint8_t> v);`),
        unions: parseUnion(`void r7sp1663(std::valarray<uint8_t> v);`),
        structs: parseStruct(`void r7sp1663(std::valarray<uint8_t> v);`),
        classes: parseClass(`void r7sp1663(std::valarray<uint8_t> v);`),
        funcs: parseFunction(`void r7sp1663(std::valarray<uint8_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1663 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1664
  * @tc.name gendtscpp_mix_ext_1664
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1664', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1664(std::valarray<uint16_t> v);`),
        unions: parseUnion(`void r7sp1664(std::valarray<uint16_t> v);`),
        structs: parseStruct(`void r7sp1664(std::valarray<uint16_t> v);`),
        classes: parseClass(`void r7sp1664(std::valarray<uint16_t> v);`),
        funcs: parseFunction(`void r7sp1664(std::valarray<uint16_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1664 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1665
  * @tc.name gendtscpp_mix_ext_1665
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1665', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1665(std::valarray<uint32_t> v);`),
        unions: parseUnion(`void r7sp1665(std::valarray<uint32_t> v);`),
        structs: parseStruct(`void r7sp1665(std::valarray<uint32_t> v);`),
        classes: parseClass(`void r7sp1665(std::valarray<uint32_t> v);`),
        funcs: parseFunction(`void r7sp1665(std::valarray<uint32_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1665 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1666
  * @tc.name gendtscpp_mix_ext_1666
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1666', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1666(std::valarray<uint64_t> v);`),
        unions: parseUnion(`void r7sp1666(std::valarray<uint64_t> v);`),
        structs: parseStruct(`void r7sp1666(std::valarray<uint64_t> v);`),
        classes: parseClass(`void r7sp1666(std::valarray<uint64_t> v);`),
        funcs: parseFunction(`void r7sp1666(std::valarray<uint64_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1666 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1667
  * @tc.name gendtscpp_mix_ext_1667
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1667', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1667(std::valarray<int8_t> v);`),
        unions: parseUnion(`void r7sp1667(std::valarray<int8_t> v);`),
        structs: parseStruct(`void r7sp1667(std::valarray<int8_t> v);`),
        classes: parseClass(`void r7sp1667(std::valarray<int8_t> v);`),
        funcs: parseFunction(`void r7sp1667(std::valarray<int8_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1667 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1668
  * @tc.name gendtscpp_mix_ext_1668
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1668', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1668(std::valarray<int16_t> v);`),
        unions: parseUnion(`void r7sp1668(std::valarray<int16_t> v);`),
        structs: parseStruct(`void r7sp1668(std::valarray<int16_t> v);`),
        classes: parseClass(`void r7sp1668(std::valarray<int16_t> v);`),
        funcs: parseFunction(`void r7sp1668(std::valarray<int16_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1668 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1669
  * @tc.name gendtscpp_mix_ext_1669
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1669', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1669(std::valarray<int32_t> v);`),
        unions: parseUnion(`void r7sp1669(std::valarray<int32_t> v);`),
        structs: parseStruct(`void r7sp1669(std::valarray<int32_t> v);`),
        classes: parseClass(`void r7sp1669(std::valarray<int32_t> v);`),
        funcs: parseFunction(`void r7sp1669(std::valarray<int32_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1669 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1670
  * @tc.name gendtscpp_mix_ext_1670
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<int64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1670', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1670(std::valarray<int64_t> v);`),
        unions: parseUnion(`void r7sp1670(std::valarray<int64_t> v);`),
        structs: parseStruct(`void r7sp1670(std::valarray<int64_t> v);`),
        classes: parseClass(`void r7sp1670(std::valarray<int64_t> v);`),
        funcs: parseFunction(`void r7sp1670(std::valarray<int64_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1670 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1671
  * @tc.name gendtscpp_mix_ext_1671
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1671', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1671(std::valarray<unsigned> v);`),
        unions: parseUnion(`void r7sp1671(std::valarray<unsigned> v);`),
        structs: parseStruct(`void r7sp1671(std::valarray<unsigned> v);`),
        classes: parseClass(`void r7sp1671(std::valarray<unsigned> v);`),
        funcs: parseFunction(`void r7sp1671(std::valarray<unsigned> v);`),
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
      assert.fail(`h2dtscpp_gen_1671 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1672
  * @tc.name gendtscpp_mix_ext_1672
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<bool>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1672', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1672(std::valarray<bool> v);`),
        unions: parseUnion(`void r7sp1672(std::valarray<bool> v);`),
        structs: parseStruct(`void r7sp1672(std::valarray<bool> v);`),
        classes: parseClass(`void r7sp1672(std::valarray<bool> v);`),
        funcs: parseFunction(`void r7sp1672(std::valarray<bool> v);`),
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
      assert.fail(`h2dtscpp_gen_1672 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1673
  * @tc.name gendtscpp_mix_ext_1673
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1673', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1673(std::valarray<char> v);`),
        unions: parseUnion(`void r7sp1673(std::valarray<char> v);`),
        structs: parseStruct(`void r7sp1673(std::valarray<char> v);`),
        classes: parseClass(`void r7sp1673(std::valarray<char> v);`),
        funcs: parseFunction(`void r7sp1673(std::valarray<char> v);`),
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
      assert.fail(`h2dtscpp_gen_1673 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1674
  * @tc.name gendtscpp_mix_ext_1674
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<wchar_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1674', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1674(std::valarray<wchar_t> v);`),
        unions: parseUnion(`void r7sp1674(std::valarray<wchar_t> v);`),
        structs: parseStruct(`void r7sp1674(std::valarray<wchar_t> v);`),
        classes: parseClass(`void r7sp1674(std::valarray<wchar_t> v);`),
        funcs: parseFunction(`void r7sp1674(std::valarray<wchar_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1674 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1675
  * @tc.name gendtscpp_mix_ext_1675
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1675', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1675(std::valarray<char8_t> v);`),
        unions: parseUnion(`void r7sp1675(std::valarray<char8_t> v);`),
        structs: parseStruct(`void r7sp1675(std::valarray<char8_t> v);`),
        classes: parseClass(`void r7sp1675(std::valarray<char8_t> v);`),
        funcs: parseFunction(`void r7sp1675(std::valarray<char8_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1675 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1676
  * @tc.name gendtscpp_mix_ext_1676
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1676', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1676(std::valarray<char16_t> v);`),
        unions: parseUnion(`void r7sp1676(std::valarray<char16_t> v);`),
        structs: parseStruct(`void r7sp1676(std::valarray<char16_t> v);`),
        classes: parseClass(`void r7sp1676(std::valarray<char16_t> v);`),
        funcs: parseFunction(`void r7sp1676(std::valarray<char16_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1676 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1677
  * @tc.name gendtscpp_mix_ext_1677
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1677', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1677(std::valarray<char32_t> v);`),
        unions: parseUnion(`void r7sp1677(std::valarray<char32_t> v);`),
        structs: parseStruct(`void r7sp1677(std::valarray<char32_t> v);`),
        classes: parseClass(`void r7sp1677(std::valarray<char32_t> v);`),
        funcs: parseFunction(`void r7sp1677(std::valarray<char32_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1677 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1678
  * @tc.name gendtscpp_mix_ext_1678
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1678', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1678(std::valarray<int>::iterator v);`),
        unions: parseUnion(`void r7sp1678(std::valarray<int>::iterator v);`),
        structs: parseStruct(`void r7sp1678(std::valarray<int>::iterator v);`),
        classes: parseClass(`void r7sp1678(std::valarray<int>::iterator v);`),
        funcs: parseFunction(`void r7sp1678(std::valarray<int>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1678 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1679
  * @tc.name gendtscpp_mix_ext_1679
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1679', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1679(std::valarray<size_t>::iterator v);`),
        unions: parseUnion(`void r7sp1679(std::valarray<size_t>::iterator v);`),
        structs: parseStruct(`void r7sp1679(std::valarray<size_t>::iterator v);`),
        classes: parseClass(`void r7sp1679(std::valarray<size_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1679(std::valarray<size_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1679 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1680
  * @tc.name gendtscpp_mix_ext_1680
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1680', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1680(std::valarray<double>::iterator v);`),
        unions: parseUnion(`void r7sp1680(std::valarray<double>::iterator v);`),
        structs: parseStruct(`void r7sp1680(std::valarray<double>::iterator v);`),
        classes: parseClass(`void r7sp1680(std::valarray<double>::iterator v);`),
        funcs: parseFunction(`void r7sp1680(std::valarray<double>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1680 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1681
  * @tc.name gendtscpp_mix_ext_1681
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1681', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1681(std::valarray<float>::iterator v);`),
        unions: parseUnion(`void r7sp1681(std::valarray<float>::iterator v);`),
        structs: parseStruct(`void r7sp1681(std::valarray<float>::iterator v);`),
        classes: parseClass(`void r7sp1681(std::valarray<float>::iterator v);`),
        funcs: parseFunction(`void r7sp1681(std::valarray<float>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1681 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1682
  * @tc.name gendtscpp_mix_ext_1682
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1682', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1682(std::valarray<long>::iterator v);`),
        unions: parseUnion(`void r7sp1682(std::valarray<long>::iterator v);`),
        structs: parseStruct(`void r7sp1682(std::valarray<long>::iterator v);`),
        classes: parseClass(`void r7sp1682(std::valarray<long>::iterator v);`),
        funcs: parseFunction(`void r7sp1682(std::valarray<long>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1682 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1683
  * @tc.name gendtscpp_mix_ext_1683
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1683', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1683(std::valarray<short>::iterator v);`),
        unions: parseUnion(`void r7sp1683(std::valarray<short>::iterator v);`),
        structs: parseStruct(`void r7sp1683(std::valarray<short>::iterator v);`),
        classes: parseClass(`void r7sp1683(std::valarray<short>::iterator v);`),
        funcs: parseFunction(`void r7sp1683(std::valarray<short>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1683 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1684
  * @tc.name gendtscpp_mix_ext_1684
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1684', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1684(std::valarray<uint8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1684(std::valarray<uint8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1684(std::valarray<uint8_t>::iterator v);`),
        classes: parseClass(`void r7sp1684(std::valarray<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1684(std::valarray<uint8_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1684 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1685
  * @tc.name gendtscpp_mix_ext_1685
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1685', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1685(std::valarray<uint16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1685(std::valarray<uint16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1685(std::valarray<uint16_t>::iterator v);`),
        classes: parseClass(`void r7sp1685(std::valarray<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1685(std::valarray<uint16_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1685 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1686
  * @tc.name gendtscpp_mix_ext_1686
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1686', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1686(std::valarray<uint32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1686(std::valarray<uint32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1686(std::valarray<uint32_t>::iterator v);`),
        classes: parseClass(`void r7sp1686(std::valarray<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1686(std::valarray<uint32_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1686 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1687
  * @tc.name gendtscpp_mix_ext_1687
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1687', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1687(std::valarray<uint64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1687(std::valarray<uint64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1687(std::valarray<uint64_t>::iterator v);`),
        classes: parseClass(`void r7sp1687(std::valarray<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1687(std::valarray<uint64_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1687 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1688
  * @tc.name gendtscpp_mix_ext_1688
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1688', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1688(std::valarray<int8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1688(std::valarray<int8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1688(std::valarray<int8_t>::iterator v);`),
        classes: parseClass(`void r7sp1688(std::valarray<int8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1688(std::valarray<int8_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1688 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1689
  * @tc.name gendtscpp_mix_ext_1689
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1689', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1689(std::valarray<int16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1689(std::valarray<int16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1689(std::valarray<int16_t>::iterator v);`),
        classes: parseClass(`void r7sp1689(std::valarray<int16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1689(std::valarray<int16_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1689 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1690
  * @tc.name gendtscpp_mix_ext_1690
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::valarray<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1690', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1690(std::valarray<int32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1690(std::valarray<int32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1690(std::valarray<int32_t>::iterator v);`),
        classes: parseClass(`void r7sp1690(std::valarray<int32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1690(std::valarray<int32_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1690 执行异常: ${String(err)}`);
    }
  });
});
