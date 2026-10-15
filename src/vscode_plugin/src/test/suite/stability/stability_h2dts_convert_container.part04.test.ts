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

suite('Stability_H2DTS_CONVERT_CONTAINER_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_CONTAINER._Part04');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0078_STD_VALARRAY_DOUBLE_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0078_STD_VALARRAY_DOUBLE_M1
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::valarray<double> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0078_std_valarray_double_m1', () => {
    try {
      const r = parsec.parseFunction(`void pipeline247(std::valarray<double> m1 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline247');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0078_std_valarray_double_m1 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0078_std_valarray_double_m1 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0078_std_valarray_double_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0079_STD_VECTOR_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0079_STD_VECTOR_INT_M2
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<int> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0079_std_vector_int_m2', () => {
    try {
      const result = transTskey2Ckey('std::vector<int> m2');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0079_std_vector_int_m2 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0079_std_vector_int_m2 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0079_std_vector_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0080_STD_VECTOR_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0080_STD_VECTOR_INT_M2
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0080_std_vector_int_m2', () => {
    try {
      const r = parsec.parseFunction(`void sample249(std::vector<int> m2 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample249');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0080_std_vector_int_m2 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0080_std_vector_int_m2 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0080_std_vector_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0081_SAMPLERET249
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0081_SAMPLERET249
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<int>
   *            m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0081_sampleret249', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int> m2 sampleRet249();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet249');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0081_sampleret249 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0081_sampleret249 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0081_sampleret249 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0082_STD_VECTOR_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0082_STD_VECTOR_INT_M2
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0082_std_vector_int_m2', () => {
    try {
      const r = parsec.parseClass(`class SampleClass249 { public: std::vector<int> m2 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass249');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0082_std_vector_int_m2 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0082_std_vector_int_m2 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0082_std_vector_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0083_STD_VECTOR_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0083_STD_VECTOR_INT_M2
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::vector<int>
   *            m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0083_std_vector_int_m2', () => {
    try {
      const r = parsec.parseFunction(`void pipeline249(std::vector<int> m2 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline249');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0083_std_vector_int_m2 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0083_std_vector_int_m2 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0083_std_vector_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0084_STD_VECTOR_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0084_STD_VECTOR_STD_STRING_M3
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<std::string> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0084_std_vector_std_string_m3', () => {
    try {
      const result = transTskey2Ckey('std::vector<std::string> m3');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0084_std_vector_std_string_m3 convert output non-empty");
      assert.strictEqual(result, "Array<string>",
        "h2dts_convert_container_0084_std_vector_std_string_m3 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0084_std_vector_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0085_STD_VECTOR_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0085_STD_VECTOR_STD_STRING_M3
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::vector<std::string> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0085_std_vector_std_string_m3', () => {
    try {
      const r = parsec.parseFunction(`void sample250(std::vector<std::string> m3 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample250');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0085_std_vector_std_string_m3 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0085_std_vector_std_string_m3 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0085_std_vector_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0086_SAMPLERET250
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0086_SAMPLERET250
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::vector<std::string> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0086_sampleret250', () => {
    try {
      const r = parsec.parseFunction(`std::vector<std::string> m3 sampleRet250();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet250');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0086_sampleret250 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0086_sampleret250 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0086_sampleret250 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0001_STD_VECTOR_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0001_STD_VECTOR_STD_STRING_M3
   * @tc.desc   Stability convert h2dts/container: class-field convert; type
   *            std::vector<std::string> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0001_std_vector_std_string_m3', () => {
    try {
      const r = parsec.parseClass(`class SampleClass250 { public: std::vector<std::string> m3 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass250');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0001_std_vector_std_string_m3 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_container_0001_std_vector_std_string_m3 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0001_std_vector_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0002_STD_VECTOR_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0002_STD_VECTOR_STD_STRING_M3
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<std::string> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0002_std_vector_std_string_m3', () => {
    try {
      const r = parsec.parseFunction(`void pipeline250(std::vector<std::string> m3 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline250');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0002_std_vector_std_string_m3 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0002_std_vector_std_string_m3 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0002_std_vector_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0003_STD_VECTOR_DOUBLE_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0003_STD_VECTOR_DOUBLE_M0
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<double> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0003_std_vector_double_m0', () => {
    try {
      const result = transTskey2Ckey('std::vector<double> m0');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0003_std_vector_double_m0 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0003_std_vector_double_m0 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0003_std_vector_double_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0004_STD_VECTOR_DOUBLE_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0004_STD_VECTOR_DOUBLE_M0
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<double>
   *            m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0004_std_vector_double_m0', () => {
    try {
      const r = parsec.parseFunction(`void sample251(std::vector<double> m0 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample251');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0004_std_vector_double_m0 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0004_std_vector_double_m0 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0004_std_vector_double_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0005_SAMPLERET251
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0005_SAMPLERET251
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<double>
   *            m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0005_sampleret251', () => {
    try {
      const r = parsec.parseFunction(`std::vector<double> m0 sampleRet251();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet251');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0005_sampleret251 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0005_sampleret251 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0005_sampleret251 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0006_STD_VECTOR_DOUBLE_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0006_STD_VECTOR_DOUBLE_M0
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<double> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0006_std_vector_double_m0', () => {
    try {
      const r = parsec.parseClass(`class SampleClass251 { public: std::vector<double> m0 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass251');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0006_std_vector_double_m0 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_container_0006_std_vector_double_m0 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0006_std_vector_double_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0007_STD_VECTOR_DOUBLE_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0007_STD_VECTOR_DOUBLE_M0
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<double> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0007_std_vector_double_m0', () => {
    try {
      const r = parsec.parseFunction(`void pipeline251(std::vector<double> m0 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline251');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0007_std_vector_double_m0 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0007_std_vector_double_m0 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0007_std_vector_double_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0008_STD_VECTOR_BOOL_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0008_STD_VECTOR_BOOL_M1
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<bool> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0008_std_vector_bool_m1', () => {
    try {
      const result = transTskey2Ckey('std::vector<bool> m1');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0008_std_vector_bool_m1 convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_container_0008_std_vector_bool_m1 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0008_std_vector_bool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0009_STD_VECTOR_BOOL_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0009_STD_VECTOR_BOOL_M1
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<bool>
   *            m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0009_std_vector_bool_m1', () => {
    try {
      const r = parsec.parseFunction(`void sample252(std::vector<bool> m1 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample252');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0009_std_vector_bool_m1 param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_container_0009_std_vector_bool_m1 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0009_std_vector_bool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0010_SAMPLERET252
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0010_SAMPLERET252
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<bool>
   *            m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0010_sampleret252', () => {
    try {
      const r = parsec.parseFunction(`std::vector<bool> m1 sampleRet252();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet252');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0010_sampleret252 return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_container_0010_sampleret252 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0010_sampleret252 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0011_STD_VECTOR_BOOL_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0011_STD_VECTOR_BOOL_M1
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<bool> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0011_std_vector_bool_m1', () => {
    try {
      const r = parsec.parseClass(`class SampleClass252 { public: std::vector<bool> m1 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass252');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0011_std_vector_bool_m1 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_container_0011_std_vector_bool_m1 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0011_std_vector_bool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0012_STD_VECTOR_BOOL_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0012_STD_VECTOR_BOOL_M1
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<bool> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0012_std_vector_bool_m1', () => {
    try {
      const r = parsec.parseFunction(`void pipeline252(std::vector<bool> m1 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline252');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0012_std_vector_bool_m1 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_container_0012_std_vector_bool_m1 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0012_std_vector_bool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0013_STD_LIST_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0013_STD_LIST_INT_M2
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type std::list<int>
   *            m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0013_std_list_int_m2', () => {
    try {
      const result = transTskey2Ckey('std::list<int> m2');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0013_std_list_int_m2 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0013_std_list_int_m2 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0013_std_list_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0014_STD_LIST_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0014_STD_LIST_INT_M2
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::list<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0014_std_list_int_m2', () => {
    try {
      const r = parsec.parseFunction(`void sample257(std::list<int> m2 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample257');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0014_std_list_int_m2 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0014_std_list_int_m2 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0014_std_list_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0015_SAMPLERET257
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0015_SAMPLERET257
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::list<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0015_sampleret257', () => {
    try {
      const r = parsec.parseFunction(`std::list<int> m2 sampleRet257();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet257');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0015_sampleret257 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0015_sampleret257 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0015_sampleret257 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0016_STD_LIST_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0016_STD_LIST_INT_M2
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::list<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0016_std_list_int_m2', () => {
    try {
      const r = parsec.parseClass(`class SampleClass257 { public: std::list<int> m2 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass257');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0016_std_list_int_m2 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0016_std_list_int_m2 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0016_std_list_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0017_STD_LIST_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0017_STD_LIST_INT_M2
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::list<int>
   *            m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0017_std_list_int_m2', () => {
    try {
      const r = parsec.parseFunction(`void pipeline257(std::list<int> m2 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline257');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0017_std_list_int_m2 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0017_std_list_int_m2 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0017_std_list_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0018_STD_LIST_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0018_STD_LIST_STD_STRING_M3
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::list<std::string> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0018_std_list_std_string_m3', () => {
    try {
      const result = transTskey2Ckey('std::list<std::string> m3');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0018_std_list_std_string_m3 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_container_0018_std_list_std_string_m3 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0018_std_list_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0019_STD_LIST_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0019_STD_LIST_STD_STRING_M3
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::list<std::string> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0019_std_list_std_string_m3', () => {
    try {
      const r = parsec.parseFunction(`void sample258(std::list<std::string> m3 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample258');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0019_std_list_std_string_m3 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0019_std_list_std_string_m3 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0019_std_list_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0020_SAMPLERET258
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0020_SAMPLERET258
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::list<std::string> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0020_sampleret258', () => {
    try {
      const r = parsec.parseFunction(`std::list<std::string> m3 sampleRet258();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet258');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0020_sampleret258 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0020_sampleret258 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0020_sampleret258 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0021_STD_LIST_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0021_STD_LIST_STD_STRING_M3
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::list<std::string>
   *            m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0021_std_list_std_string_m3', () => {
    try {
      const r = parsec.parseClass(`class SampleClass258 { public: std::list<std::string> m3 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass258');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0021_std_list_std_string_m3 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_container_0021_std_list_std_string_m3 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0021_std_list_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0022_STD_LIST_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0022_STD_LIST_STD_STRING_M3
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::list<std::string> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0022_std_list_std_string_m3', () => {
    try {
      const r = parsec.parseFunction(`void pipeline258(std::list<std::string> m3 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline258');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0022_std_list_std_string_m3 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0022_std_list_std_string_m3 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0022_std_list_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0023_STD_DEQUE_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0023_STD_DEQUE_INT_M0
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::deque<int> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0023_std_deque_int_m0', () => {
    try {
      const result = transTskey2Ckey('std::deque<int> m0');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0023_std_deque_int_m0 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0023_std_deque_int_m0 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0023_std_deque_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0024_STD_DEQUE_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0024_STD_DEQUE_INT_M0
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::deque<int> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0024_std_deque_int_m0', () => {
    try {
      const r = parsec.parseFunction(`void sample259(std::deque<int> m0 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample259');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0024_std_deque_int_m0 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0024_std_deque_int_m0 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0024_std_deque_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0025_SAMPLERET259
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0025_SAMPLERET259
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::deque<int> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0025_sampleret259', () => {
    try {
      const r = parsec.parseFunction(`std::deque<int> m0 sampleRet259();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet259');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0025_sampleret259 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0025_sampleret259 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0025_sampleret259 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0026_STD_DEQUE_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0026_STD_DEQUE_INT_M0
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::deque<int> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0026_std_deque_int_m0', () => {
    try {
      const r = parsec.parseClass(`class SampleClass259 { public: std::deque<int> m0 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass259');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0026_std_deque_int_m0 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0026_std_deque_int_m0 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0026_std_deque_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0027_STD_DEQUE_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0027_STD_DEQUE_INT_M0
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::deque<int>
   *            m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0027_std_deque_int_m0', () => {
    try {
      const r = parsec.parseFunction(`void pipeline259(std::deque<int> m0 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline259');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0027_std_deque_int_m0 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0027_std_deque_int_m0 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0027_std_deque_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0028_STD_DEQUE_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0028_STD_DEQUE_STD_STRING_M1
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::deque<std::string> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0028_std_deque_std_string_m1', () => {
    try {
      const result = transTskey2Ckey('std::deque<std::string> m1');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0028_std_deque_std_string_m1 convert output non-empty");
      assert.strictEqual(result, "Array<string>",
        "h2dts_convert_container_0028_std_deque_std_string_m1 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0028_std_deque_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0029_STD_DEQUE_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0029_STD_DEQUE_STD_STRING_M1
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::deque<std::string> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0029_std_deque_std_string_m1', () => {
    try {
      const r = parsec.parseFunction(`void sample260(std::deque<std::string> m1 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample260');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0029_std_deque_std_string_m1 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0029_std_deque_std_string_m1 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0029_std_deque_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0030_SAMPLERET260
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0030_SAMPLERET260
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::deque<std::string> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0030_sampleret260', () => {
    try {
      const r = parsec.parseFunction(`std::deque<std::string> m1 sampleRet260();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet260');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0030_sampleret260 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0030_sampleret260 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0030_sampleret260 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0031_STD_DEQUE_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0031_STD_DEQUE_STD_STRING_M1
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::deque<std::string>
   *            m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0031_std_deque_std_string_m1', () => {
    try {
      const r = parsec.parseClass(`class SampleClass260 { public: std::deque<std::string> m1 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass260');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0031_std_deque_std_string_m1 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_container_0031_std_deque_std_string_m1 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0031_std_deque_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0032_STD_DEQUE_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0032_STD_DEQUE_STD_STRING_M1
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::deque<std::string> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0032_std_deque_std_string_m1', () => {
    try {
      const r = parsec.parseFunction(`void pipeline260(std::deque<std::string> m1 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline260');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0032_std_deque_std_string_m1 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0032_std_deque_std_string_m1 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0032_std_deque_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0033_STD_QUEUE_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0033_STD_QUEUE_INT_M2
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::queue<int> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0033_std_queue_int_m2', () => {
    try {
      const result = transTskey2Ckey('std::queue<int> m2');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0033_std_queue_int_m2 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0033_std_queue_int_m2 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0033_std_queue_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0034_STD_QUEUE_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0034_STD_QUEUE_INT_M2
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::queue<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0034_std_queue_int_m2', () => {
    try {
      const r = parsec.parseFunction(`void sample265(std::queue<int> m2 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample265');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0034_std_queue_int_m2 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0034_std_queue_int_m2 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0034_std_queue_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0035_SAMPLERET265
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0035_SAMPLERET265
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::queue<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0035_sampleret265', () => {
    try {
      const r = parsec.parseFunction(`std::queue<int> m2 sampleRet265();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet265');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0035_sampleret265 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0035_sampleret265 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0035_sampleret265 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0036_STD_QUEUE_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0036_STD_QUEUE_INT_M2
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::queue<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0036_std_queue_int_m2', () => {
    try {
      const r = parsec.parseClass(`class SampleClass265 { public: std::queue<int> m2 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass265');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0036_std_queue_int_m2 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0036_std_queue_int_m2 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0036_std_queue_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0037_STD_QUEUE_INT_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0037_STD_QUEUE_INT_M2
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::queue<int>
   *            m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0037_std_queue_int_m2', () => {
    try {
      const r = parsec.parseFunction(`void pipeline265(std::queue<int> m2 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline265');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0037_std_queue_int_m2 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0037_std_queue_int_m2 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0037_std_queue_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0038_STD_STACK_INT_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0038_STD_STACK_INT_M3
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::stack<int> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0038_std_stack_int_m3', () => {
    try {
      const result = transTskey2Ckey('std::stack<int> m3');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0038_std_stack_int_m3 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0038_std_stack_int_m3 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0038_std_stack_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0039_STD_STACK_INT_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0039_STD_STACK_INT_M3
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::stack<int> m3;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0039_std_stack_int_m3', () => {
    try {
      const r = parsec.parseFunction(`void sample266(std::stack<int> m3 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample266');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0039_std_stack_int_m3 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0039_std_stack_int_m3 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0039_std_stack_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0040_SAMPLERET266
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0040_SAMPLERET266
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::stack<int> m3;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0040_sampleret266', () => {
    try {
      const r = parsec.parseFunction(`std::stack<int> m3 sampleRet266();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet266');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0040_sampleret266 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0040_sampleret266 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0040_sampleret266 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0041_STD_STACK_INT_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0041_STD_STACK_INT_M3
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::stack<int> m3;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0041_std_stack_int_m3', () => {
    try {
      const r = parsec.parseClass(`class SampleClass266 { public: std::stack<int> m3 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass266');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0041_std_stack_int_m3 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0041_std_stack_int_m3 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0041_std_stack_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0042_STD_STACK_INT_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0042_STD_STACK_INT_M3
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::stack<int>
   *            m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0042_std_stack_int_m3', () => {
    try {
      const r = parsec.parseFunction(`void pipeline266(std::stack<int> m3 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline266');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0042_std_stack_int_m3 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0042_std_stack_int_m3 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0042_std_stack_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0043_STD_PRIORITY_QUEUE_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0043_STD_PRIORITY_QUEUE_INT_M0
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::priority_queue<int> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0043_std_priority_queue_int_m0', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<int> m0');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0043_std_priority_queue_int_m0 convert output non-empty");
      assert.strictEqual(result, "Array<number>",
        "h2dts_convert_container_0043_std_priority_queue_int_m0 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0043_std_priority_queue_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0044_STD_PRIORITY_QUEUE_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0044_STD_PRIORITY_QUEUE_INT_M0
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::priority_queue<int> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0044_std_priority_queue_int_m0', () => {
    try {
      const r = parsec.parseFunction(`void sample267(std::priority_queue<int> m0 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample267');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0044_std_priority_queue_int_m0 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0044_std_priority_queue_int_m0 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0044_std_priority_queue_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0045_SAMPLERET267
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0045_SAMPLERET267
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::priority_queue<int> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0045_sampleret267', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<int> m0 sampleRet267();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet267');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0045_sampleret267 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0045_sampleret267 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0045_sampleret267 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0046_STD_PRIORITY_QUEUE_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0046_STD_PRIORITY_QUEUE_INT_M0
   * @tc.desc   Stability convert h2dts/container: class-field convert; type
   *            std::priority_queue<int> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0046_std_priority_queue_int_m0', () => {
    try {
      const r = parsec.parseClass(`class SampleClass267 { public: std::priority_queue<int> m0 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass267');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0046_std_priority_queue_int_m0 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_container_0046_std_priority_queue_int_m0 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0046_std_priority_queue_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0047_STD_PRIORITY_QUEUE_INT_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0047_STD_PRIORITY_QUEUE_INT_M0
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::priority_queue<int> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0047_std_priority_queue_int_m0', () => {
    try {
      const r = parsec.parseFunction(`void pipeline267(std::priority_queue<int> m0 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline267');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0047_std_priority_queue_int_m0 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0047_std_priority_queue_int_m0 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0047_std_priority_queue_int_m0 execution error: ${err}`);
    }
  });
});
