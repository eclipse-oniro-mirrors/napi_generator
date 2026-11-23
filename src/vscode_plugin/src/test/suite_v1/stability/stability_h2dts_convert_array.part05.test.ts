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

suite('Stability_H2DTS_CONVERT_ARRAY_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_STACK_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_STACK_UINT8_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0013_std_stack_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample419(std::stack<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0013_std_stack_uint8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0013_std_stack_uint8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013_std_stack_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0014_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::stack<uint8_t> sampleRet419();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0014_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0014_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_STACK_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_STD_STACK_UINT8_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0015_std_stack_uint8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass419 { public: std::stack<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015_std_stack_uint8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0015_std_stack_uint8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015_std_stack_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_STACK_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_STACK_UINT8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::stack<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0016_std_stack_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline419(std::stack<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0016_std_stack_uint8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0016_std_stack_uint8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016_std_stack_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_STACK_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_STACK_UINT16_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::stack<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0017_std_stack_uint16_t', () => {
    try {
      const result = transTskey2Ckey('std::stack<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0017_std_stack_uint16_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0017_std_stack_uint16_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017_std_stack_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_STACK_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_STACK_UINT16_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<uint16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0018_std_stack_uint16_t', () => {
    try {
      const r = parsec.parseFunction(`void sample420(std::stack<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0018_std_stack_uint16_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0018_std_stack_uint16_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018_std_stack_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<uint16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0019_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::stack<uint16_t> sampleRet420();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0019_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0019_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_STACK_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_STD_STACK_UINT16_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<uint16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0020_std_stack_uint16_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass420 { public: std::stack<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0020_std_stack_uint16_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0020_std_stack_uint16_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020_std_stack_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_STACK_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_STACK_UINT16_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::stack<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0021_std_stack_uint16_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline420(std::stack<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0021_std_stack_uint16_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0021_std_stack_uint16_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021_std_stack_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_STACK_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_STACK_UINT32_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::stack<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0022_std_stack_uint32_t', () => {
    try {
      const result = transTskey2Ckey('std::stack<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0022_std_stack_uint32_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0022_std_stack_uint32_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022_std_stack_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_STACK_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_STACK_UINT32_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<uint32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0023_std_stack_uint32_t', () => {
    try {
      const r = parsec.parseFunction(`void sample421(std::stack<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0023_std_stack_uint32_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0023_std_stack_uint32_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023_std_stack_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<uint32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0024_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::stack<uint32_t> sampleRet421();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0024_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0024_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_STACK_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_STD_STACK_UINT32_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<uint32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0025_std_stack_uint32_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass421 { public: std::stack<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0025_std_stack_uint32_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0025_std_stack_uint32_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025_std_stack_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_STACK_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_STACK_UINT32_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::stack<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0026_std_stack_uint32_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline421(std::stack<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0026_std_stack_uint32_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0026_std_stack_uint32_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026_std_stack_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_STACK_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_STACK_UINT64_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::stack<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0027_std_stack_uint64_t', () => {
    try {
      const result = transTskey2Ckey('std::stack<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0027_std_stack_uint64_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0027_std_stack_uint64_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027_std_stack_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_STACK_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_STACK_UINT64_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<uint64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0028_std_stack_uint64_t', () => {
    try {
      const r = parsec.parseFunction(`void sample422(std::stack<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0028_std_stack_uint64_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0028_std_stack_uint64_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028_std_stack_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_ARRAY_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_ARRAY_NUMBER_V2
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<uint64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0029_array_number_v2', () => {
    try {
      const r = parsec.parseFunction(`std::stack<uint64_t> sampleRet422();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0029_array_number_v2 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0029_array_number_v2 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029_array_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_STACK_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_STD_STACK_UINT64_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<uint64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0030_std_stack_uint64_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass422 { public: std::stack<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0030_std_stack_uint64_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0030_std_stack_uint64_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030_std_stack_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_STACK_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_STACK_UINT64_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::stack<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0031_std_stack_uint64_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline422(std::stack<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0031_std_stack_uint64_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0031_std_stack_uint64_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031_std_stack_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_STACK_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_STACK_INT8_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::stack<int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0032_std_stack_int8_t', () => {
    try {
      const result = transTskey2Ckey('std::stack<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0032_std_stack_int8_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0032_std_stack_int8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032_std_stack_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_STACK_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_STACK_INT8_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0033_std_stack_int8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample423(std::stack<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0033_std_stack_int8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0033_std_stack_int8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033_std_stack_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0034_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::stack<int8_t> sampleRet423();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0034_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0034_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_STACK_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_STD_STACK_INT8_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0035_std_stack_int8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass423 { public: std::stack<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0035_std_stack_int8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0035_std_stack_int8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035_std_stack_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_STACK_INT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_STACK_INT8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::stack<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0036_std_stack_int8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline423(std::stack<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0036_std_stack_int8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0036_std_stack_int8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036_std_stack_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_STACK_INT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_STACK_INT16_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::stack<int16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0037_std_stack_int16_t', () => {
    try {
      const result = transTskey2Ckey('std::stack<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0037_std_stack_int16_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0037_std_stack_int16_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037_std_stack_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_STACK_INT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_STACK_INT16_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<int16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0038_std_stack_int16_t', () => {
    try {
      const r = parsec.parseFunction(`void sample424(std::stack<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0038_std_stack_int16_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0038_std_stack_int16_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038_std_stack_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<int16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0039_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::stack<int16_t> sampleRet424();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0039_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0039_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_STACK_INT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_STD_STACK_INT16_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<int16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0040_std_stack_int16_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass424 { public: std::stack<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0040_std_stack_int16_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0040_std_stack_int16_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040_std_stack_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_STACK_INT16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_STACK_INT16_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::stack<int16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0041_std_stack_int16_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline424(std::stack<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0041_std_stack_int16_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0041_std_stack_int16_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041_std_stack_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_STACK_INT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_STACK_INT32_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::stack<int32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0042_std_stack_int32_t', () => {
    try {
      const result = transTskey2Ckey('std::stack<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0042_std_stack_int32_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0042_std_stack_int32_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042_std_stack_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_STACK_INT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_STACK_INT32_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<int32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0043_std_stack_int32_t', () => {
    try {
      const r = parsec.parseFunction(`void sample425(std::stack<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0043_std_stack_int32_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0043_std_stack_int32_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043_std_stack_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0044_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<int32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0044_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::stack<int32_t> sampleRet425();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0044_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0044_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_STACK_INT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0045_STD_STACK_INT32_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<int32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0045_std_stack_int32_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass425 { public: std::stack<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045_std_stack_int32_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0045_std_stack_int32_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045_std_stack_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_STACK_INT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0046_STD_STACK_INT32_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::stack<int32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0046_std_stack_int32_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline425(std::stack<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0046_std_stack_int32_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0046_std_stack_int32_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046_std_stack_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_STACK_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0047_STD_STACK_INT64_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::stack<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0047_std_stack_int64_t', () => {
    try {
      const result = transTskey2Ckey('std::stack<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0047_std_stack_int64_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0047_std_stack_int64_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047_std_stack_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_STACK_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0048_STD_STACK_INT64_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0048_std_stack_int64_t', () => {
    try {
      const r = parsec.parseFunction(`void sample426(std::stack<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0048_std_stack_int64_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0048_std_stack_int64_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048_std_stack_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0049_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0049_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::stack<int64_t> sampleRet426();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0049_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0049_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_STACK_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0050_STD_STACK_INT64_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0050_std_stack_int64_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass426 { public: std::stack<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0050_std_stack_int64_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0050_std_stack_int64_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050_std_stack_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_STACK_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0051_STD_STACK_INT64_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::stack<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0051_std_stack_int64_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline426(std::stack<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0051_std_stack_int64_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0051_std_stack_int64_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051_std_stack_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_STACK_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0052_STD_STACK_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::stack<unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0052_std_stack_unsigned', () => {
    try {
      const result = transTskey2Ckey('std::stack<unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0052_std_stack_unsigned convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0052_std_stack_unsigned convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052_std_stack_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_STACK_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0053_STD_STACK_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::stack<unsigned>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0053_std_stack_unsigned', () => {
    try {
      const r = parsec.parseFunction(`void sample427(std::stack<unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0053_std_stack_unsigned param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0053_std_stack_unsigned param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053_std_stack_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0054_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::stack<unsigned>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0054_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::stack<unsigned> sampleRet427();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0054_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0054_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_STACK_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0055_STD_STACK_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::stack<unsigned>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0055_std_stack_unsigned', () => {
    try {
      const r = parsec.parseClass(`class SampleClass427 { public: std::stack<unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0055_std_stack_unsigned class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0055_std_stack_unsigned class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055_std_stack_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_QUEUE_INT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0001_STD_QUEUE_INT32_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::queue<int32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0001_std_queue_int32_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass467 { public: std::queue<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0001_std_queue_int32_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0001_std_queue_int32_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001_std_queue_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_QUEUE_INT32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0002_STD_QUEUE_INT32_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::queue<int32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0002_std_queue_int32_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline467(std::queue<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0002_std_queue_int32_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0002_std_queue_int32_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002_std_queue_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_QUEUE_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0003_STD_QUEUE_INT64_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::queue<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0003_std_queue_int64_t', () => {
    try {
      const result = transTskey2Ckey('std::queue<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0003_std_queue_int64_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0003_std_queue_int64_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003_std_queue_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_QUEUE_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0004_STD_QUEUE_INT64_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::queue<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0004_std_queue_int64_t', () => {
    try {
      const r = parsec.parseFunction(`void sample468(std::queue<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0004_std_queue_int64_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0004_std_queue_int64_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004_std_queue_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0005_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::queue<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0005_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::queue<int64_t> sampleRet468();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0005_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_QUEUE_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0006_STD_QUEUE_INT64_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::queue<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0006_std_queue_int64_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass468 { public: std::queue<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0006_std_queue_int64_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0006_std_queue_int64_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006_std_queue_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_QUEUE_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0007_STD_QUEUE_INT64_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::queue<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0007_std_queue_int64_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline468(std::queue<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0007_std_queue_int64_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0007_std_queue_int64_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007_std_queue_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_QUEUE_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0008_STD_QUEUE_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::queue<unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0008_std_queue_unsigned', () => {
    try {
      const result = transTskey2Ckey('std::queue<unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0008_std_queue_unsigned convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0008_std_queue_unsigned convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008_std_queue_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_QUEUE_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0009_STD_QUEUE_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::queue<unsigned>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0009_std_queue_unsigned', () => {
    try {
      const r = parsec.parseFunction(`void sample469(std::queue<unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0009_std_queue_unsigned param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0009_std_queue_unsigned param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009_std_queue_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0010_ARRAY_NUMBER
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::queue<unsigned>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0010_array_number', () => {
    try {
      const r = parsec.parseFunction(`std::queue<unsigned> sampleRet469();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010_array_number return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0010_array_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_QUEUE_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0011_STD_QUEUE_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::queue<unsigned>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0011_std_queue_unsigned', () => {
    try {
      const r = parsec.parseClass(`class SampleClass469 { public: std::queue<unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0011_std_queue_unsigned class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0011_std_queue_unsigned class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011_std_queue_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_QUEUE_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0012_STD_QUEUE_UNSIGNED
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::queue<unsigned>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0012_std_queue_unsigned', () => {
    try {
      const r = parsec.parseFunction(`void pipeline469(std::queue<unsigned> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0012_std_queue_unsigned pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_array_0012_std_queue_unsigned pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012_std_queue_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_QUEUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0013_STD_QUEUE_BOOL
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::queue<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0013_std_queue_bool', () => {
    try {
      const result = transTskey2Ckey('std::queue<bool>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0013_std_queue_bool convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_array_0013_std_queue_bool convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013_std_queue_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_QUEUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0014_STD_QUEUE_BOOL
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::queue<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0014_std_queue_bool', () => {
    try {
      const r = parsec.parseFunction(`void sample470(std::queue<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0014_std_queue_bool param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0014_std_queue_bool param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014_std_queue_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0015_ARRAY_BOOLEAN
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::queue<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0015_array_boolean', () => {
    try {
      const r = parsec.parseFunction(`std::queue<bool> sampleRet470();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015_array_boolean return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0015_array_boolean return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_QUEUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0016_STD_QUEUE_BOOL
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::queue<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0016_std_queue_bool', () => {
    try {
      const r = parsec.parseClass(`class SampleClass470 { public: std::queue<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0016_std_queue_bool class field convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0016_std_queue_bool class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016_std_queue_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_QUEUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0017_STD_QUEUE_BOOL
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::queue<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0017_std_queue_bool', () => {
    try {
      const r = parsec.parseFunction(`void pipeline470(std::queue<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0017_std_queue_bool pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_array_0017_std_queue_bool pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017_std_queue_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_QUEUE_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0018_STD_QUEUE_CHAR
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type std::queue<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0018_std_queue_char', () => {
    try {
      const result = transTskey2Ckey('std::queue<char>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0018_std_queue_char convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0018_std_queue_char convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018_std_queue_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_QUEUE_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0019_STD_QUEUE_CHAR
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::queue<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0019_std_queue_char', () => {
    try {
      const r = parsec.parseFunction(`void sample471(std::queue<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0019_std_queue_char param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0019_std_queue_char param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019_std_queue_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0020_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::queue<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0020_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char> sampleRet471();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0020_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0020_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_QUEUE_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0021_STD_QUEUE_CHAR
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::queue<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0021_std_queue_char', () => {
    try {
      const r = parsec.parseClass(`class SampleClass471 { public: std::queue<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0021_std_queue_char class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0021_std_queue_char class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021_std_queue_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_QUEUE_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0022_STD_QUEUE_CHAR
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::queue<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0022_std_queue_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline471(std::queue<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0022_std_queue_char pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0022_std_queue_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022_std_queue_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_QUEUE_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0023_STD_QUEUE_WCHAR_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::queue<wchar_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0023_std_queue_wchar_t', () => {
    try {
      const result = transTskey2Ckey('std::queue<wchar_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0023_std_queue_wchar_t convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0023_std_queue_wchar_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023_std_queue_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_QUEUE_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0024_STD_QUEUE_WCHAR_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::queue<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0024_std_queue_wchar_t', () => {
    try {
      const r = parsec.parseFunction(`void sample472(std::queue<wchar_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0024_std_queue_wchar_t param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0024_std_queue_wchar_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024_std_queue_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0025_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::queue<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0025_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::queue<wchar_t> sampleRet472();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0025_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0025_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_QUEUE_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0026_STD_QUEUE_WCHAR_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::queue<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0026_std_queue_wchar_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass472 { public: std::queue<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0026_std_queue_wchar_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0026_std_queue_wchar_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026_std_queue_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_QUEUE_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0027_STD_QUEUE_WCHAR_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::queue<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0027_std_queue_wchar_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline472(std::queue<wchar_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0027_std_queue_wchar_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0027_std_queue_wchar_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027_std_queue_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_QUEUE_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0028_STD_QUEUE_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::queue<char8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0028_std_queue_char8_t', () => {
    try {
      const result = transTskey2Ckey('std::queue<char8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0028_std_queue_char8_t convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0028_std_queue_char8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028_std_queue_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_QUEUE_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0029_STD_QUEUE_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::queue<char8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0029_std_queue_char8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample473(std::queue<char8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0029_std_queue_char8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0029_std_queue_char8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029_std_queue_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0030_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::queue<char8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0030_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char8_t> sampleRet473();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0030_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0030_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_QUEUE_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0031_STD_QUEUE_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::queue<char8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0031_std_queue_char8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass473 { public: std::queue<char8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0031_std_queue_char8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0031_std_queue_char8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031_std_queue_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_QUEUE_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0032_STD_QUEUE_CHAR8_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type std::queue<char8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0032_std_queue_char8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline473(std::queue<char8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0032_std_queue_char8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0032_std_queue_char8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032_std_queue_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_QUEUE_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0033_STD_QUEUE_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::queue<char16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0033_std_queue_char16_t', () => {
    try {
      const result = transTskey2Ckey('std::queue<char16_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0033_std_queue_char16_t convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0033_std_queue_char16_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033_std_queue_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_QUEUE_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0034_STD_QUEUE_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::queue<char16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0034_std_queue_char16_t', () => {
    try {
      const r = parsec.parseFunction(`void sample474(std::queue<char16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0034_std_queue_char16_t param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0034_std_queue_char16_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034_std_queue_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0035_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::queue<char16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0035_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char16_t> sampleRet474();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0035_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0035_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_QUEUE_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0036_STD_QUEUE_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::queue<char16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0036_std_queue_char16_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass474 { public: std::queue<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0036_std_queue_char16_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0036_std_queue_char16_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036_std_queue_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_QUEUE_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0037_STD_QUEUE_CHAR16_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::queue<char16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0037_std_queue_char16_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline474(std::queue<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0037_std_queue_char16_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0037_std_queue_char16_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037_std_queue_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_QUEUE_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0038_STD_QUEUE_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::queue<char32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0038_std_queue_char32_t', () => {
    try {
      const result = transTskey2Ckey('std::queue<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0038_std_queue_char32_t convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0038_std_queue_char32_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038_std_queue_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_QUEUE_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0039_STD_QUEUE_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: function-param convert; type std::queue<char32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0039_std_queue_char32_t', () => {
    try {
      const r = parsec.parseFunction(`void sample475(std::queue<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0039_std_queue_char32_t param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0039_std_queue_char32_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039_std_queue_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0040_ARRAY_STRING
   * @tc.desc   Stability convert h2dts/array: function-return convert; type std::queue<char32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0040_array_string', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char32_t> sampleRet475();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0040_array_string return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0040_array_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_QUEUE_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0041_STD_QUEUE_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: class-field convert; type std::queue<char32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0041_std_queue_char32_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass475 { public: std::queue<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0041_std_queue_char32_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0041_std_queue_char32_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041_std_queue_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_QUEUE_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0042_STD_QUEUE_CHAR32_T
   * @tc.desc   Stability convert h2dts/array: parse-convert-gen pipeline; type
   *            std::queue<char32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0042_std_queue_char32_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline475(std::queue<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0042_std_queue_char32_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_array_0042_std_queue_char32_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042_std_queue_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_ARRAY_0043_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability convert h2dts/array: baseline type-string convert; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_array_0043_std_priority_queue_int', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_array_0043_std_priority_queue_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0043_std_priority_queue_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043_std_priority_queue_int execution error: ${String(err)}`);
    }
  });
});
