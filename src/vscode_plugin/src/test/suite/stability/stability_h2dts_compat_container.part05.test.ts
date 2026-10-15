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

suite('Stability_H2DTS_COMPAT_CONTAINER_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_CONTAINER._Part05');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT182_STD_VECTOR_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT182_STD_VECTOR_DOUBL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0050_compat182_std_vector_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat182(std::vector_doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat182_std_vector_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat182_std_vector_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0050_compat182_std_vector_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl",
          "h2dts_compat_container_0050_compat182_std_vector_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0050_compat182_std_vector_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT182_STD_VECTOR_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT182_STD_VECTOR_BOOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0051_compat182_std_vector_boool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat182(std::vector_boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat182_std_vector_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat182_std_vector_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0051_compat182_std_vector_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool",
          "h2dts_compat_container_0051_compat182_std_vector_boool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0051_compat182_std_vector_boool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT182_STD_VECTOR_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT182_STD_VECTOR_FLOT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0052_compat182_std_vector_flot', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat182(std::vector_flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat182_std_vector_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat182_std_vector_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0052_compat182_std_vector_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot",
          "h2dts_compat_container_0052_compat182_std_vector_flot param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0052_compat182_std_vector_flot execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT182_STD_VECTOR_LNG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT182_STD_VECTOR_LNG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0053_compat182_std_vector_lng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat182(std::vector_lng p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat182_std_vector_lng parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat182_std_vector_lng must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0053_compat182_std_vector_lng must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng",
          "h2dts_compat_container_0053_compat182_std_vector_lng param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0053_compat182_std_vector_lng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT182_STD_VECTOR_BAD182
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT182_STD_VECTOR_BAD182
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad182; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0054_compat182_std_vector_bad182', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat182(std::vector_bad182 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat182_std_vector_bad182 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat182_std_vector_bad182 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0054_compat182_std_vector_bad182 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad182",
          "h2dts_compat_container_0054_compat182_std_vector_bad182 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0054_compat182_std_vector_bad182 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT182_STD_VECTOXR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT182_STD_VECTOXR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vectoxr; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0055_compat182_std_vectoxr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat182(std::vectoxr p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat182_std_vectoxr parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat182_std_vectoxr must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0055_compat182_std_vectoxr must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vectoxr",
          "h2dts_compat_container_0055_compat182_std_vectoxr param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0055_compat182_std_vectoxr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT182_STD_VECTO
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT182_STD_VECTO
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vecto; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0056_compat182_std_vecto', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat182(std::vecto p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat182_std_vecto parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat182_std_vecto must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0056_compat182_std_vecto must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vecto",
          "h2dts_compat_container_0056_compat182_std_vecto param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0056_compat182_std_vecto execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT182_STD_VECTOR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT182_STD_VECTOR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0057_compat182_std_vector', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat182(std:vector p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat182_std_vector parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat182_std_vector must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0057_compat182_std_vector must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector",
          "h2dts_compat_container_0057_compat182_std_vector param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0057_compat182_std_vector execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT189_CONST_STD_VECTOXR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT189_CONST_STD_VECTOXR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type const std::vectoxr; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0058_compat189_const_std_vectoxr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat189(const std::vectoxr p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat189_const_std_vectoxr parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat189_const_std_vectoxr must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0058_compat189_const_std_vectoxr must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vectoxr",
          "h2dts_compat_container_0058_compat189_const_std_vectoxr param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0058_compat189_const_std_vectoxr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT189_CONST_STD_VECTO
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT189_CONST_STD_VECTO
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type const std::vecto; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0059_compat189_const_std_vecto', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat189(const std::vecto p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat189_const_std_vecto parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat189_const_std_vecto must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0059_compat189_const_std_vecto must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vecto",
          "h2dts_compat_container_0059_compat189_const_std_vecto param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0059_compat189_const_std_vecto execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT189_CONST_STD_VECTOR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT189_CONST_STD_VECTOR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type const std:vector; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0060_compat189_const_std_vector', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat189(const std:vector p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat189_const_std_vector parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat189_const_std_vector must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0060_compat189_const_std_vector must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector",
          "h2dts_compat_container_0060_compat189_const_std_vector param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0060_compat189_const_std_vector execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT196_STD_VECTOR_UNSIGNED_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT196_STD_VECTOR_UNSIGNED_ITN
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<unsigned itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0061_compat196_std_vector_unsigned_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat196(std::vector<unsigned itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat196_std_vector_unsigned_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat196_std_vector_unsigned_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0061_compat196_std_vector_unsigned_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<unsigned itn>",
          "h2dts_compat_container_0061_compat196_std_vector_unsigned_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0061_compat196_std_vector_unsigned_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT196_STD_VECTOR_DOUBL_UNSIGNED_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT196_STD_VECTOR_DOUBL_UNSIGNED_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<unsigned int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0062_compat196_std_vector_doubl_unsigned_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat196(std::vector_doubl<unsigned int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat196_std_vector_doubl_unsigned_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat196_std_vector_doubl_unsigned_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0062_compat196_std_vector_doubl_unsigned_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<unsigned int>",
          "h2dts_compat_container_0062_compat196_std_vector_doubl_unsigned_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0062_compat196_std_vector_doubl_unsigned_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT196_STD_VECTOR_BOOOL_UNSIGNED_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT196_STD_VECTOR_BOOOL_UNSIGNED_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<unsigned int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0063_compat196_std_vector_boool_unsigned_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat196(std::vector_boool<unsigned int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat196_std_vector_boool_unsigned_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat196_std_vector_boool_unsigned_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0063_compat196_std_vector_boool_unsigned_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<unsigned int>",
          "h2dts_compat_container_0063_compat196_std_vector_boool_unsigned_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0063_compat196_std_vector_boool_unsigned_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT196_STD_VECTOR_FLOT_UNSIGNED_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT196_STD_VECTOR_FLOT_UNSIGNED_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<unsigned int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0064_compat196_std_vector_flot_unsigned_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat196(std::vector_flot<unsigned int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat196_std_vector_flot_unsigned_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat196_std_vector_flot_unsigned_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0064_compat196_std_vector_flot_unsigned_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<unsigned int>",
          "h2dts_compat_container_0064_compat196_std_vector_flot_unsigned_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0064_compat196_std_vector_flot_unsigned_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT196_STD_VECTOR_LNG_UNSIGNED_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT196_STD_VECTOR_LNG_UNSIGNED_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<unsigned int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0065_compat196_std_vector_lng_unsigned_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat196(std::vector_lng<unsigned int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat196_std_vector_lng_unsigned_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat196_std_vector_lng_unsigned_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0065_compat196_std_vector_lng_unsigned_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<unsigned int>",
          "h2dts_compat_container_0065_compat196_std_vector_lng_unsigned_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0065_compat196_std_vector_lng_unsigned_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT196_STD_VECTOR_BAD196_UNSIGNED_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT196_STD_VECTOR_BAD196_UNSIGNED_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad196<unsigned int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0066_compat196_std_vector_bad196_unsigned_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat196(std::vector_bad196<unsigned int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat196_std_vector_bad196_unsigned_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat196_std_vector_bad196_unsigned_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0066_compat196_std_vector_bad196_unsigned_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad196<unsigned int>",
          "h2dts_compat_container_0066_compat196_std_vector_bad196_unsigned_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0066_compat196_std_vector_bad196_unsigned_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT196_STD_VECTOR_X_UNSIGNED_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT196_STD_VECTOR_X_UNSIGNED_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<unsigned int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0067_compat196_std_vector_x_unsigned_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat196(std::vector_x<unsigned int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat196_std_vector_x_unsigned_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat196_std_vector_x_unsigned_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0067_compat196_std_vector_x_unsigned_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<unsigned int>",
          "h2dts_compat_container_0067_compat196_std_vector_x_unsigned_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0067_compat196_std_vector_x_unsigned_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT196_STD_VECTOR_UNSIGNED_INT_196
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT196_STD_VECTOR_UNSIGNED_INT_196
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<unsigned int_196>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0068_compat196_std_vector_unsigned_int_196', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat196(std::vector<unsigned int_196> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat196_std_vector_unsigned_int_196 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat196_std_vector_unsigned_int_196 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0068_compat196_std_vector_unsigned_int_196 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<unsigned int_196>",
          "h2dts_compat_container_0068_compat196_std_vector_unsigned_int_196 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0068_compat196_std_vector_unsigned_int_196 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT196_STD_VECTOR_UNSIGNED_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT196_STD_VECTOR_UNSIGNED_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<unsigned int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0069_compat196_std_vector_unsigned_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat196(std:vector<unsigned int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat196_std_vector_unsigned_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat196_std_vector_unsigned_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0069_compat196_std_vector_unsigned_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<unsigned int>",
          "h2dts_compat_container_0069_compat196_std_vector_unsigned_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0069_compat196_std_vector_unsigned_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT197_STD_LIST_ITN_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT197_STD_LIST_ITN_LONG_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_itn<long long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0070_compat197_std_list_itn_long_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(std::list_itn<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat197_std_list_itn_long_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat197_std_list_itn_long_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0070_compat197_std_list_itn_long_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_itn<long long>",
          "h2dts_compat_container_0070_compat197_std_list_itn_long_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0070_compat197_std_list_itn_long_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT197_STD_LIST_DOUBL_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT197_STD_LIST_DOUBL_LONG_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_doubl<long long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0071_compat197_std_list_doubl_long_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(std::list_doubl<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat197_std_list_doubl_long_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat197_std_list_doubl_long_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0071_compat197_std_list_doubl_long_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_doubl<long long>",
          "h2dts_compat_container_0071_compat197_std_list_doubl_long_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0071_compat197_std_list_doubl_long_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT197_STD_LIST_BOOOL_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT197_STD_LIST_BOOOL_LONG_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_boool<long long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0072_compat197_std_list_boool_long_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(std::list_boool<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat197_std_list_boool_long_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat197_std_list_boool_long_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0072_compat197_std_list_boool_long_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_boool<long long>",
          "h2dts_compat_container_0072_compat197_std_list_boool_long_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0072_compat197_std_list_boool_long_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT197_STD_LIST_FLOT_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT197_STD_LIST_FLOT_LONG_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_flot<long long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0073_compat197_std_list_flot_long_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(std::list_flot<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat197_std_list_flot_long_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat197_std_list_flot_long_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0073_compat197_std_list_flot_long_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_flot<long long>",
          "h2dts_compat_container_0073_compat197_std_list_flot_long_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0073_compat197_std_list_flot_long_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT197_STD_LIST_LNG_LNG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT197_STD_LIST_LNG_LNG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<lng lng>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0074_compat197_std_list_lng_lng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(std::list<lng lng> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat197_std_list_lng_lng parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat197_std_list_lng_lng must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0074_compat197_std_list_lng_lng must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<lng lng>",
          "h2dts_compat_container_0074_compat197_std_list_lng_lng param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0074_compat197_std_list_lng_lng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT197_STD_LIST_BAD197_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT197_STD_LIST_BAD197_LONG_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_bad197<long long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0075_compat197_std_list_bad197_long_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(std::list_bad197<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat197_std_list_bad197_long_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat197_std_list_bad197_long_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0075_compat197_std_list_bad197_long_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_bad197<long long>",
          "h2dts_compat_container_0075_compat197_std_list_bad197_long_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0075_compat197_std_list_bad197_long_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT197_STD_LIST_X_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT197_STD_LIST_X_LONG_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_x<long long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0076_compat197_std_list_x_long_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(std::list_x<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat197_std_list_x_long_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat197_std_list_x_long_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0076_compat197_std_list_x_long_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_x<long long>",
          "h2dts_compat_container_0076_compat197_std_list_x_long_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0076_compat197_std_list_x_long_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0077_COMPAT197_STD_LIST_LONG_LONG_197
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0077_COMPAT197_STD_LIST_LONG_LONG_197
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<long long_197>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0077_compat197_std_list_long_long_197', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(std::list<long long_197> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0077_compat197_std_list_long_long_197 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0077_compat197_std_list_long_long_197 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0077_compat197_std_list_long_long_197 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<long long_197>",
          "h2dts_compat_container_0077_compat197_std_list_long_long_197 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0077_compat197_std_list_long_long_197 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT197_STD_LIST_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT197_STD_LIST_LONG_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:list<long long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0001_compat197_std_list_long_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(std:list<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat197_std_list_long_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat197_std_list_long_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0001_compat197_std_list_long_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<long long>",
          "h2dts_compat_container_0001_compat197_std_list_long_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0001_compat197_std_list_long_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT199_STD_VECTOR_ITN_CONST_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT199_STD_VECTOR_ITN_CONST_ITERATOR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<itn>::const_iterator; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0002_compat199_std_vector_itn_const_iterator', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(std::vector<itn>::const_iterator p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat199_std_vector_itn_const_iterator parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat199_std_vector_itn_const_iterator must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0002_compat199_std_vector_itn_const_iterator must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<itn>::const_iterator",
          "h2dts_compat_container_0002_compat199_std_vector_itn_const_iterator param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0002_compat199_std_vector_itn_const_iterator execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT199_STD_VECTOR_DOUBL_INT_CONS_7BFD76
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT199_STD_VECTOR_DOUBL_INT_CONS_7BFD76
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<int>::const_iterator; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0003_compat199_std_vector_doubl_int_cons_7bfd76', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(std::vector_doubl<int>::const_iterator p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat199_std_vector_doubl_int_cons_7bfd76 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat199_std_vector_doubl_int_cons_7bfd76 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0003_compat199_std_vector_doubl_int_cons_7bfd76 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<int>::const_iterator",
          "h2dts_compat_container_0003_compat199_std_vector_doubl_int_cons_7bfd76 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0003_compat199_std_vector_doubl_int_cons_7bfd76 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT199_STD_VECTOR_BOOOL_INT_CONS_09AAF0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT199_STD_VECTOR_BOOOL_INT_CONS_09AAF0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<int>::const_iterator; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0004_compat199_std_vector_boool_int_cons_09aaf0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(std::vector_boool<int>::const_iterator p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat199_std_vector_boool_int_cons_09aaf0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat199_std_vector_boool_int_cons_09aaf0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0004_compat199_std_vector_boool_int_cons_09aaf0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<int>::const_iterator",
          "h2dts_compat_container_0004_compat199_std_vector_boool_int_cons_09aaf0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0004_compat199_std_vector_boool_int_cons_09aaf0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT199_STD_VECTOR_FLOT_INT_CONST_73AC2F
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT199_STD_VECTOR_FLOT_INT_CONST_73AC2F
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<int>::const_iterator; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0005_compat199_std_vector_flot_int_const_73ac2f', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(std::vector_flot<int>::const_iterator p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat199_std_vector_flot_int_const_73ac2f parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat199_std_vector_flot_int_const_73ac2f must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0005_compat199_std_vector_flot_int_const_73ac2f must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<int>::const_iterator",
          "h2dts_compat_container_0005_compat199_std_vector_flot_int_const_73ac2f param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0005_compat199_std_vector_flot_int_const_73ac2f execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT199_STD_VECTOR_LNG_INT_CONST_DF6A02
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT199_STD_VECTOR_LNG_INT_CONST_DF6A02
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<int>::const_iterator; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0006_compat199_std_vector_lng_int_const_df6a02', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(std::vector_lng<int>::const_iterator p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat199_std_vector_lng_int_const_df6a02 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat199_std_vector_lng_int_const_df6a02 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0006_compat199_std_vector_lng_int_const_df6a02 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<int>::const_iterator",
          "h2dts_compat_container_0006_compat199_std_vector_lng_int_const_df6a02 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0006_compat199_std_vector_lng_int_const_df6a02 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT199_STD_VECTOR_BAD199_INT_CON_241D75
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT199_STD_VECTOR_BAD199_INT_CON_241D75
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad199<int>::const_iterator; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0007_compat199_std_vector_bad199_int_con_241d75', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(std::vector_bad199<int>::const_iterator p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat199_std_vector_bad199_int_con_241d75 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat199_std_vector_bad199_int_con_241d75 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0007_compat199_std_vector_bad199_int_con_241d75 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad199<int>::const_iterator",
          "h2dts_compat_container_0007_compat199_std_vector_bad199_int_con_241d75 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0007_compat199_std_vector_bad199_int_con_241d75 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT199_STD_VECTOR_X_INT_CONST_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT199_STD_VECTOR_X_INT_CONST_ITERATOR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<int>::const_iterator; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0008_compat199_std_vector_x_int_const_iterator', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(std::vector_x<int>::const_iterator p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat199_std_vector_x_int_const_iterator parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat199_std_vector_x_int_const_iterator must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0008_compat199_std_vector_x_int_const_iterator must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<int>::const_iterator",
          "h2dts_compat_container_0008_compat199_std_vector_x_int_const_iterator param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0008_compat199_std_vector_x_int_const_iterator execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT199_STD_VECTOR_INT_199_CONST_5F8A5A
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT199_STD_VECTOR_INT_199_CONST_5F8A5A
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<int_199>::const_iterator; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0009_compat199_std_vector_int_199_const_5f8a5a', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(std::vector<int_199>::const_iterator p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat199_std_vector_int_199_const_5f8a5a parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat199_std_vector_int_199_const_5f8a5a must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0009_compat199_std_vector_int_199_const_5f8a5a must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<int_199>::const_iterator",
          "h2dts_compat_container_0009_compat199_std_vector_int_199_const_5f8a5a param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0009_compat199_std_vector_int_199_const_5f8a5a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT199_STD_VECTOR_INT_CONST_ITERATOR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT199_STD_VECTOR_INT_CONST_ITERATOR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<int>:const_iterator; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0010_compat199_std_vector_int_const_iterator', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(std:vector<int>:const_iterator p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat199_std_vector_int_const_iterator parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat199_std_vector_int_const_iterator must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0010_compat199_std_vector_int_const_iterator must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<int>:const_iterator",
          "h2dts_compat_container_0010_compat199_std_vector_int_const_iterator param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0010_compat199_std_vector_int_const_iterator execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT214_STD_DEQUE_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT214_STD_DEQUE_ITN
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0011_compat214_std_deque_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat214(std::deque_itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat214_std_deque_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat214_std_deque_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0011_compat214_std_deque_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_itn",
          "h2dts_compat_container_0011_compat214_std_deque_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0011_compat214_std_deque_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT214_STD_DEQUE_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT214_STD_DEQUE_DOUBL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0012_compat214_std_deque_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat214(std::deque_doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat214_std_deque_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat214_std_deque_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0012_compat214_std_deque_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_doubl",
          "h2dts_compat_container_0012_compat214_std_deque_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0012_compat214_std_deque_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT214_STD_DEQUE_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT214_STD_DEQUE_BOOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0013_compat214_std_deque_boool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat214(std::deque_boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat214_std_deque_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat214_std_deque_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0013_compat214_std_deque_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_boool",
          "h2dts_compat_container_0013_compat214_std_deque_boool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0013_compat214_std_deque_boool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT214_STD_DEQUE_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT214_STD_DEQUE_FLOT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0014_compat214_std_deque_flot', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat214(std::deque_flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat214_std_deque_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat214_std_deque_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0014_compat214_std_deque_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_flot",
          "h2dts_compat_container_0014_compat214_std_deque_flot param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0014_compat214_std_deque_flot execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT214_STD_DEQUE_LNG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT214_STD_DEQUE_LNG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_lng; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0015_compat214_std_deque_lng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat214(std::deque_lng p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat214_std_deque_lng parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat214_std_deque_lng must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0015_compat214_std_deque_lng must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_lng",
          "h2dts_compat_container_0015_compat214_std_deque_lng param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0015_compat214_std_deque_lng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT214_STD_DEQUE_BAD214
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT214_STD_DEQUE_BAD214
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_bad214; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0016_compat214_std_deque_bad214', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat214(std::deque_bad214 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat214_std_deque_bad214 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat214_std_deque_bad214 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0016_compat214_std_deque_bad214 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_bad214",
          "h2dts_compat_container_0016_compat214_std_deque_bad214 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0016_compat214_std_deque_bad214 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT214_STD_DEQUXE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT214_STD_DEQUXE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::dequxe; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0017_compat214_std_dequxe', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat214(std::dequxe p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat214_std_dequxe parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat214_std_dequxe must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0017_compat214_std_dequxe must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::dequxe",
          "h2dts_compat_container_0017_compat214_std_dequxe param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0017_compat214_std_dequxe execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT214_STD_DEQU
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT214_STD_DEQU
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::dequ; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0018_compat214_std_dequ', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat214(std::dequ p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat214_std_dequ parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat214_std_dequ must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0018_compat214_std_dequ must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::dequ",
          "h2dts_compat_container_0018_compat214_std_dequ param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0018_compat214_std_dequ execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT214_STD_DEQUE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT214_STD_DEQUE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0019_compat214_std_deque', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat214(std:deque p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat214_std_deque parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat214_std_deque must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0019_compat214_std_deque must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque",
          "h2dts_compat_container_0019_compat214_std_deque param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0019_compat214_std_deque execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT216_STD_VECTOR_ITN_V
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT216_STD_VECTOR_ITN_V
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<itn>* v; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0020_compat216_std_vector_itn_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat216(std::vector<itn>* v p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat216_std_vector_itn_v parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat216_std_vector_itn_v must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0020_compat216_std_vector_itn_v must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<itn>* v",
          "h2dts_compat_container_0020_compat216_std_vector_itn_v param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0020_compat216_std_vector_itn_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT216_STD_VECTOR_DOUBL_INT_V
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT216_STD_VECTOR_DOUBL_INT_V
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<int>* v; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0021_compat216_std_vector_doubl_int_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat216(std::vector_doubl<int>* v p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat216_std_vector_doubl_int_v parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat216_std_vector_doubl_int_v must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0021_compat216_std_vector_doubl_int_v must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<int>* v",
          "h2dts_compat_container_0021_compat216_std_vector_doubl_int_v param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0021_compat216_std_vector_doubl_int_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT216_STD_VECTOR_BOOOL_INT_V
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT216_STD_VECTOR_BOOOL_INT_V
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<int>* v; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0022_compat216_std_vector_boool_int_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat216(std::vector_boool<int>* v p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat216_std_vector_boool_int_v parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat216_std_vector_boool_int_v must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0022_compat216_std_vector_boool_int_v must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<int>* v",
          "h2dts_compat_container_0022_compat216_std_vector_boool_int_v param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0022_compat216_std_vector_boool_int_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT216_STD_VECTOR_FLOT_INT_V
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT216_STD_VECTOR_FLOT_INT_V
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<int>* v; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0023_compat216_std_vector_flot_int_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat216(std::vector_flot<int>* v p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat216_std_vector_flot_int_v parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat216_std_vector_flot_int_v must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0023_compat216_std_vector_flot_int_v must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<int>* v",
          "h2dts_compat_container_0023_compat216_std_vector_flot_int_v param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0023_compat216_std_vector_flot_int_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT216_STD_VECTOR_LNG_INT_V
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT216_STD_VECTOR_LNG_INT_V
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<int>* v; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0024_compat216_std_vector_lng_int_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat216(std::vector_lng<int>* v p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat216_std_vector_lng_int_v parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat216_std_vector_lng_int_v must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0024_compat216_std_vector_lng_int_v must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<int>* v",
          "h2dts_compat_container_0024_compat216_std_vector_lng_int_v param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0024_compat216_std_vector_lng_int_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT216_STD_VECTOR_BAD216_INT_V
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT216_STD_VECTOR_BAD216_INT_V
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad216<int>* v; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0025_compat216_std_vector_bad216_int_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat216(std::vector_bad216<int>* v p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat216_std_vector_bad216_int_v parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat216_std_vector_bad216_int_v must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0025_compat216_std_vector_bad216_int_v must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad216<int>* v",
          "h2dts_compat_container_0025_compat216_std_vector_bad216_int_v param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0025_compat216_std_vector_bad216_int_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT216_STD_VECTOR_X_INT_V
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT216_STD_VECTOR_X_INT_V
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<int>* v; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0026_compat216_std_vector_x_int_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat216(std::vector_x<int>* v p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat216_std_vector_x_int_v parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat216_std_vector_x_int_v must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0026_compat216_std_vector_x_int_v must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<int>* v",
          "h2dts_compat_container_0026_compat216_std_vector_x_int_v param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0026_compat216_std_vector_x_int_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT216_STD_VECTOR_INT_216_V
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT216_STD_VECTOR_INT_216_V
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<int_216>* v; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0027_compat216_std_vector_int_216_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat216(std::vector<int_216>* v p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat216_std_vector_int_216_v parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat216_std_vector_int_216_v must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0027_compat216_std_vector_int_216_v must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<int_216>* v",
          "h2dts_compat_container_0027_compat216_std_vector_int_216_v param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0027_compat216_std_vector_int_216_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT216_STD_VECTOR_INT_V
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT216_STD_VECTOR_INT_V
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<int>* v; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0028_compat216_std_vector_int_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat216(std:vector<int>* v p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat216_std_vector_int_v parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat216_std_vector_int_v must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0028_compat216_std_vector_int_v must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<int>* v",
          "h2dts_compat_container_0028_compat216_std_vector_int_v param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0028_compat216_std_vector_int_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT219_STD_VECTOR_ITN_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT219_STD_VECTOR_ITN_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<itn> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0029_compat219_std_vector_itn_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat219(std::vector<itn> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat219_std_vector_itn_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat219_std_vector_itn_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0029_compat219_std_vector_itn_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<itn> m1",
          "h2dts_compat_container_0029_compat219_std_vector_itn_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0029_compat219_std_vector_itn_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT219_STD_VECTOR_DOUBL_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT219_STD_VECTOR_DOUBL_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0030_compat219_std_vector_doubl_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat219(std::vector_doubl<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat219_std_vector_doubl_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat219_std_vector_doubl_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0030_compat219_std_vector_doubl_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<int> m1",
          "h2dts_compat_container_0030_compat219_std_vector_doubl_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0030_compat219_std_vector_doubl_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT219_STD_VECTOR_BOOOL_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT219_STD_VECTOR_BOOOL_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0031_compat219_std_vector_boool_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat219(std::vector_boool<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat219_std_vector_boool_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat219_std_vector_boool_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0031_compat219_std_vector_boool_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<int> m1",
          "h2dts_compat_container_0031_compat219_std_vector_boool_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0031_compat219_std_vector_boool_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT219_STD_VECTOR_FLOT_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT219_STD_VECTOR_FLOT_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0032_compat219_std_vector_flot_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat219(std::vector_flot<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat219_std_vector_flot_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat219_std_vector_flot_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0032_compat219_std_vector_flot_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<int> m1",
          "h2dts_compat_container_0032_compat219_std_vector_flot_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0032_compat219_std_vector_flot_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT219_STD_VECTOR_LNG_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT219_STD_VECTOR_LNG_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0033_compat219_std_vector_lng_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat219(std::vector_lng<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat219_std_vector_lng_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat219_std_vector_lng_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0033_compat219_std_vector_lng_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<int> m1",
          "h2dts_compat_container_0033_compat219_std_vector_lng_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0033_compat219_std_vector_lng_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT219_STD_VECTOR_BAD219_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT219_STD_VECTOR_BAD219_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad219<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0034_compat219_std_vector_bad219_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat219(std::vector_bad219<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat219_std_vector_bad219_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat219_std_vector_bad219_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0034_compat219_std_vector_bad219_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad219<int> m1",
          "h2dts_compat_container_0034_compat219_std_vector_bad219_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0034_compat219_std_vector_bad219_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT219_STD_VECTOR_X_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT219_STD_VECTOR_X_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0035_compat219_std_vector_x_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat219(std::vector_x<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat219_std_vector_x_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat219_std_vector_x_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0035_compat219_std_vector_x_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<int> m1",
          "h2dts_compat_container_0035_compat219_std_vector_x_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0035_compat219_std_vector_x_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT219_STD_VECTOR_INT_219_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT219_STD_VECTOR_INT_219_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<int_219> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0036_compat219_std_vector_int_219_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat219(std::vector<int_219> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat219_std_vector_int_219_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat219_std_vector_int_219_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0036_compat219_std_vector_int_219_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<int_219> m1",
          "h2dts_compat_container_0036_compat219_std_vector_int_219_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0036_compat219_std_vector_int_219_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT219_STD_VECTOR_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT219_STD_VECTOR_INT_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0037_compat219_std_vector_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat219(std:vector<int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat219_std_vector_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat219_std_vector_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0037_compat219_std_vector_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<int> m1",
          "h2dts_compat_container_0037_compat219_std_vector_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0037_compat219_std_vector_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT220_STD_VECTOR_ITN_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT220_STD_VECTOR_ITN_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0038_compat220_std_vector_itn_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat220(std::vector_itn<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat220_std_vector_itn_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat220_std_vector_itn_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0038_compat220_std_vector_itn_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<std::string> m2",
          "h2dts_compat_container_0038_compat220_std_vector_itn_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0038_compat220_std_vector_itn_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT220_STD_VECTOR_DOUBL_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT220_STD_VECTOR_DOUBL_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0039_compat220_std_vector_doubl_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat220(std::vector_doubl<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat220_std_vector_doubl_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat220_std_vector_doubl_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0039_compat220_std_vector_doubl_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<std::string> m2",
          "h2dts_compat_container_0039_compat220_std_vector_doubl_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0039_compat220_std_vector_doubl_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT220_STD_VECTOR_BOOOL_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT220_STD_VECTOR_BOOOL_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0040_compat220_std_vector_boool_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat220(std::vector_boool<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat220_std_vector_boool_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat220_std_vector_boool_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0040_compat220_std_vector_boool_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<std::string> m2",
          "h2dts_compat_container_0040_compat220_std_vector_boool_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0040_compat220_std_vector_boool_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT220_STD_VECTOR_FLOT_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT220_STD_VECTOR_FLOT_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0041_compat220_std_vector_flot_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat220(std::vector_flot<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat220_std_vector_flot_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat220_std_vector_flot_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0041_compat220_std_vector_flot_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<std::string> m2",
          "h2dts_compat_container_0041_compat220_std_vector_flot_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0041_compat220_std_vector_flot_std_string_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT220_STD_VECTOR_LNG_STD_STRING_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT220_STD_VECTOR_LNG_STD_STRING_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<std::string> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0042_compat220_std_vector_lng_std_string_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat220(std::vector_lng<std::string> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat220_std_vector_lng_std_string_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat220_std_vector_lng_std_string_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0042_compat220_std_vector_lng_std_string_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<std::string> m2",
          "h2dts_compat_container_0042_compat220_std_vector_lng_std_string_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0042_compat220_std_vector_lng_std_string_m2 execution error: ${err}`);
    }
  });
});
