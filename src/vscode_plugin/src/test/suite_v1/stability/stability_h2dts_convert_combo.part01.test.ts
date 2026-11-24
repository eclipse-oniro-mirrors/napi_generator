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

suite('Stability_H2DTS_CONVERT_COMBO_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0001_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0001_WCHAR_T
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type wchar_t;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0001_wchar_t', () => {
    try {
      const result = transTskey2Ckey('wchar_t');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0001_wchar_t convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0001_wchar_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0001_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0002_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0002_WCHAR_T
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type wchar_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0002_wchar_t', () => {
    try {
      const r = parsec.parseFunction(`void sample17(wchar_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0002_wchar_t param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0002_wchar_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0002_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0003_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0003_STRING
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type wchar_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0003_string', () => {
    try {
      const r = parsec.parseFunction(`wchar_t sampleRet17();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0003_string return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0003_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0003_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0004_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0004_WCHAR_T
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type wchar_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0004_wchar_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass17 { public: wchar_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0004_wchar_t class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0004_wchar_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0004_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0005_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0005_WCHAR_T
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type wchar_t; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0005_wchar_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline17(wchar_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0005_wchar_t pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0005_wchar_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0005_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0006_STD_WEAK_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0006_STD_WEAK_PTR_INT
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0006_std_weak_ptr_int', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<int>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0006_std_weak_ptr_int convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0006_std_weak_ptr_int convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0006_std_weak_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0007_STD_WEAK_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0007_STD_WEAK_PTR_INT
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0007_std_weak_ptr_int', () => {
    try {
      const r = parsec.parseFunction(`void sample198(std::weak_ptr<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0007_std_weak_ptr_int param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0007_std_weak_ptr_int param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0007_std_weak_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0008_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0008_NUMBER
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0008_number', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<int> sampleRet198();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0008_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0008_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0008_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0009_STD_WEAK_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0009_STD_WEAK_PTR_INT
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0009_std_weak_ptr_int', () => {
    try {
      const r = parsec.parseClass(`class SampleClass198 { public: std::weak_ptr<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0009_std_weak_ptr_int class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0009_std_weak_ptr_int class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0009_std_weak_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0010_STD_WEAK_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0010_STD_WEAK_PTR_INT
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type std::weak_ptr<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0010_std_weak_ptr_int', () => {
    try {
      const r = parsec.parseFunction(`void pipeline198(std::weak_ptr<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0010_std_weak_ptr_int pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0010_std_weak_ptr_int pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0010_std_weak_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0011_STD_WEAK_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0011_STD_WEAK_PTR_SIZE_T
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0011_std_weak_ptr_size_t', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0011_std_weak_ptr_size_t convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0011_std_weak_ptr_size_t convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0011_std_weak_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0012_STD_WEAK_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0012_STD_WEAK_PTR_SIZE_T
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0012_std_weak_ptr_size_t', () => {
    try {
      const r = parsec.parseFunction(`void sample199(std::weak_ptr<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0012_std_weak_ptr_size_t param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0012_std_weak_ptr_size_t param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0012_std_weak_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0013_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0013_NUMBER
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0013_number', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<size_t> sampleRet199();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0013_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0013_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0013_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0014_STD_WEAK_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0014_STD_WEAK_PTR_SIZE_T
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<size_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0014_std_weak_ptr_size_t', () => {
    try {
      const r = parsec.parseClass(`class SampleClass199 { public: std::weak_ptr<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0014_std_weak_ptr_size_t class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_combo_0014_std_weak_ptr_size_t class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0014_std_weak_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0015_STD_WEAK_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0015_STD_WEAK_PTR_SIZE_T
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<size_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0015_std_weak_ptr_size_t', () => {
    try {
      const r = parsec.parseFunction(`void pipeline199(std::weak_ptr<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0015_std_weak_ptr_size_t pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0015_std_weak_ptr_size_t pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0015_std_weak_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0016_STD_WEAK_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0016_STD_WEAK_PTR_DOUBLE
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0016_std_weak_ptr_double', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<double>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0016_std_weak_ptr_double convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0016_std_weak_ptr_double convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0016_std_weak_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0017_STD_WEAK_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0017_STD_WEAK_PTR_DOUBLE
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0017_std_weak_ptr_double', () => {
    try {
      const r = parsec.parseFunction(`void sample200(std::weak_ptr<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0017_std_weak_ptr_double param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0017_std_weak_ptr_double param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0017_std_weak_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0018_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0018_NUMBER
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0018_number', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<double> sampleRet200();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0018_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0018_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0018_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0019_STD_WEAK_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0019_STD_WEAK_PTR_DOUBLE
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0019_std_weak_ptr_double', () => {
    try {
      const r = parsec.parseClass(`class SampleClass200 { public: std::weak_ptr<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0019_std_weak_ptr_double class field convert output non-empty");
      assert.strictEqual(converted, "number",
        "h2dts_convert_combo_0019_std_weak_ptr_double class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0019_std_weak_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0020_STD_WEAK_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0020_STD_WEAK_PTR_DOUBLE
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0020_std_weak_ptr_double', () => {
    try {
      const r = parsec.parseFunction(`void pipeline200(std::weak_ptr<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0020_std_weak_ptr_double pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0020_std_weak_ptr_double pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0020_std_weak_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0021_STD_WEAK_PTR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0021_STD_WEAK_PTR_FLOAT
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0021_std_weak_ptr_float', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<float>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0021_std_weak_ptr_float convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0021_std_weak_ptr_float convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0021_std_weak_ptr_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0022_STD_WEAK_PTR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0022_STD_WEAK_PTR_FLOAT
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0022_std_weak_ptr_float', () => {
    try {
      const r = parsec.parseFunction(`void sample201(std::weak_ptr<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0022_std_weak_ptr_float param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0022_std_weak_ptr_float param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0022_std_weak_ptr_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0023_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0023_NUMBER
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0023_number', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<float> sampleRet201();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0023_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0023_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0023_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0024_STD_WEAK_PTR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0024_STD_WEAK_PTR_FLOAT
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0024_std_weak_ptr_float', () => {
    try {
      const r = parsec.parseClass(`class SampleClass201 { public: std::weak_ptr<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0024_std_weak_ptr_float class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0024_std_weak_ptr_float class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0024_std_weak_ptr_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0025_STD_WEAK_PTR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0025_STD_WEAK_PTR_FLOAT
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0025_std_weak_ptr_float', () => {
    try {
      const r = parsec.parseFunction(`void pipeline201(std::weak_ptr<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0025_std_weak_ptr_float pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0025_std_weak_ptr_float pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0025_std_weak_ptr_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0026_STD_WEAK_PTR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0026_STD_WEAK_PTR_LONG
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<long>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0026_std_weak_ptr_long', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<long>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0026_std_weak_ptr_long convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0026_std_weak_ptr_long convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0026_std_weak_ptr_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0027_STD_WEAK_PTR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0027_STD_WEAK_PTR_LONG
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0027_std_weak_ptr_long', () => {
    try {
      const r = parsec.parseFunction(`void sample202(std::weak_ptr<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0027_std_weak_ptr_long param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0027_std_weak_ptr_long param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0027_std_weak_ptr_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0028_NUMBER
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0028_NUMBER
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0028_number', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<long> sampleRet202();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0028_number return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0028_number return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0028_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0029_STD_WEAK_PTR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0029_STD_WEAK_PTR_LONG
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0029_std_weak_ptr_long', () => {
    try {
      const r = parsec.parseClass(`class SampleClass202 { public: std::weak_ptr<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0029_std_weak_ptr_long class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0029_std_weak_ptr_long class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0029_std_weak_ptr_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0030_STD_WEAK_PTR_LONG
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0030_STD_WEAK_PTR_LONG
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type std::weak_ptr<long>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0030_std_weak_ptr_long', () => {
    try {
      const r = parsec.parseFunction(`void pipeline202(std::weak_ptr<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0030_std_weak_ptr_long pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0030_std_weak_ptr_long pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0030_std_weak_ptr_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0031_STD_WEAK_PTR_SHORT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0031_STD_WEAK_PTR_SHORT
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0031_std_weak_ptr_short', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<short>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0031_std_weak_ptr_short convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0031_std_weak_ptr_short convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0031_std_weak_ptr_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0032
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0032
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0032', () => {
    try {
      const r = parsec.parseFunction(`void sample203(std::weak_ptr<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0032 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0032 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0032 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0033
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0033
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0033', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<short> sampleRet203();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0033 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0033 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0033 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0034
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0034
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<short>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0034', () => {
    try {
      const r = parsec.parseClass(`class SampleClass203 { public: std::weak_ptr<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0034 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0034 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0034 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0035
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0035
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<short>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0035', () => {
    try {
      const r = parsec.parseFunction(`void pipeline203(std::weak_ptr<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0035 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0035 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0035 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0036
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0036
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0036', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0036 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0036 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0036 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0037
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0037
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0037', () => {
    try {
      const r = parsec.parseFunction(`void sample204(std::weak_ptr<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0037 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0037 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0037 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0038
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0038
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0038', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<uint8_t> sampleRet204();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0038 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0038 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0038 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0039
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0039
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<uint8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0039', () => {
    try {
      const r = parsec.parseClass(`class SampleClass204 { public: std::weak_ptr<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0039 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0039 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0039 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0040
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0040
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<uint8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0040', () => {
    try {
      const r = parsec.parseFunction(`void pipeline204(std::weak_ptr<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0040 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0040 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0040 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0041
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0041
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0041', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0041 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0041 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0041 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0042
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0042
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<uint16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0042', () => {
    try {
      const r = parsec.parseFunction(`void sample205(std::weak_ptr<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0042 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0042 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0042 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0043
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0043
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type
   *            std::weak_ptr<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0043', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<uint16_t> sampleRet205();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0043 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0043 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0043 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0044
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0044
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<uint16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0044', () => {
    try {
      const r = parsec.parseClass(`class SampleClass205 { public: std::weak_ptr<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0044 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0044 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0044 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0045
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0045
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<uint16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0045', () => {
    try {
      const r = parsec.parseFunction(`void pipeline205(std::weak_ptr<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0045 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0045 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0045 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0046
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0046
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0046', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0046 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0046 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0046 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0047
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0047
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<uint32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0047', () => {
    try {
      const r = parsec.parseFunction(`void sample206(std::weak_ptr<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0047 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0047 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0047 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0048
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0048
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type
   *            std::weak_ptr<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0048', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<uint32_t> sampleRet206();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0048 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0048 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0048 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0049
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0049
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<uint32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0049', () => {
    try {
      const r = parsec.parseClass(`class SampleClass206 { public: std::weak_ptr<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0049 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0049 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0049 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0050
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0050
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<uint32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0050', () => {
    try {
      const r = parsec.parseFunction(`void pipeline206(std::weak_ptr<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0050 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0050 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0050 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0051
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0051
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0051', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0051 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0051 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0051 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0052
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0052
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<uint64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0052', () => {
    try {
      const r = parsec.parseFunction(`void sample207(std::weak_ptr<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0052 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0052 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0052 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0053
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0053
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type
   *            std::weak_ptr<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0053', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<uint64_t> sampleRet207();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0053 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0053 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0053 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0054
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0054
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<uint64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0054', () => {
    try {
      const r = parsec.parseClass(`class SampleClass207 { public: std::weak_ptr<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0054 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0054 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0054 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0055
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0055
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<uint64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0055', () => {
    try {
      const r = parsec.parseFunction(`void pipeline207(std::weak_ptr<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0055 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0055 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0055 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0056
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0056
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0056', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0056 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0056 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0056 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0057
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0057
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0057', () => {
    try {
      const r = parsec.parseFunction(`void sample208(std::weak_ptr<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0057 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0057 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0057 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0058
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0058
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0058', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<int8_t> sampleRet208();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0058 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0058 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0058 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0059
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0059
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<int8_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0059', () => {
    try {
      const r = parsec.parseClass(`class SampleClass208 { public: std::weak_ptr<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0059 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0059 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0059 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0060
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0060
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<int8_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0060', () => {
    try {
      const r = parsec.parseFunction(`void pipeline208(std::weak_ptr<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0060 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0060 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0060 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0061
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0061
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<int16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0061', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0061 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0061 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0061 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0062
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0062
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<int16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0062', () => {
    try {
      const r = parsec.parseFunction(`void sample209(std::weak_ptr<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0062 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0062 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0062 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0063
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0063
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<int16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0063', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<int16_t> sampleRet209();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0063 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0063 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0063 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0064
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0064
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<int16_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0064', () => {
    try {
      const r = parsec.parseClass(`class SampleClass209 { public: std::weak_ptr<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0064 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0064 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0064 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0065
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0065
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<int16_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0065', () => {
    try {
      const r = parsec.parseFunction(`void pipeline209(std::weak_ptr<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0065 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0065 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0065 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0066
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0066
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<int32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0066', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0066 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0066 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0066 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0067
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0067
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<int32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0067', () => {
    try {
      const r = parsec.parseFunction(`void sample210(std::weak_ptr<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0067 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0067 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0067 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0068
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0068
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<int32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0068', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<int32_t> sampleRet210();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0068 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0068 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0068 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0069
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0069
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<int32_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0069', () => {
    try {
      const r = parsec.parseClass(`class SampleClass210 { public: std::weak_ptr<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0069 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0069 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0069 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0070
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0070
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<int32_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0070', () => {
    try {
      const r = parsec.parseFunction(`void pipeline210(std::weak_ptr<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0070 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0070 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0070 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0071
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0071
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0071', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0071 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0071 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0071 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0072
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0072
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0072', () => {
    try {
      const r = parsec.parseFunction(`void sample211(std::weak_ptr<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0072 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0072 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0072 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0073
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0073
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0073', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<int64_t> sampleRet211();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0073 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0073 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0073 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0074
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0074
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<int64_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0074', () => {
    try {
      const r = parsec.parseClass(`class SampleClass211 { public: std::weak_ptr<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0074 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0074 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0074 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0075
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0075
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type
   *            std::weak_ptr<int64_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0075', () => {
    try {
      const r = parsec.parseFunction(`void pipeline211(std::weak_ptr<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0075 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0075 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0075 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0076
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0076
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<bool>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0076', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0076 convert output non-empty");
      assert.strictEqual(result, "boolean", "h2dts_convert_combo_0076 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0076 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0077
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0077
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0077', () => {
    try {
      const r = parsec.parseFunction(`void sample212(std::weak_ptr<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0077 param convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_combo_0077 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0077 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0078
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0078
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0078', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<bool> sampleRet212();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0078 return convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_combo_0078 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0078 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0079
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0079
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0079', () => {
    try {
      const r = parsec.parseClass(`class SampleClass212 { public: std::weak_ptr<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0079 class field convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_combo_0079 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0079 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0080
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0080
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type std::weak_ptr<bool>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0080', () => {
    try {
      const r = parsec.parseFunction(`void pipeline212(std::weak_ptr<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0080 pipeline convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_combo_0080 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0080 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0081
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0081
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<char>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0081', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0081 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0081 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0081 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0082
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0082
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0082', () => {
    try {
      const r = parsec.parseFunction(`void sample213(std::weak_ptr<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0082 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0082 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0082 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0083
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0083
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0083', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<char> sampleRet213();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0083 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0083 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0083 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0084
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0084
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0084', () => {
    try {
      const r = parsec.parseClass(`class SampleClass213 { public: std::weak_ptr<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0084 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0084 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0084 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0085
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0085
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type std::weak_ptr<char>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0085', () => {
    try {
      const r = parsec.parseFunction(`void pipeline213(std::weak_ptr<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0085 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0085 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0085 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0086
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0086
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type
   *            std::weak_ptr<wchar_t>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0086', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<wchar_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0086 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0086 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0086 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0087
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0087
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::weak_ptr<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0087', () => {
    try {
      const r = parsec.parseFunction(`void sample214(std::weak_ptr<wchar_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0087 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0087 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0087 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0088
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0088
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::weak_ptr<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0088', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<wchar_t> sampleRet214();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0088 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0088 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0088 execution error: ${String(err)}`);
    }
  });
});
