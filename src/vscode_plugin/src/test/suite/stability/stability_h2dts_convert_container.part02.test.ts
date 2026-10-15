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
import { transCkey2Dtskey, transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { doParseTs } from '../../../parse/parsets';

suite('Stability_H2DTS_CONVERT_CONTAINER_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_CONTAINER._Part02');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0084_STD_VECTOR_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0084_STD_VECTOR_STD_WSTRING
   * @tc.desc   Stability convert h2dts/container: class-field convert; type
   *            std::vector<std::wstring>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0084_std_vector_std_wstring', () => {
    try {
      const r = parsec.parseClass(`class SampleClass120 { public: std::vector<std::wstring> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass120');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0084_std_vector_std_wstring class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0084_std_vector_std_wstring class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0084_std_vector_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0085_STD_VECTOR_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0085_STD_VECTOR_STD_WSTRING
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<std::wstring>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0085_std_vector_std_wstring', () => {
    try {
      const r = parsec.parseFunction(`void pipeline120(std::vector<std::wstring> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline120');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0085_std_vector_std_wstring pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0085_std_vector_std_wstring pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0085_std_vector_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0086_STD_VECTOR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0086_STD_VECTOR_SHORT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0086_std_vector_short', () => {
    try {
      const result = transTskey2Ckey('std::vector<short>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0086_std_vector_short convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0086_std_vector_short convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0086_std_vector_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0001_STD_VECTOR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0001_STD_VECTOR_SHORT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0001_std_vector_short', () => {
    try {
      const r = parsec.parseFunction(`void sample121(std::vector<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample121');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0001_std_vector_short param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0001_std_vector_short param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0001_std_vector_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0002_SAMPLERET121
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0002_SAMPLERET121
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0002_sampleret121', () => {
    try {
      const r = parsec.parseFunction(`std::vector<short> sampleRet121();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet121');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0002_sampleret121 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0002_sampleret121 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0002_sampleret121 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0003_STD_VECTOR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0003_STD_VECTOR_SHORT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0003_std_vector_short', () => {
    try {
      const r = parsec.parseClass(`class SampleClass121 { public: std::vector<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass121');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0003_std_vector_short class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0003_std_vector_short class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0003_std_vector_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0004_STD_VECTOR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0004_STD_VECTOR_SHORT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0004_std_vector_short', () => {
    try {
      const r = parsec.parseFunction(`void pipeline121(std::vector<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline121');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0004_std_vector_short pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0004_std_vector_short pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0004_std_vector_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0005_STD_VECTOR_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0005_STD_VECTOR_INT64_T
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0005_std_vector_int64_t', () => {
    try {
      const result = transTskey2Ckey('std::vector<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0005_std_vector_int64_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0005_std_vector_int64_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0005_std_vector_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0006_STD_VECTOR_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0006_STD_VECTOR_INT64_T
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::vector<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0006_std_vector_int64_t', () => {
    try {
      const r = parsec.parseFunction(`void sample122(std::vector<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample122');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0006_std_vector_int64_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0006_std_vector_int64_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0006_std_vector_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0007_SAMPLERET122
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0007_SAMPLERET122
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::vector<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0007_sampleret122', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int64_t> sampleRet122();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet122');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0007_sampleret122 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0007_sampleret122 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0007_sampleret122 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0008_STD_VECTOR_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0008_STD_VECTOR_INT64_T
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0008_std_vector_int64_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass122 { public: std::vector<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass122');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0008_std_vector_int64_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0008_std_vector_int64_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0008_std_vector_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0009_STD_VECTOR_INT64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0009_STD_VECTOR_INT64_T
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0009_std_vector_int64_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline122(std::vector<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline122');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0009_std_vector_int64_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0009_std_vector_int64_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0009_std_vector_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0010_STD_VECTOR_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0010_STD_VECTOR_UINT8_T
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0010_std_vector_uint8_t', () => {
    try {
      const result = transTskey2Ckey('std::vector<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0010_std_vector_uint8_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0010_std_vector_uint8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0010_std_vector_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0011_STD_VECTOR_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0011_STD_VECTOR_UINT8_T
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::vector<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0011_std_vector_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample123(std::vector<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample123');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0011_std_vector_uint8_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0011_std_vector_uint8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0011_std_vector_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0012_SAMPLERET123
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0012_SAMPLERET123
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::vector<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0012_sampleret123', () => {
    try {
      const r = parsec.parseFunction(`std::vector<uint8_t> sampleRet123();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet123');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0012_sampleret123 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0012_sampleret123 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0012_sampleret123 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0013_STD_VECTOR_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0013_STD_VECTOR_UINT8_T
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0013_std_vector_uint8_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass123 { public: std::vector<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass123');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0013_std_vector_uint8_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0013_std_vector_uint8_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0013_std_vector_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0014_STD_VECTOR_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0014_STD_VECTOR_UINT8_T
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0014_std_vector_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline123(std::vector<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline123');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0014_std_vector_uint8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0014_std_vector_uint8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0014_std_vector_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0015_STD_VECTOR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0015_STD_VECTOR_SIZE_T
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0015_std_vector_size_t', () => {
    try {
      const result = transTskey2Ckey('std::vector<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0015_std_vector_size_t convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0015_std_vector_size_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0015_std_vector_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0016_STD_VECTOR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0016_STD_VECTOR_SIZE_T
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0016_std_vector_size_t', () => {
    try {
      const r = parsec.parseFunction(`void sample124(std::vector<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample124');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0016_std_vector_size_t param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0016_std_vector_size_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0016_std_vector_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0017_SAMPLERET124
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0017_SAMPLERET124
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::vector<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0017_sampleret124', () => {
    try {
      const r = parsec.parseFunction(`std::vector<size_t> sampleRet124();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet124');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0017_sampleret124 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0017_sampleret124 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0017_sampleret124 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0018_STD_VECTOR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0018_STD_VECTOR_SIZE_T
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0018_std_vector_size_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass124 { public: std::vector<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass124');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0018_std_vector_size_t class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0018_std_vector_size_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0018_std_vector_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0019_STD_VECTOR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0019_STD_VECTOR_SIZE_T
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0019_std_vector_size_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline124(std::vector<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline124');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0019_std_vector_size_t pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0019_std_vector_size_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0019_std_vector_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0020_STD_VECTOR_STD_STRING_VIEW
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0020_STD_VECTOR_STD_STRING_VIEW
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<std::string_view>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0020_std_vector_std_string_view', () => {
    try {
      const result = transTskey2Ckey('std::vector<std::string_view>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0020_std_vector_std_string_view convert output non-empty");
      assert.strictEqual(result, "Array<string>",
        "h2dts_convert_container_0020_std_vector_std_string_view convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0020_std_vector_std_string_view execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0021_STD_VECTOR_STD_STRING_VIEW
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0021_STD_VECTOR_STD_STRING_VIEW
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::vector<std::string_view>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0021_std_vector_std_string_view', () => {
    try {
      const r = parsec.parseFunction(`void sample125(std::vector<std::string_view> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample125');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0021_std_vector_std_string_view param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0021_std_vector_std_string_view param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0021_std_vector_std_string_view execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0022_SAMPLERET125
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0022_SAMPLERET125
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::vector<std::string_view>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0022_sampleret125', () => {
    try {
      const r = parsec.parseFunction(`std::vector<std::string_view> sampleRet125();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet125');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0022_sampleret125 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0022_sampleret125 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0022_sampleret125 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0023_STD_VECTOR_STD_STRING_VIEW
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0023_STD_VECTOR_STD_STRING_VIEW
   * @tc.desc   Stability convert h2dts/container: class-field convert; type
   *            std::vector<std::string_view>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0023_std_vector_std_string_view', () => {
    try {
      const r = parsec.parseClass(`class SampleClass125 { public: std::vector<std::string_view> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass125');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0023_std_vector_std_string_view class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0023_std_vector_std_string_view class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0023_std_vector_std_string_view execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0024_STD_VECTOR_STD_STRING_VIEW
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0024_STD_VECTOR_STD_STRING_VIEW
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<std::string_view>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0024_std_vector_std_string_view', () => {
    try {
      const r = parsec.parseFunction(`void pipeline125(std::vector<std::string_view> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline125');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0024_std_vector_std_string_view pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0024_std_vector_std_string_view pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0024_std_vector_std_string_view execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0025_STD_DEQUE_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0025_STD_DEQUE_FLOAT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::deque<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0025_std_deque_float', () => {
    try {
      const result = transTskey2Ckey('std::deque<float>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0025_std_deque_float convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0025_std_deque_float convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0025_std_deque_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0026_STD_DEQUE_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0026_STD_DEQUE_FLOAT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::deque<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0026_std_deque_float', () => {
    try {
      const r = parsec.parseFunction(`void sample133(std::deque<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample133');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0026_std_deque_float param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0026_std_deque_float param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0026_std_deque_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0027_SAMPLERET133
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0027_SAMPLERET133
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::deque<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0027_sampleret133', () => {
    try {
      const r = parsec.parseFunction(`std::deque<float> sampleRet133();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet133');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0027_sampleret133 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0027_sampleret133 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0027_sampleret133 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0028_STD_DEQUE_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0028_STD_DEQUE_FLOAT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::deque<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0028_std_deque_float', () => {
    try {
      const r = parsec.parseClass(`class SampleClass133 { public: std::deque<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass133');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0028_std_deque_float class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0028_std_deque_float class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0028_std_deque_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0029_STD_DEQUE_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0029_STD_DEQUE_FLOAT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::deque<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0029_std_deque_float', () => {
    try {
      const r = parsec.parseFunction(`void pipeline133(std::deque<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline133');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0029_std_deque_float pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0029_std_deque_float pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0029_std_deque_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0030_STD_DEQUE_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0030_STD_DEQUE_LONG
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::deque<long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0030_std_deque_long', () => {
    try {
      const result = transTskey2Ckey('std::deque<long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0030_std_deque_long convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0030_std_deque_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0030_std_deque_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0031_STD_DEQUE_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0031_STD_DEQUE_LONG
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::deque<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0031_std_deque_long', () => {
    try {
      const r = parsec.parseFunction(`void sample134(std::deque<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample134');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0031_std_deque_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0031_std_deque_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0031_std_deque_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0032_SAMPLERET134
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0032_SAMPLERET134
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::deque<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0032_sampleret134', () => {
    try {
      const r = parsec.parseFunction(`std::deque<long> sampleRet134();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet134');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0032_sampleret134 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0032_sampleret134 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0032_sampleret134 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0033_STD_DEQUE_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0033_STD_DEQUE_LONG
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::deque<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0033_std_deque_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass134 { public: std::deque<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass134');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0033_std_deque_long class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0033_std_deque_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0033_std_deque_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0034_STD_DEQUE_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0034_STD_DEQUE_LONG
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::deque<long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0034_std_deque_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline134(std::deque<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline134');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0034_std_deque_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0034_std_deque_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0034_std_deque_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0035_STD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0035_STD_LIST_FLOAT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::list<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0035_std_list_float', () => {
    try {
      const result = transTskey2Ckey('std::list<float>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0035_std_list_float convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0035_std_list_float convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0035_std_list_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0036_STD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0036_STD_LIST_FLOAT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::list<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0036_std_list_float', () => {
    try {
      const r = parsec.parseFunction(`void sample137(std::list<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample137');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0036_std_list_float param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0036_std_list_float param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0036_std_list_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0037_SAMPLERET137
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0037_SAMPLERET137
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::list<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0037_sampleret137', () => {
    try {
      const r = parsec.parseFunction(`std::list<float> sampleRet137();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet137');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0037_sampleret137 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0037_sampleret137 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0037_sampleret137 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0038_STD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0038_STD_LIST_FLOAT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::list<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0038_std_list_float', () => {
    try {
      const r = parsec.parseClass(`class SampleClass137 { public: std::list<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass137');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0038_std_list_float class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0038_std_list_float class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0038_std_list_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0039_STD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0039_STD_LIST_FLOAT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::list<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0039_std_list_float', () => {
    try {
      const r = parsec.parseFunction(`void pipeline137(std::list<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline137');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0039_std_list_float pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0039_std_list_float pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0039_std_list_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0040_STD_QUEUE_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0040_STD_QUEUE_STD_STRING
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::queue<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0040_std_queue_std_string', () => {
    try {
      const result = transTskey2Ckey('std::queue<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0040_std_queue_std_string convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_container_0040_std_queue_std_string convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0040_std_queue_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0041_STD_QUEUE_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0041_STD_QUEUE_STD_STRING
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::queue<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0041_std_queue_std_string', () => {
    try {
      const r = parsec.parseFunction(`void sample138(std::queue<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample138');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0041_std_queue_std_string param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0041_std_queue_std_string param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0041_std_queue_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0042_SAMPLERET138
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0042_SAMPLERET138
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::queue<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0042_sampleret138', () => {
    try {
      const r = parsec.parseFunction(`std::queue<std::string> sampleRet138();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet138');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0042_sampleret138 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0042_sampleret138 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0042_sampleret138 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0043_STD_QUEUE_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0043_STD_QUEUE_STD_STRING
   * @tc.desc   Stability convert h2dts/container: class-field convert; type
   *            std::queue<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0043_std_queue_std_string', () => {
    try {
      const r = parsec.parseClass(`class SampleClass138 { public: std::queue<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass138');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0043_std_queue_std_string class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0043_std_queue_std_string class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0043_std_queue_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0044_STD_QUEUE_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0044_STD_QUEUE_STD_STRING
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::queue<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0044_std_queue_std_string', () => {
    try {
      const r = parsec.parseFunction(`void pipeline138(std::queue<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline138');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0044_std_queue_std_string pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0044_std_queue_std_string pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0044_std_queue_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0045_STD_STACK_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0045_STD_STACK_DOUBLE
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::stack<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0045_std_stack_double', () => {
    try {
      const result = transTskey2Ckey('std::stack<double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0045_std_stack_double convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0045_std_stack_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0045_std_stack_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0046_STD_STACK_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0046_STD_STACK_DOUBLE
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::stack<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0046_std_stack_double', () => {
    try {
      const r = parsec.parseFunction(`void sample139(std::stack<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample139');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0046_std_stack_double param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0046_std_stack_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0046_std_stack_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0047_SAMPLERET139
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0047_SAMPLERET139
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::stack<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0047_sampleret139', () => {
    try {
      const r = parsec.parseFunction(`std::stack<double> sampleRet139();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet139');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0047_sampleret139 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0047_sampleret139 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0047_sampleret139 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0048_STD_STACK_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0048_STD_STACK_DOUBLE
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::stack<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0048_std_stack_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass139 { public: std::stack<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass139');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0048_std_stack_double class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0048_std_stack_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0048_std_stack_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0049_STD_STACK_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0049_STD_STACK_DOUBLE
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::stack<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0049_std_stack_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline139(std::stack<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline139');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0049_std_stack_double pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0049_std_stack_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0049_std_stack_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0050_STD_VALARRAY_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0050_STD_VALARRAY_INT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::valarray<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0050_std_valarray_int', () => {
    try {
      const result = transTskey2Ckey('std::valarray<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0050_std_valarray_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0050_std_valarray_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0050_std_valarray_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0051_STD_VALARRAY_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0051_STD_VALARRAY_INT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::valarray<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0051_std_valarray_int', () => {
    try {
      const r = parsec.parseFunction(`void sample149(std::valarray<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample149');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0051_std_valarray_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0051_std_valarray_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0051_std_valarray_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0052_SAMPLERET149
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0052_SAMPLERET149
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::valarray<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0052_sampleret149', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<int> sampleRet149();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet149');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0052_sampleret149 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0052_sampleret149 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0052_sampleret149 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0053_STD_VALARRAY_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0053_STD_VALARRAY_INT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::valarray<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0053_std_valarray_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass149 { public: std::valarray<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass149');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0053_std_valarray_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0053_std_valarray_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0053_std_valarray_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0054_STD_VALARRAY_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0054_STD_VALARRAY_INT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::valarray<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0054_std_valarray_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline149(std::valarray<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline149');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0054_std_valarray_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0054_std_valarray_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0054_std_valarray_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0055_STD_VALARRAY_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0055_STD_VALARRAY_FLOAT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::valarray<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0055_std_valarray_float', () => {
    try {
      const result = transTskey2Ckey('std::valarray<float>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0055_std_valarray_float convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0055_std_valarray_float convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0055_std_valarray_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0056_STD_VALARRAY_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0056_STD_VALARRAY_FLOAT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::valarray<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0056_std_valarray_float', () => {
    try {
      const r = parsec.parseFunction(`void sample150(std::valarray<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample150');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0056_std_valarray_float param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0056_std_valarray_float param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0056_std_valarray_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0057_SAMPLERET150
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0057_SAMPLERET150
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::valarray<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0057_sampleret150', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<float> sampleRet150();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet150');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0057_sampleret150 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0057_sampleret150 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0057_sampleret150 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0058_STD_VALARRAY_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0058_STD_VALARRAY_FLOAT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::valarray<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0058_std_valarray_float', () => {
    try {
      const r = parsec.parseClass(`class SampleClass150 { public: std::valarray<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass150');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0058_std_valarray_float class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0058_std_valarray_float class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0058_std_valarray_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0059_STD_VALARRAY_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0059_STD_VALARRAY_FLOAT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::valarray<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0059_std_valarray_float', () => {
    try {
      const r = parsec.parseFunction(`void pipeline150(std::valarray<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline150');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0059_std_valarray_float pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0059_std_valarray_float pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0059_std_valarray_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0060_STD_DEQUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0060_STD_DEQUE_BOOL
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::deque<bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0060_std_deque_bool', () => {
    try {
      const result = transTskey2Ckey('std::deque<bool>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0060_std_deque_bool convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_container_0060_std_deque_bool convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0060_std_deque_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0061_STD_DEQUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0061_STD_DEQUE_BOOL
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::deque<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0061_std_deque_bool', () => {
    try {
      const r = parsec.parseFunction(`void sample156(std::deque<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample156');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0061_std_deque_bool param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_container_0061_std_deque_bool param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0061_std_deque_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0062_SAMPLERET156
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0062_SAMPLERET156
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::deque<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0062_sampleret156', () => {
    try {
      const r = parsec.parseFunction(`std::deque<bool> sampleRet156();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet156');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0062_sampleret156 return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_container_0062_sampleret156 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0062_sampleret156 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0063_STD_DEQUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0063_STD_DEQUE_BOOL
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::deque<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0063_std_deque_bool', () => {
    try {
      const r = parsec.parseClass(`class SampleClass156 { public: std::deque<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass156');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0063_std_deque_bool class field convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_container_0063_std_deque_bool class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0063_std_deque_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0064_STD_DEQUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0064_STD_DEQUE_BOOL
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::deque<bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0064_std_deque_bool', () => {
    try {
      const r = parsec.parseFunction(`void pipeline156(std::deque<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline156');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0064_std_deque_bool pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_container_0064_std_deque_bool pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0064_std_deque_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0065_STD_STACK_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0065_STD_STACK_STD_STRING
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::stack<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0065_std_stack_std_string', () => {
    try {
      const result = transTskey2Ckey('std::stack<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0065_std_stack_std_string convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_container_0065_std_stack_std_string convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0065_std_stack_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0066_STD_STACK_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0066_STD_STACK_STD_STRING
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::stack<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0066_std_stack_std_string', () => {
    try {
      const r = parsec.parseFunction(`void sample165(std::stack<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample165');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0066_std_stack_std_string param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0066_std_stack_std_string param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0066_std_stack_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0067_SAMPLERET165
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0067_SAMPLERET165
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::stack<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0067_sampleret165', () => {
    try {
      const r = parsec.parseFunction(`std::stack<std::string> sampleRet165();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet165');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0067_sampleret165 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0067_sampleret165 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0067_sampleret165 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0068_STD_STACK_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0068_STD_STACK_STD_STRING
   * @tc.desc   Stability convert h2dts/container: class-field convert; type
   *            std::stack<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0068_std_stack_std_string', () => {
    try {
      const r = parsec.parseClass(`class SampleClass165 { public: std::stack<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass165');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0068_std_stack_std_string class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0068_std_stack_std_string class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0068_std_stack_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0069_STD_STACK_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0069_STD_STACK_STD_STRING
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::stack<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0069_std_stack_std_string', () => {
    try {
      const r = parsec.parseFunction(`void pipeline165(std::stack<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline165');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0069_std_stack_std_string pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0069_std_stack_std_string pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0069_std_stack_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0070_STD_VECTOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0070_STD_VECTOR
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type std::vector;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0070_std_vector', () => {
    try {
      const result = transTskey2Ckey('std::vector');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0070_std_vector convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_container_0070_std_vector convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0070_std_vector execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0071_STD_VECTOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0071_STD_VECTOR
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0071_std_vector', () => {
    try {
      const r = parsec.parseFunction(`void sample182(std::vector p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample182');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0071_std_vector param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0071_std_vector param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0071_std_vector execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0072_SAMPLERET182
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0072_SAMPLERET182
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0072_sampleret182', () => {
    try {
      const r = parsec.parseFunction(`std::vector sampleRet182();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet182');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0072_sampleret182 return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0072_sampleret182 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0072_sampleret182 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0073_STD_VECTOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0073_STD_VECTOR
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0073_std_vector', () => {
    try {
      const r = parsec.parseClass(`class SampleClass182 { public: std::vector field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass182');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0073_std_vector class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0073_std_vector class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0073_std_vector execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0074_STD_VECTOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0074_STD_VECTOR
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::vector;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0074_std_vector', () => {
    try {
      const r = parsec.parseFunction(`void pipeline182(std::vector p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline182');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0074_std_vector pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0074_std_vector pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0074_std_vector execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0075_CONST_STD_VECTOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0075_CONST_STD_VECTOR
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type const
   *            std::vector; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0075_const_std_vector', () => {
    try {
      const result = transTskey2Ckey('const std::vector');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0075_const_std_vector convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_container_0075_const_std_vector convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0075_const_std_vector execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0076_CONST_STD_VECTOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0076_CONST_STD_VECTOR
   * @tc.desc   Stability convert h2dts/container: function-param convert; type const std::vector;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0076_const_std_vector', () => {
    try {
      const r = parsec.parseFunction(`void sample189(const std::vector p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample189');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0076_const_std_vector param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0076_const_std_vector param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0076_const_std_vector execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0077_SAMPLERET189
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0077_SAMPLERET189
   * @tc.desc   Stability convert h2dts/container: function-return convert; type const std::vector;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0077_sampleret189', () => {
    try {
      const r = parsec.parseFunction(`const std::vector sampleRet189();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet189');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0077_sampleret189 return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0077_sampleret189 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0077_sampleret189 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0078_CONST_STD_VECTOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0078_CONST_STD_VECTOR
   * @tc.desc   Stability convert h2dts/container: class-field convert; type const std::vector;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0078_const_std_vector', () => {
    try {
      const r = parsec.parseClass(`class SampleClass189 { public: const std::vector field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass189');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0078_const_std_vector class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0078_const_std_vector class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0078_const_std_vector execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0079_CONST_STD_VECTOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0079_CONST_STD_VECTOR
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type const
   *            std::vector; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0079_const_std_vector', () => {
    try {
      const r = parsec.parseFunction(`void pipeline189(const std::vector p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline189');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0079_const_std_vector pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0079_const_std_vector pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0079_const_std_vector execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0080_STD_VECTOR_UNSIGNED_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0080_STD_VECTOR_UNSIGNED_INT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<unsigned int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0080_std_vector_unsigned_int', () => {
    try {
      const result = transTskey2Ckey('std::vector<unsigned int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0080_std_vector_unsigned_int convert output non-empty");
      assert.strictEqual(result, "Array<number>",
        "h2dts_convert_container_0080_std_vector_unsigned_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0080_std_vector_unsigned_int execution error: ${err}`);
    }
  });
});
