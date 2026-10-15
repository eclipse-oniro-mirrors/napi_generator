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

suite('Stability_H2DTS_CONVERT_CONTAINER_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_CONTAINER._Part01');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0001_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0001_STD_VECTOR_INT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0001_std_vector_int', () => {
    try {
      const result = transTskey2Ckey('std::vector<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0001_std_vector_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0001_std_vector_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0001_std_vector_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0002_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0002_STD_VECTOR_INT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0002_std_vector_int', () => {
    try {
      const r = parsec.parseFunction(`void sample17(std::vector<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample17');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0002_std_vector_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0002_std_vector_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0002_std_vector_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0003_SAMPLERET17
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0003_SAMPLERET17
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0003_sampleret17', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int> sampleRet17();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet17');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0003_sampleret17 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0003_sampleret17 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0003_sampleret17 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0004_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0004_STD_VECTOR_INT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0004_std_vector_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass17 { public: std::vector<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass17');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0004_std_vector_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0004_std_vector_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0004_std_vector_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0005_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0005_STD_VECTOR_INT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0005_std_vector_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline17(std::vector<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline17');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0005_std_vector_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0005_std_vector_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0005_std_vector_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0006_STD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0006_STD_LIST_DOUBLE
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::list<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0006_std_list_double', () => {
    try {
      const result = transTskey2Ckey('std::list<double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0006_std_list_double convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0006_std_list_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0006_std_list_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0007_STD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0007_STD_LIST_DOUBLE
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::list<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0007_std_list_double', () => {
    try {
      const r = parsec.parseFunction(`void sample20(std::list<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample20');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0007_std_list_double param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0007_std_list_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0007_std_list_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0008_SAMPLERET20
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0008_SAMPLERET20
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::list<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0008_sampleret20', () => {
    try {
      const r = parsec.parseFunction(`std::list<double> sampleRet20();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet20');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0008_sampleret20 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0008_sampleret20 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0008_sampleret20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0009_STD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0009_STD_LIST_DOUBLE
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::list<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0009_std_list_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass20 { public: std::list<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass20');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0009_std_list_double class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0009_std_list_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0009_std_list_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0010_STD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0010_STD_LIST_DOUBLE
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::list<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0010_std_list_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline20(std::list<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline20');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0010_std_list_double pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0010_std_list_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0010_std_list_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0011_STD_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0011_STD_QUEUE_INT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0011_std_queue_int', () => {
    try {
      const result = transTskey2Ckey('std::queue<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0011_std_queue_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0011_std_queue_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0011_std_queue_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0012_STD_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0012_STD_QUEUE_INT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::queue<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0012_std_queue_int', () => {
    try {
      const r = parsec.parseFunction(`void sample36(std::queue<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample36');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0012_std_queue_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0012_std_queue_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0012_std_queue_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0013_SAMPLERET36
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0013_SAMPLERET36
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::queue<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0013_sampleret36', () => {
    try {
      const r = parsec.parseFunction(`std::queue<int> sampleRet36();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet36');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0013_sampleret36 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0013_sampleret36 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0013_sampleret36 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0014_STD_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0014_STD_QUEUE_INT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::queue<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0014_std_queue_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass36 { public: std::queue<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass36');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0014_std_queue_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0014_std_queue_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0014_std_queue_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0015_STD_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0015_STD_QUEUE_INT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::queue<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0015_std_queue_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline36(std::queue<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline36');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0015_std_queue_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0015_std_queue_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0015_std_queue_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0016_STD_STACK_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0016_STD_STACK_INT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::stack<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0016_std_stack_int', () => {
    try {
      const result = transTskey2Ckey('std::stack<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0016_std_stack_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0016_std_stack_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0016_std_stack_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0017_STD_STACK_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0017_STD_STACK_INT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::stack<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0017_std_stack_int', () => {
    try {
      const r = parsec.parseFunction(`void sample37(std::stack<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample37');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0017_std_stack_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0017_std_stack_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0017_std_stack_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0018_SAMPLERET37
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0018_SAMPLERET37
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::stack<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0018_sampleret37', () => {
    try {
      const r = parsec.parseFunction(`std::stack<int> sampleRet37();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet37');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0018_sampleret37 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0018_sampleret37 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0018_sampleret37 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0019_STD_STACK_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0019_STD_STACK_INT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::stack<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0019_std_stack_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass37 { public: std::stack<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass37');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0019_std_stack_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0019_std_stack_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0019_std_stack_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0020_STD_STACK_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0020_STD_STACK_INT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::stack<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0020_std_stack_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline37(std::stack<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline37');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0020_std_stack_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0020_std_stack_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0020_std_stack_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0021_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0021_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0021_std_priority_queue_int', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0021_std_priority_queue_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0021_std_priority_queue_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0021_std_priority_queue_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0022_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0022_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0022_std_priority_queue_int', () => {
    try {
      const r = parsec.parseFunction(`void sample38(std::priority_queue<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample38');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0022_std_priority_queue_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0022_std_priority_queue_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0022_std_priority_queue_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0023_SAMPLERET38
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0023_SAMPLERET38
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0023_sampleret38', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<int> sampleRet38();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet38');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0023_sampleret38 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0023_sampleret38 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0023_sampleret38 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0024_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0024_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0024_std_priority_queue_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass38 { public: std::priority_queue<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass38');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0024_std_priority_queue_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0024_std_priority_queue_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0024_std_priority_queue_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0025_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0025_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::priority_queue<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0025_std_priority_queue_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline38(std::priority_queue<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline38');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0025_std_priority_queue_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0025_std_priority_queue_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0025_std_priority_queue_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0026_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0026_STD_VECTOR_STD_STRING
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0026_std_vector_std_string', () => {
    try {
      const result = transTskey2Ckey('std::vector<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0026_std_vector_std_string convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_container_0026_std_vector_std_string convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0026_std_vector_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0027_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0027_STD_VECTOR_STD_STRING
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::vector<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0027_std_vector_std_string', () => {
    try {
      const r = parsec.parseFunction(`void sample41(std::vector<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample41');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0027_std_vector_std_string param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0027_std_vector_std_string param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0027_std_vector_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0028_SAMPLERET41
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0028_SAMPLERET41
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::vector<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0028_sampleret41', () => {
    try {
      const r = parsec.parseFunction(`std::vector<std::string> sampleRet41();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet41');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0028_sampleret41 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0028_sampleret41 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0028_sampleret41 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0029_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0029_STD_VECTOR_STD_STRING
   * @tc.desc   Stability convert h2dts/container: class-field convert; type
   *            std::vector<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0029_std_vector_std_string', () => {
    try {
      const r = parsec.parseClass(`class SampleClass41 { public: std::vector<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass41');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0029_std_vector_std_string class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0029_std_vector_std_string class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0029_std_vector_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0030_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0030_STD_VECTOR_STD_STRING
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0030_std_vector_std_string', () => {
    try {
      const r = parsec.parseFunction(`void pipeline41(std::vector<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline41');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0030_std_vector_std_string pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0030_std_vector_std_string pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0030_std_vector_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0031_STD_VECTOR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0031_STD_VECTOR_DOUBLE
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0031_std_vector_double', () => {
    try {
      const result = transTskey2Ckey('std::vector<double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0031_std_vector_double convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0031_std_vector_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0031_std_vector_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0032_STD_VECTOR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0032_STD_VECTOR_DOUBLE
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0032_std_vector_double', () => {
    try {
      const r = parsec.parseFunction(`void sample54(std::vector<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample54');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0032_std_vector_double param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0032_std_vector_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0032_std_vector_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0033_SAMPLERET54
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0033_SAMPLERET54
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::vector<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0033_sampleret54', () => {
    try {
      const r = parsec.parseFunction(`std::vector<double> sampleRet54();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet54');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0033_sampleret54 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0033_sampleret54 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0033_sampleret54 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0034_STD_VECTOR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0034_STD_VECTOR_DOUBLE
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0034_std_vector_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass54 { public: std::vector<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass54');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0034_std_vector_double class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0034_std_vector_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0034_std_vector_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0035_STD_VECTOR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0035_STD_VECTOR_DOUBLE
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0035_std_vector_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline54(std::vector<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline54');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0035_std_vector_double pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0035_std_vector_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0035_std_vector_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0036_STD_VECTOR_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0036_STD_VECTOR_BOOL
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0036_std_vector_bool', () => {
    try {
      const result = transTskey2Ckey('std::vector<bool>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0036_std_vector_bool convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_container_0036_std_vector_bool convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0036_std_vector_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0037_STD_VECTOR_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0037_STD_VECTOR_BOOL
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0037_std_vector_bool', () => {
    try {
      const r = parsec.parseFunction(`void sample55(std::vector<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample55');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0037_std_vector_bool param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_container_0037_std_vector_bool param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0037_std_vector_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0038_SAMPLERET55
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0038_SAMPLERET55
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0038_sampleret55', () => {
    try {
      const r = parsec.parseFunction(`std::vector<bool> sampleRet55();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet55');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0038_sampleret55 return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_container_0038_sampleret55 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0038_sampleret55 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0039_STD_VECTOR_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0039_STD_VECTOR_BOOL
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0039_std_vector_bool', () => {
    try {
      const r = parsec.parseClass(`class SampleClass55 { public: std::vector<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass55');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0039_std_vector_bool class field convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_container_0039_std_vector_bool class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0039_std_vector_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0040_STD_VECTOR_BOOL
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0040_STD_VECTOR_BOOL
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0040_std_vector_bool', () => {
    try {
      const r = parsec.parseFunction(`void pipeline55(std::vector<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline55');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0040_std_vector_bool pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>",
        "h2dts_convert_container_0040_std_vector_bool pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0040_std_vector_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0041_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0041_STD_LIST_INT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::list<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0041_std_list_int', () => {
    try {
      const result = transTskey2Ckey('std::list<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0041_std_list_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0041_std_list_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0041_std_list_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0042_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0042_STD_LIST_INT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::list<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0042_std_list_int', () => {
    try {
      const r = parsec.parseFunction(`void sample59(std::list<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample59');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0042_std_list_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0042_std_list_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0042_std_list_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0043_SAMPLERET59
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0043_SAMPLERET59
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::list<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0043_sampleret59', () => {
    try {
      const r = parsec.parseFunction(`std::list<int> sampleRet59();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet59');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0043_sampleret59 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0043_sampleret59 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0043_sampleret59 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0044_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0044_STD_LIST_INT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::list<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0044_std_list_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass59 { public: std::list<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass59');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0044_std_list_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0044_std_list_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0044_std_list_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0045_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0045_STD_LIST_INT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::list<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0045_std_list_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline59(std::list<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline59');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0045_std_list_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0045_std_list_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0045_std_list_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0046_STD_LIST_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0046_STD_LIST_STD_STRING
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::list<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0046_std_list_std_string', () => {
    try {
      const result = transTskey2Ckey('std::list<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0046_std_list_std_string convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_container_0046_std_list_std_string convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0046_std_list_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0047_STD_LIST_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0047_STD_LIST_STD_STRING
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::list<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0047_std_list_std_string', () => {
    try {
      const r = parsec.parseFunction(`void sample60(std::list<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample60');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0047_std_list_std_string param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0047_std_list_std_string param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0047_std_list_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0048_SAMPLERET60
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0048_SAMPLERET60
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::list<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0048_sampleret60', () => {
    try {
      const r = parsec.parseFunction(`std::list<std::string> sampleRet60();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet60');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0048_sampleret60 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0048_sampleret60 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0048_sampleret60 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0049_STD_LIST_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0049_STD_LIST_STD_STRING
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::list<std::string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0049_std_list_std_string', () => {
    try {
      const r = parsec.parseClass(`class SampleClass60 { public: std::list<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass60');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0049_std_list_std_string class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0049_std_list_std_string class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0049_std_list_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0050_STD_LIST_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0050_STD_LIST_STD_STRING
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::list<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0050_std_list_std_string', () => {
    try {
      const r = parsec.parseFunction(`void pipeline60(std::list<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline60');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0050_std_list_std_string pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0050_std_list_std_string pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0050_std_list_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0051_STD_DEQUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0051_STD_DEQUE_INT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::deque<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0051_std_deque_int', () => {
    try {
      const result = transTskey2Ckey('std::deque<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0051_std_deque_int convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0051_std_deque_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0051_std_deque_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0052_STD_DEQUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0052_STD_DEQUE_INT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::deque<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0052_std_deque_int', () => {
    try {
      const r = parsec.parseFunction(`void sample61(std::deque<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample61');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0052_std_deque_int param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0052_std_deque_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0052_std_deque_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0053_SAMPLERET61
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0053_SAMPLERET61
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::deque<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0053_sampleret61', () => {
    try {
      const r = parsec.parseFunction(`std::deque<int> sampleRet61();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet61');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0053_sampleret61 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0053_sampleret61 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0053_sampleret61 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0054_STD_DEQUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0054_STD_DEQUE_INT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::deque<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0054_std_deque_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass61 { public: std::deque<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass61');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0054_std_deque_int class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0054_std_deque_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0054_std_deque_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0055_STD_DEQUE_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0055_STD_DEQUE_INT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type std::deque<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0055_std_deque_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline61(std::deque<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline61');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0055_std_deque_int pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0055_std_deque_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0055_std_deque_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0056_STD_DEQUE_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0056_STD_DEQUE_STD_STRING
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::deque<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0056_std_deque_std_string', () => {
    try {
      const result = transTskey2Ckey('std::deque<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0056_std_deque_std_string convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_container_0056_std_deque_std_string convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0056_std_deque_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0057_STD_DEQUE_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0057_STD_DEQUE_STD_STRING
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::deque<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0057_std_deque_std_string', () => {
    try {
      const r = parsec.parseFunction(`void sample62(std::deque<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample62');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0057_std_deque_std_string param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0057_std_deque_std_string param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0057_std_deque_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0058_SAMPLERET62
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0058_SAMPLERET62
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::deque<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0058_sampleret62', () => {
    try {
      const r = parsec.parseFunction(`std::deque<std::string> sampleRet62();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet62');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0058_sampleret62 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0058_sampleret62 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0058_sampleret62 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0059_STD_DEQUE_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0059_STD_DEQUE_STD_STRING
   * @tc.desc   Stability convert h2dts/container: class-field convert; type
   *            std::deque<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0059_std_deque_std_string', () => {
    try {
      const r = parsec.parseClass(`class SampleClass62 { public: std::deque<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass62');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0059_std_deque_std_string class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0059_std_deque_std_string class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0059_std_deque_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0060_STD_DEQUE_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0060_STD_DEQUE_STD_STRING
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::deque<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0060_std_deque_std_string', () => {
    try {
      const r = parsec.parseFunction(`void pipeline62(std::deque<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline62');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0060_std_deque_std_string pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0060_std_deque_std_string pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0060_std_deque_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0061_STD_VALARRAY_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0061_STD_VALARRAY_DOUBLE
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::valarray<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0061_std_valarray_double', () => {
    try {
      const result = transTskey2Ckey('std::valarray<double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0061_std_valarray_double convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0061_std_valarray_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0061_std_valarray_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0062_STD_VALARRAY_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0062_STD_VALARRAY_DOUBLE
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::valarray<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0062_std_valarray_double', () => {
    try {
      const r = parsec.parseFunction(`void sample74(std::valarray<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample74');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0062_std_valarray_double param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0062_std_valarray_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0062_std_valarray_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0063_SAMPLERET74
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0063_SAMPLERET74
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::valarray<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0063_sampleret74', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<double> sampleRet74();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet74');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0063_sampleret74 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0063_sampleret74 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0063_sampleret74 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0064_STD_VALARRAY_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0064_STD_VALARRAY_DOUBLE
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::valarray<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0064_std_valarray_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass74 { public: std::valarray<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass74');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0064_std_valarray_double class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0064_std_valarray_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0064_std_valarray_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0065_STD_VALARRAY_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0065_STD_VALARRAY_DOUBLE
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::valarray<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0065_std_valarray_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline74(std::valarray<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline74');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0065_std_valarray_double pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0065_std_valarray_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0065_std_valarray_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0066_STD_VECTOR_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0066_STD_VECTOR_CHAR
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0066_std_vector_char', () => {
    try {
      const result = transTskey2Ckey('std::vector<char>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0066_std_vector_char convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_container_0066_std_vector_char convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0066_std_vector_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0067_STD_VECTOR_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0067_STD_VECTOR_CHAR
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0067_std_vector_char', () => {
    try {
      const r = parsec.parseFunction(`void sample116(std::vector<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample116');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0067_std_vector_char param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0067_std_vector_char param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0067_std_vector_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0068_SAMPLERET116
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0068_SAMPLERET116
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0068_sampleret116', () => {
    try {
      const r = parsec.parseFunction(`std::vector<char> sampleRet116();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet116');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0068_sampleret116 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0068_sampleret116 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0068_sampleret116 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0069_STD_VECTOR_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0069_STD_VECTOR_CHAR
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0069_std_vector_char', () => {
    try {
      const r = parsec.parseClass(`class SampleClass116 { public: std::vector<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass116');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0069_std_vector_char class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0069_std_vector_char class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0069_std_vector_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0070_STD_VECTOR_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0070_STD_VECTOR_CHAR
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0070_std_vector_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline116(std::vector<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline116');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0070_std_vector_char pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0070_std_vector_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0070_std_vector_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0071_STD_VECTOR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0071_STD_VECTOR_FLOAT
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0071_std_vector_float', () => {
    try {
      const result = transTskey2Ckey('std::vector<float>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0071_std_vector_float convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0071_std_vector_float convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0071_std_vector_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0072_STD_VECTOR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0072_STD_VECTOR_FLOAT
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0072_std_vector_float', () => {
    try {
      const r = parsec.parseFunction(`void sample117(std::vector<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample117');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0072_std_vector_float param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0072_std_vector_float param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0072_std_vector_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0073_SAMPLERET117
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0073_SAMPLERET117
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0073_sampleret117', () => {
    try {
      const r = parsec.parseFunction(`std::vector<float> sampleRet117();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet117');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0073_sampleret117 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0073_sampleret117 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0073_sampleret117 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0074_STD_VECTOR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0074_STD_VECTOR_FLOAT
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0074_std_vector_float', () => {
    try {
      const r = parsec.parseClass(`class SampleClass117 { public: std::vector<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass117');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0074_std_vector_float class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0074_std_vector_float class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0074_std_vector_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0075_STD_VECTOR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0075_STD_VECTOR_FLOAT
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0075_std_vector_float', () => {
    try {
      const r = parsec.parseFunction(`void pipeline117(std::vector<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline117');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0075_std_vector_float pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0075_std_vector_float pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0075_std_vector_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0076_STD_VECTOR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0076_STD_VECTOR_LONG
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0076_std_vector_long', () => {
    try {
      const result = transTskey2Ckey('std::vector<long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0076_std_vector_long convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_container_0076_std_vector_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0076_std_vector_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0077_STD_VECTOR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0077_STD_VECTOR_LONG
   * @tc.desc   Stability convert h2dts/container: function-param convert; type std::vector<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0077_std_vector_long', () => {
    try {
      const r = parsec.parseFunction(`void sample118(std::vector<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample118');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0077_std_vector_long param convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0077_std_vector_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0077_std_vector_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0078_SAMPLERET118
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0078_SAMPLERET118
   * @tc.desc   Stability convert h2dts/container: function-return convert; type std::vector<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0078_sampleret118', () => {
    try {
      const r = parsec.parseFunction(`std::vector<long> sampleRet118();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet118');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0078_sampleret118 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_container_0078_sampleret118 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0078_sampleret118 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0079_STD_VECTOR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0079_STD_VECTOR_LONG
   * @tc.desc   Stability convert h2dts/container: class-field convert; type std::vector<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0079_std_vector_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass118 { public: std::vector<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass118');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0079_std_vector_long class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0079_std_vector_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0079_std_vector_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0080_STD_VECTOR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0080_STD_VECTOR_LONG
   * @tc.desc   Stability convert h2dts/container: parse-convert-gen pipeline; type
   *            std::vector<long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0080_std_vector_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline118(std::vector<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline118');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0080_std_vector_long pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>",
        "h2dts_convert_container_0080_std_vector_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0080_std_vector_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0081_STD_VECTOR_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0081_STD_VECTOR_STD_WSTRING
   * @tc.desc   Stability convert h2dts/container: baseline type-string convert; type
   *            std::vector<std::wstring>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0081_std_vector_std_wstring', () => {
    try {
      const result = transTskey2Ckey('std::vector<std::wstring>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_container_0081_std_vector_std_wstring convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_container_0081_std_vector_std_wstring convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0081_std_vector_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0082_STD_VECTOR_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0082_STD_VECTOR_STD_WSTRING
   * @tc.desc   Stability convert h2dts/container: function-param convert; type
   *            std::vector<std::wstring>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0082_std_vector_std_wstring', () => {
    try {
      const r = parsec.parseFunction(`void sample120(std::vector<std::wstring> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample120');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0082_std_vector_std_wstring param convert output non-empty");
      assert.strictEqual(converted, "Array<string>",
        "h2dts_convert_container_0082_std_vector_std_wstring param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0082_std_vector_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_CONTAINER_0083_SAMPLERET120
   * @tc.number SUB_NAPI_H2DTS_CONVERT_CONTAINER_0083_SAMPLERET120
   * @tc.desc   Stability convert h2dts/container: function-return convert; type
   *            std::vector<std::wstring>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_container_0083_sampleret120', () => {
    try {
      const r = parsec.parseFunction(`std::vector<std::wstring> sampleRet120();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet120');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_container_0083_sampleret120 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_container_0083_sampleret120 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_container_0083_sampleret120 execution error: ${err}`);
    }
  });
});
