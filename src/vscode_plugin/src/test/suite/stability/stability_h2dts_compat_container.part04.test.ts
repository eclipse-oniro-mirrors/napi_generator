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

suite('Stability_H2DTS_COMPAT_CONTAINER_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_CONTAINER._Part04');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT134_STD_DEQUE_FLOT_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT134_STD_DEQUE_FLOT_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_flot<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0057_compat134_std_deque_flot_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(std::deque_flot<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat134_std_deque_flot_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat134_std_deque_flot_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0057_compat134_std_deque_flot_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_flot<long>",
          "h2dts_compat_container_0057_compat134_std_deque_flot_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0057_compat134_std_deque_flot_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT134_STD_DEQUE_LNG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT134_STD_DEQUE_LNG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<lng>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0058_compat134_std_deque_lng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(std::deque<lng> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat134_std_deque_lng parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat134_std_deque_lng must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0058_compat134_std_deque_lng must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<lng>",
          "h2dts_compat_container_0058_compat134_std_deque_lng param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0058_compat134_std_deque_lng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT134_STD_DEQUE_BAD134_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT134_STD_DEQUE_BAD134_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_bad134<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0059_compat134_std_deque_bad134_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(std::deque_bad134<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat134_std_deque_bad134_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat134_std_deque_bad134_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0059_compat134_std_deque_bad134_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_bad134<long>",
          "h2dts_compat_container_0059_compat134_std_deque_bad134_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0059_compat134_std_deque_bad134_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT134_STD_DEQUE_X_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT134_STD_DEQUE_X_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_x<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0060_compat134_std_deque_x_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(std::deque_x<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat134_std_deque_x_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat134_std_deque_x_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0060_compat134_std_deque_x_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_x<long>",
          "h2dts_compat_container_0060_compat134_std_deque_x_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0060_compat134_std_deque_x_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT134_STD_DEQUE_LONG_134
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT134_STD_DEQUE_LONG_134
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<long_134>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0061_compat134_std_deque_long_134', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(std::deque<long_134> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat134_std_deque_long_134 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat134_std_deque_long_134 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0061_compat134_std_deque_long_134 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<long_134>",
          "h2dts_compat_container_0061_compat134_std_deque_long_134 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0061_compat134_std_deque_long_134 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT134_STD_DEQUE_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT134_STD_DEQUE_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0062_compat134_std_deque_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(std:deque<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat134_std_deque_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat134_std_deque_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0062_compat134_std_deque_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<long>",
          "h2dts_compat_container_0062_compat134_std_deque_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0062_compat134_std_deque_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT137_STD_LIST_ITN_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT137_STD_LIST_ITN_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_itn<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0063_compat137_std_list_itn_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(std::list_itn<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat137_std_list_itn_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat137_std_list_itn_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0063_compat137_std_list_itn_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_itn<float>",
          "h2dts_compat_container_0063_compat137_std_list_itn_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0063_compat137_std_list_itn_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT137_STD_LIST_DOUBL_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT137_STD_LIST_DOUBL_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_doubl<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0064_compat137_std_list_doubl_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(std::list_doubl<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat137_std_list_doubl_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat137_std_list_doubl_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0064_compat137_std_list_doubl_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_doubl<float>",
          "h2dts_compat_container_0064_compat137_std_list_doubl_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0064_compat137_std_list_doubl_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT137_STD_LIST_BOOOL_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT137_STD_LIST_BOOOL_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_boool<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0065_compat137_std_list_boool_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(std::list_boool<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat137_std_list_boool_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat137_std_list_boool_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0065_compat137_std_list_boool_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_boool<float>",
          "h2dts_compat_container_0065_compat137_std_list_boool_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0065_compat137_std_list_boool_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT137_STD_LIST_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT137_STD_LIST_FLOT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<flot>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0066_compat137_std_list_flot', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(std::list<flot> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat137_std_list_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat137_std_list_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0066_compat137_std_list_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<flot>",
          "h2dts_compat_container_0066_compat137_std_list_flot param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0066_compat137_std_list_flot execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT137_STD_LIST_LNG_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT137_STD_LIST_LNG_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_lng<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0067_compat137_std_list_lng_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(std::list_lng<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat137_std_list_lng_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat137_std_list_lng_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0067_compat137_std_list_lng_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_lng<float>",
          "h2dts_compat_container_0067_compat137_std_list_lng_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0067_compat137_std_list_lng_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT137_STD_LIST_BAD137_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT137_STD_LIST_BAD137_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_bad137<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0068_compat137_std_list_bad137_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(std::list_bad137<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat137_std_list_bad137_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat137_std_list_bad137_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0068_compat137_std_list_bad137_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_bad137<float>",
          "h2dts_compat_container_0068_compat137_std_list_bad137_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0068_compat137_std_list_bad137_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT137_STD_LIST_X_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT137_STD_LIST_X_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_x<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0069_compat137_std_list_x_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(std::list_x<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat137_std_list_x_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat137_std_list_x_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0069_compat137_std_list_x_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_x<float>",
          "h2dts_compat_container_0069_compat137_std_list_x_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0069_compat137_std_list_x_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT137_STD_LIST_FLOAT_137
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT137_STD_LIST_FLOAT_137
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<float_137>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0070_compat137_std_list_float_137', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(std::list<float_137> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat137_std_list_float_137 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat137_std_list_float_137 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0070_compat137_std_list_float_137 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<float_137>",
          "h2dts_compat_container_0070_compat137_std_list_float_137 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0070_compat137_std_list_float_137 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT137_STD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT137_STD_LIST_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:list<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0071_compat137_std_list_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(std:list<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat137_std_list_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat137_std_list_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0071_compat137_std_list_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<float>",
          "h2dts_compat_container_0071_compat137_std_list_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0071_compat137_std_list_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT138_STD_QUEUE_ITN_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT138_STD_QUEUE_ITN_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_itn<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0072_compat138_std_queue_itn_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(std::queue_itn<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat138_std_queue_itn_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat138_std_queue_itn_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0072_compat138_std_queue_itn_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_itn<std::string>",
          "h2dts_compat_container_0072_compat138_std_queue_itn_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0072_compat138_std_queue_itn_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT138_STD_QUEUE_DOUBL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT138_STD_QUEUE_DOUBL_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_doubl<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0073_compat138_std_queue_doubl_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(std::queue_doubl<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat138_std_queue_doubl_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat138_std_queue_doubl_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0073_compat138_std_queue_doubl_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_doubl<std::string>",
          "h2dts_compat_container_0073_compat138_std_queue_doubl_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0073_compat138_std_queue_doubl_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT138_STD_QUEUE_BOOOL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT138_STD_QUEUE_BOOOL_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_boool<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0074_compat138_std_queue_boool_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(std::queue_boool<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat138_std_queue_boool_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat138_std_queue_boool_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0074_compat138_std_queue_boool_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_boool<std::string>",
          "h2dts_compat_container_0074_compat138_std_queue_boool_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0074_compat138_std_queue_boool_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT138_STD_QUEUE_FLOT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT138_STD_QUEUE_FLOT_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_flot<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0075_compat138_std_queue_flot_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(std::queue_flot<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat138_std_queue_flot_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat138_std_queue_flot_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0075_compat138_std_queue_flot_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_flot<std::string>",
          "h2dts_compat_container_0075_compat138_std_queue_flot_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0075_compat138_std_queue_flot_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT138_STD_QUEUE_LNG_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT138_STD_QUEUE_LNG_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_lng<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0076_compat138_std_queue_lng_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(std::queue_lng<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat138_std_queue_lng_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat138_std_queue_lng_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0076_compat138_std_queue_lng_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_lng<std::string>",
          "h2dts_compat_container_0076_compat138_std_queue_lng_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0076_compat138_std_queue_lng_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0077_COMPAT138_STD_QUEUE_BAD138_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0077_COMPAT138_STD_QUEUE_BAD138_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_bad138<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0077_compat138_std_queue_bad138_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(std::queue_bad138<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0077_compat138_std_queue_bad138_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0077_compat138_std_queue_bad138_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0077_compat138_std_queue_bad138_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_bad138<std::string>",
          "h2dts_compat_container_0077_compat138_std_queue_bad138_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0077_compat138_std_queue_bad138_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT138_STD_QUEUE_X_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT138_STD_QUEUE_X_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_x<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0001_compat138_std_queue_x_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(std::queue_x<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat138_std_queue_x_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat138_std_queue_x_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0001_compat138_std_queue_x_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_x<std::string>",
          "h2dts_compat_container_0001_compat138_std_queue_x_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0001_compat138_std_queue_x_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT138_STD_QUEUE_STD_STRING_138
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT138_STD_QUEUE_STD_STRING_138
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue<std::string_138>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0002_compat138_std_queue_std_string_138', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(std::queue<std::string_138> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat138_std_queue_std_string_138 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat138_std_queue_std_string_138 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0002_compat138_std_queue_std_string_138 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue<std::string_138>",
          "h2dts_compat_container_0002_compat138_std_queue_std_string_138 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0002_compat138_std_queue_std_string_138 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT138_STD_QUEUE_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT138_STD_QUEUE_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:queue<std:string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0003_compat138_std_queue_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(std:queue<std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat138_std_queue_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat138_std_queue_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0003_compat138_std_queue_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:queue<std:string>",
          "h2dts_compat_container_0003_compat138_std_queue_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0003_compat138_std_queue_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT139_STD_STACK_ITN_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT139_STD_STACK_ITN_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_itn<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0004_compat139_std_stack_itn_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat139(std::stack_itn<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat139_std_stack_itn_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat139_std_stack_itn_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0004_compat139_std_stack_itn_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_itn<double>",
          "h2dts_compat_container_0004_compat139_std_stack_itn_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0004_compat139_std_stack_itn_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT139_STD_STACK_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT139_STD_STACK_DOUBL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack<doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0005_compat139_std_stack_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat139(std::stack<doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat139_std_stack_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat139_std_stack_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0005_compat139_std_stack_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack<doubl>",
          "h2dts_compat_container_0005_compat139_std_stack_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0005_compat139_std_stack_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT139_STD_STACK_BOOOL_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT139_STD_STACK_BOOOL_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_boool<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0006_compat139_std_stack_boool_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat139(std::stack_boool<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat139_std_stack_boool_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat139_std_stack_boool_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0006_compat139_std_stack_boool_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_boool<double>",
          "h2dts_compat_container_0006_compat139_std_stack_boool_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0006_compat139_std_stack_boool_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT139_STD_STACK_FLOT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT139_STD_STACK_FLOT_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_flot<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0007_compat139_std_stack_flot_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat139(std::stack_flot<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat139_std_stack_flot_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat139_std_stack_flot_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0007_compat139_std_stack_flot_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_flot<double>",
          "h2dts_compat_container_0007_compat139_std_stack_flot_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0007_compat139_std_stack_flot_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT139_STD_STACK_LNG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT139_STD_STACK_LNG_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_lng<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0008_compat139_std_stack_lng_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat139(std::stack_lng<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat139_std_stack_lng_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat139_std_stack_lng_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0008_compat139_std_stack_lng_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_lng<double>",
          "h2dts_compat_container_0008_compat139_std_stack_lng_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0008_compat139_std_stack_lng_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT139_STD_STACK_BAD139_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT139_STD_STACK_BAD139_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_bad139<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0009_compat139_std_stack_bad139_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat139(std::stack_bad139<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat139_std_stack_bad139_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat139_std_stack_bad139_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0009_compat139_std_stack_bad139_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_bad139<double>",
          "h2dts_compat_container_0009_compat139_std_stack_bad139_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0009_compat139_std_stack_bad139_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT139_STD_STACK_X_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT139_STD_STACK_X_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_x<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0010_compat139_std_stack_x_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat139(std::stack_x<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat139_std_stack_x_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat139_std_stack_x_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0010_compat139_std_stack_x_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_x<double>",
          "h2dts_compat_container_0010_compat139_std_stack_x_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0010_compat139_std_stack_x_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT139_STD_STACK_DOUBLE_139
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT139_STD_STACK_DOUBLE_139
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack<double_139>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0011_compat139_std_stack_double_139', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat139(std::stack<double_139> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat139_std_stack_double_139 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat139_std_stack_double_139 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0011_compat139_std_stack_double_139 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack<double_139>",
          "h2dts_compat_container_0011_compat139_std_stack_double_139 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0011_compat139_std_stack_double_139 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT139_STD_STACK_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT139_STD_STACK_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:stack<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0012_compat139_std_stack_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat139(std:stack<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat139_std_stack_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat139_std_stack_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0012_compat139_std_stack_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:stack<double>",
          "h2dts_compat_container_0012_compat139_std_stack_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0012_compat139_std_stack_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT149_STD_VALARRAY_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT149_STD_VALARRAY_ITN
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0013_compat149_std_valarray_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat149(std::valarray<itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat149_std_valarray_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat149_std_valarray_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0013_compat149_std_valarray_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray<itn>",
          "h2dts_compat_container_0013_compat149_std_valarray_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0013_compat149_std_valarray_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT149_STD_VALARRAY_DOUBL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT149_STD_VALARRAY_DOUBL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_doubl<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0014_compat149_std_valarray_doubl_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat149(std::valarray_doubl<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat149_std_valarray_doubl_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat149_std_valarray_doubl_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0014_compat149_std_valarray_doubl_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_doubl<int>",
          "h2dts_compat_container_0014_compat149_std_valarray_doubl_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0014_compat149_std_valarray_doubl_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT149_STD_VALARRAY_BOOOL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT149_STD_VALARRAY_BOOOL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_boool<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0015_compat149_std_valarray_boool_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat149(std::valarray_boool<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat149_std_valarray_boool_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat149_std_valarray_boool_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0015_compat149_std_valarray_boool_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_boool<int>",
          "h2dts_compat_container_0015_compat149_std_valarray_boool_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0015_compat149_std_valarray_boool_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT149_STD_VALARRAY_FLOT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT149_STD_VALARRAY_FLOT_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_flot<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0016_compat149_std_valarray_flot_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat149(std::valarray_flot<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat149_std_valarray_flot_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat149_std_valarray_flot_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0016_compat149_std_valarray_flot_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_flot<int>",
          "h2dts_compat_container_0016_compat149_std_valarray_flot_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0016_compat149_std_valarray_flot_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT149_STD_VALARRAY_LNG_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT149_STD_VALARRAY_LNG_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_lng<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0017_compat149_std_valarray_lng_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat149(std::valarray_lng<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat149_std_valarray_lng_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat149_std_valarray_lng_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0017_compat149_std_valarray_lng_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_lng<int>",
          "h2dts_compat_container_0017_compat149_std_valarray_lng_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0017_compat149_std_valarray_lng_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT149_STD_VALARRAY_BAD149_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT149_STD_VALARRAY_BAD149_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_bad149<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0018_compat149_std_valarray_bad149_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat149(std::valarray_bad149<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat149_std_valarray_bad149_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat149_std_valarray_bad149_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0018_compat149_std_valarray_bad149_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_bad149<int>",
          "h2dts_compat_container_0018_compat149_std_valarray_bad149_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0018_compat149_std_valarray_bad149_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT149_STD_VALARRAY_X_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT149_STD_VALARRAY_X_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_x<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0019_compat149_std_valarray_x_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat149(std::valarray_x<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat149_std_valarray_x_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat149_std_valarray_x_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0019_compat149_std_valarray_x_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_x<int>",
          "h2dts_compat_container_0019_compat149_std_valarray_x_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0019_compat149_std_valarray_x_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT149_STD_VALARRAY_INT_149
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT149_STD_VALARRAY_INT_149
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<int_149>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0020_compat149_std_valarray_int_149', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat149(std::valarray<int_149> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat149_std_valarray_int_149 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat149_std_valarray_int_149 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0020_compat149_std_valarray_int_149 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray<int_149>",
          "h2dts_compat_container_0020_compat149_std_valarray_int_149 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0020_compat149_std_valarray_int_149 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT149_STD_VALARRAY_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT149_STD_VALARRAY_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:valarray<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0021_compat149_std_valarray_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat149(std:valarray<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat149_std_valarray_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat149_std_valarray_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0021_compat149_std_valarray_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:valarray<int>",
          "h2dts_compat_container_0021_compat149_std_valarray_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0021_compat149_std_valarray_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT150_STD_VALARRAY_ITN_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT150_STD_VALARRAY_ITN_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_itn<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0022_compat150_std_valarray_itn_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat150(std::valarray_itn<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat150_std_valarray_itn_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat150_std_valarray_itn_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0022_compat150_std_valarray_itn_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_itn<float>",
          "h2dts_compat_container_0022_compat150_std_valarray_itn_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0022_compat150_std_valarray_itn_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT150_STD_VALARRAY_DOUBL_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT150_STD_VALARRAY_DOUBL_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_doubl<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0023_compat150_std_valarray_doubl_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat150(std::valarray_doubl<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat150_std_valarray_doubl_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat150_std_valarray_doubl_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0023_compat150_std_valarray_doubl_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_doubl<float>",
          "h2dts_compat_container_0023_compat150_std_valarray_doubl_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0023_compat150_std_valarray_doubl_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT150_STD_VALARRAY_BOOOL_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT150_STD_VALARRAY_BOOOL_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_boool<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0024_compat150_std_valarray_boool_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat150(std::valarray_boool<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat150_std_valarray_boool_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat150_std_valarray_boool_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0024_compat150_std_valarray_boool_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_boool<float>",
          "h2dts_compat_container_0024_compat150_std_valarray_boool_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0024_compat150_std_valarray_boool_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT150_STD_VALARRAY_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT150_STD_VALARRAY_FLOT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<flot>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0025_compat150_std_valarray_flot', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat150(std::valarray<flot> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat150_std_valarray_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat150_std_valarray_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0025_compat150_std_valarray_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray<flot>",
          "h2dts_compat_container_0025_compat150_std_valarray_flot param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0025_compat150_std_valarray_flot execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT150_STD_VALARRAY_LNG_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT150_STD_VALARRAY_LNG_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_lng<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0026_compat150_std_valarray_lng_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat150(std::valarray_lng<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat150_std_valarray_lng_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat150_std_valarray_lng_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0026_compat150_std_valarray_lng_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_lng<float>",
          "h2dts_compat_container_0026_compat150_std_valarray_lng_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0026_compat150_std_valarray_lng_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT150_STD_VALARRAY_BAD150_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT150_STD_VALARRAY_BAD150_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_bad150<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0027_compat150_std_valarray_bad150_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat150(std::valarray_bad150<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat150_std_valarray_bad150_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat150_std_valarray_bad150_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0027_compat150_std_valarray_bad150_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_bad150<float>",
          "h2dts_compat_container_0027_compat150_std_valarray_bad150_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0027_compat150_std_valarray_bad150_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT150_STD_VALARRAY_X_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT150_STD_VALARRAY_X_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_x<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0028_compat150_std_valarray_x_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat150(std::valarray_x<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat150_std_valarray_x_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat150_std_valarray_x_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0028_compat150_std_valarray_x_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_x<float>",
          "h2dts_compat_container_0028_compat150_std_valarray_x_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0028_compat150_std_valarray_x_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT150_STD_VALARRAY_FLOAT_150
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT150_STD_VALARRAY_FLOAT_150
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<float_150>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0029_compat150_std_valarray_float_150', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat150(std::valarray<float_150> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat150_std_valarray_float_150 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat150_std_valarray_float_150 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0029_compat150_std_valarray_float_150 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray<float_150>",
          "h2dts_compat_container_0029_compat150_std_valarray_float_150 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0029_compat150_std_valarray_float_150 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT150_STD_VALARRAY_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT150_STD_VALARRAY_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:valarray<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0030_compat150_std_valarray_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat150(std:valarray<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat150_std_valarray_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat150_std_valarray_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0030_compat150_std_valarray_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:valarray<float>",
          "h2dts_compat_container_0030_compat150_std_valarray_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0030_compat150_std_valarray_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT156_STD_DEQUE_ITN_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT156_STD_DEQUE_ITN_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_itn<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0031_compat156_std_deque_itn_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat156(std::deque_itn<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat156_std_deque_itn_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat156_std_deque_itn_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0031_compat156_std_deque_itn_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_itn<bool>",
          "h2dts_compat_container_0031_compat156_std_deque_itn_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0031_compat156_std_deque_itn_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT156_STD_DEQUE_DOUBL_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT156_STD_DEQUE_DOUBL_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_doubl<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0032_compat156_std_deque_doubl_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat156(std::deque_doubl<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat156_std_deque_doubl_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat156_std_deque_doubl_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0032_compat156_std_deque_doubl_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_doubl<bool>",
          "h2dts_compat_container_0032_compat156_std_deque_doubl_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0032_compat156_std_deque_doubl_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT156_STD_DEQUE_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT156_STD_DEQUE_BOOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<boool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0033_compat156_std_deque_boool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat156(std::deque<boool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat156_std_deque_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat156_std_deque_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0033_compat156_std_deque_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<boool>",
          "h2dts_compat_container_0033_compat156_std_deque_boool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0033_compat156_std_deque_boool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT156_STD_DEQUE_FLOT_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT156_STD_DEQUE_FLOT_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_flot<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0034_compat156_std_deque_flot_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat156(std::deque_flot<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat156_std_deque_flot_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat156_std_deque_flot_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0034_compat156_std_deque_flot_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_flot<bool>",
          "h2dts_compat_container_0034_compat156_std_deque_flot_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0034_compat156_std_deque_flot_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT156_STD_DEQUE_LNG_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT156_STD_DEQUE_LNG_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_lng<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0035_compat156_std_deque_lng_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat156(std::deque_lng<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat156_std_deque_lng_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat156_std_deque_lng_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0035_compat156_std_deque_lng_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_lng<bool>",
          "h2dts_compat_container_0035_compat156_std_deque_lng_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0035_compat156_std_deque_lng_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT156_STD_DEQUE_BAD156_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT156_STD_DEQUE_BAD156_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_bad156<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0036_compat156_std_deque_bad156_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat156(std::deque_bad156<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat156_std_deque_bad156_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat156_std_deque_bad156_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0036_compat156_std_deque_bad156_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_bad156<bool>",
          "h2dts_compat_container_0036_compat156_std_deque_bad156_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0036_compat156_std_deque_bad156_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT156_STD_DEQUE_X_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT156_STD_DEQUE_X_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_x<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0037_compat156_std_deque_x_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat156(std::deque_x<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat156_std_deque_x_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat156_std_deque_x_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0037_compat156_std_deque_x_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_x<bool>",
          "h2dts_compat_container_0037_compat156_std_deque_x_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0037_compat156_std_deque_x_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT156_STD_DEQUE_BOOL_156
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT156_STD_DEQUE_BOOL_156
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<bool_156>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0038_compat156_std_deque_bool_156', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat156(std::deque<bool_156> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat156_std_deque_bool_156 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat156_std_deque_bool_156 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0038_compat156_std_deque_bool_156 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<bool_156>",
          "h2dts_compat_container_0038_compat156_std_deque_bool_156 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0038_compat156_std_deque_bool_156 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT156_STD_DEQUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT156_STD_DEQUE_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0039_compat156_std_deque_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat156(std:deque<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat156_std_deque_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat156_std_deque_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0039_compat156_std_deque_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<bool>",
          "h2dts_compat_container_0039_compat156_std_deque_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0039_compat156_std_deque_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT165_STD_STACK_ITN_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT165_STD_STACK_ITN_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_itn<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0040_compat165_std_stack_itn_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat165(std::stack_itn<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat165_std_stack_itn_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat165_std_stack_itn_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0040_compat165_std_stack_itn_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_itn<std::string>",
          "h2dts_compat_container_0040_compat165_std_stack_itn_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0040_compat165_std_stack_itn_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT165_STD_STACK_DOUBL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT165_STD_STACK_DOUBL_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_doubl<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0041_compat165_std_stack_doubl_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat165(std::stack_doubl<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat165_std_stack_doubl_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat165_std_stack_doubl_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0041_compat165_std_stack_doubl_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_doubl<std::string>",
          "h2dts_compat_container_0041_compat165_std_stack_doubl_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0041_compat165_std_stack_doubl_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT165_STD_STACK_BOOOL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT165_STD_STACK_BOOOL_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_boool<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0042_compat165_std_stack_boool_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat165(std::stack_boool<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat165_std_stack_boool_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat165_std_stack_boool_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0042_compat165_std_stack_boool_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_boool<std::string>",
          "h2dts_compat_container_0042_compat165_std_stack_boool_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0042_compat165_std_stack_boool_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT165_STD_STACK_FLOT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT165_STD_STACK_FLOT_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_flot<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0043_compat165_std_stack_flot_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat165(std::stack_flot<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat165_std_stack_flot_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat165_std_stack_flot_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0043_compat165_std_stack_flot_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_flot<std::string>",
          "h2dts_compat_container_0043_compat165_std_stack_flot_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0043_compat165_std_stack_flot_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT165_STD_STACK_LNG_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT165_STD_STACK_LNG_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_lng<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0044_compat165_std_stack_lng_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat165(std::stack_lng<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat165_std_stack_lng_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat165_std_stack_lng_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0044_compat165_std_stack_lng_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_lng<std::string>",
          "h2dts_compat_container_0044_compat165_std_stack_lng_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0044_compat165_std_stack_lng_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT165_STD_STACK_BAD165_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT165_STD_STACK_BAD165_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_bad165<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0045_compat165_std_stack_bad165_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat165(std::stack_bad165<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat165_std_stack_bad165_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat165_std_stack_bad165_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0045_compat165_std_stack_bad165_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_bad165<std::string>",
          "h2dts_compat_container_0045_compat165_std_stack_bad165_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0045_compat165_std_stack_bad165_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT165_STD_STACK_X_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT165_STD_STACK_X_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_x<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0046_compat165_std_stack_x_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat165(std::stack_x<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat165_std_stack_x_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat165_std_stack_x_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0046_compat165_std_stack_x_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_x<std::string>",
          "h2dts_compat_container_0046_compat165_std_stack_x_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0046_compat165_std_stack_x_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT165_STD_STACK_STD_STRING_165
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT165_STD_STACK_STD_STRING_165
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack<std::string_165>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0047_compat165_std_stack_std_string_165', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat165(std::stack<std::string_165> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat165_std_stack_std_string_165 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat165_std_stack_std_string_165 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0047_compat165_std_stack_std_string_165 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack<std::string_165>",
          "h2dts_compat_container_0047_compat165_std_stack_std_string_165 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0047_compat165_std_stack_std_string_165 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT165_STD_STACK_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT165_STD_STACK_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:stack<std:string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0048_compat165_std_stack_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat165(std:stack<std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat165_std_stack_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat165_std_stack_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0048_compat165_std_stack_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:stack<std:string>",
          "h2dts_compat_container_0048_compat165_std_stack_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0048_compat165_std_stack_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT182_STD_VECTOR_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT182_STD_VECTOR_ITN
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0049_compat182_std_vector_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat182(std::vector_itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat182_std_vector_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat182_std_vector_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0049_compat182_std_vector_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn",
          "h2dts_compat_container_0049_compat182_std_vector_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0049_compat182_std_vector_itn execution error: ${err}`);
    }
  });
});
