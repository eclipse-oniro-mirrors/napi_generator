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

suite('Stability_H2DTS_COMPAT_SET_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_SET._Part01');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0001_COMPAT19_STD_SET_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0001_COMPAT19_STD_SET_ITN
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0001_compat19_std_set_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat19(std::set<itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0001_compat19_std_set_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0001_compat19_std_set_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0001_compat19_std_set_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<itn>",
          "h2dts_compat_set_0001_compat19_std_set_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0001_compat19_std_set_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0002_COMPAT19_STD_SET_DOUBL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0002_COMPAT19_STD_SET_DOUBL_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_doubl<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0002_compat19_std_set_doubl_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat19(std::set_doubl<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0002_compat19_std_set_doubl_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0002_compat19_std_set_doubl_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0002_compat19_std_set_doubl_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_doubl<int>",
          "h2dts_compat_set_0002_compat19_std_set_doubl_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0002_compat19_std_set_doubl_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0003_COMPAT19_STD_SET_BOOOL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0003_COMPAT19_STD_SET_BOOOL_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_boool<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0003_compat19_std_set_boool_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat19(std::set_boool<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0003_compat19_std_set_boool_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0003_compat19_std_set_boool_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0003_compat19_std_set_boool_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_boool<int>",
          "h2dts_compat_set_0003_compat19_std_set_boool_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0003_compat19_std_set_boool_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0004_COMPAT19_STD_SET_FLOT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0004_COMPAT19_STD_SET_FLOT_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_flot<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0004_compat19_std_set_flot_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat19(std::set_flot<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0004_compat19_std_set_flot_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0004_compat19_std_set_flot_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0004_compat19_std_set_flot_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_flot<int>",
          "h2dts_compat_set_0004_compat19_std_set_flot_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0004_compat19_std_set_flot_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0005_COMPAT19_STD_SET_LNG_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0005_COMPAT19_STD_SET_LNG_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_lng<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0005_compat19_std_set_lng_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat19(std::set_lng<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0005_compat19_std_set_lng_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0005_compat19_std_set_lng_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0005_compat19_std_set_lng_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_lng<int>",
          "h2dts_compat_set_0005_compat19_std_set_lng_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0005_compat19_std_set_lng_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0006_COMPAT19_STD_SET_BAD19_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0006_COMPAT19_STD_SET_BAD19_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_bad19<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0006_compat19_std_set_bad19_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat19(std::set_bad19<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0006_compat19_std_set_bad19_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0006_compat19_std_set_bad19_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0006_compat19_std_set_bad19_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_bad19<int>",
          "h2dts_compat_set_0006_compat19_std_set_bad19_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0006_compat19_std_set_bad19_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0007_COMPAT19_STD_SET_X_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0007_COMPAT19_STD_SET_X_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_x<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0007_compat19_std_set_x_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat19(std::set_x<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0007_compat19_std_set_x_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0007_compat19_std_set_x_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0007_compat19_std_set_x_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_x<int>",
          "h2dts_compat_set_0007_compat19_std_set_x_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0007_compat19_std_set_x_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0008_COMPAT19_STD_SET_INT_19
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0008_COMPAT19_STD_SET_INT_19
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<int_19>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0008_compat19_std_set_int_19', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat19(std::set<int_19> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0008_compat19_std_set_int_19 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0008_compat19_std_set_int_19 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0008_compat19_std_set_int_19 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<int_19>",
          "h2dts_compat_set_0008_compat19_std_set_int_19 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0008_compat19_std_set_int_19 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0009_COMPAT19_STD_SET_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0009_COMPAT19_STD_SET_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:set<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0009_compat19_std_set_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat19(std:set<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0009_compat19_std_set_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0009_compat19_std_set_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0009_compat19_std_set_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:set<int>",
          "h2dts_compat_set_0009_compat19_std_set_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0009_compat19_std_set_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0010_COMPAT35_STD_UNORDERED_SET_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0010_COMPAT35_STD_UNORDERED_SET_ITN
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set<itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0010_compat35_std_unordered_set_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat35(std::unordered_set<itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0010_compat35_std_unordered_set_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0010_compat35_std_unordered_set_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0010_compat35_std_unordered_set_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set<itn>",
          "h2dts_compat_set_0010_compat35_std_unordered_set_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0010_compat35_std_unordered_set_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0011_COMPAT35_STD_UNORDERED_SET_DOUBL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0011_COMPAT35_STD_UNORDERED_SET_DOUBL_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_doubl<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0011_compat35_std_unordered_set_doubl_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat35(std::unordered_set_doubl<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0011_compat35_std_unordered_set_doubl_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0011_compat35_std_unordered_set_doubl_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0011_compat35_std_unordered_set_doubl_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_doubl<int>",
          "h2dts_compat_set_0011_compat35_std_unordered_set_doubl_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0011_compat35_std_unordered_set_doubl_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0012_COMPAT35_STD_UNORDERED_SET_BOOOL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0012_COMPAT35_STD_UNORDERED_SET_BOOOL_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_boool<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0012_compat35_std_unordered_set_boool_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat35(std::unordered_set_boool<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0012_compat35_std_unordered_set_boool_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0012_compat35_std_unordered_set_boool_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0012_compat35_std_unordered_set_boool_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_boool<int>",
          "h2dts_compat_set_0012_compat35_std_unordered_set_boool_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0012_compat35_std_unordered_set_boool_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0013_COMPAT35_STD_UNORDERED_SET_FLOT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0013_COMPAT35_STD_UNORDERED_SET_FLOT_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_flot<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0013_compat35_std_unordered_set_flot_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat35(std::unordered_set_flot<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0013_compat35_std_unordered_set_flot_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0013_compat35_std_unordered_set_flot_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0013_compat35_std_unordered_set_flot_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_flot<int>",
          "h2dts_compat_set_0013_compat35_std_unordered_set_flot_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0013_compat35_std_unordered_set_flot_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0014_COMPAT35_STD_UNORDERED_SET_LNG_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0014_COMPAT35_STD_UNORDERED_SET_LNG_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_lng<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0014_compat35_std_unordered_set_lng_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat35(std::unordered_set_lng<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0014_compat35_std_unordered_set_lng_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0014_compat35_std_unordered_set_lng_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0014_compat35_std_unordered_set_lng_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_lng<int>",
          "h2dts_compat_set_0014_compat35_std_unordered_set_lng_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0014_compat35_std_unordered_set_lng_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0015_COMPAT35_STD_UNORDERED_SET_BAD35_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0015_COMPAT35_STD_UNORDERED_SET_BAD35_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_bad35<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0015_compat35_std_unordered_set_bad35_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat35(std::unordered_set_bad35<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0015_compat35_std_unordered_set_bad35_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0015_compat35_std_unordered_set_bad35_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0015_compat35_std_unordered_set_bad35_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_bad35<int>",
          "h2dts_compat_set_0015_compat35_std_unordered_set_bad35_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0015_compat35_std_unordered_set_bad35_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0016_COMPAT35_STD_UNORDERED_SET_X_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0016_COMPAT35_STD_UNORDERED_SET_X_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_x<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0016_compat35_std_unordered_set_x_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat35(std::unordered_set_x<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0016_compat35_std_unordered_set_x_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0016_compat35_std_unordered_set_x_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0016_compat35_std_unordered_set_x_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_x<int>",
          "h2dts_compat_set_0016_compat35_std_unordered_set_x_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0016_compat35_std_unordered_set_x_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0017_COMPAT35_STD_UNORDERED_SET_INT_35
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0017_COMPAT35_STD_UNORDERED_SET_INT_35
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set<int_35>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0017_compat35_std_unordered_set_int_35', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat35(std::unordered_set<int_35> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0017_compat35_std_unordered_set_int_35 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0017_compat35_std_unordered_set_int_35 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0017_compat35_std_unordered_set_int_35 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set<int_35>",
          "h2dts_compat_set_0017_compat35_std_unordered_set_int_35 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0017_compat35_std_unordered_set_int_35 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0018_COMPAT35_STD_UNORDERED_SET_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0018_COMPAT35_STD_UNORDERED_SET_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_set<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0018_compat35_std_unordered_set_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat35(std:unordered_set<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0018_compat35_std_unordered_set_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0018_compat35_std_unordered_set_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0018_compat35_std_unordered_set_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_set<int>",
          "h2dts_compat_set_0018_compat35_std_unordered_set_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0018_compat35_std_unordered_set_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0019_COMPAT40_STD_MULTISET_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0019_COMPAT40_STD_MULTISET_ITN
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset<itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0019_compat40_std_multiset_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat40(std::multiset<itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0019_compat40_std_multiset_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0019_compat40_std_multiset_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0019_compat40_std_multiset_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset<itn>",
          "h2dts_compat_set_0019_compat40_std_multiset_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0019_compat40_std_multiset_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0020_COMPAT40_STD_MULTISET_DOUBL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0020_COMPAT40_STD_MULTISET_DOUBL_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_doubl<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0020_compat40_std_multiset_doubl_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat40(std::multiset_doubl<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0020_compat40_std_multiset_doubl_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0020_compat40_std_multiset_doubl_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0020_compat40_std_multiset_doubl_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_doubl<int>",
          "h2dts_compat_set_0020_compat40_std_multiset_doubl_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0020_compat40_std_multiset_doubl_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0021_COMPAT40_STD_MULTISET_BOOOL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0021_COMPAT40_STD_MULTISET_BOOOL_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_boool<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0021_compat40_std_multiset_boool_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat40(std::multiset_boool<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0021_compat40_std_multiset_boool_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0021_compat40_std_multiset_boool_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0021_compat40_std_multiset_boool_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_boool<int>",
          "h2dts_compat_set_0021_compat40_std_multiset_boool_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0021_compat40_std_multiset_boool_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0022_COMPAT40_STD_MULTISET_FLOT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0022_COMPAT40_STD_MULTISET_FLOT_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_flot<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0022_compat40_std_multiset_flot_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat40(std::multiset_flot<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0022_compat40_std_multiset_flot_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0022_compat40_std_multiset_flot_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0022_compat40_std_multiset_flot_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_flot<int>",
          "h2dts_compat_set_0022_compat40_std_multiset_flot_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0022_compat40_std_multiset_flot_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0023_COMPAT40_STD_MULTISET_LNG_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0023_COMPAT40_STD_MULTISET_LNG_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_lng<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0023_compat40_std_multiset_lng_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat40(std::multiset_lng<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0023_compat40_std_multiset_lng_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0023_compat40_std_multiset_lng_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0023_compat40_std_multiset_lng_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_lng<int>",
          "h2dts_compat_set_0023_compat40_std_multiset_lng_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0023_compat40_std_multiset_lng_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0024_COMPAT40_STD_MULTISET_BAD40_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0024_COMPAT40_STD_MULTISET_BAD40_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_bad40<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0024_compat40_std_multiset_bad40_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat40(std::multiset_bad40<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0024_compat40_std_multiset_bad40_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0024_compat40_std_multiset_bad40_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0024_compat40_std_multiset_bad40_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_bad40<int>",
          "h2dts_compat_set_0024_compat40_std_multiset_bad40_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0024_compat40_std_multiset_bad40_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0025_COMPAT40_STD_MULTISET_X_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0025_COMPAT40_STD_MULTISET_X_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset_x<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0025_compat40_std_multiset_x_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat40(std::multiset_x<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0025_compat40_std_multiset_x_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0025_compat40_std_multiset_x_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0025_compat40_std_multiset_x_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset_x<int>",
          "h2dts_compat_set_0025_compat40_std_multiset_x_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0025_compat40_std_multiset_x_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0026_COMPAT40_STD_MULTISET_INT_40
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0026_COMPAT40_STD_MULTISET_INT_40
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multiset<int_40>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0026_compat40_std_multiset_int_40', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat40(std::multiset<int_40> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0026_compat40_std_multiset_int_40 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0026_compat40_std_multiset_int_40 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0026_compat40_std_multiset_int_40 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::multiset<int_40>",
          "h2dts_compat_set_0026_compat40_std_multiset_int_40 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0026_compat40_std_multiset_int_40 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0027_COMPAT40_STD_MULTISET_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0027_COMPAT40_STD_MULTISET_INT
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:multiset<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0027_compat40_std_multiset_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat40(std:multiset<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0027_compat40_std_multiset_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0027_compat40_std_multiset_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0027_compat40_std_multiset_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:multiset<int>",
          "h2dts_compat_set_0027_compat40_std_multiset_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0027_compat40_std_multiset_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0028_COMPAT58_STD_SET_ITN_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0028_COMPAT58_STD_SET_ITN_STD_STRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_itn<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0028_compat58_std_set_itn_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat58(std::set_itn<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0028_compat58_std_set_itn_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0028_compat58_std_set_itn_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0028_compat58_std_set_itn_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_itn<std::string>",
          "h2dts_compat_set_0028_compat58_std_set_itn_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0028_compat58_std_set_itn_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0029_COMPAT58_STD_SET_DOUBL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0029_COMPAT58_STD_SET_DOUBL_STD_STRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_doubl<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0029_compat58_std_set_doubl_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat58(std::set_doubl<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0029_compat58_std_set_doubl_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0029_compat58_std_set_doubl_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0029_compat58_std_set_doubl_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_doubl<std::string>",
          "h2dts_compat_set_0029_compat58_std_set_doubl_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0029_compat58_std_set_doubl_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0030_COMPAT58_STD_SET_BOOOL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0030_COMPAT58_STD_SET_BOOOL_STD_STRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_boool<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0030_compat58_std_set_boool_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat58(std::set_boool<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0030_compat58_std_set_boool_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0030_compat58_std_set_boool_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0030_compat58_std_set_boool_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_boool<std::string>",
          "h2dts_compat_set_0030_compat58_std_set_boool_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0030_compat58_std_set_boool_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0031_COMPAT58_STD_SET_FLOT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0031_COMPAT58_STD_SET_FLOT_STD_STRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_flot<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0031_compat58_std_set_flot_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat58(std::set_flot<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0031_compat58_std_set_flot_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0031_compat58_std_set_flot_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0031_compat58_std_set_flot_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_flot<std::string>",
          "h2dts_compat_set_0031_compat58_std_set_flot_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0031_compat58_std_set_flot_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0032_COMPAT58_STD_SET_LNG_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0032_COMPAT58_STD_SET_LNG_STD_STRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_lng<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0032_compat58_std_set_lng_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat58(std::set_lng<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0032_compat58_std_set_lng_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0032_compat58_std_set_lng_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0032_compat58_std_set_lng_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_lng<std::string>",
          "h2dts_compat_set_0032_compat58_std_set_lng_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0032_compat58_std_set_lng_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0033_COMPAT58_STD_SET_BAD58_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0033_COMPAT58_STD_SET_BAD58_STD_STRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_bad58<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0033_compat58_std_set_bad58_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat58(std::set_bad58<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0033_compat58_std_set_bad58_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0033_compat58_std_set_bad58_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0033_compat58_std_set_bad58_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_bad58<std::string>",
          "h2dts_compat_set_0033_compat58_std_set_bad58_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0033_compat58_std_set_bad58_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0034_COMPAT58_STD_SET_X_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0034_COMPAT58_STD_SET_X_STD_STRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_x<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0034_compat58_std_set_x_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat58(std::set_x<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0034_compat58_std_set_x_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0034_compat58_std_set_x_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0034_compat58_std_set_x_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_x<std::string>",
          "h2dts_compat_set_0034_compat58_std_set_x_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0034_compat58_std_set_x_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0035_COMPAT58_STD_SET_STD_STRING_58
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0035_COMPAT58_STD_SET_STD_STRING_58
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<std::string_58>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0035_compat58_std_set_std_string_58', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat58(std::set<std::string_58> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0035_compat58_std_set_std_string_58 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0035_compat58_std_set_std_string_58 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0035_compat58_std_set_std_string_58 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<std::string_58>",
          "h2dts_compat_set_0035_compat58_std_set_std_string_58 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0035_compat58_std_set_std_string_58 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0036_COMPAT58_STD_SET_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0036_COMPAT58_STD_SET_STD_STRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:set<std:string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0036_compat58_std_set_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat58(std:set<std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0036_compat58_std_set_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0036_compat58_std_set_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0036_compat58_std_set_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:set<std:string>",
          "h2dts_compat_set_0036_compat58_std_set_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0036_compat58_std_set_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0037_COMPAT135_STD_SET_ITN_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0037_COMPAT135_STD_SET_ITN_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_itn<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0037_compat135_std_set_itn_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(std::set_itn<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0037_compat135_std_set_itn_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0037_compat135_std_set_itn_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0037_compat135_std_set_itn_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_itn<double>",
          "h2dts_compat_set_0037_compat135_std_set_itn_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0037_compat135_std_set_itn_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0038_COMPAT135_STD_SET_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0038_COMPAT135_STD_SET_DOUBL
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0038_compat135_std_set_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(std::set<doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0038_compat135_std_set_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0038_compat135_std_set_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0038_compat135_std_set_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<doubl>",
          "h2dts_compat_set_0038_compat135_std_set_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0038_compat135_std_set_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0039_COMPAT135_STD_SET_BOOOL_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0039_COMPAT135_STD_SET_BOOOL_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_boool<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0039_compat135_std_set_boool_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(std::set_boool<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0039_compat135_std_set_boool_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0039_compat135_std_set_boool_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0039_compat135_std_set_boool_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_boool<double>",
          "h2dts_compat_set_0039_compat135_std_set_boool_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0039_compat135_std_set_boool_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0040_COMPAT135_STD_SET_FLOT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0040_COMPAT135_STD_SET_FLOT_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_flot<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0040_compat135_std_set_flot_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(std::set_flot<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0040_compat135_std_set_flot_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0040_compat135_std_set_flot_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0040_compat135_std_set_flot_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_flot<double>",
          "h2dts_compat_set_0040_compat135_std_set_flot_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0040_compat135_std_set_flot_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0041_COMPAT135_STD_SET_LNG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0041_COMPAT135_STD_SET_LNG_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_lng<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0041_compat135_std_set_lng_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(std::set_lng<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0041_compat135_std_set_lng_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0041_compat135_std_set_lng_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0041_compat135_std_set_lng_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_lng<double>",
          "h2dts_compat_set_0041_compat135_std_set_lng_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0041_compat135_std_set_lng_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0042_COMPAT135_STD_SET_BAD135_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0042_COMPAT135_STD_SET_BAD135_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_bad135<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0042_compat135_std_set_bad135_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(std::set_bad135<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0042_compat135_std_set_bad135_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0042_compat135_std_set_bad135_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0042_compat135_std_set_bad135_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_bad135<double>",
          "h2dts_compat_set_0042_compat135_std_set_bad135_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0042_compat135_std_set_bad135_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0043_COMPAT135_STD_SET_X_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0043_COMPAT135_STD_SET_X_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_x<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0043_compat135_std_set_x_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(std::set_x<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0043_compat135_std_set_x_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0043_compat135_std_set_x_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0043_compat135_std_set_x_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_x<double>",
          "h2dts_compat_set_0043_compat135_std_set_x_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0043_compat135_std_set_x_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0044_COMPAT135_STD_SET_DOUBLE_135
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0044_COMPAT135_STD_SET_DOUBLE_135
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<double_135>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0044_compat135_std_set_double_135', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(std::set<double_135> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0044_compat135_std_set_double_135 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0044_compat135_std_set_double_135 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0044_compat135_std_set_double_135 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<double_135>",
          "h2dts_compat_set_0044_compat135_std_set_double_135 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0044_compat135_std_set_double_135 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0045_COMPAT135_STD_SET_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0045_COMPAT135_STD_SET_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:set<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0045_compat135_std_set_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(std:set<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0045_compat135_std_set_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0045_compat135_std_set_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0045_compat135_std_set_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:set<double>",
          "h2dts_compat_set_0045_compat135_std_set_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0045_compat135_std_set_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0046_COMPAT136_STD_SET_ITN_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0046_COMPAT136_STD_SET_ITN_STD_WSTRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_itn<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0046_compat136_std_set_itn_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(std::set_itn<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0046_compat136_std_set_itn_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0046_compat136_std_set_itn_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0046_compat136_std_set_itn_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_itn<std::wstring>",
          "h2dts_compat_set_0046_compat136_std_set_itn_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0046_compat136_std_set_itn_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0047_COMPAT136_STD_SET_DOUBL_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0047_COMPAT136_STD_SET_DOUBL_STD_WSTRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_doubl<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0047_compat136_std_set_doubl_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(std::set_doubl<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0047_compat136_std_set_doubl_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0047_compat136_std_set_doubl_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0047_compat136_std_set_doubl_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_doubl<std::wstring>",
          "h2dts_compat_set_0047_compat136_std_set_doubl_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0047_compat136_std_set_doubl_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0048_COMPAT136_STD_SET_BOOOL_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0048_COMPAT136_STD_SET_BOOOL_STD_WSTRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_boool<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0048_compat136_std_set_boool_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(std::set_boool<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0048_compat136_std_set_boool_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0048_compat136_std_set_boool_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0048_compat136_std_set_boool_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_boool<std::wstring>",
          "h2dts_compat_set_0048_compat136_std_set_boool_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0048_compat136_std_set_boool_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0049_COMPAT136_STD_SET_FLOT_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0049_COMPAT136_STD_SET_FLOT_STD_WSTRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_flot<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0049_compat136_std_set_flot_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(std::set_flot<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0049_compat136_std_set_flot_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0049_compat136_std_set_flot_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0049_compat136_std_set_flot_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_flot<std::wstring>",
          "h2dts_compat_set_0049_compat136_std_set_flot_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0049_compat136_std_set_flot_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0050_COMPAT136_STD_SET_LNG_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0050_COMPAT136_STD_SET_LNG_STD_WSTRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_lng<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0050_compat136_std_set_lng_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(std::set_lng<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0050_compat136_std_set_lng_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0050_compat136_std_set_lng_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0050_compat136_std_set_lng_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_lng<std::wstring>",
          "h2dts_compat_set_0050_compat136_std_set_lng_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0050_compat136_std_set_lng_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0051_COMPAT136_STD_SET_BAD136_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0051_COMPAT136_STD_SET_BAD136_STD_WSTRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_bad136<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0051_compat136_std_set_bad136_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(std::set_bad136<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0051_compat136_std_set_bad136_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0051_compat136_std_set_bad136_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0051_compat136_std_set_bad136_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_bad136<std::wstring>",
          "h2dts_compat_set_0051_compat136_std_set_bad136_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0051_compat136_std_set_bad136_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0052_COMPAT136_STD_SET_X_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0052_COMPAT136_STD_SET_X_STD_WSTRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set_x<std::wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0052_compat136_std_set_x_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(std::set_x<std::wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0052_compat136_std_set_x_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0052_compat136_std_set_x_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0052_compat136_std_set_x_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set_x<std::wstring>",
          "h2dts_compat_set_0052_compat136_std_set_x_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0052_compat136_std_set_x_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0053_COMPAT136_STD_SET_STD_WSTRING_136
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0053_COMPAT136_STD_SET_STD_WSTRING_136
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::set<std::wstring_136>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0053_compat136_std_set_std_wstring_136', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(std::set<std::wstring_136> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0053_compat136_std_set_std_wstring_136 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0053_compat136_std_set_std_wstring_136 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0053_compat136_std_set_std_wstring_136 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::set<std::wstring_136>",
          "h2dts_compat_set_0053_compat136_std_set_std_wstring_136 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0053_compat136_std_set_std_wstring_136 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0054_COMPAT136_STD_SET_STD_WSTRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0054_COMPAT136_STD_SET_STD_WSTRING
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:set<std:wstring>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0054_compat136_std_set_std_wstring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(std:set<std:wstring> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0054_compat136_std_set_std_wstring parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0054_compat136_std_set_std_wstring must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0054_compat136_std_set_std_wstring must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:set<std:wstring>",
          "h2dts_compat_set_0054_compat136_std_set_std_wstring param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0054_compat136_std_set_std_wstring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0055_COMPAT142_STD_UNORDERED_SET_ITN_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0055_COMPAT142_STD_UNORDERED_SET_ITN_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_itn<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0055_compat142_std_unordered_set_itn_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat142(std::unordered_set_itn<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0055_compat142_std_unordered_set_itn_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0055_compat142_std_unordered_set_itn_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0055_compat142_std_unordered_set_itn_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_itn<double>",
          "h2dts_compat_set_0055_compat142_std_unordered_set_itn_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0055_compat142_std_unordered_set_itn_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0056_COMPAT142_STD_UNORDERED_SET_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0056_COMPAT142_STD_UNORDERED_SET_DOUBL
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set<doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0056_compat142_std_unordered_set_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat142(std::unordered_set<doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0056_compat142_std_unordered_set_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0056_compat142_std_unordered_set_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0056_compat142_std_unordered_set_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set<doubl>",
          "h2dts_compat_set_0056_compat142_std_unordered_set_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0056_compat142_std_unordered_set_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0057_COMPAT142_STD_UNORDERED_SET_BOOOL_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0057_COMPAT142_STD_UNORDERED_SET_BOOOL_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_boool<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0057_compat142_std_unordered_set_boool_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat142(std::unordered_set_boool<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0057_compat142_std_unordered_set_boool_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0057_compat142_std_unordered_set_boool_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0057_compat142_std_unordered_set_boool_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_boool<double>",
          "h2dts_compat_set_0057_compat142_std_unordered_set_boool_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0057_compat142_std_unordered_set_boool_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0058_COMPAT142_STD_UNORDERED_SET_FLOT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0058_COMPAT142_STD_UNORDERED_SET_FLOT_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_flot<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0058_compat142_std_unordered_set_flot_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat142(std::unordered_set_flot<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0058_compat142_std_unordered_set_flot_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0058_compat142_std_unordered_set_flot_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0058_compat142_std_unordered_set_flot_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_flot<double>",
          "h2dts_compat_set_0058_compat142_std_unordered_set_flot_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0058_compat142_std_unordered_set_flot_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0059_COMPAT142_STD_UNORDERED_SET_LNG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0059_COMPAT142_STD_UNORDERED_SET_LNG_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_lng<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0059_compat142_std_unordered_set_lng_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat142(std::unordered_set_lng<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0059_compat142_std_unordered_set_lng_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0059_compat142_std_unordered_set_lng_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0059_compat142_std_unordered_set_lng_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_lng<double>",
          "h2dts_compat_set_0059_compat142_std_unordered_set_lng_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0059_compat142_std_unordered_set_lng_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0060_COMPAT142_STD_UNORDERED_SET_BAD142_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0060_COMPAT142_STD_UNORDERED_SET_BAD142_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_bad142<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0060_compat142_std_unordered_set_bad142_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat142(std::unordered_set_bad142<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0060_compat142_std_unordered_set_bad142_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0060_compat142_std_unordered_set_bad142_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0060_compat142_std_unordered_set_bad142_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_bad142<double>",
          "h2dts_compat_set_0060_compat142_std_unordered_set_bad142_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0060_compat142_std_unordered_set_bad142_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0061_COMPAT142_STD_UNORDERED_SET_X_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0061_COMPAT142_STD_UNORDERED_SET_X_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_x<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0061_compat142_std_unordered_set_x_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat142(std::unordered_set_x<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0061_compat142_std_unordered_set_x_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0061_compat142_std_unordered_set_x_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0061_compat142_std_unordered_set_x_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_x<double>",
          "h2dts_compat_set_0061_compat142_std_unordered_set_x_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0061_compat142_std_unordered_set_x_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0062_COMPAT142_STD_UNORDERED_SET_DOUBLE_142
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0062_COMPAT142_STD_UNORDERED_SET_DOUBLE_142
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set<double_142>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0062_compat142_std_unordered_set_double_142', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat142(std::unordered_set<double_142> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0062_compat142_std_unordered_set_double_142 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0062_compat142_std_unordered_set_double_142 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0062_compat142_std_unordered_set_double_142 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set<double_142>",
          "h2dts_compat_set_0062_compat142_std_unordered_set_double_142 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0062_compat142_std_unordered_set_double_142 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0063_COMPAT142_STD_UNORDERED_SET_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0063_COMPAT142_STD_UNORDERED_SET_DOUBLE
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_set<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0063_compat142_std_unordered_set_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat142(std:unordered_set<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0063_compat142_std_unordered_set_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_set_0063_compat142_std_unordered_set_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_set_0063_compat142_std_unordered_set_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_set<double>",
          "h2dts_compat_set_0063_compat142_std_unordered_set_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0063_compat142_std_unordered_set_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0064
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0064
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_itn<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0064', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat143(std::unordered_set_itn<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0064 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0064 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0064 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_itn<std::string>",
          "h2dts_compat_set_0064 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0064 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0065
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0065
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_doubl<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0065', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat143(std::unordered_set_doubl<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0065 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0065 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0065 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_doubl<std::string>",
          "h2dts_compat_set_0065 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0065 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0066
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0066
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_boool<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0066', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat143(std::unordered_set_boool<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0066 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0066 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0066 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_boool<std::string>",
          "h2dts_compat_set_0066 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0066 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0067
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0067
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_flot<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0067', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat143(std::unordered_set_flot<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0067 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0067 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0067 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_flot<std::string>",
          "h2dts_compat_set_0067 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0067 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0068
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0068
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_lng<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0068', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat143(std::unordered_set_lng<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0068 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0068 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0068 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_lng<std::string>",
          "h2dts_compat_set_0068 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0068 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0069
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0069
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_bad143<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0069', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat143(std::unordered_set_bad143<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0069 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0069 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0069 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_bad143<std::string>",
          "h2dts_compat_set_0069 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0069 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0070
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0070
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set_x<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0070', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat143(std::unordered_set_x<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0070 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0070 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0070 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set_x<std::string>",
          "h2dts_compat_set_0070 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0070 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SET_0071
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SET_0071
   * @tc.desc   Stability compat h2dts/set: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_set<std::string_143>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_set_0071', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat143(std::unordered_set<std::string_143> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0071 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_set_0071 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_set_0071 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::unordered_set<std::string_143>",
          "h2dts_compat_set_0071 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_set_0071 execution error: ${err}`);
    }
  });
});
