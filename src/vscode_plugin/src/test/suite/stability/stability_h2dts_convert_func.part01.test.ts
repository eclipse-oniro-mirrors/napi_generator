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

suite('Stability_H2DTS_CONVERT_FUNC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0001_STD_FUNCTION_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0001_STD_FUNCTION_INT_INT_INT
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::function<int(int, int)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0001_std_function_int_int_int', () => {
    try {
      const result = transTskey2Ckey('std::function<int(int, int)>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0001_std_function_int_int_int convert output non-empty");
      assert.strictEqual(result, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0001_std_function_int_int_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0001_std_function_int_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0002_STD_FUNCTION_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0002_STD_FUNCTION_INT_INT
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::function<int(int,;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0002_std_function_int_int', () => {
    try {
      const r = parsec.parseFunction(`void sample147(std::function<int(int, int)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0002_std_function_int_int param convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0002_std_function_int_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0002_std_function_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0003_PARAM0_NUMBER_PARAM1_NUMB_7D9A48
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0003_PARAM0_NUMBER_PARAM1_NUMB_7D9A48
   * @tc.desc   Stability convert h2dts/func: function-return convert; type >; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0003_param0_number_param1_numb_7d9a48', () => {
    try {
      const r = parsec.parseFunction(`std::function<int(int, int)> sampleRet147();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0003_param0_number_param1_numb_7d9a48 return convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0003_param0_number_param1_numb_7d9a48 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0003_param0_number_param1_numb_7d9a48 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0004_STD_FUNCTION_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0004_STD_FUNCTION_INT_INT_INT
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::function<int(int,
   *            int)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0004_std_function_int_int_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass147 { public: std::function<int(int, int)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0004_std_function_int_int_int class field convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0004_std_function_int_int_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0004_std_function_int_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0005_STD_FUNCTION_INT_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0005_STD_FUNCTION_INT_INT
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::function<int(int,; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0005_std_function_int_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline147(std::function<int(int, int)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0005_std_function_int_int pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0005_std_function_int_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0005_std_function_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0006_STD_FUNCTION_VOID_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0006_STD_FUNCTION_VOID_LONG_LONG
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::function<void(long, long)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0006_std_function_void_long_long', () => {
    try {
      const result = transTskey2Ckey('std::function<void(long, long)>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0006_std_function_void_long_long convert output non-empty");
      assert.strictEqual(result, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0006_std_function_void_long_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0006_std_function_void_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0007_STD_FUNCTION_VOID_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0007_STD_FUNCTION_VOID_LONG
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::function<void(long,;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0007_std_function_void_long', () => {
    try {
      const r = parsec.parseFunction(`void sample148(std::function<void(long, long)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0007_std_function_void_long param convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0007_std_function_void_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0007_std_function_void_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0008_PARAM0_NUMBER_PARAM1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0008_PARAM0_NUMBER_PARAM1_NUMBER_VOID
   * @tc.desc   Stability convert h2dts/func: function-return convert; type >; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0008_param0_number_param1_number_void', () => {
    try {
      const r = parsec.parseFunction(`std::function<void(long, long)> sampleRet148();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0008_param0_number_param1_number_void return convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0008_param0_number_param1_number_void return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0008_param0_number_param1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0009_STD_FUNCTION_VOID_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0009_STD_FUNCTION_VOID_LONG_LONG
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::function<void(long,
   *            long)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0009_std_function_void_long_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass148 { public: std::function<void(long, long)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0009_std_function_void_long_long class field convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0009_std_function_void_long_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0009_std_function_void_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0010_STD_FUNCTION_VOID_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0010_STD_FUNCTION_VOID_LONG
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::function<void(long,; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0010_std_function_void_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline148(std::function<void(long, long)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0010_std_function_void_long pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0010_std_function_void_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0010_std_function_void_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0011_STD_FUNCTION_INT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0011_STD_FUNCTION_INT_FLOAT
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::function<int(float)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0011_std_function_int_float', () => {
    try {
      const result = transTskey2Ckey('std::function<int(float)>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0011_std_function_int_float convert output non-empty");
      assert.strictEqual(result, "(param0: number)=>number",
        "h2dts_convert_func_0011_std_function_int_float convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0011_std_function_int_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0012_STD_FUNCTION_INT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0012_STD_FUNCTION_INT_FLOAT
   * @tc.desc   Stability convert h2dts/func: function-param convert; type
   *            std::function<int(float)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0012_std_function_int_float', () => {
    try {
      const r = parsec.parseFunction(`void sample149(std::function<int(float)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0012_std_function_int_float param convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>number",
        "h2dts_convert_func_0012_std_function_int_float param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0012_std_function_int_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0013_PARAM0_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0013_PARAM0_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type >; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0013_param0_number_number', () => {
    try {
      const r = parsec.parseFunction(`std::function<int(float)> sampleRet149();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0013_param0_number_number return convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>number",
        "h2dts_convert_func_0013_param0_number_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0013_param0_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0014_STD_FUNCTION_INT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0014_STD_FUNCTION_INT_FLOAT
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::function<int(float)>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0014_std_function_int_float', () => {
    try {
      const r = parsec.parseClass(`class SampleClass149 { public: std::function<int(float)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0014_std_function_int_float class field convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>number",
        "h2dts_convert_func_0014_std_function_int_float class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0014_std_function_int_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0015_STD_FUNCTION_INT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0015_STD_FUNCTION_INT_FLOAT
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::function<int(float)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0015_std_function_int_float', () => {
    try {
      const r = parsec.parseFunction(`void pipeline149(std::function<int(float)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0015_std_function_int_float pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>number",
        "h2dts_convert_func_0015_std_function_int_float pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0015_std_function_int_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0016_STD_FUNCTION_VOID_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0016_STD_FUNCTION_VOID_DOUBLE
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::function<void(double)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0016_std_function_void_double', () => {
    try {
      const result = transTskey2Ckey('std::function<void(double)>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0016_std_function_void_double convert output non-empty");
      assert.strictEqual(result, "(param0: number)=>void",
        "h2dts_convert_func_0016_std_function_void_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0016_std_function_void_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0017_STD_FUNCTION_VOID_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0017_STD_FUNCTION_VOID_DOUBLE
   * @tc.desc   Stability convert h2dts/func: function-param convert; type
   *            std::function<void(double)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0017_std_function_void_double', () => {
    try {
      const r = parsec.parseFunction(`void sample150(std::function<void(double)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0017_std_function_void_double param convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>void",
        "h2dts_convert_func_0017_std_function_void_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0017_std_function_void_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0018_PARAM0_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0018_PARAM0_NUMBER_VOID
   * @tc.desc   Stability convert h2dts/func: function-return convert; type >; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0018_param0_number_void', () => {
    try {
      const r = parsec.parseFunction(`std::function<void(double)> sampleRet150();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0018_param0_number_void return convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>void",
        "h2dts_convert_func_0018_param0_number_void return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0018_param0_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0019_STD_FUNCTION_VOID_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0019_STD_FUNCTION_VOID_DOUBLE
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::function<void(double)>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0019_std_function_void_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass150 { public: std::function<void(double)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0019_std_function_void_double class field convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>void",
        "h2dts_convert_func_0019_std_function_void_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0019_std_function_void_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0020_STD_FUNCTION_VOID_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0020_STD_FUNCTION_VOID_DOUBLE
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::function<void(double)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0020_std_function_void_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline150(std::function<void(double)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0020_std_function_void_double pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>void",
        "h2dts_convert_func_0020_std_function_void_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0020_std_function_void_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0021_STD_FUNCTION_VOID_CHAR_SH_F4B6C1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0021_STD_FUNCTION_VOID_CHAR_SH_F4B6C1
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::function<void(char, short, short)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0021_std_function_void_char_sh_f4b6c1', () => {
    try {
      const result = transTskey2Ckey('std::function<void(char, short, short)>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0021_std_function_void_char_sh_f4b6c1 convert output non-empty");
      assert.strictEqual(result, "(param0: string, param1: number, param2: number)=>void",
        "h2dts_convert_func_0021_std_function_void_char_sh_f4b6c1 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0021_std_function_void_char_sh_f4b6c1 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0022_STD_FUNCTION_VOID_CHAR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0022_STD_FUNCTION_VOID_CHAR_SHORT
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::function<void(char,
   *            short,; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0022_std_function_void_char_short', () => {
    try {
      const r = parsec.parseFunction(`void sample151(std::function<void(char, short, short)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0022_std_function_void_char_short param convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number, param2: number)=>void",
        "h2dts_convert_func_0022_std_function_void_char_short param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0022_std_function_void_char_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0023_PARAM0_STRING_PARAM1_NUMB_E56A59
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0023_PARAM0_STRING_PARAM1_NUMB_E56A59
   * @tc.desc   Stability convert h2dts/func: function-return convert; type >; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0023_param0_string_param1_numb_e56a59', () => {
    try {
      const r = parsec.parseFunction(`std::function<void(char, short, short)> sampleRet151();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0023_param0_string_param1_numb_e56a59 return convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number, param2: number)=>void",
        "h2dts_convert_func_0023_param0_string_param1_numb_e56a59 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0023_param0_string_param1_numb_e56a59 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0024_STD_FUNCTION_VOID_CHAR_SH_F4B6C1
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0024_STD_FUNCTION_VOID_CHAR_SH_F4B6C1
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::function<void(char,
   *            short, short)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0024_std_function_void_char_sh_f4b6c1', () => {
    try {
      const r = parsec.parseClass(`class SampleClass151 { public: std::function<void(char, short, short)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0024_std_function_void_char_sh_f4b6c1 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number, param2: number)=>void",
        "h2dts_convert_func_0024_std_function_void_char_sh_f4b6c1 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0024_std_function_void_char_sh_f4b6c1 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0025_STD_FUNCTION_VOID_CHAR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0025_STD_FUNCTION_VOID_CHAR_SHORT
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::function<void(char, short,; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0025_std_function_void_char_short', () => {
    try {
      const r = parsec.parseFunction(`void pipeline151(std::function<void(char, short, short)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0025_std_function_void_char_short pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number, param2: number)=>void",
        "h2dts_convert_func_0025_std_function_void_char_short pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0025_std_function_void_char_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0026_STD_FUNCTION_VOID_CHAR16_9F9E25
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0026_STD_FUNCTION_VOID_CHAR16_9F9E25
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::function<void(char16_t, uint16_t)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0026_std_function_void_char16_9f9e25', () => {
    try {
      const result = transTskey2Ckey('std::function<void(char16_t, uint16_t)>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0026_std_function_void_char16_9f9e25 convert output non-empty");
      assert.strictEqual(result, "(param0: string, param1: number)=>void",
        "h2dts_convert_func_0026_std_function_void_char16_9f9e25 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0026_std_function_void_char16_9f9e25 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0027_STD_FUNCTION_VOID_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0027_STD_FUNCTION_VOID_CHAR16_T
   * @tc.desc   Stability convert h2dts/func: function-param convert; type
   *            std::function<void(char16_t,; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0027_std_function_void_char16_t', () => {
    try {
      const r = parsec.parseFunction(`void sample152(std::function<void(char16_t, uint16_t)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0027_std_function_void_char16_t param convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>void",
        "h2dts_convert_func_0027_std_function_void_char16_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0027_std_function_void_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0028_PARAM0_STRING_PARAM1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0028_PARAM0_STRING_PARAM1_NUMBER_VOID
   * @tc.desc   Stability convert h2dts/func: function-return convert; type >; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0028_param0_string_param1_number_void', () => {
    try {
      const r = parsec.parseFunction(`std::function<void(char16_t, uint16_t)> sampleRet152();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0028_param0_string_param1_number_void return convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>void",
        "h2dts_convert_func_0028_param0_string_param1_number_void return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0028_param0_string_param1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0029_STD_FUNCTION_VOID_CHAR16_9F9E25
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0029_STD_FUNCTION_VOID_CHAR16_9F9E25
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::function<void(char16_t,
   *            uint16_t)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0029_std_function_void_char16_9f9e25', () => {
    try {
      const r = parsec.parseClass(`class SampleClass152 { public: std::function<void(char16_t, uint16_t)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0029_std_function_void_char16_9f9e25 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>void",
        "h2dts_convert_func_0029_std_function_void_char16_9f9e25 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0029_std_function_void_char16_9f9e25 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0030_STD_FUNCTION_VOID_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0030_STD_FUNCTION_VOID_CHAR16_T
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::function<void(char16_t,; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0030_std_function_void_char16_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline152(std::function<void(char16_t, uint16_t)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0030_std_function_void_char16_t pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>void",
        "h2dts_convert_func_0030_std_function_void_char16_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0030_std_function_void_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0031_STD_FUNCTION_UNSIGNED_CHA_235B40
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0031_STD_FUNCTION_UNSIGNED_CHA_235B40
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::function<unsigned(char64_t, size_t)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0031_std_function_unsigned_cha_235b40', () => {
    try {
      const result = transTskey2Ckey('std::function<unsigned(char64_t, size_t)>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0031_std_function_unsigned_cha_235b40 convert output non-empty");
      assert.strictEqual(result, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0031_std_function_unsigned_cha_235b40 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0031_std_function_unsigned_cha_235b40 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0032_STD_FUNCTION_UNSIGNED_CHAR64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0032_STD_FUNCTION_UNSIGNED_CHAR64_T
   * @tc.desc   Stability convert h2dts/func: function-param convert; type
   *            std::function<unsigned(char64_t,; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0032_std_function_unsigned_char64_t', () => {
    try {
      const r = parsec.parseFunction(`void sample153(std::function<unsigned(char64_t, size_t)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0032_std_function_unsigned_char64_t param convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0032_std_function_unsigned_char64_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0032_std_function_unsigned_char64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0033_PARAM0_STRING_PARAM1_NUMB_285B1C
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0033_PARAM0_STRING_PARAM1_NUMB_285B1C
   * @tc.desc   Stability convert h2dts/func: function-return convert; type >; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0033_param0_string_param1_numb_285b1c', () => {
    try {
      const r = parsec.parseFunction(`std::function<unsigned(char64_t, size_t)> sampleRet153();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0033_param0_string_param1_numb_285b1c return convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0033_param0_string_param1_numb_285b1c return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0033_param0_string_param1_numb_285b1c execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0034_STD_FUNCTION_UNSIGNED_CHA_235B40
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0034_STD_FUNCTION_UNSIGNED_CHA_235B40
   * @tc.desc   Stability convert h2dts/func: class-field convert; type
   *            std::function<unsigned(char64_t, size_t)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0034_std_function_unsigned_cha_235b40', () => {
    try {
      const r = parsec.parseClass(`class SampleClass153 { public: std::function<unsigned(char64_t, size_t)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0034_std_function_unsigned_cha_235b40 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0034_std_function_unsigned_cha_235b40 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0034_std_function_unsigned_cha_235b40 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0035_STD_FUNCTION_UNSIGNED_CHAR64_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0035_STD_FUNCTION_UNSIGNED_CHAR64_T
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::function<unsigned(char64_t,; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0035_std_function_unsigned_char64_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline153(std::function<unsigned(char64_t, size_t)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0035_std_function_unsigned_char64_t pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0035_std_function_unsigned_char64_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0035_std_function_unsigned_char64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0036_STD_FUNCTION_CHAR32_T_CHA_574093
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0036_STD_FUNCTION_CHAR32_T_CHA_574093
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::function<char32_t(char8_t, int32_t)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0036_std_function_char32_t_cha_574093', () => {
    try {
      const result = transTskey2Ckey('std::function<char32_t(char8_t, int32_t)>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0036_std_function_char32_t_cha_574093 convert output non-empty");
      assert.strictEqual(result, "(param0: string, param1: number)=>string",
        "h2dts_convert_func_0036_std_function_char32_t_cha_574093 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0036_std_function_char32_t_cha_574093 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0037_STD_FUNCTION_CHAR32_T_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0037_STD_FUNCTION_CHAR32_T_CHAR8_T
   * @tc.desc   Stability convert h2dts/func: function-param convert; type
   *            std::function<char32_t(char8_t,; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0037_std_function_char32_t_char8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample154(std::function<char32_t(char8_t, int32_t)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0037_std_function_char32_t_char8_t param convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>string",
        "h2dts_convert_func_0037_std_function_char32_t_char8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0037_std_function_char32_t_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0038_PARAM0_STRING_PARAM1_NUMB_F84A67
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0038_PARAM0_STRING_PARAM1_NUMB_F84A67
   * @tc.desc   Stability convert h2dts/func: function-return convert; type >; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0038_param0_string_param1_numb_f84a67', () => {
    try {
      const r = parsec.parseFunction(`std::function<char32_t(char8_t, int32_t)> sampleRet154();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0038_param0_string_param1_numb_f84a67 return convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>string",
        "h2dts_convert_func_0038_param0_string_param1_numb_f84a67 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0038_param0_string_param1_numb_f84a67 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0039_STD_FUNCTION_CHAR32_T_CHA_574093
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0039_STD_FUNCTION_CHAR32_T_CHA_574093
   * @tc.desc   Stability convert h2dts/func: class-field convert; type
   *            std::function<char32_t(char8_t, int32_t)>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0039_std_function_char32_t_cha_574093', () => {
    try {
      const r = parsec.parseClass(`class SampleClass154 { public: std::function<char32_t(char8_t, int32_t)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0039_std_function_char32_t_cha_574093 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>string",
        "h2dts_convert_func_0039_std_function_char32_t_cha_574093 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0039_std_function_char32_t_cha_574093 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0040_STD_FUNCTION_CHAR32_T_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0040_STD_FUNCTION_CHAR32_T_CHAR8_T
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::function<char32_t(char8_t,; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0040_std_function_char32_t_char8_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline154(std::function<char32_t(char8_t, int32_t)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0040_std_function_char32_t_char8_t pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>string",
        "h2dts_convert_func_0040_std_function_char32_t_char8_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0040_std_function_char32_t_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0001_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0001_STRING
   * @tc.desc   Stability convert h2dts/func: function-return convert; type
   *            std::unique_ptr<char16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0001_string', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<char16_t> sampleRet176();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0001_string return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0001_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0001_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0002_STD_UNIQUE_PTR_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0002_STD_UNIQUE_PTR_CHAR16_T
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::unique_ptr<char16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0002_std_unique_ptr_char16_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass176 { public: std::unique_ptr<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0002_std_unique_ptr_char16_t class field convert output non-empty");
      assert.strictEqual(converted, "string",
        "h2dts_convert_func_0002_std_unique_ptr_char16_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0002_std_unique_ptr_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0003_STD_UNIQUE_PTR_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0003_STD_UNIQUE_PTR_CHAR16_T
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::unique_ptr<char16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0003_std_unique_ptr_char16_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline176(std::unique_ptr<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0003_std_unique_ptr_char16_t pipeline convert output non-empty");
      assert.strictEqual(converted, "string",
        "h2dts_convert_func_0003_std_unique_ptr_char16_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0003_std_unique_ptr_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0004_STD_UNIQUE_PTR_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0004_STD_UNIQUE_PTR_CHAR32_T
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::unique_ptr<char32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0004_std_unique_ptr_char32_t', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0004_std_unique_ptr_char32_t convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0004_std_unique_ptr_char32_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0004_std_unique_ptr_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0005_STD_UNIQUE_PTR_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0005_STD_UNIQUE_PTR_CHAR32_T
   * @tc.desc   Stability convert h2dts/func: function-param convert; type
   *            std::unique_ptr<char32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0005_std_unique_ptr_char32_t', () => {
    try {
      const r = parsec.parseFunction(`void sample177(std::unique_ptr<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0005_std_unique_ptr_char32_t param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0005_std_unique_ptr_char32_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0005_std_unique_ptr_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0006_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0006_STRING
   * @tc.desc   Stability convert h2dts/func: function-return convert; type
   *            std::unique_ptr<char32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0006_string', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<char32_t> sampleRet177();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0006_string return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0006_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0006_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0007_STD_UNIQUE_PTR_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0007_STD_UNIQUE_PTR_CHAR32_T
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::unique_ptr<char32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0007_std_unique_ptr_char32_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass177 { public: std::unique_ptr<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0007_std_unique_ptr_char32_t class field convert output non-empty");
      assert.strictEqual(converted, "string",
        "h2dts_convert_func_0007_std_unique_ptr_char32_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0007_std_unique_ptr_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0008_STD_UNIQUE_PTR_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0008_STD_UNIQUE_PTR_CHAR32_T
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::unique_ptr<char32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0008_std_unique_ptr_char32_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline177(std::unique_ptr<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0008_std_unique_ptr_char32_t pipeline convert output non-empty");
      assert.strictEqual(converted, "string",
        "h2dts_convert_func_0008_std_unique_ptr_char32_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0008_std_unique_ptr_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0009_STD_SHARED_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0009_STD_SHARED_PTR_INT
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0009_std_shared_ptr_int', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0009_std_shared_ptr_int convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0009_std_shared_ptr_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0009_std_shared_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0010_STD_SHARED_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0010_STD_SHARED_PTR_INT
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0010_std_shared_ptr_int', () => {
    try {
      const r = parsec.parseFunction(`void sample178(std::shared_ptr<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0010_std_shared_ptr_int param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0010_std_shared_ptr_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0010_std_shared_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0011_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0011_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::shared_ptr<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0011_number', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<int> sampleRet178();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0011_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0011_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0011_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0012_STD_SHARED_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0012_STD_SHARED_PTR_INT
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::shared_ptr<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0012_std_shared_ptr_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass178 { public: std::shared_ptr<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0012_std_shared_ptr_int class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0012_std_shared_ptr_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0012_std_shared_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0013_STD_SHARED_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0013_STD_SHARED_PTR_INT
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type std::shared_ptr<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0013_std_shared_ptr_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline178(std::shared_ptr<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0013_std_shared_ptr_int pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0013_std_shared_ptr_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0013_std_shared_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0014_STD_SHARED_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0014_STD_SHARED_PTR_SIZE_T
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0014_std_shared_ptr_size_t', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0014_std_shared_ptr_size_t convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0014_std_shared_ptr_size_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0014_std_shared_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0015_STD_SHARED_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0015_STD_SHARED_PTR_SIZE_T
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0015_std_shared_ptr_size_t', () => {
    try {
      const r = parsec.parseFunction(`void sample179(std::shared_ptr<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0015_std_shared_ptr_size_t param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0015_std_shared_ptr_size_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0015_std_shared_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0016_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0016_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::shared_ptr<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0016_number', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<size_t> sampleRet179();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0016_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0016_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0016_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0017_STD_SHARED_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0017_STD_SHARED_PTR_SIZE_T
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::shared_ptr<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0017_std_shared_ptr_size_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass179 { public: std::shared_ptr<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0017_std_shared_ptr_size_t class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0017_std_shared_ptr_size_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0017_std_shared_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0018_STD_SHARED_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0018_STD_SHARED_PTR_SIZE_T
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::shared_ptr<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0018_std_shared_ptr_size_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline179(std::shared_ptr<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0018_std_shared_ptr_size_t pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0018_std_shared_ptr_size_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0018_std_shared_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0019_STD_SHARED_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0019_STD_SHARED_PTR_DOUBLE
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0019_std_shared_ptr_double', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0019_std_shared_ptr_double convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0019_std_shared_ptr_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0019_std_shared_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0020_STD_SHARED_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0020_STD_SHARED_PTR_DOUBLE
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0020_std_shared_ptr_double', () => {
    try {
      const r = parsec.parseFunction(`void sample180(std::shared_ptr<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0020_std_shared_ptr_double param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0020_std_shared_ptr_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0020_std_shared_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0021_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0021_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::shared_ptr<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0021_number', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<double> sampleRet180();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0021_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0021_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0021_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0022_STD_SHARED_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0022_STD_SHARED_PTR_DOUBLE
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::shared_ptr<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0022_std_shared_ptr_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass180 { public: std::shared_ptr<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0022_std_shared_ptr_double class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0022_std_shared_ptr_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0022_std_shared_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0023_STD_SHARED_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0023_STD_SHARED_PTR_DOUBLE
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::shared_ptr<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0023_std_shared_ptr_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline180(std::shared_ptr<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0023_std_shared_ptr_double pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0023_std_shared_ptr_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0023_std_shared_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0024_STD_SHARED_PTR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0024_STD_SHARED_PTR_FLOAT
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0024_std_shared_ptr_float', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<float>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0024_std_shared_ptr_float convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0024_std_shared_ptr_float convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0024_std_shared_ptr_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0025_STD_SHARED_PTR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0025_STD_SHARED_PTR_FLOAT
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0025_std_shared_ptr_float', () => {
    try {
      const r = parsec.parseFunction(`void sample181(std::shared_ptr<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0025_std_shared_ptr_float param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0025_std_shared_ptr_float param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0025_std_shared_ptr_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0026_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0026_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::shared_ptr<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0026_number', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<float> sampleRet181();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0026_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0026_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0026_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0027_STD_SHARED_PTR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0027_STD_SHARED_PTR_FLOAT
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::shared_ptr<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0027_std_shared_ptr_float', () => {
    try {
      const r = parsec.parseClass(`class SampleClass181 { public: std::shared_ptr<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0027_std_shared_ptr_float class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0027_std_shared_ptr_float class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0027_std_shared_ptr_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0028_STD_SHARED_PTR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0028_STD_SHARED_PTR_FLOAT
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::shared_ptr<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0028_std_shared_ptr_float', () => {
    try {
      const r = parsec.parseFunction(`void pipeline181(std::shared_ptr<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0028_std_shared_ptr_float pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0028_std_shared_ptr_float pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0028_std_shared_ptr_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0029_STD_SHARED_PTR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0029_STD_SHARED_PTR_LONG
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0029_std_shared_ptr_long', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0029_std_shared_ptr_long convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0029_std_shared_ptr_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0029_std_shared_ptr_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0030_STD_SHARED_PTR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0030_STD_SHARED_PTR_LONG
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0030_std_shared_ptr_long', () => {
    try {
      const r = parsec.parseFunction(`void sample182(std::shared_ptr<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0030_std_shared_ptr_long param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0030_std_shared_ptr_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0030_std_shared_ptr_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0031_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0031_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::shared_ptr<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0031_number', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<long> sampleRet182();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0031_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0031_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0031_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0032_STD_SHARED_PTR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0032_STD_SHARED_PTR_LONG
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::shared_ptr<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0032_std_shared_ptr_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass182 { public: std::shared_ptr<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0032_std_shared_ptr_long class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0032_std_shared_ptr_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0032_std_shared_ptr_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0033_STD_SHARED_PTR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0033_STD_SHARED_PTR_LONG
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::shared_ptr<long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0033_std_shared_ptr_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline182(std::shared_ptr<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0033_std_shared_ptr_long pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0033_std_shared_ptr_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0033_std_shared_ptr_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0034_STD_SHARED_PTR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0034_STD_SHARED_PTR_SHORT
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0034_std_shared_ptr_short', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<short>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0034_std_shared_ptr_short convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0034_std_shared_ptr_short convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0034_std_shared_ptr_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0035_STD_SHARED_PTR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0035_STD_SHARED_PTR_SHORT
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0035_std_shared_ptr_short', () => {
    try {
      const r = parsec.parseFunction(`void sample183(std::shared_ptr<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0035_std_shared_ptr_short param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0035_std_shared_ptr_short param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0035_std_shared_ptr_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0036_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0036_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::shared_ptr<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0036_number', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<short> sampleRet183();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0036_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0036_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0036_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0037_STD_SHARED_PTR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0037_STD_SHARED_PTR_SHORT
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::shared_ptr<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0037_std_shared_ptr_short', () => {
    try {
      const r = parsec.parseClass(`class SampleClass183 { public: std::shared_ptr<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0037_std_shared_ptr_short class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0037_std_shared_ptr_short class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0037_std_shared_ptr_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0038_STD_SHARED_PTR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0038_STD_SHARED_PTR_SHORT
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::shared_ptr<short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0038_std_shared_ptr_short', () => {
    try {
      const r = parsec.parseFunction(`void pipeline183(std::shared_ptr<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0038_std_shared_ptr_short pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0038_std_shared_ptr_short pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0038_std_shared_ptr_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0039_STD_SHARED_PTR_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0039_STD_SHARED_PTR_UINT8_T
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0039_std_shared_ptr_uint8_t', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0039_std_shared_ptr_uint8_t convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0039_std_shared_ptr_uint8_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0039_std_shared_ptr_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0040_STD_SHARED_PTR_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0040_STD_SHARED_PTR_UINT8_T
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0040_std_shared_ptr_uint8_t', () => {
    try {
      const r = parsec.parseFunction(`void sample184(std::shared_ptr<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0040_std_shared_ptr_uint8_t param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0040_std_shared_ptr_uint8_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0040_std_shared_ptr_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0001_STD_UNIQUE_PTR_UNSIGNED_L_8735E8
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0001_STD_UNIQUE_PTR_UNSIGNED_L_8735E8
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::unique_ptr<unsigned
   *            long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0001_std_unique_ptr_unsigned_l_8735e8', () => {
    try {
      const r = parsec.parseFunction(`void sample274(std::unique_ptr<unsigned long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0001_std_unique_ptr_unsigned_l_8735e8 param convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0001_std_unique_ptr_unsigned_l_8735e8 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0001_std_unique_ptr_unsigned_l_8735e8 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0002_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0002_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::unique_ptr<unsigned
   *            long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0002_number', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<unsigned long long> sampleRet274();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0002_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0002_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0002_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0003_STD_UNIQUE_PTR_UNSIGNED_L_8735E8
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0003_STD_UNIQUE_PTR_UNSIGNED_L_8735E8
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::unique_ptr<unsigned
   *            long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0003_std_unique_ptr_unsigned_l_8735e8', () => {
    try {
      const r = parsec.parseClass(`class SampleClass274 { public: std::unique_ptr<unsigned long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0003_std_unique_ptr_unsigned_l_8735e8 class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0003_std_unique_ptr_unsigned_l_8735e8 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0003_std_unique_ptr_unsigned_l_8735e8 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0004_STD_UNIQUE_PTR_UNSIGNED_L_8735E8
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0004_STD_UNIQUE_PTR_UNSIGNED_L_8735E8
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::unique_ptr<unsigned long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0004_std_unique_ptr_unsigned_l_8735e8', () => {
    try {
      const r = parsec.parseFunction(`void pipeline274(std::unique_ptr<unsigned long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0004_std_unique_ptr_unsigned_l_8735e8 pipeline convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0004_std_unique_ptr_unsigned_l_8735e8 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0004_std_unique_ptr_unsigned_l_8735e8 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0005_STD_UNIQUE_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0005_STD_UNIQUE_PTR_INT
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type std::unique_ptr<int
   *            *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0005_std_unique_ptr_int', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<int *>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0005_std_unique_ptr_int convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0005_std_unique_ptr_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0005_std_unique_ptr_int execution error: ${String(err)}`);
    }
  });
});
