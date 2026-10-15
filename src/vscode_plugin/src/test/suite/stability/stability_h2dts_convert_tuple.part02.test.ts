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

suite('Stability_H2DTS_CONVERT_TUPLE_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_TUPLE._Part02');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0085
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0085
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type
   *            std::pair<std::string,int> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0085', () => {
    try {
      const r = parsec.parseFunction(`void pipeline232(std::pair<std::string,int> m2 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline232');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0085 pipeline convert output non-empty");
      assert.strictEqual(converted, "[string, number]", "h2dts_convert_tuple_0085 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0085 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0086
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0086
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type
   *            std::tuple<int,int,int> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0086', () => {
    try {
      const result = transTskey2Ckey('std::tuple<int,int,int> m3');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0086 convert output non-empty");
      assert.strictEqual(result, "[number, number, number]", "h2dts_convert_tuple_0086 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0086 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0087
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0087
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::tuple<int,int,int>
   *            m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0087', () => {
    try {
      const r = parsec.parseFunction(`void sample233(std::tuple<int,int,int> m3 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample233');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0087 param convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0087 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0087 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0001_SAMPLERET233
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0001_SAMPLERET233
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::tuple<int,int,int>
   *            m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0001_sampleret233', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<int,int,int> m3 sampleRet233();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet233');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0001_sampleret233 return convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]",
        "h2dts_convert_tuple_0001_sampleret233 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0001_sampleret233 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0002_STD_TUPLE_INT_INT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0002_STD_TUPLE_INT_INT_INT_M3
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::tuple<int,int,int> m3;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0002_std_tuple_int_int_int_m3', () => {
    try {
      const r = parsec.parseClass(`class SampleClass233 { public: std::tuple<int,int,int> m3 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass233');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0002_std_tuple_int_int_int_m3 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_tuple_0002_std_tuple_int_int_int_m3 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0002_std_tuple_int_int_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0003_STD_TUPLE_INT_INT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0003_STD_TUPLE_INT_INT_INT_M3
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type
   *            std::tuple<int,int,int> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0003_std_tuple_int_int_int_m3', () => {
    try {
      const r = parsec.parseFunction(`void pipeline233(std::tuple<int,int,int> m3 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline233');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0003_std_tuple_int_int_int_m3 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]",
        "h2dts_convert_tuple_0003_std_tuple_int_int_int_m3 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0003_std_tuple_int_int_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0004_STD_TUPLE_STD_STRING_INT_0A2B11
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0004_STD_TUPLE_STD_STRING_INT_0A2B11
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type
   *            std::tuple<std::string,int,double> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0004_std_tuple_std_string_int_0a2b11', () => {
    try {
      const result = transTskey2Ckey('std::tuple<std::string,int,double> m0');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_tuple_0004_std_tuple_std_string_int_0a2b11 convert output non-empty");
      assert.strictEqual(result, "[string, number, number]",
        "h2dts_convert_tuple_0004_std_tuple_std_string_int_0a2b11 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0004_std_tuple_std_string_int_0a2b11 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0005_STD_TUPLE_STD_STRING_INT_0A2B11
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0005_STD_TUPLE_STD_STRING_INT_0A2B11
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type
   *            std::tuple<std::string,int,double> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0005_std_tuple_std_string_int_0a2b11', () => {
    try {
      const r = parsec.parseFunction(`void sample234(std::tuple<std::string,int,double> m0 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample234');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0005_std_tuple_std_string_int_0a2b11 param convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]",
        "h2dts_convert_tuple_0005_std_tuple_std_string_int_0a2b11 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0005_std_tuple_std_string_int_0a2b11 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0006_SAMPLERET234
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0006_SAMPLERET234
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type
   *            std::tuple<std::string,int,double> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0006_sampleret234', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<std::string,int,double> m0 sampleRet234();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet234');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0006_sampleret234 return convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]",
        "h2dts_convert_tuple_0006_sampleret234 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0006_sampleret234 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0007_STD_TUPLE_STD_STRING_INT_0A2B11
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0007_STD_TUPLE_STD_STRING_INT_0A2B11
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type
   *            std::tuple<std::string,int,double> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0007_std_tuple_std_string_int_0a2b11', () => {
    try {
      const r = parsec.parseClass(`class SampleClass234 { public: std::tuple<std::string,int,double> m0 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass234');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0007_std_tuple_std_string_int_0a2b11 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_tuple_0007_std_tuple_std_string_int_0a2b11 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0007_std_tuple_std_string_int_0a2b11 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0008_STD_TUPLE_STD_STRING_INT_0A2B11
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0008_STD_TUPLE_STD_STRING_INT_0A2B11
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type
   *            std::tuple<std::string,int,double> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0008_std_tuple_std_string_int_0a2b11', () => {
    try {
      const r = parsec.parseFunction(`void pipeline234(std::tuple<std::string,int,double> m0 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline234');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0008_std_tuple_std_string_int_0a2b11 pipeline convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]",
        "h2dts_convert_tuple_0008_std_tuple_std_string_int_0a2b11 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0008_std_tuple_std_string_int_0a2b11 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0009_STD_PAIR_INT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0009_STD_PAIR_INT_INT_M2
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::pair<int,int>
   *            m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0009_std_pair_int_int_m2', () => {
    try {
      const result = transTskey2Ckey('std::pair<int,int> m2');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_tuple_0009_std_pair_int_int_m2 convert output non-empty");
      assert.strictEqual(result, "[number, number]", "h2dts_convert_tuple_0009_std_pair_int_int_m2 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0009_std_pair_int_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0010_STD_PAIR_INT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0010_STD_PAIR_INT_INT_M2
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::pair<int,int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0010_std_pair_int_int_m2', () => {
    try {
      const r = parsec.parseFunction(`void sample261(std::pair<int,int> m2 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample261');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0010_std_pair_int_int_m2 param convert output non-empty");
      assert.strictEqual(converted, "[number, number]",
        "h2dts_convert_tuple_0010_std_pair_int_int_m2 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0010_std_pair_int_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0011_SAMPLERET261
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0011_SAMPLERET261
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::pair<int,int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0011_sampleret261', () => {
    try {
      const r = parsec.parseFunction(`std::pair<int,int> m2 sampleRet261();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet261');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0011_sampleret261 return convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0011_sampleret261 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0011_sampleret261 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0012_STD_PAIR_INT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0012_STD_PAIR_INT_INT_M2
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::pair<int,int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0012_std_pair_int_int_m2', () => {
    try {
      const r = parsec.parseClass(`class SampleClass261 { public: std::pair<int,int> m2 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass261');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0012_std_pair_int_int_m2 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_tuple_0012_std_pair_int_int_m2 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0012_std_pair_int_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0013_STD_PAIR_INT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0013_STD_PAIR_INT_INT_M2
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::pair<int,int>
   *            m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0013_std_pair_int_int_m2', () => {
    try {
      const r = parsec.parseFunction(`void pipeline261(std::pair<int,int> m2 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline261');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0013_std_pair_int_int_m2 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number]",
        "h2dts_convert_tuple_0013_std_pair_int_int_m2 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0013_std_pair_int_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0014_STD_PAIR_STD_STRING_INT_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0014_STD_PAIR_STD_STRING_INT_M3
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type
   *            std::pair<std::string,int> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0014_std_pair_std_string_int_m3', () => {
    try {
      const result = transTskey2Ckey('std::pair<std::string,int> m3');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_tuple_0014_std_pair_std_string_int_m3 convert output non-empty");
      assert.strictEqual(result, "[string, number]",
        "h2dts_convert_tuple_0014_std_pair_std_string_int_m3 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0014_std_pair_std_string_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0015_STD_PAIR_STD_STRING_INT_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0015_STD_PAIR_STD_STRING_INT_M3
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type
   *            std::pair<std::string,int> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0015_std_pair_std_string_int_m3', () => {
    try {
      const r = parsec.parseFunction(`void sample262(std::pair<std::string,int> m3 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample262');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0015_std_pair_std_string_int_m3 param convert output non-empty");
      assert.strictEqual(converted, "[string, number]",
        "h2dts_convert_tuple_0015_std_pair_std_string_int_m3 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0015_std_pair_std_string_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0016_SAMPLERET262
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0016_SAMPLERET262
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type
   *            std::pair<std::string,int> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0016_sampleret262', () => {
    try {
      const r = parsec.parseFunction(`std::pair<std::string,int> m3 sampleRet262();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet262');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0016_sampleret262 return convert output non-empty");
      assert.strictEqual(converted, "[string, number]", "h2dts_convert_tuple_0016_sampleret262 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0016_sampleret262 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0017_STD_PAIR_STD_STRING_INT_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0017_STD_PAIR_STD_STRING_INT_M3
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::pair<std::string,int>
   *            m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0017_std_pair_std_string_int_m3', () => {
    try {
      const r = parsec.parseClass(`class SampleClass262 { public: std::pair<std::string,int> m3 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass262');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0017_std_pair_std_string_int_m3 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_tuple_0017_std_pair_std_string_int_m3 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0017_std_pair_std_string_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0018_STD_PAIR_STD_STRING_INT_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0018_STD_PAIR_STD_STRING_INT_M3
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type
   *            std::pair<std::string,int> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0018_std_pair_std_string_int_m3', () => {
    try {
      const r = parsec.parseFunction(`void pipeline262(std::pair<std::string,int> m3 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline262');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0018_std_pair_std_string_int_m3 pipeline convert output non-empty");
      assert.strictEqual(converted, "[string, number]",
        "h2dts_convert_tuple_0018_std_pair_std_string_int_m3 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0018_std_pair_std_string_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0019_STD_TUPLE_INT_INT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0019_STD_TUPLE_INT_INT_INT_M0
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type
   *            std::tuple<int,int,int> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0019_std_tuple_int_int_int_m0', () => {
    try {
      const result = transTskey2Ckey('std::tuple<int,int,int> m0');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_tuple_0019_std_tuple_int_int_int_m0 convert output non-empty");
      assert.strictEqual(result, "[number, number, number]",
        "h2dts_convert_tuple_0019_std_tuple_int_int_int_m0 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0019_std_tuple_int_int_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0020_STD_TUPLE_INT_INT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0020_STD_TUPLE_INT_INT_INT_M0
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::tuple<int,int,int>
   *            m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0020_std_tuple_int_int_int_m0', () => {
    try {
      const r = parsec.parseFunction(`void sample263(std::tuple<int,int,int> m0 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample263');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0020_std_tuple_int_int_int_m0 param convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]",
        "h2dts_convert_tuple_0020_std_tuple_int_int_int_m0 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0020_std_tuple_int_int_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0021_SAMPLERET263
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0021_SAMPLERET263
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::tuple<int,int,int>
   *            m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0021_sampleret263', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<int,int,int> m0 sampleRet263();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet263');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0021_sampleret263 return convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]",
        "h2dts_convert_tuple_0021_sampleret263 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0021_sampleret263 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0022_STD_TUPLE_INT_INT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0022_STD_TUPLE_INT_INT_INT_M0
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::tuple<int,int,int> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0022_std_tuple_int_int_int_m0', () => {
    try {
      const r = parsec.parseClass(`class SampleClass263 { public: std::tuple<int,int,int> m0 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass263');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0022_std_tuple_int_int_int_m0 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_tuple_0022_std_tuple_int_int_int_m0 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0022_std_tuple_int_int_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0023_STD_TUPLE_INT_INT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0023_STD_TUPLE_INT_INT_INT_M0
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type
   *            std::tuple<int,int,int> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0023_std_tuple_int_int_int_m0', () => {
    try {
      const r = parsec.parseFunction(`void pipeline263(std::tuple<int,int,int> m0 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline263');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0023_std_tuple_int_int_int_m0 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]",
        "h2dts_convert_tuple_0023_std_tuple_int_int_int_m0 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0023_std_tuple_int_int_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0024_STD_TUPLE_STD_STRING_INT_B7DB3B
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0024_STD_TUPLE_STD_STRING_INT_B7DB3B
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type
   *            std::tuple<std::string,int,double> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0024_std_tuple_std_string_int_b7db3b', () => {
    try {
      const result = transTskey2Ckey('std::tuple<std::string,int,double> m1');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_tuple_0024_std_tuple_std_string_int_b7db3b convert output non-empty");
      assert.strictEqual(result, "[string, number, number]",
        "h2dts_convert_tuple_0024_std_tuple_std_string_int_b7db3b convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0024_std_tuple_std_string_int_b7db3b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0025_STD_TUPLE_STD_STRING_INT_B7DB3B
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0025_STD_TUPLE_STD_STRING_INT_B7DB3B
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type
   *            std::tuple<std::string,int,double> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0025_std_tuple_std_string_int_b7db3b', () => {
    try {
      const r = parsec.parseFunction(`void sample264(std::tuple<std::string,int,double> m1 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample264');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0025_std_tuple_std_string_int_b7db3b param convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]",
        "h2dts_convert_tuple_0025_std_tuple_std_string_int_b7db3b param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0025_std_tuple_std_string_int_b7db3b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0026_SAMPLERET264
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0026_SAMPLERET264
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type
   *            std::tuple<std::string,int,double> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0026_sampleret264', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<std::string,int,double> m1 sampleRet264();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet264');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0026_sampleret264 return convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]",
        "h2dts_convert_tuple_0026_sampleret264 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0026_sampleret264 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0027_STD_TUPLE_STD_STRING_INT_B7DB3B
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0027_STD_TUPLE_STD_STRING_INT_B7DB3B
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type
   *            std::tuple<std::string,int,double> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0027_std_tuple_std_string_int_b7db3b', () => {
    try {
      const r = parsec.parseClass(`class SampleClass264 { public: std::tuple<std::string,int,double> m1 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass264');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0027_std_tuple_std_string_int_b7db3b class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_tuple_0027_std_tuple_std_string_int_b7db3b class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0027_std_tuple_std_string_int_b7db3b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0028_STD_TUPLE_STD_STRING_INT_B7DB3B
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0028_STD_TUPLE_STD_STRING_INT_B7DB3B
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type
   *            std::tuple<std::string,int,double> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0028_std_tuple_std_string_int_b7db3b', () => {
    try {
      const r = parsec.parseFunction(`void pipeline264(std::tuple<std::string,int,double> m1 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline264');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0028_std_tuple_std_string_int_b7db3b pipeline convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]",
        "h2dts_convert_tuple_0028_std_tuple_std_string_int_b7db3b pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0028_std_tuple_std_string_int_b7db3b execution error: ${err}`);
    }
  });
});
