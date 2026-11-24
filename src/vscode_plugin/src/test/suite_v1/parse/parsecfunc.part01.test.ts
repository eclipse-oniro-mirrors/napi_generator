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

suite('Parse_C_Func_Suite_Ext01', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext01');
  /**
  * @tc.number c_func_0001
  * @tc.name parseFunc_c_ext_0001
  * @tc.desc h2dts parseFunction：基础类型：int 入参×2 返回 int 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0001', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`int add(int a, int b);`);
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
      assert.fail(`c_func_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0002
  * @tc.name parseFunc_c_ext_0002
  * @tc.desc h2dts parseFunction：基础类型：std::string 返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0002', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::string getName();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getName');
      assert.strictEqual(funcList[0].returns, 'std::string');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0003
  * @tc.name parseFunc_c_ext_0003
  * @tc.desc h2dts parseFunction：基础类型：string 入参×2 返回 string 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0003', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`string concat(string a, string b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'concat');
      assert.strictEqual(funcList[0].returns, 'string');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'string');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0004
  * @tc.name parseFunc_c_ext_0004
  * @tc.desc h2dts parseFunction：基础类型：char 返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0004', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`char getChar();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getChar');
      assert.strictEqual(funcList[0].returns, 'char');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0005
  * @tc.name parseFunc_c_ext_0005
  * @tc.desc h2dts parseFunction：基础类型：long 入参/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0005', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`long getLong(long a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getLong');
      assert.strictEqual(funcList[0].returns, 'long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0006
  * @tc.name parseFunc_c_ext_0006
  * @tc.desc h2dts parseFunction：基础类型：long long 入参×2/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0006', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`long long getLongLong(long long a, long long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getLongLong');
      assert.strictEqual(funcList[0].returns, 'long long');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0007
  * @tc.name parseFunc_c_ext_0007
  * @tc.desc h2dts parseFunction：基础类型：float 入参/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0007', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`float getFloat(float a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getFloat');
      assert.strictEqual(funcList[0].returns, 'float');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0008
  * @tc.name parseFunc_c_ext_0008
  * @tc.desc h2dts parseFunction：基础类型：double 入参/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0008', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`double getDouble(double a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getDouble');
      assert.strictEqual(funcList[0].returns, 'double');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0009
  * @tc.name parseFunc_c_ext_0009
  * @tc.desc h2dts parseFunction：基础类型：bool 入参/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0009', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`bool isOk(bool flag);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'isOk');
      assert.strictEqual(funcList[0].returns, 'bool');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'flag');
          } catch (err) {
      assert.fail(`c_func_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0010
  * @tc.name parseFunc_c_ext_0010
  * @tc.desc h2dts parseFunction：基础类型：unsigned int 入参/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0010', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`unsigned int getUInt(unsigned int a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getUInt');
      assert.strictEqual(funcList[0].returns, 'unsigned int');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0011
  * @tc.name parseFunc_c_ext_0011
  * @tc.desc h2dts parseFunction：基础类型：short 入参/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0011', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`short getShort(short a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getShort');
      assert.strictEqual(funcList[0].returns, 'short');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0012
  * @tc.name parseFunc_c_ext_0012
  * @tc.desc h2dts parseFunction：基础类型：wchar_t 入参/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0012', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`wchar_t getWChar(wchar_t a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getWChar');
      assert.strictEqual(funcList[0].returns, 'wchar_t');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0013
  * @tc.name parseFunc_c_ext_0013
  * @tc.desc h2dts parseFunction：基础类型：signed char 入参/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0013', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`signed char getSChar(signed char a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getSChar');
      assert.strictEqual(funcList[0].returns, 'signed char');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0014
  * @tc.name parseFunc_c_ext_0014
  * @tc.desc h2dts parseFunction：基础类型：unsigned long long 入参/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0014', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`unsigned long long getULL(unsigned long long a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getULL');
      assert.strictEqual(funcList[0].returns, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0015
  * @tc.name parseFunc_c_ext_0015
  * @tc.desc h2dts parseFunction：基础类型：long double 入参/返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0015', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`long double getLD(long double a);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getLD');
      assert.strictEqual(funcList[0].returns, 'long double');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'long double');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
          } catch (err) {
      assert.fail(`c_func_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0016
  * @tc.name parseFunc_c_ext_0016
  * @tc.desc h2dts parseFunction：基础类型：void 无参返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0016', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void doNothing();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'doNothing');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0017
  * @tc.name parseFunc_c_ext_0017
  * @tc.desc h2dts parseFunction：基础类型：std::wstring 返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0017', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::wstring getWString();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getWString');
      assert.strictEqual(funcList[0].returns, 'std::wstring');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0018
  * @tc.name parseFunc_c_ext_0018
  * @tc.desc h2dts parseFunction：基础类型：char16_t 返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0018', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`char16_t getChar16();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getChar16');
      assert.strictEqual(funcList[0].returns, 'char16_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0019
  * @tc.name parseFunc_c_ext_0019
  * @tc.desc h2dts parseFunction：基础类型：char32_t 返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0019', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`char32_t getChar32();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getChar32');
      assert.strictEqual(funcList[0].returns, 'char32_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0020
  * @tc.name parseFunc_c_ext_0020
  * @tc.desc h2dts parseFunction：基础类型：size_t 返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0020', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`size_t getSize();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getSize');
      assert.strictEqual(funcList[0].returns, 'size_t');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0021
  * @tc.name parseFunc_c_ext_0021
  * @tc.desc h2dts parseFunction：数组类型：int[10] 定长数组入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0021', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setIntArr(int arr[10]);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setIntArr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '10');
      assert.strictEqual(funcList[0].parameters[1].name, '');
          } catch (err) {
      assert.fail(`c_func_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0022
  * @tc.name parseFunc_c_ext_0022
  * @tc.desc h2dts parseFunction：数组类型：std::string[20] 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0022', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setStrArr(std::string arr[20]);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setStrArr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '20');
      assert.strictEqual(funcList[0].parameters[1].name, '');
          } catch (err) {
      assert.fail(`c_func_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0023
  * @tc.name parseFunc_c_ext_0023
  * @tc.desc h2dts parseFunction：数组类型：char* 指针入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0023', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setCharPtr(char* str);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setCharPtr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'char*');
      assert.strictEqual(funcList[0].parameters[0].name, 'str');
          } catch (err) {
      assert.fail(`c_func_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0024
  * @tc.name parseFunc_c_ext_0024
  * @tc.desc h2dts parseFunction：数组类型：int* 指针入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0024', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setIntPtr(int* p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setIntPtr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'int*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0025
  * @tc.name parseFunc_c_ext_0025
  * @tc.desc h2dts parseFunction：数组类型：double* 指针入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0025', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setDoublePtr(double* p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setDoublePtr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'double*');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0026
  * @tc.name parseFunc_c_ext_0026
  * @tc.desc h2dts parseFunction：数组类型：std::vector<int> 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0026', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setVecInt(std::vector<int> vec);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setVecInt');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'vec');
          } catch (err) {
      assert.fail(`c_func_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0027
  * @tc.name parseFunc_c_ext_0027
  * @tc.desc h2dts parseFunction：数组类型：std::vector<std::string> 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0027', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setVecStr(std::vector<std::string> vec);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setVecStr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'vec');
          } catch (err) {
      assert.fail(`c_func_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0028
  * @tc.name parseFunc_c_ext_0028
  * @tc.desc h2dts parseFunction：数组类型：std::map 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0028', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setMap(std::map<std::string, int> m);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setMap');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::map<std::string, int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'm');
          } catch (err) {
      assert.fail(`c_func_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0029
  * @tc.name parseFunc_c_ext_0029
  * @tc.desc h2dts parseFunction：数组类型：std::set<int> 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0029', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setSet(std::set<int> s);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setSet');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::set<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 's');
          } catch (err) {
      assert.fail(`c_func_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0030
  * @tc.name parseFunc_c_ext_0030
  * @tc.desc h2dts parseFunction：数组类型：std::list<double> 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0030', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setList(std::list<double> l);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setList');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::list<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'l');
          } catch (err) {
      assert.fail(`c_func_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0031
  * @tc.name parseFunc_c_ext_0031
  * @tc.desc h2dts parseFunction：数组类型：std::deque<bool> 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0031', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setDeque(std::deque<bool> d);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setDeque');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::deque<bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'd');
          } catch (err) {
      assert.fail(`c_func_0031 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0032
  * @tc.name parseFunc_c_ext_0032
  * @tc.desc h2dts parseFunction：数组类型：std::pair 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0032', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setPair(std::pair<int, std::string> p);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setPair');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::pair<int, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'p');
          } catch (err) {
      assert.fail(`c_func_0032 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0033
  * @tc.name parseFunc_c_ext_0033
  * @tc.desc h2dts parseFunction：数组类型：std::tuple 三元素入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0033', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setTuple(std::tuple<int, float, double> t);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setTuple');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::tuple<int, float, double>');
      assert.strictEqual(funcList[0].parameters[0].name, 't');
          } catch (err) {
      assert.fail(`c_func_0033 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0034
  * @tc.name parseFunc_c_ext_0034
  * @tc.desc h2dts parseFunction：数组类型：int[10][20] 二维数组入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0034', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setArr2d(int arr[10][20]);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setArr2d');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 3);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '10');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '20');
      assert.strictEqual(funcList[0].parameters[2].name, '');
          } catch (err) {
      assert.fail(`c_func_0034 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0035
  * @tc.name parseFunc_c_ext_0035
  * @tc.desc h2dts parseFunction：数组类型：double[5][10][15] 三维数组入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0035', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setArr3d(double arr[5][10][15]);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setArr3d');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 4);
      assert.strictEqual(funcList[0].parameters[0].type, 'double');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '5');
      assert.strictEqual(funcList[0].parameters[1].name, '');
      assert.strictEqual(funcList[0].parameters[2].type, '10');
      assert.strictEqual(funcList[0].parameters[2].name, '');
      assert.strictEqual(funcList[0].parameters[3].type, '15');
      assert.strictEqual(funcList[0].parameters[3].name, '');
          } catch (err) {
      assert.fail(`c_func_0035 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0036
  * @tc.name parseFunc_c_ext_0036
  * @tc.desc h2dts parseFunction：数组类型：float[16] 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0036', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setFloatArr(float arr[16]);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setFloatArr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'float');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '16');
      assert.strictEqual(funcList[0].parameters[1].name, '');
          } catch (err) {
      assert.fail(`c_func_0036 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0037
  * @tc.name parseFunc_c_ext_0037
  * @tc.desc h2dts parseFunction：数组类型：bool[8] 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0037', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setBoolArr(bool arr[8]);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setBoolArr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '8');
      assert.strictEqual(funcList[0].parameters[1].name, '');
          } catch (err) {
      assert.fail(`c_func_0037 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0038
  * @tc.name parseFunc_c_ext_0038
  * @tc.desc h2dts parseFunction：数组类型：long[64] 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0038', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setLongArr(long arr[64]);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setLongArr');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'long');
      assert.strictEqual(funcList[0].parameters[0].name, 'arr');
      assert.strictEqual(funcList[0].parameters[1].type, '64');
      assert.strictEqual(funcList[0].parameters[1].name, '');
          } catch (err) {
      assert.fail(`c_func_0038 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0039
  * @tc.name parseFunc_c_ext_0039
  * @tc.desc h2dts parseFunction：数组类型：iterator 迭代器入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0039', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setIter(std::vector<int>::iterator it);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setIter');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::vector<int>::iterator');
      assert.strictEqual(funcList[0].parameters[0].name, 'it');
          } catch (err) {
      assert.fail(`c_func_0039 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0040
  * @tc.name parseFunc_c_ext_0040
  * @tc.desc h2dts parseFunction：数组类型：std::function 入参 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0040', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setFunc(std::function<int(int, int)> fn);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setFunc');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::function<int(int, int)>');
      assert.strictEqual(funcList[0].parameters[0].name, 'fn');
          } catch (err) {
      assert.fail(`c_func_0040 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0041
  * @tc.name parseFunc_c_ext_0041
  * @tc.desc h2dts parseFunction：static 函数：static int 返回 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0041', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static int addStatic(int a, int b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'addStatic');
      assert.strictEqual(funcList[0].returns, 'int');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0041 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0042
  * @tc.name parseFunc_c_ext_0042
  * @tc.desc h2dts parseFunction：static 函数：static 返回 std::string 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0042', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`static std::string nameStatic();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'nameStatic');
      assert.strictEqual(funcList[0].returns, 'std::string');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0042 执行异常: ${String(err)}`);
    }
  });

});
