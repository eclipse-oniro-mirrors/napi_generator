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

suite('Gendtscpp_transParseObj_Suite_Ext29', function () {
  /**
  * @tc.number h2dtscpp_tpo_0981
  * @tc.name gendtscpp_tpo_ext_0981
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<char *, unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0981', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp981(std::multimap<char *, unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp981(std::multimap<char *, unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp981(std::multimap<char *, unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp981(std::multimap<char *, unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp981(std::multimap<char *, unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0981 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0982
  * @tc.name gendtscpp_tpo_ext_0982
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<std::string, unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0982', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp982(std::multimap<std::string, unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp982(std::multimap<std::string, unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp982(std::multimap<std::string, unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp982(std::multimap<std::string, unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp982(std::multimap<std::string, unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0982 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0983
  * @tc.name gendtscpp_tpo_ext_0983
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<int *, std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0983', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp983(std::multimap<int *, std::string>::iterator v);`),
        unions: parseUnion(`void r8sp983(std::multimap<int *, std::string>::iterator v);`),
        structs: parseStruct(`void r8sp983(std::multimap<int *, std::string>::iterator v);`),
        classes: parseClass(`void r8sp983(std::multimap<int *, std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp983(std::multimap<int *, std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0983 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0984
  * @tc.name gendtscpp_tpo_ext_0984
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<double, char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0984', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp984(std::multimap<double, char *>::iterator v);`),
        unions: parseUnion(`void r8sp984(std::multimap<double, char *>::iterator v);`),
        structs: parseStruct(`void r8sp984(std::multimap<double, char *>::iterator v);`),
        classes: parseClass(`void r8sp984(std::multimap<double, char *>::iterator v);`),
        funcs: parseFunction(`void r8sp984(std::multimap<double, char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0984 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0985
  * @tc.name gendtscpp_tpo_ext_0985
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::multimap<int *, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0985', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp985(std::multimap<int *, char>::iterator v);`),
        unions: parseUnion(`void r8sp985(std::multimap<int *, char>::iterator v);`),
        structs: parseStruct(`void r8sp985(std::multimap<int *, char>::iterator v);`),
        classes: parseClass(`void r8sp985(std::multimap<int *, char>::iterator v);`),
        funcs: parseFunction(`void r8sp985(std::multimap<int *, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0985 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0986
  * @tc.name gendtscpp_tpo_ext_0986
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<std::string, int>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0986', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp986(std::unordered_multimap<std::string, int> v);`),
        unions: parseUnion(`void r8sp986(std::unordered_multimap<std::string, int> v);`),
        structs: parseStruct(`void r8sp986(std::unordered_multimap<std::string, int> v);`),
        classes: parseClass(`void r8sp986(std::unordered_multimap<std::string, int> v);`),
        funcs: parseFunction(`void r8sp986(std::unordered_multimap<std::string, int> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0986 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0987
  * @tc.name gendtscpp_tpo_ext_0987
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<charb *, size_t>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0987', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp987(std::unordered_multimap<charb *, size_t> v);`),
        unions: parseUnion(`void r8sp987(std::unordered_multimap<charb *, size_t> v);`),
        structs: parseStruct(`void r8sp987(std::unordered_multimap<charb *, size_t> v);`),
        classes: parseClass(`void r8sp987(std::unordered_multimap<charb *, size_t> v);`),
        funcs: parseFunction(`void r8sp987(std::unordered_multimap<charb *, size_t> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0987 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0988
  * @tc.name gendtscpp_tpo_ext_0988
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<std::string, long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0988', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp988(std::unordered_multimap<std::string, long long> v);`),
        unions: parseUnion(`void r8sp988(std::unordered_multimap<std::string, long long> v);`),
        structs: parseStruct(`void r8sp988(std::unordered_multimap<std::string, long long> v);`),
        classes: parseClass(`void r8sp988(std::unordered_multimap<std::string, long long> v);`),
        funcs: parseFunction(`void r8sp988(std::unordered_multimap<std::string, long long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0988 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0989
  * @tc.name gendtscpp_tpo_ext_0989
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char *, int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0989', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp989(std::unordered_multimap<char *, int *> v);`),
        unions: parseUnion(`void r8sp989(std::unordered_multimap<char *, int *> v);`),
        structs: parseStruct(`void r8sp989(std::unordered_multimap<char *, int *> v);`),
        classes: parseClass(`void r8sp989(std::unordered_multimap<char *, int *> v);`),
        funcs: parseFunction(`void r8sp989(std::unordered_multimap<char *, int *> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0989 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0990
  * @tc.name gendtscpp_tpo_ext_0990
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char *, unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0990', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp990(std::unordered_multimap<char *, unsigned long long> v);`),
        unions: parseUnion(`void r8sp990(std::unordered_multimap<char *, unsigned long long> v);`),
        structs: parseStruct(`void r8sp990(std::unordered_multimap<char *, unsigned long long> v);`),
        classes: parseClass(`void r8sp990(std::unordered_multimap<char *, unsigned long long> v);`),
        funcs: parseFunction(`void r8sp990(std::unordered_multimap<char *, unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0990 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0991
  * @tc.name gendtscpp_tpo_ext_0991
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<std::string, unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0991', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp991(std::unordered_multimap<std::string, unsigned short> v);`),
        unions: parseUnion(`void r8sp991(std::unordered_multimap<std::string, unsigned short> v);`),
        structs: parseStruct(`void r8sp991(std::unordered_multimap<std::string, unsigned short> v);`),
        classes: parseClass(`void r8sp991(std::unordered_multimap<std::string, unsigned short> v);`),
        funcs: parseFunction(`void r8sp991(std::unordered_multimap<std::string, unsigned short> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0991 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0992
  * @tc.name gendtscpp_tpo_ext_0992
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<int *, std::string>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0992', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp992(std::unordered_multimap<int *, std::string> v);`),
        unions: parseUnion(`void r8sp992(std::unordered_multimap<int *, std::string> v);`),
        structs: parseStruct(`void r8sp992(std::unordered_multimap<int *, std::string> v);`),
        classes: parseClass(`void r8sp992(std::unordered_multimap<int *, std::string> v);`),
        funcs: parseFunction(`void r8sp992(std::unordered_multimap<int *, std::string> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0992 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0993
  * @tc.name gendtscpp_tpo_ext_0993
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<double, char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0993', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp993(std::unordered_multimap<double, char *> v);`),
        unions: parseUnion(`void r8sp993(std::unordered_multimap<double, char *> v);`),
        structs: parseStruct(`void r8sp993(std::unordered_multimap<double, char *> v);`),
        classes: parseClass(`void r8sp993(std::unordered_multimap<double, char *> v);`),
        funcs: parseFunction(`void r8sp993(std::unordered_multimap<double, char *> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0993 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0994
  * @tc.name gendtscpp_tpo_ext_0994
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<int *, char>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0994', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp994(std::unordered_multimap<int *, char> v);`),
        unions: parseUnion(`void r8sp994(std::unordered_multimap<int *, char> v);`),
        structs: parseStruct(`void r8sp994(std::unordered_multimap<int *, char> v);`),
        classes: parseClass(`void r8sp994(std::unordered_multimap<int *, char> v);`),
        funcs: parseFunction(`void r8sp994(std::unordered_multimap<int *, char> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0994 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0995
  * @tc.name gendtscpp_tpo_ext_0995
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<std::string, int>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0995', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp995(std::unordered_multimap<std::string, int>::iterator v);`),
        unions: parseUnion(`void r8sp995(std::unordered_multimap<std::string, int>::iterator v);`),
        structs: parseStruct(`void r8sp995(std::unordered_multimap<std::string, int>::iterator v);`),
        classes: parseClass(`void r8sp995(std::unordered_multimap<std::string, int>::iterator v);`),
        funcs: parseFunction(`void r8sp995(std::unordered_multimap<std::string, int>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0995 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0996
  * @tc.name gendtscpp_tpo_ext_0996
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<charb *, size_t>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0996', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp996(std::unordered_multimap<charb *, size_t>::iterator v);`),
        unions: parseUnion(`void r8sp996(std::unordered_multimap<charb *, size_t>::iterator v);`),
        structs: parseStruct(`void r8sp996(std::unordered_multimap<charb *, size_t>::iterator v);`),
        classes: parseClass(`void r8sp996(std::unordered_multimap<charb *, size_t>::iterator v);`),
        funcs: parseFunction(`void r8sp996(std::unordered_multimap<charb *, size_t>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0996 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0997
  * @tc.name gendtscpp_tpo_ext_0997
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<std::string, long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0997', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp997(std::unordered_multimap<std::string, long long>::iterator v);`),
        unions: parseUnion(`void r8sp997(std::unordered_multimap<std::string, long long>::iterator v);`),
        structs: parseStruct(`void r8sp997(std::unordered_multimap<std::string, long long>::iterator v);`),
        classes: parseClass(`void r8sp997(std::unordered_multimap<std::string, long long>::iterator v);`),
        funcs: parseFunction(`void r8sp997(std::unordered_multimap<std::string, long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0997 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0998
  * @tc.name gendtscpp_tpo_ext_0998
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char *, int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0998', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp998(std::unordered_multimap<char *, int *>::iterator v);`),
        unions: parseUnion(`void r8sp998(std::unordered_multimap<char *, int *>::iterator v);`),
        structs: parseStruct(`void r8sp998(std::unordered_multimap<char *, int *>::iterator v);`),
        classes: parseClass(`void r8sp998(std::unordered_multimap<char *, int *>::iterator v);`),
        funcs: parseFunction(`void r8sp998(std::unordered_multimap<char *, int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0998 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0999
  * @tc.name gendtscpp_tpo_ext_0999
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<char *, unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0999', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp999(std::unordered_multimap<char *, unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp999(std::unordered_multimap<char *, unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp999(std::unordered_multimap<char *, unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp999(std::unordered_multimap<char *, unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp999(std::unordered_multimap<char *, unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0999 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1000
  * @tc.name gendtscpp_tpo_ext_1000
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<std::string, unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1000', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1000(std::unordered_multimap<std::string, unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp1000(std::unordered_multimap<std::string, unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp1000(std::unordered_multimap<std::string, unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp1000(std::unordered_multimap<std::string, unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp1000(std::unordered_multimap<std::string, unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1000 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1001
  * @tc.name gendtscpp_tpo_ext_1001
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<int *, std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1001', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1001(std::unordered_multimap<int *, std::string>::iterator v);`),
        unions: parseUnion(`void r8sp1001(std::unordered_multimap<int *, std::string>::iterator v);`),
        structs: parseStruct(`void r8sp1001(std::unordered_multimap<int *, std::string>::iterator v);`),
        classes: parseClass(`void r8sp1001(std::unordered_multimap<int *, std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp1001(std::unordered_multimap<int *, std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1002
  * @tc.name gendtscpp_tpo_ext_1002
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<double, char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1002', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1002(std::unordered_multimap<double, char *>::iterator v);`),
        unions: parseUnion(`void r8sp1002(std::unordered_multimap<double, char *>::iterator v);`),
        structs: parseStruct(`void r8sp1002(std::unordered_multimap<double, char *>::iterator v);`),
        classes: parseClass(`void r8sp1002(std::unordered_multimap<double, char *>::iterator v);`),
        funcs: parseFunction(`void r8sp1002(std::unordered_multimap<double, char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1003
  * @tc.name gendtscpp_tpo_ext_1003
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::unordered_multimap<int *, char>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1003', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1003(std::unordered_multimap<int *, char>::iterator v);`),
        unions: parseUnion(`void r8sp1003(std::unordered_multimap<int *, char>::iterator v);`),
        structs: parseStruct(`void r8sp1003(std::unordered_multimap<int *, char>::iterator v);`),
        classes: parseClass(`void r8sp1003(std::unordered_multimap<int *, char>::iterator v);`),
        funcs: parseFunction(`void r8sp1003(std::unordered_multimap<int *, char>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1005
  * @tc.name gendtscpp_tpo_ext_1005
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1005', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1005(std::set<char *> v);`),
        unions: parseUnion(`void r8sp1005(std::set<char *> v);`),
        structs: parseStruct(`void r8sp1005(std::set<char *> v);`),
        classes: parseClass(`void r8sp1005(std::set<char *> v);`),
        funcs: parseFunction(`void r8sp1005(std::set<char *> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1006
  * @tc.name gendtscpp_tpo_ext_1006
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1006', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1006(std::set<long long> v);`),
        unions: parseUnion(`void r8sp1006(std::set<long long> v);`),
        structs: parseStruct(`void r8sp1006(std::set<long long> v);`),
        classes: parseClass(`void r8sp1006(std::set<long long> v);`),
        funcs: parseFunction(`void r8sp1006(std::set<long long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1007
  * @tc.name gendtscpp_tpo_ext_1007
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1007', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1007(std::set<unsigned short> v);`),
        unions: parseUnion(`void r8sp1007(std::set<unsigned short> v);`),
        structs: parseStruct(`void r8sp1007(std::set<unsigned short> v);`),
        classes: parseClass(`void r8sp1007(std::set<unsigned short> v);`),
        funcs: parseFunction(`void r8sp1007(std::set<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1008
  * @tc.name gendtscpp_tpo_ext_1008
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1008', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1008(std::set<unsigned long> v);`),
        unions: parseUnion(`void r8sp1008(std::set<unsigned long> v);`),
        structs: parseStruct(`void r8sp1008(std::set<unsigned long> v);`),
        classes: parseClass(`void r8sp1008(std::set<unsigned long> v);`),
        funcs: parseFunction(`void r8sp1008(std::set<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1009
  * @tc.name gendtscpp_tpo_ext_1009
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1009', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1009(std::set<unsigned long long> v);`),
        unions: parseUnion(`void r8sp1009(std::set<unsigned long long> v);`),
        structs: parseStruct(`void r8sp1009(std::set<unsigned long long> v);`),
        classes: parseClass(`void r8sp1009(std::set<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp1009(std::set<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1010
  * @tc.name gendtscpp_tpo_ext_1010
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1010', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1010(std::set<int *> v);`),
        unions: parseUnion(`void r8sp1010(std::set<int *> v);`),
        structs: parseStruct(`void r8sp1010(std::set<int *> v);`),
        classes: parseClass(`void r8sp1010(std::set<int *> v);`),
        funcs: parseFunction(`void r8sp1010(std::set<int *> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1011
  * @tc.name gendtscpp_tpo_ext_1011
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1011', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1011(std::set<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp1011(std::set<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp1011(std::set<std::string>::iterator v);`),
        classes: parseClass(`void r8sp1011(std::set<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp1011(std::set<std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1012
  * @tc.name gendtscpp_tpo_ext_1012
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1012', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1012(std::set<char *>::iterator v);`),
        unions: parseUnion(`void r8sp1012(std::set<char *>::iterator v);`),
        structs: parseStruct(`void r8sp1012(std::set<char *>::iterator v);`),
        classes: parseClass(`void r8sp1012(std::set<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp1012(std::set<char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1013
  * @tc.name gendtscpp_tpo_ext_1013
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1013', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1013(std::set<long long>::iterator v);`),
        unions: parseUnion(`void r8sp1013(std::set<long long>::iterator v);`),
        structs: parseStruct(`void r8sp1013(std::set<long long>::iterator v);`),
        classes: parseClass(`void r8sp1013(std::set<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp1013(std::set<long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1014
  * @tc.name gendtscpp_tpo_ext_1014
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1014', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1014(std::set<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp1014(std::set<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp1014(std::set<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp1014(std::set<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp1014(std::set<unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_1015
  * @tc.name gendtscpp_tpo_ext_1015
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::set<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_1015', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp1015(std::set<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp1015(std::set<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp1015(std::set<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp1015(std::set<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp1015(std::set<unsigned long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_1015 执行异常: ${String(err)}`);
    }
  });
});
