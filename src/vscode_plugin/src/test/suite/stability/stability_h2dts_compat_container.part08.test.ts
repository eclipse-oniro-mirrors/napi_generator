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

suite('Stability_H2DTS_COMPAT_CONTAINER_Part08', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_CONTAINER._Part08');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT258_STD_LIST_DOUBL_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT258_STD_LIST_DOUBL_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_doubl<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0031_compat258_std_list_doubl_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat258(std::list_doubl<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat258_std_list_doubl_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat258_std_list_doubl_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0031_compat258_std_list_doubl_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_doubl<std::string> m3",
          "h2dts_compat_container_0031_compat258_std_list_doubl_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0031_compat258_std_list_doubl_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT258_STD_LIST_BOOOL_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT258_STD_LIST_BOOOL_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_boool<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0032_compat258_std_list_boool_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat258(std::list_boool<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat258_std_list_boool_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat258_std_list_boool_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0032_compat258_std_list_boool_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_boool<std::string> m3",
          "h2dts_compat_container_0032_compat258_std_list_boool_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0032_compat258_std_list_boool_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT258_STD_LIST_FLOT_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT258_STD_LIST_FLOT_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_flot<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0033_compat258_std_list_flot_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat258(std::list_flot<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat258_std_list_flot_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat258_std_list_flot_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0033_compat258_std_list_flot_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_flot<std::string> m3",
          "h2dts_compat_container_0033_compat258_std_list_flot_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0033_compat258_std_list_flot_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT258_STD_LIST_LNG_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT258_STD_LIST_LNG_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_lng<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0034_compat258_std_list_lng_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat258(std::list_lng<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat258_std_list_lng_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat258_std_list_lng_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0034_compat258_std_list_lng_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_lng<std::string> m3",
          "h2dts_compat_container_0034_compat258_std_list_lng_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0034_compat258_std_list_lng_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT258_STD_LIST_BAD258_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT258_STD_LIST_BAD258_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_bad258<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0035_compat258_std_list_bad258_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat258(std::list_bad258<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat258_std_list_bad258_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat258_std_list_bad258_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0035_compat258_std_list_bad258_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_bad258<std::string> m3",
          "h2dts_compat_container_0035_compat258_std_list_bad258_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0035_compat258_std_list_bad258_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT258_STD_LIST_X_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT258_STD_LIST_X_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_x<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0036_compat258_std_list_x_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat258(std::list_x<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat258_std_list_x_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat258_std_list_x_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0036_compat258_std_list_x_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_x<std::string> m3",
          "h2dts_compat_container_0036_compat258_std_list_x_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0036_compat258_std_list_x_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT258_STD_LIST_STD_STRING_258_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT258_STD_LIST_STD_STRING_258_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<std::string_258> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0037_compat258_std_list_std_string_258_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat258(std::list<std::string_258> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat258_std_list_std_string_258_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat258_std_list_std_string_258_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0037_compat258_std_list_std_string_258_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<std::string_258> m3",
          "h2dts_compat_container_0037_compat258_std_list_std_string_258_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0037_compat258_std_list_std_string_258_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT258_STD_LIST_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT258_STD_LIST_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:list<std:string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0038_compat258_std_list_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat258(std:list<std:string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat258_std_list_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat258_std_list_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0038_compat258_std_list_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<std:string> m3",
          "h2dts_compat_container_0038_compat258_std_list_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0038_compat258_std_list_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT259_STD_DEQUE_ITN_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT259_STD_DEQUE_ITN_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<itn> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0039_compat259_std_deque_itn_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat259(std::deque<itn> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat259_std_deque_itn_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat259_std_deque_itn_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0039_compat259_std_deque_itn_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<itn> m0",
          "h2dts_compat_container_0039_compat259_std_deque_itn_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0039_compat259_std_deque_itn_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT259_STD_DEQUE_DOUBL_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT259_STD_DEQUE_DOUBL_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_doubl<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0040_compat259_std_deque_doubl_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat259(std::deque_doubl<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat259_std_deque_doubl_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat259_std_deque_doubl_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0040_compat259_std_deque_doubl_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_doubl<int> m0",
          "h2dts_compat_container_0040_compat259_std_deque_doubl_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0040_compat259_std_deque_doubl_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT259_STD_DEQUE_BOOOL_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT259_STD_DEQUE_BOOOL_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_boool<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0041_compat259_std_deque_boool_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat259(std::deque_boool<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat259_std_deque_boool_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat259_std_deque_boool_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0041_compat259_std_deque_boool_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_boool<int> m0",
          "h2dts_compat_container_0041_compat259_std_deque_boool_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0041_compat259_std_deque_boool_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT259_STD_DEQUE_FLOT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT259_STD_DEQUE_FLOT_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_flot<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0042_compat259_std_deque_flot_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat259(std::deque_flot<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat259_std_deque_flot_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat259_std_deque_flot_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0042_compat259_std_deque_flot_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_flot<int> m0",
          "h2dts_compat_container_0042_compat259_std_deque_flot_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0042_compat259_std_deque_flot_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT259_STD_DEQUE_LNG_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT259_STD_DEQUE_LNG_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_lng<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0043_compat259_std_deque_lng_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat259(std::deque_lng<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat259_std_deque_lng_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat259_std_deque_lng_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0043_compat259_std_deque_lng_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_lng<int> m0",
          "h2dts_compat_container_0043_compat259_std_deque_lng_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0043_compat259_std_deque_lng_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT259_STD_DEQUE_BAD259_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT259_STD_DEQUE_BAD259_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_bad259<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0044_compat259_std_deque_bad259_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat259(std::deque_bad259<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat259_std_deque_bad259_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat259_std_deque_bad259_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0044_compat259_std_deque_bad259_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_bad259<int> m0",
          "h2dts_compat_container_0044_compat259_std_deque_bad259_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0044_compat259_std_deque_bad259_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT259_STD_DEQUE_X_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT259_STD_DEQUE_X_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_x<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0045_compat259_std_deque_x_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat259(std::deque_x<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat259_std_deque_x_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat259_std_deque_x_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0045_compat259_std_deque_x_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_x<int> m0",
          "h2dts_compat_container_0045_compat259_std_deque_x_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0045_compat259_std_deque_x_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT259_STD_DEQUE_INT_259_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT259_STD_DEQUE_INT_259_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<int_259> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0046_compat259_std_deque_int_259_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat259(std::deque<int_259> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat259_std_deque_int_259_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat259_std_deque_int_259_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0046_compat259_std_deque_int_259_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<int_259> m0",
          "h2dts_compat_container_0046_compat259_std_deque_int_259_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0046_compat259_std_deque_int_259_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT259_STD_DEQUE_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT259_STD_DEQUE_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0047_compat259_std_deque_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat259(std:deque<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat259_std_deque_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat259_std_deque_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0047_compat259_std_deque_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<int> m0",
          "h2dts_compat_container_0047_compat259_std_deque_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0047_compat259_std_deque_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT260_STD_DEQUE_ITN_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT260_STD_DEQUE_ITN_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_itn<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0048_compat260_std_deque_itn_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat260(std::deque_itn<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat260_std_deque_itn_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat260_std_deque_itn_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0048_compat260_std_deque_itn_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_itn<std::string> m1",
          "h2dts_compat_container_0048_compat260_std_deque_itn_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0048_compat260_std_deque_itn_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT260_STD_DEQUE_DOUBL_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT260_STD_DEQUE_DOUBL_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_doubl<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0049_compat260_std_deque_doubl_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat260(std::deque_doubl<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat260_std_deque_doubl_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat260_std_deque_doubl_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0049_compat260_std_deque_doubl_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_doubl<std::string> m1",
          "h2dts_compat_container_0049_compat260_std_deque_doubl_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0049_compat260_std_deque_doubl_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT260_STD_DEQUE_BOOOL_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT260_STD_DEQUE_BOOOL_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_boool<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0050_compat260_std_deque_boool_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat260(std::deque_boool<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat260_std_deque_boool_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat260_std_deque_boool_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0050_compat260_std_deque_boool_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_boool<std::string> m1",
          "h2dts_compat_container_0050_compat260_std_deque_boool_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0050_compat260_std_deque_boool_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT260_STD_DEQUE_FLOT_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT260_STD_DEQUE_FLOT_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_flot<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0051_compat260_std_deque_flot_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat260(std::deque_flot<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat260_std_deque_flot_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat260_std_deque_flot_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0051_compat260_std_deque_flot_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_flot<std::string> m1",
          "h2dts_compat_container_0051_compat260_std_deque_flot_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0051_compat260_std_deque_flot_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT260_STD_DEQUE_LNG_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT260_STD_DEQUE_LNG_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_lng<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0052_compat260_std_deque_lng_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat260(std::deque_lng<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat260_std_deque_lng_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat260_std_deque_lng_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0052_compat260_std_deque_lng_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_lng<std::string> m1",
          "h2dts_compat_container_0052_compat260_std_deque_lng_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0052_compat260_std_deque_lng_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT260_STD_DEQUE_BAD260_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT260_STD_DEQUE_BAD260_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_bad260<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0053_compat260_std_deque_bad260_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat260(std::deque_bad260<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat260_std_deque_bad260_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat260_std_deque_bad260_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0053_compat260_std_deque_bad260_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_bad260<std::string> m1",
          "h2dts_compat_container_0053_compat260_std_deque_bad260_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0053_compat260_std_deque_bad260_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT260_STD_DEQUE_X_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT260_STD_DEQUE_X_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_x<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0054_compat260_std_deque_x_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat260(std::deque_x<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat260_std_deque_x_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat260_std_deque_x_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0054_compat260_std_deque_x_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_x<std::string> m1",
          "h2dts_compat_container_0054_compat260_std_deque_x_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0054_compat260_std_deque_x_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT260_STD_DEQUE_STD_STRING_260_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT260_STD_DEQUE_STD_STRING_260_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<std::string_260> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0055_compat260_std_deque_std_string_260_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat260(std::deque<std::string_260> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat260_std_deque_std_string_260_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat260_std_deque_std_string_260_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0055_compat260_std_deque_std_string_260_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<std::string_260> m1",
          "h2dts_compat_container_0055_compat260_std_deque_std_string_260_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0055_compat260_std_deque_std_string_260_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT260_STD_DEQUE_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT260_STD_DEQUE_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<std:string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0056_compat260_std_deque_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat260(std:deque<std:string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat260_std_deque_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat260_std_deque_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0056_compat260_std_deque_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<std:string> m1",
          "h2dts_compat_container_0056_compat260_std_deque_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0056_compat260_std_deque_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT265_STD_QUEUE_ITN_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT265_STD_QUEUE_ITN_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue<itn> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0057_compat265_std_queue_itn_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat265(std::queue<itn> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat265_std_queue_itn_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat265_std_queue_itn_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0057_compat265_std_queue_itn_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue<itn> m2",
          "h2dts_compat_container_0057_compat265_std_queue_itn_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0057_compat265_std_queue_itn_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT265_STD_QUEUE_DOUBL_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT265_STD_QUEUE_DOUBL_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_doubl<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0058_compat265_std_queue_doubl_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat265(std::queue_doubl<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat265_std_queue_doubl_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat265_std_queue_doubl_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0058_compat265_std_queue_doubl_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_doubl<int> m2",
          "h2dts_compat_container_0058_compat265_std_queue_doubl_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0058_compat265_std_queue_doubl_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT265_STD_QUEUE_BOOOL_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT265_STD_QUEUE_BOOOL_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_boool<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0059_compat265_std_queue_boool_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat265(std::queue_boool<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat265_std_queue_boool_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat265_std_queue_boool_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0059_compat265_std_queue_boool_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_boool<int> m2",
          "h2dts_compat_container_0059_compat265_std_queue_boool_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0059_compat265_std_queue_boool_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT265_STD_QUEUE_FLOT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT265_STD_QUEUE_FLOT_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_flot<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0060_compat265_std_queue_flot_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat265(std::queue_flot<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat265_std_queue_flot_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat265_std_queue_flot_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0060_compat265_std_queue_flot_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_flot<int> m2",
          "h2dts_compat_container_0060_compat265_std_queue_flot_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0060_compat265_std_queue_flot_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT265_STD_QUEUE_LNG_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT265_STD_QUEUE_LNG_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_lng<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0061_compat265_std_queue_lng_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat265(std::queue_lng<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat265_std_queue_lng_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat265_std_queue_lng_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0061_compat265_std_queue_lng_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_lng<int> m2",
          "h2dts_compat_container_0061_compat265_std_queue_lng_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0061_compat265_std_queue_lng_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT265_STD_QUEUE_BAD265_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT265_STD_QUEUE_BAD265_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_bad265<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0062_compat265_std_queue_bad265_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat265(std::queue_bad265<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat265_std_queue_bad265_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat265_std_queue_bad265_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0062_compat265_std_queue_bad265_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_bad265<int> m2",
          "h2dts_compat_container_0062_compat265_std_queue_bad265_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0062_compat265_std_queue_bad265_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT265_STD_QUEUE_X_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT265_STD_QUEUE_X_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_x<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0063_compat265_std_queue_x_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat265(std::queue_x<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat265_std_queue_x_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat265_std_queue_x_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0063_compat265_std_queue_x_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_x<int> m2",
          "h2dts_compat_container_0063_compat265_std_queue_x_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0063_compat265_std_queue_x_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT265_STD_QUEUE_INT_265_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT265_STD_QUEUE_INT_265_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue<int_265> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0064_compat265_std_queue_int_265_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat265(std::queue<int_265> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat265_std_queue_int_265_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat265_std_queue_int_265_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0064_compat265_std_queue_int_265_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue<int_265> m2",
          "h2dts_compat_container_0064_compat265_std_queue_int_265_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0064_compat265_std_queue_int_265_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT265_STD_QUEUE_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT265_STD_QUEUE_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:queue<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0065_compat265_std_queue_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat265(std:queue<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat265_std_queue_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat265_std_queue_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0065_compat265_std_queue_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:queue<int> m2",
          "h2dts_compat_container_0065_compat265_std_queue_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0065_compat265_std_queue_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT266_STD_STACK_ITN_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT266_STD_STACK_ITN_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack<itn> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0066_compat266_std_stack_itn_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(std::stack<itn> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat266_std_stack_itn_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat266_std_stack_itn_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0066_compat266_std_stack_itn_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack<itn> m3",
          "h2dts_compat_container_0066_compat266_std_stack_itn_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0066_compat266_std_stack_itn_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT266_STD_STACK_DOUBL_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT266_STD_STACK_DOUBL_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_doubl<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0067_compat266_std_stack_doubl_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(std::stack_doubl<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat266_std_stack_doubl_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat266_std_stack_doubl_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0067_compat266_std_stack_doubl_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_doubl<int> m3",
          "h2dts_compat_container_0067_compat266_std_stack_doubl_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0067_compat266_std_stack_doubl_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT266_STD_STACK_BOOOL_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT266_STD_STACK_BOOOL_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_boool<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0068_compat266_std_stack_boool_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(std::stack_boool<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat266_std_stack_boool_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat266_std_stack_boool_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0068_compat266_std_stack_boool_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_boool<int> m3",
          "h2dts_compat_container_0068_compat266_std_stack_boool_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0068_compat266_std_stack_boool_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT266_STD_STACK_FLOT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT266_STD_STACK_FLOT_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_flot<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0069_compat266_std_stack_flot_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(std::stack_flot<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat266_std_stack_flot_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat266_std_stack_flot_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0069_compat266_std_stack_flot_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_flot<int> m3",
          "h2dts_compat_container_0069_compat266_std_stack_flot_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0069_compat266_std_stack_flot_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT266_STD_STACK_LNG_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT266_STD_STACK_LNG_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_lng<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0070_compat266_std_stack_lng_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(std::stack_lng<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat266_std_stack_lng_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat266_std_stack_lng_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0070_compat266_std_stack_lng_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_lng<int> m3",
          "h2dts_compat_container_0070_compat266_std_stack_lng_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0070_compat266_std_stack_lng_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT266_STD_STACK_BAD266_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT266_STD_STACK_BAD266_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_bad266<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0071_compat266_std_stack_bad266_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(std::stack_bad266<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat266_std_stack_bad266_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat266_std_stack_bad266_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0071_compat266_std_stack_bad266_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_bad266<int> m3",
          "h2dts_compat_container_0071_compat266_std_stack_bad266_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0071_compat266_std_stack_bad266_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT266_STD_STACK_X_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT266_STD_STACK_X_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_x<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0072_compat266_std_stack_x_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(std::stack_x<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat266_std_stack_x_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat266_std_stack_x_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0072_compat266_std_stack_x_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_x<int> m3",
          "h2dts_compat_container_0072_compat266_std_stack_x_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0072_compat266_std_stack_x_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT266_STD_STACK_INT_266_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT266_STD_STACK_INT_266_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack<int_266> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0073_compat266_std_stack_int_266_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(std::stack<int_266> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat266_std_stack_int_266_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat266_std_stack_int_266_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0073_compat266_std_stack_int_266_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack<int_266> m3",
          "h2dts_compat_container_0073_compat266_std_stack_int_266_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0073_compat266_std_stack_int_266_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT266_STD_STACK_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT266_STD_STACK_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:stack<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0074_compat266_std_stack_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(std:stack<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat266_std_stack_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat266_std_stack_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0074_compat266_std_stack_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:stack<int> m3",
          "h2dts_compat_container_0074_compat266_std_stack_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0074_compat266_std_stack_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT267_STD_PRIORITY_QUEUE_ITN_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT267_STD_PRIORITY_QUEUE_ITN_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue<itn> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0075_compat267_std_priority_queue_itn_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(std::priority_queue<itn> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat267_std_priority_queue_itn_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat267_std_priority_queue_itn_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0075_compat267_std_priority_queue_itn_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue<itn> m0",
          "h2dts_compat_container_0075_compat267_std_priority_queue_itn_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0075_compat267_std_priority_queue_itn_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT267_STD_PRIORITY_QUEUE_DOUBL_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT267_STD_PRIORITY_QUEUE_DOUBL_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_doubl<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0076_compat267_std_priority_queue_doubl_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(std::priority_queue_doubl<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat267_std_priority_queue_doubl_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat267_std_priority_queue_doubl_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0076_compat267_std_priority_queue_doubl_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_doubl<int> m0",
          "h2dts_compat_container_0076_compat267_std_priority_queue_doubl_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0076_compat267_std_priority_queue_doubl_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT267_STD_PRIORITY_QUEUE_BOOOL_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT267_STD_PRIORITY_QUEUE_BOOOL_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_boool<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0001_compat267_std_priority_queue_boool_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(std::priority_queue_boool<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat267_std_priority_queue_boool_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat267_std_priority_queue_boool_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0001_compat267_std_priority_queue_boool_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_boool<int> m0",
          "h2dts_compat_container_0001_compat267_std_priority_queue_boool_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0001_compat267_std_priority_queue_boool_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT267_STD_PRIORITY_QUEUE_FLOT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT267_STD_PRIORITY_QUEUE_FLOT_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_flot<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0002_compat267_std_priority_queue_flot_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(std::priority_queue_flot<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat267_std_priority_queue_flot_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat267_std_priority_queue_flot_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0002_compat267_std_priority_queue_flot_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_flot<int> m0",
          "h2dts_compat_container_0002_compat267_std_priority_queue_flot_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0002_compat267_std_priority_queue_flot_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT267_STD_PRIORITY_QUEUE_LNG_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT267_STD_PRIORITY_QUEUE_LNG_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_lng<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0003_compat267_std_priority_queue_lng_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(std::priority_queue_lng<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat267_std_priority_queue_lng_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat267_std_priority_queue_lng_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0003_compat267_std_priority_queue_lng_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_lng<int> m0",
          "h2dts_compat_container_0003_compat267_std_priority_queue_lng_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0003_compat267_std_priority_queue_lng_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT267_STD_PRIORITY_QUEUE_BAD267_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT267_STD_PRIORITY_QUEUE_BAD267_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_bad267<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0004_compat267_std_priority_queue_bad267_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(std::priority_queue_bad267<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat267_std_priority_queue_bad267_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat267_std_priority_queue_bad267_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0004_compat267_std_priority_queue_bad267_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_bad267<int> m0",
          "h2dts_compat_container_0004_compat267_std_priority_queue_bad267_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0004_compat267_std_priority_queue_bad267_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT267_STD_PRIORITY_QUEUE_X_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT267_STD_PRIORITY_QUEUE_X_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_x<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0005_compat267_std_priority_queue_x_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(std::priority_queue_x<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat267_std_priority_queue_x_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat267_std_priority_queue_x_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0005_compat267_std_priority_queue_x_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_x<int> m0",
          "h2dts_compat_container_0005_compat267_std_priority_queue_x_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0005_compat267_std_priority_queue_x_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT267_STD_PRIORITY_QUEUE_INT_267_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT267_STD_PRIORITY_QUEUE_INT_267_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue<int_267> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0006_compat267_std_priority_queue_int_267_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(std::priority_queue<int_267> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat267_std_priority_queue_int_267_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat267_std_priority_queue_int_267_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0006_compat267_std_priority_queue_int_267_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue<int_267> m0",
          "h2dts_compat_container_0006_compat267_std_priority_queue_int_267_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0006_compat267_std_priority_queue_int_267_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT267_STD_PRIORITY_QUEUE_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT267_STD_PRIORITY_QUEUE_INT_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:priority_queue<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0007_compat267_std_priority_queue_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(std:priority_queue<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat267_std_priority_queue_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat267_std_priority_queue_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0007_compat267_std_priority_queue_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<int> m0",
          "h2dts_compat_container_0007_compat267_std_priority_queue_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0007_compat267_std_priority_queue_int_m0 execution error: ${err}`);
    }
  });
});
