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

suite('Stability_H2DTS_CONVERT_ARRAY_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0044_std_priority_queue_int', () => {
    try {
      const r = parsec.parseFunction(`void sample518(std::priority_queue<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0044_std_priority_queue_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0044_std_priority_queue_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044_std_priority_queue_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0045_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<int> sampleRet518();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0045_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::priority_queue<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0046_std_priority_queue_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass518 { public: std::priority_queue<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0046_std_priority_queue_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0046_std_priority_queue_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046_std_priority_queue_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0047_std_priority_queue_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline518(std::priority_queue<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0047_std_priority_queue_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0047_std_priority_queue_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047_std_priority_queue_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_PRIORITY_QUEUE_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_PRIORITY_QUEUE_SIZE_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::priority_queue<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0048_std_priority_queue_size_t', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0048_std_priority_queue_size_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0048_std_priority_queue_size_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048_std_priority_queue_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_PRIORITY_QUEUE_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_PRIORITY_QUEUE_SIZE_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::priority_queue<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0049_std_priority_queue_size_t', () => {
    try {
      const r = parsec.parseFunction(`void sample519(std::priority_queue<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0049_std_priority_queue_size_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0049_std_priority_queue_size_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049_std_priority_queue_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::priority_queue<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0050_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<size_t> sampleRet519();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0050_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0050_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_PRIORITY_QUEUE_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_PRIORITY_QUEUE_SIZE_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type
   *            std::priority_queue<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0051_std_priority_queue_size_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass519 { public: std::priority_queue<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0051_std_priority_queue_size_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0051_std_priority_queue_size_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051_std_priority_queue_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_PRIORITY_QUEUE_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_PRIORITY_QUEUE_SIZE_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::priority_queue<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0052_std_priority_queue_size_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline519(std::priority_queue<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0052_std_priority_queue_size_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0052_std_priority_queue_size_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052_std_priority_queue_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_PRIORITY_QUEUE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_PRIORITY_QUEUE_DOUBLE
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::priority_queue<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0053_std_priority_queue_double', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0053_std_priority_queue_double convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0053_std_priority_queue_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053_std_priority_queue_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_PRIORITY_QUEUE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_PRIORITY_QUEUE_DOUBLE
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::priority_queue<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0054_std_priority_queue_double', () => {
    try {
      const r = parsec.parseFunction(`void sample520(std::priority_queue<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0054_std_priority_queue_double param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0054_std_priority_queue_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054_std_priority_queue_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::priority_queue<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0055_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<double> sampleRet520();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0055_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0055_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<int,4>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0001_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::array<int,4> sampleRet633();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0001_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0001_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_ARRAY_INT_4
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_ARRAY_INT_4
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<int,4>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0002_std_array_int_4', () => {
    try {
      const r = parsec.parseClass(`class SampleClass633 { public: std::array<int,4> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0002_std_array_int_4 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0002_std_array_int_4 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002_std_array_int_4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_ARRAY_INT_4
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_ARRAY_INT_4
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<int,4>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0003_std_array_int_4', () => {
    try {
      const r = parsec.parseFunction(`void pipeline633(std::array<int,4> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0003_std_array_int_4 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0003_std_array_int_4 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003_std_array_int_4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_ARRAY_DOUBLE_8
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_ARRAY_DOUBLE_8
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::array<double,8>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0004_std_array_double_8', () => {
    try {
      const result = transTskey2Ckey('std::array<double,8>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0004_std_array_double_8 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0004_std_array_double_8 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004_std_array_double_8 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_ARRAY_DOUBLE_8
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_ARRAY_DOUBLE_8
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<double,8>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0005_std_array_double_8', () => {
    try {
      const r = parsec.parseFunction(`void sample634(std::array<double,8> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005_std_array_double_8 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0005_std_array_double_8 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005_std_array_double_8 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<double,8>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0006_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::array<double,8> sampleRet634();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0006_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0006_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_ARRAY_DOUBLE_8
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_ARRAY_DOUBLE_8
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<double,8>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0007_std_array_double_8', () => {
    try {
      const r = parsec.parseClass(`class SampleClass634 { public: std::array<double,8> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0007_std_array_double_8 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0007_std_array_double_8 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007_std_array_double_8 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_ARRAY_DOUBLE_8
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_ARRAY_DOUBLE_8
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::array<double,8>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0008_std_array_double_8', () => {
    try {
      const r = parsec.parseFunction(`void pipeline634(std::array<double,8> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0008_std_array_double_8 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0008_std_array_double_8 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008_std_array_double_8 execution error: ${String(err)}`);
    }
  });
});
