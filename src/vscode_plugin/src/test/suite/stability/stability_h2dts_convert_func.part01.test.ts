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
import { transTskey2Ckey } from '../../../gen/gendts';
import * as parsec from '../../../parse/parsec';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTS_CONVERT_FUNC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0001_STD_FUNCTION_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0001_STD_FUNCTION_INT_INT_INT
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::function<int(int, int)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0001_std_function_int_int_int', () => {
    try {
      const result = transTskey2Ckey('std::function<int(int, int)>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0001_std_function_int_int_int convert output non-empty");
      assert.strictEqual(result, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0001_std_function_int_int_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0001_std_function_int_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0002_STD_FUNCTION_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0002_STD_FUNCTION_INT_INT
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::function<int(int,;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0002_std_function_int_int', () => {
    try {
      const r = parsec.parseFunction(`void sample147(std::function<int(int, int)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0002_std_function_int_int param convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0002_std_function_int_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0002_std_function_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0003_PARAM0_NUMBER_PARAM1_NUMB_7D9A48
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0003_PARAM0_NUMBER_PARAM1_NUMB_7D9A48
   * @tc.desc   Stability convert h2dts/func: function-return convert; type >; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0003_param0_number_param1_numb_7d9a48', () => {
    try {
      const r = parsec.parseFunction(`std::function<int(int, int)> sampleRet147();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0003_param0_number_param1_numb_7d9a48 return convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0003_param0_number_param1_numb_7d9a48 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0003_param0_number_param1_numb_7d9a48 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0004_STD_FUNCTION_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0004_STD_FUNCTION_INT_INT_INT
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::function<int(int,
   *            int)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0004_std_function_int_int_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass147 { public: std::function<int(int, int)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0004_std_function_int_int_int class field convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0004_std_function_int_int_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0004_std_function_int_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0005_STD_FUNCTION_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0005_STD_FUNCTION_INT_INT
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::function<int(int,; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0005_std_function_int_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline147(std::function<int(int, int)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0005_std_function_int_int pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0005_std_function_int_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0005_std_function_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0006_STD_FUNCTION_VOID_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0006_STD_FUNCTION_VOID_LONG_LONG
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::function<void(long, long)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0006_std_function_void_long_long', () => {
    try {
      const result = transTskey2Ckey('std::function<void(long, long)>');
      assert.ok(typeof result === 'string' && result.length > 0,
