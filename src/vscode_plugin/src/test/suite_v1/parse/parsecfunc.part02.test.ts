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

suite('Parse_C_Func_Suite_Ext02', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext02');
  /**
  * @tc.number c_func_0043
  * @tc.name parseFunc_c_ext_0043
  * @tc.desc h2dts parseFunction：static 函数：static void 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0043', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static void resetAll();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'resetAll');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0043 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0044
  * @tc.name parseFunc_c_ext_0044
  * @tc.desc h2dts parseFunction：static 函数：static 带参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0044', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static double ratio(double r);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'ratio');
      assert.strictEqual(funcList[0].returns, 'double');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'r');
          } catch (err) {
      assert.fail(`c_func_0044 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0045
  * @tc.name parseFunc_c_ext_0045
  * @tc.desc h2dts parseFunction：static 函数：static bool 返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0045', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static bool isReady();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'isReady');
      assert.strictEqual(funcList[0].returns, 'bool');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0045 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0046
  * @tc.name parseFunc_c_ext_0046
  * @tc.desc h2dts parseFunction：const 修饰：const int 返回（const 剥离） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0046', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`const int getConst();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getConst');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0046 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0047
  * @tc.name parseFunc_c_ext_0047
  * @tc.desc h2dts parseFunction：const 修饰：static const 组合 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0047', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static const double rate();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'rate');
      assert.strictEqual(funcList[0].returns, 'double');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0047 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0048
  * @tc.name parseFunc_c_ext_0048
  * @tc.desc h2dts parseFunction：const 修饰：const 参数（剥离） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0048', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setConst(const int a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setConst');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0048 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0049
  * @tc.name parseFunc_c_ext_0049
  * @tc.desc h2dts parseFunction：const 修饰：const char* 参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0049', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::string getStr(const char* s);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getStr');
      assert.strictEqual(funcList[0].returns, 'std::string');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char*');
      assert.strictEqual(funcList[0].parameters[0].name, 's');
          } catch (err) {
      assert.fail(`c_func_0049 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0050
  * @tc.name parseFunc_c_ext_0050
  * @tc.desc h2dts parseFunction：多函数：同文件 3 条函数声明 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0050', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`int add(int a, int b);
float mul(float a, float b);
bool eq(bool a, bool b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 3);
      assert.strictEqual(funcList[0].name, 'add');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[1].name, 'mul');
      assert.strictEqual(funcList[1].returns, 'float');
      assert.strictEqual(funcList[1].parameters.length, 2);
      assert.strictEqual(funcList[1].parameters[0].type, 'float');
      assert.strictEqual(funcList[1].parameters[0].name, 'a');
      assert.strictEqual(funcList[1].parameters[1].type, 'float');
      assert.strictEqual(funcList[1].parameters[1].name, 'b');
      assert.strictEqual(funcList[2].name, 'eq');
      assert.strictEqual(funcList[2].returns, 'bool');
      assert.strictEqual(funcList[2].parameters.length, 2);
      assert.strictEqual(funcList[2].parameters[0].type, 'bool');
      assert.strictEqual(funcList[2].parameters[0].name, 'a');
      assert.strictEqual(funcList[2].parameters[1].type, 'bool');
      assert.strictEqual(funcList[2].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0050 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0051
  * @tc.name parseFunc_c_ext_0051
  * @tc.desc h2dts parseFunction：多参数：5 参 double 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0051', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`double calc(double a, double b, double c, double d, double e);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'calc');
      assert.strictEqual(funcList[0].returns, 'double');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'double');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'double');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'double');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.strictEqual(funcList[0].parameters[4].type, 'double');
      assert.strictEqual(funcList[0].parameters[4].name, 'e');
          } catch (err) {
      assert.fail(`c_func_0051 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0052
  * @tc.name parseFunc_c_ext_0052
  * @tc.desc h2dts parseFunction：多参数：5 参混合类型 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0052', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void mixed(int a, std::string b, bool c, double d, char e);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'mixed');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 5);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[0].parameters[2].type, 'bool');
      assert.strictEqual(funcList[0].parameters[2].name, 'c');
      assert.strictEqual(funcList[0].parameters[3].type, 'double');
      assert.strictEqual(funcList[0].parameters[3].name, 'd');
      assert.strictEqual(funcList[0].parameters[4].type, 'char');
      assert.strictEqual(funcList[0].parameters[4].name, 'e');
          } catch (err) {
      assert.fail(`c_func_0052 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0053
  * @tc.name parseFunc_c_ext_0053
  * @tc.desc h2dts parseFunction：namespace：域内函数×2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0053', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`namespace ns {
int add(int a, int b);
std::string getName();
}`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 2);
      assert.strictEqual(funcList[0].name, 'add');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
      assert.strictEqual(funcList[1].name, 'getName');
      assert.strictEqual(funcList[1].returns, 'std::string');
      assert.strictEqual(funcList[1].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0053 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0054
  * @tc.name parseFunc_c_ext_0054
  * @tc.desc h2dts parseFunction：namespace：嵌套域内函数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0054', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`namespace outer {
namespace inner {
int add(int a, int b);
}
}`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'add');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0054 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0055
  * @tc.name parseFunc_c_ext_0055
  * @tc.desc h2dts parseFunction：namespace：域内 static 函数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0055', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`namespace api {
static int version();
std::string baseUrl();
}`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 2);
      assert.strictEqual(funcList[0].name, 'version');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 0);
      assert.strictEqual(funcList[1].name, 'baseUrl');
      assert.strictEqual(funcList[1].returns, 'std::string');
      assert.strictEqual(funcList[1].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0055 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0056
  * @tc.name parseFunc_c_ext_0056
  * @tc.desc h2dts parseFunction：typedef 函数指针：int (*)(int,int) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0056', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`typedef int (*callback)(int a, int b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'callback');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0056 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0057
  * @tc.name parseFunc_c_ext_0057
  * @tc.desc h2dts parseFunction：typedef 函数指针：void (*)(string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0057', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`typedef void (*handler)(std::string msg);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'handler');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'msg');
          } catch (err) {
      assert.fail(`c_func_0057 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0058
  * @tc.name parseFunc_c_ext_0058
  * @tc.desc h2dts parseFunction：typedef 函数指针：double (*)(double) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0058', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`typedef double (*compute)(double x);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'compute');
      assert.strictEqual(funcList[0].returns, 'double');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'x');
          } catch (err) {
      assert.fail(`c_func_0058 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0059
  * @tc.name parseFunc_c_ext_0059
  * @tc.desc h2dts parseFunction：typedef 函数指针：bool (*)(int,double) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0059', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`typedef bool (*filter)(int v, double d);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'filter');
      assert.strictEqual(funcList[0].returns, 'bool');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
      assert.strictEqual(funcList[0].parameters[1].type, 'double');
      assert.strictEqual(funcList[0].parameters[1].name, 'd');
          } catch (err) {
      assert.fail(`c_func_0059 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0060
  * @tc.name parseFunc_c_ext_0060
  * @tc.desc h2dts parseFunction：数组类型：std::queue<int> 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0060', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setQueue(std::queue<int> q);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setQueue');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::queue<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'q');
          } catch (err) {
      assert.fail(`c_func_0060 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0061
  * @tc.name parseFunc_c_ext_0061
  * @tc.desc h2dts parseFunction：数组类型：std::stack 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0061', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setStack(std::stack<std::string> s);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setStack');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::stack<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 's');
          } catch (err) {
      assert.fail(`c_func_0061 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0062
  * @tc.name parseFunc_c_ext_0062
  * @tc.desc h2dts parseFunction：数组类型：std::priority_queue 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0062', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setPriorityQueue(std::priority_queue<int> pq);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPriorityQueue');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::priority_queue<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'pq');
          } catch (err) {
      assert.fail(`c_func_0062 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0063
  * @tc.name parseFunc_c_ext_0063
  * @tc.desc h2dts parseFunction：数组类型：std::multimap 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0063', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setMultiMap(std::multimap<int, int> mm);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setMultiMap');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::multimap<int, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'mm');
          } catch (err) {
      assert.fail(`c_func_0063 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0064
  * @tc.name parseFunc_c_ext_0064
  * @tc.desc h2dts parseFunction：数组类型：std::multiset 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0064', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setMultiSet(std::multiset<int> ms);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setMultiSet');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::multiset<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'ms');
          } catch (err) {
      assert.fail(`c_func_0064 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0065
  * @tc.name parseFunc_c_ext_0065
  * @tc.desc h2dts parseFunction：数组类型：std::unordered_map 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0065', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setUnorderedMap(std::unordered_map<std::string, int> um);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setUnorderedMap');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unordered_map<std::string, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'um');
          } catch (err) {
      assert.fail(`c_func_0065 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0066
  * @tc.name parseFunc_c_ext_0066
  * @tc.desc h2dts parseFunction：数组类型：std::forward_list 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0066', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setForwardList(std::forward_list<int> fl);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setForwardList');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::forward_list<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'fl');
          } catch (err) {
      assert.fail(`c_func_0066 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0067
  * @tc.name parseFunc_c_ext_0067
  * @tc.desc h2dts parseFunction：数组类型：std::valarray 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0067', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setValarray(std::valarray<double> va);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setValarray');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::valarray<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'va');
          } catch (err) {
      assert.fail(`c_func_0067 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0068
  * @tc.name parseFunc_c_ext_0068
  * @tc.desc h2dts parseFunction：数组类型：std::complex 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0068', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setComplex(std::complex<double> c);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setComplex');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::complex<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'c');
          } catch (err) {
      assert.fail(`c_func_0068 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0069
  * @tc.name parseFunc_c_ext_0069
  * @tc.desc h2dts parseFunction：数组类型：wchar_t* 指针入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0069', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setWCharPtr(wchar_t* s);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setWCharPtr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t*');
      assert.strictEqual(funcList[0].parameters[0].name, 's');
          } catch (err) {
      assert.fail(`c_func_0069 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0070
  * @tc.name parseFunc_c_ext_0070
  * @tc.desc h2dts parseFunction：数组类型：float[8][8] 二维入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0070', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setArray2d(float f[8][8]);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setArray2d');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'f');
      assert.strictEqual(funcList[0].parameters[1].type, '8');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '8');
      assert.strictEqual(funcList[0].parameters[2].name, '');
          } catch (err) {
      assert.fail(`c_func_0070 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0071
  * @tc.name parseFunc_c_ext_0071
  * @tc.desc h2dts parseFunction：扩充-基础：int8_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0071', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`int8_t getI8(int8_t a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getI8');
      assert.strictEqual(funcList[0].returns, 'int8_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0071 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0072
  * @tc.name parseFunc_c_ext_0072
  * @tc.desc h2dts parseFunction：扩充-基础：int16_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0072', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`int16_t getI16(int16_t a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getI16');
      assert.strictEqual(funcList[0].returns, 'int16_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0072 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0073
  * @tc.name parseFunc_c_ext_0073
  * @tc.desc h2dts parseFunction：扩充-基础：int32_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0073', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`int32_t getI32(int32_t a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getI32');
      assert.strictEqual(funcList[0].returns, 'int32_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0073 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0074
  * @tc.name parseFunc_c_ext_0074
  * @tc.desc h2dts parseFunction：扩充-基础：int64_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0074', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`int64_t getI64(int64_t a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getI64');
      assert.strictEqual(funcList[0].returns, 'int64_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0074 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0075
  * @tc.name parseFunc_c_ext_0075
  * @tc.desc h2dts parseFunction：扩充-基础：uint8_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0075', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`uint8_t getU8(uint8_t a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getU8');
      assert.strictEqual(funcList[0].returns, 'uint8_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0075 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0076
  * @tc.name parseFunc_c_ext_0076
  * @tc.desc h2dts parseFunction：扩充-基础：uint16_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0076', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`uint16_t getU16(uint16_t a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getU16');
      assert.strictEqual(funcList[0].returns, 'uint16_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0076 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0077
  * @tc.name parseFunc_c_ext_0077
  * @tc.desc h2dts parseFunction：扩充-基础：uint32_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0077', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`uint32_t getU32(uint32_t a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getU32');
      assert.strictEqual(funcList[0].returns, 'uint32_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0077 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0078
  * @tc.name parseFunc_c_ext_0078
  * @tc.desc h2dts parseFunction：扩充-基础：uint64_t 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0078', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`uint64_t getU64(uint64_t a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getU64');
      assert.strictEqual(funcList[0].returns, 'uint64_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0078 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0079
  * @tc.name parseFunc_c_ext_0079
  * @tc.desc h2dts parseFunction：扩充-基础：unsigned short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0079', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`unsigned short getUS(unsigned short a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getUS');
      assert.strictEqual(funcList[0].returns, 'unsigned short');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0079 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0080
  * @tc.name parseFunc_c_ext_0080
  * @tc.desc h2dts parseFunction：扩充-基础：unsigned char 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0080', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`unsigned char getUC(unsigned char a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getUC');
      assert.strictEqual(funcList[0].returns, 'unsigned char');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0080 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0081
  * @tc.name parseFunc_c_ext_0081
  * @tc.desc h2dts parseFunction：扩充-基础：signed short 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0081', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`signed short getSS(signed short a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getSS');
      assert.strictEqual(funcList[0].returns, 'signed short');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0081 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0082
  * @tc.name parseFunc_c_ext_0082
  * @tc.desc h2dts parseFunction：扩充-基础：signed long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0082', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`signed long getSL(signed long a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getSL');
      assert.strictEqual(funcList[0].returns, 'signed long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0082 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0083
  * @tc.name parseFunc_c_ext_0083
  * @tc.desc h2dts parseFunction：扩充-基础：unsigned long 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0083', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`unsigned long getUL(unsigned long a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getUL');
      assert.strictEqual(funcList[0].returns, 'unsigned long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0083 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0084
  * @tc.name parseFunc_c_ext_0084
  * @tc.desc h2dts parseFunction：扩充-引用：int& 左值引用 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0084', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setRef(int& a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setRef');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, '');
      assert.strictEqual(funcList[0].parameters[1].type, 'a');
      assert.strictEqual(funcList[0].parameters[1].name, '');
          } catch (err) {
      assert.fail(`c_func_0084 执行异常: ${String(err)}`);
    }
  });

});
