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

suite('Stability_H2DTS_COMPAT_SET_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_SET._Part02');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0072
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0072
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_set<std:string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0072', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat143(std:unordered_set<std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0072 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0072 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0072 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_set<std:string>",
          "h2dts_compat_set_0072 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0072 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0073
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0073
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0073', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat210(std::set_itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0073 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0073 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0073 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_itn", "h2dts_compat_set_0073 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0073 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0074
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0074
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0074', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat210(std::set_doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0074 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0074 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0074 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_doubl", "h2dts_compat_set_0074 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0074 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0075
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0075
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0075', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat210(std::set_boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0075 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0075 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0075 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_boool", "h2dts_compat_set_0075 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0075 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0076
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0076
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0076', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat210(std::set_flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0076 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0076 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0076 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_flot", "h2dts_compat_set_0076 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0076 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0077
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0077
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_lng; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0077', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat210(std::set_lng p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0077 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0077 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0077 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_lng", "h2dts_compat_set_0077 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0077 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0078
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0078
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_bad210; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0078', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat210(std::set_bad210 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0078 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0078 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0078 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_bad210", "h2dts_compat_set_0078 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0078 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0079
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0079
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::sext; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0079', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat210(std::sext p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0079 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0079 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0079 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::sext", "h2dts_compat_set_0079 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0079 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0080
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0080
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::se; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0080', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat210(std::se p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0080 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0080 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0080 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::se", "h2dts_compat_set_0080 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0080 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0081
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0081
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:set; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0081', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat210(std:set p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0081 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0081 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0081 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:set", "h2dts_compat_set_0081 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0081 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0001_COMPAT225_STD_SET_ITN_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0001_COMPAT225_STD_SET_ITN_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<itn> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0001_compat225_std_set_itn_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(std::set<itn> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0001_compat225_std_set_itn_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0001_compat225_std_set_itn_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0001_compat225_std_set_itn_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<itn> m3",
          "h2dts_compat_set_0001_compat225_std_set_itn_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0001_compat225_std_set_itn_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0002_COMPAT225_STD_SET_DOUBL_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0002_COMPAT225_STD_SET_DOUBL_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_doubl<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0002_compat225_std_set_doubl_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(std::set_doubl<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0002_compat225_std_set_doubl_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0002_compat225_std_set_doubl_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0002_compat225_std_set_doubl_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_doubl<int> m3",
          "h2dts_compat_set_0002_compat225_std_set_doubl_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0002_compat225_std_set_doubl_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0003_COMPAT225_STD_SET_BOOOL_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0003_COMPAT225_STD_SET_BOOOL_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_boool<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0003_compat225_std_set_boool_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(std::set_boool<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0003_compat225_std_set_boool_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0003_compat225_std_set_boool_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0003_compat225_std_set_boool_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_boool<int> m3",
          "h2dts_compat_set_0003_compat225_std_set_boool_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0003_compat225_std_set_boool_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0004_COMPAT225_STD_SET_FLOT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0004_COMPAT225_STD_SET_FLOT_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_flot<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0004_compat225_std_set_flot_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(std::set_flot<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0004_compat225_std_set_flot_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0004_compat225_std_set_flot_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0004_compat225_std_set_flot_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_flot<int> m3",
          "h2dts_compat_set_0004_compat225_std_set_flot_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0004_compat225_std_set_flot_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0005_COMPAT225_STD_SET_LNG_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0005_COMPAT225_STD_SET_LNG_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_lng<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0005_compat225_std_set_lng_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(std::set_lng<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0005_compat225_std_set_lng_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0005_compat225_std_set_lng_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0005_compat225_std_set_lng_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_lng<int> m3",
          "h2dts_compat_set_0005_compat225_std_set_lng_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0005_compat225_std_set_lng_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0006_COMPAT225_STD_SET_BAD225_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0006_COMPAT225_STD_SET_BAD225_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_bad225<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0006_compat225_std_set_bad225_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(std::set_bad225<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0006_compat225_std_set_bad225_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0006_compat225_std_set_bad225_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0006_compat225_std_set_bad225_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_bad225<int> m3",
          "h2dts_compat_set_0006_compat225_std_set_bad225_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0006_compat225_std_set_bad225_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0007_COMPAT225_STD_SET_X_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0007_COMPAT225_STD_SET_X_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_x<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0007_compat225_std_set_x_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(std::set_x<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0007_compat225_std_set_x_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0007_compat225_std_set_x_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0007_compat225_std_set_x_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_x<int> m3",
          "h2dts_compat_set_0007_compat225_std_set_x_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0007_compat225_std_set_x_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0008_COMPAT225_STD_SET_INT_225_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0008_COMPAT225_STD_SET_INT_225_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<int_225> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0008_compat225_std_set_int_225_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(std::set<int_225> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0008_compat225_std_set_int_225_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0008_compat225_std_set_int_225_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0008_compat225_std_set_int_225_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<int_225> m3",
          "h2dts_compat_set_0008_compat225_std_set_int_225_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0008_compat225_std_set_int_225_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0009_COMPAT225_STD_SET_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0009_COMPAT225_STD_SET_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:set<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0009_compat225_std_set_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(std:set<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0009_compat225_std_set_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0009_compat225_std_set_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0009_compat225_std_set_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:set<int> m3",
          "h2dts_compat_set_0009_compat225_std_set_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0009_compat225_std_set_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0010_COMPAT226_STD_SET_ITN_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0010_COMPAT226_STD_SET_ITN_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_itn<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0010_compat226_std_set_itn_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(std::set_itn<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0010_compat226_std_set_itn_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0010_compat226_std_set_itn_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0010_compat226_std_set_itn_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_itn<std::string> m0",
          "h2dts_compat_set_0010_compat226_std_set_itn_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0010_compat226_std_set_itn_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0011_COMPAT226_STD_SET_DOUBL_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0011_COMPAT226_STD_SET_DOUBL_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_doubl<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0011_compat226_std_set_doubl_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(std::set_doubl<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0011_compat226_std_set_doubl_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0011_compat226_std_set_doubl_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0011_compat226_std_set_doubl_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_doubl<std::string> m0",
          "h2dts_compat_set_0011_compat226_std_set_doubl_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0011_compat226_std_set_doubl_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0012_COMPAT226_STD_SET_BOOOL_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0012_COMPAT226_STD_SET_BOOOL_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_boool<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0012_compat226_std_set_boool_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(std::set_boool<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0012_compat226_std_set_boool_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0012_compat226_std_set_boool_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0012_compat226_std_set_boool_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_boool<std::string> m0",
          "h2dts_compat_set_0012_compat226_std_set_boool_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0012_compat226_std_set_boool_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0013_COMPAT226_STD_SET_FLOT_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0013_COMPAT226_STD_SET_FLOT_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_flot<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0013_compat226_std_set_flot_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(std::set_flot<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0013_compat226_std_set_flot_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0013_compat226_std_set_flot_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0013_compat226_std_set_flot_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_flot<std::string> m0",
          "h2dts_compat_set_0013_compat226_std_set_flot_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0013_compat226_std_set_flot_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0014_COMPAT226_STD_SET_LNG_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0014_COMPAT226_STD_SET_LNG_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_lng<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0014_compat226_std_set_lng_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(std::set_lng<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0014_compat226_std_set_lng_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0014_compat226_std_set_lng_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0014_compat226_std_set_lng_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_lng<std::string> m0",
          "h2dts_compat_set_0014_compat226_std_set_lng_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0014_compat226_std_set_lng_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0015_COMPAT226_STD_SET_BAD226_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0015_COMPAT226_STD_SET_BAD226_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_bad226<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0015_compat226_std_set_bad226_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(std::set_bad226<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0015_compat226_std_set_bad226_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0015_compat226_std_set_bad226_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0015_compat226_std_set_bad226_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_bad226<std::string> m0",
          "h2dts_compat_set_0015_compat226_std_set_bad226_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0015_compat226_std_set_bad226_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0016_COMPAT226_STD_SET_X_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0016_COMPAT226_STD_SET_X_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_x<std::string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0016_compat226_std_set_x_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(std::set_x<std::string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0016_compat226_std_set_x_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0016_compat226_std_set_x_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0016_compat226_std_set_x_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_x<std::string> m0",
          "h2dts_compat_set_0016_compat226_std_set_x_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0016_compat226_std_set_x_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0017_COMPAT226_STD_SET_STD_STRING_226_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0017_COMPAT226_STD_SET_STD_STRING_226_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<std::string_226> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0017_compat226_std_set_std_string_226_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(std::set<std::string_226> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0017_compat226_std_set_std_string_226_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0017_compat226_std_set_std_string_226_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0017_compat226_std_set_std_string_226_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<std::string_226> m0",
          "h2dts_compat_set_0017_compat226_std_set_std_string_226_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0017_compat226_std_set_std_string_226_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0018_COMPAT226_STD_SET_STD_STRING_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0018_COMPAT226_STD_SET_STD_STRING_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:set<std:string> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0018_compat226_std_set_std_string_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(std:set<std:string> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0018_compat226_std_set_std_string_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0018_compat226_std_set_std_string_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0018_compat226_std_set_std_string_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:set<std:string> m0",
          "h2dts_compat_set_0018_compat226_std_set_std_string_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0018_compat226_std_set_std_string_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0019_COMPAT239_STD_MULTISET_ITN_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0019_COMPAT239_STD_MULTISET_ITN_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset<itn> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0019_compat239_std_multiset_itn_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat239(std::multiset<itn> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0019_compat239_std_multiset_itn_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0019_compat239_std_multiset_itn_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0019_compat239_std_multiset_itn_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset<itn> m1",
          "h2dts_compat_set_0019_compat239_std_multiset_itn_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0019_compat239_std_multiset_itn_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0020_COMPAT239_STD_MULTISET_DOUBL_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0020_COMPAT239_STD_MULTISET_DOUBL_INT_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_doubl<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0020_compat239_std_multiset_doubl_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat239(std::multiset_doubl<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0020_compat239_std_multiset_doubl_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0020_compat239_std_multiset_doubl_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0020_compat239_std_multiset_doubl_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_doubl<int> m1",
          "h2dts_compat_set_0020_compat239_std_multiset_doubl_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0020_compat239_std_multiset_doubl_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0021_COMPAT239_STD_MULTISET_BOOOL_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0021_COMPAT239_STD_MULTISET_BOOOL_INT_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_boool<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0021_compat239_std_multiset_boool_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat239(std::multiset_boool<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0021_compat239_std_multiset_boool_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0021_compat239_std_multiset_boool_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0021_compat239_std_multiset_boool_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_boool<int> m1",
          "h2dts_compat_set_0021_compat239_std_multiset_boool_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0021_compat239_std_multiset_boool_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0022_COMPAT239_STD_MULTISET_FLOT_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0022_COMPAT239_STD_MULTISET_FLOT_INT_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_flot<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0022_compat239_std_multiset_flot_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat239(std::multiset_flot<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0022_compat239_std_multiset_flot_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0022_compat239_std_multiset_flot_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0022_compat239_std_multiset_flot_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_flot<int> m1",
          "h2dts_compat_set_0022_compat239_std_multiset_flot_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0022_compat239_std_multiset_flot_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0023_COMPAT239_STD_MULTISET_LNG_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0023_COMPAT239_STD_MULTISET_LNG_INT_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_lng<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0023_compat239_std_multiset_lng_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat239(std::multiset_lng<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0023_compat239_std_multiset_lng_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0023_compat239_std_multiset_lng_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0023_compat239_std_multiset_lng_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_lng<int> m1",
          "h2dts_compat_set_0023_compat239_std_multiset_lng_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0023_compat239_std_multiset_lng_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0024_COMPAT239_STD_MULTISET_BAD239_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0024_COMPAT239_STD_MULTISET_BAD239_INT_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_bad239<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0024_compat239_std_multiset_bad239_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat239(std::multiset_bad239<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0024_compat239_std_multiset_bad239_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0024_compat239_std_multiset_bad239_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0024_compat239_std_multiset_bad239_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_bad239<int> m1",
          "h2dts_compat_set_0024_compat239_std_multiset_bad239_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0024_compat239_std_multiset_bad239_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0025_COMPAT239_STD_MULTISET_X_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0025_COMPAT239_STD_MULTISET_X_INT_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_x<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0025_compat239_std_multiset_x_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat239(std::multiset_x<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0025_compat239_std_multiset_x_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0025_compat239_std_multiset_x_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0025_compat239_std_multiset_x_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_x<int> m1",
          "h2dts_compat_set_0025_compat239_std_multiset_x_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0025_compat239_std_multiset_x_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0026_COMPAT239_STD_MULTISET_INT_239_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0026_COMPAT239_STD_MULTISET_INT_239_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset<int_239> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0026_compat239_std_multiset_int_239_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat239(std::multiset<int_239> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0026_compat239_std_multiset_int_239_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0026_compat239_std_multiset_int_239_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0026_compat239_std_multiset_int_239_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset<int_239> m1",
          "h2dts_compat_set_0026_compat239_std_multiset_int_239_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0026_compat239_std_multiset_int_239_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0027_COMPAT239_STD_MULTISET_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0027_COMPAT239_STD_MULTISET_INT_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:multiset<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0027_compat239_std_multiset_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat239(std:multiset<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0027_compat239_std_multiset_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0027_compat239_std_multiset_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0027_compat239_std_multiset_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:multiset<int> m1",
          "h2dts_compat_set_0027_compat239_std_multiset_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0027_compat239_std_multiset_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0028_COMPAT241_STD_UNORDERED_SET_ITN_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0028_COMPAT241_STD_UNORDERED_SET_ITN_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set<itn> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0028_compat241_std_unordered_set_itn_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat241(std::unordered_set<itn> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0028_compat241_std_unordered_set_itn_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0028_compat241_std_unordered_set_itn_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0028_compat241_std_unordered_set_itn_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set<itn> m3",
          "h2dts_compat_set_0028_compat241_std_unordered_set_itn_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0028_compat241_std_unordered_set_itn_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0029_COMPAT241_STD_UNORDERED_SET_DOUBL_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0029_COMPAT241_STD_UNORDERED_SET_DOUBL_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_doubl<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0029_compat241_std_unordered_set_doubl_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat241(std::unordered_set_doubl<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0029_compat241_std_unordered_set_doubl_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0029_compat241_std_unordered_set_doubl_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0029_compat241_std_unordered_set_doubl_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_doubl<int> m3",
          "h2dts_compat_set_0029_compat241_std_unordered_set_doubl_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0029_compat241_std_unordered_set_doubl_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0030_COMPAT241_STD_UNORDERED_SET_BOOOL_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0030_COMPAT241_STD_UNORDERED_SET_BOOOL_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_boool<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0030_compat241_std_unordered_set_boool_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat241(std::unordered_set_boool<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0030_compat241_std_unordered_set_boool_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0030_compat241_std_unordered_set_boool_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0030_compat241_std_unordered_set_boool_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_boool<int> m3",
          "h2dts_compat_set_0030_compat241_std_unordered_set_boool_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0030_compat241_std_unordered_set_boool_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0031_COMPAT241_STD_UNORDERED_SET_FLOT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0031_COMPAT241_STD_UNORDERED_SET_FLOT_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_flot<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0031_compat241_std_unordered_set_flot_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat241(std::unordered_set_flot<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0031_compat241_std_unordered_set_flot_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0031_compat241_std_unordered_set_flot_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0031_compat241_std_unordered_set_flot_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_flot<int> m3",
          "h2dts_compat_set_0031_compat241_std_unordered_set_flot_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0031_compat241_std_unordered_set_flot_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0032_COMPAT241_STD_UNORDERED_SET_LNG_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0032_COMPAT241_STD_UNORDERED_SET_LNG_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_lng<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0032_compat241_std_unordered_set_lng_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat241(std::unordered_set_lng<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0032_compat241_std_unordered_set_lng_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0032_compat241_std_unordered_set_lng_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0032_compat241_std_unordered_set_lng_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_lng<int> m3",
          "h2dts_compat_set_0032_compat241_std_unordered_set_lng_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0032_compat241_std_unordered_set_lng_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0033_COMPAT241_STD_UNORDERED_SET_BAD241_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0033_COMPAT241_STD_UNORDERED_SET_BAD241_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_bad241<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0033_compat241_std_unordered_set_bad241_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat241(std::unordered_set_bad241<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0033_compat241_std_unordered_set_bad241_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0033_compat241_std_unordered_set_bad241_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0033_compat241_std_unordered_set_bad241_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_bad241<int> m3",
          "h2dts_compat_set_0033_compat241_std_unordered_set_bad241_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0033_compat241_std_unordered_set_bad241_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0034_COMPAT241_STD_UNORDERED_SET_X_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0034_COMPAT241_STD_UNORDERED_SET_X_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_x<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0034_compat241_std_unordered_set_x_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat241(std::unordered_set_x<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0034_compat241_std_unordered_set_x_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0034_compat241_std_unordered_set_x_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0034_compat241_std_unordered_set_x_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_x<int> m3",
          "h2dts_compat_set_0034_compat241_std_unordered_set_x_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0034_compat241_std_unordered_set_x_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0035_COMPAT241_STD_UNORDERED_SET_INT_241_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0035_COMPAT241_STD_UNORDERED_SET_INT_241_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set<int_241> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0035_compat241_std_unordered_set_int_241_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat241(std::unordered_set<int_241> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0035_compat241_std_unordered_set_int_241_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0035_compat241_std_unordered_set_int_241_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0035_compat241_std_unordered_set_int_241_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set<int_241> m3",
          "h2dts_compat_set_0035_compat241_std_unordered_set_int_241_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0035_compat241_std_unordered_set_int_241_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0036_COMPAT241_STD_UNORDERED_SET_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0036_COMPAT241_STD_UNORDERED_SET_INT_M3
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_set<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0036_compat241_std_unordered_set_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat241(std:unordered_set<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0036_compat241_std_unordered_set_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0036_compat241_std_unordered_set_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0036_compat241_std_unordered_set_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_set<int> m3",
          "h2dts_compat_set_0036_compat241_std_unordered_set_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0036_compat241_std_unordered_set_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0037_COMPAT255_STD_SET_ITN_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0037_COMPAT255_STD_SET_ITN_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<itn> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0037_compat255_std_set_itn_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat255(std::set<itn> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0037_compat255_std_set_itn_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0037_compat255_std_set_itn_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0037_compat255_std_set_itn_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<itn> m0",
          "h2dts_compat_set_0037_compat255_std_set_itn_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0037_compat255_std_set_itn_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0038_COMPAT255_STD_SET_DOUBL_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0038_COMPAT255_STD_SET_DOUBL_INT_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_doubl<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0038_compat255_std_set_doubl_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat255(std::set_doubl<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0038_compat255_std_set_doubl_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0038_compat255_std_set_doubl_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0038_compat255_std_set_doubl_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_doubl<int> m0",
          "h2dts_compat_set_0038_compat255_std_set_doubl_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0038_compat255_std_set_doubl_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0039_COMPAT255_STD_SET_BOOOL_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0039_COMPAT255_STD_SET_BOOOL_INT_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_boool<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0039_compat255_std_set_boool_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat255(std::set_boool<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0039_compat255_std_set_boool_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0039_compat255_std_set_boool_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0039_compat255_std_set_boool_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_boool<int> m0",
          "h2dts_compat_set_0039_compat255_std_set_boool_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0039_compat255_std_set_boool_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0040_COMPAT255_STD_SET_FLOT_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0040_COMPAT255_STD_SET_FLOT_INT_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_flot<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0040_compat255_std_set_flot_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat255(std::set_flot<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0040_compat255_std_set_flot_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0040_compat255_std_set_flot_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0040_compat255_std_set_flot_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_flot<int> m0",
          "h2dts_compat_set_0040_compat255_std_set_flot_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0040_compat255_std_set_flot_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0041_COMPAT255_STD_SET_LNG_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0041_COMPAT255_STD_SET_LNG_INT_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_lng<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0041_compat255_std_set_lng_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat255(std::set_lng<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0041_compat255_std_set_lng_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0041_compat255_std_set_lng_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0041_compat255_std_set_lng_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_lng<int> m0",
          "h2dts_compat_set_0041_compat255_std_set_lng_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0041_compat255_std_set_lng_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0042_COMPAT255_STD_SET_BAD255_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0042_COMPAT255_STD_SET_BAD255_INT_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_bad255<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0042_compat255_std_set_bad255_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat255(std::set_bad255<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0042_compat255_std_set_bad255_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0042_compat255_std_set_bad255_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0042_compat255_std_set_bad255_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_bad255<int> m0",
          "h2dts_compat_set_0042_compat255_std_set_bad255_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0042_compat255_std_set_bad255_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0043_COMPAT255_STD_SET_X_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0043_COMPAT255_STD_SET_X_INT_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_x<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0043_compat255_std_set_x_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat255(std::set_x<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0043_compat255_std_set_x_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0043_compat255_std_set_x_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0043_compat255_std_set_x_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_x<int> m0",
          "h2dts_compat_set_0043_compat255_std_set_x_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0043_compat255_std_set_x_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0044_COMPAT255_STD_SET_INT_255_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0044_COMPAT255_STD_SET_INT_255_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<int_255> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0044_compat255_std_set_int_255_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat255(std::set<int_255> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0044_compat255_std_set_int_255_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0044_compat255_std_set_int_255_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0044_compat255_std_set_int_255_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<int_255> m0",
          "h2dts_compat_set_0044_compat255_std_set_int_255_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0044_compat255_std_set_int_255_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0045_COMPAT255_STD_SET_INT_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0045_COMPAT255_STD_SET_INT_M0
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:set<int> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0045_compat255_std_set_int_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat255(std:set<int> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0045_compat255_std_set_int_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0045_compat255_std_set_int_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0045_compat255_std_set_int_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:set<int> m0",
          "h2dts_compat_set_0045_compat255_std_set_int_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0045_compat255_std_set_int_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0046_COMPAT256_STD_SET_ITN_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0046_COMPAT256_STD_SET_ITN_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_itn<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0046_compat256_std_set_itn_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat256(std::set_itn<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0046_compat256_std_set_itn_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0046_compat256_std_set_itn_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0046_compat256_std_set_itn_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_itn<std::string> m1",
          "h2dts_compat_set_0046_compat256_std_set_itn_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0046_compat256_std_set_itn_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0047_COMPAT256_STD_SET_DOUBL_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0047_COMPAT256_STD_SET_DOUBL_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_doubl<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0047_compat256_std_set_doubl_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat256(std::set_doubl<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0047_compat256_std_set_doubl_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0047_compat256_std_set_doubl_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0047_compat256_std_set_doubl_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_doubl<std::string> m1",
          "h2dts_compat_set_0047_compat256_std_set_doubl_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0047_compat256_std_set_doubl_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0048_COMPAT256_STD_SET_BOOOL_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0048_COMPAT256_STD_SET_BOOOL_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_boool<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0048_compat256_std_set_boool_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat256(std::set_boool<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0048_compat256_std_set_boool_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0048_compat256_std_set_boool_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0048_compat256_std_set_boool_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_boool<std::string> m1",
          "h2dts_compat_set_0048_compat256_std_set_boool_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0048_compat256_std_set_boool_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0049_COMPAT256_STD_SET_FLOT_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0049_COMPAT256_STD_SET_FLOT_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_flot<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0049_compat256_std_set_flot_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat256(std::set_flot<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0049_compat256_std_set_flot_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0049_compat256_std_set_flot_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0049_compat256_std_set_flot_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_flot<std::string> m1",
          "h2dts_compat_set_0049_compat256_std_set_flot_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0049_compat256_std_set_flot_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0050_COMPAT256_STD_SET_LNG_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0050_COMPAT256_STD_SET_LNG_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_lng<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0050_compat256_std_set_lng_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat256(std::set_lng<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0050_compat256_std_set_lng_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0050_compat256_std_set_lng_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0050_compat256_std_set_lng_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_lng<std::string> m1",
          "h2dts_compat_set_0050_compat256_std_set_lng_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0050_compat256_std_set_lng_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0051_COMPAT256_STD_SET_BAD256_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0051_COMPAT256_STD_SET_BAD256_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_bad256<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0051_compat256_std_set_bad256_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat256(std::set_bad256<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0051_compat256_std_set_bad256_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0051_compat256_std_set_bad256_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0051_compat256_std_set_bad256_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_bad256<std::string> m1",
          "h2dts_compat_set_0051_compat256_std_set_bad256_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0051_compat256_std_set_bad256_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0052_COMPAT256_STD_SET_X_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0052_COMPAT256_STD_SET_X_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_x<std::string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0052_compat256_std_set_x_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat256(std::set_x<std::string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0052_compat256_std_set_x_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0052_compat256_std_set_x_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0052_compat256_std_set_x_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_x<std::string> m1",
          "h2dts_compat_set_0052_compat256_std_set_x_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0052_compat256_std_set_x_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0053_COMPAT256_STD_SET_STD_STRING_256_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0053_COMPAT256_STD_SET_STD_STRING_256_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<std::string_256> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0053_compat256_std_set_std_string_256_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat256(std::set<std::string_256> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0053_compat256_std_set_std_string_256_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0053_compat256_std_set_std_string_256_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0053_compat256_std_set_std_string_256_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<std::string_256> m1",
          "h2dts_compat_set_0053_compat256_std_set_std_string_256_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0053_compat256_std_set_std_string_256_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0054_COMPAT256_STD_SET_STD_STRING_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0054_COMPAT256_STD_SET_STD_STRING_M1
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:set<std:string> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0054_compat256_std_set_std_string_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat256(std:set<std:string> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0054_compat256_std_set_std_string_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0054_compat256_std_set_std_string_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0054_compat256_std_set_std_string_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:set<std:string> m1",
          "h2dts_compat_set_0054_compat256_std_set_std_string_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0054_compat256_std_set_std_string_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0055_COMPAT269_STD_MULTISET_ITN_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0055_COMPAT269_STD_MULTISET_ITN_M2
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset<itn> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0055_compat269_std_multiset_itn_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(std::multiset<itn> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0055_compat269_std_multiset_itn_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0055_compat269_std_multiset_itn_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0055_compat269_std_multiset_itn_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset<itn> m2",
          "h2dts_compat_set_0055_compat269_std_multiset_itn_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0055_compat269_std_multiset_itn_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0056_COMPAT269_STD_MULTISET_DOUBL_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0056_COMPAT269_STD_MULTISET_DOUBL_INT_M2
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_doubl<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0056_compat269_std_multiset_doubl_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(std::multiset_doubl<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0056_compat269_std_multiset_doubl_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0056_compat269_std_multiset_doubl_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0056_compat269_std_multiset_doubl_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_doubl<int> m2",
          "h2dts_compat_set_0056_compat269_std_multiset_doubl_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0056_compat269_std_multiset_doubl_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0057_COMPAT269_STD_MULTISET_BOOOL_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0057_COMPAT269_STD_MULTISET_BOOOL_INT_M2
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_boool<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0057_compat269_std_multiset_boool_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(std::multiset_boool<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0057_compat269_std_multiset_boool_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0057_compat269_std_multiset_boool_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0057_compat269_std_multiset_boool_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_boool<int> m2",
          "h2dts_compat_set_0057_compat269_std_multiset_boool_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0057_compat269_std_multiset_boool_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0058_COMPAT269_STD_MULTISET_FLOT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0058_COMPAT269_STD_MULTISET_FLOT_INT_M2
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_flot<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0058_compat269_std_multiset_flot_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(std::multiset_flot<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0058_compat269_std_multiset_flot_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0058_compat269_std_multiset_flot_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0058_compat269_std_multiset_flot_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_flot<int> m2",
          "h2dts_compat_set_0058_compat269_std_multiset_flot_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0058_compat269_std_multiset_flot_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0059_COMPAT269_STD_MULTISET_LNG_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0059_COMPAT269_STD_MULTISET_LNG_INT_M2
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_lng<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0059_compat269_std_multiset_lng_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(std::multiset_lng<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0059_compat269_std_multiset_lng_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0059_compat269_std_multiset_lng_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0059_compat269_std_multiset_lng_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_lng<int> m2",
          "h2dts_compat_set_0059_compat269_std_multiset_lng_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0059_compat269_std_multiset_lng_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0060_COMPAT269_STD_MULTISET_BAD269_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0060_COMPAT269_STD_MULTISET_BAD269_INT_M2
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_bad269<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0060_compat269_std_multiset_bad269_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(std::multiset_bad269<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0060_compat269_std_multiset_bad269_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0060_compat269_std_multiset_bad269_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0060_compat269_std_multiset_bad269_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_bad269<int> m2",
          "h2dts_compat_set_0060_compat269_std_multiset_bad269_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0060_compat269_std_multiset_bad269_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0061_COMPAT269_STD_MULTISET_X_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0061_COMPAT269_STD_MULTISET_X_INT_M2
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_x<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0061_compat269_std_multiset_x_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(std::multiset_x<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0061_compat269_std_multiset_x_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0061_compat269_std_multiset_x_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0061_compat269_std_multiset_x_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_x<int> m2",
          "h2dts_compat_set_0061_compat269_std_multiset_x_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0061_compat269_std_multiset_x_int_m2 execution error: ${err}`);
    }
  });
});
