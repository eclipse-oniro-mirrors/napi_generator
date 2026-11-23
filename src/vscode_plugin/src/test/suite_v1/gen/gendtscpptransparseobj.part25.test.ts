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

suite('Gendtscpp_transParseObj_Suite_Ext25', function () {
  /**
  * @tc.number h2dtscpp_tpo_0841
  * @tc.name gendtscpp_tpo_ext_0841
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0841', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp841(std::deque<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp841(std::deque<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp841(std::deque<std::string>::iterator v);`),
        classes: parseClass(`void r8sp841(std::deque<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp841(std::deque<std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0841 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0842
  * @tc.name gendtscpp_tpo_ext_0842
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0842', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp842(std::deque<char *>::iterator v);`),
        unions: parseUnion(`void r8sp842(std::deque<char *>::iterator v);`),
        structs: parseStruct(`void r8sp842(std::deque<char *>::iterator v);`),
        classes: parseClass(`void r8sp842(std::deque<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp842(std::deque<char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0842 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0843
  * @tc.name gendtscpp_tpo_ext_0843
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0843', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp843(std::deque<long long>::iterator v);`),
        unions: parseUnion(`void r8sp843(std::deque<long long>::iterator v);`),
        structs: parseStruct(`void r8sp843(std::deque<long long>::iterator v);`),
        classes: parseClass(`void r8sp843(std::deque<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp843(std::deque<long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0843 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0844
  * @tc.name gendtscpp_tpo_ext_0844
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0844', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp844(std::deque<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp844(std::deque<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp844(std::deque<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp844(std::deque<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp844(std::deque<unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0844 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0845
  * @tc.name gendtscpp_tpo_ext_0845
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0845', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp845(std::deque<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp845(std::deque<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp845(std::deque<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp845(std::deque<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp845(std::deque<unsigned long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0845 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0846
  * @tc.name gendtscpp_tpo_ext_0846
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0846', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp846(std::deque<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp846(std::deque<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp846(std::deque<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp846(std::deque<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp846(std::deque<unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0846 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0847
  * @tc.name gendtscpp_tpo_ext_0847
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::deque<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0847', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp847(std::deque<int *>::iterator v);`),
        unions: parseUnion(`void r8sp847(std::deque<int *>::iterator v);`),
        structs: parseStruct(`void r8sp847(std::deque<int *>::iterator v);`),
        classes: parseClass(`void r8sp847(std::deque<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp847(std::deque<int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0847 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0849
  * @tc.name gendtscpp_tpo_ext_0849
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0849', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp849(std::list<char *> v);`),
        unions: parseUnion(`void r8sp849(std::list<char *> v);`),
        structs: parseStruct(`void r8sp849(std::list<char *> v);`),
        classes: parseClass(`void r8sp849(std::list<char *> v);`),
        funcs: parseFunction(`void r8sp849(std::list<char *> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0849 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0851
  * @tc.name gendtscpp_tpo_ext_0851
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0851', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp851(std::list<unsigned short> v);`),
        unions: parseUnion(`void r8sp851(std::list<unsigned short> v);`),
        structs: parseStruct(`void r8sp851(std::list<unsigned short> v);`),
        classes: parseClass(`void r8sp851(std::list<unsigned short> v);`),
        funcs: parseFunction(`void r8sp851(std::list<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0851 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0852
  * @tc.name gendtscpp_tpo_ext_0852
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0852', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp852(std::list<unsigned long> v);`),
        unions: parseUnion(`void r8sp852(std::list<unsigned long> v);`),
        structs: parseStruct(`void r8sp852(std::list<unsigned long> v);`),
        classes: parseClass(`void r8sp852(std::list<unsigned long> v);`),
        funcs: parseFunction(`void r8sp852(std::list<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0852 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0853
  * @tc.name gendtscpp_tpo_ext_0853
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0853', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp853(std::list<unsigned long long> v);`),
        unions: parseUnion(`void r8sp853(std::list<unsigned long long> v);`),
        structs: parseStruct(`void r8sp853(std::list<unsigned long long> v);`),
        classes: parseClass(`void r8sp853(std::list<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp853(std::list<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0853 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0854
  * @tc.name gendtscpp_tpo_ext_0854
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0854', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp854(std::list<int *> v);`),
        unions: parseUnion(`void r8sp854(std::list<int *> v);`),
        structs: parseStruct(`void r8sp854(std::list<int *> v);`),
        classes: parseClass(`void r8sp854(std::list<int *> v);`),
        funcs: parseFunction(`void r8sp854(std::list<int *> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0854 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0855
  * @tc.name gendtscpp_tpo_ext_0855
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0855', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp855(std::list<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp855(std::list<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp855(std::list<std::string>::iterator v);`),
        classes: parseClass(`void r8sp855(std::list<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp855(std::list<std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0855 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0856
  * @tc.name gendtscpp_tpo_ext_0856
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0856', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp856(std::list<char *>::iterator v);`),
        unions: parseUnion(`void r8sp856(std::list<char *>::iterator v);`),
        structs: parseStruct(`void r8sp856(std::list<char *>::iterator v);`),
        classes: parseClass(`void r8sp856(std::list<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp856(std::list<char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0856 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0857
  * @tc.name gendtscpp_tpo_ext_0857
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0857', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp857(std::list<long long>::iterator v);`),
        unions: parseUnion(`void r8sp857(std::list<long long>::iterator v);`),
        structs: parseStruct(`void r8sp857(std::list<long long>::iterator v);`),
        classes: parseClass(`void r8sp857(std::list<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp857(std::list<long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0857 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0858
  * @tc.name gendtscpp_tpo_ext_0858
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0858', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp858(std::list<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp858(std::list<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp858(std::list<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp858(std::list<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp858(std::list<unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0858 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0859
  * @tc.name gendtscpp_tpo_ext_0859
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0859', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp859(std::list<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp859(std::list<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp859(std::list<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp859(std::list<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp859(std::list<unsigned long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0859 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0860
  * @tc.name gendtscpp_tpo_ext_0860
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0860', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp860(std::list<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp860(std::list<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp860(std::list<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp860(std::list<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp860(std::list<unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0860 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0861
  * @tc.name gendtscpp_tpo_ext_0861
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::list<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0861', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp861(std::list<int *>::iterator v);`),
        unions: parseUnion(`void r8sp861(std::list<int *>::iterator v);`),
        structs: parseStruct(`void r8sp861(std::list<int *>::iterator v);`),
        classes: parseClass(`void r8sp861(std::list<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp861(std::list<int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0861 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0863
  * @tc.name gendtscpp_tpo_ext_0863
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<char *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0863', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp863(std::forward_list<char *> v);`),
        unions: parseUnion(`void r8sp863(std::forward_list<char *> v);`),
        structs: parseStruct(`void r8sp863(std::forward_list<char *> v);`),
        classes: parseClass(`void r8sp863(std::forward_list<char *> v);`),
        funcs: parseFunction(`void r8sp863(std::forward_list<char *> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0863 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0864
  * @tc.name gendtscpp_tpo_ext_0864
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0864', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp864(std::forward_list<long long> v);`),
        unions: parseUnion(`void r8sp864(std::forward_list<long long> v);`),
        structs: parseStruct(`void r8sp864(std::forward_list<long long> v);`),
        classes: parseClass(`void r8sp864(std::forward_list<long long> v);`),
        funcs: parseFunction(`void r8sp864(std::forward_list<long long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0864 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0865
  * @tc.name gendtscpp_tpo_ext_0865
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<unsigned short>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0865', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp865(std::forward_list<unsigned short> v);`),
        unions: parseUnion(`void r8sp865(std::forward_list<unsigned short> v);`),
        structs: parseStruct(`void r8sp865(std::forward_list<unsigned short> v);`),
        classes: parseClass(`void r8sp865(std::forward_list<unsigned short> v);`),
        funcs: parseFunction(`void r8sp865(std::forward_list<unsigned short> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0865 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0866
  * @tc.name gendtscpp_tpo_ext_0866
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<unsigned long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0866', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp866(std::forward_list<unsigned long> v);`),
        unions: parseUnion(`void r8sp866(std::forward_list<unsigned long> v);`),
        structs: parseStruct(`void r8sp866(std::forward_list<unsigned long> v);`),
        classes: parseClass(`void r8sp866(std::forward_list<unsigned long> v);`),
        funcs: parseFunction(`void r8sp866(std::forward_list<unsigned long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0866 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0867
  * @tc.name gendtscpp_tpo_ext_0867
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<unsigned long long>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0867', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp867(std::forward_list<unsigned long long> v);`),
        unions: parseUnion(`void r8sp867(std::forward_list<unsigned long long> v);`),
        structs: parseStruct(`void r8sp867(std::forward_list<unsigned long long> v);`),
        classes: parseClass(`void r8sp867(std::forward_list<unsigned long long> v);`),
        funcs: parseFunction(`void r8sp867(std::forward_list<unsigned long long> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0867 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0868
  * @tc.name gendtscpp_tpo_ext_0868
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<int *>` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0868', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp868(std::forward_list<int *> v);`),
        unions: parseUnion(`void r8sp868(std::forward_list<int *> v);`),
        structs: parseStruct(`void r8sp868(std::forward_list<int *> v);`),
        classes: parseClass(`void r8sp868(std::forward_list<int *> v);`),
        funcs: parseFunction(`void r8sp868(std::forward_list<int *> v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0868 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0869
  * @tc.name gendtscpp_tpo_ext_0869
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<std::string>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0869', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp869(std::forward_list<std::string>::iterator v);`),
        unions: parseUnion(`void r8sp869(std::forward_list<std::string>::iterator v);`),
        structs: parseStruct(`void r8sp869(std::forward_list<std::string>::iterator v);`),
        classes: parseClass(`void r8sp869(std::forward_list<std::string>::iterator v);`),
        funcs: parseFunction(`void r8sp869(std::forward_list<std::string>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0869 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0870
  * @tc.name gendtscpp_tpo_ext_0870
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<char *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0870', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp870(std::forward_list<char *>::iterator v);`),
        unions: parseUnion(`void r8sp870(std::forward_list<char *>::iterator v);`),
        structs: parseStruct(`void r8sp870(std::forward_list<char *>::iterator v);`),
        classes: parseClass(`void r8sp870(std::forward_list<char *>::iterator v);`),
        funcs: parseFunction(`void r8sp870(std::forward_list<char *>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0870 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0871
  * @tc.name gendtscpp_tpo_ext_0871
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0871', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp871(std::forward_list<long long>::iterator v);`),
        unions: parseUnion(`void r8sp871(std::forward_list<long long>::iterator v);`),
        structs: parseStruct(`void r8sp871(std::forward_list<long long>::iterator v);`),
        classes: parseClass(`void r8sp871(std::forward_list<long long>::iterator v);`),
        funcs: parseFunction(`void r8sp871(std::forward_list<long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0871 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0872
  * @tc.name gendtscpp_tpo_ext_0872
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<unsigned short>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0872', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp872(std::forward_list<unsigned short>::iterator v);`),
        unions: parseUnion(`void r8sp872(std::forward_list<unsigned short>::iterator v);`),
        structs: parseStruct(`void r8sp872(std::forward_list<unsigned short>::iterator v);`),
        classes: parseClass(`void r8sp872(std::forward_list<unsigned short>::iterator v);`),
        funcs: parseFunction(`void r8sp872(std::forward_list<unsigned short>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0872 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0873
  * @tc.name gendtscpp_tpo_ext_0873
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<unsigned long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0873', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp873(std::forward_list<unsigned long>::iterator v);`),
        unions: parseUnion(`void r8sp873(std::forward_list<unsigned long>::iterator v);`),
        structs: parseStruct(`void r8sp873(std::forward_list<unsigned long>::iterator v);`),
        classes: parseClass(`void r8sp873(std::forward_list<unsigned long>::iterator v);`),
        funcs: parseFunction(`void r8sp873(std::forward_list<unsigned long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0873 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0874
  * @tc.name gendtscpp_tpo_ext_0874
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<unsigned long long>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0874', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp874(std::forward_list<unsigned long long>::iterator v);`),
        unions: parseUnion(`void r8sp874(std::forward_list<unsigned long long>::iterator v);`),
        structs: parseStruct(`void r8sp874(std::forward_list<unsigned long long>::iterator v);`),
        classes: parseClass(`void r8sp874(std::forward_list<unsigned long long>::iterator v);`),
        funcs: parseFunction(`void r8sp874(std::forward_list<unsigned long long>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0874 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_tpo_0875
  * @tc.name gendtscpp_tpo_ext_0875
  * @tc.desc h2dtscpp transParseObj：扩充-R8-单类型 `std::forward_list<int *>::iterator` 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('gendtscpp_tpo_ext_0875', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void r8sp875(std::forward_list<int *>::iterator v);`),
        unions: parseUnion(`void r8sp875(std::forward_list<int *>::iterator v);`),
        structs: parseStruct(`void r8sp875(std::forward_list<int *>::iterator v);`),
        classes: parseClass(`void r8sp875(std::forward_list<int *>::iterator v);`),
        funcs: parseFunction(`void r8sp875(std::forward_list<int *>::iterator v);`),
        types: [],
      };
      let transResult: any;
            transResult = transParseObj(parseObj);
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 1);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
          } catch (err) {
      assert.fail(`h2dtscpp_tpo_0875 执行异常: ${String(err)}`);
    }
  });
});
