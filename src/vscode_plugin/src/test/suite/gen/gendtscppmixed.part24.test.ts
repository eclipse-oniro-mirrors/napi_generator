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

suite('Gendtscpp_mixed_Suite_Ext24', function () {
  /**
  * @tc.number h2dtscpp_gen_1377
  * @tc.name gendtscpp_mix_ext_1377
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<unsigned>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1377', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1377(std::vector<unsigned> v);`),
        unions: parseUnion(`void r7sp1377(std::vector<unsigned> v);`),
        structs: parseStruct(`void r7sp1377(std::vector<unsigned> v);`),
        classes: parseClass(`void r7sp1377(std::vector<unsigned> v);`),
        funcs: parseFunction(`void r7sp1377(std::vector<unsigned> v);`),
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
      assert.fail(`h2dtscpp_gen_1377 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1381
  * @tc.name gendtscpp_mix_ext_1381
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<char8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1381', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1381(std::vector<char8_t> v);`),
        unions: parseUnion(`void r7sp1381(std::vector<char8_t> v);`),
        structs: parseStruct(`void r7sp1381(std::vector<char8_t> v);`),
        classes: parseClass(`void r7sp1381(std::vector<char8_t> v);`),
        funcs: parseFunction(`void r7sp1381(std::vector<char8_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1381 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1382
  * @tc.name gendtscpp_mix_ext_1382
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<char16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1382', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1382(std::vector<char16_t> v);`),
        unions: parseUnion(`void r7sp1382(std::vector<char16_t> v);`),
        structs: parseStruct(`void r7sp1382(std::vector<char16_t> v);`),
        classes: parseClass(`void r7sp1382(std::vector<char16_t> v);`),
        funcs: parseFunction(`void r7sp1382(std::vector<char16_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1382 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1383
  * @tc.name gendtscpp_mix_ext_1383
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<char32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1383', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1383(std::vector<char32_t> v);`),
        unions: parseUnion(`void r7sp1383(std::vector<char32_t> v);`),
        structs: parseStruct(`void r7sp1383(std::vector<char32_t> v);`),
        classes: parseClass(`void r7sp1383(std::vector<char32_t> v);`),
        funcs: parseFunction(`void r7sp1383(std::vector<char32_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1383 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1384
  * @tc.name gendtscpp_mix_ext_1384
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1384', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1384(std::vector<int>::iterator v);`),
        unions: parseUnion(`void r7sp1384(std::vector<int>::iterator v);`),
        structs: parseStruct(`void r7sp1384(std::vector<int>::iterator v);`),
        classes: parseClass(`void r7sp1384(std::vector<int>::iterator v);`),
        funcs: parseFunction(`void r7sp1384(std::vector<int>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1384 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1385
  * @tc.name gendtscpp_mix_ext_1385
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1385', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1385(std::vector<size_t>::iterator v);`),
        unions: parseUnion(`void r7sp1385(std::vector<size_t>::iterator v);`),
        structs: parseStruct(`void r7sp1385(std::vector<size_t>::iterator v);`),
        classes: parseClass(`void r7sp1385(std::vector<size_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1385(std::vector<size_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1385 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1386
  * @tc.name gendtscpp_mix_ext_1386
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<double>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1386', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1386(std::vector<double>::iterator v);`),
        unions: parseUnion(`void r7sp1386(std::vector<double>::iterator v);`),
        structs: parseStruct(`void r7sp1386(std::vector<double>::iterator v);`),
        classes: parseClass(`void r7sp1386(std::vector<double>::iterator v);`),
        funcs: parseFunction(`void r7sp1386(std::vector<double>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1386 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1387
  * @tc.name gendtscpp_mix_ext_1387
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<float>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1387', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1387(std::vector<float>::iterator v);`),
        unions: parseUnion(`void r7sp1387(std::vector<float>::iterator v);`),
        structs: parseStruct(`void r7sp1387(std::vector<float>::iterator v);`),
        classes: parseClass(`void r7sp1387(std::vector<float>::iterator v);`),
        funcs: parseFunction(`void r7sp1387(std::vector<float>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1387 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1388
  * @tc.name gendtscpp_mix_ext_1388
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1388', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1388(std::vector<long>::iterator v);`),
        unions: parseUnion(`void r7sp1388(std::vector<long>::iterator v);`),
        structs: parseStruct(`void r7sp1388(std::vector<long>::iterator v);`),
        classes: parseClass(`void r7sp1388(std::vector<long>::iterator v);`),
        funcs: parseFunction(`void r7sp1388(std::vector<long>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1388 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1389
  * @tc.name gendtscpp_mix_ext_1389
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1389', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1389(std::vector<short>::iterator v);`),
        unions: parseUnion(`void r7sp1389(std::vector<short>::iterator v);`),
        structs: parseStruct(`void r7sp1389(std::vector<short>::iterator v);`),
        classes: parseClass(`void r7sp1389(std::vector<short>::iterator v);`),
        funcs: parseFunction(`void r7sp1389(std::vector<short>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1389 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1390
  * @tc.name gendtscpp_mix_ext_1390
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<uint8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1390', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1390(std::vector<uint8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1390(std::vector<uint8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1390(std::vector<uint8_t>::iterator v);`),
        classes: parseClass(`void r7sp1390(std::vector<uint8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1390(std::vector<uint8_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1390 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1391
  * @tc.name gendtscpp_mix_ext_1391
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<uint16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1391', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1391(std::vector<uint16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1391(std::vector<uint16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1391(std::vector<uint16_t>::iterator v);`),
        classes: parseClass(`void r7sp1391(std::vector<uint16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1391(std::vector<uint16_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1391 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1392
  * @tc.name gendtscpp_mix_ext_1392
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<uint32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1392', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1392(std::vector<uint32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1392(std::vector<uint32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1392(std::vector<uint32_t>::iterator v);`),
        classes: parseClass(`void r7sp1392(std::vector<uint32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1392(std::vector<uint32_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1392 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1393
  * @tc.name gendtscpp_mix_ext_1393
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<uint64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1393', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1393(std::vector<uint64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1393(std::vector<uint64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1393(std::vector<uint64_t>::iterator v);`),
        classes: parseClass(`void r7sp1393(std::vector<uint64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1393(std::vector<uint64_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1393 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1394
  * @tc.name gendtscpp_mix_ext_1394
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<int8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1394', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1394(std::vector<int8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1394(std::vector<int8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1394(std::vector<int8_t>::iterator v);`),
        classes: parseClass(`void r7sp1394(std::vector<int8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1394(std::vector<int8_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1394 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1395
  * @tc.name gendtscpp_mix_ext_1395
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<int16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1395', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1395(std::vector<int16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1395(std::vector<int16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1395(std::vector<int16_t>::iterator v);`),
        classes: parseClass(`void r7sp1395(std::vector<int16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1395(std::vector<int16_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1395 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1396
  * @tc.name gendtscpp_mix_ext_1396
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<int32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1396', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1396(std::vector<int32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1396(std::vector<int32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1396(std::vector<int32_t>::iterator v);`),
        classes: parseClass(`void r7sp1396(std::vector<int32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1396(std::vector<int32_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1396 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1397
  * @tc.name gendtscpp_mix_ext_1397
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<int64_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1397', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1397(std::vector<int64_t>::iterator v);`),
        unions: parseUnion(`void r7sp1397(std::vector<int64_t>::iterator v);`),
        structs: parseStruct(`void r7sp1397(std::vector<int64_t>::iterator v);`),
        classes: parseClass(`void r7sp1397(std::vector<int64_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1397(std::vector<int64_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1397 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1398
  * @tc.name gendtscpp_mix_ext_1398
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<unsigned>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1398', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1398(std::vector<unsigned>::iterator v);`),
        unions: parseUnion(`void r7sp1398(std::vector<unsigned>::iterator v);`),
        structs: parseStruct(`void r7sp1398(std::vector<unsigned>::iterator v);`),
        classes: parseClass(`void r7sp1398(std::vector<unsigned>::iterator v);`),
        funcs: parseFunction(`void r7sp1398(std::vector<unsigned>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1398 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1399
  * @tc.name gendtscpp_mix_ext_1399
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<bool>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1399', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1399(std::vector<bool>::iterator v);`),
        unions: parseUnion(`void r7sp1399(std::vector<bool>::iterator v);`),
        structs: parseStruct(`void r7sp1399(std::vector<bool>::iterator v);`),
        classes: parseClass(`void r7sp1399(std::vector<bool>::iterator v);`),
        funcs: parseFunction(`void r7sp1399(std::vector<bool>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1399 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1400
  * @tc.name gendtscpp_mix_ext_1400
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1400', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1400(std::vector<char>::iterator v);`),
        unions: parseUnion(`void r7sp1400(std::vector<char>::iterator v);`),
        structs: parseStruct(`void r7sp1400(std::vector<char>::iterator v);`),
        classes: parseClass(`void r7sp1400(std::vector<char>::iterator v);`),
        funcs: parseFunction(`void r7sp1400(std::vector<char>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1400 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1401
  * @tc.name gendtscpp_mix_ext_1401
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<wchar_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1401', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1401(std::vector<wchar_t>::iterator v);`),
        unions: parseUnion(`void r7sp1401(std::vector<wchar_t>::iterator v);`),
        structs: parseStruct(`void r7sp1401(std::vector<wchar_t>::iterator v);`),
        classes: parseClass(`void r7sp1401(std::vector<wchar_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1401(std::vector<wchar_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1401 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1402
  * @tc.name gendtscpp_mix_ext_1402
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<char8_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1402', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1402(std::vector<char8_t>::iterator v);`),
        unions: parseUnion(`void r7sp1402(std::vector<char8_t>::iterator v);`),
        structs: parseStruct(`void r7sp1402(std::vector<char8_t>::iterator v);`),
        classes: parseClass(`void r7sp1402(std::vector<char8_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1402(std::vector<char8_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1402 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1403
  * @tc.name gendtscpp_mix_ext_1403
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<char16_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1403', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1403(std::vector<char16_t>::iterator v);`),
        unions: parseUnion(`void r7sp1403(std::vector<char16_t>::iterator v);`),
        structs: parseStruct(`void r7sp1403(std::vector<char16_t>::iterator v);`),
        classes: parseClass(`void r7sp1403(std::vector<char16_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1403(std::vector<char16_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1403 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1404
  * @tc.name gendtscpp_mix_ext_1404
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<char32_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1404', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1404(std::vector<char32_t>::iterator v);`),
        unions: parseUnion(`void r7sp1404(std::vector<char32_t>::iterator v);`),
        structs: parseStruct(`void r7sp1404(std::vector<char32_t>::iterator v);`),
        classes: parseClass(`void r7sp1404(std::vector<char32_t>::iterator v);`),
        funcs: parseFunction(`void r7sp1404(std::vector<char32_t>::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1404 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1405
  * @tc.name gendtscpp_mix_ext_1405
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<int, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1405', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1405(std::array<int, 10> v);`),
        unions: parseUnion(`void r7sp1405(std::array<int, 10> v);`),
        structs: parseStruct(`void r7sp1405(std::array<int, 10> v);`),
        classes: parseClass(`void r7sp1405(std::array<int, 10> v);`),
        funcs: parseFunction(`void r7sp1405(std::array<int, 10> v);`),
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
      assert.fail(`h2dtscpp_gen_1405 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1406
  * @tc.name gendtscpp_mix_ext_1406
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<size_t, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1406', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1406(std::array<size_t, 10> v);`),
        unions: parseUnion(`void r7sp1406(std::array<size_t, 10> v);`),
        structs: parseStruct(`void r7sp1406(std::array<size_t, 10> v);`),
        classes: parseClass(`void r7sp1406(std::array<size_t, 10> v);`),
        funcs: parseFunction(`void r7sp1406(std::array<size_t, 10> v);`),
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
      assert.fail(`h2dtscpp_gen_1406 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1407
  * @tc.name gendtscpp_mix_ext_1407
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<double, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1407', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1407(std::array<double, 10> v);`),
        unions: parseUnion(`void r7sp1407(std::array<double, 10> v);`),
        structs: parseStruct(`void r7sp1407(std::array<double, 10> v);`),
        classes: parseClass(`void r7sp1407(std::array<double, 10> v);`),
        funcs: parseFunction(`void r7sp1407(std::array<double, 10> v);`),
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
      assert.fail(`h2dtscpp_gen_1407 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1408
  * @tc.name gendtscpp_mix_ext_1408
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<float, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1408', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1408(std::array<float, 10> v);`),
        unions: parseUnion(`void r7sp1408(std::array<float, 10> v);`),
        structs: parseStruct(`void r7sp1408(std::array<float, 10> v);`),
        classes: parseClass(`void r7sp1408(std::array<float, 10> v);`),
        funcs: parseFunction(`void r7sp1408(std::array<float, 10> v);`),
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
      assert.fail(`h2dtscpp_gen_1408 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1409
  * @tc.name gendtscpp_mix_ext_1409
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<long, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1409', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1409(std::array<long, 10> v);`),
        unions: parseUnion(`void r7sp1409(std::array<long, 10> v);`),
        structs: parseStruct(`void r7sp1409(std::array<long, 10> v);`),
        classes: parseClass(`void r7sp1409(std::array<long, 10> v);`),
        funcs: parseFunction(`void r7sp1409(std::array<long, 10> v);`),
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
      assert.fail(`h2dtscpp_gen_1409 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1410
  * @tc.name gendtscpp_mix_ext_1410
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::array<short, 10>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1410', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1410(std::array<short, 10> v);`),
        unions: parseUnion(`void r7sp1410(std::array<short, 10> v);`),
        structs: parseStruct(`void r7sp1410(std::array<short, 10> v);`),
        classes: parseClass(`void r7sp1410(std::array<short, 10> v);`),
        funcs: parseFunction(`void r7sp1410(std::array<short, 10> v);`),
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
      assert.fail(`h2dtscpp_gen_1410 执行异常: ${String(err)}`);
    }
  });
});
