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

suite('Stability_H2DTS_CONVERT_COMBO_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0089
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0089
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::weak_ptr<wchar_t>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0089', () => {
    try {
      const r = parsec.parseClass(`class SampleClass214 { public: std::weak_ptr<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0089 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0089 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0089 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0001_OBJECT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0001_OBJECT
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type object; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0001_object', () => {
    try {
      const r = parsec.parseFunction(`void pipeline292(object p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0001_object pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0001_object pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0001_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0002_CUSTOMOBJECT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0002_CUSTOMOBJECT
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type CustomObject;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0002_customobject', () => {
    try {
      const result = transTskey2Ckey('CustomObject');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0002_customobject convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_combo_0002_customobject convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0002_customobject execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0003_CUSTOMOBJECT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0003_CUSTOMOBJECT
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type CustomObject;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0003_customobject', () => {
    try {
      const r = parsec.parseFunction(`void sample293(CustomObject p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0003_customobject param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0003_customobject param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0003_customobject execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0004_ANY
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0004_ANY
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type CustomObject;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0004_any', () => {
    try {
      const r = parsec.parseFunction(`CustomObject sampleRet293();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0004_any return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0004_any return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0004_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0005_CUSTOMOBJECT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0005_CUSTOMOBJECT
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type CustomObject; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0005_customobject', () => {
    try {
      const r = parsec.parseClass(`class SampleClass293 { public: CustomObject field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0005_customobject class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0005_customobject class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0005_customobject execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0006_CUSTOMOBJECT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0006_CUSTOMOBJECT
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type CustomObject;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0006_customobject', () => {
    try {
      const r = parsec.parseFunction(`void pipeline293(CustomObject p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0006_customobject pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0006_customobject pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0006_customobject execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0007_USERANYTYPE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0007_USERANYTYPE
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type UserAnyType;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0007_useranytype', () => {
    try {
      const result = transTskey2Ckey('UserAnyType');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0007_useranytype convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_combo_0007_useranytype convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0007_useranytype execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0008_USERANYTYPE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0008_USERANYTYPE
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type UserAnyType; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0008_useranytype', () => {
    try {
      const r = parsec.parseFunction(`void sample294(UserAnyType p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0008_useranytype param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0008_useranytype param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0008_useranytype execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0009_ANY
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0009_ANY
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type UserAnyType;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0009_any', () => {
    try {
      const r = parsec.parseFunction(`UserAnyType sampleRet294();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0009_any return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0009_any return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0009_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0010_USERANYTYPE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0010_USERANYTYPE
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type UserAnyType; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0010_useranytype', () => {
    try {
      const r = parsec.parseClass(`class SampleClass294 { public: UserAnyType field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0010_useranytype class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0010_useranytype class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0010_useranytype execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0011_USERANYTYPE
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0011_USERANYTYPE
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type UserAnyType;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0011_useranytype', () => {
    try {
      const r = parsec.parseFunction(`void pipeline294(UserAnyType p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0011_useranytype pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0011_useranytype pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0011_useranytype execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0012_NS_UNKNOWNOBJECT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0012_NS_UNKNOWNOBJECT
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type Ns::UnknownObject;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0012_ns_unknownobject', () => {
    try {
      const result = transTskey2Ckey('Ns::UnknownObject');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0012_ns_unknownobject convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_combo_0012_ns_unknownobject convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0012_ns_unknownobject execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0013_NS_UNKNOWNOBJECT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0013_NS_UNKNOWNOBJECT
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type Ns::UnknownObject;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0013_ns_unknownobject', () => {
    try {
      const r = parsec.parseFunction(`void sample295(Ns::UnknownObject p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0013_ns_unknownobject param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0013_ns_unknownobject param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0013_ns_unknownobject execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0014_ANY
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0014_ANY
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type Ns::UnknownObject;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0014_any', () => {
    try {
      const r = parsec.parseFunction(`Ns::UnknownObject sampleRet295();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0014_any return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0014_any return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0014_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0015_NS_UNKNOWNOBJECT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0015_NS_UNKNOWNOBJECT
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type Ns::UnknownObject;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0015_ns_unknownobject', () => {
    try {
      const r = parsec.parseClass(`class SampleClass295 { public: Ns::UnknownObject field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0015_ns_unknownobject class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0015_ns_unknownobject class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0015_ns_unknownobject execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0016_NS_UNKNOWNOBJECT
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0016_NS_UNKNOWNOBJECT
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type Ns::UnknownObject;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0016_ns_unknownobject', () => {
    try {
      const r = parsec.parseFunction(`void pipeline295(Ns::UnknownObject p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0016_ns_unknownobject pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0016_ns_unknownobject pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0016_ns_unknownobject execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0017_SIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0017_SIGNED_CHAR
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type signed char;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0017_signed_char', () => {
    try {
      const result = transTskey2Ckey('signed char');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0017_signed_char convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0017_signed_char convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0017_signed_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0018_SIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0018_SIGNED_CHAR
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type signed char; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0018_signed_char', () => {
    try {
      const r = parsec.parseFunction(`void sample627(signed char p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0018_signed_char param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0018_signed_char param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0018_signed_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0019_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0019_STRING
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type signed char;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0019_string', () => {
    try {
      const r = parsec.parseFunction(`signed char sampleRet627();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0019_string return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0019_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0019_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0020_SIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0020_SIGNED_CHAR
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type signed char; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0020_signed_char', () => {
    try {
      const r = parsec.parseClass(`class SampleClass627 { public: signed char field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0020_signed_char class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0020_signed_char class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0020_signed_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0021_SIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0021_SIGNED_CHAR
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type signed char;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0021_signed_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline627(signed char p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0021_signed_char pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0021_signed_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0021_signed_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0022_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0022_STD_WSTRING
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type std::wstring;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0022_std_wstring', () => {
    try {
      const result = transTskey2Ckey('std::wstring');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0022_std_wstring convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0022_std_wstring convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0022_std_wstring execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0023_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0023_STD_WSTRING
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type std::wstring;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0023_std_wstring', () => {
    try {
      const r = parsec.parseFunction(`void sample630(std::wstring p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0023_std_wstring param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0023_std_wstring param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0023_std_wstring execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0024_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0024_STRING
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type std::wstring;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0024_string', () => {
    try {
      const r = parsec.parseFunction(`std::wstring sampleRet630();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0024_string return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0024_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0024_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0025_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0025_STD_WSTRING
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type std::wstring; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0025_std_wstring', () => {
    try {
      const r = parsec.parseClass(`class SampleClass630 { public: std::wstring field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0025_std_wstring class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0025_std_wstring class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0025_std_wstring execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0026_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0026_STD_WSTRING
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type std::wstring;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0026_std_wstring', () => {
    try {
      const r = parsec.parseFunction(`void pipeline630(std::wstring p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0026_std_wstring pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0026_std_wstring pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0026_std_wstring execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0027_CONST_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0027_CONST_CHAR
   * @tc.desc   Stability convert h2dts/combo: baseline type-string convert; type const char*;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0027_const_char', () => {
    try {
      const result = transTskey2Ckey('const char*');
      assert.ok(typeof result === 'string' && result.length > 0,
        "h2dts_convert_combo_0027_const_char convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0027_const_char convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0027_const_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0028_CONST_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0028_CONST_CHAR
   * @tc.desc   Stability convert h2dts/combo: function-param convert; type const char*; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0028_const_char', () => {
    try {
      const r = parsec.parseFunction(`void sample631(const char* p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0028_const_char param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0028_const_char param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0028_const_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0029_STRING
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0029_STRING
   * @tc.desc   Stability convert h2dts/combo: function-return convert; type const char*;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0029_string', () => {
    try {
      const r = parsec.parseFunction(`const char* sampleRet631();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0029_string return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0029_string return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0029_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0030_CONST_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0030_CONST_CHAR
   * @tc.desc   Stability convert h2dts/combo: class-field convert; type const char*; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0030_const_char', () => {
    try {
      const r = parsec.parseClass(`class SampleClass631 { public: const char* field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0030_const_char class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0030_const_char class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0030_const_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_CONVERT_COMBO_0031_CONST_CHAR
   * @tc.number SUB_NAPI_H2DTS_CONVERT_COMBO_0031_CONST_CHAR
   * @tc.desc   Stability convert h2dts/combo: parse-convert-gen pipeline; type const char*;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_convert_combo_0031_const_char', () => {
    try {
      const r = parsec.parseFunction(`void pipeline631(const char* p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0031_const_char pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0031_const_char pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0031_const_char execution error: ${String(err)}`);
    }
  });
});
