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

suite('Stability_H2DTS_CONVERT_ARRAY_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_ARRAY_BOOL_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_ARRAY_BOOL_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::array<bool,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0032_std_array_bool_10', () => {
    try {
      const result = transTskey2Ckey('std::array<bool, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0032_std_array_bool_10 convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_array_0032_std_array_bool_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032_std_array_bool_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_ARRAY_BOOL_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_ARRAY_BOOL_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<bool, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0033_std_array_bool_10', () => {
    try {
      const r = parsec.parseFunction(`void sample57(std::array<bool, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0033_std_array_bool_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0033_std_array_bool_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033_std_array_bool_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_ARRAY_BOOLEAN
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<bool, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0034_array_boolean', () => {
    try {
      const r = parsec.parseFunction(`std::array<bool, 10> sampleRet57();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0034_array_boolean return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0034_array_boolean return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_ARRAY_BOOL_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_ARRAY_BOOL_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<bool, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0035_std_array_bool_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass57 { public: std::array<bool, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0035_std_array_bool_10 class field convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0035_std_array_bool_10 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035_std_array_bool_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_ARRAY_BOOL_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_ARRAY_BOOL_10
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<bool,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0036_std_array_bool_10', () => {
    try {
      const r = parsec.parseFunction(`void pipeline57(std::array<bool, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0036_std_array_bool_10 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0036_std_array_bool_10 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036_std_array_bool_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_ARRAY_CHAR_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_ARRAY_CHAR_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::array<char,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0037_std_array_char_10', () => {
    try {
      const result = transTskey2Ckey('std::array<char, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0037_std_array_char_10 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0037_std_array_char_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037_std_array_char_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_ARRAY_CHAR_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_ARRAY_CHAR_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<char, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0038_std_array_char_10', () => {
    try {
      const r = parsec.parseFunction(`void sample58(std::array<char, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0038_std_array_char_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0038_std_array_char_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038_std_array_char_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<char, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0039_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::array<char, 10> sampleRet58();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0039_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0039_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_ARRAY_CHAR_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_ARRAY_CHAR_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<char, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0040_std_array_char_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass58 { public: std::array<char, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0040_std_array_char_10 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0040_std_array_char_10 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040_std_array_char_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_ARRAY_CHAR_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_ARRAY_CHAR_10
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<char,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0041_std_array_char_10', () => {
    try {
      const r = parsec.parseFunction(`void pipeline58(std::array<char, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0041_std_array_char_10 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0041_std_array_char_10 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041_std_array_char_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_ARRAY_WCHAR_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_ARRAY_WCHAR_T_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::array<wchar_t, 10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0042_std_array_wchar_t_10', () => {
    try {
      const result = transTskey2Ckey('std::array<wchar_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0042_std_array_wchar_t_10 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0042_std_array_wchar_t_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042_std_array_wchar_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_ARRAY_WCHAR_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_ARRAY_WCHAR_T_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<wchar_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0043_std_array_wchar_t_10', () => {
    try {
      const r = parsec.parseFunction(`void sample59(std::array<wchar_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0043_std_array_wchar_t_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0043_std_array_wchar_t_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043_std_array_wchar_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<wchar_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0044_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::array<wchar_t, 10> sampleRet59();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0044_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0044_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_ARRAY_WCHAR_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_ARRAY_WCHAR_T_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<wchar_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0045_std_array_wchar_t_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass59 { public: std::array<wchar_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045_std_array_wchar_t_10 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0045_std_array_wchar_t_10 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045_std_array_wchar_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_ARRAY_WCHAR_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_ARRAY_WCHAR_T_10
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<wchar_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0046_std_array_wchar_t_10', () => {
    try {
      const r = parsec.parseFunction(`void pipeline59(std::array<wchar_t, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0046_std_array_wchar_t_10 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0046_std_array_wchar_t_10 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046_std_array_wchar_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_ARRAY_CHAR8_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_ARRAY_CHAR8_T_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::array<char8_t, 10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0047_std_array_char8_t_10', () => {
    try {
      const result = transTskey2Ckey('std::array<char8_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0047_std_array_char8_t_10 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0047_std_array_char8_t_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047_std_array_char8_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_ARRAY_CHAR8_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_ARRAY_CHAR8_T_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<char8_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0048_std_array_char8_t_10', () => {
    try {
      const r = parsec.parseFunction(`void sample60(std::array<char8_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0048_std_array_char8_t_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0048_std_array_char8_t_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048_std_array_char8_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<char8_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0049_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::array<char8_t, 10> sampleRet60();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0049_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0049_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_ARRAY_CHAR8_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_ARRAY_CHAR8_T_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<char8_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0050_std_array_char8_t_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass60 { public: std::array<char8_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0050_std_array_char8_t_10 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0050_std_array_char8_t_10 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050_std_array_char8_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_ARRAY_CHAR8_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_ARRAY_CHAR8_T_10
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<char8_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0051_std_array_char8_t_10', () => {
    try {
      const r = parsec.parseFunction(`void pipeline60(std::array<char8_t, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0051_std_array_char8_t_10 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0051_std_array_char8_t_10 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051_std_array_char8_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_ARRAY_CHAR16_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_ARRAY_CHAR16_T_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::array<char16_t, 10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0052_std_array_char16_t_10', () => {
    try {
      const result = transTskey2Ckey('std::array<char16_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0052_std_array_char16_t_10 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0052_std_array_char16_t_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052_std_array_char16_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_ARRAY_CHAR16_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_ARRAY_CHAR16_T_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<char16_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0053_std_array_char16_t_10', () => {
    try {
      const r = parsec.parseFunction(`void sample61(std::array<char16_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0053_std_array_char16_t_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0053_std_array_char16_t_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053_std_array_char16_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<char16_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0054_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::array<char16_t, 10> sampleRet61();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0054_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0054_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_ARRAY_CHAR16_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_ARRAY_CHAR16_T_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<char16_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0055_std_array_char16_t_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass61 { public: std::array<char16_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0055_std_array_char16_t_10 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0055_std_array_char16_t_10 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055_std_array_char16_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_DEQUE_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_DEQUE_WCHAR_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::deque<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0001_std_deque_wchar_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass80 { public: std::deque<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0001_std_deque_wchar_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0001_std_deque_wchar_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001_std_deque_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_DEQUE_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_DEQUE_WCHAR_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::deque<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0002_std_deque_wchar_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline80(std::deque<wchar_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0002_std_deque_wchar_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0002_std_deque_wchar_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002_std_deque_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_DEQUE_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_DEQUE_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::deque<char8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0003_std_deque_char8_t', () => {
    try {
      const result = transTskey2Ckey('std::deque<char8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0003_std_deque_char8_t convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0003_std_deque_char8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003_std_deque_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_DEQUE_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_DEQUE_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::deque<char8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0004_std_deque_char8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample81(std::deque<char8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0004_std_deque_char8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0004_std_deque_char8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004_std_deque_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::deque<char8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0005_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::deque<char8_t> sampleRet81();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0005_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_DEQUE_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_DEQUE_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::deque<char8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0006_std_deque_char8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass81 { public: std::deque<char8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0006_std_deque_char8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0006_std_deque_char8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006_std_deque_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_DEQUE_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_DEQUE_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::deque<char8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0007_std_deque_char8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline81(std::deque<char8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0007_std_deque_char8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0007_std_deque_char8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007_std_deque_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_DEQUE_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_DEQUE_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::deque<char16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0008_std_deque_char16_t', () => {
    try {
      const result = transTskey2Ckey('std::deque<char16_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0008_std_deque_char16_t convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0008_std_deque_char16_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008_std_deque_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_DEQUE_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_DEQUE_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::deque<char16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0009_std_deque_char16_t', () => {
    try {
      const r = parsec.parseFunction(`void sample82(std::deque<char16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0009_std_deque_char16_t param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0009_std_deque_char16_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009_std_deque_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::deque<char16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0010_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::deque<char16_t> sampleRet82();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0010_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_DEQUE_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_DEQUE_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::deque<char16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0011_std_deque_char16_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass82 { public: std::deque<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0011_std_deque_char16_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0011_std_deque_char16_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011_std_deque_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_DEQUE_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_DEQUE_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::deque<char16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0012_std_deque_char16_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline82(std::deque<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0012_std_deque_char16_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0012_std_deque_char16_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012_std_deque_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_DEQUE_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_DEQUE_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::deque<char32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0013_std_deque_char32_t', () => {
    try {
      const result = transTskey2Ckey('std::deque<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0013_std_deque_char32_t convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0013_std_deque_char32_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013_std_deque_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_DEQUE_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_DEQUE_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::deque<char32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0014_std_deque_char32_t', () => {
    try {
      const r = parsec.parseFunction(`void sample83(std::deque<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0014_std_deque_char32_t param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0014_std_deque_char32_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014_std_deque_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::deque<char32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0015_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::deque<char32_t> sampleRet83();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0015_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_DEQUE_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_DEQUE_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::deque<char32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0016_std_deque_char32_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass83 { public: std::deque<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0016_std_deque_char32_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0016_std_deque_char32_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016_std_deque_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_DEQUE_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_DEQUE_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::deque<char32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0017_std_deque_char32_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline83(std::deque<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0017_std_deque_char32_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0017_std_deque_char32_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017_std_deque_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_LIST_INT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::list<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0018_std_list_int', () => {
    try {
      const result = transTskey2Ckey('std::list<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0018_std_list_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0018_std_list_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018_std_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_LIST_INT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0019_std_list_int', () => {
    try {
      const r = parsec.parseFunction(`void sample84(std::list<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0019_std_list_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0019_std_list_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019_std_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0020_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::list<int> sampleRet84();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0020_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0020_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_LIST_INT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::list<int>; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0021_std_list_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass84 { public: std::list<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0021_std_list_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0021_std_list_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021_std_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_LIST_INT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::list<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0022_std_list_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline84(std::list<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0022_std_list_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0022_std_list_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022_std_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_LIST_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_LIST_SIZE_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::list<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0023_std_list_size_t', () => {
    try {
      const result = transTskey2Ckey('std::list<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0023_std_list_size_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0023_std_list_size_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023_std_list_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_LIST_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_LIST_SIZE_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0024_std_list_size_t', () => {
    try {
      const r = parsec.parseFunction(`void sample85(std::list<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0024_std_list_size_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0024_std_list_size_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024_std_list_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0025_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::list<size_t> sampleRet85();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0025_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0025_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_LIST_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_LIST_SIZE_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::list<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0026_std_list_size_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass85 { public: std::list<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0026_std_list_size_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0026_std_list_size_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026_std_list_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_LIST_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_LIST_SIZE_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::list<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0027_std_list_size_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline85(std::list<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0027_std_list_size_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0027_std_list_size_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027_std_list_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_LIST_DOUBLE
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::list<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0028_std_list_double', () => {
    try {
      const result = transTskey2Ckey('std::list<double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0028_std_list_double convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0028_std_list_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028_std_list_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_LIST_DOUBLE
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0029_std_list_double', () => {
    try {
      const r = parsec.parseFunction(`void sample86(std::list<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0029_std_list_double param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0029_std_list_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029_std_list_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0030_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::list<double> sampleRet86();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0030_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0030_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_LIST_DOUBLE
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::list<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0031_std_list_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass86 { public: std::list<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0031_std_list_double class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0031_std_list_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031_std_list_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_LIST_DOUBLE
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::list<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0032_std_list_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline86(std::list<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0032_std_list_double pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0032_std_list_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032_std_list_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_LIST_FLOAT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::list<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0033_std_list_float', () => {
    try {
      const result = transTskey2Ckey('std::list<float>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0033_std_list_float convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0033_std_list_float convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033_std_list_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_LIST_FLOAT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0034_std_list_float', () => {
    try {
      const r = parsec.parseFunction(`void sample87(std::list<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0034_std_list_float param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0034_std_list_float param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034_std_list_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0035_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::list<float> sampleRet87();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0035_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0035_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_LIST_FLOAT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::list<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0036_std_list_float', () => {
    try {
      const r = parsec.parseClass(`class SampleClass87 { public: std::list<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0036_std_list_float class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0036_std_list_float class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036_std_list_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_LIST_FLOAT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::list<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0037_std_list_float', () => {
    try {
      const r = parsec.parseFunction(`void pipeline87(std::list<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0037_std_list_float pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0037_std_list_float pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037_std_list_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_LIST_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_LIST_LONG
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::list<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0038_std_list_long', () => {
    try {
      const result = transTskey2Ckey('std::list<long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0038_std_list_long convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0038_std_list_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038_std_list_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_LIST_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_LIST_LONG
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0039_std_list_long', () => {
    try {
      const r = parsec.parseFunction(`void sample88(std::list<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0039_std_list_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0039_std_list_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039_std_list_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0040_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::list<long> sampleRet88();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0040_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0040_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_LIST_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_LIST_LONG
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::list<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0041_std_list_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass88 { public: std::list<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0041_std_list_long class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0041_std_list_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041_std_list_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_LIST_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_LIST_LONG
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::list<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0042_std_list_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline88(std::list<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0042_std_list_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0042_std_list_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042_std_list_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_LIST_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_LIST_SHORT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::list<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0043_std_list_short', () => {
    try {
      const result = transTskey2Ckey('std::list<short>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0043_std_list_short convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0043_std_list_short convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043_std_list_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_LIST_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_LIST_SHORT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0044_std_list_short', () => {
    try {
      const r = parsec.parseFunction(`void sample89(std::list<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0044_std_list_short param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0044_std_list_short param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044_std_list_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0045_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::list<short> sampleRet89();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0045_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_LIST_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_LIST_SHORT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::list<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0046_std_list_short', () => {
    try {
      const r = parsec.parseClass(`class SampleClass89 { public: std::list<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0046_std_list_short class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0046_std_list_short class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046_std_list_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_LIST_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_LIST_SHORT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::list<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0047_std_list_short', () => {
    try {
      const r = parsec.parseFunction(`void pipeline89(std::list<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0047_std_list_short pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0047_std_list_short pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047_std_list_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_LIST_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_LIST_UINT8_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::list<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0048_std_list_uint8_t', () => {
    try {
      const result = transTskey2Ckey('std::list<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0048_std_list_uint8_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0048_std_list_uint8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048_std_list_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_LIST_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_LIST_UINT8_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0049_std_list_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample90(std::list<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0049_std_list_uint8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0049_std_list_uint8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049_std_list_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0050_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::list<uint8_t> sampleRet90();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0050_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0050_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_LIST_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_LIST_UINT8_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::list<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0051_std_list_uint8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass90 { public: std::list<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0051_std_list_uint8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0051_std_list_uint8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051_std_list_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_LIST_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_LIST_UINT8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::list<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0052_std_list_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline90(std::list<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0052_std_list_uint8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0052_std_list_uint8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052_std_list_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_LIST_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_LIST_UINT16_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::list<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0053_std_list_uint16_t', () => {
    try {
      const result = transTskey2Ckey('std::list<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0053_std_list_uint16_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0053_std_list_uint16_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053_std_list_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_LIST_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_LIST_UINT16_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<uint16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0054_std_list_uint16_t', () => {
    try {
      const r = parsec.parseFunction(`void sample91(std::list<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0054_std_list_uint16_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0054_std_list_uint16_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054_std_list_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<uint16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0055_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::list<uint16_t> sampleRet91();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0055_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0055_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0001_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<short> sampleRet110();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0001_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0001_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_FORWARD_LIST_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_FORWARD_LIST_SHORT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0002_std_forward_list_short', () => {
    try {
      const r = parsec.parseClass(`class SampleClass110 { public: std::forward_list<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0002_std_forward_list_short class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0002_std_forward_list_short class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002_std_forward_list_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_FORWARD_LIST_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_FORWARD_LIST_SHORT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0003_std_forward_list_short', () => {
    try {
      const r = parsec.parseFunction(`void pipeline110(std::forward_list<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0003_std_forward_list_short pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0003_std_forward_list_short pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003_std_forward_list_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_FORWARD_LIST_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_FORWARD_LIST_UINT8_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0004_std_forward_list_uint8_t', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0004_std_forward_list_uint8_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0004_std_forward_list_uint8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004_std_forward_list_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_FORWARD_LIST_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_FORWARD_LIST_UINT8_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0005_std_forward_list_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample111(std::forward_list<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005_std_forward_list_uint8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0005_std_forward_list_uint8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005_std_forward_list_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0006_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<uint8_t> sampleRet111();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0006_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0006_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_FORWARD_LIST_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_FORWARD_LIST_UINT8_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0007_std_forward_list_uint8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass111 { public: std::forward_list<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0007_std_forward_list_uint8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0007_std_forward_list_uint8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007_std_forward_list_uint8_t execution error: ${String(err)}`);
    }
  });
});
