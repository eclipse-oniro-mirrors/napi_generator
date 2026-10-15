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

suite('Stability_H2DTS_COMPAT_CONTAINER_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_CONTAINER._Part06');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT220_STD_VECTOR_BAD220_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT220_STD_VECTOR_BAD220_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad220<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0043_compat220_std_vector_bad220_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat220(std::vector_bad220<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat220_std_vector_bad220_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat220_std_vector_bad220_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0043_compat220_std_vector_bad220_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad220<std::string> m2",
          "h2dts_compat_container_0043_compat220_std_vector_bad220_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0043_compat220_std_vector_bad220_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT220_STD_VECTOR_X_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT220_STD_VECTOR_X_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0044_compat220_std_vector_x_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat220(std::vector_x<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat220_std_vector_x_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat220_std_vector_x_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0044_compat220_std_vector_x_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<std::string> m2",
          "h2dts_compat_container_0044_compat220_std_vector_x_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0044_compat220_std_vector_x_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT220_STD_VECTOR_STD_STRING_220_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT220_STD_VECTOR_STD_STRING_220_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<std::string_220> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0045_compat220_std_vector_std_string_220_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat220(std::vector<std::string_220> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat220_std_vector_std_string_220_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat220_std_vector_std_string_220_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0045_compat220_std_vector_std_string_220_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<std::string_220> m2",
          "h2dts_compat_container_0045_compat220_std_vector_std_string_220_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0045_compat220_std_vector_std_string_220_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT220_STD_VECTOR_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT220_STD_VECTOR_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<std:string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0046_compat220_std_vector_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat220(std:vector<std:string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat220_std_vector_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat220_std_vector_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0046_compat220_std_vector_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<std:string> m2",
          "h2dts_compat_container_0046_compat220_std_vector_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0046_compat220_std_vector_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT221_STD_VECTOR_ITN_DOUBLE_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT221_STD_VECTOR_ITN_DOUBLE_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<double> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0047_compat221_std_vector_itn_double_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat221(std::vector_itn<double> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat221_std_vector_itn_double_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat221_std_vector_itn_double_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0047_compat221_std_vector_itn_double_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<double> m3",
          "h2dts_compat_container_0047_compat221_std_vector_itn_double_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0047_compat221_std_vector_itn_double_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT221_STD_VECTOR_DOUBL_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT221_STD_VECTOR_DOUBL_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<doubl> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0048_compat221_std_vector_doubl_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat221(std::vector<doubl> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat221_std_vector_doubl_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat221_std_vector_doubl_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0048_compat221_std_vector_doubl_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<doubl> m3",
          "h2dts_compat_container_0048_compat221_std_vector_doubl_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0048_compat221_std_vector_doubl_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT221_STD_VECTOR_BOOOL_DOUBLE_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT221_STD_VECTOR_BOOOL_DOUBLE_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<double> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0049_compat221_std_vector_boool_double_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat221(std::vector_boool<double> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat221_std_vector_boool_double_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat221_std_vector_boool_double_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0049_compat221_std_vector_boool_double_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<double> m3",
          "h2dts_compat_container_0049_compat221_std_vector_boool_double_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0049_compat221_std_vector_boool_double_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT221_STD_VECTOR_FLOT_DOUBLE_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT221_STD_VECTOR_FLOT_DOUBLE_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<double> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0050_compat221_std_vector_flot_double_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat221(std::vector_flot<double> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat221_std_vector_flot_double_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat221_std_vector_flot_double_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0050_compat221_std_vector_flot_double_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<double> m3",
          "h2dts_compat_container_0050_compat221_std_vector_flot_double_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0050_compat221_std_vector_flot_double_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT221_STD_VECTOR_LNG_DOUBLE_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT221_STD_VECTOR_LNG_DOUBLE_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<double> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0051_compat221_std_vector_lng_double_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat221(std::vector_lng<double> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat221_std_vector_lng_double_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat221_std_vector_lng_double_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0051_compat221_std_vector_lng_double_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<double> m3",
          "h2dts_compat_container_0051_compat221_std_vector_lng_double_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0051_compat221_std_vector_lng_double_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT221_STD_VECTOR_BAD221_DOUBLE_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT221_STD_VECTOR_BAD221_DOUBLE_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad221<double> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0052_compat221_std_vector_bad221_double_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat221(std::vector_bad221<double> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat221_std_vector_bad221_double_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat221_std_vector_bad221_double_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0052_compat221_std_vector_bad221_double_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad221<double> m3",
          "h2dts_compat_container_0052_compat221_std_vector_bad221_double_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0052_compat221_std_vector_bad221_double_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT221_STD_VECTOR_X_DOUBLE_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT221_STD_VECTOR_X_DOUBLE_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<double> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0053_compat221_std_vector_x_double_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat221(std::vector_x<double> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat221_std_vector_x_double_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat221_std_vector_x_double_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0053_compat221_std_vector_x_double_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<double> m3",
          "h2dts_compat_container_0053_compat221_std_vector_x_double_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0053_compat221_std_vector_x_double_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT221_STD_VECTOR_DOUBLE_221_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT221_STD_VECTOR_DOUBLE_221_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<double_221> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0054_compat221_std_vector_double_221_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat221(std::vector<double_221> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat221_std_vector_double_221_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat221_std_vector_double_221_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0054_compat221_std_vector_double_221_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<double_221> m3",
          "h2dts_compat_container_0054_compat221_std_vector_double_221_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0054_compat221_std_vector_double_221_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT221_STD_VECTOR_DOUBLE_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT221_STD_VECTOR_DOUBLE_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<double> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0055_compat221_std_vector_double_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat221(std:vector<double> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat221_std_vector_double_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat221_std_vector_double_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0055_compat221_std_vector_double_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<double> m3",
          "h2dts_compat_container_0055_compat221_std_vector_double_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0055_compat221_std_vector_double_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT222_STD_VECTOR_ITN_BOOL_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT222_STD_VECTOR_ITN_BOOL_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<bool> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0056_compat222_std_vector_itn_bool_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat222(std::vector_itn<bool> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat222_std_vector_itn_bool_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat222_std_vector_itn_bool_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0056_compat222_std_vector_itn_bool_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<bool> m0",
          "h2dts_compat_container_0056_compat222_std_vector_itn_bool_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0056_compat222_std_vector_itn_bool_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT222_STD_VECTOR_DOUBL_BOOL_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT222_STD_VECTOR_DOUBL_BOOL_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<bool> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0057_compat222_std_vector_doubl_bool_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat222(std::vector_doubl<bool> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat222_std_vector_doubl_bool_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat222_std_vector_doubl_bool_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0057_compat222_std_vector_doubl_bool_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<bool> m0",
          "h2dts_compat_container_0057_compat222_std_vector_doubl_bool_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0057_compat222_std_vector_doubl_bool_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT222_STD_VECTOR_BOOOL_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT222_STD_VECTOR_BOOOL_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<boool> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0058_compat222_std_vector_boool_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat222(std::vector<boool> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat222_std_vector_boool_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat222_std_vector_boool_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0058_compat222_std_vector_boool_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<boool> m0",
          "h2dts_compat_container_0058_compat222_std_vector_boool_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0058_compat222_std_vector_boool_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT222_STD_VECTOR_FLOT_BOOL_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT222_STD_VECTOR_FLOT_BOOL_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<bool> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0059_compat222_std_vector_flot_bool_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat222(std::vector_flot<bool> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat222_std_vector_flot_bool_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat222_std_vector_flot_bool_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0059_compat222_std_vector_flot_bool_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<bool> m0",
          "h2dts_compat_container_0059_compat222_std_vector_flot_bool_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0059_compat222_std_vector_flot_bool_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT222_STD_VECTOR_LNG_BOOL_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT222_STD_VECTOR_LNG_BOOL_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<bool> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0060_compat222_std_vector_lng_bool_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat222(std::vector_lng<bool> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat222_std_vector_lng_bool_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat222_std_vector_lng_bool_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0060_compat222_std_vector_lng_bool_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<bool> m0",
          "h2dts_compat_container_0060_compat222_std_vector_lng_bool_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0060_compat222_std_vector_lng_bool_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT222_STD_VECTOR_BAD222_BOOL_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT222_STD_VECTOR_BAD222_BOOL_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad222<bool> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0061_compat222_std_vector_bad222_bool_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat222(std::vector_bad222<bool> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat222_std_vector_bad222_bool_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat222_std_vector_bad222_bool_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0061_compat222_std_vector_bad222_bool_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad222<bool> m0",
          "h2dts_compat_container_0061_compat222_std_vector_bad222_bool_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0061_compat222_std_vector_bad222_bool_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT222_STD_VECTOR_X_BOOL_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT222_STD_VECTOR_X_BOOL_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<bool> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0062_compat222_std_vector_x_bool_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat222(std::vector_x<bool> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat222_std_vector_x_bool_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat222_std_vector_x_bool_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0062_compat222_std_vector_x_bool_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<bool> m0",
          "h2dts_compat_container_0062_compat222_std_vector_x_bool_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0062_compat222_std_vector_x_bool_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT222_STD_VECTOR_BOOL_222_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT222_STD_VECTOR_BOOL_222_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<bool_222> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0063_compat222_std_vector_bool_222_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat222(std::vector<bool_222> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat222_std_vector_bool_222_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat222_std_vector_bool_222_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0063_compat222_std_vector_bool_222_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<bool_222> m0",
          "h2dts_compat_container_0063_compat222_std_vector_bool_222_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0063_compat222_std_vector_bool_222_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT222_STD_VECTOR_BOOL_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT222_STD_VECTOR_BOOL_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<bool> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0064_compat222_std_vector_bool_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat222(std:vector<bool> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat222_std_vector_bool_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat222_std_vector_bool_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0064_compat222_std_vector_bool_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<bool> m0",
          "h2dts_compat_container_0064_compat222_std_vector_bool_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0064_compat222_std_vector_bool_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT227_STD_LIST_ITN_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT227_STD_LIST_ITN_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<itn> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0065_compat227_std_list_itn_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat227(std::list<itn> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat227_std_list_itn_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat227_std_list_itn_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0065_compat227_std_list_itn_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<itn> m1",
          "h2dts_compat_container_0065_compat227_std_list_itn_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0065_compat227_std_list_itn_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT227_STD_LIST_DOUBL_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT227_STD_LIST_DOUBL_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_doubl<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0066_compat227_std_list_doubl_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat227(std::list_doubl<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat227_std_list_doubl_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat227_std_list_doubl_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0066_compat227_std_list_doubl_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_doubl<int> m1",
          "h2dts_compat_container_0066_compat227_std_list_doubl_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0066_compat227_std_list_doubl_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT227_STD_LIST_BOOOL_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT227_STD_LIST_BOOOL_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_boool<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0067_compat227_std_list_boool_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat227(std::list_boool<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat227_std_list_boool_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat227_std_list_boool_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0067_compat227_std_list_boool_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_boool<int> m1",
          "h2dts_compat_container_0067_compat227_std_list_boool_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0067_compat227_std_list_boool_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT227_STD_LIST_FLOT_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT227_STD_LIST_FLOT_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_flot<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0068_compat227_std_list_flot_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat227(std::list_flot<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat227_std_list_flot_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat227_std_list_flot_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0068_compat227_std_list_flot_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_flot<int> m1",
          "h2dts_compat_container_0068_compat227_std_list_flot_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0068_compat227_std_list_flot_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT227_STD_LIST_LNG_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT227_STD_LIST_LNG_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_lng<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0069_compat227_std_list_lng_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat227(std::list_lng<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat227_std_list_lng_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat227_std_list_lng_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0069_compat227_std_list_lng_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_lng<int> m1",
          "h2dts_compat_container_0069_compat227_std_list_lng_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0069_compat227_std_list_lng_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT227_STD_LIST_BAD227_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT227_STD_LIST_BAD227_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_bad227<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0070_compat227_std_list_bad227_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat227(std::list_bad227<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat227_std_list_bad227_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat227_std_list_bad227_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0070_compat227_std_list_bad227_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_bad227<int> m1",
          "h2dts_compat_container_0070_compat227_std_list_bad227_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0070_compat227_std_list_bad227_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT227_STD_LIST_X_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT227_STD_LIST_X_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_x<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0071_compat227_std_list_x_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat227(std::list_x<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat227_std_list_x_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat227_std_list_x_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0071_compat227_std_list_x_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_x<int> m1",
          "h2dts_compat_container_0071_compat227_std_list_x_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0071_compat227_std_list_x_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT227_STD_LIST_INT_227_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT227_STD_LIST_INT_227_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<int_227> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0072_compat227_std_list_int_227_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat227(std::list<int_227> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat227_std_list_int_227_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat227_std_list_int_227_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0072_compat227_std_list_int_227_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<int_227> m1",
          "h2dts_compat_container_0072_compat227_std_list_int_227_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0072_compat227_std_list_int_227_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT227_STD_LIST_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT227_STD_LIST_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:list<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0073_compat227_std_list_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat227(std:list<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat227_std_list_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat227_std_list_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0073_compat227_std_list_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<int> m1",
          "h2dts_compat_container_0073_compat227_std_list_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0073_compat227_std_list_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT228_STD_LIST_ITN_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT228_STD_LIST_ITN_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_itn<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0074_compat228_std_list_itn_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat228(std::list_itn<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat228_std_list_itn_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat228_std_list_itn_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0074_compat228_std_list_itn_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_itn<std::string> m2",
          "h2dts_compat_container_0074_compat228_std_list_itn_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0074_compat228_std_list_itn_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT228_STD_LIST_DOUBL_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT228_STD_LIST_DOUBL_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_doubl<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0075_compat228_std_list_doubl_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat228(std::list_doubl<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat228_std_list_doubl_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat228_std_list_doubl_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0075_compat228_std_list_doubl_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_doubl<std::string> m2",
          "h2dts_compat_container_0075_compat228_std_list_doubl_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0075_compat228_std_list_doubl_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT228_STD_LIST_BOOOL_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT228_STD_LIST_BOOOL_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_boool<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0076_compat228_std_list_boool_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat228(std::list_boool<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat228_std_list_boool_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat228_std_list_boool_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0076_compat228_std_list_boool_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_boool<std::string> m2",
          "h2dts_compat_container_0076_compat228_std_list_boool_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0076_compat228_std_list_boool_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT228_STD_LIST_FLOT_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT228_STD_LIST_FLOT_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_flot<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0001_compat228_std_list_flot_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat228(std::list_flot<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat228_std_list_flot_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat228_std_list_flot_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0001_compat228_std_list_flot_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_flot<std::string> m2",
          "h2dts_compat_container_0001_compat228_std_list_flot_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0001_compat228_std_list_flot_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT228_STD_LIST_LNG_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT228_STD_LIST_LNG_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_lng<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0002_compat228_std_list_lng_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat228(std::list_lng<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat228_std_list_lng_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat228_std_list_lng_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0002_compat228_std_list_lng_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_lng<std::string> m2",
          "h2dts_compat_container_0002_compat228_std_list_lng_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0002_compat228_std_list_lng_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT228_STD_LIST_BAD228_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT228_STD_LIST_BAD228_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_bad228<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0003_compat228_std_list_bad228_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat228(std::list_bad228<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat228_std_list_bad228_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat228_std_list_bad228_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0003_compat228_std_list_bad228_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_bad228<std::string> m2",
          "h2dts_compat_container_0003_compat228_std_list_bad228_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0003_compat228_std_list_bad228_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT228_STD_LIST_X_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT228_STD_LIST_X_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_x<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0004_compat228_std_list_x_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat228(std::list_x<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat228_std_list_x_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat228_std_list_x_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0004_compat228_std_list_x_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_x<std::string> m2",
          "h2dts_compat_container_0004_compat228_std_list_x_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0004_compat228_std_list_x_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT228_STD_LIST_STD_STRING_228_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT228_STD_LIST_STD_STRING_228_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<std::string_228> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0005_compat228_std_list_std_string_228_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat228(std::list<std::string_228> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat228_std_list_std_string_228_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat228_std_list_std_string_228_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0005_compat228_std_list_std_string_228_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<std::string_228> m2",
          "h2dts_compat_container_0005_compat228_std_list_std_string_228_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0005_compat228_std_list_std_string_228_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT228_STD_LIST_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT228_STD_LIST_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:list<std:string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0006_compat228_std_list_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat228(std:list<std:string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat228_std_list_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat228_std_list_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0006_compat228_std_list_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<std:string> m2",
          "h2dts_compat_container_0006_compat228_std_list_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0006_compat228_std_list_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT229_STD_DEQUE_ITN_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT229_STD_DEQUE_ITN_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<itn> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0007_compat229_std_deque_itn_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat229(std::deque<itn> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat229_std_deque_itn_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat229_std_deque_itn_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0007_compat229_std_deque_itn_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<itn> m3",
          "h2dts_compat_container_0007_compat229_std_deque_itn_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0007_compat229_std_deque_itn_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT229_STD_DEQUE_DOUBL_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT229_STD_DEQUE_DOUBL_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_doubl<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0008_compat229_std_deque_doubl_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat229(std::deque_doubl<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat229_std_deque_doubl_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat229_std_deque_doubl_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0008_compat229_std_deque_doubl_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_doubl<int> m3",
          "h2dts_compat_container_0008_compat229_std_deque_doubl_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0008_compat229_std_deque_doubl_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT229_STD_DEQUE_BOOOL_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT229_STD_DEQUE_BOOOL_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_boool<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0009_compat229_std_deque_boool_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat229(std::deque_boool<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat229_std_deque_boool_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat229_std_deque_boool_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0009_compat229_std_deque_boool_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_boool<int> m3",
          "h2dts_compat_container_0009_compat229_std_deque_boool_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0009_compat229_std_deque_boool_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT229_STD_DEQUE_FLOT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT229_STD_DEQUE_FLOT_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_flot<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0010_compat229_std_deque_flot_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat229(std::deque_flot<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat229_std_deque_flot_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat229_std_deque_flot_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0010_compat229_std_deque_flot_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_flot<int> m3",
          "h2dts_compat_container_0010_compat229_std_deque_flot_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0010_compat229_std_deque_flot_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT229_STD_DEQUE_LNG_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT229_STD_DEQUE_LNG_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_lng<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0011_compat229_std_deque_lng_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat229(std::deque_lng<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat229_std_deque_lng_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat229_std_deque_lng_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0011_compat229_std_deque_lng_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_lng<int> m3",
          "h2dts_compat_container_0011_compat229_std_deque_lng_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0011_compat229_std_deque_lng_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT229_STD_DEQUE_BAD229_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT229_STD_DEQUE_BAD229_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_bad229<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0012_compat229_std_deque_bad229_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat229(std::deque_bad229<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat229_std_deque_bad229_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat229_std_deque_bad229_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0012_compat229_std_deque_bad229_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_bad229<int> m3",
          "h2dts_compat_container_0012_compat229_std_deque_bad229_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0012_compat229_std_deque_bad229_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT229_STD_DEQUE_X_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT229_STD_DEQUE_X_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_x<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0013_compat229_std_deque_x_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat229(std::deque_x<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat229_std_deque_x_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat229_std_deque_x_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0013_compat229_std_deque_x_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_x<int> m3",
          "h2dts_compat_container_0013_compat229_std_deque_x_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0013_compat229_std_deque_x_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT229_STD_DEQUE_INT_229_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT229_STD_DEQUE_INT_229_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<int_229> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0014_compat229_std_deque_int_229_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat229(std::deque<int_229> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat229_std_deque_int_229_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat229_std_deque_int_229_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0014_compat229_std_deque_int_229_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<int_229> m3",
          "h2dts_compat_container_0014_compat229_std_deque_int_229_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0014_compat229_std_deque_int_229_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT229_STD_DEQUE_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT229_STD_DEQUE_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0015_compat229_std_deque_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat229(std:deque<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat229_std_deque_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat229_std_deque_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0015_compat229_std_deque_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<int> m3",
          "h2dts_compat_container_0015_compat229_std_deque_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0015_compat229_std_deque_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT230_STD_DEQUE_ITN_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT230_STD_DEQUE_ITN_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_itn<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0016_compat230_std_deque_itn_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(std::deque_itn<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat230_std_deque_itn_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat230_std_deque_itn_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0016_compat230_std_deque_itn_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_itn<std::string> m0",
          "h2dts_compat_container_0016_compat230_std_deque_itn_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0016_compat230_std_deque_itn_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT230_STD_DEQUE_DOUBL_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT230_STD_DEQUE_DOUBL_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_doubl<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0017_compat230_std_deque_doubl_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(std::deque_doubl<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat230_std_deque_doubl_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat230_std_deque_doubl_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0017_compat230_std_deque_doubl_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_doubl<std::string> m0",
          "h2dts_compat_container_0017_compat230_std_deque_doubl_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0017_compat230_std_deque_doubl_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT230_STD_DEQUE_BOOOL_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT230_STD_DEQUE_BOOOL_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_boool<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0018_compat230_std_deque_boool_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(std::deque_boool<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat230_std_deque_boool_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat230_std_deque_boool_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0018_compat230_std_deque_boool_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_boool<std::string> m0",
          "h2dts_compat_container_0018_compat230_std_deque_boool_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0018_compat230_std_deque_boool_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT230_STD_DEQUE_FLOT_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT230_STD_DEQUE_FLOT_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_flot<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0019_compat230_std_deque_flot_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(std::deque_flot<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat230_std_deque_flot_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat230_std_deque_flot_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0019_compat230_std_deque_flot_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_flot<std::string> m0",
          "h2dts_compat_container_0019_compat230_std_deque_flot_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0019_compat230_std_deque_flot_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT230_STD_DEQUE_LNG_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT230_STD_DEQUE_LNG_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_lng<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0020_compat230_std_deque_lng_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(std::deque_lng<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat230_std_deque_lng_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat230_std_deque_lng_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0020_compat230_std_deque_lng_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_lng<std::string> m0",
          "h2dts_compat_container_0020_compat230_std_deque_lng_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0020_compat230_std_deque_lng_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT230_STD_DEQUE_BAD230_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT230_STD_DEQUE_BAD230_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_bad230<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0021_compat230_std_deque_bad230_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(std::deque_bad230<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat230_std_deque_bad230_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat230_std_deque_bad230_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0021_compat230_std_deque_bad230_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_bad230<std::string> m0",
          "h2dts_compat_container_0021_compat230_std_deque_bad230_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0021_compat230_std_deque_bad230_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT230_STD_DEQUE_X_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT230_STD_DEQUE_X_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_x<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0022_compat230_std_deque_x_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(std::deque_x<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat230_std_deque_x_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat230_std_deque_x_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0022_compat230_std_deque_x_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_x<std::string> m0",
          "h2dts_compat_container_0022_compat230_std_deque_x_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0022_compat230_std_deque_x_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT230_STD_DEQUE_STD_STRING_230_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT230_STD_DEQUE_STD_STRING_230_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<std::string_230> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0023_compat230_std_deque_std_string_230_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(std::deque<std::string_230> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat230_std_deque_std_string_230_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat230_std_deque_std_string_230_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0023_compat230_std_deque_std_string_230_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<std::string_230> m0",
          "h2dts_compat_container_0023_compat230_std_deque_std_string_230_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0023_compat230_std_deque_std_string_230_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT230_STD_DEQUE_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT230_STD_DEQUE_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<std:string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0024_compat230_std_deque_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(std:deque<std:string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat230_std_deque_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat230_std_deque_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0024_compat230_std_deque_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<std:string> m0",
          "h2dts_compat_container_0024_compat230_std_deque_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0024_compat230_std_deque_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT235_STD_QUEUE_ITN_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT235_STD_QUEUE_ITN_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue<itn> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0025_compat235_std_queue_itn_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat235(std::queue<itn> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat235_std_queue_itn_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat235_std_queue_itn_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0025_compat235_std_queue_itn_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue<itn> m1",
          "h2dts_compat_container_0025_compat235_std_queue_itn_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0025_compat235_std_queue_itn_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT235_STD_QUEUE_DOUBL_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT235_STD_QUEUE_DOUBL_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_doubl<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0026_compat235_std_queue_doubl_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat235(std::queue_doubl<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat235_std_queue_doubl_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat235_std_queue_doubl_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0026_compat235_std_queue_doubl_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_doubl<int> m1",
          "h2dts_compat_container_0026_compat235_std_queue_doubl_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0026_compat235_std_queue_doubl_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT235_STD_QUEUE_BOOOL_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT235_STD_QUEUE_BOOOL_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_boool<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0027_compat235_std_queue_boool_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat235(std::queue_boool<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat235_std_queue_boool_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat235_std_queue_boool_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0027_compat235_std_queue_boool_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_boool<int> m1",
          "h2dts_compat_container_0027_compat235_std_queue_boool_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0027_compat235_std_queue_boool_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT235_STD_QUEUE_FLOT_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT235_STD_QUEUE_FLOT_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_flot<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0028_compat235_std_queue_flot_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat235(std::queue_flot<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat235_std_queue_flot_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat235_std_queue_flot_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0028_compat235_std_queue_flot_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_flot<int> m1",
          "h2dts_compat_container_0028_compat235_std_queue_flot_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0028_compat235_std_queue_flot_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT235_STD_QUEUE_LNG_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT235_STD_QUEUE_LNG_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_lng<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0029_compat235_std_queue_lng_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat235(std::queue_lng<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat235_std_queue_lng_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat235_std_queue_lng_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0029_compat235_std_queue_lng_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_lng<int> m1",
          "h2dts_compat_container_0029_compat235_std_queue_lng_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0029_compat235_std_queue_lng_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT235_STD_QUEUE_BAD235_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT235_STD_QUEUE_BAD235_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_bad235<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0030_compat235_std_queue_bad235_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat235(std::queue_bad235<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat235_std_queue_bad235_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat235_std_queue_bad235_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0030_compat235_std_queue_bad235_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_bad235<int> m1",
          "h2dts_compat_container_0030_compat235_std_queue_bad235_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0030_compat235_std_queue_bad235_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT235_STD_QUEUE_X_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT235_STD_QUEUE_X_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_x<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0031_compat235_std_queue_x_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat235(std::queue_x<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat235_std_queue_x_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat235_std_queue_x_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0031_compat235_std_queue_x_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_x<int> m1",
          "h2dts_compat_container_0031_compat235_std_queue_x_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0031_compat235_std_queue_x_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT235_STD_QUEUE_INT_235_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT235_STD_QUEUE_INT_235_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue<int_235> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0032_compat235_std_queue_int_235_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat235(std::queue<int_235> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat235_std_queue_int_235_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat235_std_queue_int_235_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0032_compat235_std_queue_int_235_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue<int_235> m1",
          "h2dts_compat_container_0032_compat235_std_queue_int_235_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0032_compat235_std_queue_int_235_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT235_STD_QUEUE_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT235_STD_QUEUE_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:queue<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0033_compat235_std_queue_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat235(std:queue<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat235_std_queue_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat235_std_queue_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0033_compat235_std_queue_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:queue<int> m1",
          "h2dts_compat_container_0033_compat235_std_queue_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0033_compat235_std_queue_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT236_STD_STACK_ITN_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT236_STD_STACK_ITN_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack<itn> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0034_compat236_std_stack_itn_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat236(std::stack<itn> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat236_std_stack_itn_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat236_std_stack_itn_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0034_compat236_std_stack_itn_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack<itn> m2",
          "h2dts_compat_container_0034_compat236_std_stack_itn_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0034_compat236_std_stack_itn_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT236_STD_STACK_DOUBL_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT236_STD_STACK_DOUBL_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_doubl<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0035_compat236_std_stack_doubl_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat236(std::stack_doubl<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat236_std_stack_doubl_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat236_std_stack_doubl_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0035_compat236_std_stack_doubl_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_doubl<int> m2",
          "h2dts_compat_container_0035_compat236_std_stack_doubl_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0035_compat236_std_stack_doubl_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT236_STD_STACK_BOOOL_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT236_STD_STACK_BOOOL_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_boool<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0036_compat236_std_stack_boool_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat236(std::stack_boool<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat236_std_stack_boool_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat236_std_stack_boool_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0036_compat236_std_stack_boool_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_boool<int> m2",
          "h2dts_compat_container_0036_compat236_std_stack_boool_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0036_compat236_std_stack_boool_int_m2 execution error: ${err}`);
    }
  });
});
