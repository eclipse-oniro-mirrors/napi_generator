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

suite('Gendtscpp_transParseObj_Suite_Ext32', function () {
  /**
  * @tc.number h2dtscpp_tpo_1086
  * @tc.name gendtscpp_tpo_ext_1086
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1086', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1086(std::weak_ptr<long long> v);`),
        unions: parseUnion(`void r8sp1086(std::weak_ptr<long long> v);`),
        structs: parseStruct(`void r8sp1086(std::weak_ptr<long long> v);`),
        classes: parseClass(`void r8sp1086(std::weak_ptr<long long> v);`),
        funcs: parseFunction(`void r8sp1086(std::weak_ptr<long long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1087
  * @tc.name gendtscpp_tpo_ext_1087
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1087', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1087(std::weak_ptr<unsigned short> v);`),
        unions: parseUnion(`void r8sp1087(std::weak_ptr<unsigned short> v);`),
        structs: parseStruct(`void r8sp1087(std::weak_ptr<unsigned short> v);`),
        classes: parseClass(`void r8sp1087(std::weak_ptr<unsigned short> v);`),
        funcs: parseFunction(`void r8sp1087(std::weak_ptr<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1088
  * @tc.name gendtscpp_tpo_ext_1088
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1088', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1088(std::weak_ptr<unsigned long> v);`),
        unions: parseUnion(`void r8sp1088(std::weak_ptr<unsigned long> v);`),
        structs: parseStruct(`void r8sp1088(std::weak_ptr<unsigned long> v);`),
        classes: parseClass(`void r8sp1088(std::weak_ptr<unsigned long> v);`),
        funcs: parseFunction(`void r8sp1088(std::weak_ptr<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1089
  * @tc.name gendtscpp_tpo_ext_1089
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1089', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1089(std::weak_ptr<unsigned long long> v);`),
        unions: parseUnion(`void r8sp1089(std::weak_ptr<unsigned long long> v);`),
        structs: parseStruct(`void r8sp1089(std::weak_ptr<unsigned long long> v);`),
        classes: parseClass(`void r8sp1089(std::weak_ptr<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp1089(std::weak_ptr<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1090
  * @tc.name gendtscpp_tpo_ext_1090
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1090', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1090(std::weak_ptr<int *> v);`),
        unions: parseUnion(`void r8sp1090(std::weak_ptr<int *> v);`),
        structs: parseStruct(`void r8sp1090(std::weak_ptr<int *> v);`),
        classes: parseClass(`void r8sp1090(std::weak_ptr<int *> v);`),
        funcs: parseFunction(`void r8sp1090(std::weak_ptr<int *> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1091
  * @tc.name gendtscpp_tpo_ext_1091
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `int$#` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1091', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1091(int\$# v);`),
        unions: parseUnion(`void r8sp1091(int\$# v);`),
        structs: parseStruct(`void r8sp1091(int\$# v);`),
        classes: parseClass(`void r8sp1091(int\$# v);`),
        funcs: parseFunction(`void r8sp1091(int\$# v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1092
  * @tc.name gendtscpp_tpo_ext_1092
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `MyType` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1092', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1092(MyType v);`),
        unions: parseUnion(`void r8sp1092(MyType v);`),
        structs: parseStruct(`void r8sp1092(MyType v);`),
        classes: parseClass(`void r8sp1092(MyType v);`),
        funcs: parseFunction(`void r8sp1092(MyType v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1093
  * @tc.name gendtscpp_tpo_ext_1093
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `defined type` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1093', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1093(defined type v);`),
        unions: parseUnion(`void r8sp1093(defined type v);`),
        structs: parseStruct(`void r8sp1093(defined type v);`),
        classes: parseClass(`void r8sp1093(defined type v);`),
        funcs: parseFunction(`void r8sp1093(defined type v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1094
  * @tc.name gendtscpp_tpo_ext_1094
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::weak_ptr<` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1094', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1094(std::weak_ptr< v);`),
        unions: parseUnion(`void r8sp1094(std::weak_ptr< v);`),
        structs: parseStruct(`void r8sp1094(std::weak_ptr< v);`),
        classes: parseClass(`void r8sp1094(std::weak_ptr< v);`),
        funcs: parseFunction(`void r8sp1094(std::weak_ptr< v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1094 执行异常: ${String(err)}`);
    }
  });
});
