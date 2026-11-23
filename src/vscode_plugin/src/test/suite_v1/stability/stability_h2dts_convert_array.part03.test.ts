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

suite('Stability_H2DTS_CONVERT_ARRAY_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_FORWARD_LIST_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_FORWARD_LIST_UINT8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0008_std_forward_list_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline111(std::forward_list<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0008_std_forward_list_uint8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0008_std_forward_list_uint8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008_std_forward_list_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_FORWARD_LIST_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_FORWARD_LIST_UINT16_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0009_std_forward_list_uint16_t', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0009_std_forward_list_uint16_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0009_std_forward_list_uint16_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009_std_forward_list_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_FORWARD_LIST_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_FORWARD_LIST_UINT16_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0010_std_forward_list_uint16_t', () => {
    try {
      const r = parsec.parseFunction(`void sample112(std::forward_list<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010_std_forward_list_uint16_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0010_std_forward_list_uint16_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010_std_forward_list_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0011_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<uint16_t> sampleRet112();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0011_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0011_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_FORWARD_LIST_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_FORWARD_LIST_UINT16_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type
   *            std::forward_list<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0012_std_forward_list_uint16_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass112 { public: std::forward_list<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0012_std_forward_list_uint16_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0012_std_forward_list_uint16_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012_std_forward_list_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_FORWARD_LIST_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_FORWARD_LIST_UINT16_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0013_std_forward_list_uint16_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline112(std::forward_list<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0013_std_forward_list_uint16_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0013_std_forward_list_uint16_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013_std_forward_list_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_FORWARD_LIST_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_FORWARD_LIST_UINT32_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0014_std_forward_list_uint32_t', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0014_std_forward_list_uint32_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0014_std_forward_list_uint32_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014_std_forward_list_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_FORWARD_LIST_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_FORWARD_LIST_UINT32_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0015_std_forward_list_uint32_t', () => {
    try {
      const r = parsec.parseFunction(`void sample113(std::forward_list<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015_std_forward_list_uint32_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0015_std_forward_list_uint32_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015_std_forward_list_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0016_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<uint32_t> sampleRet113();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0016_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0016_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_FORWARD_LIST_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_FORWARD_LIST_UINT32_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type
   *            std::forward_list<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0017_std_forward_list_uint32_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass113 { public: std::forward_list<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0017_std_forward_list_uint32_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0017_std_forward_list_uint32_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017_std_forward_list_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_FORWARD_LIST_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_FORWARD_LIST_UINT32_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0018_std_forward_list_uint32_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline113(std::forward_list<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0018_std_forward_list_uint32_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0018_std_forward_list_uint32_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018_std_forward_list_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_FORWARD_LIST_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_FORWARD_LIST_UINT64_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0019_std_forward_list_uint64_t', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0019_std_forward_list_uint64_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0019_std_forward_list_uint64_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019_std_forward_list_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_FORWARD_LIST_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_FORWARD_LIST_UINT64_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0020_std_forward_list_uint64_t', () => {
    try {
      const r = parsec.parseFunction(`void sample114(std::forward_list<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0020_std_forward_list_uint64_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0020_std_forward_list_uint64_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020_std_forward_list_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0021_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<uint64_t> sampleRet114();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0021_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0021_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_FORWARD_LIST_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_FORWARD_LIST_UINT64_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type
   *            std::forward_list<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0022_std_forward_list_uint64_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass114 { public: std::forward_list<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0022_std_forward_list_uint64_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0022_std_forward_list_uint64_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022_std_forward_list_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_FORWARD_LIST_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_FORWARD_LIST_UINT64_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0023_std_forward_list_uint64_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline114(std::forward_list<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0023_std_forward_list_uint64_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0023_std_forward_list_uint64_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023_std_forward_list_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_FORWARD_LIST_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_FORWARD_LIST_INT8_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0024_std_forward_list_int8_t', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0024_std_forward_list_int8_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0024_std_forward_list_int8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024_std_forward_list_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_FORWARD_LIST_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_FORWARD_LIST_INT8_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0025_std_forward_list_int8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample115(std::forward_list<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0025_std_forward_list_int8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0025_std_forward_list_int8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025_std_forward_list_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0026_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<int8_t> sampleRet115();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0026_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0026_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_FORWARD_LIST_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_FORWARD_LIST_INT8_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0027_std_forward_list_int8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass115 { public: std::forward_list<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0027_std_forward_list_int8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0027_std_forward_list_int8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027_std_forward_list_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_FORWARD_LIST_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_FORWARD_LIST_INT8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0028_std_forward_list_int8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline115(std::forward_list<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0028_std_forward_list_int8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0028_std_forward_list_int8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028_std_forward_list_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_FORWARD_LIST_INT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_FORWARD_LIST_INT16_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<int16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0029_std_forward_list_int16_t', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0029_std_forward_list_int16_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0029_std_forward_list_int16_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029_std_forward_list_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_FORWARD_LIST_INT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_FORWARD_LIST_INT16_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<int16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0030_std_forward_list_int16_t', () => {
    try {
      const r = parsec.parseFunction(`void sample116(std::forward_list<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0030_std_forward_list_int16_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0030_std_forward_list_int16_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030_std_forward_list_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<int16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0031_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<int16_t> sampleRet116();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0031_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0031_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_FORWARD_LIST_INT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_FORWARD_LIST_INT16_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<int16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0032_std_forward_list_int16_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass116 { public: std::forward_list<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0032_std_forward_list_int16_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0032_std_forward_list_int16_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032_std_forward_list_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_FORWARD_LIST_INT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_FORWARD_LIST_INT16_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<int16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0033_std_forward_list_int16_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline116(std::forward_list<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0033_std_forward_list_int16_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0033_std_forward_list_int16_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033_std_forward_list_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_FORWARD_LIST_INT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_FORWARD_LIST_INT32_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<int32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0034_std_forward_list_int32_t', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0034_std_forward_list_int32_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0034_std_forward_list_int32_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034_std_forward_list_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_FORWARD_LIST_INT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_FORWARD_LIST_INT32_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<int32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0035_std_forward_list_int32_t', () => {
    try {
      const r = parsec.parseFunction(`void sample117(std::forward_list<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0035_std_forward_list_int32_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0035_std_forward_list_int32_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035_std_forward_list_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<int32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0036_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<int32_t> sampleRet117();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0036_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0036_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_FORWARD_LIST_INT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_FORWARD_LIST_INT32_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<int32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0037_std_forward_list_int32_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass117 { public: std::forward_list<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0037_std_forward_list_int32_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0037_std_forward_list_int32_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037_std_forward_list_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_FORWARD_LIST_INT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_FORWARD_LIST_INT32_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<int32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0038_std_forward_list_int32_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline117(std::forward_list<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0038_std_forward_list_int32_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0038_std_forward_list_int32_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038_std_forward_list_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_FORWARD_LIST_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_FORWARD_LIST_INT64_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0039_std_forward_list_int64_t', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0039_std_forward_list_int64_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0039_std_forward_list_int64_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039_std_forward_list_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_FORWARD_LIST_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_FORWARD_LIST_INT64_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0040_std_forward_list_int64_t', () => {
    try {
      const r = parsec.parseFunction(`void sample118(std::forward_list<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0040_std_forward_list_int64_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0040_std_forward_list_int64_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040_std_forward_list_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0041_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<int64_t> sampleRet118();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0041_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0041_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_FORWARD_LIST_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_FORWARD_LIST_INT64_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0042_std_forward_list_int64_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass118 { public: std::forward_list<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0042_std_forward_list_int64_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0042_std_forward_list_int64_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042_std_forward_list_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_FORWARD_LIST_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_FORWARD_LIST_INT64_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0043_std_forward_list_int64_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline118(std::forward_list<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0043_std_forward_list_int64_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0043_std_forward_list_int64_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043_std_forward_list_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_FORWARD_LIST_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_STD_FORWARD_LIST_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0044_std_forward_list_unsigned', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0044_std_forward_list_unsigned convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0044_std_forward_list_unsigned convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044_std_forward_list_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_FORWARD_LIST_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_FORWARD_LIST_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::forward_list<unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0045_std_forward_list_unsigned', () => {
    try {
      const r = parsec.parseFunction(`void sample119(std::forward_list<unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045_std_forward_list_unsigned param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0045_std_forward_list_unsigned param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045_std_forward_list_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0046_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<unsigned> sampleRet119();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0046_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0046_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_FORWARD_LIST_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_FORWARD_LIST_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: class-field convert; type
   *            std::forward_list<unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0047_std_forward_list_unsigned', () => {
    try {
      const r = parsec.parseClass(`class SampleClass119 { public: std::forward_list<unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0047_std_forward_list_unsigned class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0047_std_forward_list_unsigned class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047_std_forward_list_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_FORWARD_LIST_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_FORWARD_LIST_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0048_std_forward_list_unsigned', () => {
    try {
      const r = parsec.parseFunction(`void pipeline119(std::forward_list<unsigned> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0048_std_forward_list_unsigned pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0048_std_forward_list_unsigned pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048_std_forward_list_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_FORWARD_LIST_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_STD_FORWARD_LIST_BOOL
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0049_std_forward_list_bool', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<bool>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0049_std_forward_list_bool convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_array_0049_std_forward_list_bool convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049_std_forward_list_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_FORWARD_LIST_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_FORWARD_LIST_BOOL
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::forward_list<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0050_std_forward_list_bool', () => {
    try {
      const r = parsec.parseFunction(`void sample120(std::forward_list<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0050_std_forward_list_bool param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0050_std_forward_list_bool param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050_std_forward_list_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_ARRAY_BOOLEAN
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::forward_list<bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0051_array_boolean', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<bool> sampleRet120();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0051_array_boolean return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0051_array_boolean return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_FORWARD_LIST_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_FORWARD_LIST_BOOL
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::forward_list<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0052_std_forward_list_bool', () => {
    try {
      const r = parsec.parseClass(`class SampleClass120 { public: std::forward_list<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0052_std_forward_list_bool class field convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0052_std_forward_list_bool class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052_std_forward_list_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_FORWARD_LIST_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_FORWARD_LIST_BOOL
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::forward_list<bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0053_std_forward_list_bool', () => {
    try {
      const r = parsec.parseFunction(`void pipeline120(std::forward_list<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0053_std_forward_list_bool pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0053_std_forward_list_bool pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053_std_forward_list_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_FORWARD_LIST_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_STD_FORWARD_LIST_CHAR
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::forward_list<char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0054_std_forward_list_char', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<char>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0054_std_forward_list_char convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0054_std_forward_list_char convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054_std_forward_list_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_FORWARD_LIST_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_FORWARD_LIST_CHAR
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::forward_list<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0055_std_forward_list_char', () => {
    try {
      const r = parsec.parseFunction(`void sample121(std::forward_list<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0055_std_forward_list_char param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0055_std_forward_list_char param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055_std_forward_list_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_VALARRAY_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_VALARRAY_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::valarray<unsigned>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0001_std_valarray_unsigned', () => {
    try {
      const r = parsec.parseFunction(`void sample140(std::valarray<unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0001_std_valarray_unsigned param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0001_std_valarray_unsigned param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001_std_valarray_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::valarray<unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0002_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<unsigned> sampleRet140();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0002_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0002_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_VALARRAY_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_VALARRAY_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::valarray<unsigned>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0003_std_valarray_unsigned', () => {
    try {
      const r = parsec.parseClass(`class SampleClass140 { public: std::valarray<unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0003_std_valarray_unsigned class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0003_std_valarray_unsigned class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003_std_valarray_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_VALARRAY_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_VALARRAY_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::valarray<unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0004_std_valarray_unsigned', () => {
    try {
      const r = parsec.parseFunction(`void pipeline140(std::valarray<unsigned> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0004_std_valarray_unsigned pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0004_std_valarray_unsigned pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004_std_valarray_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_VALARRAY_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_STD_VALARRAY_BOOL
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::valarray<bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0005_std_valarray_bool', () => {
    try {
      const result = transTskey2Ckey('std::valarray<bool>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0005_std_valarray_bool convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_array_0005_std_valarray_bool convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005_std_valarray_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_VALARRAY_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_VALARRAY_BOOL
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::valarray<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0006_std_valarray_bool', () => {
    try {
      const r = parsec.parseFunction(`void sample141(std::valarray<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0006_std_valarray_bool param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0006_std_valarray_bool param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006_std_valarray_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_ARRAY_BOOLEAN
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::valarray<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0007_array_boolean', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<bool> sampleRet141();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0007_array_boolean return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0007_array_boolean return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_VALARRAY_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_VALARRAY_BOOL
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::valarray<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0008_std_valarray_bool', () => {
    try {
      const r = parsec.parseClass(`class SampleClass141 { public: std::valarray<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0008_std_valarray_bool class field convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0008_std_valarray_bool class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008_std_valarray_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_VALARRAY_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_VALARRAY_BOOL
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::valarray<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0009_std_valarray_bool', () => {
    try {
      const r = parsec.parseFunction(`void pipeline141(std::valarray<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0009_std_valarray_bool pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0009_std_valarray_bool pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009_std_valarray_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_VALARRAY_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_STD_VALARRAY_CHAR
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::valarray<char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0010_std_valarray_char', () => {
    try {
      const result = transTskey2Ckey('std::valarray<char>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0010_std_valarray_char convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0010_std_valarray_char convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010_std_valarray_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_VALARRAY_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_VALARRAY_CHAR
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::valarray<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0011_std_valarray_char', () => {
    try {
      const r = parsec.parseFunction(`void sample142(std::valarray<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0011_std_valarray_char param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0011_std_valarray_char param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011_std_valarray_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::valarray<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0012_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<char> sampleRet142();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0012_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0012_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_VALARRAY_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_VALARRAY_CHAR
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::valarray<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0013_std_valarray_char', () => {
    try {
      const r = parsec.parseClass(`class SampleClass142 { public: std::valarray<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0013_std_valarray_char class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0013_std_valarray_char class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013_std_valarray_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_VALARRAY_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_VALARRAY_CHAR
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::valarray<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0014_std_valarray_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline142(std::valarray<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0014_std_valarray_char pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0014_std_valarray_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014_std_valarray_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_VALARRAY_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_VALARRAY_WCHAR_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::valarray<wchar_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0015_std_valarray_wchar_t', () => {
    try {
      const result = transTskey2Ckey('std::valarray<wchar_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0015_std_valarray_wchar_t convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0015_std_valarray_wchar_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015_std_valarray_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_VALARRAY_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_VALARRAY_WCHAR_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::valarray<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0016_std_valarray_wchar_t', () => {
    try {
      const r = parsec.parseFunction(`void sample143(std::valarray<wchar_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0016_std_valarray_wchar_t param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0016_std_valarray_wchar_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016_std_valarray_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::valarray<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0017_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<wchar_t> sampleRet143();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0017_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0017_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_VALARRAY_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_VALARRAY_WCHAR_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::valarray<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0018_std_valarray_wchar_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass143 { public: std::valarray<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0018_std_valarray_wchar_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0018_std_valarray_wchar_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018_std_valarray_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_VALARRAY_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_VALARRAY_WCHAR_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::valarray<wchar_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0019_std_valarray_wchar_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline143(std::valarray<wchar_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0019_std_valarray_wchar_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0019_std_valarray_wchar_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019_std_valarray_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_VALARRAY_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_VALARRAY_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::valarray<char8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0020_std_valarray_char8_t', () => {
    try {
      const result = transTskey2Ckey('std::valarray<char8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0020_std_valarray_char8_t convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0020_std_valarray_char8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020_std_valarray_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_VALARRAY_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_VALARRAY_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::valarray<char8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0021_std_valarray_char8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample144(std::valarray<char8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0021_std_valarray_char8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0021_std_valarray_char8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021_std_valarray_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::valarray<char8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0022_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<char8_t> sampleRet144();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0022_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0022_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_VALARRAY_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_VALARRAY_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::valarray<char8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0023_std_valarray_char8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass144 { public: std::valarray<char8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0023_std_valarray_char8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0023_std_valarray_char8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023_std_valarray_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_VALARRAY_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_VALARRAY_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::valarray<char8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0024_std_valarray_char8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline144(std::valarray<char8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0024_std_valarray_char8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0024_std_valarray_char8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024_std_valarray_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_VALARRAY_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_VALARRAY_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::valarray<char16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0025_std_valarray_char16_t', () => {
    try {
      const result = transTskey2Ckey('std::valarray<char16_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0025_std_valarray_char16_t convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0025_std_valarray_char16_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025_std_valarray_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_VALARRAY_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_VALARRAY_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::valarray<char16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0026_std_valarray_char16_t', () => {
    try {
      const r = parsec.parseFunction(`void sample145(std::valarray<char16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0026_std_valarray_char16_t param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0026_std_valarray_char16_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026_std_valarray_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::valarray<char16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0027_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<char16_t> sampleRet145();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0027_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0027_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_VALARRAY_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_VALARRAY_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::valarray<char16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0028_std_valarray_char16_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass145 { public: std::valarray<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0028_std_valarray_char16_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0028_std_valarray_char16_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028_std_valarray_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_VALARRAY_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_VALARRAY_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::valarray<char16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0029_std_valarray_char16_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline145(std::valarray<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0029_std_valarray_char16_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0029_std_valarray_char16_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029_std_valarray_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_VALARRAY_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_VALARRAY_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::valarray<char32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0030_std_valarray_char32_t', () => {
    try {
      const result = transTskey2Ckey('std::valarray<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0030_std_valarray_char32_t convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0030_std_valarray_char32_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030_std_valarray_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_VALARRAY_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_VALARRAY_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::valarray<char32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0031_std_valarray_char32_t', () => {
    try {
      const r = parsec.parseFunction(`void sample146(std::valarray<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0031_std_valarray_char32_t param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0031_std_valarray_char32_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031_std_valarray_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::valarray<char32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0032_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<char32_t> sampleRet146();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0032_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0032_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_VALARRAY_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_VALARRAY_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::valarray<char32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0033_std_valarray_char32_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass146 { public: std::valarray<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0033_std_valarray_char32_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0033_std_valarray_char32_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033_std_valarray_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_VALARRAY_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_VALARRAY_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::valarray<char32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0034_std_valarray_char32_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline146(std::valarray<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0034_std_valarray_char32_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0034_std_valarray_char32_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034_std_valarray_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_VECTOR_STD_STRING
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::vector<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0035_std_vector_std_string', () => {
    try {
      const result = transTskey2Ckey('std::vector<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0035_std_vector_std_string convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0035_std_vector_std_string convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035_std_vector_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_VECTOR_STD_STRING
   * @tc.desc   Stability convert h2dts/array: function-param convert; type
   *            std::vector<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0036_std_vector_std_string', () => {
    try {
      const r = parsec.parseFunction(`void sample219(std::vector<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0036_std_vector_std_string param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0036_std_vector_std_string param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036_std_vector_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type
   *            std::vector<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0037_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::vector<std::string> sampleRet219();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0037_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0037_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037_array_string execution error: ${String(err)}`);
    }
  });
});
