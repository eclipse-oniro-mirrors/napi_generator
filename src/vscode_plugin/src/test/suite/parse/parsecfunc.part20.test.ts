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
import * as parsec from '../../../parse/parsec';

suite('Parse_C_Func_Suite_Ext20', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext20');
  /**
  * @tc.number c_func_0968
  * @tc.name parseFunc_c_ext_0968
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::bitset<16>, std::bitset<32>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0968', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0161(std::bitset<16> a, std::bitset<32> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0161');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<16>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::bitset<32>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0968 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0969
  * @tc.name parseFunc_c_ext_0969
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::bitset<16>, std::span<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0969', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0162(std::bitset<16> a, std::span<int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0162');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<16>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::span<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0969 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0970
  * @tc.name parseFunc_c_ext_0970
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::bitset<16>, std::span<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0970', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0163(std::bitset<16> a, std::span<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0163');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<16>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::span<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0970 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0971
  * @tc.name parseFunc_c_ext_0971
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::bitset<32>, std::span<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0971', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0171(std::bitset<32> a, std::span<int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0171');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<32>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::span<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0971 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0972
  * @tc.name parseFunc_c_ext_0972
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::bitset<32>, std::span<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0972', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0172(std::bitset<32> a, std::span<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0172');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<32>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::span<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0972 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0973
  * @tc.name parseFunc_c_ext_0973
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::bitset<32>, std::atomic<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0973', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0173(std::bitset<32> a, std::atomic<int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0173');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<32>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::atomic<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0973 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0974
  * @tc.name parseFunc_c_ext_0974
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::span<int>, std::span<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0974', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0181(std::span<int> a, std::span<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0181');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::span<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::span<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0974 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0975
  * @tc.name parseFunc_c_ext_0975
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::span<int>, std::atomic<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0975', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0182(std::span<int> a, std::atomic<int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0182');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::span<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::atomic<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0975 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0976
  * @tc.name parseFunc_c_ext_0976
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::span<int>, std::atomic<bool>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0976', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0183(std::span<int> a, std::atomic<bool> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0183');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::span<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::atomic<bool>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0976 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0977
  * @tc.name parseFunc_c_ext_0977
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::span<double>, std::atomic<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0977', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0191(std::span<double> a, std::atomic<int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0191');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::span<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::atomic<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0977 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0978
  * @tc.name parseFunc_c_ext_0978
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::span<double>, std::atomic<bool>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0978', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0192(std::span<double> a, std::atomic<bool> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0192');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::span<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::atomic<bool>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0978 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0979
  * @tc.name parseFunc_c_ext_0979
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::span<double>, std::atomic<long>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0979', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0193(std::span<double> a, std::atomic<long> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0193');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::span<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::atomic<long>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0979 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0980
  * @tc.name parseFunc_c_ext_0980
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::atomic<int>, std::atomic<bool>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0980', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0201(std::atomic<int> a, std::atomic<bool> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0201');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::atomic<bool>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0980 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0981
  * @tc.name parseFunc_c_ext_0981
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::atomic<int>, std::atomic<long>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0981', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0202(std::atomic<int> a, std::atomic<long> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0202');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::atomic<long>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0981 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0982
  * @tc.name parseFunc_c_ext_0982
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::atomic<int>, std::basic_string<char>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0982', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0203(std::atomic<int> a, std::basic_string<char> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0203');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::basic_string<char>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0982 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0983
  * @tc.name parseFunc_c_ext_0983
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::atomic<bool>, std::atomic<long>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0983', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0211(std::atomic<bool> a, std::atomic<long> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0211');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::atomic<long>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0983 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0984
  * @tc.name parseFunc_c_ext_0984
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::atomic<bool>, std::basic_string<char>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0984', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0212(std::atomic<bool> a, std::basic_string<char> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0212');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::basic_string<char>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0984 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0985
  * @tc.name parseFunc_c_ext_0985
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::atomic<bool>, std::basic_string<wchar_t>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0985', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0213(std::atomic<bool> a, std::basic_string<wchar_t> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0213');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::basic_string<wchar_t>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0985 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0986
  * @tc.name parseFunc_c_ext_0986
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::atomic<long>, std::basic_string<char>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0986', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0221(std::atomic<long> a, std::basic_string<char> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0221');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::basic_string<char>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0986 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0987
  * @tc.name parseFunc_c_ext_0987
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::atomic<long>, std::basic_string<wchar_t>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0987', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0222(std::atomic<long> a, std::basic_string<wchar_t> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0222');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::basic_string<wchar_t>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0987 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0988
  * @tc.name parseFunc_c_ext_0988
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::atomic<long>, std::map<int, int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0988', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0223(std::atomic<long> a, std::map<int, int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0223');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<int, int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0988 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0989
  * @tc.name parseFunc_c_ext_0989
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<char>, std::basic_string<wchar_t>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0989', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0231(std::basic_string<char> a, std::basic_string<wchar_t> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0231');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::basic_string<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::basic_string<wchar_t>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0989 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0990
  * @tc.name parseFunc_c_ext_0990
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<char>, std::map<int, int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0990', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0232(std::basic_string<char> a, std::map<int, int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0232');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::basic_string<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<int, int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0990 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0991
  * @tc.name parseFunc_c_ext_0991
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<char>, std::map<double, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0991', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0233(std::basic_string<char> a, std::map<double, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0233');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::basic_string<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<double, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0991 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0992
  * @tc.name parseFunc_c_ext_0992
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<wchar_t>, std::map<int, int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0992', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0241(std::basic_string<wchar_t> a, std::map<int, int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0241');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::basic_string<wchar_t>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<int, int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0992 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0993
  * @tc.name parseFunc_c_ext_0993
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<wchar_t>, std::map<double, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0993', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0242(std::basic_string<wchar_t> a, std::map<double, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0242');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::basic_string<wchar_t>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<double, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0993 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0994
  * @tc.name parseFunc_c_ext_0994
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<wchar_t>, std::map<std::string, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0994', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0243(std::basic_string<wchar_t> a, std::map<std::string, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0243');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::basic_string<wchar_t>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<std::string, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0994 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0995
  * @tc.name parseFunc_c_ext_0995
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<int, int>, std::map<double, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0995', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0251(std::map<int, int> a, std::map<double, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0251');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<int, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<double, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0995 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0996
  * @tc.name parseFunc_c_ext_0996
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<int, int>, std::map<std::string, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0996', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0252(std::map<int, int> a, std::map<std::string, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0252');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<int, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<std::string, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0996 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0997
  * @tc.name parseFunc_c_ext_0997
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<int, int>, std::map<wchar_t, int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0997', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0253(std::map<int, int> a, std::map<wchar_t, int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0253');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<int, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<wchar_t, int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0997 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0998
  * @tc.name parseFunc_c_ext_0998
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<double, std::string>, std::map<std::string, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0998', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0261(std::map<double, std::string> a, std::map<std::string, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0261');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<double, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<std::string, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0998 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0999
  * @tc.name parseFunc_c_ext_0999
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<double, std::string>, std::map<wchar_t, int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0999', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0262(std::map<double, std::string> a, std::map<wchar_t, int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0262');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<double, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<wchar_t, int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0999 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1000
  * @tc.name parseFunc_c_ext_1000
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<double, std::string>, std::map<size_t, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1000', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0263(std::map<double, std::string> a, std::map<size_t, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0263');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<double, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<size_t, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1000 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1001
  * @tc.name parseFunc_c_ext_1001
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<std::string, std::string>, std::map<wchar_t, int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1001', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0271(std::map<std::string, std::string> a, std::map<wchar_t, int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0271');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<std::string, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<wchar_t, int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1002
  * @tc.name parseFunc_c_ext_1002
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<std::string, std::string>, std::map<size_t, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1002', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0272(std::map<std::string, std::string> a, std::map<size_t, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0272');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<std::string, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<size_t, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1003
  * @tc.name parseFunc_c_ext_1003
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<std::string, std::string>, std::map<float, float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1003', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0273(std::map<std::string, std::string> a, std::map<float, float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0273');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<std::string, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<float, float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1004
  * @tc.name parseFunc_c_ext_1004
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<wchar_t, int>, std::map<size_t, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1004', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0281(std::map<wchar_t, int> a, std::map<size_t, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0281');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<wchar_t, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<size_t, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1005
  * @tc.name parseFunc_c_ext_1005
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<wchar_t, int>, std::map<float, float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1005', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0282(std::map<wchar_t, int> a, std::map<float, float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0282');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<wchar_t, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<float, float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1006
  * @tc.name parseFunc_c_ext_1006
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<wchar_t, int>, std::vector<char>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1006', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0283(std::map<wchar_t, int> a, std::vector<char> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0283');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<wchar_t, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<char>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1007
  * @tc.name parseFunc_c_ext_1007
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<size_t, std::string>, std::map<float, float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1007', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0291(std::map<size_t, std::string> a, std::map<float, float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0291');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<size_t, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<float, float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1008
  * @tc.name parseFunc_c_ext_1008
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<size_t, std::string>, std::vector<char>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1008', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0292(std::map<size_t, std::string> a, std::vector<char> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0292');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<size_t, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<char>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1009
  * @tc.name parseFunc_c_ext_1009
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<size_t, std::string>, std::vector<float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1009', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0293(std::map<size_t, std::string> a, std::vector<float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0293');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<size_t, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1010
  * @tc.name parseFunc_c_ext_1010
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<float, float>, std::vector<char>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1010', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0301(std::map<float, float> a, std::vector<char> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0301');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<float, float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<char>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1011
  * @tc.name parseFunc_c_ext_1011
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<float, float>, std::vector<float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1011', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0302(std::map<float, float> a, std::vector<float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0302');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<float, float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1012
  * @tc.name parseFunc_c_ext_1012
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::map<float, float>, std::vector<long>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1012', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0303(std::map<float, float> a, std::vector<long> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0303');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<float, float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<long>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1013
  * @tc.name parseFunc_c_ext_1013
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::vector<char>, std::vector<float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1013', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0311(std::vector<char> a, std::vector<float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0311');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1014
  * @tc.name parseFunc_c_ext_1014
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::vector<char>, std::vector<long>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1014', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0312(std::vector<char> a, std::vector<long> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0312');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<long>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1015
  * @tc.name parseFunc_c_ext_1015
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::vector<char>, std::vector<unsigned int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1015', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0313(std::vector<char> a, std::vector<unsigned int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0313');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<unsigned int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1016
  * @tc.name parseFunc_c_ext_1016
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::vector<float>, std::vector<long>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1016', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0321(std::vector<float> a, std::vector<long> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0321');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<long>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1017
  * @tc.name parseFunc_c_ext_1017
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::vector<float>, std::vector<unsigned int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1017', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0322(std::vector<float> a, std::vector<unsigned int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0322');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<unsigned int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1018
  * @tc.name parseFunc_c_ext_1018
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::vector<float>, std::vector<std::wstring>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1018', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0323(std::vector<float> a, std::vector<std::wstring> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0323');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<std::wstring>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1019
  * @tc.name parseFunc_c_ext_1019
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::vector<long>, std::vector<unsigned int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1019', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0331(std::vector<long> a, std::vector<unsigned int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0331');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<unsigned int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1020
  * @tc.name parseFunc_c_ext_1020
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::vector<long>, std::vector<std::wstring>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1020', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0332(std::vector<long> a, std::vector<std::wstring> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0332');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::vector<std::wstring>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1020 执行异常: ${String(err)}`);
    }
  });

});
