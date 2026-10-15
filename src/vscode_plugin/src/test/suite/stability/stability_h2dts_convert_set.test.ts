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

suite('Stability_H2DTS_CONVERT_SET', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_SET.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0001
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0001
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type std::set<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0001', () => {
    try {
      const result = transTskey2Ckey('std::set<int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0001 convert output non-empty");
      assert.strictEqual(result, "Set<number>", "h2dts_convert_set_0001 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0001 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0002
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0002
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::set<int>; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0002', () => {
    try {
      const r = parsec.parseFunction(`void sample19(std::set<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample19');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0002 param convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0002 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0002 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0003
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0003
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::set<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0003', () => {
    try {
      const r = parsec.parseFunction(`std::set<int> sampleRet19();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet19');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0003 return convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0003 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0003 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0004
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0004
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::set<int>; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0004', () => {
    try {
      const r = parsec.parseClass(`class SampleClass19 { public: std::set<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass19');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0004 class field convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0004 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0004 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0005
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0005
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type std::set<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0005', () => {
    try {
      const r = parsec.parseFunction(`void pipeline19(std::set<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline19');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0005 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0005 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0005 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0006
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0006
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type
   *            std::unordered_set<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0006', () => {
    try {
      const result = transTskey2Ckey('std::unordered_set<int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0006 convert output non-empty");
      assert.strictEqual(result, "Set<number>", "h2dts_convert_set_0006 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0006 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0007
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0007
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::unordered_set<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0007', () => {
    try {
      const r = parsec.parseFunction(`void sample35(std::unordered_set<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample35');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0007 param convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0007 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0007 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0008
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0008
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::unordered_set<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0008', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_set<int> sampleRet35();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet35');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0008 return convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0008 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0008 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0009
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0009
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::unordered_set<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0009', () => {
    try {
      const r = parsec.parseClass(`class SampleClass35 { public: std::unordered_set<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass35');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0009 class field convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0009 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0009 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0010
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0010
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type
   *            std::unordered_set<int>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0010', () => {
    try {
      const r = parsec.parseFunction(`void pipeline35(std::unordered_set<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline35');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0010 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0010 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0010 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0011
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0011
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type std::multiset<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0011', () => {
    try {
      const result = transTskey2Ckey('std::multiset<int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0011 convert output non-empty");
      assert.strictEqual(result, "Set<number>", "h2dts_convert_set_0011 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0011 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0012
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0012
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::multiset<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0012', () => {
    try {
      const r = parsec.parseFunction(`void sample40(std::multiset<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample40');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0012 param convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0012 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0012 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0013
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0013
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::multiset<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0013', () => {
    try {
      const r = parsec.parseFunction(`std::multiset<int> sampleRet40();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet40');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0013 return convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0013 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0013 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0014
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0014
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::multiset<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0014', () => {
    try {
      const r = parsec.parseClass(`class SampleClass40 { public: std::multiset<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass40');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0014 class field convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0014 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0014 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0015
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0015
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type std::multiset<int>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0015', () => {
    try {
      const r = parsec.parseFunction(`void pipeline40(std::multiset<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline40');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0015 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0015 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0015 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0016
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0016
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type
   *            std::set<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0016', () => {
    try {
      const result = transTskey2Ckey('std::set<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0016 convert output non-empty");
      assert.strictEqual(result, "Set<string>", "h2dts_convert_set_0016 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0016 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0017
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0017
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::set<std::string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0017', () => {
    try {
      const r = parsec.parseFunction(`void sample58(std::set<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample58');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0017 param convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0017 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0017 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0018
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0018
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::set<std::string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0018', () => {
    try {
      const r = parsec.parseFunction(`std::set<std::string> sampleRet58();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet58');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0018 return convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0018 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0018 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0019
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0019
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::set<std::string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0019', () => {
    try {
      const r = parsec.parseClass(`class SampleClass58 { public: std::set<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass58');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0019 class field convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0019 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0019 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0020
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0020
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type std::set<std::string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0020', () => {
    try {
      const r = parsec.parseFunction(`void pipeline58(std::set<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline58');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0020 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0020 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0020 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0021
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0021
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type std::set<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0021', () => {
    try {
      const result = transTskey2Ckey('std::set<double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0021 convert output non-empty");
      assert.strictEqual(result, "Set<number>", "h2dts_convert_set_0021 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0021 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0022
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0022
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::set<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0022', () => {
    try {
      const r = parsec.parseFunction(`void sample135(std::set<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample135');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0022 param convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0022 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0022 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0023
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0023
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::set<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0023', () => {
    try {
      const r = parsec.parseFunction(`std::set<double> sampleRet135();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet135');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0023 return convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0023 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0023 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0024
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0024
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::set<double>; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0024', () => {
    try {
      const r = parsec.parseClass(`class SampleClass135 { public: std::set<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass135');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0024 class field convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0024 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0024 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0025
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0025
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type std::set<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0025', () => {
    try {
      const r = parsec.parseFunction(`void pipeline135(std::set<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline135');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0025 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0025 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0025 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0026
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0026
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type
   *            std::set<std::wstring>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0026', () => {
    try {
      const result = transTskey2Ckey('std::set<std::wstring>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0026 convert output non-empty");
      assert.strictEqual(result, "Set<string>", "h2dts_convert_set_0026 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0026 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0027
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0027
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::set<std::wstring>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0027', () => {
    try {
      const r = parsec.parseFunction(`void sample136(std::set<std::wstring> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample136');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0027 param convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0027 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0027 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0028
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0028
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::set<std::wstring>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0028', () => {
    try {
      const r = parsec.parseFunction(`std::set<std::wstring> sampleRet136();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet136');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0028 return convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0028 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0028 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0029
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0029
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::set<std::wstring>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0029', () => {
    try {
      const r = parsec.parseClass(`class SampleClass136 { public: std::set<std::wstring> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass136');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0029 class field convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0029 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0029 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0030
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0030
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type
   *            std::set<std::wstring>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0030', () => {
    try {
      const r = parsec.parseFunction(`void pipeline136(std::set<std::wstring> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline136');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0030 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0030 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0030 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0031
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0031
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type
   *            std::unordered_set<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0031', () => {
    try {
      const result = transTskey2Ckey('std::unordered_set<double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0031 convert output non-empty");
      assert.strictEqual(result, "Set<number>", "h2dts_convert_set_0031 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0031 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0032
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0032
   * @tc.desc   Stability convert h2dts/set: function-param convert; type
   *            std::unordered_set<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0032', () => {
    try {
      const r = parsec.parseFunction(`void sample142(std::unordered_set<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample142');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0032 param convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0032 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0032 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0033
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0033
   * @tc.desc   Stability convert h2dts/set: function-return convert; type
   *            std::unordered_set<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0033', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_set<double> sampleRet142();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet142');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0033 return convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0033 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0033 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0034
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0034
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::unordered_set<double>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0034', () => {
    try {
      const r = parsec.parseClass(`class SampleClass142 { public: std::unordered_set<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass142');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0034 class field convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0034 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0034 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0035
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0035
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type
   *            std::unordered_set<double>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0035', () => {
    try {
      const r = parsec.parseFunction(`void pipeline142(std::unordered_set<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline142');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0035 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0035 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0035 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0036
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0036
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type
   *            std::unordered_set<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0036', () => {
    try {
      const result = transTskey2Ckey('std::unordered_set<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0036 convert output non-empty");
      assert.strictEqual(result, "Set<string>", "h2dts_convert_set_0036 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0036 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0037
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0037
   * @tc.desc   Stability convert h2dts/set: function-param convert; type
   *            std::unordered_set<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0037', () => {
    try {
      const r = parsec.parseFunction(`void sample143(std::unordered_set<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample143');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0037 param convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0037 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0037 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0038
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0038
   * @tc.desc   Stability convert h2dts/set: function-return convert; type
   *            std::unordered_set<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0038', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_set<std::string> sampleRet143();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet143');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0038 return convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0038 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0038 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0039
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0039
   * @tc.desc   Stability convert h2dts/set: class-field convert; type
   *            std::unordered_set<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0039', () => {
    try {
      const r = parsec.parseClass(`class SampleClass143 { public: std::unordered_set<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass143');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0039 class field convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0039 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0039 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0040
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0040
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type
   *            std::unordered_set<std::string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0040', () => {
    try {
      const r = parsec.parseFunction(`void pipeline143(std::unordered_set<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline143');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0040 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0040 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0040 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0041
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0041
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type std::set;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0041', () => {
    try {
      const result = transTskey2Ckey('std::set');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0041 convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_set_0041 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0041 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0042
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0042
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::set; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0042', () => {
    try {
      const r = parsec.parseFunction(`void sample210(std::set p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample210');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0042 param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_set_0042 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0042 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0043
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0043
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::set; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0043', () => {
    try {
      const r = parsec.parseFunction(`std::set sampleRet210();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet210');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0043 return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_set_0043 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0043 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0044
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0044
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::set; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0044', () => {
    try {
      const r = parsec.parseClass(`class SampleClass210 { public: std::set field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass210');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0044 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_set_0044 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0044 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0045
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0045
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type std::set; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0045', () => {
    try {
      const r = parsec.parseFunction(`void pipeline210(std::set p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline210');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0045 pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_set_0045 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0045 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0046
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0046
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type std::set<int> m3;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0046', () => {
    try {
      const result = transTskey2Ckey('std::set<int> m3');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0046 convert output non-empty");
      assert.strictEqual(result, "Set<number>", "h2dts_convert_set_0046 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0046 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0047
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0047
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::set<int> m3;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0047', () => {
    try {
      const r = parsec.parseFunction(`void sample225(std::set<int> m3 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample225');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0047 param convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0047 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0047 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0048
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0048
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::set<int> m3;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0048', () => {
    try {
      const r = parsec.parseFunction(`std::set<int> m3 sampleRet225();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet225');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0048 return convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0048 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0048 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0049
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0049
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::set<int> m3; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0049', () => {
    try {
      const r = parsec.parseClass(`class SampleClass225 { public: std::set<int> m3 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass225');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0049 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_set_0049 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0049 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0050
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0050
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type std::set<int> m3;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0050', () => {
    try {
      const r = parsec.parseFunction(`void pipeline225(std::set<int> m3 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline225');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0050 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0050 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0050 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0051
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0051
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type
   *            std::set<std::string> m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0051', () => {
    try {
      const result = transTskey2Ckey('std::set<std::string> m0');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0051 convert output non-empty");
      assert.strictEqual(result, "Set<string>", "h2dts_convert_set_0051 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0051 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0052
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0052
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::set<std::string> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0052', () => {
    try {
      const r = parsec.parseFunction(`void sample226(std::set<std::string> m0 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample226');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0052 param convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0052 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0052 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0053
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0053
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::set<std::string> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0053', () => {
    try {
      const r = parsec.parseFunction(`std::set<std::string> m0 sampleRet226();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet226');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0053 return convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0053 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0053 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0054
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0054
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::set<std::string> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0054', () => {
    try {
      const r = parsec.parseClass(`class SampleClass226 { public: std::set<std::string> m0 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass226');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0054 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_set_0054 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0054 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0055
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0055
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type std::set<std::string>
   *            m0; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0055', () => {
    try {
      const r = parsec.parseFunction(`void pipeline226(std::set<std::string> m0 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline226');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0055 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0055 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0055 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0056
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0056
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type std::multiset<int>
   *            m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0056', () => {
    try {
      const result = transTskey2Ckey('std::multiset<int> m1');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0056 convert output non-empty");
      assert.strictEqual(result, "Set<number>", "h2dts_convert_set_0056 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0056 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0057
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0057
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::multiset<int> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0057', () => {
    try {
      const r = parsec.parseFunction(`void sample239(std::multiset<int> m1 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample239');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0057 param convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0057 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0057 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0058
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0058
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::multiset<int> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0058', () => {
    try {
      const r = parsec.parseFunction(`std::multiset<int> m1 sampleRet239();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet239');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0058 return convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0058 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0058 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0059
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0059
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::multiset<int> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0059', () => {
    try {
      const r = parsec.parseClass(`class SampleClass239 { public: std::multiset<int> m1 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass239');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0059 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_set_0059 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0059 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0060
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0060
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type std::multiset<int> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0060', () => {
    try {
      const r = parsec.parseFunction(`void pipeline239(std::multiset<int> m1 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline239');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0060 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0060 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0060 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0061
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0061
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type
   *            std::unordered_set<int> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0061', () => {
    try {
      const result = transTskey2Ckey('std::unordered_set<int> m3');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0061 convert output non-empty");
      assert.strictEqual(result, "Set<number>", "h2dts_convert_set_0061 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0061 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0062
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0062
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::unordered_set<int>
   *            m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0062', () => {
    try {
      const r = parsec.parseFunction(`void sample241(std::unordered_set<int> m3 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample241');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0062 param convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0062 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0062 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0063
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0063
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::unordered_set<int>
   *            m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0063', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_set<int> m3 sampleRet241();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet241');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0063 return convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0063 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0063 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0064
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0064
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::unordered_set<int> m3;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0064', () => {
    try {
      const r = parsec.parseClass(`class SampleClass241 { public: std::unordered_set<int> m3 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass241');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0064 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_set_0064 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0064 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0065
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0065
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type
   *            std::unordered_set<int> m3; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0065', () => {
    try {
      const r = parsec.parseFunction(`void pipeline241(std::unordered_set<int> m3 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline241');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0065 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0065 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0065 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0066
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0066
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type std::set<int> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0066', () => {
    try {
      const result = transTskey2Ckey('std::set<int> m0');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0066 convert output non-empty");
      assert.strictEqual(result, "Set<number>", "h2dts_convert_set_0066 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0066 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0067
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0067
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::set<int> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0067', () => {
    try {
      const r = parsec.parseFunction(`void sample255(std::set<int> m0 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample255');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0067 param convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0067 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0067 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0068
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0068
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::set<int> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0068', () => {
    try {
      const r = parsec.parseFunction(`std::set<int> m0 sampleRet255();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet255');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0068 return convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0068 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0068 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0069
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0069
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::set<int> m0; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0069', () => {
    try {
      const r = parsec.parseClass(`class SampleClass255 { public: std::set<int> m0 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass255');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0069 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_set_0069 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0069 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0070
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0070
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type std::set<int> m0;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0070', () => {
    try {
      const r = parsec.parseFunction(`void pipeline255(std::set<int> m0 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline255');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0070 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0070 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0070 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0071
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0071
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type
   *            std::set<std::string> m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0071', () => {
    try {
      const result = transTskey2Ckey('std::set<std::string> m1');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0071 convert output non-empty");
      assert.strictEqual(result, "Set<string>", "h2dts_convert_set_0071 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0071 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0072
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0072
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::set<std::string> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0072', () => {
    try {
      const r = parsec.parseFunction(`void sample256(std::set<std::string> m1 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample256');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0072 param convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0072 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0072 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0073
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0073
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::set<std::string> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0073', () => {
    try {
      const r = parsec.parseFunction(`std::set<std::string> m1 sampleRet256();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet256');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0073 return convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0073 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0073 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0074
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0074
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::set<std::string> m1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0074', () => {
    try {
      const r = parsec.parseClass(`class SampleClass256 { public: std::set<std::string> m1 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass256');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0074 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_set_0074 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0074 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0075
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0075
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type std::set<std::string>
   *            m1; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0075', () => {
    try {
      const r = parsec.parseFunction(`void pipeline256(std::set<std::string> m1 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline256');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0075 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<string>", "h2dts_convert_set_0075 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0075 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0076
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0076
   * @tc.desc   Stability convert h2dts/set: baseline type-string convert; type std::multiset<int>
   *            m2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0076', () => {
    try {
      const result = transTskey2Ckey('std::multiset<int> m2');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_set_0076 convert output non-empty");
      assert.strictEqual(result, "Set<number>", "h2dts_convert_set_0076 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0076 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0077
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0077
   * @tc.desc   Stability convert h2dts/set: function-param convert; type std::multiset<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0077', () => {
    try {
      const r = parsec.parseFunction(`void sample269(std::multiset<int> m2 p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.strictEqual(r[0].name, 'sample269');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0077 param convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0077 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0077 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0078
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0078
   * @tc.desc   Stability convert h2dts/set: function-return convert; type std::multiset<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0078', () => {
    try {
      const r = parsec.parseFunction(`std::multiset<int> m2 sampleRet269();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'sampleRet269');
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0078 return convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0078 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0078 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0079
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0079
   * @tc.desc   Stability convert h2dts/set: class-field convert; type std::multiset<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0079', () => {
    try {
      const r = parsec.parseClass(`class SampleClass269 { public: std::multiset<int> m2 field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'SampleClass269');
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0079 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_set_0079 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0079 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_SET_0080
   * @tc.number SUB_NAPI_H2DTS_CONVERT_SET_0080
   * @tc.desc   Stability convert h2dts/set: parse-convert-gen pipeline; type std::multiset<int> m2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_set_0080', () => {
    try {
      const r = parsec.parseFunction(`void pipeline269(std::multiset<int> m2 p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.strictEqual(r[0].name, 'pipeline269');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_set_0080 pipeline convert output non-empty");
      assert.strictEqual(converted, "Set<number>", "h2dts_convert_set_0080 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_set_0080 execution error: ${err}`);
    }
  });
});
