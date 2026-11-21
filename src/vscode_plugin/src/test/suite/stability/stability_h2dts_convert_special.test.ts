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
import { runCompatSafe } from './stability_helpers';
import { transTskey2Ckey } from '../../../gen/gendts';
import * as parsec from '../../../parse/parsec';

suite('Stability_H2DTS_CONVERT_SPECIAL', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_SPECIAL.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0001
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0001
   * @tc.desc   Stability convert h2dts/special: baseline type-string convert; type
   *            std::complex<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0001', () => {
    try {
      const result = transTskey2Ckey('std::complex<double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_special_0001 convert output non-empty");
      assert.strictEqual(result, "{real: number, imag: number}", "h2dts_convert_special_0001 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0001 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0002
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0002
   * @tc.desc   Stability convert h2dts/special: function-param convert; type std::complex<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0002', () => {
    try {
      const r = parsec.parseFunction(`void sample75(std::complex<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample75');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0002 param convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}", "h2dts_convert_special_0002 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0002 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0003
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0003
   * @tc.desc   Stability convert h2dts/special: function-return convert; type std::complex<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0003', () => {
    try {
      const r = parsec.parseFunction(`std::complex<double> sampleRet75();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet75');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0003 return convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}", "h2dts_convert_special_0003 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0003 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0004
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0004
   * @tc.desc   Stability convert h2dts/special: class-field convert; type std::complex<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0004', () => {
    try {
      const r = parsec.parseClass(`class SampleClass75 { public: std::complex<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass75');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0004 class field convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}",
        "h2dts_convert_special_0004 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0004 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0005
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0005
   * @tc.desc   Stability convert h2dts/special: parse-convert-gen pipeline; type
   *            std::complex<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0005', () => {
    try {
      const r = parsec.parseFunction(`void pipeline75(std::complex<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline75');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0005 pipeline convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}",
        "h2dts_convert_special_0005 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0005 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0006
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0006
   * @tc.desc   Stability convert h2dts/special: baseline type-string convert; type
   *            std::chrono::milliseconds; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0006', () => {
    try {
      const result = transTskey2Ckey('std::chrono::milliseconds');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_special_0006 convert output non-empty");
      assert.strictEqual(result, "Date", "h2dts_convert_special_0006 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0006 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0007
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0007
   * @tc.desc   Stability convert h2dts/special: function-param convert; type
   *            std::chrono::milliseconds; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0007', () => {
    try {
      const r = parsec.parseFunction(`void sample106(std::chrono::milliseconds p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample106');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0007 param convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0007 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0007 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0008
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0008
   * @tc.desc   Stability convert h2dts/special: function-return convert; type
   *            std::chrono::milliseconds; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0008', () => {
    try {
      const r = parsec.parseFunction(`std::chrono::milliseconds sampleRet106();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet106');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0008 return convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0008 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0008 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0009
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0009
   * @tc.desc   Stability convert h2dts/special: class-field convert; type
   *            std::chrono::milliseconds; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0009', () => {
    try {
      const r = parsec.parseClass(`class SampleClass106 { public: std::chrono::milliseconds field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass106');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0009 class field convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0009 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0009 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0010
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0010
   * @tc.desc   Stability convert h2dts/special: parse-convert-gen pipeline; type
   *            std::chrono::milliseconds; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0010', () => {
    try {
      const r = parsec.parseFunction(`void pipeline106(std::chrono::milliseconds p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline106');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0010 pipeline convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0010 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0010 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0011
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0011
   * @tc.desc   Stability convert h2dts/special: baseline type-string convert; type
   *            std::chrono::seconds; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0011', () => {
    try {
      const result = transTskey2Ckey('std::chrono::seconds');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_special_0011 convert output non-empty");
      assert.strictEqual(result, "Date", "h2dts_convert_special_0011 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0011 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0012
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0012
   * @tc.desc   Stability convert h2dts/special: function-param convert; type std::chrono::seconds;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0012', () => {
    try {
      const r = parsec.parseFunction(`void sample107(std::chrono::seconds p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample107');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0012 param convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0012 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0012 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0013
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0013
   * @tc.desc   Stability convert h2dts/special: function-return convert; type std::chrono::seconds;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0013', () => {
    try {
      const r = parsec.parseFunction(`std::chrono::seconds sampleRet107();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet107');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0013 return convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0013 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0013 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0014
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0014
   * @tc.desc   Stability convert h2dts/special: class-field convert; type std::chrono::seconds;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0014', () => {
    try {
      const r = parsec.parseClass(`class SampleClass107 { public: std::chrono::seconds field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass107');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0014 class field convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0014 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0014 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0015
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0015
   * @tc.desc   Stability convert h2dts/special: parse-convert-gen pipeline; type
   *            std::chrono::seconds; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0015', () => {
    try {
      const r = parsec.parseFunction(`void pipeline107(std::chrono::seconds p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline107');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0015 pipeline convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0015 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0015 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0016
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0016
   * @tc.desc   Stability convert h2dts/special: baseline type-string convert; type
   *            std::chrono::system_clock::time_point; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0016', () => {
    try {
      const result = transTskey2Ckey('std::chrono::system_clock::time_point');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_special_0016 convert output non-empty");
      assert.strictEqual(result, "Date", "h2dts_convert_special_0016 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0016 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0017
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0017
   * @tc.desc   Stability convert h2dts/special: function-param convert; type
   *            std::chrono::system_clock::time_point; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0017', () => {
    try {
      const r = parsec.parseFunction(`void sample108(std::chrono::system_clock::time_point p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample108');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0017 param convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0017 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0017 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0018
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0018
   * @tc.desc   Stability convert h2dts/special: function-return convert; type
   *            std::chrono::system_clock::time_point; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0018', () => {
    try {
      const r = parsec.parseFunction(`std::chrono::system_clock::time_point sampleRet108();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet108');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0018 return convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0018 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0018 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0019
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0019
   * @tc.desc   Stability convert h2dts/special: class-field convert; type
   *            std::chrono::system_clock::time_point; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0019', () => {
    try {
      const r = parsec.parseClass(`class SampleClass108 { public: std::chrono::system_clock::time_point field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass108');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0019 class field convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0019 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0019 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0020
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0020
   * @tc.desc   Stability convert h2dts/special: parse-convert-gen pipeline; type
   *            std::chrono::system_clock::time_point; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0020', () => {
    try {
      const r = parsec.parseFunction(`void pipeline108(std::chrono::system_clock::time_point p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline108');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0020 pipeline convert output non-empty");
      assert.strictEqual(converted, "Date", "h2dts_convert_special_0020 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0020 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0021
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0021
   * @tc.desc   Stability convert h2dts/special: baseline type-string convert; type
   *            std::complex<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0021', () => {
    try {
      const result = transTskey2Ckey('std::complex<float>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_special_0021 convert output non-empty");
      assert.strictEqual(result, "{real: number, imag: number}", "h2dts_convert_special_0021 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0021 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0022
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0022
   * @tc.desc   Stability convert h2dts/special: function-param convert; type std::complex<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0022', () => {
    try {
      const r = parsec.parseFunction(`void sample151(std::complex<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample151');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0022 param convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}", "h2dts_convert_special_0022 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0022 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0023
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0023
   * @tc.desc   Stability convert h2dts/special: function-return convert; type std::complex<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0023', () => {
    try {
      const r = parsec.parseFunction(`std::complex<float> sampleRet151();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet151');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0023 return convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}", "h2dts_convert_special_0023 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0023 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0024
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0024
   * @tc.desc   Stability convert h2dts/special: class-field convert; type std::complex<float>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0024', () => {
    try {
      const r = parsec.parseClass(`class SampleClass151 { public: std::complex<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass151');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0024 class field convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}",
        "h2dts_convert_special_0024 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0024 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0025
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0025
   * @tc.desc   Stability convert h2dts/special: parse-convert-gen pipeline; type
   *            std::complex<float>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0025', () => {
    try {
      const r = parsec.parseFunction(`void pipeline151(std::complex<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline151');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0025 pipeline convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}",
        "h2dts_convert_special_0025 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0025 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0026
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0026
   * @tc.desc   Stability convert h2dts/special: baseline type-string convert; type
   *            std::complex<long double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0026', () => {
    try {
      const result = transTskey2Ckey('std::complex<long double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_special_0026 convert output non-empty");
      assert.strictEqual(result, "{real: number, imag: number}", "h2dts_convert_special_0026 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0026 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0027
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0027
   * @tc.desc   Stability convert h2dts/special: function-param convert; type std::complex<long
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0027', () => {
    try {
      const r = parsec.parseFunction(`void sample198(std::complex<long double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample198');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0027 param convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}", "h2dts_convert_special_0027 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0027 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0028
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0028
   * @tc.desc   Stability convert h2dts/special: function-return convert; type std::complex<long
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0028', () => {
    try {
      const r = parsec.parseFunction(`std::complex<long double> sampleRet198();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet198');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0028 return convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}", "h2dts_convert_special_0028 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0028 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0029
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0029
   * @tc.desc   Stability convert h2dts/special: class-field convert; type std::complex<long
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0029', () => {
    try {
      const r = parsec.parseClass(`class SampleClass198 { public: std::complex<long double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass198');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0029 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_special_0029 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0029 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0030
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0030
   * @tc.desc   Stability convert h2dts/special: parse-convert-gen pipeline; type std::complex<long
   *            double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0030', () => {
    try {
      const r = parsec.parseFunction(`void pipeline198(std::complex<long double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline198');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0030 pipeline convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}",
        "h2dts_convert_special_0030 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0030 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0031
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0031
   * @tc.desc   Stability convert h2dts/special: baseline type-string convert; type
   *            std::complex<double> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0031', () => {
    try {
      const result = transTskey2Ckey('std::complex<double> m2');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_special_0031 convert output non-empty");
      assert.strictEqual(result, "{real: number, imag: number}", "h2dts_convert_special_0031 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0031 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0032
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0032
   * @tc.desc   Stability convert h2dts/special: function-param convert; type std::complex<double>
   *            m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0032', () => {
    try {
      const r = parsec.parseFunction(`void sample248(std::complex<double> m2 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample248');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0032 param convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}", "h2dts_convert_special_0032 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0032 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0033
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0033
   * @tc.desc   Stability convert h2dts/special: function-return convert; type std::complex<double>
   *            m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0033', () => {
    try {
      const r = parsec.parseFunction(`std::complex<double> m2 sampleRet248();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet248');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0033 return convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}", "h2dts_convert_special_0033 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0033 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0034
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0034
   * @tc.desc   Stability convert h2dts/special: class-field convert; type std::complex<double> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0034', () => {
    try {
      const r = parsec.parseClass(`class SampleClass248 { public: std::complex<double> m2 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass248');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0034 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_special_0034 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0034 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SPECIAL_0035
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SPECIAL_0035
   * @tc.desc   Stability convert h2dts/special: parse-convert-gen pipeline; type
   *            std::complex<double> m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_special_0035', () => {
    try {
      const r = parsec.parseFunction(`void pipeline248(std::complex<double> m2 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline248');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_special_0035 pipeline convert output non-empty");
      assert.strictEqual(converted, "{real: number, imag: number}",
        "h2dts_convert_special_0035 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_special_0035 execution error: ${err}`);
    }
  });
});
