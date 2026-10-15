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

suite('Stability_H2DTS_CONVERT_FUNC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0006_STD_UNIQUE_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0006_STD_UNIQUE_PTR_INT
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::unique_ptr<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0006_std_unique_ptr_int', () => {
    try {
      const r = parsec.parseFunction(`void sample275(std::unique_ptr<int *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0006_std_unique_ptr_int param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0006_std_unique_ptr_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0006_std_unique_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0007_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0007_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::unique_ptr<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0007_number', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<int *> sampleRet275();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0007_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0007_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0007_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0008_STD_UNIQUE_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0008_STD_UNIQUE_PTR_INT
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::unique_ptr<int *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0008_std_unique_ptr_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass275 { public: std::unique_ptr<int *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0008_std_unique_ptr_int class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0008_std_unique_ptr_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0008_std_unique_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0009_STD_UNIQUE_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0009_STD_UNIQUE_PTR_INT
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type std::unique_ptr<int
   *            *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0009_std_unique_ptr_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline275(std::unique_ptr<int *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0009_std_unique_ptr_int pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0009_std_unique_ptr_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0009_std_unique_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0010_STD_SHARED_PTR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0010_STD_SHARED_PTR_STD_STRING
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0010_std_shared_ptr_std_string', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0010_std_shared_ptr_std_string convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0010_std_shared_ptr_std_string convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0010_std_shared_ptr_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0011_STD_SHARED_PTR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0011_STD_SHARED_PTR_STD_STRING
   * @tc.desc   Stability convert h2dts/func: function-param convert; type
   *            std::shared_ptr<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0011_std_shared_ptr_std_string', () => {
    try {
      const r = parsec.parseFunction(`void sample276(std::shared_ptr<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0011_std_shared_ptr_std_string param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0011_std_shared_ptr_std_string param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0011_std_shared_ptr_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0012_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0012_STRING
   * @tc.desc   Stability convert h2dts/func: function-return convert; type
   *            std::shared_ptr<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0012_string', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<std::string> sampleRet276();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0012_string return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0012_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0012_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0013_STD_SHARED_PTR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0013_STD_SHARED_PTR_STD_STRING
   * @tc.desc   Stability convert h2dts/func: class-field convert; type
   *            std::shared_ptr<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0013_std_shared_ptr_std_string', () => {
    try {
      const r = parsec.parseClass(`class SampleClass276 { public: std::shared_ptr<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0013_std_shared_ptr_std_string class field convert output non-empty");
      assert.strictEqual(converted, "string",
        "h2dts_convert_func_0013_std_shared_ptr_std_string class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0013_std_shared_ptr_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0014_STD_SHARED_PTR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0014_STD_SHARED_PTR_STD_STRING
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::shared_ptr<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0014_std_shared_ptr_std_string', () => {
    try {
      const r = parsec.parseFunction(`void pipeline276(std::shared_ptr<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0014_std_shared_ptr_std_string pipeline convert output non-empty");
      assert.strictEqual(converted, "string",
        "h2dts_convert_func_0014_std_shared_ptr_std_string pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0014_std_shared_ptr_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0015_STD_SHARED_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0015_STD_SHARED_PTR_CHAR
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<char *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0015_std_shared_ptr_char', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<char *>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0015_std_shared_ptr_char convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0015_std_shared_ptr_char convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0015_std_shared_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0016_STD_SHARED_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0016_STD_SHARED_PTR_CHAR
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<char *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0016_std_shared_ptr_char', () => {
    try {
      const r = parsec.parseFunction(`void sample277(std::shared_ptr<char *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0016_std_shared_ptr_char param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0016_std_shared_ptr_char param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0016_std_shared_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0017_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0017_STRING
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::shared_ptr<char *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0017_string', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<char *> sampleRet277();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0017_string return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0017_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0017_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0018_STD_SHARED_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0018_STD_SHARED_PTR_CHAR
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::shared_ptr<char *>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0018_std_shared_ptr_char', () => {
    try {
      const r = parsec.parseClass(`class SampleClass277 { public: std::shared_ptr<char *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0018_std_shared_ptr_char class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0018_std_shared_ptr_char class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0018_std_shared_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0019_STD_SHARED_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0019_STD_SHARED_PTR_CHAR
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type std::shared_ptr<char
   *            *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0019_std_shared_ptr_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline277(std::shared_ptr<char *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0019_std_shared_ptr_char pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0019_std_shared_ptr_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0019_std_shared_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0020_STD_SHARED_PTR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0020_STD_SHARED_PTR_LONG_LONG
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0020_std_shared_ptr_long_long', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<long long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0020_std_shared_ptr_long_long convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0020_std_shared_ptr_long_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0020_std_shared_ptr_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0021_STD_SHARED_PTR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0021_STD_SHARED_PTR_LONG_LONG
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0021_std_shared_ptr_long_long', () => {
    try {
      const r = parsec.parseFunction(`void sample278(std::shared_ptr<long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0021_std_shared_ptr_long_long param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0021_std_shared_ptr_long_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0021_std_shared_ptr_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0022_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0022_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::shared_ptr<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0022_number', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<long long> sampleRet278();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0022_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0022_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0022_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0023_STD_SHARED_PTR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0023_STD_SHARED_PTR_LONG_LONG
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::shared_ptr<long long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0023_std_shared_ptr_long_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass278 { public: std::shared_ptr<long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0023_std_shared_ptr_long_long class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0023_std_shared_ptr_long_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0023_std_shared_ptr_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0024_STD_SHARED_PTR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0024_STD_SHARED_PTR_LONG_LONG
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type std::shared_ptr<long
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0024_std_shared_ptr_long_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline278(std::shared_ptr<long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0024_std_shared_ptr_long_long pipeline convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0024_std_shared_ptr_long_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0024_std_shared_ptr_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0025_STD_SHARED_PTR_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0025_STD_SHARED_PTR_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<unsigned short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0025_std_shared_ptr_unsigned_short', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<unsigned short>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0025_std_shared_ptr_unsigned_short convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0025_std_shared_ptr_unsigned_short convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0025_std_shared_ptr_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0026_STD_SHARED_PTR_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0026_STD_SHARED_PTR_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0026_std_shared_ptr_unsigned_short', () => {
    try {
      const r = parsec.parseFunction(`void sample279(std::shared_ptr<unsigned short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0026_std_shared_ptr_unsigned_short param convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0026_std_shared_ptr_unsigned_short param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0026_std_shared_ptr_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0027_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0027_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::shared_ptr<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0027_number', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<unsigned short> sampleRet279();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0027_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0027_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0027_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0028_STD_SHARED_PTR_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0028_STD_SHARED_PTR_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::shared_ptr<unsigned
   *            short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0028_std_shared_ptr_unsigned_short', () => {
    try {
      const r = parsec.parseClass(`class SampleClass279 { public: std::shared_ptr<unsigned short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0028_std_shared_ptr_unsigned_short class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0028_std_shared_ptr_unsigned_short class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0028_std_shared_ptr_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0029_STD_SHARED_PTR_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0029_STD_SHARED_PTR_UNSIGNED_SHORT
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::shared_ptr<unsigned short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0029_std_shared_ptr_unsigned_short', () => {
    try {
      const r = parsec.parseFunction(`void pipeline279(std::shared_ptr<unsigned short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0029_std_shared_ptr_unsigned_short pipeline convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0029_std_shared_ptr_unsigned_short pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0029_std_shared_ptr_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0030_STD_SHARED_PTR_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0030_STD_SHARED_PTR_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<unsigned long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0030_std_shared_ptr_unsigned_long', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<unsigned long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0030_std_shared_ptr_unsigned_long convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0030_std_shared_ptr_unsigned_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0030_std_shared_ptr_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0031_STD_SHARED_PTR_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0031_STD_SHARED_PTR_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<unsigned
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0031_std_shared_ptr_unsigned_long', () => {
    try {
      const r = parsec.parseFunction(`void sample280(std::shared_ptr<unsigned long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0031_std_shared_ptr_unsigned_long param convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0031_std_shared_ptr_unsigned_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0031_std_shared_ptr_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0032_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0032_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::shared_ptr<unsigned
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0032_number', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<unsigned long> sampleRet280();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0032_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0032_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0032_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0033_STD_SHARED_PTR_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0033_STD_SHARED_PTR_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::shared_ptr<unsigned
   *            long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0033_std_shared_ptr_unsigned_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass280 { public: std::shared_ptr<unsigned long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0033_std_shared_ptr_unsigned_long class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0033_std_shared_ptr_unsigned_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0033_std_shared_ptr_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0034_STD_SHARED_PTR_UNSIGNED_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0034_STD_SHARED_PTR_UNSIGNED_LONG
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::shared_ptr<unsigned long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0034_std_shared_ptr_unsigned_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline280(std::shared_ptr<unsigned long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0034_std_shared_ptr_unsigned_long pipeline convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0034_std_shared_ptr_unsigned_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0034_std_shared_ptr_unsigned_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0035_STD_SHARED_PTR_UNSIGNED_L_A15AE4
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0035_STD_SHARED_PTR_UNSIGNED_L_A15AE4
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type
   *            std::shared_ptr<unsigned long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0035_std_shared_ptr_unsigned_l_a15ae4', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<unsigned long long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0035_std_shared_ptr_unsigned_l_a15ae4 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0035_std_shared_ptr_unsigned_l_a15ae4 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0035_std_shared_ptr_unsigned_l_a15ae4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0036_STD_SHARED_PTR_UNSIGNED_L_A15AE4
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0036_STD_SHARED_PTR_UNSIGNED_L_A15AE4
   * @tc.desc   Stability convert h2dts/func: function-param convert; type std::shared_ptr<unsigned
   *            long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0036_std_shared_ptr_unsigned_l_a15ae4', () => {
    try {
      const r = parsec.parseFunction(`void sample281(std::shared_ptr<unsigned long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0036_std_shared_ptr_unsigned_l_a15ae4 param convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0036_std_shared_ptr_unsigned_l_a15ae4 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0036_std_shared_ptr_unsigned_l_a15ae4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0037_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0037_NUMBER
   * @tc.desc   Stability convert h2dts/func: function-return convert; type std::shared_ptr<unsigned
   *            long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0037_number', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<unsigned long long> sampleRet281();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0037_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0037_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0037_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0038_STD_SHARED_PTR_UNSIGNED_L_A15AE4
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0038_STD_SHARED_PTR_UNSIGNED_L_A15AE4
   * @tc.desc   Stability convert h2dts/func: class-field convert; type std::shared_ptr<unsigned
   *            long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0038_std_shared_ptr_unsigned_l_a15ae4', () => {
    try {
      const r = parsec.parseClass(`class SampleClass281 { public: std::shared_ptr<unsigned long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0038_std_shared_ptr_unsigned_l_a15ae4 class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0038_std_shared_ptr_unsigned_l_a15ae4 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0038_std_shared_ptr_unsigned_l_a15ae4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0039_STD_SHARED_PTR_UNSIGNED_L_A15AE4
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0039_STD_SHARED_PTR_UNSIGNED_L_A15AE4
   * @tc.desc   Stability convert h2dts/func: parse-convert-gen pipeline; type
   *            std::shared_ptr<unsigned long long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0039_std_shared_ptr_unsigned_l_a15ae4', () => {
    try {
      const r = parsec.parseFunction(`void pipeline281(std::shared_ptr<unsigned long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0039_std_shared_ptr_unsigned_l_a15ae4 pipeline convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_func_0039_std_shared_ptr_unsigned_l_a15ae4 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0039_std_shared_ptr_unsigned_l_a15ae4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_FUNC_0040_STD_SHARED_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_FUNC_0040_STD_SHARED_PTR_INT
   * @tc.desc   Stability convert h2dts/func: baseline type-string convert; type std::shared_ptr<int
   *            *>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_func_0040_std_shared_ptr_int', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<int *>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_func_0040_std_shared_ptr_int convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0040_std_shared_ptr_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0040_std_shared_ptr_int execution error: ${String(err)}`);
    }
  });
});
