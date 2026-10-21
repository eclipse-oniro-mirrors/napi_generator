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

suite('Stability_H2DTS_COMPAT_TUPLE_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_TUPLE._Part03');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0065_COMPAT231_STD_PAIR_BAD231_INT_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0065_COMPAT231_STD_PAIR_BAD231_INT_INT_M1
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_bad231<int,int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0065_compat231_std_pair_bad231_int_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(std::pair_bad231<int,int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0065_compat231_std_pair_bad231_int_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0065_compat231_std_pair_bad231_int_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0065_compat231_std_pair_bad231_int_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_bad231<int,int> m1",
          "h2dts_compat_tuple_0065_compat231_std_pair_bad231_int_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0065_compat231_std_pair_bad231_int_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0066_COMPAT231_STD_PAIR_X_INT_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0066_COMPAT231_STD_PAIR_X_INT_INT_M1
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_x<int,int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0066_compat231_std_pair_x_int_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(std::pair_x<int,int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0066_compat231_std_pair_x_int_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0066_compat231_std_pair_x_int_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0066_compat231_std_pair_x_int_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_x<int,int> m1",
          "h2dts_compat_tuple_0066_compat231_std_pair_x_int_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0066_compat231_std_pair_x_int_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0067_COMPAT231_STD_PAIR_INT_INT_231_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0067_COMPAT231_STD_PAIR_INT_INT_231_M1
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<int,int_231> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0067_compat231_std_pair_int_int_231_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(std::pair<int,int_231> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0067_compat231_std_pair_int_int_231_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0067_compat231_std_pair_int_int_231_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0067_compat231_std_pair_int_int_231_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<int,int_231> m1",
          "h2dts_compat_tuple_0067_compat231_std_pair_int_int_231_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0067_compat231_std_pair_int_int_231_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0068_COMPAT231_STD_PAIR_INT_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0068_COMPAT231_STD_PAIR_INT_INT_M1
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:pair<int,int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0068_compat231_std_pair_int_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(std:pair<int,int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0068_compat231_std_pair_int_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0068_compat231_std_pair_int_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0068_compat231_std_pair_int_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:pair<int,int> m1",
          "h2dts_compat_tuple_0068_compat231_std_pair_int_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0068_compat231_std_pair_int_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0069_COMPAT232_STD_PAIR_STD_STRING_ITN_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0069_COMPAT232_STD_PAIR_STD_STRING_ITN_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<std::string,itn> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0069_compat232_std_pair_std_string_itn_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat232(std::pair<std::string,itn> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0069_compat232_std_pair_std_string_itn_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0069_compat232_std_pair_std_string_itn_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0069_compat232_std_pair_std_string_itn_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<std::string,itn> m2",
          "h2dts_compat_tuple_0069_compat232_std_pair_std_string_itn_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0069_compat232_std_pair_std_string_itn_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0070_COMPAT232_STD_PAIR_DOUBL_STD_STRING_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0070_COMPAT232_STD_PAIR_DOUBL_STD_STRING_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_doubl<std::string,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0070_compat232_std_pair_doubl_std_string_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat232(std::pair_doubl<std::string,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0070_compat232_std_pair_doubl_std_string_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0070_compat232_std_pair_doubl_std_string_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0070_compat232_std_pair_doubl_std_string_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_doubl<std::string,int> m2",
          "h2dts_compat_tuple_0070_compat232_std_pair_doubl_std_string_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0070_compat232_std_pair_doubl_std_string_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0071_COMPAT232_STD_PAIR_BOOOL_STD_STRING_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0071_COMPAT232_STD_PAIR_BOOOL_STD_STRING_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_boool<std::string,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0071_compat232_std_pair_boool_std_string_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat232(std::pair_boool<std::string,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0071_compat232_std_pair_boool_std_string_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0071_compat232_std_pair_boool_std_string_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0071_compat232_std_pair_boool_std_string_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_boool<std::string,int> m2",
          "h2dts_compat_tuple_0071_compat232_std_pair_boool_std_string_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0071_compat232_std_pair_boool_std_string_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0072_COMPAT232_STD_PAIR_FLOT_STD_STRING_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0072_COMPAT232_STD_PAIR_FLOT_STD_STRING_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_flot<std::string,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0072_compat232_std_pair_flot_std_string_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat232(std::pair_flot<std::string,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0072_compat232_std_pair_flot_std_string_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0072_compat232_std_pair_flot_std_string_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0072_compat232_std_pair_flot_std_string_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_flot<std::string,int> m2",
          "h2dts_compat_tuple_0072_compat232_std_pair_flot_std_string_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0072_compat232_std_pair_flot_std_string_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0073_COMPAT232_STD_PAIR_LNG_STD_STRING_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0073_COMPAT232_STD_PAIR_LNG_STD_STRING_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_lng<std::string,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0073_compat232_std_pair_lng_std_string_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat232(std::pair_lng<std::string,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0073_compat232_std_pair_lng_std_string_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0073_compat232_std_pair_lng_std_string_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0073_compat232_std_pair_lng_std_string_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_lng<std::string,int> m2",
          "h2dts_compat_tuple_0073_compat232_std_pair_lng_std_string_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0073_compat232_std_pair_lng_std_string_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0074_COMPAT232_STD_PAIR_BAD232_STD_STRIN_A00D98
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0074_COMPAT232_STD_PAIR_BAD232_STD_STRIN_A00D98
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_bad232<std::string,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0074_compat232_std_pair_bad232_std_strin_a00d98', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat232(std::pair_bad232<std::string,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0074_compat232_std_pair_bad232_std_strin_a00d98 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0074_compat232_std_pair_bad232_std_strin_a00d98 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0074_compat232_std_pair_bad232_std_strin_a00d98 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_bad232<std::string,int> m2",
          "h2dts_compat_tuple_0074_compat232_std_pair_bad232_std_strin_a00d98 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0074_compat232_std_pair_bad232_std_strin_a00d98 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0075_COMPAT232_STD_PAIR_X_STD_STRING_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0075_COMPAT232_STD_PAIR_X_STD_STRING_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_x<std::string,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0075_compat232_std_pair_x_std_string_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat232(std::pair_x<std::string,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0075_compat232_std_pair_x_std_string_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0075_compat232_std_pair_x_std_string_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0075_compat232_std_pair_x_std_string_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_x<std::string,int> m2",
          "h2dts_compat_tuple_0075_compat232_std_pair_x_std_string_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0075_compat232_std_pair_x_std_string_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0076_COMPAT232_STD_PAIR_STD_STRING_INT_232_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0076_COMPAT232_STD_PAIR_STD_STRING_INT_232_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<std::string,int_232> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0076_compat232_std_pair_std_string_int_232_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat232(std::pair<std::string,int_232> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0076_compat232_std_pair_std_string_int_232_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0076_compat232_std_pair_std_string_int_232_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0076_compat232_std_pair_std_string_int_232_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<std::string,int_232> m2",
          "h2dts_compat_tuple_0076_compat232_std_pair_std_string_int_232_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0076_compat232_std_pair_std_string_int_232_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0001_COMPAT232_STD_PAIR_STD_STRING_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0001_COMPAT232_STD_PAIR_STD_STRING_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:pair<std:string,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0001_compat232_std_pair_std_string_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat232(std:pair<std:string,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0001_compat232_std_pair_std_string_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0001_compat232_std_pair_std_string_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0001_compat232_std_pair_std_string_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:pair<std:string,int> m2",
          "h2dts_compat_tuple_0001_compat232_std_pair_std_string_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0001_compat232_std_pair_std_string_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0002_COMPAT233_STD_TUPLE_ITN_ITN_ITN_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0002_COMPAT233_STD_TUPLE_ITN_ITN_ITN_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<itn,itn,itn> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0002_compat233_std_tuple_itn_itn_itn_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat233(std::tuple<itn,itn,itn> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0002_compat233_std_tuple_itn_itn_itn_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0002_compat233_std_tuple_itn_itn_itn_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0002_compat233_std_tuple_itn_itn_itn_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<itn,itn,itn> m3",
          "h2dts_compat_tuple_0002_compat233_std_tuple_itn_itn_itn_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0002_compat233_std_tuple_itn_itn_itn_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0003_COMPAT233_STD_TUPLE_DOUBL_INT_INT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0003_COMPAT233_STD_TUPLE_DOUBL_INT_INT_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_doubl<int,int,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0003_compat233_std_tuple_doubl_int_int_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat233(std::tuple_doubl<int,int,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0003_compat233_std_tuple_doubl_int_int_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0003_compat233_std_tuple_doubl_int_int_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0003_compat233_std_tuple_doubl_int_int_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_doubl<int,int,int> m3",
          "h2dts_compat_tuple_0003_compat233_std_tuple_doubl_int_int_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0003_compat233_std_tuple_doubl_int_int_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0004_COMPAT233_STD_TUPLE_BOOOL_INT_INT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0004_COMPAT233_STD_TUPLE_BOOOL_INT_INT_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_boool<int,int,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0004_compat233_std_tuple_boool_int_int_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat233(std::tuple_boool<int,int,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0004_compat233_std_tuple_boool_int_int_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0004_compat233_std_tuple_boool_int_int_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0004_compat233_std_tuple_boool_int_int_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_boool<int,int,int> m3",
          "h2dts_compat_tuple_0004_compat233_std_tuple_boool_int_int_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0004_compat233_std_tuple_boool_int_int_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0005_COMPAT233_STD_TUPLE_FLOT_INT_INT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0005_COMPAT233_STD_TUPLE_FLOT_INT_INT_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_flot<int,int,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0005_compat233_std_tuple_flot_int_int_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat233(std::tuple_flot<int,int,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0005_compat233_std_tuple_flot_int_int_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0005_compat233_std_tuple_flot_int_int_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0005_compat233_std_tuple_flot_int_int_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_flot<int,int,int> m3",
          "h2dts_compat_tuple_0005_compat233_std_tuple_flot_int_int_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0005_compat233_std_tuple_flot_int_int_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0006_COMPAT233_STD_TUPLE_LNG_INT_INT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0006_COMPAT233_STD_TUPLE_LNG_INT_INT_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<int,int,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0006_compat233_std_tuple_lng_int_int_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat233(std::tuple_lng<int,int,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0006_compat233_std_tuple_lng_int_int_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0006_compat233_std_tuple_lng_int_int_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0006_compat233_std_tuple_lng_int_int_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<int,int,int> m3",
          "h2dts_compat_tuple_0006_compat233_std_tuple_lng_int_int_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0006_compat233_std_tuple_lng_int_int_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0007_COMPAT233_STD_TUPLE_BAD233_INT_INT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0007_COMPAT233_STD_TUPLE_BAD233_INT_INT_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad233<int,int,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0007_compat233_std_tuple_bad233_int_int_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat233(std::tuple_bad233<int,int,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0007_compat233_std_tuple_bad233_int_int_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0007_compat233_std_tuple_bad233_int_int_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0007_compat233_std_tuple_bad233_int_int_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad233<int,int,int> m3",
          "h2dts_compat_tuple_0007_compat233_std_tuple_bad233_int_int_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0007_compat233_std_tuple_bad233_int_int_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0008_COMPAT233_STD_TUPLE_X_INT_INT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0008_COMPAT233_STD_TUPLE_X_INT_INT_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<int,int,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0008_compat233_std_tuple_x_int_int_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat233(std::tuple_x<int,int,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0008_compat233_std_tuple_x_int_int_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0008_compat233_std_tuple_x_int_int_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0008_compat233_std_tuple_x_int_int_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<int,int,int> m3",
          "h2dts_compat_tuple_0008_compat233_std_tuple_x_int_int_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0008_compat233_std_tuple_x_int_int_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0009_COMPAT233_STD_TUPLE_INT_INT_INT_233_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0009_COMPAT233_STD_TUPLE_INT_INT_INT_233_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<int,int,int_233> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0009_compat233_std_tuple_int_int_int_233_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat233(std::tuple<int,int,int_233> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0009_compat233_std_tuple_int_int_int_233_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0009_compat233_std_tuple_int_int_int_233_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0009_compat233_std_tuple_int_int_int_233_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<int,int,int_233> m3",
          "h2dts_compat_tuple_0009_compat233_std_tuple_int_int_int_233_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0009_compat233_std_tuple_int_int_int_233_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0010_COMPAT233_STD_TUPLE_INT_INT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0010_COMPAT233_STD_TUPLE_INT_INT_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<int,int,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0010_compat233_std_tuple_int_int_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat233(std:tuple<int,int,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0010_compat233_std_tuple_int_int_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0010_compat233_std_tuple_int_int_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0010_compat233_std_tuple_int_int_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<int,int,int> m3",
          "h2dts_compat_tuple_0010_compat233_std_tuple_int_int_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0010_compat233_std_tuple_int_int_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0011_COMPAT234_STD_TUPLE_STD_STRING_ITN_96AE7D
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0011_COMPAT234_STD_TUPLE_STD_STRING_ITN_96AE7D
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<std::string,itn,double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0011_compat234_std_tuple_std_string_itn_96ae7d', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat234(std::tuple<std::string,itn,double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0011_compat234_std_tuple_std_string_itn_96ae7d parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0011_compat234_std_tuple_std_string_itn_96ae7d must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0011_compat234_std_tuple_std_string_itn_96ae7d must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<std::string,itn,double> m0",
          "h2dts_compat_tuple_0011_compat234_std_tuple_std_string_itn_96ae7d param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0011_compat234_std_tuple_std_string_itn_96ae7d execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0012_COMPAT234_STD_TUPLE_STD_STRING_INT_BEE62A
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0012_COMPAT234_STD_TUPLE_STD_STRING_INT_BEE62A
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<std::string,int,doubl> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0012_compat234_std_tuple_std_string_int_bee62a', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat234(std::tuple<std::string,int,doubl> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0012_compat234_std_tuple_std_string_int_bee62a parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0012_compat234_std_tuple_std_string_int_bee62a must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0012_compat234_std_tuple_std_string_int_bee62a must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<std::string,int,doubl> m0",
          "h2dts_compat_tuple_0012_compat234_std_tuple_std_string_int_bee62a param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0012_compat234_std_tuple_std_string_int_bee62a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0013_COMPAT234_STD_TUPLE_BOOOL_STD_STRIN_144767
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0013_COMPAT234_STD_TUPLE_BOOOL_STD_STRIN_144767
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_boool<std::string,int,double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0013_compat234_std_tuple_boool_std_strin_144767', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat234(std::tuple_boool<std::string,int,double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0013_compat234_std_tuple_boool_std_strin_144767 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0013_compat234_std_tuple_boool_std_strin_144767 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0013_compat234_std_tuple_boool_std_strin_144767 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_boool<std::string,int,double> m0",
          "h2dts_compat_tuple_0013_compat234_std_tuple_boool_std_strin_144767 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0013_compat234_std_tuple_boool_std_strin_144767 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0014_COMPAT234_STD_TUPLE_FLOT_STD_STRING_147077
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0014_COMPAT234_STD_TUPLE_FLOT_STD_STRING_147077
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_flot<std::string,int,double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0014_compat234_std_tuple_flot_std_string_147077', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat234(std::tuple_flot<std::string,int,double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0014_compat234_std_tuple_flot_std_string_147077 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0014_compat234_std_tuple_flot_std_string_147077 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0014_compat234_std_tuple_flot_std_string_147077 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_flot<std::string,int,double> m0",
          "h2dts_compat_tuple_0014_compat234_std_tuple_flot_std_string_147077 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0014_compat234_std_tuple_flot_std_string_147077 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0015_COMPAT234_STD_TUPLE_LNG_STD_STRING_55D698
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0015_COMPAT234_STD_TUPLE_LNG_STD_STRING_55D698
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<std::string,int,double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0015_compat234_std_tuple_lng_std_string_55d698', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat234(std::tuple_lng<std::string,int,double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0015_compat234_std_tuple_lng_std_string_55d698 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0015_compat234_std_tuple_lng_std_string_55d698 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0015_compat234_std_tuple_lng_std_string_55d698 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<std::string,int,double> m0",
          "h2dts_compat_tuple_0015_compat234_std_tuple_lng_std_string_55d698 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0015_compat234_std_tuple_lng_std_string_55d698 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0016_COMPAT234_STD_TUPLE_BAD234_STD_STRI_4D7FA6
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0016_COMPAT234_STD_TUPLE_BAD234_STD_STRI_4D7FA6
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad234<std::string,int,double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0016_compat234_std_tuple_bad234_std_stri_4d7fa6', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat234(std::tuple_bad234<std::string,int,double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0016_compat234_std_tuple_bad234_std_stri_4d7fa6 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0016_compat234_std_tuple_bad234_std_stri_4d7fa6 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0016_compat234_std_tuple_bad234_std_stri_4d7fa6 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad234<std::string,int,double> m0",
          "h2dts_compat_tuple_0016_compat234_std_tuple_bad234_std_stri_4d7fa6 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0016_compat234_std_tuple_bad234_std_stri_4d7fa6 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0017_COMPAT234_STD_TUPLE_X_STD_STRING_IN_B82610
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0017_COMPAT234_STD_TUPLE_X_STD_STRING_IN_B82610
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<std::string,int,double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0017_compat234_std_tuple_x_std_string_in_b82610', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat234(std::tuple_x<std::string,int,double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0017_compat234_std_tuple_x_std_string_in_b82610 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0017_compat234_std_tuple_x_std_string_in_b82610 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0017_compat234_std_tuple_x_std_string_in_b82610 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<std::string,int,double> m0",
          "h2dts_compat_tuple_0017_compat234_std_tuple_x_std_string_in_b82610 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0017_compat234_std_tuple_x_std_string_in_b82610 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0018_COMPAT234_STD_TUPLE_STD_STRING_INT_577394
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0018_COMPAT234_STD_TUPLE_STD_STRING_INT_577394
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<std::string,int,double_234> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0018_compat234_std_tuple_std_string_int_577394', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat234(std::tuple<std::string,int,double_234> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0018_compat234_std_tuple_std_string_int_577394 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0018_compat234_std_tuple_std_string_int_577394 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0018_compat234_std_tuple_std_string_int_577394 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<std::string,int,double_234> m0",
          "h2dts_compat_tuple_0018_compat234_std_tuple_std_string_int_577394 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0018_compat234_std_tuple_std_string_int_577394 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0019_COMPAT234_STD_TUPLE_STD_STRING_INT_3D55B4
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0019_COMPAT234_STD_TUPLE_STD_STRING_INT_3D55B4
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<std:string,int,double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0019_compat234_std_tuple_std_string_int_3d55b4', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat234(std:tuple<std:string,int,double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0019_compat234_std_tuple_std_string_int_3d55b4 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0019_compat234_std_tuple_std_string_int_3d55b4 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0019_compat234_std_tuple_std_string_int_3d55b4 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<std:string,int,double> m0",
          "h2dts_compat_tuple_0019_compat234_std_tuple_std_string_int_3d55b4 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0019_compat234_std_tuple_std_string_int_3d55b4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0020_COMPAT261_STD_PAIR_ITN_ITN_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0020_COMPAT261_STD_PAIR_ITN_ITN_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<itn,itn> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0020_compat261_std_pair_itn_itn_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat261(std::pair<itn,itn> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0020_compat261_std_pair_itn_itn_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0020_compat261_std_pair_itn_itn_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0020_compat261_std_pair_itn_itn_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<itn,itn> m2",
          "h2dts_compat_tuple_0020_compat261_std_pair_itn_itn_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0020_compat261_std_pair_itn_itn_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0021_COMPAT261_STD_PAIR_DOUBL_INT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0021_COMPAT261_STD_PAIR_DOUBL_INT_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_doubl<int,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0021_compat261_std_pair_doubl_int_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat261(std::pair_doubl<int,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0021_compat261_std_pair_doubl_int_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0021_compat261_std_pair_doubl_int_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0021_compat261_std_pair_doubl_int_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_doubl<int,int> m2",
          "h2dts_compat_tuple_0021_compat261_std_pair_doubl_int_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0021_compat261_std_pair_doubl_int_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0022_COMPAT261_STD_PAIR_BOOOL_INT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0022_COMPAT261_STD_PAIR_BOOOL_INT_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_boool<int,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0022_compat261_std_pair_boool_int_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat261(std::pair_boool<int,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0022_compat261_std_pair_boool_int_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0022_compat261_std_pair_boool_int_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0022_compat261_std_pair_boool_int_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_boool<int,int> m2",
          "h2dts_compat_tuple_0022_compat261_std_pair_boool_int_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0022_compat261_std_pair_boool_int_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0023_COMPAT261_STD_PAIR_FLOT_INT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0023_COMPAT261_STD_PAIR_FLOT_INT_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_flot<int,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0023_compat261_std_pair_flot_int_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat261(std::pair_flot<int,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0023_compat261_std_pair_flot_int_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0023_compat261_std_pair_flot_int_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0023_compat261_std_pair_flot_int_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_flot<int,int> m2",
          "h2dts_compat_tuple_0023_compat261_std_pair_flot_int_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0023_compat261_std_pair_flot_int_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0024_COMPAT261_STD_PAIR_LNG_INT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0024_COMPAT261_STD_PAIR_LNG_INT_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_lng<int,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0024_compat261_std_pair_lng_int_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat261(std::pair_lng<int,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0024_compat261_std_pair_lng_int_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0024_compat261_std_pair_lng_int_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0024_compat261_std_pair_lng_int_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_lng<int,int> m2",
          "h2dts_compat_tuple_0024_compat261_std_pair_lng_int_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0024_compat261_std_pair_lng_int_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0025_COMPAT261_STD_PAIR_BAD261_INT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0025_COMPAT261_STD_PAIR_BAD261_INT_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_bad261<int,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0025_compat261_std_pair_bad261_int_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat261(std::pair_bad261<int,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0025_compat261_std_pair_bad261_int_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0025_compat261_std_pair_bad261_int_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0025_compat261_std_pair_bad261_int_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_bad261<int,int> m2",
          "h2dts_compat_tuple_0025_compat261_std_pair_bad261_int_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0025_compat261_std_pair_bad261_int_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0026_COMPAT261_STD_PAIR_X_INT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0026_COMPAT261_STD_PAIR_X_INT_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_x<int,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0026_compat261_std_pair_x_int_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat261(std::pair_x<int,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0026_compat261_std_pair_x_int_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0026_compat261_std_pair_x_int_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0026_compat261_std_pair_x_int_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_x<int,int> m2",
          "h2dts_compat_tuple_0026_compat261_std_pair_x_int_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0026_compat261_std_pair_x_int_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0027_COMPAT261_STD_PAIR_INT_INT_261_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0027_COMPAT261_STD_PAIR_INT_INT_261_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<int,int_261> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0027_compat261_std_pair_int_int_261_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat261(std::pair<int,int_261> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0027_compat261_std_pair_int_int_261_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0027_compat261_std_pair_int_int_261_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0027_compat261_std_pair_int_int_261_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<int,int_261> m2",
          "h2dts_compat_tuple_0027_compat261_std_pair_int_int_261_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0027_compat261_std_pair_int_int_261_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0028_COMPAT261_STD_PAIR_INT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0028_COMPAT261_STD_PAIR_INT_INT_M2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:pair<int,int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0028_compat261_std_pair_int_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat261(std:pair<int,int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0028_compat261_std_pair_int_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0028_compat261_std_pair_int_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0028_compat261_std_pair_int_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:pair<int,int> m2",
          "h2dts_compat_tuple_0028_compat261_std_pair_int_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0028_compat261_std_pair_int_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0029_COMPAT262_STD_PAIR_STD_STRING_ITN_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0029_COMPAT262_STD_PAIR_STD_STRING_ITN_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<std::string,itn> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0029_compat262_std_pair_std_string_itn_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat262(std::pair<std::string,itn> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0029_compat262_std_pair_std_string_itn_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0029_compat262_std_pair_std_string_itn_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0029_compat262_std_pair_std_string_itn_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<std::string,itn> m3",
          "h2dts_compat_tuple_0029_compat262_std_pair_std_string_itn_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0029_compat262_std_pair_std_string_itn_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0030_COMPAT262_STD_PAIR_DOUBL_STD_STRING_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0030_COMPAT262_STD_PAIR_DOUBL_STD_STRING_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_doubl<std::string,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0030_compat262_std_pair_doubl_std_string_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat262(std::pair_doubl<std::string,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0030_compat262_std_pair_doubl_std_string_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0030_compat262_std_pair_doubl_std_string_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0030_compat262_std_pair_doubl_std_string_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_doubl<std::string,int> m3",
          "h2dts_compat_tuple_0030_compat262_std_pair_doubl_std_string_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0030_compat262_std_pair_doubl_std_string_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0031_COMPAT262_STD_PAIR_BOOOL_STD_STRING_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0031_COMPAT262_STD_PAIR_BOOOL_STD_STRING_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_boool<std::string,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0031_compat262_std_pair_boool_std_string_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat262(std::pair_boool<std::string,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0031_compat262_std_pair_boool_std_string_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0031_compat262_std_pair_boool_std_string_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0031_compat262_std_pair_boool_std_string_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_boool<std::string,int> m3",
          "h2dts_compat_tuple_0031_compat262_std_pair_boool_std_string_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0031_compat262_std_pair_boool_std_string_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0032_COMPAT262_STD_PAIR_FLOT_STD_STRING_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0032_COMPAT262_STD_PAIR_FLOT_STD_STRING_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_flot<std::string,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0032_compat262_std_pair_flot_std_string_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat262(std::pair_flot<std::string,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0032_compat262_std_pair_flot_std_string_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0032_compat262_std_pair_flot_std_string_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0032_compat262_std_pair_flot_std_string_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_flot<std::string,int> m3",
          "h2dts_compat_tuple_0032_compat262_std_pair_flot_std_string_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0032_compat262_std_pair_flot_std_string_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0033_COMPAT262_STD_PAIR_LNG_STD_STRING_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0033_COMPAT262_STD_PAIR_LNG_STD_STRING_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_lng<std::string,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0033_compat262_std_pair_lng_std_string_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat262(std::pair_lng<std::string,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0033_compat262_std_pair_lng_std_string_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0033_compat262_std_pair_lng_std_string_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0033_compat262_std_pair_lng_std_string_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_lng<std::string,int> m3",
          "h2dts_compat_tuple_0033_compat262_std_pair_lng_std_string_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0033_compat262_std_pair_lng_std_string_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0034_COMPAT262_STD_PAIR_BAD262_STD_STRIN_B23080
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0034_COMPAT262_STD_PAIR_BAD262_STD_STRIN_B23080
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_bad262<std::string,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0034_compat262_std_pair_bad262_std_strin_b23080', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat262(std::pair_bad262<std::string,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0034_compat262_std_pair_bad262_std_strin_b23080 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0034_compat262_std_pair_bad262_std_strin_b23080 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0034_compat262_std_pair_bad262_std_strin_b23080 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_bad262<std::string,int> m3",
          "h2dts_compat_tuple_0034_compat262_std_pair_bad262_std_strin_b23080 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0034_compat262_std_pair_bad262_std_strin_b23080 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0035_COMPAT262_STD_PAIR_X_STD_STRING_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0035_COMPAT262_STD_PAIR_X_STD_STRING_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_x<std::string,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0035_compat262_std_pair_x_std_string_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat262(std::pair_x<std::string,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0035_compat262_std_pair_x_std_string_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0035_compat262_std_pair_x_std_string_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0035_compat262_std_pair_x_std_string_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_x<std::string,int> m3",
          "h2dts_compat_tuple_0035_compat262_std_pair_x_std_string_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0035_compat262_std_pair_x_std_string_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0036_COMPAT262_STD_PAIR_STD_STRING_INT_262_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0036_COMPAT262_STD_PAIR_STD_STRING_INT_262_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<std::string,int_262> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0036_compat262_std_pair_std_string_int_262_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat262(std::pair<std::string,int_262> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0036_compat262_std_pair_std_string_int_262_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0036_compat262_std_pair_std_string_int_262_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0036_compat262_std_pair_std_string_int_262_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<std::string,int_262> m3",
          "h2dts_compat_tuple_0036_compat262_std_pair_std_string_int_262_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0036_compat262_std_pair_std_string_int_262_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0037_COMPAT262_STD_PAIR_STD_STRING_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0037_COMPAT262_STD_PAIR_STD_STRING_INT_M3
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:pair<std:string,int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0037_compat262_std_pair_std_string_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat262(std:pair<std:string,int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0037_compat262_std_pair_std_string_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0037_compat262_std_pair_std_string_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0037_compat262_std_pair_std_string_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:pair<std:string,int> m3",
          "h2dts_compat_tuple_0037_compat262_std_pair_std_string_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0037_compat262_std_pair_std_string_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0038_COMPAT263_STD_TUPLE_ITN_ITN_ITN_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0038_COMPAT263_STD_TUPLE_ITN_ITN_ITN_M0
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<itn,itn,itn> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0038_compat263_std_tuple_itn_itn_itn_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat263(std::tuple<itn,itn,itn> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0038_compat263_std_tuple_itn_itn_itn_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0038_compat263_std_tuple_itn_itn_itn_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0038_compat263_std_tuple_itn_itn_itn_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<itn,itn,itn> m0",
          "h2dts_compat_tuple_0038_compat263_std_tuple_itn_itn_itn_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0038_compat263_std_tuple_itn_itn_itn_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0039_COMPAT263_STD_TUPLE_DOUBL_INT_INT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0039_COMPAT263_STD_TUPLE_DOUBL_INT_INT_INT_M0
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_doubl<int,int,int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0039_compat263_std_tuple_doubl_int_int_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat263(std::tuple_doubl<int,int,int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0039_compat263_std_tuple_doubl_int_int_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0039_compat263_std_tuple_doubl_int_int_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0039_compat263_std_tuple_doubl_int_int_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_doubl<int,int,int> m0",
          "h2dts_compat_tuple_0039_compat263_std_tuple_doubl_int_int_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0039_compat263_std_tuple_doubl_int_int_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0040_COMPAT263_STD_TUPLE_BOOOL_INT_INT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0040_COMPAT263_STD_TUPLE_BOOOL_INT_INT_INT_M0
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_boool<int,int,int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0040_compat263_std_tuple_boool_int_int_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat263(std::tuple_boool<int,int,int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0040_compat263_std_tuple_boool_int_int_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0040_compat263_std_tuple_boool_int_int_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0040_compat263_std_tuple_boool_int_int_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_boool<int,int,int> m0",
          "h2dts_compat_tuple_0040_compat263_std_tuple_boool_int_int_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0040_compat263_std_tuple_boool_int_int_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0041_COMPAT263_STD_TUPLE_FLOT_INT_INT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0041_COMPAT263_STD_TUPLE_FLOT_INT_INT_INT_M0
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_flot<int,int,int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0041_compat263_std_tuple_flot_int_int_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat263(std::tuple_flot<int,int,int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0041_compat263_std_tuple_flot_int_int_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0041_compat263_std_tuple_flot_int_int_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0041_compat263_std_tuple_flot_int_int_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_flot<int,int,int> m0",
          "h2dts_compat_tuple_0041_compat263_std_tuple_flot_int_int_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0041_compat263_std_tuple_flot_int_int_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0042_COMPAT263_STD_TUPLE_LNG_INT_INT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0042_COMPAT263_STD_TUPLE_LNG_INT_INT_INT_M0
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<int,int,int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0042_compat263_std_tuple_lng_int_int_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat263(std::tuple_lng<int,int,int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0042_compat263_std_tuple_lng_int_int_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0042_compat263_std_tuple_lng_int_int_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0042_compat263_std_tuple_lng_int_int_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<int,int,int> m0",
          "h2dts_compat_tuple_0042_compat263_std_tuple_lng_int_int_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0042_compat263_std_tuple_lng_int_int_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0043_COMPAT263_STD_TUPLE_BAD263_INT_INT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0043_COMPAT263_STD_TUPLE_BAD263_INT_INT_INT_M0
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad263<int,int,int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0043_compat263_std_tuple_bad263_int_int_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat263(std::tuple_bad263<int,int,int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0043_compat263_std_tuple_bad263_int_int_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0043_compat263_std_tuple_bad263_int_int_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0043_compat263_std_tuple_bad263_int_int_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad263<int,int,int> m0",
          "h2dts_compat_tuple_0043_compat263_std_tuple_bad263_int_int_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0043_compat263_std_tuple_bad263_int_int_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0044_COMPAT263_STD_TUPLE_X_INT_INT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0044_COMPAT263_STD_TUPLE_X_INT_INT_INT_M0
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<int,int,int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0044_compat263_std_tuple_x_int_int_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat263(std::tuple_x<int,int,int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0044_compat263_std_tuple_x_int_int_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0044_compat263_std_tuple_x_int_int_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0044_compat263_std_tuple_x_int_int_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<int,int,int> m0",
          "h2dts_compat_tuple_0044_compat263_std_tuple_x_int_int_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0044_compat263_std_tuple_x_int_int_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0045_COMPAT263_STD_TUPLE_INT_INT_INT_263_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0045_COMPAT263_STD_TUPLE_INT_INT_INT_263_M0
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<int,int,int_263> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0045_compat263_std_tuple_int_int_int_263_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat263(std::tuple<int,int,int_263> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0045_compat263_std_tuple_int_int_int_263_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0045_compat263_std_tuple_int_int_int_263_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0045_compat263_std_tuple_int_int_int_263_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<int,int,int_263> m0",
          "h2dts_compat_tuple_0045_compat263_std_tuple_int_int_int_263_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0045_compat263_std_tuple_int_int_int_263_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0046_COMPAT263_STD_TUPLE_INT_INT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0046_COMPAT263_STD_TUPLE_INT_INT_INT_M0
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<int,int,int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0046_compat263_std_tuple_int_int_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat263(std:tuple<int,int,int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0046_compat263_std_tuple_int_int_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0046_compat263_std_tuple_int_int_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0046_compat263_std_tuple_int_int_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<int,int,int> m0",
          "h2dts_compat_tuple_0046_compat263_std_tuple_int_int_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0046_compat263_std_tuple_int_int_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0047_STD_TUPLE_STRING_TRUNC_INT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0047_STD_TUPLE_STRING_TRUNC_INT_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            truncated integer typename "itn" in std::tuple<std::string,itn,double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0047_std_tuple_string_trunc_int_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat264(std::tuple<std::string,itn,double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0047_std_tuple_string_trunc_int_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0047_std_tuple_string_trunc_int_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0047_std_tuple_string_trunc_int_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<std::string,itn,double> m1",
          "h2dts_compat_tuple_0047_std_tuple_string_trunc_int_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0047_std_tuple_string_trunc_int_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0048_COMPAT264_STD_TUPLE_STD_STRING_INT_E168FC
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0048_COMPAT264_STD_TUPLE_STD_STRING_INT_E168FC
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<std::string,int,doubl> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0048_compat264_std_tuple_std_string_int_e168fc', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat264(std::tuple<std::string,int,doubl> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0048_compat264_std_tuple_std_string_int_e168fc parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0048_compat264_std_tuple_std_string_int_e168fc must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0048_compat264_std_tuple_std_string_int_e168fc must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<std::string,int,doubl> m1",
          "h2dts_compat_tuple_0048_compat264_std_tuple_std_string_int_e168fc param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0048_compat264_std_tuple_std_string_int_e168fc execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0049_COMPAT264_STD_TUPLE_BOOOL_STD_STRIN_687707
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0049_COMPAT264_STD_TUPLE_BOOOL_STD_STRIN_687707
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_boool<std::string,int,double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0049_compat264_std_tuple_boool_std_strin_687707', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat264(std::tuple_boool<std::string,int,double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0049_compat264_std_tuple_boool_std_strin_687707 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0049_compat264_std_tuple_boool_std_strin_687707 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0049_compat264_std_tuple_boool_std_strin_687707 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_boool<std::string,int,double> m1",
          "h2dts_compat_tuple_0049_compat264_std_tuple_boool_std_strin_687707 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0049_compat264_std_tuple_boool_std_strin_687707 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0050_COMPAT264_STD_TUPLE_FLOT_STD_STRING_2175DE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0050_COMPAT264_STD_TUPLE_FLOT_STD_STRING_2175DE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_flot<std::string,int,double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0050_compat264_std_tuple_flot_std_string_2175de', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat264(std::tuple_flot<std::string,int,double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0050_compat264_std_tuple_flot_std_string_2175de parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0050_compat264_std_tuple_flot_std_string_2175de must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0050_compat264_std_tuple_flot_std_string_2175de must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_flot<std::string,int,double> m1",
          "h2dts_compat_tuple_0050_compat264_std_tuple_flot_std_string_2175de param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0050_compat264_std_tuple_flot_std_string_2175de execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0051_COMPAT264_STD_TUPLE_LNG_STD_STRING_CFA182
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0051_COMPAT264_STD_TUPLE_LNG_STD_STRING_CFA182
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<std::string,int,double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0051_compat264_std_tuple_lng_std_string_cfa182', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat264(std::tuple_lng<std::string,int,double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0051_compat264_std_tuple_lng_std_string_cfa182 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0051_compat264_std_tuple_lng_std_string_cfa182 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0051_compat264_std_tuple_lng_std_string_cfa182 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<std::string,int,double> m1",
          "h2dts_compat_tuple_0051_compat264_std_tuple_lng_std_string_cfa182 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0051_compat264_std_tuple_lng_std_string_cfa182 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0052_COMPAT264_STD_TUPLE_BAD264_STD_STRI_E79190
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0052_COMPAT264_STD_TUPLE_BAD264_STD_STRI_E79190
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad264<std::string,int,double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0052_compat264_std_tuple_bad264_std_stri_e79190', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat264(std::tuple_bad264<std::string,int,double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0052_compat264_std_tuple_bad264_std_stri_e79190 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0052_compat264_std_tuple_bad264_std_stri_e79190 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0052_compat264_std_tuple_bad264_std_stri_e79190 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad264<std::string,int,double> m1",
          "h2dts_compat_tuple_0052_compat264_std_tuple_bad264_std_stri_e79190 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0052_compat264_std_tuple_bad264_std_stri_e79190 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0053_COMPAT264_STD_TUPLE_X_STD_STRING_IN_5CB44B
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0053_COMPAT264_STD_TUPLE_X_STD_STRING_IN_5CB44B
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<std::string,int,double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0053_compat264_std_tuple_x_std_string_in_5cb44b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat264(std::tuple_x<std::string,int,double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0053_compat264_std_tuple_x_std_string_in_5cb44b parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0053_compat264_std_tuple_x_std_string_in_5cb44b must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0053_compat264_std_tuple_x_std_string_in_5cb44b must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<std::string,int,double> m1",
          "h2dts_compat_tuple_0053_compat264_std_tuple_x_std_string_in_5cb44b param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0053_compat264_std_tuple_x_std_string_in_5cb44b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0054_COMPAT264_STD_TUPLE_STD_STRING_INT_7A8882
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0054_COMPAT264_STD_TUPLE_STD_STRING_INT_7A8882
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<std::string,int,double_264> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0054_compat264_std_tuple_std_string_int_7a8882', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat264(std::tuple<std::string,int,double_264> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0054_compat264_std_tuple_std_string_int_7a8882 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0054_compat264_std_tuple_std_string_int_7a8882 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0054_compat264_std_tuple_std_string_int_7a8882 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<std::string,int,double_264> m1",
          "h2dts_compat_tuple_0054_compat264_std_tuple_std_string_int_7a8882 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0054_compat264_std_tuple_std_string_int_7a8882 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0055_COMPAT264_STD_TUPLE_STD_STRING_INT_A471DD
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0055_COMPAT264_STD_TUPLE_STD_STRING_INT_A471DD
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<std:string,int,double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0055_compat264_std_tuple_std_string_int_a471dd', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat264(std:tuple<std:string,int,double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0055_compat264_std_tuple_std_string_int_a471dd parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0055_compat264_std_tuple_std_string_int_a471dd must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0055_compat264_std_tuple_std_string_int_a471dd must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<std:string,int,double> m1",
          "h2dts_compat_tuple_0055_compat264_std_tuple_std_string_int_a471dd param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0055_compat264_std_tuple_std_string_int_a471dd execution error: ${err}`);
    }
  });
});
