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
import { transTskey2Ckey } from '../../../gen/gendts';
import * as parsec from '../../../parse/parsec';

suite('Stability_H2DTS_CONVERT_TUPLE_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_TUPLE._Part01');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0001_STD_PAIR_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0001_STD_PAIR_INT_INT
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type
   *            std::pair<int,int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0001_std_pair_int_int', () => {
    try {
      const result = transTskey2Ckey('std::pair<int,int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_tuple_0001_std_pair_int_int convert output non-empty");
      assert.strictEqual(result, "[number, number]", "h2dts_convert_tuple_0001_std_pair_int_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0001_std_pair_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0002_STD_PAIR_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0002_STD_PAIR_INT_INT
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::pair<int,int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0002_std_pair_int_int', () => {
    try {
      const r = parsec.parseFunction(`void sample63(std::pair<int,int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample63');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0002_std_pair_int_int param convert output non-empty");
      assert.strictEqual(converted, "[number, number]",
        "h2dts_convert_tuple_0002_std_pair_int_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0002_std_pair_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0003_SAMPLERET63
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0003_SAMPLERET63
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::pair<int,int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0003_sampleret63', () => {
    try {
      const r = parsec.parseFunction(`std::pair<int,int> sampleRet63();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet63');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0003_sampleret63 return convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0003_sampleret63 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0003_sampleret63 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0004_STD_PAIR_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0004_STD_PAIR_INT_INT
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::pair<int,int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0004_std_pair_int_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass63 { public: std::pair<int,int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass63');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0004_std_pair_int_int class field convert output non-empty");
      assert.strictEqual(converted, "[number, number]",
        "h2dts_convert_tuple_0004_std_pair_int_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0004_std_pair_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0005_STD_PAIR_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0005_STD_PAIR_INT_INT
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::pair<int,int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0005_std_pair_int_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline63(std::pair<int,int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline63');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0005_std_pair_int_int pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number]",
        "h2dts_convert_tuple_0005_std_pair_int_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0005_std_pair_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0006_STD_PAIR_STD_STRING_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0006_STD_PAIR_STD_STRING_INT
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type
   *            std::pair<std::string,int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0006_std_pair_std_string_int', () => {
    try {
      const result = transTskey2Ckey('std::pair<std::string,int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_tuple_0006_std_pair_std_string_int convert output non-empty");
      assert.strictEqual(result, "[string, number]", "h2dts_convert_tuple_0006_std_pair_std_string_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0006_std_pair_std_string_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0007_STD_PAIR_STD_STRING_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0007_STD_PAIR_STD_STRING_INT
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type
   *            std::pair<std::string,int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0007_std_pair_std_string_int', () => {
    try {
      const r = parsec.parseFunction(`void sample64(std::pair<std::string,int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample64');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0007_std_pair_std_string_int param convert output non-empty");
      assert.strictEqual(converted, "[string, number]",
        "h2dts_convert_tuple_0007_std_pair_std_string_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0007_std_pair_std_string_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0008_SAMPLERET64
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0008_SAMPLERET64
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type
   *            std::pair<std::string,int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0008_sampleret64', () => {
    try {
      const r = parsec.parseFunction(`std::pair<std::string,int> sampleRet64();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet64');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0008_sampleret64 return convert output non-empty");
      assert.strictEqual(converted, "[string, number]", "h2dts_convert_tuple_0008_sampleret64 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0008_sampleret64 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0009_STD_PAIR_STD_STRING_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0009_STD_PAIR_STD_STRING_INT
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::pair<std::string,int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0009_std_pair_std_string_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass64 { public: std::pair<std::string,int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass64');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0009_std_pair_std_string_int class field convert output non-empty");
      assert.strictEqual(converted, "[string, number]",
        "h2dts_convert_tuple_0009_std_pair_std_string_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0009_std_pair_std_string_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0010_STD_PAIR_STD_STRING_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0010_STD_PAIR_STD_STRING_INT
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type
   *            std::pair<std::string,int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0010_std_pair_std_string_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline64(std::pair<std::string,int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline64');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0010_std_pair_std_string_int pipeline convert output non-empty");
      assert.strictEqual(converted, "[string, number]",
        "h2dts_convert_tuple_0010_std_pair_std_string_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0010_std_pair_std_string_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0011_STD_TUPLE_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0011_STD_TUPLE_INT_INT_INT
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type
   *            std::tuple<int,int,int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0011_std_tuple_int_int_int', () => {
    try {
      const result = transTskey2Ckey('std::tuple<int,int,int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_tuple_0011_std_tuple_int_int_int convert output non-empty");
      assert.strictEqual(result, "[number, number, number]",
        "h2dts_convert_tuple_0011_std_tuple_int_int_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0011_std_tuple_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0012_STD_TUPLE_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0012_STD_TUPLE_INT_INT_INT
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::tuple<int,int,int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0012_std_tuple_int_int_int', () => {
    try {
      const r = parsec.parseFunction(`void sample65(std::tuple<int,int,int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample65');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0012_std_tuple_int_int_int param convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]",
        "h2dts_convert_tuple_0012_std_tuple_int_int_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0012_std_tuple_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0013_SAMPLERET65
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0013_SAMPLERET65
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type
   *            std::tuple<int,int,int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0013_sampleret65', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<int,int,int> sampleRet65();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet65');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0013_sampleret65 return convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]",
        "h2dts_convert_tuple_0013_sampleret65 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0013_sampleret65 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0014_STD_TUPLE_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0014_STD_TUPLE_INT_INT_INT
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::tuple<int,int,int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0014_std_tuple_int_int_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass65 { public: std::tuple<int,int,int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass65');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0014_std_tuple_int_int_int class field convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]",
        "h2dts_convert_tuple_0014_std_tuple_int_int_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0014_std_tuple_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0015_STD_TUPLE_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0015_STD_TUPLE_INT_INT_INT
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type
   *            std::tuple<int,int,int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0015_std_tuple_int_int_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline65(std::tuple<int,int,int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline65');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0015_std_tuple_int_int_int pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]",
        "h2dts_convert_tuple_0015_std_tuple_int_int_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0015_std_tuple_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0016_STD_TUPLE_STD_STRING_INT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0016_STD_TUPLE_STD_STRING_INT_DOUBLE
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type
   *            std::tuple<std::string,int,double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0016_std_tuple_std_string_int_double', () => {
    try {
      const result = transTskey2Ckey('std::tuple<std::string,int,double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_tuple_0016_std_tuple_std_string_int_double convert output non-empty");
      assert.strictEqual(result, "[string, number, number]",
        "h2dts_convert_tuple_0016_std_tuple_std_string_int_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0016_std_tuple_std_string_int_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0017_STD_TUPLE_STD_STRING_INT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0017_STD_TUPLE_STD_STRING_INT_DOUBLE
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type
   *            std::tuple<std::string,int,double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0017_std_tuple_std_string_int_double', () => {
    try {
      const r = parsec.parseFunction(`void sample66(std::tuple<std::string,int,double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample66');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0017_std_tuple_std_string_int_double param convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]",
        "h2dts_convert_tuple_0017_std_tuple_std_string_int_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0017_std_tuple_std_string_int_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0018_SAMPLERET66
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0018_SAMPLERET66
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type
   *            std::tuple<std::string,int,double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0018_sampleret66', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<std::string,int,double> sampleRet66();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet66');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0018_sampleret66 return convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]",
        "h2dts_convert_tuple_0018_sampleret66 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0018_sampleret66 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0019_STD_TUPLE_STD_STRING_INT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0019_STD_TUPLE_STD_STRING_INT_DOUBLE
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type
   *            std::tuple<std::string,int,double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0019_std_tuple_std_string_int_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass66 { public: std::tuple<std::string,int,double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass66');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0019_std_tuple_std_string_int_double class field convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]",
        "h2dts_convert_tuple_0019_std_tuple_std_string_int_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0019_std_tuple_std_string_int_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0020_STD_TUPLE_STD_STRING_INT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0020_STD_TUPLE_STD_STRING_INT_DOUBLE
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type
   *            std::tuple<std::string,int,double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0020_std_tuple_std_string_int_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline66(std::tuple<std::string,int,double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline66');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0020_std_tuple_std_string_int_double pipeline convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]",
        "h2dts_convert_tuple_0020_std_tuple_std_string_int_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0020_std_tuple_std_string_int_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0021_STD_PAIR_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0021_STD_PAIR_DOUBLE_DOUBLE
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::pair<double,
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0021_std_pair_double_double', () => {
    try {
      const result = transTskey2Ckey('std::pair<double, double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_tuple_0021_std_pair_double_double convert output non-empty");
      assert.strictEqual(result, "[number, number]", "h2dts_convert_tuple_0021_std_pair_double_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0021_std_pair_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0022_STD_PAIR_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0022_STD_PAIR_DOUBLE_DOUBLE
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::pair<double,
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0022_std_pair_double_double', () => {
    try {
      const r = parsec.parseFunction(`void sample126(std::pair<double, double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample126');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0022_std_pair_double_double param convert output non-empty");
      assert.strictEqual(converted, "[number, number]",
        "h2dts_convert_tuple_0022_std_pair_double_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0022_std_pair_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0023_SAMPLERET126
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0023_SAMPLERET126
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::pair<double,
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0023_sampleret126', () => {
    try {
      const r = parsec.parseFunction(`std::pair<double, double> sampleRet126();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet126');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0023_sampleret126 return convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0023_sampleret126 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0023_sampleret126 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0024_STD_PAIR_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0024_STD_PAIR_DOUBLE_DOUBLE
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::pair<double, double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0024_std_pair_double_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass126 { public: std::pair<double, double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass126');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0024_std_pair_double_double class field convert output non-empty");
      assert.strictEqual(converted, "[number, number]",
        "h2dts_convert_tuple_0024_std_pair_double_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0024_std_pair_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0025_STD_PAIR_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0025_STD_PAIR_DOUBLE_DOUBLE
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::pair<double,
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0025_std_pair_double_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline126(std::pair<double, double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline126');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0025_std_pair_double_double pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number]",
        "h2dts_convert_tuple_0025_std_pair_double_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0025_std_pair_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0026_STD_PAIR_FLOAT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0026_STD_PAIR_FLOAT_FLOAT
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::pair<float,
   *            float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0026_std_pair_float_float', () => {
    try {
      const result = transTskey2Ckey('std::pair<float, float>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_tuple_0026_std_pair_float_float convert output non-empty");
      assert.strictEqual(result, "[number, number]", "h2dts_convert_tuple_0026_std_pair_float_float convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0026_std_pair_float_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0027_STD_PAIR_FLOAT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0027_STD_PAIR_FLOAT_FLOAT
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::pair<float, float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0027_std_pair_float_float', () => {
    try {
      const r = parsec.parseFunction(`void sample127(std::pair<float, float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample127');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0027_std_pair_float_float param convert output non-empty");
      assert.strictEqual(converted, "[number, number]",
        "h2dts_convert_tuple_0027_std_pair_float_float param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0027_std_pair_float_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0028_SAMPLERET127
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0028_SAMPLERET127
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::pair<float,
   *            float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0028_sampleret127', () => {
    try {
      const r = parsec.parseFunction(`std::pair<float, float> sampleRet127();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet127');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0028_sampleret127 return convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0028_sampleret127 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0028_sampleret127 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0029
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0029
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::pair<float, float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0029', () => {
    try {
      const r = parsec.parseClass(`class SampleClass127 { public: std::pair<float, float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass127');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0029 class field convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0029 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0029 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0030
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0030
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::pair<float,
   *            float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0030', () => {
    try {
      const r = parsec.parseFunction(`void pipeline127(std::pair<float, float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline127');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0030 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0030 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0030 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0031
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0031
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::pair<int,
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0031', () => {
    try {
      const result = transTskey2Ckey('std::pair<int, long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0031 convert output non-empty");
      assert.strictEqual(result, "[number, number]", "h2dts_convert_tuple_0031 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0031 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0032
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0032
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::pair<int, long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0032', () => {
    try {
      const r = parsec.parseFunction(`void sample128(std::pair<int, long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample128');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0032 param convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0032 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0032 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0033
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0033
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::pair<int, long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0033', () => {
    try {
      const r = parsec.parseFunction(`std::pair<int, long> sampleRet128();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet128');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0033 return convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0033 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0033 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0034
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0034
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::pair<int, long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0034', () => {
    try {
      const r = parsec.parseClass(`class SampleClass128 { public: std::pair<int, long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass128');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0034 class field convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0034 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0034 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0035
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0035
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::pair<int,
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0035', () => {
    try {
      const r = parsec.parseFunction(`void pipeline128(std::pair<int, long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline128');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0035 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0035 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0035 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0036
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0036
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::tuple<int,
   *            std::string, bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0036', () => {
    try {
      const result = transTskey2Ckey('std::tuple<int, std::string, bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0036 convert output non-empty");
      assert.strictEqual(result, "[number, string, boolean]", "h2dts_convert_tuple_0036 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0036 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0037
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0037
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::tuple<int,
   *            std::string, bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0037', () => {
    try {
      const r = parsec.parseFunction(`void sample129(std::tuple<int, std::string, bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample129');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0037 param convert output non-empty");
      assert.strictEqual(converted, "[number, string, boolean]", "h2dts_convert_tuple_0037 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0037 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0038
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0038
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::tuple<int,
   *            std::string, bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0038', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<int, std::string, bool> sampleRet129();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet129');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0038 return convert output non-empty");
      assert.strictEqual(converted, "[number, string, boolean]", "h2dts_convert_tuple_0038 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0038 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0039
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0039
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::tuple<int,
   *            std::string, bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0039', () => {
    try {
      const r = parsec.parseClass(`class SampleClass129 { public: std::tuple<int, std::string, bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass129');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0039 class field convert output non-empty");
      assert.strictEqual(converted, "[number, string, boolean]", "h2dts_convert_tuple_0039 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0039 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0040
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0040
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::tuple<int,
   *            std::string, bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0040', () => {
    try {
      const r = parsec.parseFunction(`void pipeline129(std::tuple<int, std::string, bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline129');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0040 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, string, boolean]", "h2dts_convert_tuple_0040 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0040 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0041
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0041
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::tuple<double,
   *            double, double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0041', () => {
    try {
      const result = transTskey2Ckey('std::tuple<double, double, double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0041 convert output non-empty");
      assert.strictEqual(result, "[number, number, number]", "h2dts_convert_tuple_0041 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0041 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0042
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0042
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::tuple<double,
   *            double, double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0042', () => {
    try {
      const r = parsec.parseFunction(`void sample130(std::tuple<double, double, double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample130');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0042 param convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0042 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0042 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0043
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0043
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::tuple<double,
   *            double, double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0043', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<double, double, double> sampleRet130();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet130');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0043 return convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0043 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0043 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0044
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0044
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::tuple<double, double,
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0044', () => {
    try {
      const r = parsec.parseClass(`class SampleClass130 { public: std::tuple<double, double, double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass130');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0044 class field convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0044 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0044 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0045
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0045
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::tuple<double,
   *            double, double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0045', () => {
    try {
      const r = parsec.parseFunction(`void pipeline130(std::tuple<double, double, double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline130');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0045 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0045 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0045 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0046
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0046
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::tuple<char,
   *            short, int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0046', () => {
    try {
      const result = transTskey2Ckey('std::tuple<char, short, int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0046 convert output non-empty");
      assert.strictEqual(result, "[string, number, number]", "h2dts_convert_tuple_0046 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0046 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0047
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0047
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::tuple<char, short,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0047', () => {
    try {
      const r = parsec.parseFunction(`void sample131(std::tuple<char, short, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample131');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0047 param convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]", "h2dts_convert_tuple_0047 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0047 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0048
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0048
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::tuple<char, short,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0048', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<char, short, int> sampleRet131();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet131');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0048 return convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]", "h2dts_convert_tuple_0048 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0048 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0049
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0049
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::tuple<char, short,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0049', () => {
    try {
      const r = parsec.parseClass(`class SampleClass131 { public: std::tuple<char, short, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass131');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0049 class field convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]", "h2dts_convert_tuple_0049 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0049 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0050
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0050
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::tuple<char,
   *            short, int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0050', () => {
    try {
      const r = parsec.parseFunction(`void pipeline131(std::tuple<char, short, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline131');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0050 pipeline convert output non-empty");
      assert.strictEqual(converted, "[string, number, number]", "h2dts_convert_tuple_0050 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0050 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0051
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0051
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type
   *            std::tuple<std::string, std::string, std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0051', () => {
    try {
      const result = transTskey2Ckey('std::tuple<std::string, std::string, std::string>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0051 convert output non-empty");
      assert.strictEqual(result, "[string, string, string]", "h2dts_convert_tuple_0051 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0051 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0052
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0052
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::tuple<std::string,
   *            std::string, std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0052', () => {
    try {
      const r = parsec.parseFunction(`void sample132(std::tuple<std::string, std::string, std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample132');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0052 param convert output non-empty");
      assert.strictEqual(converted, "[string, string, string]", "h2dts_convert_tuple_0052 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0052 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0053
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0053
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::tuple<std::string,
   *            std::string, std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0053', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<std::string, std::string, std::string> sampleRet132();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet132');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0053 return convert output non-empty");
      assert.strictEqual(converted, "[string, string, string]", "h2dts_convert_tuple_0053 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0053 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0054
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0054
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::tuple<std::string,
   *            std::string, std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0054', () => {
    try {
      const r = parsec.parseClass(`
        class SampleClass132 { public: std::tuple<std::string, std::string, std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass132');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0054 class field convert output non-empty");
      assert.strictEqual(converted, "[string, string, string]", "h2dts_convert_tuple_0054 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0054 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0055
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0055
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type
   *            std::tuple<std::string, std::string, std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0055', () => {
    try {
      const r = parsec.parseFunction(`void pipeline132(std::tuple<std::string, std::string, std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline132');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0055 pipeline convert output non-empty");
      assert.strictEqual(converted, "[string, string, string]", "h2dts_convert_tuple_0055 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0055 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0056
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0056
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::pair<int,
   *            std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0056', () => {
    try {
      const result = transTskey2Ckey('std::pair<int, std::string>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0056 convert output non-empty");
      assert.strictEqual(result, "[number, string]", "h2dts_convert_tuple_0056 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0056 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0057
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0057
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::pair<int,
   *            std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0057', () => {
    try {
      const r = parsec.parseFunction(`void sample157(std::pair<int, std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample157');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0057 param convert output non-empty");
      assert.strictEqual(converted, "[number, string]", "h2dts_convert_tuple_0057 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0057 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0058
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0058
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::pair<int,
   *            std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0058', () => {
    try {
      const r = parsec.parseFunction(`std::pair<int, std::string> sampleRet157();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet157');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0058 return convert output non-empty");
      assert.strictEqual(converted, "[number, string]", "h2dts_convert_tuple_0058 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0058 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0059
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0059
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::pair<int,
   *            std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0059', () => {
    try {
      const r = parsec.parseClass(`class SampleClass157 { public: std::pair<int, std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass157');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0059 class field convert output non-empty");
      assert.strictEqual(converted, "[number, string]", "h2dts_convert_tuple_0059 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0059 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0060
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0060
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::pair<int,
   *            std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0060', () => {
    try {
      const r = parsec.parseFunction(`void pipeline157(std::pair<int, std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline157');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0060 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, string]", "h2dts_convert_tuple_0060 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0060 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0061
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0061
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::tuple<int,
   *            float, double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0061', () => {
    try {
      const result = transTskey2Ckey('std::tuple<int, float, double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0061 convert output non-empty");
      assert.strictEqual(result, "[number, number, number]", "h2dts_convert_tuple_0061 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0061 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0062
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0062
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::tuple<int, float,
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0062', () => {
    try {
      const r = parsec.parseFunction(`void sample158(std::tuple<int, float, double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample158');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0062 param convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0062 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0062 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0063
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0063
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::tuple<int, float,
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0063', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<int, float, double> sampleRet158();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet158');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0063 return convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0063 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0063 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0064
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0064
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::tuple<int, float,
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0064', () => {
    try {
      const r = parsec.parseClass(`class SampleClass158 { public: std::tuple<int, float, double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass158');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0064 class field convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0064 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0064 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0065
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0065
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::tuple<int,
   *            float, double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0065', () => {
    try {
      const r = parsec.parseFunction(`void pipeline158(std::tuple<int, float, double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline158');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0065 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0065 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0065 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0066
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0066
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::pair<int,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0066', () => {
    try {
      const result = transTskey2Ckey('std::pair<int, int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0066 convert output non-empty");
      assert.strictEqual(result, "[number, number]", "h2dts_convert_tuple_0066 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0066 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0067
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0067
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::pair<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0067', () => {
    try {
      const r = parsec.parseFunction(`void sample173(std::pair<int, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample173');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0067 param convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0067 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0067 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0068
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0068
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::pair<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0068', () => {
    try {
      const r = parsec.parseFunction(`std::pair<int, int> sampleRet173();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet173');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0068 return convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0068 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0068 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0069
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0069
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::pair<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0069', () => {
    try {
      const r = parsec.parseClass(`class SampleClass173 { public: std::pair<int, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass173');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0069 class field convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0069 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0069 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0070
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0070
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::pair<int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0070', () => {
    try {
      const r = parsec.parseFunction(`void pipeline173(std::pair<int, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline173');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0070 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0070 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0070 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0071
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0071
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::tuple<int,
   *            int, int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0071', () => {
    try {
      const result = transTskey2Ckey('std::tuple<int, int, int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0071 convert output non-empty");
      assert.strictEqual(result, "[number, number, number]", "h2dts_convert_tuple_0071 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0071 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0072
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0072
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::tuple<int, int,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0072', () => {
    try {
      const r = parsec.parseFunction(`void sample174(std::tuple<int, int, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample174');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0072 param convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0072 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0072 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0073
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0073
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::tuple<int, int,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0073', () => {
    try {
      const r = parsec.parseFunction(`std::tuple<int, int, int> sampleRet174();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet174');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0073 return convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0073 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0073 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0074
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0074
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::tuple<int, int, int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0074', () => {
    try {
      const r = parsec.parseClass(`class SampleClass174 { public: std::tuple<int, int, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass174');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0074 class field convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0074 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0074 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0075
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0075
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::tuple<int, int,
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0075', () => {
    try {
      const r = parsec.parseFunction(`void pipeline174(std::tuple<int, int, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline174');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0075 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number, number]", "h2dts_convert_tuple_0075 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0075 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0076
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0076
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type std::pair<int,int>
   *            m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0076', () => {
    try {
      const result = transTskey2Ckey('std::pair<int,int> m1');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0076 convert output non-empty");
      assert.strictEqual(result, "[number, number]", "h2dts_convert_tuple_0076 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0076 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0077
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0077
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type std::pair<int,int> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0077', () => {
    try {
      const r = parsec.parseFunction(`void sample231(std::pair<int,int> m1 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample231');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0077 param convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0077 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0077 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0078
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0078
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type std::pair<int,int> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0078', () => {
    try {
      const r = parsec.parseFunction(`std::pair<int,int> m1 sampleRet231();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet231');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0078 return convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0078 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0078 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0079
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0079
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::pair<int,int> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0079', () => {
    try {
      const r = parsec.parseClass(`class SampleClass231 { public: std::pair<int,int> m1 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass231');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0079 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_tuple_0079 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0079 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0080
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0080
   * @tc.desc   Stability convert h2dts/tuple: parse-convert-gen pipeline; type std::pair<int,int>
   *            m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0080', () => {
    try {
      const r = parsec.parseFunction(`void pipeline231(std::pair<int,int> m1 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline231');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0080 pipeline convert output non-empty");
      assert.strictEqual(converted, "[number, number]", "h2dts_convert_tuple_0080 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0080 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0081
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0081
   * @tc.desc   Stability convert h2dts/tuple: baseline type-string convert; type
   *            std::pair<std::string,int> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0081', () => {
    try {
      const result = transTskey2Ckey('std::pair<std::string,int> m2');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_tuple_0081 convert output non-empty");
      assert.strictEqual(result, "[string, number]", "h2dts_convert_tuple_0081 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0081 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0082
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0082
   * @tc.desc   Stability convert h2dts/tuple: function-param convert; type
   *            std::pair<std::string,int> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0082', () => {
    try {
      const r = parsec.parseFunction(`void sample232(std::pair<std::string,int> m2 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample232');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0082 param convert output non-empty");
      assert.strictEqual(converted, "[string, number]", "h2dts_convert_tuple_0082 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0082 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0083
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0083
   * @tc.desc   Stability convert h2dts/tuple: function-return convert; type
   *            std::pair<std::string,int> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0083', () => {
    try {
      const r = parsec.parseFunction(`std::pair<std::string,int> m2 sampleRet232();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet232');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0083 return convert output non-empty");
      assert.strictEqual(converted, "[string, number]", "h2dts_convert_tuple_0083 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0083 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_TUPLE_0084
   * @tc.number SUB_NAPI_H2DTS_CONVERT_TUPLE_0084
   * @tc.desc   Stability convert h2dts/tuple: class-field convert; type std::pair<std::string,int>
   *            m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_tuple_0084', () => {
    try {
      const r = parsec.parseClass(`class SampleClass232 { public: std::pair<std::string,int> m2 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass232');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_tuple_0084 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_tuple_0084 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_tuple_0084 execution error: ${err}`);
    }
  });
});
