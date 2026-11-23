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

suite('Stability_H2DTS_COMPAT_CONTAINER_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_CONTAINER._Part01');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT17_STD_VECTOR_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT17_STD_VECTOR_ITN
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0001_compat17_std_vector_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(std::vector<itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat17_std_vector_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat17_std_vector_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0001_compat17_std_vector_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<itn>",
          "h2dts_compat_container_0001_compat17_std_vector_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0001_compat17_std_vector_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT17_STD_VECTOR_DOUBL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT17_STD_VECTOR_DOUBL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0002_compat17_std_vector_doubl_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(std::vector_doubl<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat17_std_vector_doubl_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat17_std_vector_doubl_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0002_compat17_std_vector_doubl_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<int>",
          "h2dts_compat_container_0002_compat17_std_vector_doubl_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0002_compat17_std_vector_doubl_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT17_STD_VECTOR_BOOOL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT17_STD_VECTOR_BOOOL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0003_compat17_std_vector_boool_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(std::vector_boool<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat17_std_vector_boool_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat17_std_vector_boool_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0003_compat17_std_vector_boool_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<int>",
          "h2dts_compat_container_0003_compat17_std_vector_boool_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0003_compat17_std_vector_boool_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT17_STD_VECTOR_FLOT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT17_STD_VECTOR_FLOT_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0004_compat17_std_vector_flot_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(std::vector_flot<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat17_std_vector_flot_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat17_std_vector_flot_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0004_compat17_std_vector_flot_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<int>",
          "h2dts_compat_container_0004_compat17_std_vector_flot_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0004_compat17_std_vector_flot_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT17_STD_VECTOR_LNG_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT17_STD_VECTOR_LNG_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0005_compat17_std_vector_lng_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(std::vector_lng<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat17_std_vector_lng_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat17_std_vector_lng_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0005_compat17_std_vector_lng_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<int>",
          "h2dts_compat_container_0005_compat17_std_vector_lng_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0005_compat17_std_vector_lng_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT17_STD_VECTOR_BAD17_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT17_STD_VECTOR_BAD17_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad17<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0006_compat17_std_vector_bad17_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(std::vector_bad17<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat17_std_vector_bad17_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat17_std_vector_bad17_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0006_compat17_std_vector_bad17_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad17<int>",
          "h2dts_compat_container_0006_compat17_std_vector_bad17_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0006_compat17_std_vector_bad17_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT17_STD_VECTOR_X_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT17_STD_VECTOR_X_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0007_compat17_std_vector_x_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(std::vector_x<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat17_std_vector_x_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat17_std_vector_x_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0007_compat17_std_vector_x_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<int>",
          "h2dts_compat_container_0007_compat17_std_vector_x_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0007_compat17_std_vector_x_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT17_STD_VECTOR_INT_17
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT17_STD_VECTOR_INT_17
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<int_17>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0008_compat17_std_vector_int_17', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(std::vector<int_17> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat17_std_vector_int_17 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat17_std_vector_int_17 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0008_compat17_std_vector_int_17 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<int_17>",
          "h2dts_compat_container_0008_compat17_std_vector_int_17 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0008_compat17_std_vector_int_17 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT17_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT17_STD_VECTOR_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0009_compat17_std_vector_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(std:vector<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat17_std_vector_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat17_std_vector_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0009_compat17_std_vector_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<int>",
          "h2dts_compat_container_0009_compat17_std_vector_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0009_compat17_std_vector_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT20_STD_LIST_ITN_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT20_STD_LIST_ITN_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_itn<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0010_compat20_std_list_itn_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat20(std::list_itn<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat20_std_list_itn_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat20_std_list_itn_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0010_compat20_std_list_itn_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_itn<double>",
          "h2dts_compat_container_0010_compat20_std_list_itn_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0010_compat20_std_list_itn_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT20_STD_LIST_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT20_STD_LIST_DOUBL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0011_compat20_std_list_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat20(std::list<doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat20_std_list_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat20_std_list_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0011_compat20_std_list_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<doubl>",
          "h2dts_compat_container_0011_compat20_std_list_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0011_compat20_std_list_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT20_STD_LIST_BOOOL_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT20_STD_LIST_BOOOL_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_boool<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0012_compat20_std_list_boool_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat20(std::list_boool<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat20_std_list_boool_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat20_std_list_boool_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0012_compat20_std_list_boool_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_boool<double>",
          "h2dts_compat_container_0012_compat20_std_list_boool_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0012_compat20_std_list_boool_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT20_STD_LIST_FLOT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT20_STD_LIST_FLOT_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_flot<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0013_compat20_std_list_flot_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat20(std::list_flot<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat20_std_list_flot_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat20_std_list_flot_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0013_compat20_std_list_flot_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_flot<double>",
          "h2dts_compat_container_0013_compat20_std_list_flot_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0013_compat20_std_list_flot_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT20_STD_LIST_LNG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT20_STD_LIST_LNG_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_lng<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0014_compat20_std_list_lng_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat20(std::list_lng<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat20_std_list_lng_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat20_std_list_lng_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0014_compat20_std_list_lng_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_lng<double>",
          "h2dts_compat_container_0014_compat20_std_list_lng_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0014_compat20_std_list_lng_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT20_STD_LIST_BAD20_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT20_STD_LIST_BAD20_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_bad20<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0015_compat20_std_list_bad20_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat20(std::list_bad20<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat20_std_list_bad20_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat20_std_list_bad20_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0015_compat20_std_list_bad20_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_bad20<double>",
          "h2dts_compat_container_0015_compat20_std_list_bad20_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0015_compat20_std_list_bad20_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT20_STD_LIST_X_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT20_STD_LIST_X_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_x<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0016_compat20_std_list_x_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat20(std::list_x<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat20_std_list_x_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat20_std_list_x_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0016_compat20_std_list_x_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_x<double>",
          "h2dts_compat_container_0016_compat20_std_list_x_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0016_compat20_std_list_x_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT20_STD_LIST_DOUBLE_20
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT20_STD_LIST_DOUBLE_20
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<double_20>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0017_compat20_std_list_double_20', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat20(std::list<double_20> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat20_std_list_double_20 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat20_std_list_double_20 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0017_compat20_std_list_double_20 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<double_20>",
          "h2dts_compat_container_0017_compat20_std_list_double_20 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0017_compat20_std_list_double_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT20_STD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT20_STD_LIST_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:list<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0018_compat20_std_list_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat20(std:list<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat20_std_list_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat20_std_list_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0018_compat20_std_list_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<double>",
          "h2dts_compat_container_0018_compat20_std_list_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0018_compat20_std_list_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT36_STD_QUEUE_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT36_STD_QUEUE_ITN
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue<itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0019_compat36_std_queue_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat36(std::queue<itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat36_std_queue_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat36_std_queue_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0019_compat36_std_queue_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue<itn>",
          "h2dts_compat_container_0019_compat36_std_queue_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0019_compat36_std_queue_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT36_STD_QUEUE_DOUBL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT36_STD_QUEUE_DOUBL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_doubl<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0020_compat36_std_queue_doubl_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat36(std::queue_doubl<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat36_std_queue_doubl_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat36_std_queue_doubl_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0020_compat36_std_queue_doubl_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_doubl<int>",
          "h2dts_compat_container_0020_compat36_std_queue_doubl_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0020_compat36_std_queue_doubl_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT36_STD_QUEUE_BOOOL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT36_STD_QUEUE_BOOOL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_boool<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0021_compat36_std_queue_boool_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat36(std::queue_boool<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat36_std_queue_boool_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat36_std_queue_boool_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0021_compat36_std_queue_boool_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_boool<int>",
          "h2dts_compat_container_0021_compat36_std_queue_boool_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0021_compat36_std_queue_boool_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT36_STD_QUEUE_FLOT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT36_STD_QUEUE_FLOT_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_flot<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0022_compat36_std_queue_flot_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat36(std::queue_flot<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat36_std_queue_flot_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat36_std_queue_flot_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0022_compat36_std_queue_flot_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_flot<int>",
          "h2dts_compat_container_0022_compat36_std_queue_flot_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0022_compat36_std_queue_flot_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT36_STD_QUEUE_LNG_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT36_STD_QUEUE_LNG_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_lng<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0023_compat36_std_queue_lng_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat36(std::queue_lng<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat36_std_queue_lng_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat36_std_queue_lng_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0023_compat36_std_queue_lng_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_lng<int>",
          "h2dts_compat_container_0023_compat36_std_queue_lng_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0023_compat36_std_queue_lng_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT36_STD_QUEUE_BAD36_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT36_STD_QUEUE_BAD36_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_bad36<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0024_compat36_std_queue_bad36_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat36(std::queue_bad36<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat36_std_queue_bad36_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat36_std_queue_bad36_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0024_compat36_std_queue_bad36_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_bad36<int>",
          "h2dts_compat_container_0024_compat36_std_queue_bad36_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0024_compat36_std_queue_bad36_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT36_STD_QUEUE_X_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT36_STD_QUEUE_X_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue_x<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0025_compat36_std_queue_x_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat36(std::queue_x<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat36_std_queue_x_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat36_std_queue_x_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0025_compat36_std_queue_x_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue_x<int>",
          "h2dts_compat_container_0025_compat36_std_queue_x_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0025_compat36_std_queue_x_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT36_STD_QUEUE_INT_36
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT36_STD_QUEUE_INT_36
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::queue<int_36>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0026_compat36_std_queue_int_36', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat36(std::queue<int_36> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat36_std_queue_int_36 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat36_std_queue_int_36 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0026_compat36_std_queue_int_36 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::queue<int_36>",
          "h2dts_compat_container_0026_compat36_std_queue_int_36 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0026_compat36_std_queue_int_36 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT36_STD_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT36_STD_QUEUE_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:queue<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0027_compat36_std_queue_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat36(std:queue<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat36_std_queue_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat36_std_queue_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0027_compat36_std_queue_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:queue<int>",
          "h2dts_compat_container_0027_compat36_std_queue_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0027_compat36_std_queue_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT37_STD_STACK_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT37_STD_STACK_ITN
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack<itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0028_compat37_std_stack_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(std::stack<itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat37_std_stack_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat37_std_stack_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0028_compat37_std_stack_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack<itn>",
          "h2dts_compat_container_0028_compat37_std_stack_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0028_compat37_std_stack_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT37_STD_STACK_DOUBL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT37_STD_STACK_DOUBL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_doubl<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0029_compat37_std_stack_doubl_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(std::stack_doubl<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat37_std_stack_doubl_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat37_std_stack_doubl_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0029_compat37_std_stack_doubl_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_doubl<int>",
          "h2dts_compat_container_0029_compat37_std_stack_doubl_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0029_compat37_std_stack_doubl_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT37_STD_STACK_BOOOL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT37_STD_STACK_BOOOL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_boool<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0030_compat37_std_stack_boool_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(std::stack_boool<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat37_std_stack_boool_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat37_std_stack_boool_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0030_compat37_std_stack_boool_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_boool<int>",
          "h2dts_compat_container_0030_compat37_std_stack_boool_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0030_compat37_std_stack_boool_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT37_STD_STACK_FLOT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT37_STD_STACK_FLOT_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_flot<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0031_compat37_std_stack_flot_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(std::stack_flot<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat37_std_stack_flot_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat37_std_stack_flot_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0031_compat37_std_stack_flot_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_flot<int>",
          "h2dts_compat_container_0031_compat37_std_stack_flot_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0031_compat37_std_stack_flot_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT37_STD_STACK_LNG_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT37_STD_STACK_LNG_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_lng<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0032_compat37_std_stack_lng_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(std::stack_lng<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat37_std_stack_lng_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat37_std_stack_lng_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0032_compat37_std_stack_lng_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_lng<int>",
          "h2dts_compat_container_0032_compat37_std_stack_lng_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0032_compat37_std_stack_lng_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT37_STD_STACK_BAD37_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT37_STD_STACK_BAD37_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_bad37<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0033_compat37_std_stack_bad37_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(std::stack_bad37<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat37_std_stack_bad37_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat37_std_stack_bad37_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0033_compat37_std_stack_bad37_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_bad37<int>",
          "h2dts_compat_container_0033_compat37_std_stack_bad37_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0033_compat37_std_stack_bad37_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT37_STD_STACK_X_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT37_STD_STACK_X_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_x<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0034_compat37_std_stack_x_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(std::stack_x<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat37_std_stack_x_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat37_std_stack_x_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0034_compat37_std_stack_x_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_x<int>",
          "h2dts_compat_container_0034_compat37_std_stack_x_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0034_compat37_std_stack_x_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT37_STD_STACK_INT_37
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT37_STD_STACK_INT_37
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack<int_37>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0035_compat37_std_stack_int_37', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(std::stack<int_37> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat37_std_stack_int_37 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat37_std_stack_int_37 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0035_compat37_std_stack_int_37 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack<int_37>",
          "h2dts_compat_container_0035_compat37_std_stack_int_37 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0035_compat37_std_stack_int_37 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT37_STD_STACK_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT37_STD_STACK_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:stack<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0036_compat37_std_stack_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(std:stack<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat37_std_stack_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat37_std_stack_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0036_compat37_std_stack_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:stack<int>",
          "h2dts_compat_container_0036_compat37_std_stack_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0036_compat37_std_stack_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT38_STD_PRIORITY_QUEUE_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT38_STD_PRIORITY_QUEUE_ITN
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue<itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0037_compat38_std_priority_queue_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat38(std::priority_queue<itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat38_std_priority_queue_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat38_std_priority_queue_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0037_compat38_std_priority_queue_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue<itn>",
          "h2dts_compat_container_0037_compat38_std_priority_queue_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0037_compat38_std_priority_queue_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT38_STD_PRIORITY_QUEUE_DOUBL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT38_STD_PRIORITY_QUEUE_DOUBL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_doubl<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0038_compat38_std_priority_queue_doubl_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat38(std::priority_queue_doubl<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat38_std_priority_queue_doubl_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat38_std_priority_queue_doubl_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0038_compat38_std_priority_queue_doubl_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_doubl<int>",
          "h2dts_compat_container_0038_compat38_std_priority_queue_doubl_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0038_compat38_std_priority_queue_doubl_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT38_STD_PRIORITY_QUEUE_BOOOL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT38_STD_PRIORITY_QUEUE_BOOOL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_boool<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0039_compat38_std_priority_queue_boool_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat38(std::priority_queue_boool<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat38_std_priority_queue_boool_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat38_std_priority_queue_boool_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0039_compat38_std_priority_queue_boool_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_boool<int>",
          "h2dts_compat_container_0039_compat38_std_priority_queue_boool_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0039_compat38_std_priority_queue_boool_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT38_STD_PRIORITY_QUEUE_FLOT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT38_STD_PRIORITY_QUEUE_FLOT_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_flot<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0040_compat38_std_priority_queue_flot_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat38(std::priority_queue_flot<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat38_std_priority_queue_flot_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat38_std_priority_queue_flot_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0040_compat38_std_priority_queue_flot_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_flot<int>",
          "h2dts_compat_container_0040_compat38_std_priority_queue_flot_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0040_compat38_std_priority_queue_flot_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT38_STD_PRIORITY_QUEUE_LNG_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT38_STD_PRIORITY_QUEUE_LNG_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_lng<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0041_compat38_std_priority_queue_lng_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat38(std::priority_queue_lng<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat38_std_priority_queue_lng_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat38_std_priority_queue_lng_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0041_compat38_std_priority_queue_lng_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_lng<int>",
          "h2dts_compat_container_0041_compat38_std_priority_queue_lng_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0041_compat38_std_priority_queue_lng_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT38_STD_PRIORITY_QUEUE_BAD38_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT38_STD_PRIORITY_QUEUE_BAD38_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_bad38<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0042_compat38_std_priority_queue_bad38_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat38(std::priority_queue_bad38<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat38_std_priority_queue_bad38_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat38_std_priority_queue_bad38_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0042_compat38_std_priority_queue_bad38_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_bad38<int>",
          "h2dts_compat_container_0042_compat38_std_priority_queue_bad38_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0042_compat38_std_priority_queue_bad38_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT38_STD_PRIORITY_QUEUE_X_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT38_STD_PRIORITY_QUEUE_X_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_x<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0043_compat38_std_priority_queue_x_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat38(std::priority_queue_x<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat38_std_priority_queue_x_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat38_std_priority_queue_x_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0043_compat38_std_priority_queue_x_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_x<int>",
          "h2dts_compat_container_0043_compat38_std_priority_queue_x_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0043_compat38_std_priority_queue_x_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT38_STD_PRIORITY_QUEUE_INT_38
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT38_STD_PRIORITY_QUEUE_INT_38
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue<int_38>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0044_compat38_std_priority_queue_int_38', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat38(std::priority_queue<int_38> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat38_std_priority_queue_int_38 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat38_std_priority_queue_int_38 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0044_compat38_std_priority_queue_int_38 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue<int_38>",
          "h2dts_compat_container_0044_compat38_std_priority_queue_int_38 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0044_compat38_std_priority_queue_int_38 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT38_STD_PRIORITY_QUEUE_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT38_STD_PRIORITY_QUEUE_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:priority_queue<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0045_compat38_std_priority_queue_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat38(std:priority_queue<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat38_std_priority_queue_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat38_std_priority_queue_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0045_compat38_std_priority_queue_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<int>",
          "h2dts_compat_container_0045_compat38_std_priority_queue_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0045_compat38_std_priority_queue_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT41_STD_VECTOR_ITN_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT41_STD_VECTOR_ITN_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0046_compat41_std_vector_itn_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat41(std::vector_itn<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat41_std_vector_itn_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat41_std_vector_itn_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0046_compat41_std_vector_itn_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<std::string>",
          "h2dts_compat_container_0046_compat41_std_vector_itn_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0046_compat41_std_vector_itn_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT41_STD_VECTOR_DOUBL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT41_STD_VECTOR_DOUBL_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0047_compat41_std_vector_doubl_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat41(std::vector_doubl<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat41_std_vector_doubl_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat41_std_vector_doubl_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0047_compat41_std_vector_doubl_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<std::string>",
          "h2dts_compat_container_0047_compat41_std_vector_doubl_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0047_compat41_std_vector_doubl_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT41_STD_VECTOR_BOOOL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT41_STD_VECTOR_BOOOL_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0048_compat41_std_vector_boool_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat41(std::vector_boool<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat41_std_vector_boool_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat41_std_vector_boool_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0048_compat41_std_vector_boool_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<std::string>",
          "h2dts_compat_container_0048_compat41_std_vector_boool_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0048_compat41_std_vector_boool_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT41_STD_VECTOR_FLOT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT41_STD_VECTOR_FLOT_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0049_compat41_std_vector_flot_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat41(std::vector_flot<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat41_std_vector_flot_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat41_std_vector_flot_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0049_compat41_std_vector_flot_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<std::string>",
          "h2dts_compat_container_0049_compat41_std_vector_flot_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0049_compat41_std_vector_flot_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT41_STD_VECTOR_LNG_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT41_STD_VECTOR_LNG_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0050_compat41_std_vector_lng_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat41(std::vector_lng<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat41_std_vector_lng_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat41_std_vector_lng_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0050_compat41_std_vector_lng_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<std::string>",
          "h2dts_compat_container_0050_compat41_std_vector_lng_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0050_compat41_std_vector_lng_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT41_STD_VECTOR_BAD41_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT41_STD_VECTOR_BAD41_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad41<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0051_compat41_std_vector_bad41_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat41(std::vector_bad41<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat41_std_vector_bad41_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat41_std_vector_bad41_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0051_compat41_std_vector_bad41_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad41<std::string>",
          "h2dts_compat_container_0051_compat41_std_vector_bad41_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0051_compat41_std_vector_bad41_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT41_STD_VECTOR_X_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT41_STD_VECTOR_X_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0052_compat41_std_vector_x_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat41(std::vector_x<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat41_std_vector_x_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat41_std_vector_x_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0052_compat41_std_vector_x_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<std::string>",
          "h2dts_compat_container_0052_compat41_std_vector_x_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0052_compat41_std_vector_x_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT41_STD_VECTOR_STD_STRING_41
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT41_STD_VECTOR_STD_STRING_41
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<std::string_41>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0053_compat41_std_vector_std_string_41', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat41(std::vector<std::string_41> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat41_std_vector_std_string_41 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat41_std_vector_std_string_41 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0053_compat41_std_vector_std_string_41 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<std::string_41>",
          "h2dts_compat_container_0053_compat41_std_vector_std_string_41 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0053_compat41_std_vector_std_string_41 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT41_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT41_STD_VECTOR_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<std:string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0054_compat41_std_vector_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat41(std:vector<std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat41_std_vector_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat41_std_vector_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0054_compat41_std_vector_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<std:string>",
          "h2dts_compat_container_0054_compat41_std_vector_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0054_compat41_std_vector_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT54_STD_VECTOR_ITN_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT54_STD_VECTOR_ITN_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0055_compat54_std_vector_itn_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat54(std::vector_itn<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat54_std_vector_itn_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat54_std_vector_itn_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0055_compat54_std_vector_itn_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<double>",
          "h2dts_compat_container_0055_compat54_std_vector_itn_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0055_compat54_std_vector_itn_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT54_STD_VECTOR_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT54_STD_VECTOR_DOUBL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0056_compat54_std_vector_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat54(std::vector<doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat54_std_vector_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat54_std_vector_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0056_compat54_std_vector_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<doubl>",
          "h2dts_compat_container_0056_compat54_std_vector_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0056_compat54_std_vector_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT54_STD_VECTOR_BOOOL_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT54_STD_VECTOR_BOOOL_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0057_compat54_std_vector_boool_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat54(std::vector_boool<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat54_std_vector_boool_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat54_std_vector_boool_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0057_compat54_std_vector_boool_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<double>",
          "h2dts_compat_container_0057_compat54_std_vector_boool_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0057_compat54_std_vector_boool_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT54_STD_VECTOR_FLOT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT54_STD_VECTOR_FLOT_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0058_compat54_std_vector_flot_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat54(std::vector_flot<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat54_std_vector_flot_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat54_std_vector_flot_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0058_compat54_std_vector_flot_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<double>",
          "h2dts_compat_container_0058_compat54_std_vector_flot_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0058_compat54_std_vector_flot_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT54_STD_VECTOR_LNG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT54_STD_VECTOR_LNG_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0059_compat54_std_vector_lng_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat54(std::vector_lng<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat54_std_vector_lng_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat54_std_vector_lng_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0059_compat54_std_vector_lng_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<double>",
          "h2dts_compat_container_0059_compat54_std_vector_lng_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0059_compat54_std_vector_lng_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT54_STD_VECTOR_BAD54_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT54_STD_VECTOR_BAD54_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad54<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0060_compat54_std_vector_bad54_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat54(std::vector_bad54<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat54_std_vector_bad54_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat54_std_vector_bad54_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0060_compat54_std_vector_bad54_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad54<double>",
          "h2dts_compat_container_0060_compat54_std_vector_bad54_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0060_compat54_std_vector_bad54_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT54_STD_VECTOR_X_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT54_STD_VECTOR_X_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0061_compat54_std_vector_x_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat54(std::vector_x<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat54_std_vector_x_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat54_std_vector_x_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0061_compat54_std_vector_x_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<double>",
          "h2dts_compat_container_0061_compat54_std_vector_x_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0061_compat54_std_vector_x_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT54_STD_VECTOR_DOUBLE_54
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT54_STD_VECTOR_DOUBLE_54
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<double_54>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0062_compat54_std_vector_double_54', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat54(std::vector<double_54> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat54_std_vector_double_54 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat54_std_vector_double_54 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0062_compat54_std_vector_double_54 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<double_54>",
          "h2dts_compat_container_0062_compat54_std_vector_double_54 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0062_compat54_std_vector_double_54 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT54_STD_VECTOR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT54_STD_VECTOR_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0063_compat54_std_vector_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat54(std:vector<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat54_std_vector_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat54_std_vector_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0063_compat54_std_vector_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<double>",
          "h2dts_compat_container_0063_compat54_std_vector_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0063_compat54_std_vector_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT55_STD_VECTOR_ITN_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT55_STD_VECTOR_ITN_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0064_compat55_std_vector_itn_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat55(std::vector_itn<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat55_std_vector_itn_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat55_std_vector_itn_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0064_compat55_std_vector_itn_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<bool>",
          "h2dts_compat_container_0064_compat55_std_vector_itn_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0064_compat55_std_vector_itn_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT55_STD_VECTOR_DOUBL_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT55_STD_VECTOR_DOUBL_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0065_compat55_std_vector_doubl_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat55(std::vector_doubl<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat55_std_vector_doubl_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat55_std_vector_doubl_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0065_compat55_std_vector_doubl_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<bool>",
          "h2dts_compat_container_0065_compat55_std_vector_doubl_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0065_compat55_std_vector_doubl_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT55_STD_VECTOR_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT55_STD_VECTOR_BOOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<boool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0066_compat55_std_vector_boool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat55(std::vector<boool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat55_std_vector_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat55_std_vector_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0066_compat55_std_vector_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<boool>",
          "h2dts_compat_container_0066_compat55_std_vector_boool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0066_compat55_std_vector_boool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT55_STD_VECTOR_FLOT_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT55_STD_VECTOR_FLOT_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0067_compat55_std_vector_flot_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat55(std::vector_flot<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat55_std_vector_flot_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat55_std_vector_flot_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0067_compat55_std_vector_flot_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<bool>",
          "h2dts_compat_container_0067_compat55_std_vector_flot_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0067_compat55_std_vector_flot_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT55_STD_VECTOR_LNG_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT55_STD_VECTOR_LNG_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0068_compat55_std_vector_lng_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat55(std::vector_lng<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat55_std_vector_lng_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat55_std_vector_lng_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0068_compat55_std_vector_lng_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<bool>",
          "h2dts_compat_container_0068_compat55_std_vector_lng_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0068_compat55_std_vector_lng_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT55_STD_VECTOR_BAD55_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT55_STD_VECTOR_BAD55_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad55<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0069_compat55_std_vector_bad55_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat55(std::vector_bad55<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat55_std_vector_bad55_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat55_std_vector_bad55_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0069_compat55_std_vector_bad55_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad55<bool>",
          "h2dts_compat_container_0069_compat55_std_vector_bad55_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0069_compat55_std_vector_bad55_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT55_STD_VECTOR_X_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT55_STD_VECTOR_X_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0070_compat55_std_vector_x_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat55(std::vector_x<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat55_std_vector_x_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat55_std_vector_x_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0070_compat55_std_vector_x_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<bool>",
          "h2dts_compat_container_0070_compat55_std_vector_x_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0070_compat55_std_vector_x_bool execution error: ${err}`);
    }
  });
});
