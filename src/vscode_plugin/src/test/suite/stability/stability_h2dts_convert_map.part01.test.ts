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

suite('Stability_H2DTS_CONVERT_MAP_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_MAP_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0001_STD_MAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0001_STD_MAP_INT_INT
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0001_std_map_int_int', () => {
    try {
      const result = transTskey2Ckey('std::map<int, int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_map_0001_std_map_int_int convert output non-empty");
      assert.strictEqual(result, "Map<number, number>", "h2dts_convert_map_0001_std_map_int_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0001_std_map_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0002_STD_MAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0002_STD_MAP_INT_INT
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0002_std_map_int_int', () => {
    try {
      const r = parsec.parseFunction(`void sample560(std::map<int, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0002_std_map_int_int param convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>",
        "h2dts_convert_map_0002_std_map_int_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0002_std_map_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0003_MAP_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0003_MAP_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0003_map_number_number', () => {
    try {
      const r = parsec.parseFunction(`std::map<int, int> sampleRet560();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0003_map_number_number return convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>",
        "h2dts_convert_map_0003_map_number_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0003_map_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0004_STD_MAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0004_STD_MAP_INT_INT
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0004_std_map_int_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass560 { public: std::map<int, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0004_std_map_int_int class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>",
        "h2dts_convert_map_0004_std_map_int_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0004_std_map_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0005_STD_MAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0005_STD_MAP_INT_INT
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0005_std_map_int_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline560(std::map<int, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0005_std_map_int_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>",
        "h2dts_convert_map_0005_std_map_int_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0005_std_map_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0006_STD_MAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0006_STD_MAP_CHAR_INT
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<char, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0006_std_map_char_int', () => {
    try {
      const result = transTskey2Ckey('std::map<char, int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_map_0006_std_map_char_int convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0006_std_map_char_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0006_std_map_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0007_STD_MAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0007_STD_MAP_CHAR_INT
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<char, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0007_std_map_char_int', () => {
    try {
      const r = parsec.parseFunction(`void sample561(std::map<char, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0007_std_map_char_int param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0007_std_map_char_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0007_std_map_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0008_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0008_MAP_STRING_NUMBER
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<char, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0008_map_string_number', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, int> sampleRet561();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0008_map_string_number return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0008_map_string_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0008_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0009_STD_MAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0009_STD_MAP_CHAR_INT
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<char, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0009_std_map_char_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass561 { public: std::map<char, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0009_std_map_char_int class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0009_std_map_char_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0009_std_map_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0010_STD_MAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0010_STD_MAP_CHAR_INT
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<char, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0010_std_map_char_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline561(std::map<char, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0010_std_map_char_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0010_std_map_char_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0010_std_map_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0011_STD_MAP_CHAR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0011_STD_MAP_CHAR_SIZE_T
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<char,
   *            size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0011_std_map_char_size_t', () => {
    try {
      const result = transTskey2Ckey('std::map<char, size_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_map_0011_std_map_char_size_t convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0011_std_map_char_size_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0011_std_map_char_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0012_STD_MAP_CHAR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0012_STD_MAP_CHAR_SIZE_T
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<char, size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0012_std_map_char_size_t', () => {
    try {
      const r = parsec.parseFunction(`void sample562(std::map<char, size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0012_std_map_char_size_t param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0012_std_map_char_size_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0012_std_map_char_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0013_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0013_MAP_STRING_NUMBER
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<char, size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0013_map_string_number', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, size_t> sampleRet562();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0013_map_string_number return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0013_map_string_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0013_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0014_STD_MAP_CHAR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0014_STD_MAP_CHAR_SIZE_T
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<char, size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0014_std_map_char_size_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass562 { public: std::map<char, size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0014_std_map_char_size_t class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0014_std_map_char_size_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0014_std_map_char_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0015_STD_MAP_CHAR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0015_STD_MAP_CHAR_SIZE_T
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<char,
   *            size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0015_std_map_char_size_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline562(std::map<char, size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0015_std_map_char_size_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0015_std_map_char_size_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0015_std_map_char_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0016_STD_MAP_CHAR_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0016_STD_MAP_CHAR_UNSIGNED
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<char,
   *            unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0016_std_map_char_unsigned', () => {
    try {
      const result = transTskey2Ckey('std::map<char, unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_map_0016_std_map_char_unsigned convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0016_std_map_char_unsigned convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0016_std_map_char_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0017_STD_MAP_CHAR_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0017_STD_MAP_CHAR_UNSIGNED
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<char, unsigned>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0017_std_map_char_unsigned', () => {
    try {
      const r = parsec.parseFunction(`void sample563(std::map<char, unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0017_std_map_char_unsigned param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0017_std_map_char_unsigned param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0017_std_map_char_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0018_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0018_MAP_STRING_NUMBER
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<char, unsigned>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0018_map_string_number', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, unsigned> sampleRet563();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0018_map_string_number return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0018_map_string_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0018_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0019_STD_MAP_CHAR_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0019_STD_MAP_CHAR_UNSIGNED
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<char, unsigned>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0019_std_map_char_unsigned', () => {
    try {
      const r = parsec.parseClass(`class SampleClass563 { public: std::map<char, unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0019_std_map_char_unsigned class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0019_std_map_char_unsigned class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0019_std_map_char_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0020_STD_MAP_CHAR_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0020_STD_MAP_CHAR_UNSIGNED
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<char,
   *            unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0020_std_map_char_unsigned', () => {
    try {
      const r = parsec.parseFunction(`void pipeline563(std::map<char, unsigned> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0020_std_map_char_unsigned pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0020_std_map_char_unsigned pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0020_std_map_char_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0021_STD_MAP_CHAR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0021_STD_MAP_CHAR_DOUBLE
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<char,
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0021_std_map_char_double', () => {
    try {
      const result = transTskey2Ckey('std::map<char, double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_map_0021_std_map_char_double convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0021_std_map_char_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0021_std_map_char_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0022
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0022
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<char, double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0022', () => {
    try {
      const r = parsec.parseFunction(`void sample564(std::map<char, double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0022 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0022 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0022 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0023
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0023
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<char, double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0023', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, double> sampleRet564();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0023 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0023 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0023 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0024
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0024
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<char, double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0024', () => {
    try {
      const r = parsec.parseClass(`class SampleClass564 { public: std::map<char, double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0024 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0024 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0024 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0025
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0025
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<char,
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0025', () => {
    try {
      const r = parsec.parseFunction(`void pipeline564(std::map<char, double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0025 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0025 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0025 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0026
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0026
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<char,
   *            float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0026', () => {
    try {
      const result = transTskey2Ckey('std::map<char, float>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0026 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0026 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0026 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0027
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0027
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<char, float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0027', () => {
    try {
      const r = parsec.parseFunction(`void sample565(std::map<char, float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0027 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0027 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0027 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0028
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0028
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<char, float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0028', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, float> sampleRet565();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0028 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0028 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0028 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0029
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0029
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<char, float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0029', () => {
    try {
      const r = parsec.parseClass(`class SampleClass565 { public: std::map<char, float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0029 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0029 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0029 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0030
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0030
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<char, float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0030', () => {
    try {
      const r = parsec.parseFunction(`void pipeline565(std::map<char, float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0030 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0030 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0030 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0031
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0031
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<char16_t,
   *            int32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0031', () => {
    try {
      const result = transTskey2Ckey('std::map<char16_t, int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0031 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0031 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0031 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0032
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0032
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<char16_t,
   *            int32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0032', () => {
    try {
      const r = parsec.parseFunction(`void sample566(std::map<char16_t, int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0032 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0032 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0032 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0033
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0033
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<char16_t,
   *            int32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0033', () => {
    try {
      const r = parsec.parseFunction(`std::map<char16_t, int32_t> sampleRet566();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0033 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0033 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0033 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0034
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0034
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<char16_t, int32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0034', () => {
    try {
      const r = parsec.parseClass(`class SampleClass566 { public: std::map<char16_t, int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0034 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0034 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0034 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0035
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0035
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<char16_t,
   *            int32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0035', () => {
    try {
      const r = parsec.parseFunction(`void pipeline566(std::map<char16_t, int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0035 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0035 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0035 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0036
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0036
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<char32_t,
   *            size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0036', () => {
    try {
      const result = transTskey2Ckey('std::map<char32_t, size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0036 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0036 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0036 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0037
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0037
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<char32_t,
   *            size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0037', () => {
    try {
      const r = parsec.parseFunction(`void sample567(std::map<char32_t, size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0037 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0037 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0037 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0038
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0038
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<char32_t,
   *            size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0038', () => {
    try {
      const r = parsec.parseFunction(`std::map<char32_t, size_t> sampleRet567();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0038 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0038 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0038 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0039
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0039
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<char32_t, size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0039', () => {
    try {
      const r = parsec.parseClass(`class SampleClass567 { public: std::map<char32_t, size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0039 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0039 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0039 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0040
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0040
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<char32_t,
   *            size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0040', () => {
    try {
      const r = parsec.parseFunction(`void pipeline567(std::map<char32_t, size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0040 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0040 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0040 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0041
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0041
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<char8_t,
   *            uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0041', () => {
    try {
      const result = transTskey2Ckey('std::map<char8_t, uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0041 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0041 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0041 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0042
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0042
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<char8_t,
   *            uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0042', () => {
    try {
      const r = parsec.parseFunction(`void sample568(std::map<char8_t, uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0042 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0042 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0042 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0043
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0043
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<char8_t,
   *            uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0043', () => {
    try {
      const r = parsec.parseFunction(`std::map<char8_t, uint32_t> sampleRet568();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0043 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0043 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0043 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0044
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0044
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<char8_t, uint32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0044', () => {
    try {
      const r = parsec.parseClass(`class SampleClass568 { public: std::map<char8_t, uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0044 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0044 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0044 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0045
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0045
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<char8_t,
   *            uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0045', () => {
    try {
      const r = parsec.parseFunction(`void pipeline568(std::map<char8_t, uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0045 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0045 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0045 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0046
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0046
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<char32_t,
   *            int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0046', () => {
    try {
      const result = transTskey2Ckey('std::map<char32_t, int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0046 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0046 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0046 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0047
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0047
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<char32_t,
   *            int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0047', () => {
    try {
      const r = parsec.parseFunction(`void sample569(std::map<char32_t, int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0047 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0047 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0047 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0048
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0048
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<char32_t,
   *            int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0048', () => {
    try {
      const r = parsec.parseFunction(`std::map<char32_t, int8_t> sampleRet569();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0048 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0048 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0048 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0049
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0049
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<char32_t, int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0049', () => {
    try {
      const r = parsec.parseClass(`class SampleClass569 { public: std::map<char32_t, int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0049 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0049 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0049 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0050
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0050
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<char32_t,
   *            int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0050', () => {
    try {
      const r = parsec.parseFunction(`void pipeline569(std::map<char32_t, int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0050 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0050 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0050 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0051
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0051
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<wchar_t,
   *            uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0051', () => {
    try {
      const result = transTskey2Ckey('std::map<wchar_t, uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0051 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0051 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0051 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0052
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0052
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<wchar_t,
   *            uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0052', () => {
    try {
      const r = parsec.parseFunction(`void sample570(std::map<wchar_t, uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0052 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0052 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0052 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0053
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0053
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<wchar_t,
   *            uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0053', () => {
    try {
      const r = parsec.parseFunction(`std::map<wchar_t, uint16_t> sampleRet570();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0053 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0053 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0053 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0054
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0054
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<wchar_t, uint16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0054', () => {
    try {
      const r = parsec.parseClass(`class SampleClass570 { public: std::map<wchar_t, uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0054 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0054 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0054 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0055
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0055
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<wchar_t,
   *            uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0055', () => {
    try {
      const r = parsec.parseFunction(`void pipeline570(std::map<wchar_t, uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0055 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0055 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0055 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0056
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0056
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<int, bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0056', () => {
    try {
      const result = transTskey2Ckey('std::map<int, bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0056 convert output non-empty");
      assert.strictEqual(result, "Map<number, boolean>", "h2dts_convert_map_0056 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0056 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0057
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0057
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<int, bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0057', () => {
    try {
      const r = parsec.parseFunction(`void sample571(std::map<int, bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0057 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0057 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0057 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0058
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0058
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<int, bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0058', () => {
    try {
      const r = parsec.parseFunction(`std::map<int, bool> sampleRet571();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0058 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0058 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0058 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0059
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0059
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<int, bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0059', () => {
    try {
      const r = parsec.parseClass(`class SampleClass571 { public: std::map<int, bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0059 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0059 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0059 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0060
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0060
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<int, bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0060', () => {
    try {
      const r = parsec.parseFunction(`void pipeline571(std::map<int, bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0060 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0060 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0060 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0061
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0061
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<char,
   *            bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0061', () => {
    try {
      const result = transTskey2Ckey('std::map<char, bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0061 convert output non-empty");
      assert.strictEqual(result, "Map<string, boolean>", "h2dts_convert_map_0061 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0061 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0062
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0062
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<char, bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0062', () => {
    try {
      const r = parsec.parseFunction(`void sample572(std::map<char, bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0062 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0062 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0062 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0063
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0063
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<char, bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0063', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, bool> sampleRet572();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0063 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0063 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0063 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0064
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0064
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<char, bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0064', () => {
    try {
      const r = parsec.parseClass(`class SampleClass572 { public: std::map<char, bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0064 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0064 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0064 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0065
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0065
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<char, bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0065', () => {
    try {
      const r = parsec.parseFunction(`void pipeline572(std::map<char, bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0065 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0065 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0065 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0066
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0066
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<int, char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0066', () => {
    try {
      const result = transTskey2Ckey('std::map<int, char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0066 convert output non-empty");
      assert.strictEqual(result, "Map<number, string>", "h2dts_convert_map_0066 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0066 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0067
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0067
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<int, char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0067', () => {
    try {
      const r = parsec.parseFunction(`void sample573(std::map<int, char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0067 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0067 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0067 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0068
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0068
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<int, char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0068', () => {
    try {
      const r = parsec.parseFunction(`std::map<int, char> sampleRet573();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0068 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0068 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0068 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0069
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0069
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<int, char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0069', () => {
    try {
      const r = parsec.parseClass(`class SampleClass573 { public: std::map<int, char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0069 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0069 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0069 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0070
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0070
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<int, char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0070', () => {
    try {
      const r = parsec.parseFunction(`void pipeline573(std::map<int, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0070 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0070 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0070 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0071
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0071
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<size_t,
   *            char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0071', () => {
    try {
      const result = transTskey2Ckey('std::map<size_t, char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0071 convert output non-empty");
      assert.strictEqual(result, "Map<number, string>", "h2dts_convert_map_0071 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0071 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0072
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0072
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<size_t, char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0072', () => {
    try {
      const r = parsec.parseFunction(`void sample574(std::map<size_t, char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0072 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0072 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0072 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0073
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0073
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<size_t, char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0073', () => {
    try {
      const r = parsec.parseFunction(`std::map<size_t, char> sampleRet574();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0073 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0073 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0073 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0074
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0074
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<size_t, char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0074', () => {
    try {
      const r = parsec.parseClass(`class SampleClass574 { public: std::map<size_t, char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0074 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0074 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0074 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0075
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0075
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<size_t,
   *            char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0075', () => {
    try {
      const r = parsec.parseFunction(`void pipeline574(std::map<size_t, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0075 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0075 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0075 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0076
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0076
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::map<unsigned,
   *            char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0076', () => {
    try {
      const result = transTskey2Ckey('std::map<unsigned, char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0076 convert output non-empty");
      assert.strictEqual(result, "Map<number, string>", "h2dts_convert_map_0076 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0076 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0077
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0077
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::map<unsigned, char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0077', () => {
    try {
      const r = parsec.parseFunction(`void sample575(std::map<unsigned, char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0077 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0077 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0077 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0078
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0078
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::map<unsigned, char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0078', () => {
    try {
      const r = parsec.parseFunction(`std::map<unsigned, char> sampleRet575();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0078 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0078 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0078 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0079
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0079
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::map<unsigned, char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0079', () => {
    try {
      const r = parsec.parseClass(`class SampleClass575 { public: std::map<unsigned, char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0079 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0079 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0079 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0080
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0080
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::map<unsigned,
   *            char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0080', () => {
    try {
      const r = parsec.parseFunction(`void pipeline575(std::map<unsigned, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0080 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0080 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0080 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0081
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0081
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type
   *            std::unordered_map<int, int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0081', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<int, int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0081 convert output non-empty");
      assert.strictEqual(result, "Map<number, number>", "h2dts_convert_map_0081 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0081 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0082
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0082
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::unordered_map<int,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0082', () => {
    try {
      const r = parsec.parseFunction(`void sample592(std::unordered_map<int, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0082 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0082 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0082 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0083
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0083
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::unordered_map<int,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0083', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<int, int> sampleRet592();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0083 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0083 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0083 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0084
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0084
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::unordered_map<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0084', () => {
    try {
      const r = parsec.parseClass(`class SampleClass592 { public: std::unordered_map<int, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0084 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0084 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0084 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0085
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0085
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type
   *            std::unordered_map<int, int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0085', () => {
    try {
      const r = parsec.parseFunction(`void pipeline592(std::unordered_map<int, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0085 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0085 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0085 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0086
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0086
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type
   *            std::unordered_map<char, int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0086', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<char, int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0086 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0086 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0086 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0087
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0087
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::unordered_map<char,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0087', () => {
    try {
      const r = parsec.parseFunction(`void sample593(std::unordered_map<char, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0087 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0087 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0087 execution error: ${String(err)}`);
    }
  });
});
