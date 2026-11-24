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

suite('Stability_H2DTS_CONVERT_BASIC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_BASIC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0001_UNSIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0001_UNSIGNED_CHAR
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type unsigned char;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0001_unsigned_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline628(unsigned char p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0001_unsigned_char pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0001_unsigned_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0001_unsigned_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0002_LONG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0002_LONG_DOUBLE
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type long double;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0002_long_double', () => {
    try {
      const result = transTskey2Ckey('long double');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_basic_0002_long_double convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0002_long_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0002_long_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0003_LONG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0003_LONG_DOUBLE
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type long double; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0003_long_double', () => {
    try {
      const r = parsec.parseFunction(`void sample629(long double p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0003_long_double param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0003_long_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0003_long_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0004_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0004_NUMBER
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type long double;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0004_number', () => {
    try {
      const r = parsec.parseFunction(`long double sampleRet629();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0004_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0004_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0004_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0005_LONG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0005_LONG_DOUBLE
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type long double; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0005_long_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass629 { public: long double field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0005_long_double class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0005_long_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0005_long_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0006_LONG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0006_LONG_DOUBLE
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type long double;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0006_long_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline629(long double p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0006_long_double pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0006_long_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0006_long_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0007_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0007_CHAR
   * @tc.desc   Stability convert h2dts/basic: baseline type-string convert; type char*; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0007_char', () => {
    try {
      const result = transTskey2Ckey('char*');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_basic_0007_char convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0007_char convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0007_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0008_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0008_CHAR
   * @tc.desc   Stability convert h2dts/basic: function-param convert; type char*; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0008_char', () => {
    try {
      const r = parsec.parseFunction(`void sample632(char* p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0008_char param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0008_char param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0008_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0009_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0009_STRING
   * @tc.desc   Stability convert h2dts/basic: function-return convert; type char*; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0009_string', () => {
    try {
      const r = parsec.parseFunction(`char* sampleRet632();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0009_string return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0009_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0009_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0010_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0010_CHAR
   * @tc.desc   Stability convert h2dts/basic: class-field convert; type char*; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0010_char', () => {
    try {
      const r = parsec.parseClass(`class SampleClass632 { public: char* field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0010_char class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0010_char class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0010_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_BASIC_0011_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_BASIC_0011_CHAR
   * @tc.desc   Stability convert h2dts/basic: parse-convert-gen pipeline; type char*; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_basic_0011_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline632(char* p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0011_char pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0011_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0011_char execution error: ${String(err)}`);
    }
  });
});
