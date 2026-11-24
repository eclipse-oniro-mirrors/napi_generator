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

suite('Gendtscpp_transParseObj_Suite_Ext30', function () {
  /**
  * @tc.number h2dtscpp_tpo_1016
  * @tc.name gendtscpp_tpo_ext_1016
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1016', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1016(std::set<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp1016(std::set<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp1016(std::set<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp1016(std::set<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp1016(std::set<unsigned long long>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1017
  * @tc.name gendtscpp_tpo_ext_1017
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1017', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1017(std::set<int *>::iterator v);`),
        unions: parseUnion(`void r8sp1017(std::set<int *>::iterator v);`),
        structs: parseStruct(`void r8sp1017(std::set<int *>::iterator v);`),
        classes: parseClass(`void r8sp1017(std::set<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp1017(std::set<int *>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1019
  * @tc.name gendtscpp_tpo_ext_1019
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1019', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1019(std::unordered_set<char *> v);`),
        unions: parseUnion(`void r8sp1019(std::unordered_set<char *> v);`),
        structs: parseStruct(`void r8sp1019(std::unordered_set<char *> v);`),
        classes: parseClass(`void r8sp1019(std::unordered_set<char *> v);`),
        funcs: parseFunction(`void r8sp1019(std::unordered_set<char *> v);`),
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
      assert.fail(`h2dtscpp_tpo_1019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1020
  * @tc.name gendtscpp_tpo_ext_1020
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1020', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1020(std::unordered_set<long long> v);`),
        unions: parseUnion(`void r8sp1020(std::unordered_set<long long> v);`),
        structs: parseStruct(`void r8sp1020(std::unordered_set<long long> v);`),
        classes: parseClass(`void r8sp1020(std::unordered_set<long long> v);`),
        funcs: parseFunction(`void r8sp1020(std::unordered_set<long long> v);`),
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
      assert.fail(`h2dtscpp_tpo_1020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1021
  * @tc.name gendtscpp_tpo_ext_1021
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1021', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1021(std::unordered_set<unsigned short> v);`),
        unions: parseUnion(`void r8sp1021(std::unordered_set<unsigned short> v);`),
        structs: parseStruct(`void r8sp1021(std::unordered_set<unsigned short> v);`),
        classes: parseClass(`void r8sp1021(std::unordered_set<unsigned short> v);`),
        funcs: parseFunction(`void r8sp1021(std::unordered_set<unsigned short> v);`),
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
      assert.fail(`h2dtscpp_tpo_1021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1022
  * @tc.name gendtscpp_tpo_ext_1022
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1022', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1022(std::unordered_set<unsigned long> v);`),
        unions: parseUnion(`void r8sp1022(std::unordered_set<unsigned long> v);`),
        structs: parseStruct(`void r8sp1022(std::unordered_set<unsigned long> v);`),
        classes: parseClass(`void r8sp1022(std::unordered_set<unsigned long> v);`),
        funcs: parseFunction(`void r8sp1022(std::unordered_set<unsigned long> v);`),
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
      assert.fail(`h2dtscpp_tpo_1022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1023
  * @tc.name gendtscpp_tpo_ext_1023
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1023', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1023(std::unordered_set<unsigned long long> v);`),
        unions: parseUnion(`void r8sp1023(std::unordered_set<unsigned long long> v);`),
        structs: parseStruct(`void r8sp1023(std::unordered_set<unsigned long long> v);`),
        classes: parseClass(`void r8sp1023(std::unordered_set<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp1023(std::unordered_set<unsigned long long> v);`),
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
      assert.fail(`h2dtscpp_tpo_1023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1024
  * @tc.name gendtscpp_tpo_ext_1024
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1024', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1024(std::unordered_set<int *> v);`),
        unions: parseUnion(`void r8sp1024(std::unordered_set<int *> v);`),
        structs: parseStruct(`void r8sp1024(std::unordered_set<int *> v);`),
        classes: parseClass(`void r8sp1024(std::unordered_set<int *> v);`),
        funcs: parseFunction(`void r8sp1024(std::unordered_set<int *> v);`),
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
      assert.fail(`h2dtscpp_tpo_1024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1025
  * @tc.name gendtscpp_tpo_ext_1025
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1025', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1025(std::unordered_set<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp1025(std::unordered_set<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp1025(std::unordered_set<std::string>::iterator v);`),
        classes: parseClass(`void r8sp1025(std::unordered_set<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp1025(std::unordered_set<std::string>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1026
  * @tc.name gendtscpp_tpo_ext_1026
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1026', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1026(std::unordered_set<char *>::iterator v);`),
        unions: parseUnion(`void r8sp1026(std::unordered_set<char *>::iterator v);`),
        structs: parseStruct(`void r8sp1026(std::unordered_set<char *>::iterator v);`),
        classes: parseClass(`void r8sp1026(std::unordered_set<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp1026(std::unordered_set<char *>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1027
  * @tc.name gendtscpp_tpo_ext_1027
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1027', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1027(std::unordered_set<long long>::iterator v);`),
        unions: parseUnion(`void r8sp1027(std::unordered_set<long long>::iterator v);`),
        structs: parseStruct(`void r8sp1027(std::unordered_set<long long>::iterator v);`),
        classes: parseClass(`void r8sp1027(std::unordered_set<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp1027(std::unordered_set<long long>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1028
  * @tc.name gendtscpp_tpo_ext_1028
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1028', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1028(std::unordered_set<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp1028(std::unordered_set<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp1028(std::unordered_set<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp1028(std::unordered_set<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp1028(std::unordered_set<unsigned short>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1029
  * @tc.name gendtscpp_tpo_ext_1029
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1029', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1029(std::unordered_set<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp1029(std::unordered_set<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp1029(std::unordered_set<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp1029(std::unordered_set<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp1029(std::unordered_set<unsigned long>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1030
  * @tc.name gendtscpp_tpo_ext_1030
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1030', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1030(std::unordered_set<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp1030(std::unordered_set<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp1030(std::unordered_set<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp1030(std::unordered_set<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp1030(std::unordered_set<unsigned long long>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1031
  * @tc.name gendtscpp_tpo_ext_1031
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_set<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1031', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1031(std::unordered_set<int *>::iterator v);`),
        unions: parseUnion(`void r8sp1031(std::unordered_set<int *>::iterator v);`),
        structs: parseStruct(`void r8sp1031(std::unordered_set<int *>::iterator v);`),
        classes: parseClass(`void r8sp1031(std::unordered_set<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp1031(std::unordered_set<int *>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1032
  * @tc.name gendtscpp_tpo_ext_1032
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1032', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1032(std::multiset<std::string> v);`),
        unions: parseUnion(`void r8sp1032(std::multiset<std::string> v);`),
        structs: parseStruct(`void r8sp1032(std::multiset<std::string> v);`),
        classes: parseClass(`void r8sp1032(std::multiset<std::string> v);`),
        funcs: parseFunction(`void r8sp1032(std::multiset<std::string> v);`),
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
      assert.fail(`h2dtscpp_tpo_1032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1033
  * @tc.name gendtscpp_tpo_ext_1033
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1033', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1033(std::multiset<char *> v);`),
        unions: parseUnion(`void r8sp1033(std::multiset<char *> v);`),
        structs: parseStruct(`void r8sp1033(std::multiset<char *> v);`),
        classes: parseClass(`void r8sp1033(std::multiset<char *> v);`),
        funcs: parseFunction(`void r8sp1033(std::multiset<char *> v);`),
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
      assert.fail(`h2dtscpp_tpo_1033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1034
  * @tc.name gendtscpp_tpo_ext_1034
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1034', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1034(std::multiset<long long> v);`),
        unions: parseUnion(`void r8sp1034(std::multiset<long long> v);`),
        structs: parseStruct(`void r8sp1034(std::multiset<long long> v);`),
        classes: parseClass(`void r8sp1034(std::multiset<long long> v);`),
        funcs: parseFunction(`void r8sp1034(std::multiset<long long> v);`),
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
      assert.fail(`h2dtscpp_tpo_1034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1035
  * @tc.name gendtscpp_tpo_ext_1035
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1035', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1035(std::multiset<unsigned short> v);`),
        unions: parseUnion(`void r8sp1035(std::multiset<unsigned short> v);`),
        structs: parseStruct(`void r8sp1035(std::multiset<unsigned short> v);`),
        classes: parseClass(`void r8sp1035(std::multiset<unsigned short> v);`),
        funcs: parseFunction(`void r8sp1035(std::multiset<unsigned short> v);`),
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
      assert.fail(`h2dtscpp_tpo_1035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1036
  * @tc.name gendtscpp_tpo_ext_1036
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1036', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1036(std::multiset<unsigned long> v);`),
        unions: parseUnion(`void r8sp1036(std::multiset<unsigned long> v);`),
        structs: parseStruct(`void r8sp1036(std::multiset<unsigned long> v);`),
        classes: parseClass(`void r8sp1036(std::multiset<unsigned long> v);`),
        funcs: parseFunction(`void r8sp1036(std::multiset<unsigned long> v);`),
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
      assert.fail(`h2dtscpp_tpo_1036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1037
  * @tc.name gendtscpp_tpo_ext_1037
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1037', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1037(std::multiset<unsigned long long> v);`),
        unions: parseUnion(`void r8sp1037(std::multiset<unsigned long long> v);`),
        structs: parseStruct(`void r8sp1037(std::multiset<unsigned long long> v);`),
        classes: parseClass(`void r8sp1037(std::multiset<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp1037(std::multiset<unsigned long long> v);`),
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
      assert.fail(`h2dtscpp_tpo_1037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1038
  * @tc.name gendtscpp_tpo_ext_1038
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1038', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1038(std::multiset<int *> v);`),
        unions: parseUnion(`void r8sp1038(std::multiset<int *> v);`),
        structs: parseStruct(`void r8sp1038(std::multiset<int *> v);`),
        classes: parseClass(`void r8sp1038(std::multiset<int *> v);`),
        funcs: parseFunction(`void r8sp1038(std::multiset<int *> v);`),
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
      assert.fail(`h2dtscpp_tpo_1038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1039
  * @tc.name gendtscpp_tpo_ext_1039
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1039', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1039(std::multiset<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp1039(std::multiset<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp1039(std::multiset<std::string>::iterator v);`),
        classes: parseClass(`void r8sp1039(std::multiset<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp1039(std::multiset<std::string>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1040
  * @tc.name gendtscpp_tpo_ext_1040
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1040', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1040(std::multiset<char *>::iterator v);`),
        unions: parseUnion(`void r8sp1040(std::multiset<char *>::iterator v);`),
        structs: parseStruct(`void r8sp1040(std::multiset<char *>::iterator v);`),
        classes: parseClass(`void r8sp1040(std::multiset<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp1040(std::multiset<char *>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1041
  * @tc.name gendtscpp_tpo_ext_1041
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1041', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1041(std::multiset<long long>::iterator v);`),
        unions: parseUnion(`void r8sp1041(std::multiset<long long>::iterator v);`),
        structs: parseStruct(`void r8sp1041(std::multiset<long long>::iterator v);`),
        classes: parseClass(`void r8sp1041(std::multiset<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp1041(std::multiset<long long>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1042
  * @tc.name gendtscpp_tpo_ext_1042
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1042', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1042(std::multiset<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp1042(std::multiset<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp1042(std::multiset<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp1042(std::multiset<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp1042(std::multiset<unsigned short>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1042 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1043
  * @tc.name gendtscpp_tpo_ext_1043
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1043', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1043(std::multiset<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp1043(std::multiset<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp1043(std::multiset<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp1043(std::multiset<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp1043(std::multiset<unsigned long>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1044
  * @tc.name gendtscpp_tpo_ext_1044
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1044', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1044(std::multiset<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp1044(std::multiset<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp1044(std::multiset<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp1044(std::multiset<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp1044(std::multiset<unsigned long long>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1045
  * @tc.name gendtscpp_tpo_ext_1045
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multiset<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1045', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1045(std::multiset<int *>::iterator v);`),
        unions: parseUnion(`void r8sp1045(std::multiset<int *>::iterator v);`),
        structs: parseStruct(`void r8sp1045(std::multiset<int *>::iterator v);`),
        classes: parseClass(`void r8sp1045(std::multiset<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp1045(std::multiset<int *>::iterator v);`),
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
      assert.fail(`h2dtscpp_tpo_1045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1046
  * @tc.name gendtscpp_tpo_ext_1046
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1046', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1046(std::unordered_multiset<std::string> v);`),
        unions: parseUnion(`void r8sp1046(std::unordered_multiset<std::string> v);`),
        structs: parseStruct(`void r8sp1046(std::unordered_multiset<std::string> v);`),
        classes: parseClass(`void r8sp1046(std::unordered_multiset<std::string> v);`),
        funcs: parseFunction(`void r8sp1046(std::unordered_multiset<std::string> v);`),
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
      assert.fail(`h2dtscpp_tpo_1046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1047
  * @tc.name gendtscpp_tpo_ext_1047
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1047', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1047(std::unordered_multiset<char *> v);`),
        unions: parseUnion(`void r8sp1047(std::unordered_multiset<char *> v);`),
        structs: parseStruct(`void r8sp1047(std::unordered_multiset<char *> v);`),
        classes: parseClass(`void r8sp1047(std::unordered_multiset<char *> v);`),
        funcs: parseFunction(`void r8sp1047(std::unordered_multiset<char *> v);`),
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
      assert.fail(`h2dtscpp_tpo_1047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1048
  * @tc.name gendtscpp_tpo_ext_1048
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1048', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1048(std::unordered_multiset<long long> v);`),
        unions: parseUnion(`void r8sp1048(std::unordered_multiset<long long> v);`),
        structs: parseStruct(`void r8sp1048(std::unordered_multiset<long long> v);`),
        classes: parseClass(`void r8sp1048(std::unordered_multiset<long long> v);`),
        funcs: parseFunction(`void r8sp1048(std::unordered_multiset<long long> v);`),
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
      assert.fail(`h2dtscpp_tpo_1048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1049
  * @tc.name gendtscpp_tpo_ext_1049
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1049', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1049(std::unordered_multiset<unsigned short> v);`),
        unions: parseUnion(`void r8sp1049(std::unordered_multiset<unsigned short> v);`),
        structs: parseStruct(`void r8sp1049(std::unordered_multiset<unsigned short> v);`),
        classes: parseClass(`void r8sp1049(std::unordered_multiset<unsigned short> v);`),
        funcs: parseFunction(`void r8sp1049(std::unordered_multiset<unsigned short> v);`),
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
      assert.fail(`h2dtscpp_tpo_1049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1050
  * @tc.name gendtscpp_tpo_ext_1050
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multiset<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1050', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1050(std::unordered_multiset<unsigned long> v);`),
        unions: parseUnion(`void r8sp1050(std::unordered_multiset<unsigned long> v);`),
        structs: parseStruct(`void r8sp1050(std::unordered_multiset<unsigned long> v);`),
        classes: parseClass(`void r8sp1050(std::unordered_multiset<unsigned long> v);`),
        funcs: parseFunction(`void r8sp1050(std::unordered_multiset<unsigned long> v);`),
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
      assert.fail(`h2dtscpp_tpo_1050 执行异常: ${String(err)}`);
    }
  });
});
