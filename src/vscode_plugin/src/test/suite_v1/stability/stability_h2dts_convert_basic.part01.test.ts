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

suite('Stability_H2DTS_CONVERT_BASIC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_BASIC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0001_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0001_INT
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type int; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0001_int', () => {
    try {
      const result = transTskey2Ckey('int');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_basic_0001_int convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0001_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0001_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0002_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0002_INT
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type int; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0002_int', () => {
    try {
      const r = parsec.parseFunction(`void sample1(int p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0002_int param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0002_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0002_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0003_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0003_NUMBER
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type int; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0003_number', () => {
    try {
      const r = parsec.parseFunction(`int sampleRet1();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0003_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0003_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0003_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0004_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0004_INT
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type int; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0004_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass1 { public: int field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0004_int class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0004_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0004_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0005_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0005_INT
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type int; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0005_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline1(int p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0005_int pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0005_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0005_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0006_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0006_SIZE_T
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type size_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0006_size_t', () => {
    try {
      const result = transTskey2Ckey('size_t');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_basic_0006_size_t convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0006_size_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0006_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0007_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0007_SIZE_T
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type size_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0007_size_t', () => {
    try {
      const r = parsec.parseFunction(`void sample2(size_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0007_size_t param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0007_size_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0007_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0008_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0008_NUMBER
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type size_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0008_number', () => {
    try {
      const r = parsec.parseFunction(`size_t sampleRet2();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0008_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0008_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0008_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0009_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0009_SIZE_T
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type size_t; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0009_size_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass2 { public: size_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0009_size_t class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0009_size_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0009_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0010_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0010_SIZE_T
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type size_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0010_size_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline2(size_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0010_size_t pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0010_size_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0010_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0011_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0011_DOUBLE
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type double;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0011_double', () => {
    try {
      const result = transTskey2Ckey('double');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_basic_0011_double convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0011_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0011_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0012
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0012
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type double; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0012', () => {
    try {
      const r = parsec.parseFunction(`void sample3(double p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0012 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0012 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0012 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0013
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0013
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type double; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0013', () => {
    try {
      const r = parsec.parseFunction(`double sampleRet3();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0013 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0013 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0013 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0014
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0014
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type double; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0014', () => {
    try {
      const r = parsec.parseClass(`class SampleClass3 { public: double field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0014 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0014 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0014 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0015
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0015
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type double; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0015', () => {
    try {
      const r = parsec.parseFunction(`void pipeline3(double p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0015 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0015 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0015 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0016
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0016
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type float; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0016', () => {
    try {
      const result = transTskey2Ckey('float');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0016 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0016 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0016 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0017
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0017
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type float; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0017', () => {
    try {
      const r = parsec.parseFunction(`void sample4(float p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0017 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0017 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0017 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0018
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0018
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type float; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0018', () => {
    try {
      const r = parsec.parseFunction(`float sampleRet4();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0018 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0018 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0018 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0019
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0019
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type float; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0019', () => {
    try {
      const r = parsec.parseClass(`class SampleClass4 { public: float field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0019 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0019 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0019 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0020
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0020
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type float; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0020', () => {
    try {
      const r = parsec.parseFunction(`void pipeline4(float p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0020 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0020 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0020 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0021
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0021
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type short; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0021', () => {
    try {
      const result = transTskey2Ckey('short');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0021 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0021 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0021 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0022
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0022
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type short; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0022', () => {
    try {
      const r = parsec.parseFunction(`void sample5(short p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0022 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0022 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0022 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0023
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0023
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type short; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0023', () => {
    try {
      const r = parsec.parseFunction(`short sampleRet5();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0023 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0023 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0023 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0024
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0024
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type short; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0024', () => {
    try {
      const r = parsec.parseClass(`class SampleClass5 { public: short field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0024 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0024 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0024 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0025
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0025
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type short; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0025', () => {
    try {
      const r = parsec.parseFunction(`void pipeline5(short p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0025 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0025 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0025 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0026
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0026
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type long; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0026', () => {
    try {
      const result = transTskey2Ckey('long');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0026 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0026 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0026 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0027
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0027
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type long; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0027', () => {
    try {
      const r = parsec.parseFunction(`void sample6(long p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0027 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0027 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0027 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0028
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0028
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type long; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0028', () => {
    try {
      const r = parsec.parseFunction(`long sampleRet6();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0028 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0028 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0028 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0029
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0029
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type long; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0029', () => {
    try {
      const r = parsec.parseClass(`class SampleClass6 { public: long field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0029 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0029 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0029 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0030
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0030
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type long; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0030', () => {
    try {
      const r = parsec.parseFunction(`void pipeline6(long p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0030 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0030 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0030 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0031
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0031
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type uint8_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0031', () => {
    try {
      const result = transTskey2Ckey('uint8_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0031 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0031 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0031 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0032
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0032
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type uint8_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0032', () => {
    try {
      const r = parsec.parseFunction(`void sample7(uint8_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0032 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0032 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0032 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0033
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0033
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type uint8_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0033', () => {
    try {
      const r = parsec.parseFunction(`uint8_t sampleRet7();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0033 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0033 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0033 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0034
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0034
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type uint8_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0034', () => {
    try {
      const r = parsec.parseClass(`class SampleClass7 { public: uint8_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0034 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0034 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0034 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0035
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0035
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type uint8_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0035', () => {
    try {
      const r = parsec.parseFunction(`void pipeline7(uint8_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0035 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0035 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0035 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0036
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0036
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type uint16_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0036', () => {
    try {
      const result = transTskey2Ckey('uint16_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0036 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0036 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0036 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0037
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0037
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type uint16_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0037', () => {
    try {
      const r = parsec.parseFunction(`void sample8(uint16_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0037 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0037 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0037 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0038
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0038
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type uint16_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0038', () => {
    try {
      const r = parsec.parseFunction(`uint16_t sampleRet8();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0038 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0038 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0038 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0039
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0039
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type uint16_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0039', () => {
    try {
      const r = parsec.parseClass(`class SampleClass8 { public: uint16_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0039 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0039 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0039 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0040
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0040
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type uint16_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0040', () => {
    try {
      const r = parsec.parseFunction(`void pipeline8(uint16_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0040 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0040 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0040 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0041
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0041
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type uint32_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0041', () => {
    try {
      const result = transTskey2Ckey('uint32_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0041 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0041 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0041 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0042
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0042
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type uint32_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0042', () => {
    try {
      const r = parsec.parseFunction(`void sample9(uint32_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0042 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0042 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0042 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0043
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0043
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type uint32_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0043', () => {
    try {
      const r = parsec.parseFunction(`uint32_t sampleRet9();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0043 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0043 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0043 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0044
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0044
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type uint32_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0044', () => {
    try {
      const r = parsec.parseClass(`class SampleClass9 { public: uint32_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0044 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0044 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0044 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0045
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0045
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type uint32_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0045', () => {
    try {
      const r = parsec.parseFunction(`void pipeline9(uint32_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0045 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0045 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0045 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0046
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0046
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type uint64_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0046', () => {
    try {
      const result = transTskey2Ckey('uint64_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0046 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0046 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0046 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0047
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0047
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type uint64_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0047', () => {
    try {
      const r = parsec.parseFunction(`void sample10(uint64_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0047 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0047 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0047 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0048
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0048
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type uint64_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0048', () => {
    try {
      const r = parsec.parseFunction(`uint64_t sampleRet10();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0048 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0048 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0048 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0049
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0049
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type uint64_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0049', () => {
    try {
      const r = parsec.parseClass(`class SampleClass10 { public: uint64_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0049 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0049 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0049 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0050
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0050
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type uint64_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0050', () => {
    try {
      const r = parsec.parseFunction(`void pipeline10(uint64_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0050 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0050 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0050 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0051
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0051
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type int8_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0051', () => {
    try {
      const result = transTskey2Ckey('int8_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0051 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0051 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0051 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0052
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0052
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type int8_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0052', () => {
    try {
      const r = parsec.parseFunction(`void sample11(int8_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0052 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0052 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0052 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0053
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0053
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type int8_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0053', () => {
    try {
      const r = parsec.parseFunction(`int8_t sampleRet11();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0053 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0053 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0053 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0054
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0054
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type int8_t; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0054', () => {
    try {
      const r = parsec.parseClass(`class SampleClass11 { public: int8_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0054 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0054 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0054 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0055
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0055
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type int8_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0055', () => {
    try {
      const r = parsec.parseFunction(`void pipeline11(int8_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0055 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0055 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0055 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0056
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0056
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type int16_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0056', () => {
    try {
      const result = transTskey2Ckey('int16_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0056 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0056 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0056 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0057
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0057
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type int16_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0057', () => {
    try {
      const r = parsec.parseFunction(`void sample12(int16_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0057 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0057 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0057 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0058
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0058
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type int16_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0058', () => {
    try {
      const r = parsec.parseFunction(`int16_t sampleRet12();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0058 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0058 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0058 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0059
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0059
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type int16_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0059', () => {
    try {
      const r = parsec.parseClass(`class SampleClass12 { public: int16_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0059 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0059 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0059 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0060
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0060
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type int16_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0060', () => {
    try {
      const r = parsec.parseFunction(`void pipeline12(int16_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0060 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0060 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0060 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0061
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0061
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type int32_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0061', () => {
    try {
      const result = transTskey2Ckey('int32_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0061 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0061 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0061 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0062
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0062
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type int32_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0062', () => {
    try {
      const r = parsec.parseFunction(`void sample13(int32_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0062 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0062 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0062 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0063
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0063
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type int32_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0063', () => {
    try {
      const r = parsec.parseFunction(`int32_t sampleRet13();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0063 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0063 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0063 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0064
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0064
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type int32_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0064', () => {
    try {
      const r = parsec.parseClass(`class SampleClass13 { public: int32_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0064 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0064 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0064 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0065
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0065
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type int32_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0065', () => {
    try {
      const r = parsec.parseFunction(`void pipeline13(int32_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0065 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0065 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0065 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0066
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0066
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type int64_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0066', () => {
    try {
      const result = transTskey2Ckey('int64_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0066 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0066 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0066 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0067
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0067
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type int64_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0067', () => {
    try {
      const r = parsec.parseFunction(`void sample14(int64_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0067 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0067 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0067 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0068
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0068
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type int64_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0068', () => {
    try {
      const r = parsec.parseFunction(`int64_t sampleRet14();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0068 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0068 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0068 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0069
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0069
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type int64_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0069', () => {
    try {
      const r = parsec.parseClass(`class SampleClass14 { public: int64_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0069 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0069 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0069 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0070
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0070
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type int64_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0070', () => {
    try {
      const r = parsec.parseFunction(`void pipeline14(int64_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0070 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0070 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0070 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0071
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0071
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type bool; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0071', () => {
    try {
      const result = transTskey2Ckey('bool');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0071 convert output non-empty");
      assert.strictEqual(result, "boolean", "h2dts_convert_basic_0071 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0071 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0072
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0072
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type bool; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0072', () => {
    try {
      const r = parsec.parseFunction(`void sample15(bool p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0072 param convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_basic_0072 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0072 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0073
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0073
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type bool; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0073', () => {
    try {
      const r = parsec.parseFunction(`bool sampleRet15();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0073 return convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_basic_0073 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0073 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0074
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0074
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type bool; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0074', () => {
    try {
      const r = parsec.parseClass(`class SampleClass15 { public: bool field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0074 class field convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_basic_0074 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0074 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0075
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0075
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type bool; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0075', () => {
    try {
      const r = parsec.parseFunction(`void pipeline15(bool p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0075 pipeline convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_basic_0075 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0075 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0076
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0076
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type char; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0076', () => {
    try {
      const result = transTskey2Ckey('char');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0076 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0076 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0076 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0077
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0077
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type char; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0077', () => {
    try {
      const r = parsec.parseFunction(`void sample16(char p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0077 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0077 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0077 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0078
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0078
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type char; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0078', () => {
    try {
      const r = parsec.parseFunction(`char sampleRet16();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0078 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0078 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0078 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0079
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0079
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type char; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0079', () => {
    try {
      const r = parsec.parseClass(`class SampleClass16 { public: char field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0079 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0079 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0079 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0080
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0080
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type char; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0080', () => {
    try {
      const r = parsec.parseFunction(`void pipeline16(char p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0080 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0080 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0080 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0081
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0081
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type char8_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0081', () => {
    try {
      const result = transTskey2Ckey('char8_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0081 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0081 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0081 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0082
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0082
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type char8_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0082', () => {
    try {
      const r = parsec.parseFunction(`void sample18(char8_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0082 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0082 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0082 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0083
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0083
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type char8_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0083', () => {
    try {
      const r = parsec.parseFunction(`char8_t sampleRet18();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0083 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0083 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0083 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0084
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0084
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type char8_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0084', () => {
    try {
      const r = parsec.parseClass(`class SampleClass18 { public: char8_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0084 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0084 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0084 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0085
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0085
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type char8_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0085', () => {
    try {
      const r = parsec.parseFunction(`void pipeline18(char8_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0085 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0085 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0085 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0086
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0086
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type char16_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0086', () => {
    try {
      const result = transTskey2Ckey('char16_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0086 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0086 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0086 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0087
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0087
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type char16_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0087', () => {
    try {
      const r = parsec.parseFunction(`void sample19(char16_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0087 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0087 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0087 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0088
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0088
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type char16_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0088', () => {
    try {
      const r = parsec.parseFunction(`char16_t sampleRet19();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0088 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0088 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0088 execution error: ${String(err)}`);
    }
  });
});
