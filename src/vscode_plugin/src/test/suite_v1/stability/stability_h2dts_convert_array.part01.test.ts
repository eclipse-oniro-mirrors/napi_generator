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

suite('Stability_H2DTS_CONVERT_ARRAY_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_VECTOR_INT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::vector<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0001_std_vector_int', () => {
    try {
      const result = transTskey2Ckey('std::vector<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0001_std_vector_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0001_std_vector_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001_std_vector_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_VECTOR_INT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0002_std_vector_int', () => {
    try {
      const r = parsec.parseFunction(`void sample21(std::vector<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0002_std_vector_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0002_std_vector_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002_std_vector_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0003_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int> sampleRet21();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0003_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0003_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_VECTOR_INT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0004_std_vector_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass21 { public: std::vector<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0004_std_vector_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0004_std_vector_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004_std_vector_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_VECTOR_INT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::vector<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0005_std_vector_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline21(std::vector<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005_std_vector_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0005_std_vector_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005_std_vector_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_VECTOR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_VECTOR_SIZE_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0006_std_vector_size_t', () => {
    try {
      const result = transTskey2Ckey('std::vector<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0006_std_vector_size_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0006_std_vector_size_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006_std_vector_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_VECTOR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_VECTOR_SIZE_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0007_std_vector_size_t', () => {
    try {
      const r = parsec.parseFunction(`void sample22(std::vector<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0007_std_vector_size_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0007_std_vector_size_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007_std_vector_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0008_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<size_t> sampleRet22();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0008_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0008_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_VECTOR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_VECTOR_SIZE_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0009_std_vector_size_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass22 { public: std::vector<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0009_std_vector_size_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0009_std_vector_size_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009_std_vector_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_VECTOR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_VECTOR_SIZE_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::vector<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0010_std_vector_size_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline22(std::vector<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010_std_vector_size_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0010_std_vector_size_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010_std_vector_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_VECTOR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_VECTOR_DOUBLE
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0011_std_vector_double', () => {
    try {
      const result = transTskey2Ckey('std::vector<double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0011_std_vector_double convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0011_std_vector_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011_std_vector_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_VECTOR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_VECTOR_DOUBLE
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0012_std_vector_double', () => {
    try {
      const r = parsec.parseFunction(`void sample23(std::vector<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0012_std_vector_double param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0012_std_vector_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012_std_vector_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0013_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<double> sampleRet23();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0013_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0013_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_VECTOR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_VECTOR_DOUBLE
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0014_std_vector_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass23 { public: std::vector<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0014_std_vector_double class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0014_std_vector_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014_std_vector_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_VECTOR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_VECTOR_DOUBLE
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::vector<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0015_std_vector_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline23(std::vector<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015_std_vector_double pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0015_std_vector_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015_std_vector_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_VECTOR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_VECTOR_FLOAT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0016_std_vector_float', () => {
    try {
      const result = transTskey2Ckey('std::vector<float>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0016_std_vector_float convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0016_std_vector_float convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016_std_vector_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_VECTOR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_VECTOR_FLOAT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0017_std_vector_float', () => {
    try {
      const r = parsec.parseFunction(`void sample24(std::vector<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0017_std_vector_float param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0017_std_vector_float param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017_std_vector_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0018_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<float> sampleRet24();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0018_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0018_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_VECTOR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_VECTOR_FLOAT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0019_std_vector_float', () => {
    try {
      const r = parsec.parseClass(`class SampleClass24 { public: std::vector<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0019_std_vector_float class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0019_std_vector_float class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019_std_vector_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_VECTOR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_VECTOR_FLOAT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::vector<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0020_std_vector_float', () => {
    try {
      const r = parsec.parseFunction(`void pipeline24(std::vector<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0020_std_vector_float pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0020_std_vector_float pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020_std_vector_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_VECTOR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_VECTOR_LONG
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::vector<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0021_std_vector_long', () => {
    try {
      const result = transTskey2Ckey('std::vector<long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0021_std_vector_long convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0021_std_vector_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021_std_vector_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_VECTOR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_VECTOR_LONG
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0022_std_vector_long', () => {
    try {
      const r = parsec.parseFunction(`void sample25(std::vector<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0022_std_vector_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0022_std_vector_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022_std_vector_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0023_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<long> sampleRet25();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0023_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0023_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_VECTOR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_VECTOR_LONG
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0024_std_vector_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass25 { public: std::vector<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0024_std_vector_long class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0024_std_vector_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024_std_vector_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_VECTOR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_VECTOR_LONG
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::vector<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0025_std_vector_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline25(std::vector<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0025_std_vector_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0025_std_vector_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025_std_vector_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_VECTOR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_VECTOR_SHORT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0026_std_vector_short', () => {
    try {
      const result = transTskey2Ckey('std::vector<short>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0026_std_vector_short convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0026_std_vector_short convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026_std_vector_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_VECTOR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_VECTOR_SHORT
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0027_std_vector_short', () => {
    try {
      const r = parsec.parseFunction(`void sample26(std::vector<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0027_std_vector_short param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0027_std_vector_short param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027_std_vector_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0028_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<short> sampleRet26();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0028_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0028_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_VECTOR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_VECTOR_SHORT
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0029_std_vector_short', () => {
    try {
      const r = parsec.parseClass(`class SampleClass26 { public: std::vector<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0029_std_vector_short class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0029_std_vector_short class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029_std_vector_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_VECTOR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_VECTOR_SHORT
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::vector<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0030_std_vector_short', () => {
    try {
      const r = parsec.parseFunction(`void pipeline26(std::vector<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0030_std_vector_short pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0030_std_vector_short pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030_std_vector_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_VECTOR_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_VECTOR_UINT8_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0031_std_vector_uint8_t', () => {
    try {
      const result = transTskey2Ckey('std::vector<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0031_std_vector_uint8_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0031_std_vector_uint8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031_std_vector_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_VECTOR_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_VECTOR_UINT8_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0032_std_vector_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample27(std::vector<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0032_std_vector_uint8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0032_std_vector_uint8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032_std_vector_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0033_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<uint8_t> sampleRet27();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0033_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0033_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_VECTOR_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_VECTOR_UINT8_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0034_std_vector_uint8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass27 { public: std::vector<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0034_std_vector_uint8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0034_std_vector_uint8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034_std_vector_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_VECTOR_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_VECTOR_UINT8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::vector<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0035_std_vector_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline27(std::vector<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0035_std_vector_uint8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0035_std_vector_uint8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035_std_vector_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_VECTOR_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_VECTOR_UINT16_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0036_std_vector_uint16_t', () => {
    try {
      const result = transTskey2Ckey('std::vector<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0036_std_vector_uint16_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0036_std_vector_uint16_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036_std_vector_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_VECTOR_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_VECTOR_UINT16_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<uint16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0037_std_vector_uint16_t', () => {
    try {
      const r = parsec.parseFunction(`void sample28(std::vector<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0037_std_vector_uint16_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0037_std_vector_uint16_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037_std_vector_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<uint16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0038_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<uint16_t> sampleRet28();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0038_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0038_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_VECTOR_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_VECTOR_UINT16_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<uint16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0039_std_vector_uint16_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass28 { public: std::vector<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0039_std_vector_uint16_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0039_std_vector_uint16_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039_std_vector_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_VECTOR_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_VECTOR_UINT16_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::vector<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0040_std_vector_uint16_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline28(std::vector<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0040_std_vector_uint16_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0040_std_vector_uint16_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040_std_vector_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_VECTOR_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_VECTOR_UINT32_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0041_std_vector_uint32_t', () => {
    try {
      const result = transTskey2Ckey('std::vector<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0041_std_vector_uint32_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0041_std_vector_uint32_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041_std_vector_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_VECTOR_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_VECTOR_UINT32_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<uint32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0042_std_vector_uint32_t', () => {
    try {
      const r = parsec.parseFunction(`void sample29(std::vector<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0042_std_vector_uint32_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0042_std_vector_uint32_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042_std_vector_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<uint32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0043_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<uint32_t> sampleRet29();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0043_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0043_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_VECTOR_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_VECTOR_UINT32_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<uint32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0044_std_vector_uint32_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass29 { public: std::vector<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0044_std_vector_uint32_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0044_std_vector_uint32_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044_std_vector_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_VECTOR_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_VECTOR_UINT32_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::vector<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0045_std_vector_uint32_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline29(std::vector<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045_std_vector_uint32_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0045_std_vector_uint32_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045_std_vector_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_VECTOR_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_VECTOR_UINT64_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0046_std_vector_uint64_t', () => {
    try {
      const result = transTskey2Ckey('std::vector<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0046_std_vector_uint64_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0046_std_vector_uint64_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046_std_vector_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_VECTOR_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_VECTOR_UINT64_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<uint64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0047_std_vector_uint64_t', () => {
    try {
      const r = parsec.parseFunction(`void sample30(std::vector<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0047_std_vector_uint64_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0047_std_vector_uint64_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047_std_vector_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<uint64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0048_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<uint64_t> sampleRet30();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0048_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0048_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_VECTOR_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_VECTOR_UINT64_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<uint64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0049_std_vector_uint64_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass30 { public: std::vector<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0049_std_vector_uint64_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0049_std_vector_uint64_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049_std_vector_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_VECTOR_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_VECTOR_UINT64_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::vector<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0050_std_vector_uint64_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline30(std::vector<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0050_std_vector_uint64_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0050_std_vector_uint64_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050_std_vector_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_VECTOR_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_VECTOR_INT8_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0051_std_vector_int8_t', () => {
    try {
      const result = transTskey2Ckey('std::vector<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0051_std_vector_int8_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0051_std_vector_int8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051_std_vector_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_VECTOR_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_VECTOR_INT8_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::vector<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0052_std_vector_int8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample31(std::vector<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0052_std_vector_int8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0052_std_vector_int8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052_std_vector_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::vector<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0053_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int8_t> sampleRet31();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0053_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0053_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_VECTOR_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_VECTOR_INT8_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::vector<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0054_std_vector_int8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass31 { public: std::vector<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0054_std_vector_int8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0054_std_vector_int8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054_std_vector_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_VECTOR_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_VECTOR_INT8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::vector<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0055_std_vector_int8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline31(std::vector<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0055_std_vector_int8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0055_std_vector_int8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055_std_vector_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_ARRAY_UINT32_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_ARRAY_UINT32_T_10
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<uint32_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0001_std_array_uint32_t_10', () => {
    try {
      const r = parsec.parseFunction(`void pipeline50(std::array<uint32_t, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0001_std_array_uint32_t_10 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0001_std_array_uint32_t_10 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001_std_array_uint32_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_ARRAY_UINT64_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_ARRAY_UINT64_T_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::array<uint64_t, 10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0002_std_array_uint64_t_10', () => {
    try {
      const result = transTskey2Ckey('std::array<uint64_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0002_std_array_uint64_t_10 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0002_std_array_uint64_t_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002_std_array_uint64_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_ARRAY_UINT64_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_ARRAY_UINT64_T_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<uint64_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0003_std_array_uint64_t_10', () => {
    try {
      const r = parsec.parseFunction(`void sample51(std::array<uint64_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0003_std_array_uint64_t_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0003_std_array_uint64_t_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003_std_array_uint64_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<uint64_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0004_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::array<uint64_t, 10> sampleRet51();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0004_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0004_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_ARRAY_UINT64_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_ARRAY_UINT64_T_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<uint64_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0005_std_array_uint64_t_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass51 { public: std::array<uint64_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005_std_array_uint64_t_10 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0005_std_array_uint64_t_10 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005_std_array_uint64_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_ARRAY_UINT64_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_ARRAY_UINT64_T_10
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<uint64_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0006_std_array_uint64_t_10', () => {
    try {
      const r = parsec.parseFunction(`void pipeline51(std::array<uint64_t, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0006_std_array_uint64_t_10 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0006_std_array_uint64_t_10 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006_std_array_uint64_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_ARRAY_INT8_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_ARRAY_INT8_T_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::array<int8_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0007_std_array_int8_t_10', () => {
    try {
      const result = transTskey2Ckey('std::array<int8_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0007_std_array_int8_t_10 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0007_std_array_int8_t_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007_std_array_int8_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_ARRAY_INT8_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_ARRAY_INT8_T_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<int8_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0008_std_array_int8_t_10', () => {
    try {
      const r = parsec.parseFunction(`void sample52(std::array<int8_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0008_std_array_int8_t_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0008_std_array_int8_t_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008_std_array_int8_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<int8_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0009_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::array<int8_t, 10> sampleRet52();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0009_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0009_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_ARRAY_INT8_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_ARRAY_INT8_T_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<int8_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0010_std_array_int8_t_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass52 { public: std::array<int8_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010_std_array_int8_t_10 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0010_std_array_int8_t_10 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010_std_array_int8_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_ARRAY_INT8_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_ARRAY_INT8_T_10
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<int8_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0011_std_array_int8_t_10', () => {
    try {
      const r = parsec.parseFunction(`void pipeline52(std::array<int8_t, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0011_std_array_int8_t_10 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0011_std_array_int8_t_10 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011_std_array_int8_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_ARRAY_INT16_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_ARRAY_INT16_T_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::array<int16_t, 10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0012_std_array_int16_t_10', () => {
    try {
      const result = transTskey2Ckey('std::array<int16_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0012_std_array_int16_t_10 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0012_std_array_int16_t_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012_std_array_int16_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_ARRAY_INT16_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_ARRAY_INT16_T_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<int16_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0013_std_array_int16_t_10', () => {
    try {
      const r = parsec.parseFunction(`void sample53(std::array<int16_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0013_std_array_int16_t_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0013_std_array_int16_t_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013_std_array_int16_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<int16_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0014_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::array<int16_t, 10> sampleRet53();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0014_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0014_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_ARRAY_INT16_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_ARRAY_INT16_T_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<int16_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0015_std_array_int16_t_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass53 { public: std::array<int16_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015_std_array_int16_t_10 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0015_std_array_int16_t_10 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015_std_array_int16_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_ARRAY_INT16_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_ARRAY_INT16_T_10
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<int16_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0016_std_array_int16_t_10', () => {
    try {
      const r = parsec.parseFunction(`void pipeline53(std::array<int16_t, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0016_std_array_int16_t_10 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0016_std_array_int16_t_10 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016_std_array_int16_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_ARRAY_INT32_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_ARRAY_INT32_T_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::array<int32_t, 10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0017_std_array_int32_t_10', () => {
    try {
      const result = transTskey2Ckey('std::array<int32_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0017_std_array_int32_t_10 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0017_std_array_int32_t_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017_std_array_int32_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_ARRAY_INT32_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_ARRAY_INT32_T_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<int32_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0018_std_array_int32_t_10', () => {
    try {
      const r = parsec.parseFunction(`void sample54(std::array<int32_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0018_std_array_int32_t_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0018_std_array_int32_t_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018_std_array_int32_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<int32_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0019_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::array<int32_t, 10> sampleRet54();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0019_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0019_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_ARRAY_INT32_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_ARRAY_INT32_T_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<int32_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0020_std_array_int32_t_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass54 { public: std::array<int32_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0020_std_array_int32_t_10 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0020_std_array_int32_t_10 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020_std_array_int32_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_ARRAY_INT32_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_ARRAY_INT32_T_10
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<int32_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0021_std_array_int32_t_10', () => {
    try {
      const r = parsec.parseFunction(`void pipeline54(std::array<int32_t, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0021_std_array_int32_t_10 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0021_std_array_int32_t_10 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021_std_array_int32_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_ARRAY_INT64_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_ARRAY_INT64_T_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::array<int64_t, 10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0022_std_array_int64_t_10', () => {
    try {
      const result = transTskey2Ckey('std::array<int64_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0022_std_array_int64_t_10 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0022_std_array_int64_t_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022_std_array_int64_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_ARRAY_INT64_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_ARRAY_INT64_T_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<int64_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0023_std_array_int64_t_10', () => {
    try {
      const r = parsec.parseFunction(`void sample55(std::array<int64_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0023_std_array_int64_t_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0023_std_array_int64_t_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023_std_array_int64_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<int64_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0024_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::array<int64_t, 10> sampleRet55();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0024_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0024_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_ARRAY_INT64_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_ARRAY_INT64_T_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<int64_t, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0025_std_array_int64_t_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass55 { public: std::array<int64_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0025_std_array_int64_t_10 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0025_std_array_int64_t_10 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025_std_array_int64_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_ARRAY_INT64_T_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_ARRAY_INT64_T_10
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<int64_t,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0026_std_array_int64_t_10', () => {
    try {
      const r = parsec.parseFunction(`void pipeline55(std::array<int64_t, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0026_std_array_int64_t_10 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0026_std_array_int64_t_10 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026_std_array_int64_t_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_ARRAY_UNSIGNED_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_ARRAY_UNSIGNED_10
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::array<unsigned, 10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0027_std_array_unsigned_10', () => {
    try {
      const result = transTskey2Ckey('std::array<unsigned, 10>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0027_std_array_unsigned_10 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0027_std_array_unsigned_10 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027_std_array_unsigned_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_ARRAY_UNSIGNED_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_ARRAY_UNSIGNED_10
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::array<unsigned,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0028_std_array_unsigned_10', () => {
    try {
      const r = parsec.parseFunction(`void sample56(std::array<unsigned, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0028_std_array_unsigned_10 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0028_std_array_unsigned_10 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028_std_array_unsigned_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::array<unsigned,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0029_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::array<unsigned, 10> sampleRet56();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0029_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0029_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_ARRAY_UNSIGNED_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_ARRAY_UNSIGNED_10
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::array<unsigned, 10>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0030_std_array_unsigned_10', () => {
    try {
      const r = parsec.parseClass(`class SampleClass56 { public: std::array<unsigned, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0030_std_array_unsigned_10 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0030_std_array_unsigned_10 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030_std_array_unsigned_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_ARRAY_UNSIGNED_10
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_ARRAY_UNSIGNED_10
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::array<unsigned,
   *            10>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0031_std_array_unsigned_10', () => {
    try {
      const r = parsec.parseFunction(`void pipeline56(std::array<unsigned, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0031_std_array_unsigned_10 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0031_std_array_unsigned_10 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031_std_array_unsigned_10 execution error: ${String(err)}`);
    }
  });
});
