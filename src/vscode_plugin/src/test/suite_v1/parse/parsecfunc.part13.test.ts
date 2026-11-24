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

suite('Parse_C_Func_Suite_Ext13', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext13');
  /**
  * @tc.number c_func_0612
  * @tc.name parseFunc_c_ext_0612
  * @tc.desc h2dts parseFunction：扩充-指针入参：size_t* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0612', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setPtr011(size_t* p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr011');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0612 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0613
  * @tc.name parseFunc_c_ext_0613
  * @tc.desc h2dts parseFunction：扩充-指针入参：int64_t* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0613', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setPtr012(int64_t* p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr012');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int64_t*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0613 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0614
  * @tc.name parseFunc_c_ext_0614
  * @tc.desc h2dts parseFunction：扩充-指针入参：uint8_t* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0614', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setPtr013(uint8_t* p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr013');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint8_t*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0614 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0615
  * @tc.name parseFunc_c_ext_0615
  * @tc.desc h2dts parseFunction：扩充-指针入参：long long* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0615', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setPtr014(long long* p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr014');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0615 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0616
  * @tc.name parseFunc_c_ext_0616
  * @tc.desc h2dts parseFunction：扩充-指针入参：long double* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0616', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setPtr015(long double* p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr015');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long double*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0616 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0617
  * @tc.name parseFunc_c_ext_0617
  * @tc.desc h2dts parseFunction：扩充-指针入参：std::vector<int>* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0617', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setPtr016(std::vector<int>* p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr016');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<int>*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0617 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0618
  * @tc.name parseFunc_c_ext_0618
  * @tc.desc h2dts parseFunction：扩充-指针入参：std::map<std::string,int>* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0618', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setPtr017(std::map<std::string,int>* p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr017');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<std::string,int>*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0618 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0619
  * @tc.name parseFunc_c_ext_0619
  * @tc.desc h2dts parseFunction：扩充-指针入参：char** 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0619', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setPtr018(char** p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr018');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char**');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0619 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0620
  * @tc.name parseFunc_c_ext_0620
  * @tc.desc h2dts parseFunction：扩充-指针入参：int** 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0620', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setPtr019(int** p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPtr019');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int**');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0620 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0621
  * @tc.name parseFunc_c_ext_0621
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::vector<int>, std::map<int,std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0621', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc000(std::vector<int> x, std::map<int,std::string> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::map<int,std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0621 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0622
  * @tc.name parseFunc_c_ext_0622
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::vector<std::string>, std::set<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0622', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc001(std::vector<std::string> x, std::set<int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::set<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0622 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0623
  * @tc.name parseFunc_c_ext_0623
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::vector<double>, std::set<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0623', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc002(std::vector<double> x, std::set<std::string> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::set<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0623 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0624
  * @tc.name parseFunc_c_ext_0624
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::vector<bool>, std::list<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0624', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc003(std::vector<bool> x, std::list<int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::list<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0624 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0625
  * @tc.name parseFunc_c_ext_0625
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::map<std::string,int>, std::list<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0625', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc004(std::map<std::string,int> x, std::list<std::string> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<std::string,int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::list<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0625 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0626
  * @tc.name parseFunc_c_ext_0626
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::map<int,std::string>, std::deque<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0626', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc005(std::map<int,std::string> x, std::deque<int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<int,std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::deque<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0626 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0627
  * @tc.name parseFunc_c_ext_0627
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::set<int>, std::deque<std::string>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0627', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc006(std::set<int> x, std::deque<std::string> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::set<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::deque<std::string>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0627 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0628
  * @tc.name parseFunc_c_ext_0628
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::set<std::string>, std::pair<int,int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0628', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc007(std::set<std::string> x, std::pair<int,int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc007');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::set<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::pair<int,int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0628 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0629
  * @tc.name parseFunc_c_ext_0629
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::list<int>, std::pair<std::string,int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0629', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc008(std::list<int> x, std::pair<std::string,int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc008');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::list<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::pair<std::string,int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0629 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0630
  * @tc.name parseFunc_c_ext_0630
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::list<std::string>, std::tuple<int,int,int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0630', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc009(std::list<std::string> x, std::tuple<int,int,int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc009');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::list<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::tuple<int,int,int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0630 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0631
  * @tc.name parseFunc_c_ext_0631
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::deque<int>, std::tuple<std::string,int,double>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0631', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc010(std::deque<int> x, std::tuple<std::string,int,double> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc010');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::deque<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0631 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0632
  * @tc.name parseFunc_c_ext_0632
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::deque<std::string>, std::queue<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0632', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc011(std::deque<std::string> x, std::queue<int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc011');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::deque<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::queue<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0632 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0633
  * @tc.name parseFunc_c_ext_0633
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::pair<int,int>, std::stack<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0633', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc012(std::pair<int,int> x, std::stack<int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc012');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::pair<int,int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::stack<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0633 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0634
  * @tc.name parseFunc_c_ext_0634
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::pair<std::string,int>, std::priority_queue<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0634', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc013(std::pair<std::string,int> x, std::priority_queue<int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc013');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::pair<std::string,int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::priority_queue<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0634 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0635
  * @tc.name parseFunc_c_ext_0635
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::tuple<int,int,int>, std::multimap<int,int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0635', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc014(std::tuple<int,int,int> x, std::multimap<int,int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc014');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::tuple<int,int,int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::multimap<int,int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0635 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0636
  * @tc.name parseFunc_c_ext_0636
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::tuple<std::string,int,double>, std::multiset<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0636', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc015(std::tuple<std::string,int,double> x, std::multiset<int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc015');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::multiset<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0636 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0637
  * @tc.name parseFunc_c_ext_0637
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::queue<int>, std::unordered_map<std::string,int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0637', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc016(std::queue<int> x, std::unordered_map<std::string,int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc016');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::queue<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0637 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0638
  * @tc.name parseFunc_c_ext_0638
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::stack<int>, std::unordered_set<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0638', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc017(std::stack<int> x, std::unordered_set<int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc017');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::stack<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_set<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0638 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0639
  * @tc.name parseFunc_c_ext_0639
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::priority_queue<int>, std::unordered_multimap<int,int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0639', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc018(std::priority_queue<int> x, std::unordered_multimap<int,int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc018');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::priority_queue<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_multimap<int,int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0639 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0640
  * @tc.name parseFunc_c_ext_0640
  * @tc.desc h2dts parseFunction：扩充-容器组合：(std::multimap<int,int>, std::unordered_multiset<int>) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0640', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void cc019(std::multimap<int,int> x, std::unordered_multiset<int> y);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'cc019');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::multimap<int,int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::unordered_multiset<int>');
      assert.strictEqual(funcList[0].parameters[1].name, 'y');
          } catch (err) {
      assert.fail(`c_func_0640 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0641
  * @tc.name parseFunc_c_ext_0641
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0641', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static int st000(int v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st000');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0641 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0642
  * @tc.name parseFunc_c_ext_0642
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0642', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static char st001(char v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st001');
      assert.strictEqual(funcList[0].returns, 'char');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0642 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0643
  * @tc.name parseFunc_c_ext_0643
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0643', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static short st002(short v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st002');
      assert.strictEqual(funcList[0].returns, 'short');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0643 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0644
  * @tc.name parseFunc_c_ext_0644
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0644', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static long st003(long v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st003');
      assert.strictEqual(funcList[0].returns, 'long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0644 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0645
  * @tc.name parseFunc_c_ext_0645
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 long long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0645', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static long long st004(long long v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st004');
      assert.strictEqual(funcList[0].returns, 'long long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0645 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0646
  * @tc.name parseFunc_c_ext_0646
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 float 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0646', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static float st005(float v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st005');
      assert.strictEqual(funcList[0].returns, 'float');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0646 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0647
  * @tc.name parseFunc_c_ext_0647
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 double 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0647', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static double st006(double v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st006');
      assert.strictEqual(funcList[0].returns, 'double');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0647 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0648
  * @tc.name parseFunc_c_ext_0648
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 bool 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0648', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static bool st007(bool v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st007');
      assert.strictEqual(funcList[0].returns, 'bool');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0648 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0649
  * @tc.name parseFunc_c_ext_0649
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 unsigned int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0649', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static unsigned int st008(unsigned int v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st008');
      assert.strictEqual(funcList[0].returns, 'unsigned int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0649 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0650
  * @tc.name parseFunc_c_ext_0650
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 unsigned char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0650', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static unsigned char st009(unsigned char v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st009');
      assert.strictEqual(funcList[0].returns, 'unsigned char');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0650 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0651
  * @tc.name parseFunc_c_ext_0651
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 unsigned short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0651', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static unsigned short st010(unsigned short v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st010');
      assert.strictEqual(funcList[0].returns, 'unsigned short');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0651 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0652
  * @tc.name parseFunc_c_ext_0652
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 unsigned long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0652', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static unsigned long st011(unsigned long v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st011');
      assert.strictEqual(funcList[0].returns, 'unsigned long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0652 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0653
  * @tc.name parseFunc_c_ext_0653
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 unsigned long long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0653', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static unsigned long long st012(unsigned long long v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st012');
      assert.strictEqual(funcList[0].returns, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0653 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0654
  * @tc.name parseFunc_c_ext_0654
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 signed char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0654', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static signed char st013(signed char v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st013');
      assert.strictEqual(funcList[0].returns, 'signed char');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0654 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0655
  * @tc.name parseFunc_c_ext_0655
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 signed short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0655', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static signed short st014(signed short v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st014');
      assert.strictEqual(funcList[0].returns, 'signed short');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0655 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0656
  * @tc.name parseFunc_c_ext_0656
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 signed long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0656', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static signed long st015(signed long v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st015');
      assert.strictEqual(funcList[0].returns, 'signed long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0656 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0657
  * @tc.name parseFunc_c_ext_0657
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 wchar_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0657', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static wchar_t st016(wchar_t v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st016');
      assert.strictEqual(funcList[0].returns, 'wchar_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0657 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0658
  * @tc.name parseFunc_c_ext_0658
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 char16_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0658', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static char16_t st017(char16_t v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st017');
      assert.strictEqual(funcList[0].returns, 'char16_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0658 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0659
  * @tc.name parseFunc_c_ext_0659
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 char32_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0659', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static char32_t st018(char32_t v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st018');
      assert.strictEqual(funcList[0].returns, 'char32_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0659 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0660
  * @tc.name parseFunc_c_ext_0660
  * @tc.desc h2dts parseFunction：扩充-static：返回/入参 size_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0660', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static size_t st019(size_t v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'st019');
      assert.strictEqual(funcList[0].returns, 'size_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0660 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0661
  * @tc.name parseFunc_c_ext_0661
  * @tc.desc h2dts parseFunction：扩充-const 参数：const int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0661', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setC000(const int v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0661 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0662
  * @tc.name parseFunc_c_ext_0662
  * @tc.desc h2dts parseFunction：扩充-const 参数：const double 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0662', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setC001(const double v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0662 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0663
  * @tc.name parseFunc_c_ext_0663
  * @tc.desc h2dts parseFunction：扩充-const 参数：const std::string& 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0663', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setC002(const std::string& v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'const std::string');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'v');
      assert.strictEqual(funcList[0].parameters[1].name, '');
          } catch (err) {
      assert.fail(`c_func_0663 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0664
  * @tc.name parseFunc_c_ext_0664
  * @tc.desc h2dts parseFunction：扩充-const 参数：const char* 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0664', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setC003(const char* v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char*');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0664 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0665
  * @tc.name parseFunc_c_ext_0665
  * @tc.desc h2dts parseFunction：扩充-const 参数：const char* const 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0665', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setC004(const char* const v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char* const');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0665 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0666
  * @tc.name parseFunc_c_ext_0666
  * @tc.desc h2dts parseFunction：扩充-const 参数：const bool 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0666', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setC005(const bool v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setC005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0666 执行异常: ${String(err)}`);
    }
  });

});
