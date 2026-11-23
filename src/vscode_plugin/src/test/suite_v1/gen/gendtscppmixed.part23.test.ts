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

suite('Gendtscpp_mixed_Suite_Ext23', function () {
  /**
  * @tc.number h2dtscpp_gen_1355
  * @tc.name gendtscpp_mix_ext_1355
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `unsigned` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1355', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1355(unsigned v);`),
        unions: parseUnion(`void r7sp1355(unsigned v);`),
        structs: parseStruct(`void r7sp1355(unsigned v);`),
        classes: parseClass(`void r7sp1355(unsigned v);`),
        funcs: parseFunction(`void r7sp1355(unsigned v);`),
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
      assert.fail(`h2dtscpp_gen_1355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1359
  * @tc.name gendtscpp_mix_ext_1359
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `char8_t` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1359', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1359(char8_t v);`),
        unions: parseUnion(`void r7sp1359(char8_t v);`),
        structs: parseStruct(`void r7sp1359(char8_t v);`),
        classes: parseClass(`void r7sp1359(char8_t v);`),
        funcs: parseFunction(`void r7sp1359(char8_t v);`),
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
      assert.fail(`h2dtscpp_gen_1359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1362
  * @tc.name gendtscpp_mix_ext_1362
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::string::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1362', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1362(std::string::iterator v);`),
        unions: parseUnion(`void r7sp1362(std::string::iterator v);`),
        structs: parseStruct(`void r7sp1362(std::string::iterator v);`),
        classes: parseClass(`void r7sp1362(std::string::iterator v);`),
        funcs: parseFunction(`void r7sp1362(std::string::iterator v);`),
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
      assert.fail(`h2dtscpp_gen_1362 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1370
  * @tc.name gendtscpp_mix_ext_1370
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<uint16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1370', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1370(std::vector<uint16_t> v);`),
        unions: parseUnion(`void r7sp1370(std::vector<uint16_t> v);`),
        structs: parseStruct(`void r7sp1370(std::vector<uint16_t> v);`),
        classes: parseClass(`void r7sp1370(std::vector<uint16_t> v);`),
        funcs: parseFunction(`void r7sp1370(std::vector<uint16_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1370 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1371
  * @tc.name gendtscpp_mix_ext_1371
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<uint32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1371', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1371(std::vector<uint32_t> v);`),
        unions: parseUnion(`void r7sp1371(std::vector<uint32_t> v);`),
        structs: parseStruct(`void r7sp1371(std::vector<uint32_t> v);`),
        classes: parseClass(`void r7sp1371(std::vector<uint32_t> v);`),
        funcs: parseFunction(`void r7sp1371(std::vector<uint32_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1371 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1372
  * @tc.name gendtscpp_mix_ext_1372
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<uint64_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1372', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1372(std::vector<uint64_t> v);`),
        unions: parseUnion(`void r7sp1372(std::vector<uint64_t> v);`),
        structs: parseStruct(`void r7sp1372(std::vector<uint64_t> v);`),
        classes: parseClass(`void r7sp1372(std::vector<uint64_t> v);`),
        funcs: parseFunction(`void r7sp1372(std::vector<uint64_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1372 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1373
  * @tc.name gendtscpp_mix_ext_1373
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<int8_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1373', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1373(std::vector<int8_t> v);`),
        unions: parseUnion(`void r7sp1373(std::vector<int8_t> v);`),
        structs: parseStruct(`void r7sp1373(std::vector<int8_t> v);`),
        classes: parseClass(`void r7sp1373(std::vector<int8_t> v);`),
        funcs: parseFunction(`void r7sp1373(std::vector<int8_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1373 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1374
  * @tc.name gendtscpp_mix_ext_1374
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<int16_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1374', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1374(std::vector<int16_t> v);`),
        unions: parseUnion(`void r7sp1374(std::vector<int16_t> v);`),
        structs: parseStruct(`void r7sp1374(std::vector<int16_t> v);`),
        classes: parseClass(`void r7sp1374(std::vector<int16_t> v);`),
        funcs: parseFunction(`void r7sp1374(std::vector<int16_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1374 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_1375
  * @tc.name gendtscpp_mix_ext_1375
  * @tc.desc h2dtscpp transParseObj：扩充-R7-单类型 `std::vector<int32_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_mix_ext_1375', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r7sp1375(std::vector<int32_t> v);`),
        unions: parseUnion(`void r7sp1375(std::vector<int32_t> v);`),
        structs: parseStruct(`void r7sp1375(std::vector<int32_t> v);`),
        classes: parseClass(`void r7sp1375(std::vector<int32_t> v);`),
        funcs: parseFunction(`void r7sp1375(std::vector<int32_t> v);`),
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
      assert.fail(`h2dtscpp_gen_1375 执行异常: ${String(err)}`);
    }
  });
});
