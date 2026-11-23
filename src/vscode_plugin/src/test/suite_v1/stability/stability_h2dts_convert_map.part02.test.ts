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

suite('Stability_H2DTS_CONVERT_MAP_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_MAP_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0001_STD_UNORDERED_MAP_INT_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0001_STD_UNORDERED_MAP_INT_CHAR
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type
   *            std::unordered_map<int, char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0001_std_unordered_map_int_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline605(std::unordered_map<int, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0001_std_unordered_map_int_char pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>",
        "h2dts_convert_map_0001_std_unordered_map_int_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0001_std_unordered_map_int_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0002_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0002_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type
   *            std::unordered_map<size_t, char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0002_std_unordered_map_size_t_char', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<size_t, char>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_map_0002_std_unordered_map_size_t_char convert output non-empty");
      assert.strictEqual(result, "Map<number, string>",
        "h2dts_convert_map_0002_std_unordered_map_size_t_char convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0002_std_unordered_map_size_t_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0003_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0003_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::unordered_map<size_t,
   *            char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0003_std_unordered_map_size_t_char', () => {
    try {
      const r = parsec.parseFunction(`void sample606(std::unordered_map<size_t, char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0003_std_unordered_map_size_t_char param convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>",
        "h2dts_convert_map_0003_std_unordered_map_size_t_char param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0003_std_unordered_map_size_t_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0004_MAP_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0004_MAP_NUMBER_STRING
   * @tc.desc   Stability convert h2dts/map: function-return convert; type
   *            std::unordered_map<size_t, char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0004_map_number_string', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<size_t, char> sampleRet606();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0004_map_number_string return convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>",
        "h2dts_convert_map_0004_map_number_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0004_map_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0005_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0005_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::unordered_map<size_t,
   *            char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0005_std_unordered_map_size_t_char', () => {
    try {
      const r = parsec.parseClass(`class SampleClass606 { public: std::unordered_map<size_t, char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0005_std_unordered_map_size_t_char class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>",
        "h2dts_convert_map_0005_std_unordered_map_size_t_char class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0005_std_unordered_map_size_t_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0006_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0006_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type
   *            std::unordered_map<size_t, char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0006_std_unordered_map_size_t_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline606(std::unordered_map<size_t, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0006_std_unordered_map_size_t_char pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>",
        "h2dts_convert_map_0006_std_unordered_map_size_t_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0006_std_unordered_map_size_t_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0007_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0007_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type
   *            std::unordered_map<unsigned, char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0007_std_unordered_map_unsigned_char', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<unsigned, char>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_map_0007_std_unordered_map_unsigned_char convert output non-empty");
      assert.strictEqual(result, "Map<number, string>",
        "h2dts_convert_map_0007_std_unordered_map_unsigned_char convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0007_std_unordered_map_unsigned_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0008_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0008_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.desc   Stability convert h2dts/map: function-param convert; type
   *            std::unordered_map<unsigned, char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0008_std_unordered_map_unsigned_char', () => {
    try {
      const r = parsec.parseFunction(`void sample607(std::unordered_map<unsigned, char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0008_std_unordered_map_unsigned_char param convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>",
        "h2dts_convert_map_0008_std_unordered_map_unsigned_char param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0008_std_unordered_map_unsigned_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0009_MAP_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0009_MAP_NUMBER_STRING
   * @tc.desc   Stability convert h2dts/map: function-return convert; type
   *            std::unordered_map<unsigned, char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0009_map_number_string', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<unsigned, char> sampleRet607();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0009_map_number_string return convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>",
        "h2dts_convert_map_0009_map_number_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0009_map_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0010_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0010_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::unordered_map<unsigned,
   *            char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0010_std_unordered_map_unsigned_char', () => {
    try {
      const r = parsec.parseClass(`class SampleClass607 { public: std::unordered_map<unsigned, char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0010_std_unordered_map_unsigned_char class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>",
        "h2dts_convert_map_0010_std_unordered_map_unsigned_char class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0010_std_unordered_map_unsigned_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0011_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0011_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type
   *            std::unordered_map<unsigned, char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0011_std_unordered_map_unsigned_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline607(std::unordered_map<unsigned, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0011_std_unordered_map_unsigned_char pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>",
        "h2dts_convert_map_0011_std_unordered_map_unsigned_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0011_std_unordered_map_unsigned_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0012_STD_MULTIMAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0012_STD_MULTIMAP_INT_INT
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::multimap<int,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0012_std_multimap_int_int', () => {
    try {
      const result = transTskey2Ckey('std::multimap<int, int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_map_0012_std_multimap_int_int convert output non-empty");
      assert.strictEqual(result, "Map<number, number>", "h2dts_convert_map_0012_std_multimap_int_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0012_std_multimap_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0013_STD_MULTIMAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0013_STD_MULTIMAP_INT_INT
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::multimap<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0013_std_multimap_int_int', () => {
    try {
      const r = parsec.parseFunction(`void sample624(std::multimap<int, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0013_std_multimap_int_int param convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>",
        "h2dts_convert_map_0013_std_multimap_int_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0013_std_multimap_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0014_MAP_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0014_MAP_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::multimap<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0014_map_number_number', () => {
    try {
      const r = parsec.parseFunction(`std::multimap<int, int> sampleRet624();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0014_map_number_number return convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>",
        "h2dts_convert_map_0014_map_number_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0014_map_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0015_STD_MULTIMAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0015_STD_MULTIMAP_INT_INT
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::multimap<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0015_std_multimap_int_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass624 { public: std::multimap<int, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0015_std_multimap_int_int class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>",
        "h2dts_convert_map_0015_std_multimap_int_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0015_std_multimap_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0016_STD_MULTIMAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0016_STD_MULTIMAP_INT_INT
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::multimap<int,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0016_std_multimap_int_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline624(std::multimap<int, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0016_std_multimap_int_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>",
        "h2dts_convert_map_0016_std_multimap_int_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0016_std_multimap_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0017_STD_MULTIMAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0017_STD_MULTIMAP_CHAR_INT
   * @tc.desc   Stability convert h2dts/map: baseline type-string convert; type std::multimap<char,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0017_std_multimap_char_int', () => {
    try {
      const result = transTskey2Ckey('std::multimap<char, int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_map_0017_std_multimap_char_int convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0017_std_multimap_char_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0017_std_multimap_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0018_STD_MULTIMAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0018_STD_MULTIMAP_CHAR_INT
   * @tc.desc   Stability convert h2dts/map: function-param convert; type std::multimap<char, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0018_std_multimap_char_int', () => {
    try {
      const r = parsec.parseFunction(`void sample625(std::multimap<char, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0018_std_multimap_char_int param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0018_std_multimap_char_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0018_std_multimap_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0019_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0019_MAP_STRING_NUMBER
   * @tc.desc   Stability convert h2dts/map: function-return convert; type std::multimap<char, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0019_map_string_number', () => {
    try {
      const r = parsec.parseFunction(`std::multimap<char, int> sampleRet625();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0019_map_string_number return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0019_map_string_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0019_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0020_STD_MULTIMAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0020_STD_MULTIMAP_CHAR_INT
   * @tc.desc   Stability convert h2dts/map: class-field convert; type std::multimap<char, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0020_std_multimap_char_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass625 { public: std::multimap<char, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0020_std_multimap_char_int class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0020_std_multimap_char_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0020_std_multimap_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_MAP_0021_STD_MULTIMAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_MAP_0021_STD_MULTIMAP_CHAR_INT
   * @tc.desc   Stability convert h2dts/map: parse-convert-gen pipeline; type std::multimap<char,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_map_0021_std_multimap_char_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline625(std::multimap<char, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0021_std_multimap_char_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>",
        "h2dts_convert_map_0021_std_multimap_char_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0021_std_multimap_char_int execution error: ${String(err)}`);
    }
  });
});
