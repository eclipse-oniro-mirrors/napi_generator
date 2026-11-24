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

suite('Parse_C_Func_Suite_Ext09', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext09');
  /**
  * @tc.number c_func_0407
  * @tc.name parseFunc_c_ext_0407
  * @tc.desc h2dts parseFunction：扩充-双参组合：(wchar_t, char16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0407', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp016001(wchar_t a, char16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp016001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0407 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0408
  * @tc.name parseFunc_c_ext_0408
  * @tc.desc h2dts parseFunction：扩充-双参组合：(wchar_t, char32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0408', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp016002(wchar_t a, char32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp016002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0408 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0409
  * @tc.name parseFunc_c_ext_0409
  * @tc.desc h2dts parseFunction：扩充-双参组合：(wchar_t, size_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0409', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp016003(wchar_t a, size_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp016003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0409 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0410
  * @tc.name parseFunc_c_ext_0410
  * @tc.desc h2dts parseFunction：扩充-双参组合：(wchar_t, int8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0410', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp016004(wchar_t a, int8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp016004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0410 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0411
  * @tc.name parseFunc_c_ext_0411
  * @tc.desc h2dts parseFunction：扩充-双参组合：(wchar_t, int16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0411', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp016005(wchar_t a, int16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp016005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0411 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0412
  * @tc.name parseFunc_c_ext_0412
  * @tc.desc h2dts parseFunction：扩充-双参组合：(wchar_t, int32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0412', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp016006(wchar_t a, int32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp016006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'wchar_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0412 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0413
  * @tc.name parseFunc_c_ext_0413
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char16_t, char32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0413', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp017001(char16_t a, char32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp017001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0413 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0414
  * @tc.name parseFunc_c_ext_0414
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char16_t, size_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0414', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp017002(char16_t a, size_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp017002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0414 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0415
  * @tc.name parseFunc_c_ext_0415
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char16_t, int8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0415', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp017003(char16_t a, int8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp017003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0415 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0416
  * @tc.name parseFunc_c_ext_0416
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char16_t, int16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0416', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp017004(char16_t a, int16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp017004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0416 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0417
  * @tc.name parseFunc_c_ext_0417
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char16_t, int32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0417', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp017005(char16_t a, int32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp017005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0417 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0418
  * @tc.name parseFunc_c_ext_0418
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char16_t, int64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0418', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp017006(char16_t a, int64_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp017006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0418 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0419
  * @tc.name parseFunc_c_ext_0419
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char32_t, size_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0419', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp018001(char32_t a, size_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp018001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0419 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0420
  * @tc.name parseFunc_c_ext_0420
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char32_t, int8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0420', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp018002(char32_t a, int8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp018002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0420 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0421
  * @tc.name parseFunc_c_ext_0421
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char32_t, int16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0421', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp018003(char32_t a, int16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp018003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0421 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0422
  * @tc.name parseFunc_c_ext_0422
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char32_t, int32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0422', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp018004(char32_t a, int32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp018004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0422 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0423
  * @tc.name parseFunc_c_ext_0423
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char32_t, int64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0423', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp018005(char32_t a, int64_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp018005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0423 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0424
  * @tc.name parseFunc_c_ext_0424
  * @tc.desc h2dts parseFunction：扩充-双参组合：(char32_t, uint8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0424', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp018006(char32_t a, uint8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp018006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'char32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0424 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0425
  * @tc.name parseFunc_c_ext_0425
  * @tc.desc h2dts parseFunction：扩充-双参组合：(size_t, int8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0425', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp019001(size_t a, int8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp019001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0425 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0426
  * @tc.name parseFunc_c_ext_0426
  * @tc.desc h2dts parseFunction：扩充-双参组合：(size_t, int16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0426', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp019002(size_t a, int16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp019002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0426 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0427
  * @tc.name parseFunc_c_ext_0427
  * @tc.desc h2dts parseFunction：扩充-双参组合：(size_t, int32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0427', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp019003(size_t a, int32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp019003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0427 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0428
  * @tc.name parseFunc_c_ext_0428
  * @tc.desc h2dts parseFunction：扩充-双参组合：(size_t, int64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0428', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp019004(size_t a, int64_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp019004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0428 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0429
  * @tc.name parseFunc_c_ext_0429
  * @tc.desc h2dts parseFunction：扩充-双参组合：(size_t, uint8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0429', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp019005(size_t a, uint8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp019005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0429 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0430
  * @tc.name parseFunc_c_ext_0430
  * @tc.desc h2dts parseFunction：扩充-双参组合：(size_t, uint16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0430', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp019006(size_t a, uint16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp019006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'size_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0430 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0431
  * @tc.name parseFunc_c_ext_0431
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int8_t, int16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0431', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp020001(int8_t a, int16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp020001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0431 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0432
  * @tc.name parseFunc_c_ext_0432
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int8_t, int32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0432', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp020002(int8_t a, int32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp020002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0432 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0433
  * @tc.name parseFunc_c_ext_0433
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int8_t, int64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0433', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp020003(int8_t a, int64_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp020003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0433 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0434
  * @tc.name parseFunc_c_ext_0434
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int8_t, uint8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0434', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp020004(int8_t a, uint8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp020004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0434 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0435
  * @tc.name parseFunc_c_ext_0435
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int8_t, uint16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0435', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp020005(int8_t a, uint16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp020005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0435 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0436
  * @tc.name parseFunc_c_ext_0436
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int8_t, uint32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0436', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp020006(int8_t a, uint32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp020006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0436 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0437
  * @tc.name parseFunc_c_ext_0437
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int16_t, int32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0437', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp021001(int16_t a, int32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp021001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0437 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0438
  * @tc.name parseFunc_c_ext_0438
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int16_t, int64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0438', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp021002(int16_t a, int64_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp021002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0438 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0439
  * @tc.name parseFunc_c_ext_0439
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int16_t, uint8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0439', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp021003(int16_t a, uint8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp021003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0439 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0440
  * @tc.name parseFunc_c_ext_0440
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int16_t, uint16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0440', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp021004(int16_t a, uint16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp021004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0440 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0441
  * @tc.name parseFunc_c_ext_0441
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int16_t, uint32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0441', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp021005(int16_t a, uint32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp021005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0441 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0442
  * @tc.name parseFunc_c_ext_0442
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int16_t, uint64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0442', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp021006(int16_t a, uint64_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp021006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int16_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0442 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0443
  * @tc.name parseFunc_c_ext_0443
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int32_t, int64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0443', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp022001(int32_t a, int64_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp022001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0443 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0444
  * @tc.name parseFunc_c_ext_0444
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int32_t, uint8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0444', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp022002(int32_t a, uint8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp022002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0444 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0445
  * @tc.name parseFunc_c_ext_0445
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int32_t, uint16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0445', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp022003(int32_t a, uint16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp022003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0445 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0446
  * @tc.name parseFunc_c_ext_0446
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int32_t, uint32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0446', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp022004(int32_t a, uint32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp022004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0446 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0447
  * @tc.name parseFunc_c_ext_0447
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int32_t, uint64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0447', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp022005(int32_t a, uint64_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp022005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0447 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0448
  * @tc.name parseFunc_c_ext_0448
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int32_t, std::string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0448', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp022006(int32_t a, std::string b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp022006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int32_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0448 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0449
  * @tc.name parseFunc_c_ext_0449
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int64_t, uint8_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0449', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp023001(int64_t a, uint8_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp023001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0449 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0450
  * @tc.name parseFunc_c_ext_0450
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int64_t, uint16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0450', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp023002(int64_t a, uint16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp023002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0450 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0451
  * @tc.name parseFunc_c_ext_0451
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int64_t, uint32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0451', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp023003(int64_t a, uint32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp023003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0451 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0452
  * @tc.name parseFunc_c_ext_0452
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int64_t, uint64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0452', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp023004(int64_t a, uint64_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp023004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0452 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0453
  * @tc.name parseFunc_c_ext_0453
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int64_t, std::string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0453', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp023005(int64_t a, std::string b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp023005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0453 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0454
  * @tc.name parseFunc_c_ext_0454
  * @tc.desc h2dts parseFunction：扩充-双参组合：(int64_t, string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0454', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp023006(int64_t a, string b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp023006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'int64_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0454 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0455
  * @tc.name parseFunc_c_ext_0455
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint8_t, uint16_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0455', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp024001(uint8_t a, uint16_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp024001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint16_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0455 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0456
  * @tc.name parseFunc_c_ext_0456
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint8_t, uint32_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0456', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp024002(uint8_t a, uint32_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp024002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint32_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0456 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0457
  * @tc.name parseFunc_c_ext_0457
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint8_t, uint64_t) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0457', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp024003(uint8_t a, uint64_t b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp024003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'uint64_t');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0457 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0458
  * @tc.name parseFunc_c_ext_0458
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint8_t, std::string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0458', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp024004(uint8_t a, std::string b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp024004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'std::string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0458 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0459
  * @tc.name parseFunc_c_ext_0459
  * @tc.desc h2dts parseFunction：扩充-双参组合：(uint8_t, string) 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0459', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void pp024005(uint8_t a, string b);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'pp024005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 2);
      assert.strictEqual(funcList[0].parameters[0].type, 'uint8_t');
      assert.strictEqual(funcList[0].parameters[0].name, 'a');
      assert.strictEqual(funcList[0].parameters[1].type, 'string');
      assert.strictEqual(funcList[0].parameters[1].name, 'b');
          } catch (err) {
      assert.fail(`c_func_0459 执行异常: ${String(err)}`);
    }
  });

});
