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

suite('Stability_H2DTS_CONVERT_ARRAY_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_VECTOR_STD_STRING
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<std::string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0038_std_vector_std_string', () => {
    try {
      const r = parsec.parseClass(`class SampleClass219 { public: std::vector<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0038_std_vector_std_string class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0038_std_vector_std_string class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038_std_vector_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_VECTOR_STD_STRING
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::vector<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0039_std_vector_std_string', () => {
    try {
      const r = parsec.parseFunction(`void pipeline219(std::vector<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0039_std_vector_std_string pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0039_std_vector_std_string pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039_std_vector_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_VECTOR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_VECTOR_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::vector<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0040_std_vector_long_long', () => {
    try {
      const result = transTskey2Ckey('std::vector<long long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0040_std_vector_long_long convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0040_std_vector_long_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040_std_vector_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_VECTOR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_VECTOR_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<long long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0041_std_vector_long_long', () => {
    try {
      const r = parsec.parseFunction(`void sample225(std::vector<long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0041_std_vector_long_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0041_std_vector_long_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041_std_vector_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<long long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0042_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<long long> sampleRet225();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0042_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0042_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_VECTOR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_VECTOR_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<long long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0043_std_vector_long_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass225 { public: std::vector<long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0043_std_vector_long_long class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_array_0043_std_vector_long_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043_std_vector_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_VECTOR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_VECTOR_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::vector<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0044_std_vector_long_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline225(std::vector<long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0044_std_vector_long_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0044_std_vector_long_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044_std_vector_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_VECTOR_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_VECTOR_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<unsigned short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0045_std_vector_unsigned_short', () => {
    try {
      const result = transTskey2Ckey('std::vector<unsigned short>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0045_std_vector_unsigned_short convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0045_std_vector_unsigned_short convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045_std_vector_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_VECTOR_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_VECTOR_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0046_std_vector_unsigned_short', () => {
    try {
      const r = parsec.parseFunction(`void sample226(std::vector<unsigned short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0046_std_vector_unsigned_short param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0046_std_vector_unsigned_short param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046_std_vector_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0047_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<unsigned short> sampleRet226();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0047_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0047_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_VECTOR_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_VECTOR_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0048_std_vector_unsigned_short', () => {
    try {
      const r = parsec.parseClass(`class SampleClass226 { public: std::vector<unsigned short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0048_std_vector_unsigned_short class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_array_0048_std_vector_unsigned_short class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048_std_vector_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_VECTOR_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_VECTOR_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::vector<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0049_std_vector_unsigned_short', () => {
    try {
      const r = parsec.parseFunction(`void pipeline226(std::vector<unsigned short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0049_std_vector_unsigned_short pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0049_std_vector_unsigned_short pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049_std_vector_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_VECTOR_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_VECTOR_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<unsigned long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0050_std_vector_unsigned_long', () => {
    try {
      const result = transTskey2Ckey('std::vector<unsigned long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0050_std_vector_unsigned_long convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0050_std_vector_unsigned_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050_std_vector_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_VECTOR_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_VECTOR_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<unsigned
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0051_std_vector_unsigned_long', () => {
    try {
      const r = parsec.parseFunction(`void sample227(std::vector<unsigned long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0051_std_vector_unsigned_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0051_std_vector_unsigned_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051_std_vector_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<unsigned
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0052_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<unsigned long> sampleRet227();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0052_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0052_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_VECTOR_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_VECTOR_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<unsigned long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0053_std_vector_unsigned_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass227 { public: std::vector<unsigned long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0053_std_vector_unsigned_long class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_array_0053_std_vector_unsigned_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053_std_vector_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_VECTOR_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_VECTOR_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::vector<unsigned
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0054_std_vector_unsigned_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline227(std::vector<unsigned long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0054_std_vector_unsigned_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0054_std_vector_unsigned_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054_std_vector_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_VECTOR_UNSIGNED_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_VECTOR_UNSIGNED_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<unsigned long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0055_std_vector_unsigned_long_long', () => {
    try {
      const result = transTskey2Ckey('std::vector<unsigned long long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0055_std_vector_unsigned_long_long convert output non-empty");
      assert.strictEqual(result, "Array<number>",
        "h2dts_convert_array_0055_std_vector_unsigned_long_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055_std_vector_unsigned_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_LIST_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_LIST_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::list<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0001_std_list_unsigned_short', () => {
    try {
      const result = transTskey2Ckey('std::list<unsigned short>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0001_std_list_unsigned_short convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0001_std_list_unsigned_short convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001_std_list_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_LIST_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_LIST_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0002_std_list_unsigned_short', () => {
    try {
      const r = parsec.parseFunction(`void sample248(std::list<unsigned short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0002_std_list_unsigned_short param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0002_std_list_unsigned_short param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002_std_list_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0003_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::list<unsigned short> sampleRet248();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0003_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0003_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_LIST_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_LIST_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::list<unsigned short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0004_std_list_unsigned_short', () => {
    try {
      const r = parsec.parseClass(`class SampleClass248 { public: std::list<unsigned short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0004_std_list_unsigned_short class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_array_0004_std_list_unsigned_short class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004_std_list_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_LIST_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_LIST_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::list<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0005_std_list_unsigned_short', () => {
    try {
      const r = parsec.parseFunction(`void pipeline248(std::list<unsigned short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005_std_list_unsigned_short pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0005_std_list_unsigned_short pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005_std_list_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_LIST_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_LIST_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::list<unsigned
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0006_std_list_unsigned_long', () => {
    try {
      const result = transTskey2Ckey('std::list<unsigned long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0006_std_list_unsigned_long convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0006_std_list_unsigned_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006_std_list_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_LIST_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_LIST_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<unsigned
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0007_std_list_unsigned_long', () => {
    try {
      const r = parsec.parseFunction(`void sample249(std::list<unsigned long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0007_std_list_unsigned_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0007_std_list_unsigned_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007_std_list_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<unsigned
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0008_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::list<unsigned long> sampleRet249();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0008_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0008_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_LIST_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_LIST_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::list<unsigned long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0009_std_list_unsigned_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass249 { public: std::list<unsigned long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0009_std_list_unsigned_long class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_array_0009_std_list_unsigned_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009_std_list_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_LIST_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_LIST_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::list<unsigned
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0010_std_list_unsigned_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline249(std::list<unsigned long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010_std_list_unsigned_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0010_std_list_unsigned_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010_std_list_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_LIST_UNSIGNED_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_LIST_UNSIGNED_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::list<unsigned
   *            long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0011_std_list_unsigned_long_long', () => {
    try {
      const result = transTskey2Ckey('std::list<unsigned long long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0011_std_list_unsigned_long_long convert output non-empty");
      assert.strictEqual(result, "Array<number>",
        "h2dts_convert_array_0011_std_list_unsigned_long_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011_std_list_unsigned_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_LIST_UNSIGNED_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_LIST_UNSIGNED_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<unsigned long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0012_std_list_unsigned_long_long', () => {
    try {
      const r = parsec.parseFunction(`void sample250(std::list<unsigned long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0012_std_list_unsigned_long_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0012_std_list_unsigned_long_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012_std_list_unsigned_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<unsigned long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0013_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::list<unsigned long long> sampleRet250();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0013_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0013_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_LIST_UNSIGNED_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_LIST_UNSIGNED_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::list<unsigned long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0014_std_list_unsigned_long_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass250 { public: std::list<unsigned long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0014_std_list_unsigned_long_long class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_array_0014_std_list_unsigned_long_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014_std_list_unsigned_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_LIST_UNSIGNED_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_LIST_UNSIGNED_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::list<unsigned
   *            long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0015_std_list_unsigned_long_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline250(std::list<unsigned long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015_std_list_unsigned_long_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0015_std_list_unsigned_long_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015_std_list_unsigned_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_LIST_INT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::list<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0016_std_list_int', () => {
    try {
      const result = transTskey2Ckey('std::list<int *>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0016_std_list_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0016_std_list_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016_std_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_LIST_INT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::list<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0017_std_list_int', () => {
    try {
      const r = parsec.parseFunction(`void sample251(std::list<int *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0017_std_list_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0017_std_list_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017_std_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::list<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0018_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::list<int *> sampleRet251();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0018_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0018_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_LIST_INT_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_LIST_INT_V2
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::list<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0019_std_list_int_v2', () => {
    try {
      const r = parsec.parseClass(`class SampleClass251 { public: std::list<int *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0019_std_list_int_v2 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0019_std_list_int_v2 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019_std_list_int_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_LIST_INT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::list<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0020_std_list_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline251(std::list<int *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0020_std_list_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0020_std_list_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020_std_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_FORWARD_LIST_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_FORWARD_LIST_STD_STRING
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0021_std_forward_list_std_string', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0021_std_forward_list_std_string convert output non-empty");
      assert.strictEqual(result, "Array<string>",
        "h2dts_convert_array_0021_std_forward_list_std_string convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021_std_forward_list_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_FORWARD_LIST_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_FORWARD_LIST_STD_STRING
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0022_std_forward_list_std_string', () => {
    try {
      const r = parsec.parseFunction(`void sample252(std::forward_list<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0022_std_forward_list_std_string param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0022_std_forward_list_std_string param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022_std_forward_list_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0023_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<std::string> sampleRet252();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0023_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0023_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_FORWARD_LIST_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_FORWARD_LIST_STD_STRING
   * @tc.desc   Stability convert h2dts/array: class-field convert; type
   *            std::forward_list<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0024_std_forward_list_std_string', () => {
    try {
      const r = parsec.parseClass(`class SampleClass252 { public: std::forward_list<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0024_std_forward_list_std_string class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0024_std_forward_list_std_string class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024_std_forward_list_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_FORWARD_LIST_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_FORWARD_LIST_STD_STRING
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0025_std_forward_list_std_string', () => {
    try {
      const r = parsec.parseFunction(`void pipeline252(std::forward_list<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0025_std_forward_list_std_string pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0025_std_forward_list_std_string pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025_std_forward_list_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_FORWARD_LIST_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_FORWARD_LIST_CHAR
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<char *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0026_std_forward_list_char', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<char *>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0026_std_forward_list_char convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0026_std_forward_list_char convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026_std_forward_list_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_FORWARD_LIST_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_FORWARD_LIST_CHAR
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::forward_list<char
   *            *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0027_std_forward_list_char', () => {
    try {
      const r = parsec.parseFunction(`void sample253(std::forward_list<char *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0027_std_forward_list_char param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0027_std_forward_list_char param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027_std_forward_list_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::forward_list<char
   *            *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0028_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<char *> sampleRet253();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0028_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0028_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_FORWARD_LIST_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_FORWARD_LIST_CHAR
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<char *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0029_std_forward_list_char', () => {
    try {
      const r = parsec.parseClass(`class SampleClass253 { public: std::forward_list<char *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0029_std_forward_list_char class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0029_std_forward_list_char class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029_std_forward_list_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_FORWARD_LIST_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_FORWARD_LIST_CHAR
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<char *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0030_std_forward_list_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline253(std::forward_list<char *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0030_std_forward_list_char pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0030_std_forward_list_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030_std_forward_list_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_FORWARD_LIST_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_FORWARD_LIST_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0031_std_forward_list_long_long', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<long long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0031_std_forward_list_long_long convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0031_std_forward_list_long_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031_std_forward_list_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_FORWARD_LIST_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_FORWARD_LIST_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::forward_list<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0032_std_forward_list_long_long', () => {
    try {
      const r = parsec.parseFunction(`void sample254(std::forward_list<long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0032_std_forward_list_long_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0032_std_forward_list_long_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032_std_forward_list_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::forward_list<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0033_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<long long> sampleRet254();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0033_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0033_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_FORWARD_LIST_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_FORWARD_LIST_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0034_std_forward_list_long_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass254 { public: std::forward_list<long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0034_std_forward_list_long_long class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_array_0034_std_forward_list_long_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034_std_forward_list_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_FORWARD_LIST_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_FORWARD_LIST_LONG_LONG
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0035_std_forward_list_long_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline254(std::forward_list<long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0035_std_forward_list_long_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0035_std_forward_list_long_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035_std_forward_list_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_FORWARD_LIST_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_FORWARD_LIST_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<unsigned short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0036_std_forward_list_unsigned_short', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<unsigned short>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0036_std_forward_list_unsigned_short convert output non-empty");
      assert.strictEqual(result, "Array<number>",
        "h2dts_convert_array_0036_std_forward_list_unsigned_short convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036_std_forward_list_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_FORWARD_LIST_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_FORWARD_LIST_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<unsigned short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0037_std_forward_list_unsigned_short', () => {
    try {
      const r = parsec.parseFunction(`void sample255(std::forward_list<unsigned short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0037_std_forward_list_unsigned_short param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0037_std_forward_list_unsigned_short param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037_std_forward_list_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<unsigned short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0038_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<unsigned short> sampleRet255();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0038_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0038_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_FORWARD_LIST_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_FORWARD_LIST_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0039_std_forward_list_unsigned_short', () => {
    try {
      const r = parsec.parseClass(`class SampleClass255 { public: std::forward_list<unsigned short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0039_std_forward_list_unsigned_short class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_array_0039_std_forward_list_unsigned_short class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039_std_forward_list_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_FORWARD_LIST_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_FORWARD_LIST_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<unsigned short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0040_std_forward_list_unsigned_short', () => {
    try {
      const r = parsec.parseFunction(`void pipeline255(std::forward_list<unsigned short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0040_std_forward_list_unsigned_short pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0040_std_forward_list_unsigned_short pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040_std_forward_list_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_FORWARD_LIST_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_FORWARD_LIST_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<unsigned long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0041_std_forward_list_unsigned_long', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<unsigned long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0041_std_forward_list_unsigned_long convert output non-empty");
      assert.strictEqual(result, "Array<number>",
        "h2dts_convert_array_0041_std_forward_list_unsigned_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041_std_forward_list_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_FORWARD_LIST_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_FORWARD_LIST_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<unsigned long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0042_std_forward_list_unsigned_long', () => {
    try {
      const r = parsec.parseFunction(`void sample256(std::forward_list<unsigned long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0042_std_forward_list_unsigned_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0042_std_forward_list_unsigned_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042_std_forward_list_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<unsigned long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0043_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<unsigned long> sampleRet256();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0043_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0043_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_FORWARD_LIST_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_FORWARD_LIST_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<unsigned
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0044_std_forward_list_unsigned_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass256 { public: std::forward_list<unsigned long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0044_std_forward_list_unsigned_long class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_array_0044_std_forward_list_unsigned_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044_std_forward_list_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_FORWARD_LIST_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_FORWARD_LIST_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<unsigned long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0045_std_forward_list_unsigned_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline256(std::forward_list<unsigned long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045_std_forward_list_unsigned_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0045_std_forward_list_unsigned_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045_std_forward_list_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_FORWARD_LIST_UNSIGNED_7B5888
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_FORWARD_LIST_UNSIGNED_7B5888
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<unsigned long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0046_std_forward_list_unsigned_7b5888', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<unsigned long long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0046_std_forward_list_unsigned_7b5888 convert output non-empty");
      assert.strictEqual(result, "Array<number>",
        "h2dts_convert_array_0046_std_forward_list_unsigned_7b5888 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046_std_forward_list_unsigned_7b5888 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_FORWARD_LIST_UNSIGNED_7B5888
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_FORWARD_LIST_UNSIGNED_7B5888
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<unsigned long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0047_std_forward_list_unsigned_7b5888', () => {
    try {
      const r = parsec.parseFunction(`void sample257(std::forward_list<unsigned long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0047_std_forward_list_unsigned_7b5888 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0047_std_forward_list_unsigned_7b5888 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047_std_forward_list_unsigned_7b5888 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<unsigned long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0048_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<unsigned long long> sampleRet257();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0048_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0048_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_FORWARD_LIST_UNSIGNED_7B5888
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_FORWARD_LIST_UNSIGNED_7B5888
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<unsigned
   *            long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0049_std_forward_list_unsigned_7b5888', () => {
    try {
      const r = parsec.parseClass(`class SampleClass257 { public: std::forward_list<unsigned long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0049_std_forward_list_unsigned_7b5888 class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_array_0049_std_forward_list_unsigned_7b5888 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049_std_forward_list_unsigned_7b5888 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_FORWARD_LIST_UNSIGNED_7B5888
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_FORWARD_LIST_UNSIGNED_7B5888
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<unsigned long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0050_std_forward_list_unsigned_7b5888', () => {
    try {
      const r = parsec.parseFunction(`void pipeline257(std::forward_list<unsigned long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0050_std_forward_list_unsigned_7b5888 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0050_std_forward_list_unsigned_7b5888 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050_std_forward_list_unsigned_7b5888 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_FORWARD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_FORWARD_LIST_INT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<int *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0051_std_forward_list_int', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<int *>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0051_std_forward_list_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0051_std_forward_list_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051_std_forward_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_FORWARD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_FORWARD_LIST_INT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::forward_list<int
   *            *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0052_std_forward_list_int', () => {
    try {
      const r = parsec.parseFunction(`void sample258(std::forward_list<int *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0052_std_forward_list_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0052_std_forward_list_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052_std_forward_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::forward_list<int
   *            *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0053_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<int *> sampleRet258();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0053_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0053_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_FORWARD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_FORWARD_LIST_INT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0054_std_forward_list_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass258 { public: std::forward_list<int *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0054_std_forward_list_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0054_std_forward_list_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054_std_forward_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_FORWARD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_FORWARD_LIST_INT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<int *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0055_std_forward_list_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline258(std::forward_list<int *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0055_std_forward_list_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0055_std_forward_list_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055_std_forward_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_STACK_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_STACK_FLOAT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::stack<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0001_std_stack_float', () => {
    try {
      const r = parsec.parseFunction(`void pipeline416(std::stack<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0001_std_stack_float pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0001_std_stack_float pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001_std_stack_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_STACK_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_STACK_LONG
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::stack<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0002_std_stack_long', () => {
    try {
      const result = transTskey2Ckey('std::stack<long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0002_std_stack_long convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0002_std_stack_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002_std_stack_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_STACK_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_STACK_LONG
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0003_std_stack_long', () => {
    try {
      const r = parsec.parseFunction(`void sample417(std::stack<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0003_std_stack_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0003_std_stack_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003_std_stack_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0004_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::stack<long> sampleRet417();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0004_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0004_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_STACK_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_STACK_LONG
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0005_std_stack_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass417 { public: std::stack<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005_std_stack_long class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0005_std_stack_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005_std_stack_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_STACK_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_STACK_LONG
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::stack<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0006_std_stack_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline417(std::stack<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0006_std_stack_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0006_std_stack_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006_std_stack_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_STACK_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_STACK_SHORT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::stack<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0007_std_stack_short', () => {
    try {
      const result = transTskey2Ckey('std::stack<short>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0007_std_stack_short convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0007_std_stack_short convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007_std_stack_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_STACK_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_STACK_SHORT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0008_std_stack_short', () => {
    try {
      const r = parsec.parseFunction(`void sample418(std::stack<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0008_std_stack_short param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0008_std_stack_short param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008_std_stack_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0009_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::stack<short> sampleRet418();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0009_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0009_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_STACK_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_STACK_SHORT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0010_std_stack_short', () => {
    try {
      const r = parsec.parseClass(`class SampleClass418 { public: std::stack<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010_std_stack_short class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0010_std_stack_short class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010_std_stack_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_STACK_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_STACK_SHORT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::stack<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0011_std_stack_short', () => {
    try {
      const r = parsec.parseFunction(`void pipeline418(std::stack<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0011_std_stack_short pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0011_std_stack_short pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011_std_stack_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_STACK_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_STACK_UINT8_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::stack<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0012_std_stack_uint8_t', () => {
    try {
      const result = transTskey2Ckey('std::stack<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0012_std_stack_uint8_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0012_std_stack_uint8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012_std_stack_uint8_t execution error: ${String(err)}`);
    }
  });
});
