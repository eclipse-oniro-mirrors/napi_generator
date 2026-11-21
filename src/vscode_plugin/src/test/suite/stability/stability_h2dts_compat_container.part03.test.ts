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

suite('Stability_H2DTS_COMPAT_CONTAINER_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_CONTAINER._Part03');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT118_STD_VECTOR_BAD118_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT118_STD_VECTOR_BAD118_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad118<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0064_compat118_std_vector_bad118_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat118(std::vector_bad118<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat118_std_vector_bad118_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat118_std_vector_bad118_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0064_compat118_std_vector_bad118_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad118<long>",
          "h2dts_compat_container_0064_compat118_std_vector_bad118_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0064_compat118_std_vector_bad118_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT118_STD_VECTOR_X_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT118_STD_VECTOR_X_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0065_compat118_std_vector_x_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat118(std::vector_x<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat118_std_vector_x_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat118_std_vector_x_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0065_compat118_std_vector_x_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<long>",
          "h2dts_compat_container_0065_compat118_std_vector_x_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0065_compat118_std_vector_x_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT118_STD_VECTOR_LONG_118
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT118_STD_VECTOR_LONG_118
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<long_118>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0066_compat118_std_vector_long_118', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat118(std::vector<long_118> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat118_std_vector_long_118 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat118_std_vector_long_118 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0066_compat118_std_vector_long_118 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<long_118>",
          "h2dts_compat_container_0066_compat118_std_vector_long_118 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0066_compat118_std_vector_long_118 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT118_STD_VECTOR_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT118_STD_VECTOR_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0067_compat118_std_vector_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat118(std:vector<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat118_std_vector_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat118_std_vector_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0067_compat118_std_vector_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<long>",
          "h2dts_compat_container_0067_compat118_std_vector_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0067_compat118_std_vector_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT120_STD_VECTOR_ITN_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT120_STD_VECTOR_ITN_STD_WSTRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0068_compat120_std_vector_itn_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat120(std::vector_itn<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat120_std_vector_itn_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat120_std_vector_itn_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0068_compat120_std_vector_itn_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<std::wstring>",
          "h2dts_compat_container_0068_compat120_std_vector_itn_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0068_compat120_std_vector_itn_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT120_STD_VECTOR_DOUBL_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT120_STD_VECTOR_DOUBL_STD_WSTRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0069_compat120_std_vector_doubl_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat120(std::vector_doubl<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat120_std_vector_doubl_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat120_std_vector_doubl_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0069_compat120_std_vector_doubl_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<std::wstring>",
          "h2dts_compat_container_0069_compat120_std_vector_doubl_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0069_compat120_std_vector_doubl_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT120_STD_VECTOR_BOOOL_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT120_STD_VECTOR_BOOOL_STD_WSTRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0070_compat120_std_vector_boool_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat120(std::vector_boool<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat120_std_vector_boool_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat120_std_vector_boool_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0070_compat120_std_vector_boool_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<std::wstring>",
          "h2dts_compat_container_0070_compat120_std_vector_boool_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0070_compat120_std_vector_boool_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT120_STD_VECTOR_FLOT_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT120_STD_VECTOR_FLOT_STD_WSTRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0071_compat120_std_vector_flot_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat120(std::vector_flot<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat120_std_vector_flot_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat120_std_vector_flot_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0071_compat120_std_vector_flot_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<std::wstring>",
          "h2dts_compat_container_0071_compat120_std_vector_flot_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0071_compat120_std_vector_flot_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT120_STD_VECTOR_LNG_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT120_STD_VECTOR_LNG_STD_WSTRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0072_compat120_std_vector_lng_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat120(std::vector_lng<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat120_std_vector_lng_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat120_std_vector_lng_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0072_compat120_std_vector_lng_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<std::wstring>",
          "h2dts_compat_container_0072_compat120_std_vector_lng_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0072_compat120_std_vector_lng_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT120_STD_VECTOR_BAD120_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT120_STD_VECTOR_BAD120_STD_WSTRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad120<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0073_compat120_std_vector_bad120_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat120(std::vector_bad120<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat120_std_vector_bad120_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat120_std_vector_bad120_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0073_compat120_std_vector_bad120_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad120<std::wstring>",
          "h2dts_compat_container_0073_compat120_std_vector_bad120_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0073_compat120_std_vector_bad120_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT120_STD_VECTOR_X_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT120_STD_VECTOR_X_STD_WSTRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0074_compat120_std_vector_x_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat120(std::vector_x<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat120_std_vector_x_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat120_std_vector_x_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0074_compat120_std_vector_x_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<std::wstring>",
          "h2dts_compat_container_0074_compat120_std_vector_x_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0074_compat120_std_vector_x_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT120_STD_VECTOR_STD_WSTRING_120
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT120_STD_VECTOR_STD_WSTRING_120
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<std::wstring_120>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0075_compat120_std_vector_std_wstring_120', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat120(std::vector<std::wstring_120> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat120_std_vector_std_wstring_120 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat120_std_vector_std_wstring_120 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0075_compat120_std_vector_std_wstring_120 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<std::wstring_120>",
          "h2dts_compat_container_0075_compat120_std_vector_std_wstring_120 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0075_compat120_std_vector_std_wstring_120 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT120_STD_VECTOR_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT120_STD_VECTOR_STD_WSTRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<std:wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0076_compat120_std_vector_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat120(std:vector<std:wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat120_std_vector_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat120_std_vector_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0076_compat120_std_vector_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<std:wstring>",
          "h2dts_compat_container_0076_compat120_std_vector_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0076_compat120_std_vector_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0077_COMPAT121_STD_VECTOR_ITN_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0077_COMPAT121_STD_VECTOR_ITN_SHORT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0077_compat121_std_vector_itn_short', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat121(std::vector_itn<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0077_compat121_std_vector_itn_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0077_compat121_std_vector_itn_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0077_compat121_std_vector_itn_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<short>",
          "h2dts_compat_container_0077_compat121_std_vector_itn_short param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0077_compat121_std_vector_itn_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT121_STD_VECTOR_DOUBL_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT121_STD_VECTOR_DOUBL_SHORT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0001_compat121_std_vector_doubl_short', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat121(std::vector_doubl<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat121_std_vector_doubl_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat121_std_vector_doubl_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0001_compat121_std_vector_doubl_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<short>",
          "h2dts_compat_container_0001_compat121_std_vector_doubl_short param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0001_compat121_std_vector_doubl_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT121_STD_VECTOR_BOOOL_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT121_STD_VECTOR_BOOOL_SHORT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0002_compat121_std_vector_boool_short', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat121(std::vector_boool<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat121_std_vector_boool_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat121_std_vector_boool_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0002_compat121_std_vector_boool_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<short>",
          "h2dts_compat_container_0002_compat121_std_vector_boool_short param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0002_compat121_std_vector_boool_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT121_STD_VECTOR_FLOT_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT121_STD_VECTOR_FLOT_SHORT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0003_compat121_std_vector_flot_short', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat121(std::vector_flot<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat121_std_vector_flot_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat121_std_vector_flot_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0003_compat121_std_vector_flot_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<short>",
          "h2dts_compat_container_0003_compat121_std_vector_flot_short param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0003_compat121_std_vector_flot_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT121_STD_VECTOR_LNG_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT121_STD_VECTOR_LNG_SHORT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0004_compat121_std_vector_lng_short', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat121(std::vector_lng<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat121_std_vector_lng_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat121_std_vector_lng_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0004_compat121_std_vector_lng_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<short>",
          "h2dts_compat_container_0004_compat121_std_vector_lng_short param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0004_compat121_std_vector_lng_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT121_STD_VECTOR_BAD121_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT121_STD_VECTOR_BAD121_SHORT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad121<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0005_compat121_std_vector_bad121_short', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat121(std::vector_bad121<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat121_std_vector_bad121_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat121_std_vector_bad121_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0005_compat121_std_vector_bad121_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad121<short>",
          "h2dts_compat_container_0005_compat121_std_vector_bad121_short param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0005_compat121_std_vector_bad121_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT121_STD_VECTOR_X_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT121_STD_VECTOR_X_SHORT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0006_compat121_std_vector_x_short', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat121(std::vector_x<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat121_std_vector_x_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat121_std_vector_x_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0006_compat121_std_vector_x_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<short>",
          "h2dts_compat_container_0006_compat121_std_vector_x_short param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0006_compat121_std_vector_x_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT121_STD_VECTOR_SHORT_121
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT121_STD_VECTOR_SHORT_121
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<short_121>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0007_compat121_std_vector_short_121', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat121(std::vector<short_121> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat121_std_vector_short_121 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat121_std_vector_short_121 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0007_compat121_std_vector_short_121 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<short_121>",
          "h2dts_compat_container_0007_compat121_std_vector_short_121 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0007_compat121_std_vector_short_121 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT121_STD_VECTOR_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT121_STD_VECTOR_SHORT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0008_compat121_std_vector_short', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat121(std:vector<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat121_std_vector_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat121_std_vector_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0008_compat121_std_vector_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<short>",
          "h2dts_compat_container_0008_compat121_std_vector_short param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0008_compat121_std_vector_short execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT122_STD_VECTOR_ITN_INT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT122_STD_VECTOR_ITN_INT64_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<int64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0009_compat122_std_vector_itn_int64_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat122(std::vector_itn<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat122_std_vector_itn_int64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat122_std_vector_itn_int64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0009_compat122_std_vector_itn_int64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<int64_t>",
          "h2dts_compat_container_0009_compat122_std_vector_itn_int64_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0009_compat122_std_vector_itn_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT122_STD_VECTOR_DOUBL_INT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT122_STD_VECTOR_DOUBL_INT64_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<int64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0010_compat122_std_vector_doubl_int64_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat122(std::vector_doubl<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat122_std_vector_doubl_int64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat122_std_vector_doubl_int64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0010_compat122_std_vector_doubl_int64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<int64_t>",
          "h2dts_compat_container_0010_compat122_std_vector_doubl_int64_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0010_compat122_std_vector_doubl_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT122_STD_VECTOR_BOOOL_INT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT122_STD_VECTOR_BOOOL_INT64_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<int64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0011_compat122_std_vector_boool_int64_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat122(std::vector_boool<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat122_std_vector_boool_int64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat122_std_vector_boool_int64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0011_compat122_std_vector_boool_int64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<int64_t>",
          "h2dts_compat_container_0011_compat122_std_vector_boool_int64_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0011_compat122_std_vector_boool_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT122_STD_VECTOR_FLOT_INT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT122_STD_VECTOR_FLOT_INT64_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<int64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0012_compat122_std_vector_flot_int64_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat122(std::vector_flot<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat122_std_vector_flot_int64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat122_std_vector_flot_int64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0012_compat122_std_vector_flot_int64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<int64_t>",
          "h2dts_compat_container_0012_compat122_std_vector_flot_int64_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0012_compat122_std_vector_flot_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT122_STD_VECTOR_LNG_INT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT122_STD_VECTOR_LNG_INT64_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<int64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0013_compat122_std_vector_lng_int64_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat122(std::vector_lng<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat122_std_vector_lng_int64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat122_std_vector_lng_int64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0013_compat122_std_vector_lng_int64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<int64_t>",
          "h2dts_compat_container_0013_compat122_std_vector_lng_int64_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0013_compat122_std_vector_lng_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT122_STD_VECTOR_BAD122_INT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT122_STD_VECTOR_BAD122_INT64_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad122<int64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0014_compat122_std_vector_bad122_int64_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat122(std::vector_bad122<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat122_std_vector_bad122_int64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat122_std_vector_bad122_int64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0014_compat122_std_vector_bad122_int64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad122<int64_t>",
          "h2dts_compat_container_0014_compat122_std_vector_bad122_int64_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0014_compat122_std_vector_bad122_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT122_STD_VECTOR_X_INT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT122_STD_VECTOR_X_INT64_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<int64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0015_compat122_std_vector_x_int64_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat122(std::vector_x<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat122_std_vector_x_int64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat122_std_vector_x_int64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0015_compat122_std_vector_x_int64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<int64_t>",
          "h2dts_compat_container_0015_compat122_std_vector_x_int64_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0015_compat122_std_vector_x_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT122_STD_VECTOR_INT64_T_122
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT122_STD_VECTOR_INT64_T_122
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<int64_t_122>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0016_compat122_std_vector_int64_t_122', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat122(std::vector<int64_t_122> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat122_std_vector_int64_t_122 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat122_std_vector_int64_t_122 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0016_compat122_std_vector_int64_t_122 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<int64_t_122>",
          "h2dts_compat_container_0016_compat122_std_vector_int64_t_122 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0016_compat122_std_vector_int64_t_122 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT122_STD_VECTOR_INT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT122_STD_VECTOR_INT64_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<int64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0017_compat122_std_vector_int64_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat122(std:vector<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat122_std_vector_int64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat122_std_vector_int64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0017_compat122_std_vector_int64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<int64_t>",
          "h2dts_compat_container_0017_compat122_std_vector_int64_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0017_compat122_std_vector_int64_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT123_STD_VECTOR_ITN_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT123_STD_VECTOR_ITN_UINT8_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0018_compat123_std_vector_itn_uint8_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat123(std::vector_itn<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat123_std_vector_itn_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat123_std_vector_itn_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0018_compat123_std_vector_itn_uint8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<uint8_t>",
          "h2dts_compat_container_0018_compat123_std_vector_itn_uint8_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0018_compat123_std_vector_itn_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT123_STD_VECTOR_DOUBL_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT123_STD_VECTOR_DOUBL_UINT8_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0019_compat123_std_vector_doubl_uint8_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat123(std::vector_doubl<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat123_std_vector_doubl_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat123_std_vector_doubl_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0019_compat123_std_vector_doubl_uint8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<uint8_t>",
          "h2dts_compat_container_0019_compat123_std_vector_doubl_uint8_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0019_compat123_std_vector_doubl_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT123_STD_VECTOR_BOOOL_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT123_STD_VECTOR_BOOOL_UINT8_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0020_compat123_std_vector_boool_uint8_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat123(std::vector_boool<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat123_std_vector_boool_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat123_std_vector_boool_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0020_compat123_std_vector_boool_uint8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<uint8_t>",
          "h2dts_compat_container_0020_compat123_std_vector_boool_uint8_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0020_compat123_std_vector_boool_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT123_STD_VECTOR_FLOT_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT123_STD_VECTOR_FLOT_UINT8_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0021_compat123_std_vector_flot_uint8_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat123(std::vector_flot<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat123_std_vector_flot_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat123_std_vector_flot_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0021_compat123_std_vector_flot_uint8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<uint8_t>",
          "h2dts_compat_container_0021_compat123_std_vector_flot_uint8_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0021_compat123_std_vector_flot_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT123_STD_VECTOR_LNG_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT123_STD_VECTOR_LNG_UINT8_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0022_compat123_std_vector_lng_uint8_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat123(std::vector_lng<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat123_std_vector_lng_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat123_std_vector_lng_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0022_compat123_std_vector_lng_uint8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<uint8_t>",
          "h2dts_compat_container_0022_compat123_std_vector_lng_uint8_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0022_compat123_std_vector_lng_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT123_STD_VECTOR_BAD123_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT123_STD_VECTOR_BAD123_UINT8_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad123<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0023_compat123_std_vector_bad123_uint8_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat123(std::vector_bad123<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat123_std_vector_bad123_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat123_std_vector_bad123_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0023_compat123_std_vector_bad123_uint8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad123<uint8_t>",
          "h2dts_compat_container_0023_compat123_std_vector_bad123_uint8_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0023_compat123_std_vector_bad123_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT123_STD_VECTOR_X_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT123_STD_VECTOR_X_UINT8_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0024_compat123_std_vector_x_uint8_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat123(std::vector_x<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat123_std_vector_x_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat123_std_vector_x_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0024_compat123_std_vector_x_uint8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<uint8_t>",
          "h2dts_compat_container_0024_compat123_std_vector_x_uint8_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0024_compat123_std_vector_x_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT123_STD_VECTOR_UINT8_T_123
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT123_STD_VECTOR_UINT8_T_123
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<uint8_t_123>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0025_compat123_std_vector_uint8_t_123', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat123(std::vector<uint8_t_123> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat123_std_vector_uint8_t_123 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat123_std_vector_uint8_t_123 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0025_compat123_std_vector_uint8_t_123 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<uint8_t_123>",
          "h2dts_compat_container_0025_compat123_std_vector_uint8_t_123 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0025_compat123_std_vector_uint8_t_123 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT123_STD_VECTOR_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT123_STD_VECTOR_UINT8_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0026_compat123_std_vector_uint8_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat123(std:vector<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat123_std_vector_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat123_std_vector_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0026_compat123_std_vector_uint8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<uint8_t>",
          "h2dts_compat_container_0026_compat123_std_vector_uint8_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0026_compat123_std_vector_uint8_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT124_STD_VECTOR_ITN_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT124_STD_VECTOR_ITN_SIZE_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0027_compat124_std_vector_itn_size_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat124(std::vector_itn<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat124_std_vector_itn_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat124_std_vector_itn_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0027_compat124_std_vector_itn_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<size_t>",
          "h2dts_compat_container_0027_compat124_std_vector_itn_size_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0027_compat124_std_vector_itn_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT124_STD_VECTOR_DOUBL_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT124_STD_VECTOR_DOUBL_SIZE_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0028_compat124_std_vector_doubl_size_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat124(std::vector_doubl<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat124_std_vector_doubl_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat124_std_vector_doubl_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0028_compat124_std_vector_doubl_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<size_t>",
          "h2dts_compat_container_0028_compat124_std_vector_doubl_size_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0028_compat124_std_vector_doubl_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT124_STD_VECTOR_BOOOL_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT124_STD_VECTOR_BOOOL_SIZE_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0029_compat124_std_vector_boool_size_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat124(std::vector_boool<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat124_std_vector_boool_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat124_std_vector_boool_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0029_compat124_std_vector_boool_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<size_t>",
          "h2dts_compat_container_0029_compat124_std_vector_boool_size_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0029_compat124_std_vector_boool_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT124_STD_VECTOR_FLOT_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT124_STD_VECTOR_FLOT_SIZE_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0030_compat124_std_vector_flot_size_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat124(std::vector_flot<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat124_std_vector_flot_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat124_std_vector_flot_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0030_compat124_std_vector_flot_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<size_t>",
          "h2dts_compat_container_0030_compat124_std_vector_flot_size_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0030_compat124_std_vector_flot_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT124_STD_VECTOR_LNG_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT124_STD_VECTOR_LNG_SIZE_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0031_compat124_std_vector_lng_size_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat124(std::vector_lng<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat124_std_vector_lng_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat124_std_vector_lng_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0031_compat124_std_vector_lng_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<size_t>",
          "h2dts_compat_container_0031_compat124_std_vector_lng_size_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0031_compat124_std_vector_lng_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT124_STD_VECTOR_BAD124_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT124_STD_VECTOR_BAD124_SIZE_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad124<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0032_compat124_std_vector_bad124_size_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat124(std::vector_bad124<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat124_std_vector_bad124_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat124_std_vector_bad124_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0032_compat124_std_vector_bad124_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad124<size_t>",
          "h2dts_compat_container_0032_compat124_std_vector_bad124_size_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0032_compat124_std_vector_bad124_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT124_STD_VECTOR_X_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT124_STD_VECTOR_X_SIZE_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0033_compat124_std_vector_x_size_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat124(std::vector_x<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat124_std_vector_x_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat124_std_vector_x_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0033_compat124_std_vector_x_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<size_t>",
          "h2dts_compat_container_0033_compat124_std_vector_x_size_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0033_compat124_std_vector_x_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT124_STD_VECTOR_SIZE_T_124
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT124_STD_VECTOR_SIZE_T_124
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<size_t_124>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0034_compat124_std_vector_size_t_124', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat124(std::vector<size_t_124> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat124_std_vector_size_t_124 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat124_std_vector_size_t_124 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0034_compat124_std_vector_size_t_124 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<size_t_124>",
          "h2dts_compat_container_0034_compat124_std_vector_size_t_124 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0034_compat124_std_vector_size_t_124 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT124_STD_VECTOR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT124_STD_VECTOR_SIZE_T
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0035_compat124_std_vector_size_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat124(std:vector<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat124_std_vector_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat124_std_vector_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0035_compat124_std_vector_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<size_t>",
          "h2dts_compat_container_0035_compat124_std_vector_size_t param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0035_compat124_std_vector_size_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT125_STD_VECTOR_ITN_STD_STRING_VIEW
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT125_STD_VECTOR_ITN_STD_STRING_VIEW
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<std::string_view>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0036_compat125_std_vector_itn_std_string_view', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat125(std::vector_itn<std::string_view> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat125_std_vector_itn_std_string_view parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat125_std_vector_itn_std_string_view must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0036_compat125_std_vector_itn_std_string_view must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<std::string_view>",
          "h2dts_compat_container_0036_compat125_std_vector_itn_std_string_view param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0036_compat125_std_vector_itn_std_string_view execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT125_STD_VECTOR_DOUBL_STD_STRING_VIEW
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT125_STD_VECTOR_DOUBL_STD_STRING_VIEW
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<std::string_view>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0037_compat125_std_vector_doubl_std_string_view', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat125(std::vector_doubl<std::string_view> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat125_std_vector_doubl_std_string_view parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat125_std_vector_doubl_std_string_view must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0037_compat125_std_vector_doubl_std_string_view must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<std::string_view>",
          "h2dts_compat_container_0037_compat125_std_vector_doubl_std_string_view param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0037_compat125_std_vector_doubl_std_string_view execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT125_STD_VECTOR_BOOOL_STD_STRING_VIEW
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT125_STD_VECTOR_BOOOL_STD_STRING_VIEW
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<std::string_view>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0038_compat125_std_vector_boool_std_string_view', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat125(std::vector_boool<std::string_view> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat125_std_vector_boool_std_string_view parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat125_std_vector_boool_std_string_view must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0038_compat125_std_vector_boool_std_string_view must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<std::string_view>",
          "h2dts_compat_container_0038_compat125_std_vector_boool_std_string_view param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0038_compat125_std_vector_boool_std_string_view execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT125_STD_VECTOR_FLOT_STD_STRING_VIEW
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT125_STD_VECTOR_FLOT_STD_STRING_VIEW
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<std::string_view>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0039_compat125_std_vector_flot_std_string_view', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat125(std::vector_flot<std::string_view> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat125_std_vector_flot_std_string_view parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat125_std_vector_flot_std_string_view must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0039_compat125_std_vector_flot_std_string_view must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<std::string_view>",
          "h2dts_compat_container_0039_compat125_std_vector_flot_std_string_view param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0039_compat125_std_vector_flot_std_string_view execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT125_STD_VECTOR_LNG_STD_STRING_VIEW
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT125_STD_VECTOR_LNG_STD_STRING_VIEW
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<std::string_view>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0040_compat125_std_vector_lng_std_string_view', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat125(std::vector_lng<std::string_view> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat125_std_vector_lng_std_string_view parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat125_std_vector_lng_std_string_view must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0040_compat125_std_vector_lng_std_string_view must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<std::string_view>",
          "h2dts_compat_container_0040_compat125_std_vector_lng_std_string_view param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0040_compat125_std_vector_lng_std_string_view execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT125_STD_VECTOR_BAD125_STD_STR_80C12D
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT125_STD_VECTOR_BAD125_STD_STR_80C12D
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad125<std::string_view>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0041_compat125_std_vector_bad125_std_str_80c12d', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat125(std::vector_bad125<std::string_view> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat125_std_vector_bad125_std_str_80c12d parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat125_std_vector_bad125_std_str_80c12d must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0041_compat125_std_vector_bad125_std_str_80c12d must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad125<std::string_view>",
          "h2dts_compat_container_0041_compat125_std_vector_bad125_std_str_80c12d param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0041_compat125_std_vector_bad125_std_str_80c12d execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT125_STD_VECTOR_X_STD_STRING_VIEW
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT125_STD_VECTOR_X_STD_STRING_VIEW
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<std::string_view>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0042_compat125_std_vector_x_std_string_view', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat125(std::vector_x<std::string_view> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat125_std_vector_x_std_string_view parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat125_std_vector_x_std_string_view must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0042_compat125_std_vector_x_std_string_view must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<std::string_view>",
          "h2dts_compat_container_0042_compat125_std_vector_x_std_string_view param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0042_compat125_std_vector_x_std_string_view execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT125_STD_VECTOR_STD_STRING_VIEW_125
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT125_STD_VECTOR_STD_STRING_VIEW_125
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<std::string_view_125>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0043_compat125_std_vector_std_string_view_125', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat125(std::vector<std::string_view_125> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat125_std_vector_std_string_view_125 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat125_std_vector_std_string_view_125 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0043_compat125_std_vector_std_string_view_125 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<std::string_view_125>",
          "h2dts_compat_container_0043_compat125_std_vector_std_string_view_125 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0043_compat125_std_vector_std_string_view_125 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT125_STD_VECTOR_STD_STRING_VIEW
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT125_STD_VECTOR_STD_STRING_VIEW
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<std:string_view>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0044_compat125_std_vector_std_string_view', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat125(std:vector<std:string_view> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat125_std_vector_std_string_view parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat125_std_vector_std_string_view must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0044_compat125_std_vector_std_string_view must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<std:string_view>",
          "h2dts_compat_container_0044_compat125_std_vector_std_string_view param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0044_compat125_std_vector_std_string_view execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT133_STD_DEQUE_ITN_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT133_STD_DEQUE_ITN_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_itn<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0045_compat133_std_deque_itn_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(std::deque_itn<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat133_std_deque_itn_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat133_std_deque_itn_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0045_compat133_std_deque_itn_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_itn<float>",
          "h2dts_compat_container_0045_compat133_std_deque_itn_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0045_compat133_std_deque_itn_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT133_STD_DEQUE_DOUBL_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT133_STD_DEQUE_DOUBL_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_doubl<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0046_compat133_std_deque_doubl_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(std::deque_doubl<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat133_std_deque_doubl_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat133_std_deque_doubl_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0046_compat133_std_deque_doubl_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_doubl<float>",
          "h2dts_compat_container_0046_compat133_std_deque_doubl_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0046_compat133_std_deque_doubl_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT133_STD_DEQUE_BOOOL_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT133_STD_DEQUE_BOOOL_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_boool<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0047_compat133_std_deque_boool_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(std::deque_boool<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat133_std_deque_boool_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat133_std_deque_boool_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0047_compat133_std_deque_boool_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_boool<float>",
          "h2dts_compat_container_0047_compat133_std_deque_boool_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0047_compat133_std_deque_boool_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT133_STD_DEQUE_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT133_STD_DEQUE_FLOT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<flot>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0048_compat133_std_deque_flot', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(std::deque<flot> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat133_std_deque_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat133_std_deque_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0048_compat133_std_deque_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<flot>",
          "h2dts_compat_container_0048_compat133_std_deque_flot param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0048_compat133_std_deque_flot execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT133_STD_DEQUE_LNG_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT133_STD_DEQUE_LNG_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_lng<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0049_compat133_std_deque_lng_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(std::deque_lng<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat133_std_deque_lng_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat133_std_deque_lng_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0049_compat133_std_deque_lng_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_lng<float>",
          "h2dts_compat_container_0049_compat133_std_deque_lng_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0049_compat133_std_deque_lng_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT133_STD_DEQUE_BAD133_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT133_STD_DEQUE_BAD133_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_bad133<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0050_compat133_std_deque_bad133_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(std::deque_bad133<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat133_std_deque_bad133_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat133_std_deque_bad133_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0050_compat133_std_deque_bad133_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_bad133<float>",
          "h2dts_compat_container_0050_compat133_std_deque_bad133_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0050_compat133_std_deque_bad133_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT133_STD_DEQUE_X_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT133_STD_DEQUE_X_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_x<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0051_compat133_std_deque_x_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(std::deque_x<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat133_std_deque_x_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat133_std_deque_x_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0051_compat133_std_deque_x_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_x<float>",
          "h2dts_compat_container_0051_compat133_std_deque_x_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0051_compat133_std_deque_x_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT133_STD_DEQUE_FLOAT_133
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT133_STD_DEQUE_FLOAT_133
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<float_133>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0052_compat133_std_deque_float_133', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(std::deque<float_133> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat133_std_deque_float_133 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat133_std_deque_float_133 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0052_compat133_std_deque_float_133 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<float_133>",
          "h2dts_compat_container_0052_compat133_std_deque_float_133 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0052_compat133_std_deque_float_133 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT133_STD_DEQUE_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT133_STD_DEQUE_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0053_compat133_std_deque_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(std:deque<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat133_std_deque_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat133_std_deque_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0053_compat133_std_deque_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<float>",
          "h2dts_compat_container_0053_compat133_std_deque_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0053_compat133_std_deque_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT134_STD_DEQUE_ITN_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT134_STD_DEQUE_ITN_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_itn<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0054_compat134_std_deque_itn_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(std::deque_itn<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat134_std_deque_itn_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat134_std_deque_itn_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0054_compat134_std_deque_itn_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_itn<long>",
          "h2dts_compat_container_0054_compat134_std_deque_itn_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0054_compat134_std_deque_itn_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT134_STD_DEQUE_DOUBL_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT134_STD_DEQUE_DOUBL_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_doubl<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0055_compat134_std_deque_doubl_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(std::deque_doubl<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat134_std_deque_doubl_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat134_std_deque_doubl_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0055_compat134_std_deque_doubl_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_doubl<long>",
          "h2dts_compat_container_0055_compat134_std_deque_doubl_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0055_compat134_std_deque_doubl_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT134_STD_DEQUE_BOOOL_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT134_STD_DEQUE_BOOOL_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_boool<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0056_compat134_std_deque_boool_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(std::deque_boool<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat134_std_deque_boool_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat134_std_deque_boool_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0056_compat134_std_deque_boool_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_boool<long>",
          "h2dts_compat_container_0056_compat134_std_deque_boool_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0056_compat134_std_deque_boool_long execution error: ${err}`);
    }
  });
});
