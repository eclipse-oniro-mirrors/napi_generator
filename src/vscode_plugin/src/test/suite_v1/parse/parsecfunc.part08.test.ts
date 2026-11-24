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

suite('Parse_C_Func_Suite_Ext08', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext08');
  /**
  * @tc.number c_func_0354
  * @tc.name parseFunc_c_ext_0354
  * @tc.desc h2dts parseFunction：扩充-双参组合：(bool, unsigned char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0354', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp007002(bool a, unsigned char b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp007002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0354 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0355
  * @tc.name parseFunc_c_ext_0355
  * @tc.desc h2dts parseFunction：扩充-双参组合：(bool, unsigned short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0355', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp007003(bool a, unsigned short b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp007003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0355 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0356
  * @tc.name parseFunc_c_ext_0356
  * @tc.desc h2dts parseFunction：扩充-双参组合：(bool, unsigned long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0356', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp007004(bool a, unsigned long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp007004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0356 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0357
  * @tc.name parseFunc_c_ext_0357
  * @tc.desc h2dts parseFunction：扩充-双参组合：(bool, unsigned long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0357', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp007005(bool a, unsigned long long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp007005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0357 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0358
  * @tc.name parseFunc_c_ext_0358
  * @tc.desc h2dts parseFunction：扩充-双参组合：(bool, signed char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0358', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp007006(bool a, signed char b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp007006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'bool');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0358 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0359
  * @tc.name parseFunc_c_ext_0359
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0359', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp008001(unsigned int a, unsigned char b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp008001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0359 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0360
  * @tc.name parseFunc_c_ext_0360
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0360', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp008002(unsigned int a, unsigned short b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp008002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0360 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0361
  * @tc.name parseFunc_c_ext_0361
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0361', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp008003(unsigned int a, unsigned long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp008003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0361 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0362
  * @tc.name parseFunc_c_ext_0362
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0362', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp008004(unsigned int a, unsigned long long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp008004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0362 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0363
  * @tc.name parseFunc_c_ext_0363
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned int, signed char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0363', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp008005(unsigned int a, signed char b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp008005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0363 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0364
  * @tc.name parseFunc_c_ext_0364
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned int, signed short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0364', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp008006(unsigned int a, signed short b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp008006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned int');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0364 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0365
  * @tc.name parseFunc_c_ext_0365
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned char, unsigned short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0365', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp009001(unsigned char a, unsigned short b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp009001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0365 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0366
  * @tc.name parseFunc_c_ext_0366
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned char, unsigned long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0366', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp009002(unsigned char a, unsigned long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp009002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0366 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0367
  * @tc.name parseFunc_c_ext_0367
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned char, unsigned long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0367', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp009003(unsigned char a, unsigned long long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp009003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0367 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0368
  * @tc.name parseFunc_c_ext_0368
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned char, signed char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0368', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp009004(unsigned char a, signed char b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp009004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0368 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0369
  * @tc.name parseFunc_c_ext_0369
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned char, signed short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0369', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp009005(unsigned char a, signed short b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp009005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0369 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0370
  * @tc.name parseFunc_c_ext_0370
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned char, signed long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0370', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp009006(unsigned char a, signed long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp009006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0370 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0371
  * @tc.name parseFunc_c_ext_0371
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned short, unsigned long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0371', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp010001(unsigned short a, unsigned long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp010001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0371 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0372
  * @tc.name parseFunc_c_ext_0372
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned short, unsigned long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0372', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp010002(unsigned short a, unsigned long long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp010002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0372 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0373
  * @tc.name parseFunc_c_ext_0373
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned short, signed char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0373', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp010003(unsigned short a, signed char b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp010003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0373 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0374
  * @tc.name parseFunc_c_ext_0374
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned short, signed short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0374', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp010004(unsigned short a, signed short b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp010004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0374 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0375
  * @tc.name parseFunc_c_ext_0375
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned short, signed long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0375', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp010005(unsigned short a, signed long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp010005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0375 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0376
  * @tc.name parseFunc_c_ext_0376
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned short, wchar_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0376', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp010006(unsigned short a, wchar_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp010006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0376 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0377
  * @tc.name parseFunc_c_ext_0377
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long, unsigned long long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0377', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp011001(unsigned long a, unsigned long long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp011001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0377 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0378
  * @tc.name parseFunc_c_ext_0378
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long, signed char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0378', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp011002(unsigned long a, signed char b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp011002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0378 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0379
  * @tc.name parseFunc_c_ext_0379
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long, signed short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0379', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp011003(unsigned long a, signed short b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp011003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0379 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0380
  * @tc.name parseFunc_c_ext_0380
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long, signed long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0380', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp011004(unsigned long a, signed long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp011004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0380 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0381
  * @tc.name parseFunc_c_ext_0381
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long, wchar_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0381', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp011005(unsigned long a, wchar_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp011005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0381 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0382
  * @tc.name parseFunc_c_ext_0382
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long, char16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0382', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp011006(unsigned long a, char16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp011006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0382 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0383
  * @tc.name parseFunc_c_ext_0383
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long long, signed char) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0383', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp012001(unsigned long long a, signed char b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp012001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0383 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0384
  * @tc.name parseFunc_c_ext_0384
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long long, signed short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0384', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp012002(unsigned long long a, signed short b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp012002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0384 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0385
  * @tc.name parseFunc_c_ext_0385
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long long, signed long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0385', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp012003(unsigned long long a, signed long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp012003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0385 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0386
  * @tc.name parseFunc_c_ext_0386
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long long, wchar_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0386', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp012004(unsigned long long a, wchar_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp012004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0386 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0387
  * @tc.name parseFunc_c_ext_0387
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long long, char16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0387', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp012005(unsigned long long a, char16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp012005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0387 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0388
  * @tc.name parseFunc_c_ext_0388
  * @tc.desc h2dts parseFunction：扩充-双参组合：(unsigned long long, char32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0388', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp012006(unsigned long long a, char32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp012006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'unsigned long long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0388 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0389
  * @tc.name parseFunc_c_ext_0389
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed char, signed short) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0389', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp013001(signed char a, signed short b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp013001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0389 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0390
  * @tc.name parseFunc_c_ext_0390
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed char, signed long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0390', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp013002(signed char a, signed long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp013002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0390 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0391
  * @tc.name parseFunc_c_ext_0391
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed char, wchar_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0391', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp013003(signed char a, wchar_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp013003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0391 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0392
  * @tc.name parseFunc_c_ext_0392
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed char, char16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0392', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp013004(signed char a, char16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp013004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0392 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0393
  * @tc.name parseFunc_c_ext_0393
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed char, char32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0393', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp013005(signed char a, char32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp013005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0393 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0394
  * @tc.name parseFunc_c_ext_0394
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed char, size_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0394', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp013006(signed char a, size_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp013006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed char');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0394 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0395
  * @tc.name parseFunc_c_ext_0395
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed short, signed long) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0395', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp014001(signed short a, signed long b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp014001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0395 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0396
  * @tc.name parseFunc_c_ext_0396
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed short, wchar_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0396', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp014002(signed short a, wchar_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp014002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0396 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0397
  * @tc.name parseFunc_c_ext_0397
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed short, char16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0397', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp014003(signed short a, char16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp014003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0397 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0398
  * @tc.name parseFunc_c_ext_0398
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed short, char32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0398', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp014004(signed short a, char32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp014004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0398 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0399
  * @tc.name parseFunc_c_ext_0399
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed short, size_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0399', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp014005(signed short a, size_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp014005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0399 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0400
  * @tc.name parseFunc_c_ext_0400
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed short, int8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0400', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp014006(signed short a, int8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp014006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed short');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0400 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0401
  * @tc.name parseFunc_c_ext_0401
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed long, wchar_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0401', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp015001(signed long a, wchar_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp015001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0401 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0402
  * @tc.name parseFunc_c_ext_0402
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed long, char16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0402', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp015002(signed long a, char16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp015002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0402 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0403
  * @tc.name parseFunc_c_ext_0403
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed long, char32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0403', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp015003(signed long a, char32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp015003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0403 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0404
  * @tc.name parseFunc_c_ext_0404
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed long, size_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0404', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp015004(signed long a, size_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp015004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0404 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0405
  * @tc.name parseFunc_c_ext_0405
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed long, int8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0405', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp015005(signed long a, int8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp015005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0405 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0406
  * @tc.name parseFunc_c_ext_0406
  * @tc.desc h2dts parseFunction：扩充-双参组合：(signed long, int16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0406', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp015006(signed long a, int16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp015006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'signed long');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0406 执行异常: ${String(err)}`);
    }
  });

});
