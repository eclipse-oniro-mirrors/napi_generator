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

suite('Stability_H2DTS_CONVERT_CONTAINER_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_CONTAINER._Part03');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0081_STD_VECTOR_UNSIGNED_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0081_STD_VECTOR_UNSIGNED_INT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<unsigned
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0081_std_vector_unsigned_int', () => {
    try {
      const r = parsec.parseFunction(`void sample196(std::vector<unsigned int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample196');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0081_std_vector_unsigned_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0081_std_vector_unsigned_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0081_std_vector_unsigned_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0082_SAMPLERET196
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0082_SAMPLERET196
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::vector<unsigned int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0082_sampleret196', () => {
    try {
      const r = parsec.parseFunction(`std::vector<unsigned int> sampleRet196();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet196');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0082_sampleret196 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0082_sampleret196 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0082_sampleret196 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0083_STD_VECTOR_UNSIGNED_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0083_STD_VECTOR_UNSIGNED_INT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<unsigned
   *            int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0083_std_vector_unsigned_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass196 { public: std::vector<unsigned int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass196');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0083_std_vector_unsigned_int class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_container_0083_std_vector_unsigned_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0083_std_vector_unsigned_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0084_STD_VECTOR_UNSIGNED_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0084_STD_VECTOR_UNSIGNED_INT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<unsigned int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0084_std_vector_unsigned_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline196(std::vector<unsigned int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline196');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0084_std_vector_unsigned_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0084_std_vector_unsigned_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0084_std_vector_unsigned_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0085_STD_LIST_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0085_STD_LIST_LONG_LONG
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type std::list<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0085_std_list_long_long', () => {
    try {
      const result = transTskey2Ckey('std::list<long long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0085_std_list_long_long convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0085_std_list_long_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0085_std_list_long_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0086_STD_LIST_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0086_STD_LIST_LONG_LONG
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::list<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0086_std_list_long_long', () => {
    try {
      const r = parsec.parseFunction(`void sample197(std::list<long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample197');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0086_std_list_long_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0086_std_list_long_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0086_std_list_long_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0001_SAMPLERET197
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0001_SAMPLERET197
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::list<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0001_sampleret197', () => {
    try {
      const r = parsec.parseFunction(`std::list<long long> sampleRet197();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet197');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0001_sampleret197 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0001_sampleret197 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0001_sampleret197 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0002_STD_LIST_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0002_STD_LIST_LONG_LONG
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::list<long long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0002_std_list_long_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass197 { public: std::list<long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass197');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0002_std_list_long_long class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_container_0002_std_list_long_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0002_std_list_long_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0003_STD_LIST_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0003_STD_LIST_LONG_LONG
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::list<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0003_std_list_long_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline197(std::list<long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline197');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0003_std_list_long_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0003_std_list_long_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0003_std_list_long_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0004_STD_VECTOR_INT_CONST_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0004_STD_VECTOR_INT_CONST_ITERATOR
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<int>::const_iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0004_std_vector_int_const_iterator', () => {
    try {
      const result = transTskey2Ckey('std::vector<int>::const_iterator');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0004_std_vector_int_const_iterator convert output non-empty");
      assert.strictEqual(result, "Array<number>",
        "h2dts_convert_container_0004_std_vector_int_const_iterator convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0004_std_vector_int_const_iterator execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0005_STD_VECTOR_INT_CONST_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0005_STD_VECTOR_INT_CONST_ITERATOR
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::vector<int>::const_iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0005_std_vector_int_const_iterator', () => {
    try {
      const r = parsec.parseFunction(`void sample199(std::vector<int>::const_iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample199');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0005_std_vector_int_const_iterator param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0005_std_vector_int_const_iterator param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0005_std_vector_int_const_iterator execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0006_SAMPLERET199
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0006_SAMPLERET199
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::vector<int>::const_iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0006_sampleret199', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int>::const_iterator sampleRet199();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet199');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0006_sampleret199 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0006_sampleret199 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0006_sampleret199 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0007_STD_VECTOR_INT_CONST_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0007_STD_VECTOR_INT_CONST_ITERATOR
   * @tc.desc   Stability convert h2dts/container: class-field convert; type
   *            std::vector<int>::const_iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0007_std_vector_int_const_iterator', () => {
    try {
      const r = parsec.parseClass(`class SampleClass199 { public: std::vector<int>::const_iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass199');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0007_std_vector_int_const_iterator class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_container_0007_std_vector_int_const_iterator class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0007_std_vector_int_const_iterator execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0008_STD_VECTOR_INT_CONST_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0008_STD_VECTOR_INT_CONST_ITERATOR
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<int>::const_iterator; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0008_std_vector_int_const_iterator', () => {
    try {
      const r = parsec.parseFunction(`void pipeline199(std::vector<int>::const_iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline199');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0008_std_vector_int_const_iterator pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0008_std_vector_int_const_iterator pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0008_std_vector_int_const_iterator execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0009_STD_DEQUE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0009_STD_DEQUE
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type std::deque;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0009_std_deque', () => {
    try {
      const result = transTskey2Ckey('std::deque');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0009_std_deque convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_container_0009_std_deque convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0009_std_deque execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0010_STD_DEQUE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0010_STD_DEQUE
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::deque;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0010_std_deque', () => {
    try {
      const r = parsec.parseFunction(`void sample214(std::deque p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample214');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0010_std_deque param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0010_std_deque param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0010_std_deque execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0011_SAMPLERET214
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0011_SAMPLERET214
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::deque;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0011_sampleret214', () => {
    try {
      const r = parsec.parseFunction(`std::deque sampleRet214();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet214');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0011_sampleret214 return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0011_sampleret214 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0011_sampleret214 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0012_STD_DEQUE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0012_STD_DEQUE
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::deque; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0012_std_deque', () => {
    try {
      const r = parsec.parseClass(`class SampleClass214 { public: std::deque field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass214');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0012_std_deque class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0012_std_deque class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0012_std_deque execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0013_STD_DEQUE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0013_STD_DEQUE
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::deque;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0013_std_deque', () => {
    try {
      const r = parsec.parseFunction(`void pipeline214(std::deque p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline214');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0013_std_deque pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0013_std_deque pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0013_std_deque execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0014_STD_VECTOR_INT_V
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0014_STD_VECTOR_INT_V
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<int>* v; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0014_std_vector_int_v', () => {
    try {
      const result = transTskey2Ckey('std::vector<int>* v');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0014_std_vector_int_v convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0014_std_vector_int_v convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0014_std_vector_int_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0015_STD_VECTOR_INT_V
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0015_STD_VECTOR_INT_V
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<int>* v;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0015_std_vector_int_v', () => {
    try {
      const r = parsec.parseFunction(`void sample216(std::vector<int>* v p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample216');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0015_std_vector_int_v param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0015_std_vector_int_v param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0015_std_vector_int_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0016_SAMPLERET216
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0016_SAMPLERET216
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<int>*
   *            v; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0016_sampleret216', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int>* v sampleRet216();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet216');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0016_sampleret216 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0016_sampleret216 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0016_sampleret216 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0017_STD_VECTOR_INT_V
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0017_STD_VECTOR_INT_V
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<int>* v;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0017_std_vector_int_v', () => {
    try {
      const r = parsec.parseClass(`class SampleClass216 { public: std::vector<int>* v field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass216');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0017_std_vector_int_v class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0017_std_vector_int_v class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0017_std_vector_int_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0018_STD_VECTOR_INT_V
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0018_STD_VECTOR_INT_V
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<int>* v; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0018_std_vector_int_v', () => {
    try {
      const r = parsec.parseFunction(`void pipeline216(std::vector<int>* v p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline216');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0018_std_vector_int_v pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0018_std_vector_int_v pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0018_std_vector_int_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0019_STD_VECTOR_INT_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0019_STD_VECTOR_INT_M1
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<int> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0019_std_vector_int_m1', () => {
    try {
      const result = transTskey2Ckey('std::vector<int> m1');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0019_std_vector_int_m1 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0019_std_vector_int_m1 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0019_std_vector_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0020_STD_VECTOR_INT_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0020_STD_VECTOR_INT_M1
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<int> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0020_std_vector_int_m1', () => {
    try {
      const r = parsec.parseFunction(`void sample219(std::vector<int> m1 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample219');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0020_std_vector_int_m1 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0020_std_vector_int_m1 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0020_std_vector_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0021_SAMPLERET219
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0021_SAMPLERET219
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<int>
   *            m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0021_sampleret219', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int> m1 sampleRet219();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet219');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0021_sampleret219 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0021_sampleret219 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0021_sampleret219 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0022_STD_VECTOR_INT_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0022_STD_VECTOR_INT_M1
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<int> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0022_std_vector_int_m1', () => {
    try {
      const r = parsec.parseClass(`class SampleClass219 { public: std::vector<int> m1 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass219');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0022_std_vector_int_m1 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_container_0022_std_vector_int_m1 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0022_std_vector_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0023_STD_VECTOR_INT_M1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0023_STD_VECTOR_INT_M1
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::vector<int>
   *            m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0023_std_vector_int_m1', () => {
    try {
      const r = parsec.parseFunction(`void pipeline219(std::vector<int> m1 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline219');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0023_std_vector_int_m1 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0023_std_vector_int_m1 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0023_std_vector_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0024_STD_VECTOR_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0024_STD_VECTOR_STD_STRING_M2
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<std::string> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0024_std_vector_std_string_m2', () => {
    try {
      const result = transTskey2Ckey('std::vector<std::string> m2');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0024_std_vector_std_string_m2 convert output non-empty");
      assert.strictEqual(result, "Array<string>",
        "h2dts_convert_container_0024_std_vector_std_string_m2 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0024_std_vector_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0025_STD_VECTOR_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0025_STD_VECTOR_STD_STRING_M2
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::vector<std::string> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0025_std_vector_std_string_m2', () => {
    try {
      const r = parsec.parseFunction(`void sample220(std::vector<std::string> m2 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample220');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0025_std_vector_std_string_m2 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0025_std_vector_std_string_m2 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0025_std_vector_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0026_SAMPLERET220
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0026_SAMPLERET220
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::vector<std::string> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0026_sampleret220', () => {
    try {
      const r = parsec.parseFunction(`std::vector<std::string> m2 sampleRet220();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet220');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0026_sampleret220 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0026_sampleret220 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0026_sampleret220 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0027_STD_VECTOR_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0027_STD_VECTOR_STD_STRING_M2
   * @tc.desc   Stability convert h2dts/container: class-field convert; type
   *            std::vector<std::string> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0027_std_vector_std_string_m2', () => {
    try {
      const r = parsec.parseClass(`class SampleClass220 { public: std::vector<std::string> m2 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass220');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0027_std_vector_std_string_m2 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_container_0027_std_vector_std_string_m2 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0027_std_vector_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0028_STD_VECTOR_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0028_STD_VECTOR_STD_STRING_M2
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<std::string> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0028_std_vector_std_string_m2', () => {
    try {
      const r = parsec.parseFunction(`void pipeline220(std::vector<std::string> m2 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline220');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0028_std_vector_std_string_m2 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0028_std_vector_std_string_m2 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0028_std_vector_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0029_STD_VECTOR_DOUBLE_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0029_STD_VECTOR_DOUBLE_M3
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<double> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0029_std_vector_double_m3', () => {
    try {
      const result = transTskey2Ckey('std::vector<double> m3');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0029_std_vector_double_m3 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0029_std_vector_double_m3 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0029_std_vector_double_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0030_STD_VECTOR_DOUBLE_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0030_STD_VECTOR_DOUBLE_M3
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<double>
   *            m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0030_std_vector_double_m3', () => {
    try {
      const r = parsec.parseFunction(`void sample221(std::vector<double> m3 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample221');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0030_std_vector_double_m3 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0030_std_vector_double_m3 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0030_std_vector_double_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0031_SAMPLERET221
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0031_SAMPLERET221
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<double>
   *            m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0031_sampleret221', () => {
    try {
      const r = parsec.parseFunction(`std::vector<double> m3 sampleRet221();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet221');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0031_sampleret221 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0031_sampleret221 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0031_sampleret221 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0032_STD_VECTOR_DOUBLE_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0032_STD_VECTOR_DOUBLE_M3
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<double> m3;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0032_std_vector_double_m3', () => {
    try {
      const r = parsec.parseClass(`class SampleClass221 { public: std::vector<double> m3 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass221');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0032_std_vector_double_m3 class field convert output non-empty");
      assert.strictEqual(converted, "any",
        "h2dts_convert_container_0032_std_vector_double_m3 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0032_std_vector_double_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0033_STD_VECTOR_DOUBLE_M3
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0033_STD_VECTOR_DOUBLE_M3
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<double> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0033_std_vector_double_m3', () => {
    try {
      const r = parsec.parseFunction(`void pipeline221(std::vector<double> m3 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline221');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0033_std_vector_double_m3 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0033_std_vector_double_m3 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0033_std_vector_double_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0034_STD_VECTOR_BOOL_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0034_STD_VECTOR_BOOL_M0
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<bool> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0034_std_vector_bool_m0', () => {
    try {
      const result = transTskey2Ckey('std::vector<bool> m0');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0034_std_vector_bool_m0 convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_container_0034_std_vector_bool_m0 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0034_std_vector_bool_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0035_STD_VECTOR_BOOL_M0
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0035_STD_VECTOR_BOOL_M0
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<bool>
   *            m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0035_std_vector_bool_m0', () => {
    try {
      const r = parsec.parseFunction(`void sample222(std::vector<bool> m0 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample222');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0035_std_vector_bool_m0 param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_container_0035_std_vector_bool_m0 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0035_std_vector_bool_m0 execution error: ${err}`);
    }
