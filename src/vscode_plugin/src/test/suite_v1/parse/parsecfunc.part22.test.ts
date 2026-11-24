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

suite('Parse_C_Func_Suite_Ext22', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext22');
  /**
  * @tc.number c_func_1074
  * @tc.name parseFunc_c_ext_1074
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::set<std::wstring>, std::list<long long>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1074', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0512(std::set<std::wstring> a, std::list<long long> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0512');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::set<std::wstring>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::list<long long>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1075
  * @tc.name parseFunc_c_ext_1075
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::set<std::wstring>, std::queue<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1075', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0513(std::set<std::wstring> a, std::queue<std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0513');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::set<std::wstring>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::queue<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1076
  * @tc.name parseFunc_c_ext_1076
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::list<float>, std::list<long long>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1076', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0521(std::list<float> a, std::list<long long> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0521');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::list<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::list<long long>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1077
  * @tc.name parseFunc_c_ext_1077
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::list<float>, std::queue<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1077', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0522(std::list<float> a, std::queue<std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0522');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::list<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::queue<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1078
  * @tc.name parseFunc_c_ext_1078
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::list<float>, std::stack<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1078', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0523(std::list<float> a, std::stack<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0523');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::list<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::stack<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1079
  * @tc.name parseFunc_c_ext_1079
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::list<long long>, std::queue<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1079', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0531(std::list<long long> a, std::queue<std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0531');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::list<long long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::queue<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1080
  * @tc.name parseFunc_c_ext_1080
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::list<long long>, std::stack<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1080', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0532(std::list<long long> a, std::stack<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0532');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::list<long long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::stack<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1081
  * @tc.name parseFunc_c_ext_1081
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::list<long long>, std::unordered_map<int, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1081', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0533(std::list<long long> a, std::unordered_map<int, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0533');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::list<long long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_map<int, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1082
  * @tc.name parseFunc_c_ext_1082
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::queue<std::string>, std::stack<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1082', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0541(std::queue<std::string> a, std::stack<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0541');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::queue<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::stack<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1083
  * @tc.name parseFunc_c_ext_1083
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::queue<std::string>, std::unordered_map<int, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1083', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0542(std::queue<std::string> a, std::unordered_map<int, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0542');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::queue<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_map<int, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1084
  * @tc.name parseFunc_c_ext_1084
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::queue<std::string>, std::unordered_map<std::string, double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1084', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0543(std::queue<std::string> a, std::unordered_map<std::string, double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0543');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::queue<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_map<std::string, double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1084 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1085
  * @tc.name parseFunc_c_ext_1085
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::stack<double>, std::unordered_map<int, std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1085', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0551(std::stack<double> a, std::unordered_map<int, std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0551');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::stack<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_map<int, std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1085 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1086
  * @tc.name parseFunc_c_ext_1086
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::stack<double>, std::unordered_map<std::string, double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1086', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0552(std::stack<double> a, std::unordered_map<std::string, double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0552');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::stack<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_map<std::string, double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1086 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1087
  * @tc.name parseFunc_c_ext_1087
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::stack<double>, std::unordered_set<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1087', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0553(std::stack<double> a, std::unordered_set<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0553');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::stack<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_set<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1087 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1088
  * @tc.name parseFunc_c_ext_1088
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<int, std::string>, std::unordered_map<std::string, double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1088', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0561(std::unordered_map<int, std::string> a, std::unordered_map<std::string, double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0561');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_map<int, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_map<std::string, double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1088 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1089
  * @tc.name parseFunc_c_ext_1089
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<int, std::string>, std::unordered_set<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1089', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0562(std::unordered_map<int, std::string> a, std::unordered_set<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0562');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_map<int, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_set<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1089 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1090
  * @tc.name parseFunc_c_ext_1090
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<int, std::string>, std::unordered_set<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1090', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0563(std::unordered_map<int, std::string> a, std::unordered_set<std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0563');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_map<int, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_set<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1090 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1091
  * @tc.name parseFunc_c_ext_1091
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<std::string, double>, std::unordered_set<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1091', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0571(std::unordered_map<std::string, double> a, std::unordered_set<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0571');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_map<std::string, double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_set<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1091 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1092
  * @tc.name parseFunc_c_ext_1092
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<std::string, double>, std::unordered_set<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1092', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0572(std::unordered_map<std::string, double> a, std::unordered_set<std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0572');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_map<std::string, double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_set<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1092 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1093
  * @tc.name parseFunc_c_ext_1093
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<std::string, double>, std::array<double, 8>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1093', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0573(std::unordered_map<std::string, double> a, std::array<double, 8> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0573');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_map<std::string, double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::array<double, 8>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1093 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1094
  * @tc.name parseFunc_c_ext_1094
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<double>, std::unordered_set<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1094', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0581(std::unordered_set<double> a, std::unordered_set<std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0581');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_set<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_set<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1094 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1095
  * @tc.name parseFunc_c_ext_1095
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<double>, std::array<double, 8>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1095', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0582(std::unordered_set<double> a, std::array<double, 8> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0582');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_set<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::array<double, 8>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1095 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1096
  * @tc.name parseFunc_c_ext_1096
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<double>, std::array<float, 16>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1096', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0583(std::unordered_set<double> a, std::array<float, 16> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0583');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_set<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::array<float, 16>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1096 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1097
  * @tc.name parseFunc_c_ext_1097
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<std::string>, std::array<double, 8>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1097', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0591(std::unordered_set<std::string> a, std::array<double, 8> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0591');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_set<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::array<double, 8>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1097 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1098
  * @tc.name parseFunc_c_ext_1098
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<std::string>, std::array<float, 16>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1098', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0592(std::unordered_set<std::string> a, std::array<float, 16> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0592');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_set<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::array<float, 16>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1098 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1099
  * @tc.name parseFunc_c_ext_1099
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<std::string>, std::array<int64_t, 4>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1099', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0593(std::unordered_set<std::string> a, std::array<int64_t, 4> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0593');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_set<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::array<int64_t, 4>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1099 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1100
  * @tc.name parseFunc_c_ext_1100
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::array<double, 8>, std::array<float, 16>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1100', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0601(std::array<double, 8> a, std::array<float, 16> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0601');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::array<double, 8>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::array<float, 16>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1100 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1101
  * @tc.name parseFunc_c_ext_1101
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::array<double, 8>, std::array<int64_t, 4>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1101', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0602(std::array<double, 8> a, std::array<int64_t, 4> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0602');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::array<double, 8>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::array<int64_t, 4>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1101 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1102
  * @tc.name parseFunc_c_ext_1102
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::array<double, 8>, std::forward_list<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1102', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0603(std::array<double, 8> a, std::forward_list<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0603');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::array<double, 8>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::forward_list<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1102 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1103
  * @tc.name parseFunc_c_ext_1103
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::array<float, 16>, std::array<int64_t, 4>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1103', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0611(std::array<float, 16> a, std::array<int64_t, 4> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0611');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::array<float, 16>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::array<int64_t, 4>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1103 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1104
  * @tc.name parseFunc_c_ext_1104
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::array<float, 16>, std::forward_list<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1104', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0612(std::array<float, 16> a, std::forward_list<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0612');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::array<float, 16>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::forward_list<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1104 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1105
  * @tc.name parseFunc_c_ext_1105
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::array<float, 16>, std::forward_list<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1105', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0613(std::array<float, 16> a, std::forward_list<std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0613');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::array<float, 16>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::forward_list<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1105 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1106
  * @tc.name parseFunc_c_ext_1106
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::array<int64_t, 4>, std::forward_list<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1106', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0621(std::array<int64_t, 4> a, std::forward_list<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0621');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::array<int64_t, 4>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::forward_list<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1106 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1107
  * @tc.name parseFunc_c_ext_1107
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::array<int64_t, 4>, std::forward_list<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1107', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0622(std::array<int64_t, 4> a, std::forward_list<std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0622');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::array<int64_t, 4>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::forward_list<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1107 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1108
  * @tc.name parseFunc_c_ext_1108
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::array<int64_t, 4>, std::valarray<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1108', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0623(std::array<int64_t, 4> a, std::valarray<int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0623');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::array<int64_t, 4>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::valarray<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1108 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1109
  * @tc.name parseFunc_c_ext_1109
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<double>, std::forward_list<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1109', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0631(std::forward_list<double> a, std::forward_list<std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0631');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::forward_list<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::forward_list<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1109 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1110
  * @tc.name parseFunc_c_ext_1110
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<double>, std::valarray<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1110', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0632(std::forward_list<double> a, std::valarray<int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0632');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::forward_list<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::valarray<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1110 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1111
  * @tc.name parseFunc_c_ext_1111
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<double>, std::valarray<float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1111', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0633(std::forward_list<double> a, std::valarray<float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0633');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::forward_list<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::valarray<float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1111 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1112
  * @tc.name parseFunc_c_ext_1112
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<std::string>, std::valarray<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1112', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0641(std::forward_list<std::string> a, std::valarray<int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0641');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::forward_list<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::valarray<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1112 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1113
  * @tc.name parseFunc_c_ext_1113
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<std::string>, std::valarray<float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1113', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0642(std::forward_list<std::string> a, std::valarray<float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0642');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::forward_list<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::valarray<float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1113 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1114
  * @tc.name parseFunc_c_ext_1114
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<std::string>, std::complex<float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1114', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0643(std::forward_list<std::string> a, std::complex<float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0643');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::forward_list<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::complex<float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1114 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1115
  * @tc.name parseFunc_c_ext_1115
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::valarray<int>, std::valarray<float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1115', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0651(std::valarray<int> a, std::valarray<float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0651');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::valarray<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::valarray<float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1115 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1116
  * @tc.name parseFunc_c_ext_1116
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::valarray<int>, std::complex<float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1116', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0652(std::valarray<int> a, std::complex<float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0652');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::valarray<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::complex<float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1116 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1117
  * @tc.name parseFunc_c_ext_1117
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::valarray<int>, std::complex<long double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1117', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0653(std::valarray<int> a, std::complex<long double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0653');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::valarray<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::complex<long double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1117 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1118
  * @tc.name parseFunc_c_ext_1118
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::valarray<float>, std::complex<float>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1118', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0661(std::valarray<float> a, std::complex<float> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0661');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::valarray<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::complex<float>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1118 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1119
  * @tc.name parseFunc_c_ext_1119
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::valarray<float>, std::complex<long double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1119', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0662(std::valarray<float> a, std::complex<long double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0662');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::valarray<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::complex<long double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1119 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1120
  * @tc.name parseFunc_c_ext_1120
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::valarray<float>, std::shared_ptr<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1120', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0663(std::valarray<float> a, std::shared_ptr<int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0663');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::valarray<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::shared_ptr<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1120 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1121
  * @tc.name parseFunc_c_ext_1121
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::complex<float>, std::complex<long double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1121', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0671(std::complex<float> a, std::complex<long double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0671');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::complex<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::complex<long double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1121 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1122
  * @tc.name parseFunc_c_ext_1122
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::complex<float>, std::shared_ptr<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1122', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0672(std::complex<float> a, std::shared_ptr<int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0672');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::complex<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::shared_ptr<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1122 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1123
  * @tc.name parseFunc_c_ext_1123
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::complex<float>, std::shared_ptr<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1123', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0673(std::complex<float> a, std::shared_ptr<std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0673');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::complex<float>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::shared_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1123 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1124
  * @tc.name parseFunc_c_ext_1124
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::complex<long double>, std::shared_ptr<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1124', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0681(std::complex<long double> a, std::shared_ptr<int> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0681');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::complex<long double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::shared_ptr<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1124 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1125
  * @tc.name parseFunc_c_ext_1125
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::complex<long double>, std::shared_ptr<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1125', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0682(std::complex<long double> a, std::shared_ptr<std::string> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0682');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::complex<long double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::shared_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1125 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_1126
  * @tc.name parseFunc_c_ext_1126
  * @tc.desc h2dts parseFunction：类型覆盖-容器组合：(std::complex<long double>, std::shared_ptr<double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_1126', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cp0683(std::complex<long double> a, std::shared_ptr<double> b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cp0683');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::complex<long double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::shared_ptr<double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_1126 执行异常: ${String(err)}`);
    }
  });

});
