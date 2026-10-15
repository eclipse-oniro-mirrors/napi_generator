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

suite('Stability_H2DTS_COMPAT_TUPLE_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_TUPLE._Part01');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0001_COMPAT63_STD_PAIR_ITN_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0001_COMPAT63_STD_PAIR_ITN_ITN
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<itn,itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0001_compat63_std_pair_itn_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat63(std::pair<itn,itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0001_compat63_std_pair_itn_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0001_compat63_std_pair_itn_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0001_compat63_std_pair_itn_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<itn,itn>",
          "h2dts_compat_tuple_0001_compat63_std_pair_itn_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0001_compat63_std_pair_itn_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0002_COMPAT63_STD_PAIR_DOUBL_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0002_COMPAT63_STD_PAIR_DOUBL_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_doubl<int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0002_compat63_std_pair_doubl_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat63(std::pair_doubl<int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0002_compat63_std_pair_doubl_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0002_compat63_std_pair_doubl_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0002_compat63_std_pair_doubl_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_doubl<int,int>",
          "h2dts_compat_tuple_0002_compat63_std_pair_doubl_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0002_compat63_std_pair_doubl_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0003_COMPAT63_STD_PAIR_BOOOL_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0003_COMPAT63_STD_PAIR_BOOOL_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_boool<int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0003_compat63_std_pair_boool_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat63(std::pair_boool<int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0003_compat63_std_pair_boool_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0003_compat63_std_pair_boool_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0003_compat63_std_pair_boool_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_boool<int,int>",
          "h2dts_compat_tuple_0003_compat63_std_pair_boool_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0003_compat63_std_pair_boool_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0004_COMPAT63_STD_PAIR_FLOT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0004_COMPAT63_STD_PAIR_FLOT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_flot<int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0004_compat63_std_pair_flot_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat63(std::pair_flot<int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0004_compat63_std_pair_flot_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0004_compat63_std_pair_flot_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0004_compat63_std_pair_flot_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_flot<int,int>",
          "h2dts_compat_tuple_0004_compat63_std_pair_flot_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0004_compat63_std_pair_flot_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0005_COMPAT63_STD_PAIR_LNG_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0005_COMPAT63_STD_PAIR_LNG_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_lng<int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0005_compat63_std_pair_lng_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat63(std::pair_lng<int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0005_compat63_std_pair_lng_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0005_compat63_std_pair_lng_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0005_compat63_std_pair_lng_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_lng<int,int>",
          "h2dts_compat_tuple_0005_compat63_std_pair_lng_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0005_compat63_std_pair_lng_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0006_COMPAT63_STD_PAIR_BAD63_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0006_COMPAT63_STD_PAIR_BAD63_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_bad63<int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0006_compat63_std_pair_bad63_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat63(std::pair_bad63<int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0006_compat63_std_pair_bad63_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0006_compat63_std_pair_bad63_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0006_compat63_std_pair_bad63_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_bad63<int,int>",
          "h2dts_compat_tuple_0006_compat63_std_pair_bad63_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0006_compat63_std_pair_bad63_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0007_COMPAT63_STD_PAIR_X_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0007_COMPAT63_STD_PAIR_X_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_x<int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0007_compat63_std_pair_x_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat63(std::pair_x<int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0007_compat63_std_pair_x_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0007_compat63_std_pair_x_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0007_compat63_std_pair_x_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_x<int,int>",
          "h2dts_compat_tuple_0007_compat63_std_pair_x_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0007_compat63_std_pair_x_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0008_COMPAT63_STD_PAIR_INT_INT_63
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0008_COMPAT63_STD_PAIR_INT_INT_63
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<int,int_63>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0008_compat63_std_pair_int_int_63', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat63(std::pair<int,int_63> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0008_compat63_std_pair_int_int_63 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0008_compat63_std_pair_int_int_63 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0008_compat63_std_pair_int_int_63 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<int,int_63>",
          "h2dts_compat_tuple_0008_compat63_std_pair_int_int_63 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0008_compat63_std_pair_int_int_63 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0009_COMPAT63_STD_PAIR_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0009_COMPAT63_STD_PAIR_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:pair<int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0009_compat63_std_pair_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat63(std:pair<int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0009_compat63_std_pair_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0009_compat63_std_pair_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0009_compat63_std_pair_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:pair<int,int>",
          "h2dts_compat_tuple_0009_compat63_std_pair_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0009_compat63_std_pair_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0010_COMPAT64_STD_PAIR_STD_STRING_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0010_COMPAT64_STD_PAIR_STD_STRING_ITN
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<std::string,itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0010_compat64_std_pair_std_string_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat64(std::pair<std::string,itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0010_compat64_std_pair_std_string_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0010_compat64_std_pair_std_string_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0010_compat64_std_pair_std_string_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<std::string,itn>",
          "h2dts_compat_tuple_0010_compat64_std_pair_std_string_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0010_compat64_std_pair_std_string_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0011_COMPAT64_STD_PAIR_DOUBL_STD_STRING_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0011_COMPAT64_STD_PAIR_DOUBL_STD_STRING_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_doubl<std::string,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0011_compat64_std_pair_doubl_std_string_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat64(std::pair_doubl<std::string,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0011_compat64_std_pair_doubl_std_string_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0011_compat64_std_pair_doubl_std_string_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0011_compat64_std_pair_doubl_std_string_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_doubl<std::string,int>",
          "h2dts_compat_tuple_0011_compat64_std_pair_doubl_std_string_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0011_compat64_std_pair_doubl_std_string_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0012_COMPAT64_STD_PAIR_BOOOL_STD_STRING_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0012_COMPAT64_STD_PAIR_BOOOL_STD_STRING_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_boool<std::string,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0012_compat64_std_pair_boool_std_string_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat64(std::pair_boool<std::string,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0012_compat64_std_pair_boool_std_string_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0012_compat64_std_pair_boool_std_string_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0012_compat64_std_pair_boool_std_string_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_boool<std::string,int>",
          "h2dts_compat_tuple_0012_compat64_std_pair_boool_std_string_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0012_compat64_std_pair_boool_std_string_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0013_COMPAT64_STD_PAIR_FLOT_STD_STRING_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0013_COMPAT64_STD_PAIR_FLOT_STD_STRING_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_flot<std::string,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0013_compat64_std_pair_flot_std_string_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat64(std::pair_flot<std::string,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0013_compat64_std_pair_flot_std_string_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0013_compat64_std_pair_flot_std_string_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0013_compat64_std_pair_flot_std_string_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_flot<std::string,int>",
          "h2dts_compat_tuple_0013_compat64_std_pair_flot_std_string_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0013_compat64_std_pair_flot_std_string_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0014_COMPAT64_STD_PAIR_LNG_STD_STRING_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0014_COMPAT64_STD_PAIR_LNG_STD_STRING_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_lng<std::string,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0014_compat64_std_pair_lng_std_string_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat64(std::pair_lng<std::string,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0014_compat64_std_pair_lng_std_string_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0014_compat64_std_pair_lng_std_string_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0014_compat64_std_pair_lng_std_string_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_lng<std::string,int>",
          "h2dts_compat_tuple_0014_compat64_std_pair_lng_std_string_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0014_compat64_std_pair_lng_std_string_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0015_COMPAT64_STD_PAIR_BAD64_STD_STRING_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0015_COMPAT64_STD_PAIR_BAD64_STD_STRING_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_bad64<std::string,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0015_compat64_std_pair_bad64_std_string_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat64(std::pair_bad64<std::string,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0015_compat64_std_pair_bad64_std_string_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0015_compat64_std_pair_bad64_std_string_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0015_compat64_std_pair_bad64_std_string_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_bad64<std::string,int>",
          "h2dts_compat_tuple_0015_compat64_std_pair_bad64_std_string_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0015_compat64_std_pair_bad64_std_string_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0016_COMPAT64_STD_PAIR_X_STD_STRING_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0016_COMPAT64_STD_PAIR_X_STD_STRING_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_x<std::string,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0016_compat64_std_pair_x_std_string_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat64(std::pair_x<std::string,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0016_compat64_std_pair_x_std_string_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0016_compat64_std_pair_x_std_string_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0016_compat64_std_pair_x_std_string_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_x<std::string,int>",
          "h2dts_compat_tuple_0016_compat64_std_pair_x_std_string_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0016_compat64_std_pair_x_std_string_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0017_COMPAT64_STD_PAIR_STD_STRING_INT_64
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0017_COMPAT64_STD_PAIR_STD_STRING_INT_64
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<std::string,int_64>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0017_compat64_std_pair_std_string_int_64', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat64(std::pair<std::string,int_64> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0017_compat64_std_pair_std_string_int_64 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0017_compat64_std_pair_std_string_int_64 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0017_compat64_std_pair_std_string_int_64 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<std::string,int_64>",
          "h2dts_compat_tuple_0017_compat64_std_pair_std_string_int_64 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0017_compat64_std_pair_std_string_int_64 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0018_COMPAT64_STD_PAIR_STD_STRING_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0018_COMPAT64_STD_PAIR_STD_STRING_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:pair<std:string,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0018_compat64_std_pair_std_string_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat64(std:pair<std:string,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0018_compat64_std_pair_std_string_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0018_compat64_std_pair_std_string_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0018_compat64_std_pair_std_string_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:pair<std:string,int>",
          "h2dts_compat_tuple_0018_compat64_std_pair_std_string_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0018_compat64_std_pair_std_string_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0019_COMPAT65_STD_TUPLE_ITN_ITN_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0019_COMPAT65_STD_TUPLE_ITN_ITN_ITN
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<itn,itn,itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0019_compat65_std_tuple_itn_itn_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat65(std::tuple<itn,itn,itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0019_compat65_std_tuple_itn_itn_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0019_compat65_std_tuple_itn_itn_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0019_compat65_std_tuple_itn_itn_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<itn,itn,itn>",
          "h2dts_compat_tuple_0019_compat65_std_tuple_itn_itn_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0019_compat65_std_tuple_itn_itn_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0020_COMPAT65_STD_TUPLE_DOUBL_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0020_COMPAT65_STD_TUPLE_DOUBL_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_doubl<int,int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0020_compat65_std_tuple_doubl_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat65(std::tuple_doubl<int,int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0020_compat65_std_tuple_doubl_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0020_compat65_std_tuple_doubl_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0020_compat65_std_tuple_doubl_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_doubl<int,int,int>",
          "h2dts_compat_tuple_0020_compat65_std_tuple_doubl_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0020_compat65_std_tuple_doubl_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0021_COMPAT65_STD_TUPLE_BOOOL_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0021_COMPAT65_STD_TUPLE_BOOOL_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_boool<int,int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0021_compat65_std_tuple_boool_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat65(std::tuple_boool<int,int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0021_compat65_std_tuple_boool_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0021_compat65_std_tuple_boool_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0021_compat65_std_tuple_boool_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_boool<int,int,int>",
          "h2dts_compat_tuple_0021_compat65_std_tuple_boool_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0021_compat65_std_tuple_boool_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0022_COMPAT65_STD_TUPLE_FLOT_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0022_COMPAT65_STD_TUPLE_FLOT_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_flot<int,int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0022_compat65_std_tuple_flot_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat65(std::tuple_flot<int,int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0022_compat65_std_tuple_flot_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0022_compat65_std_tuple_flot_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0022_compat65_std_tuple_flot_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_flot<int,int,int>",
          "h2dts_compat_tuple_0022_compat65_std_tuple_flot_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0022_compat65_std_tuple_flot_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0023_COMPAT65_STD_TUPLE_LNG_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0023_COMPAT65_STD_TUPLE_LNG_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<int,int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0023_compat65_std_tuple_lng_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat65(std::tuple_lng<int,int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0023_compat65_std_tuple_lng_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0023_compat65_std_tuple_lng_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0023_compat65_std_tuple_lng_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<int,int,int>",
          "h2dts_compat_tuple_0023_compat65_std_tuple_lng_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0023_compat65_std_tuple_lng_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0024_COMPAT65_STD_TUPLE_BAD65_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0024_COMPAT65_STD_TUPLE_BAD65_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad65<int,int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0024_compat65_std_tuple_bad65_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat65(std::tuple_bad65<int,int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0024_compat65_std_tuple_bad65_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0024_compat65_std_tuple_bad65_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0024_compat65_std_tuple_bad65_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad65<int,int,int>",
          "h2dts_compat_tuple_0024_compat65_std_tuple_bad65_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0024_compat65_std_tuple_bad65_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0025_COMPAT65_STD_TUPLE_X_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0025_COMPAT65_STD_TUPLE_X_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<int,int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0025_compat65_std_tuple_x_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat65(std::tuple_x<int,int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0025_compat65_std_tuple_x_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0025_compat65_std_tuple_x_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0025_compat65_std_tuple_x_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<int,int,int>",
          "h2dts_compat_tuple_0025_compat65_std_tuple_x_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0025_compat65_std_tuple_x_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0026_COMPAT65_STD_TUPLE_INT_INT_INT_65
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0026_COMPAT65_STD_TUPLE_INT_INT_INT_65
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<int,int,int_65>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0026_compat65_std_tuple_int_int_int_65', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat65(std::tuple<int,int,int_65> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0026_compat65_std_tuple_int_int_int_65 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0026_compat65_std_tuple_int_int_int_65 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0026_compat65_std_tuple_int_int_int_65 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<int,int,int_65>",
          "h2dts_compat_tuple_0026_compat65_std_tuple_int_int_int_65 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0026_compat65_std_tuple_int_int_int_65 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0027_COMPAT65_STD_TUPLE_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0027_COMPAT65_STD_TUPLE_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<int,int,int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0027_compat65_std_tuple_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat65(std:tuple<int,int,int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0027_compat65_std_tuple_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0027_compat65_std_tuple_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0027_compat65_std_tuple_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<int,int,int>",
          "h2dts_compat_tuple_0027_compat65_std_tuple_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0027_compat65_std_tuple_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0028_COMPAT66_STD_TUPLE_STD_STRING_ITN_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0028_COMPAT66_STD_TUPLE_STD_STRING_ITN_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<std::string,itn,double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0028_compat66_std_tuple_std_string_itn_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat66(std::tuple<std::string,itn,double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0028_compat66_std_tuple_std_string_itn_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0028_compat66_std_tuple_std_string_itn_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0028_compat66_std_tuple_std_string_itn_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<std::string,itn,double>",
          "h2dts_compat_tuple_0028_compat66_std_tuple_std_string_itn_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0028_compat66_std_tuple_std_string_itn_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0029_COMPAT66_STD_TUPLE_STD_STRING_INT_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0029_COMPAT66_STD_TUPLE_STD_STRING_INT_DOUBL
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<std::string,int,doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0029_compat66_std_tuple_std_string_int_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat66(std::tuple<std::string,int,doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0029_compat66_std_tuple_std_string_int_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0029_compat66_std_tuple_std_string_int_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0029_compat66_std_tuple_std_string_int_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<std::string,int,doubl>",
          "h2dts_compat_tuple_0029_compat66_std_tuple_std_string_int_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0029_compat66_std_tuple_std_string_int_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0030_COMPAT66_STD_TUPLE_BOOOL_STD_STRIN_24FE92
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0030_COMPAT66_STD_TUPLE_BOOOL_STD_STRIN_24FE92
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_boool<std::string,int,double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0030_compat66_std_tuple_boool_std_strin_24fe92', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat66(std::tuple_boool<std::string,int,double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0030_compat66_std_tuple_boool_std_strin_24fe92 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0030_compat66_std_tuple_boool_std_strin_24fe92 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0030_compat66_std_tuple_boool_std_strin_24fe92 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_boool<std::string,int,double>",
          "h2dts_compat_tuple_0030_compat66_std_tuple_boool_std_strin_24fe92 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0030_compat66_std_tuple_boool_std_strin_24fe92 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0031_COMPAT66_STD_TUPLE_FLOT_STD_STRING_864E40
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0031_COMPAT66_STD_TUPLE_FLOT_STD_STRING_864E40
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_flot<std::string,int,double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0031_compat66_std_tuple_flot_std_string_864e40', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat66(std::tuple_flot<std::string,int,double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0031_compat66_std_tuple_flot_std_string_864e40 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0031_compat66_std_tuple_flot_std_string_864e40 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0031_compat66_std_tuple_flot_std_string_864e40 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_flot<std::string,int,double>",
          "h2dts_compat_tuple_0031_compat66_std_tuple_flot_std_string_864e40 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0031_compat66_std_tuple_flot_std_string_864e40 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0032_COMPAT66_STD_TUPLE_LNG_STD_STRING_F686F0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0032_COMPAT66_STD_TUPLE_LNG_STD_STRING_F686F0
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<std::string,int,double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0032_compat66_std_tuple_lng_std_string_f686f0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat66(std::tuple_lng<std::string,int,double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0032_compat66_std_tuple_lng_std_string_f686f0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0032_compat66_std_tuple_lng_std_string_f686f0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0032_compat66_std_tuple_lng_std_string_f686f0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<std::string,int,double>",
          "h2dts_compat_tuple_0032_compat66_std_tuple_lng_std_string_f686f0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0032_compat66_std_tuple_lng_std_string_f686f0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0033_COMPAT66_STD_TUPLE_BAD66_STD_STRIN_BFE9D5
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0033_COMPAT66_STD_TUPLE_BAD66_STD_STRIN_BFE9D5
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad66<std::string,int,double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0033_compat66_std_tuple_bad66_std_strin_bfe9d5', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat66(std::tuple_bad66<std::string,int,double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0033_compat66_std_tuple_bad66_std_strin_bfe9d5 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0033_compat66_std_tuple_bad66_std_strin_bfe9d5 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0033_compat66_std_tuple_bad66_std_strin_bfe9d5 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad66<std::string,int,double>",
          "h2dts_compat_tuple_0033_compat66_std_tuple_bad66_std_strin_bfe9d5 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0033_compat66_std_tuple_bad66_std_strin_bfe9d5 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0034_COMPAT66_STD_TUPLE_X_STD_STRING_IN_09818E
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0034_COMPAT66_STD_TUPLE_X_STD_STRING_IN_09818E
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<std::string,int,double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0034_compat66_std_tuple_x_std_string_in_09818e', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat66(std::tuple_x<std::string,int,double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0034_compat66_std_tuple_x_std_string_in_09818e parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0034_compat66_std_tuple_x_std_string_in_09818e must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0034_compat66_std_tuple_x_std_string_in_09818e must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<std::string,int,double>",
          "h2dts_compat_tuple_0034_compat66_std_tuple_x_std_string_in_09818e param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0034_compat66_std_tuple_x_std_string_in_09818e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0035_COMPAT66_STD_TUPLE_STD_STRING_INT_1239A8
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0035_COMPAT66_STD_TUPLE_STD_STRING_INT_1239A8
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<std::string,int,double_66>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0035_compat66_std_tuple_std_string_int_1239a8', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat66(std::tuple<std::string,int,double_66> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0035_compat66_std_tuple_std_string_int_1239a8 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0035_compat66_std_tuple_std_string_int_1239a8 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0035_compat66_std_tuple_std_string_int_1239a8 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<std::string,int,double_66>",
          "h2dts_compat_tuple_0035_compat66_std_tuple_std_string_int_1239a8 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0035_compat66_std_tuple_std_string_int_1239a8 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0036_COMPAT66_STD_TUPLE_STD_STRING_INT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0036_COMPAT66_STD_TUPLE_STD_STRING_INT_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<std:string,int,double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0036_compat66_std_tuple_std_string_int_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat66(std:tuple<std:string,int,double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0036_compat66_std_tuple_std_string_int_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0036_compat66_std_tuple_std_string_int_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0036_compat66_std_tuple_std_string_int_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<std:string,int,double>",
          "h2dts_compat_tuple_0036_compat66_std_tuple_std_string_int_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0036_compat66_std_tuple_std_string_int_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0037_COMPAT126_STD_PAIR_ITN_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0037_COMPAT126_STD_PAIR_ITN_DOUBLE_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_itn<double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0037_compat126_std_pair_itn_double_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat126(std::pair_itn<double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0037_compat126_std_pair_itn_double_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0037_compat126_std_pair_itn_double_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0037_compat126_std_pair_itn_double_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_itn<double, double>",
          "h2dts_compat_tuple_0037_compat126_std_pair_itn_double_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0037_compat126_std_pair_itn_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0038_COMPAT126_STD_PAIR_DOUBL_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0038_COMPAT126_STD_PAIR_DOUBL_DOUBL
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<doubl, doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0038_compat126_std_pair_doubl_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat126(std::pair<doubl, doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0038_compat126_std_pair_doubl_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0038_compat126_std_pair_doubl_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0038_compat126_std_pair_doubl_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<doubl, doubl>",
          "h2dts_compat_tuple_0038_compat126_std_pair_doubl_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0038_compat126_std_pair_doubl_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0039_COMPAT126_STD_PAIR_BOOOL_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0039_COMPAT126_STD_PAIR_BOOOL_DOUBLE_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_boool<double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0039_compat126_std_pair_boool_double_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat126(std::pair_boool<double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0039_compat126_std_pair_boool_double_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0039_compat126_std_pair_boool_double_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0039_compat126_std_pair_boool_double_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_boool<double, double>",
          "h2dts_compat_tuple_0039_compat126_std_pair_boool_double_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0039_compat126_std_pair_boool_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0040_COMPAT126_STD_PAIR_FLOT_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0040_COMPAT126_STD_PAIR_FLOT_DOUBLE_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_flot<double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0040_compat126_std_pair_flot_double_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat126(std::pair_flot<double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0040_compat126_std_pair_flot_double_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0040_compat126_std_pair_flot_double_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0040_compat126_std_pair_flot_double_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_flot<double, double>",
          "h2dts_compat_tuple_0040_compat126_std_pair_flot_double_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0040_compat126_std_pair_flot_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0041_COMPAT126_STD_PAIR_LNG_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0041_COMPAT126_STD_PAIR_LNG_DOUBLE_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_lng<double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0041_compat126_std_pair_lng_double_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat126(std::pair_lng<double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0041_compat126_std_pair_lng_double_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0041_compat126_std_pair_lng_double_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0041_compat126_std_pair_lng_double_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_lng<double, double>",
          "h2dts_compat_tuple_0041_compat126_std_pair_lng_double_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0041_compat126_std_pair_lng_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0042_COMPAT126_STD_PAIR_BAD126_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0042_COMPAT126_STD_PAIR_BAD126_DOUBLE_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_bad126<double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0042_compat126_std_pair_bad126_double_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat126(std::pair_bad126<double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0042_compat126_std_pair_bad126_double_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0042_compat126_std_pair_bad126_double_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0042_compat126_std_pair_bad126_double_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_bad126<double, double>",
          "h2dts_compat_tuple_0042_compat126_std_pair_bad126_double_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0042_compat126_std_pair_bad126_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0043_COMPAT126_STD_PAIR_X_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0043_COMPAT126_STD_PAIR_X_DOUBLE_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_x<double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0043_compat126_std_pair_x_double_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat126(std::pair_x<double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0043_compat126_std_pair_x_double_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0043_compat126_std_pair_x_double_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0043_compat126_std_pair_x_double_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_x<double, double>",
          "h2dts_compat_tuple_0043_compat126_std_pair_x_double_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0043_compat126_std_pair_x_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0044_COMPAT126_STD_PAIR_DOUBLE_DOUBLE_126
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0044_COMPAT126_STD_PAIR_DOUBLE_DOUBLE_126
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<double, double_126>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0044_compat126_std_pair_double_double_126', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat126(std::pair<double, double_126> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0044_compat126_std_pair_double_double_126 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0044_compat126_std_pair_double_double_126 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0044_compat126_std_pair_double_double_126 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<double, double_126>",
          "h2dts_compat_tuple_0044_compat126_std_pair_double_double_126 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0044_compat126_std_pair_double_double_126 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0045_COMPAT126_STD_PAIR_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0045_COMPAT126_STD_PAIR_DOUBLE_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:pair<double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0045_compat126_std_pair_double_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat126(std:pair<double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0045_compat126_std_pair_double_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0045_compat126_std_pair_double_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0045_compat126_std_pair_double_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:pair<double, double>",
          "h2dts_compat_tuple_0045_compat126_std_pair_double_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0045_compat126_std_pair_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0046_COMPAT127_STD_PAIR_ITN_FLOAT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0046_COMPAT127_STD_PAIR_ITN_FLOAT_FLOAT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_itn<float, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0046_compat127_std_pair_itn_float_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat127(std::pair_itn<float, float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0046_compat127_std_pair_itn_float_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0046_compat127_std_pair_itn_float_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0046_compat127_std_pair_itn_float_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_itn<float, float>",
          "h2dts_compat_tuple_0046_compat127_std_pair_itn_float_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0046_compat127_std_pair_itn_float_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0047_COMPAT127_STD_PAIR_DOUBL_FLOAT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0047_COMPAT127_STD_PAIR_DOUBL_FLOAT_FLOAT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_doubl<float, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0047_compat127_std_pair_doubl_float_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat127(std::pair_doubl<float, float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0047_compat127_std_pair_doubl_float_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0047_compat127_std_pair_doubl_float_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0047_compat127_std_pair_doubl_float_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_doubl<float, float>",
          "h2dts_compat_tuple_0047_compat127_std_pair_doubl_float_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0047_compat127_std_pair_doubl_float_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0048_COMPAT127_STD_PAIR_BOOOL_FLOAT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0048_COMPAT127_STD_PAIR_BOOOL_FLOAT_FLOAT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_boool<float, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0048_compat127_std_pair_boool_float_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat127(std::pair_boool<float, float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0048_compat127_std_pair_boool_float_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0048_compat127_std_pair_boool_float_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0048_compat127_std_pair_boool_float_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_boool<float, float>",
          "h2dts_compat_tuple_0048_compat127_std_pair_boool_float_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0048_compat127_std_pair_boool_float_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0049_COMPAT127_STD_PAIR_FLOT_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0049_COMPAT127_STD_PAIR_FLOT_FLOT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<flot, flot>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0049_compat127_std_pair_flot_flot', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat127(std::pair<flot, flot> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0049_compat127_std_pair_flot_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0049_compat127_std_pair_flot_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0049_compat127_std_pair_flot_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<flot, flot>",
          "h2dts_compat_tuple_0049_compat127_std_pair_flot_flot param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0049_compat127_std_pair_flot_flot execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0050_COMPAT127_STD_PAIR_LNG_FLOAT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0050_COMPAT127_STD_PAIR_LNG_FLOAT_FLOAT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_lng<float, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0050_compat127_std_pair_lng_float_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat127(std::pair_lng<float, float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0050_compat127_std_pair_lng_float_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0050_compat127_std_pair_lng_float_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0050_compat127_std_pair_lng_float_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_lng<float, float>",
          "h2dts_compat_tuple_0050_compat127_std_pair_lng_float_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0050_compat127_std_pair_lng_float_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0051_COMPAT127_STD_PAIR_BAD127_FLOAT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0051_COMPAT127_STD_PAIR_BAD127_FLOAT_FLOAT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_bad127<float, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0051_compat127_std_pair_bad127_float_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat127(std::pair_bad127<float, float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0051_compat127_std_pair_bad127_float_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0051_compat127_std_pair_bad127_float_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0051_compat127_std_pair_bad127_float_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_bad127<float, float>",
          "h2dts_compat_tuple_0051_compat127_std_pair_bad127_float_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0051_compat127_std_pair_bad127_float_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0052_COMPAT127_STD_PAIR_X_FLOAT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0052_COMPAT127_STD_PAIR_X_FLOAT_FLOAT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_x<float, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0052_compat127_std_pair_x_float_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat127(std::pair_x<float, float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0052_compat127_std_pair_x_float_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0052_compat127_std_pair_x_float_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0052_compat127_std_pair_x_float_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_x<float, float>",
          "h2dts_compat_tuple_0052_compat127_std_pair_x_float_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0052_compat127_std_pair_x_float_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0053_COMPAT127_STD_PAIR_FLOAT_FLOAT_127
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0053_COMPAT127_STD_PAIR_FLOAT_FLOAT_127
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<float, float_127>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0053_compat127_std_pair_float_float_127', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat127(std::pair<float, float_127> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0053_compat127_std_pair_float_float_127 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0053_compat127_std_pair_float_float_127 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0053_compat127_std_pair_float_float_127 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<float, float_127>",
          "h2dts_compat_tuple_0053_compat127_std_pair_float_float_127 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0053_compat127_std_pair_float_float_127 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0054_COMPAT127_STD_PAIR_FLOAT_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0054_COMPAT127_STD_PAIR_FLOAT_FLOAT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:pair<float, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0054_compat127_std_pair_float_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat127(std:pair<float, float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0054_compat127_std_pair_float_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0054_compat127_std_pair_float_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0054_compat127_std_pair_float_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:pair<float, float>",
          "h2dts_compat_tuple_0054_compat127_std_pair_float_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0054_compat127_std_pair_float_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0055_COMPAT128_STD_PAIR_ITN_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0055_COMPAT128_STD_PAIR_ITN_LONG
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<itn, long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0055_compat128_std_pair_itn_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat128(std::pair<itn, long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0055_compat128_std_pair_itn_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0055_compat128_std_pair_itn_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0055_compat128_std_pair_itn_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<itn, long>",
          "h2dts_compat_tuple_0055_compat128_std_pair_itn_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0055_compat128_std_pair_itn_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0056_COMPAT128_STD_PAIR_DOUBL_INT_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0056_COMPAT128_STD_PAIR_DOUBL_INT_LONG
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_doubl<int, long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0056_compat128_std_pair_doubl_int_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat128(std::pair_doubl<int, long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0056_compat128_std_pair_doubl_int_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0056_compat128_std_pair_doubl_int_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0056_compat128_std_pair_doubl_int_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_doubl<int, long>",
          "h2dts_compat_tuple_0056_compat128_std_pair_doubl_int_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0056_compat128_std_pair_doubl_int_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0057_COMPAT128_STD_PAIR_BOOOL_INT_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0057_COMPAT128_STD_PAIR_BOOOL_INT_LONG
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_boool<int, long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0057_compat128_std_pair_boool_int_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat128(std::pair_boool<int, long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0057_compat128_std_pair_boool_int_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0057_compat128_std_pair_boool_int_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0057_compat128_std_pair_boool_int_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_boool<int, long>",
          "h2dts_compat_tuple_0057_compat128_std_pair_boool_int_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0057_compat128_std_pair_boool_int_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0058_COMPAT128_STD_PAIR_FLOT_INT_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0058_COMPAT128_STD_PAIR_FLOT_INT_LONG
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_flot<int, long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0058_compat128_std_pair_flot_int_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat128(std::pair_flot<int, long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0058_compat128_std_pair_flot_int_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0058_compat128_std_pair_flot_int_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0058_compat128_std_pair_flot_int_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_flot<int, long>",
          "h2dts_compat_tuple_0058_compat128_std_pair_flot_int_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0058_compat128_std_pair_flot_int_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0059_COMPAT128_STD_PAIR_INT_LNG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0059_COMPAT128_STD_PAIR_INT_LNG
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<int, lng>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0059_compat128_std_pair_int_lng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat128(std::pair<int, lng> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0059_compat128_std_pair_int_lng parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0059_compat128_std_pair_int_lng must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0059_compat128_std_pair_int_lng must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<int, lng>",
          "h2dts_compat_tuple_0059_compat128_std_pair_int_lng param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0059_compat128_std_pair_int_lng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0060_COMPAT128_STD_PAIR_BAD128_INT_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0060_COMPAT128_STD_PAIR_BAD128_INT_LONG
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_bad128<int, long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0060_compat128_std_pair_bad128_int_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat128(std::pair_bad128<int, long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0060_compat128_std_pair_bad128_int_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0060_compat128_std_pair_bad128_int_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0060_compat128_std_pair_bad128_int_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_bad128<int, long>",
          "h2dts_compat_tuple_0060_compat128_std_pair_bad128_int_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0060_compat128_std_pair_bad128_int_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0061_COMPAT128_STD_PAIR_X_INT_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0061_COMPAT128_STD_PAIR_X_INT_LONG
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_x<int, long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0061_compat128_std_pair_x_int_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat128(std::pair_x<int, long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0061_compat128_std_pair_x_int_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0061_compat128_std_pair_x_int_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0061_compat128_std_pair_x_int_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_x<int, long>",
          "h2dts_compat_tuple_0061_compat128_std_pair_x_int_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0061_compat128_std_pair_x_int_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0062_COMPAT128_STD_PAIR_INT_LONG_128
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0062_COMPAT128_STD_PAIR_INT_LONG_128
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<int, long_128>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0062_compat128_std_pair_int_long_128', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat128(std::pair<int, long_128> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0062_compat128_std_pair_int_long_128 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0062_compat128_std_pair_int_long_128 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0062_compat128_std_pair_int_long_128 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<int, long_128>",
          "h2dts_compat_tuple_0062_compat128_std_pair_int_long_128 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0062_compat128_std_pair_int_long_128 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0063_COMPAT128_STD_PAIR_INT_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0063_COMPAT128_STD_PAIR_INT_LONG
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:pair<int, long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0063_compat128_std_pair_int_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat128(std:pair<int, long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0063_compat128_std_pair_int_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0063_compat128_std_pair_int_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0063_compat128_std_pair_int_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:pair<int, long>",
          "h2dts_compat_tuple_0063_compat128_std_pair_int_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0063_compat128_std_pair_int_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0064_COMPAT129_STD_TUPLE_ITN_STD_STRING_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0064_COMPAT129_STD_TUPLE_ITN_STD_STRING_BOOL
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<itn, std::string, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0064_compat129_std_tuple_itn_std_string_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(std::tuple<itn, std::string, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0064_compat129_std_tuple_itn_std_string_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0064_compat129_std_tuple_itn_std_string_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0064_compat129_std_tuple_itn_std_string_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<itn, std::string, bool>",
          "h2dts_compat_tuple_0064_compat129_std_tuple_itn_std_string_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0064_compat129_std_tuple_itn_std_string_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0065_COMPAT129_STD_TUPLE_DOUBL_INT_STD_S_D51A6A
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0065_COMPAT129_STD_TUPLE_DOUBL_INT_STD_S_D51A6A
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_doubl<int, std::string, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0065_compat129_std_tuple_doubl_int_std_s_d51a6a', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(std::tuple_doubl<int, std::string, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0065_compat129_std_tuple_doubl_int_std_s_d51a6a parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0065_compat129_std_tuple_doubl_int_std_s_d51a6a must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0065_compat129_std_tuple_doubl_int_std_s_d51a6a must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_doubl<int, std::string, bool>",
          "h2dts_compat_tuple_0065_compat129_std_tuple_doubl_int_std_s_d51a6a param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0065_compat129_std_tuple_doubl_int_std_s_d51a6a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0066_COMPAT129_STD_TUPLE_INT_STD_STRING_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0066_COMPAT129_STD_TUPLE_INT_STD_STRING_BOOOL
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<int, std::string, boool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0066_compat129_std_tuple_int_std_string_boool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(std::tuple<int, std::string, boool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0066_compat129_std_tuple_int_std_string_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0066_compat129_std_tuple_int_std_string_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0066_compat129_std_tuple_int_std_string_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<int, std::string, boool>",
          "h2dts_compat_tuple_0066_compat129_std_tuple_int_std_string_boool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0066_compat129_std_tuple_int_std_string_boool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0067_COMPAT129_STD_TUPLE_FLOT_INT_STD_ST_48C793
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0067_COMPAT129_STD_TUPLE_FLOT_INT_STD_ST_48C793
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_flot<int, std::string, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0067_compat129_std_tuple_flot_int_std_st_48c793', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(std::tuple_flot<int, std::string, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0067_compat129_std_tuple_flot_int_std_st_48c793 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0067_compat129_std_tuple_flot_int_std_st_48c793 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0067_compat129_std_tuple_flot_int_std_st_48c793 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_flot<int, std::string, bool>",
          "h2dts_compat_tuple_0067_compat129_std_tuple_flot_int_std_st_48c793 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0067_compat129_std_tuple_flot_int_std_st_48c793 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0068_COMPAT129_STD_TUPLE_LNG_INT_STD_STR_4EAE48
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0068_COMPAT129_STD_TUPLE_LNG_INT_STD_STR_4EAE48
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<int, std::string, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0068_compat129_std_tuple_lng_int_std_str_4eae48', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(std::tuple_lng<int, std::string, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0068_compat129_std_tuple_lng_int_std_str_4eae48 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0068_compat129_std_tuple_lng_int_std_str_4eae48 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0068_compat129_std_tuple_lng_int_std_str_4eae48 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<int, std::string, bool>",
          "h2dts_compat_tuple_0068_compat129_std_tuple_lng_int_std_str_4eae48 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0068_compat129_std_tuple_lng_int_std_str_4eae48 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0069_COMPAT129_STD_TUPLE_BAD129_INT_STD_C5687B
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0069_COMPAT129_STD_TUPLE_BAD129_INT_STD_C5687B
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad129<int, std::string, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0069_compat129_std_tuple_bad129_int_std_c5687b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(std::tuple_bad129<int, std::string, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0069_compat129_std_tuple_bad129_int_std_c5687b parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0069_compat129_std_tuple_bad129_int_std_c5687b must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0069_compat129_std_tuple_bad129_int_std_c5687b must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad129<int, std::string, bool>",
          "h2dts_compat_tuple_0069_compat129_std_tuple_bad129_int_std_c5687b param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0069_compat129_std_tuple_bad129_int_std_c5687b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0070_COMPAT129_STD_TUPLE_X_INT_STD_STRING_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0070_COMPAT129_STD_TUPLE_X_INT_STD_STRING_BOOL
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<int, std::string, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0070_compat129_std_tuple_x_int_std_string_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(std::tuple_x<int, std::string, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0070_compat129_std_tuple_x_int_std_string_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0070_compat129_std_tuple_x_int_std_string_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0070_compat129_std_tuple_x_int_std_string_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<int, std::string, bool>",
          "h2dts_compat_tuple_0070_compat129_std_tuple_x_int_std_string_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0070_compat129_std_tuple_x_int_std_string_bool execution error: ${err}`);
    }
  });
});
