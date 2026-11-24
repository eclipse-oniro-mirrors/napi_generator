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

suite('Stability_H2DTS_COMPAT_CONTAINER_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_CONTAINER._Part02');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT55_STD_VECTOR_BOOL_55
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT55_STD_VECTOR_BOOL_55
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<bool_55>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0071_compat55_std_vector_bool_55', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat55(std::vector<bool_55> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat55_std_vector_bool_55 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat55_std_vector_bool_55 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0071_compat55_std_vector_bool_55 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<bool_55>",
          "h2dts_compat_container_0071_compat55_std_vector_bool_55 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0071_compat55_std_vector_bool_55 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT55_STD_VECTOR_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT55_STD_VECTOR_BOOL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0072_compat55_std_vector_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat55(std:vector<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat55_std_vector_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat55_std_vector_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0072_compat55_std_vector_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<bool>",
          "h2dts_compat_container_0072_compat55_std_vector_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0072_compat55_std_vector_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT59_STD_LIST_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT59_STD_LIST_ITN
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0073_compat59_std_list_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat59(std::list<itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat59_std_list_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat59_std_list_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0073_compat59_std_list_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<itn>",
          "h2dts_compat_container_0073_compat59_std_list_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0073_compat59_std_list_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT59_STD_LIST_DOUBL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT59_STD_LIST_DOUBL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_doubl<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0074_compat59_std_list_doubl_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat59(std::list_doubl<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat59_std_list_doubl_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat59_std_list_doubl_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0074_compat59_std_list_doubl_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_doubl<int>",
          "h2dts_compat_container_0074_compat59_std_list_doubl_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0074_compat59_std_list_doubl_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT59_STD_LIST_BOOOL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT59_STD_LIST_BOOOL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_boool<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0075_compat59_std_list_boool_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat59(std::list_boool<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat59_std_list_boool_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat59_std_list_boool_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0075_compat59_std_list_boool_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_boool<int>",
          "h2dts_compat_container_0075_compat59_std_list_boool_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0075_compat59_std_list_boool_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT59_STD_LIST_FLOT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT59_STD_LIST_FLOT_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_flot<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0076_compat59_std_list_flot_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat59(std::list_flot<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat59_std_list_flot_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat59_std_list_flot_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0076_compat59_std_list_flot_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_flot<int>",
          "h2dts_compat_container_0076_compat59_std_list_flot_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0076_compat59_std_list_flot_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0077_COMPAT59_STD_LIST_LNG_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0077_COMPAT59_STD_LIST_LNG_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_lng<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0077_compat59_std_list_lng_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat59(std::list_lng<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0077_compat59_std_list_lng_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0077_compat59_std_list_lng_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0077_compat59_std_list_lng_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_lng<int>",
          "h2dts_compat_container_0077_compat59_std_list_lng_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0077_compat59_std_list_lng_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT59_STD_LIST_BAD59_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT59_STD_LIST_BAD59_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_bad59<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0001_compat59_std_list_bad59_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat59(std::list_bad59<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat59_std_list_bad59_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat59_std_list_bad59_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0001_compat59_std_list_bad59_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_bad59<int>",
          "h2dts_compat_container_0001_compat59_std_list_bad59_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0001_compat59_std_list_bad59_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT59_STD_LIST_X_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT59_STD_LIST_X_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_x<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0002_compat59_std_list_x_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat59(std::list_x<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat59_std_list_x_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat59_std_list_x_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0002_compat59_std_list_x_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_x<int>",
          "h2dts_compat_container_0002_compat59_std_list_x_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0002_compat59_std_list_x_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT59_STD_LIST_INT_59
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT59_STD_LIST_INT_59
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<int_59>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0003_compat59_std_list_int_59', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat59(std::list<int_59> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat59_std_list_int_59 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat59_std_list_int_59 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0003_compat59_std_list_int_59 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<int_59>",
          "h2dts_compat_container_0003_compat59_std_list_int_59 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0003_compat59_std_list_int_59 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT59_STD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT59_STD_LIST_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:list<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0004_compat59_std_list_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat59(std:list<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat59_std_list_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat59_std_list_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0004_compat59_std_list_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<int>",
          "h2dts_compat_container_0004_compat59_std_list_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0004_compat59_std_list_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT60_STD_LIST_ITN_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT60_STD_LIST_ITN_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_itn<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0005_compat60_std_list_itn_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat60(std::list_itn<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat60_std_list_itn_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat60_std_list_itn_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0005_compat60_std_list_itn_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_itn<std::string>",
          "h2dts_compat_container_0005_compat60_std_list_itn_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0005_compat60_std_list_itn_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT60_STD_LIST_DOUBL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT60_STD_LIST_DOUBL_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_doubl<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0006_compat60_std_list_doubl_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat60(std::list_doubl<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat60_std_list_doubl_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat60_std_list_doubl_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0006_compat60_std_list_doubl_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_doubl<std::string>",
          "h2dts_compat_container_0006_compat60_std_list_doubl_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0006_compat60_std_list_doubl_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT60_STD_LIST_BOOOL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT60_STD_LIST_BOOOL_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_boool<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0007_compat60_std_list_boool_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat60(std::list_boool<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat60_std_list_boool_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat60_std_list_boool_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0007_compat60_std_list_boool_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_boool<std::string>",
          "h2dts_compat_container_0007_compat60_std_list_boool_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0007_compat60_std_list_boool_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT60_STD_LIST_FLOT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT60_STD_LIST_FLOT_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_flot<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0008_compat60_std_list_flot_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat60(std::list_flot<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat60_std_list_flot_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat60_std_list_flot_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0008_compat60_std_list_flot_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_flot<std::string>",
          "h2dts_compat_container_0008_compat60_std_list_flot_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0008_compat60_std_list_flot_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT60_STD_LIST_LNG_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT60_STD_LIST_LNG_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_lng<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0009_compat60_std_list_lng_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat60(std::list_lng<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat60_std_list_lng_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat60_std_list_lng_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0009_compat60_std_list_lng_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_lng<std::string>",
          "h2dts_compat_container_0009_compat60_std_list_lng_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0009_compat60_std_list_lng_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT60_STD_LIST_BAD60_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT60_STD_LIST_BAD60_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_bad60<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0010_compat60_std_list_bad60_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat60(std::list_bad60<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat60_std_list_bad60_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat60_std_list_bad60_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0010_compat60_std_list_bad60_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_bad60<std::string>",
          "h2dts_compat_container_0010_compat60_std_list_bad60_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0010_compat60_std_list_bad60_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT60_STD_LIST_X_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT60_STD_LIST_X_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_x<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0011_compat60_std_list_x_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat60(std::list_x<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat60_std_list_x_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat60_std_list_x_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0011_compat60_std_list_x_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_x<std::string>",
          "h2dts_compat_container_0011_compat60_std_list_x_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0011_compat60_std_list_x_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT60_STD_LIST_STD_STRING_60
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT60_STD_LIST_STD_STRING_60
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<std::string_60>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0012_compat60_std_list_std_string_60', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat60(std::list<std::string_60> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat60_std_list_std_string_60 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat60_std_list_std_string_60 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0012_compat60_std_list_std_string_60 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<std::string_60>",
          "h2dts_compat_container_0012_compat60_std_list_std_string_60 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0012_compat60_std_list_std_string_60 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT60_STD_LIST_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT60_STD_LIST_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:list<std:string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0013_compat60_std_list_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat60(std:list<std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat60_std_list_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat60_std_list_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0013_compat60_std_list_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<std:string>",
          "h2dts_compat_container_0013_compat60_std_list_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0013_compat60_std_list_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT61_STD_DEQUE_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT61_STD_DEQUE_ITN
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0014_compat61_std_deque_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat61(std::deque<itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat61_std_deque_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat61_std_deque_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0014_compat61_std_deque_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<itn>",
          "h2dts_compat_container_0014_compat61_std_deque_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0014_compat61_std_deque_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT61_STD_DEQUE_DOUBL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT61_STD_DEQUE_DOUBL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_doubl<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0015_compat61_std_deque_doubl_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat61(std::deque_doubl<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat61_std_deque_doubl_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat61_std_deque_doubl_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0015_compat61_std_deque_doubl_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_doubl<int>",
          "h2dts_compat_container_0015_compat61_std_deque_doubl_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0015_compat61_std_deque_doubl_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT61_STD_DEQUE_BOOOL_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT61_STD_DEQUE_BOOOL_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_boool<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0016_compat61_std_deque_boool_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat61(std::deque_boool<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat61_std_deque_boool_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat61_std_deque_boool_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0016_compat61_std_deque_boool_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_boool<int>",
          "h2dts_compat_container_0016_compat61_std_deque_boool_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0016_compat61_std_deque_boool_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT61_STD_DEQUE_FLOT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT61_STD_DEQUE_FLOT_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_flot<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0017_compat61_std_deque_flot_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat61(std::deque_flot<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat61_std_deque_flot_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat61_std_deque_flot_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0017_compat61_std_deque_flot_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_flot<int>",
          "h2dts_compat_container_0017_compat61_std_deque_flot_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0017_compat61_std_deque_flot_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT61_STD_DEQUE_LNG_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT61_STD_DEQUE_LNG_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_lng<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0018_compat61_std_deque_lng_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat61(std::deque_lng<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat61_std_deque_lng_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat61_std_deque_lng_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0018_compat61_std_deque_lng_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_lng<int>",
          "h2dts_compat_container_0018_compat61_std_deque_lng_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0018_compat61_std_deque_lng_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT61_STD_DEQUE_BAD61_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT61_STD_DEQUE_BAD61_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_bad61<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0019_compat61_std_deque_bad61_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat61(std::deque_bad61<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat61_std_deque_bad61_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat61_std_deque_bad61_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0019_compat61_std_deque_bad61_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_bad61<int>",
          "h2dts_compat_container_0019_compat61_std_deque_bad61_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0019_compat61_std_deque_bad61_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT61_STD_DEQUE_X_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT61_STD_DEQUE_X_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_x<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0020_compat61_std_deque_x_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat61(std::deque_x<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat61_std_deque_x_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat61_std_deque_x_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0020_compat61_std_deque_x_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_x<int>",
          "h2dts_compat_container_0020_compat61_std_deque_x_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0020_compat61_std_deque_x_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT61_STD_DEQUE_INT_61
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT61_STD_DEQUE_INT_61
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<int_61>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0021_compat61_std_deque_int_61', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat61(std::deque<int_61> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat61_std_deque_int_61 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat61_std_deque_int_61 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0021_compat61_std_deque_int_61 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<int_61>",
          "h2dts_compat_container_0021_compat61_std_deque_int_61 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0021_compat61_std_deque_int_61 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT61_STD_DEQUE_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT61_STD_DEQUE_INT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0022_compat61_std_deque_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat61(std:deque<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat61_std_deque_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat61_std_deque_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0022_compat61_std_deque_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<int>",
          "h2dts_compat_container_0022_compat61_std_deque_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0022_compat61_std_deque_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT62_STD_DEQUE_ITN_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT62_STD_DEQUE_ITN_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_itn<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0023_compat62_std_deque_itn_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat62(std::deque_itn<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat62_std_deque_itn_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat62_std_deque_itn_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0023_compat62_std_deque_itn_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_itn<std::string>",
          "h2dts_compat_container_0023_compat62_std_deque_itn_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0023_compat62_std_deque_itn_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT62_STD_DEQUE_DOUBL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT62_STD_DEQUE_DOUBL_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_doubl<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0024_compat62_std_deque_doubl_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat62(std::deque_doubl<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat62_std_deque_doubl_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat62_std_deque_doubl_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0024_compat62_std_deque_doubl_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_doubl<std::string>",
          "h2dts_compat_container_0024_compat62_std_deque_doubl_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0024_compat62_std_deque_doubl_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT62_STD_DEQUE_BOOOL_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT62_STD_DEQUE_BOOOL_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_boool<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0025_compat62_std_deque_boool_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat62(std::deque_boool<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat62_std_deque_boool_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat62_std_deque_boool_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0025_compat62_std_deque_boool_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_boool<std::string>",
          "h2dts_compat_container_0025_compat62_std_deque_boool_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0025_compat62_std_deque_boool_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT62_STD_DEQUE_FLOT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT62_STD_DEQUE_FLOT_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_flot<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0026_compat62_std_deque_flot_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat62(std::deque_flot<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat62_std_deque_flot_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat62_std_deque_flot_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0026_compat62_std_deque_flot_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_flot<std::string>",
          "h2dts_compat_container_0026_compat62_std_deque_flot_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0026_compat62_std_deque_flot_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT62_STD_DEQUE_LNG_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT62_STD_DEQUE_LNG_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_lng<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0027_compat62_std_deque_lng_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat62(std::deque_lng<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat62_std_deque_lng_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat62_std_deque_lng_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0027_compat62_std_deque_lng_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_lng<std::string>",
          "h2dts_compat_container_0027_compat62_std_deque_lng_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0027_compat62_std_deque_lng_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT62_STD_DEQUE_BAD62_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT62_STD_DEQUE_BAD62_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_bad62<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0028_compat62_std_deque_bad62_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat62(std::deque_bad62<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat62_std_deque_bad62_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat62_std_deque_bad62_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0028_compat62_std_deque_bad62_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_bad62<std::string>",
          "h2dts_compat_container_0028_compat62_std_deque_bad62_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0028_compat62_std_deque_bad62_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT62_STD_DEQUE_X_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT62_STD_DEQUE_X_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque_x<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0029_compat62_std_deque_x_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat62(std::deque_x<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat62_std_deque_x_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat62_std_deque_x_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0029_compat62_std_deque_x_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque_x<std::string>",
          "h2dts_compat_container_0029_compat62_std_deque_x_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0029_compat62_std_deque_x_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT62_STD_DEQUE_STD_STRING_62
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT62_STD_DEQUE_STD_STRING_62
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<std::string_62>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0030_compat62_std_deque_std_string_62', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat62(std::deque<std::string_62> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat62_std_deque_std_string_62 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat62_std_deque_std_string_62 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0030_compat62_std_deque_std_string_62 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::deque<std::string_62>",
          "h2dts_compat_container_0030_compat62_std_deque_std_string_62 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0030_compat62_std_deque_std_string_62 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT62_STD_DEQUE_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0031_COMPAT62_STD_DEQUE_STD_STRING
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<std:string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0031_compat62_std_deque_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat62(std:deque<std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat62_std_deque_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0031_compat62_std_deque_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0031_compat62_std_deque_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<std:string>",
          "h2dts_compat_container_0031_compat62_std_deque_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0031_compat62_std_deque_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT74_STD_VALARRAY_ITN_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0032_COMPAT74_STD_VALARRAY_ITN_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_itn<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0032_compat74_std_valarray_itn_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat74(std::valarray_itn<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat74_std_valarray_itn_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0032_compat74_std_valarray_itn_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0032_compat74_std_valarray_itn_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_itn<double>",
          "h2dts_compat_container_0032_compat74_std_valarray_itn_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0032_compat74_std_valarray_itn_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT74_STD_VALARRAY_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0033_COMPAT74_STD_VALARRAY_DOUBL
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0033_compat74_std_valarray_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat74(std::valarray<doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat74_std_valarray_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0033_compat74_std_valarray_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0033_compat74_std_valarray_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray<doubl>",
          "h2dts_compat_container_0033_compat74_std_valarray_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0033_compat74_std_valarray_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT74_STD_VALARRAY_BOOOL_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0034_COMPAT74_STD_VALARRAY_BOOOL_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_boool<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0034_compat74_std_valarray_boool_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat74(std::valarray_boool<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat74_std_valarray_boool_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0034_compat74_std_valarray_boool_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0034_compat74_std_valarray_boool_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_boool<double>",
          "h2dts_compat_container_0034_compat74_std_valarray_boool_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0034_compat74_std_valarray_boool_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT74_STD_VALARRAY_FLOT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0035_COMPAT74_STD_VALARRAY_FLOT_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_flot<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0035_compat74_std_valarray_flot_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat74(std::valarray_flot<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat74_std_valarray_flot_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0035_compat74_std_valarray_flot_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0035_compat74_std_valarray_flot_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_flot<double>",
          "h2dts_compat_container_0035_compat74_std_valarray_flot_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0035_compat74_std_valarray_flot_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT74_STD_VALARRAY_LNG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0036_COMPAT74_STD_VALARRAY_LNG_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_lng<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0036_compat74_std_valarray_lng_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat74(std::valarray_lng<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat74_std_valarray_lng_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0036_compat74_std_valarray_lng_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0036_compat74_std_valarray_lng_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_lng<double>",
          "h2dts_compat_container_0036_compat74_std_valarray_lng_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0036_compat74_std_valarray_lng_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT74_STD_VALARRAY_BAD74_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT74_STD_VALARRAY_BAD74_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_bad74<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0037_compat74_std_valarray_bad74_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat74(std::valarray_bad74<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat74_std_valarray_bad74_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat74_std_valarray_bad74_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0037_compat74_std_valarray_bad74_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_bad74<double>",
          "h2dts_compat_container_0037_compat74_std_valarray_bad74_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0037_compat74_std_valarray_bad74_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT74_STD_VALARRAY_X_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT74_STD_VALARRAY_X_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_x<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0038_compat74_std_valarray_x_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat74(std::valarray_x<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat74_std_valarray_x_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat74_std_valarray_x_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0038_compat74_std_valarray_x_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_x<double>",
          "h2dts_compat_container_0038_compat74_std_valarray_x_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0038_compat74_std_valarray_x_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT74_STD_VALARRAY_DOUBLE_74
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT74_STD_VALARRAY_DOUBLE_74
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<double_74>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0039_compat74_std_valarray_double_74', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat74(std::valarray<double_74> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat74_std_valarray_double_74 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat74_std_valarray_double_74 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0039_compat74_std_valarray_double_74 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray<double_74>",
          "h2dts_compat_container_0039_compat74_std_valarray_double_74 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0039_compat74_std_valarray_double_74 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT74_STD_VALARRAY_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT74_STD_VALARRAY_DOUBLE
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:valarray<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0040_compat74_std_valarray_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat74(std:valarray<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat74_std_valarray_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat74_std_valarray_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0040_compat74_std_valarray_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:valarray<double>",
          "h2dts_compat_container_0040_compat74_std_valarray_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0040_compat74_std_valarray_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT116_STD_VECTOR_ITN_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT116_STD_VECTOR_ITN_CHAR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0041_compat116_std_vector_itn_char', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat116(std::vector_itn<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat116_std_vector_itn_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat116_std_vector_itn_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0041_compat116_std_vector_itn_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<char>",
          "h2dts_compat_container_0041_compat116_std_vector_itn_char param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0041_compat116_std_vector_itn_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT116_STD_VECTOR_DOUBL_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT116_STD_VECTOR_DOUBL_CHAR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0042_compat116_std_vector_doubl_char', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat116(std::vector_doubl<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat116_std_vector_doubl_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat116_std_vector_doubl_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0042_compat116_std_vector_doubl_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<char>",
          "h2dts_compat_container_0042_compat116_std_vector_doubl_char param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0042_compat116_std_vector_doubl_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT116_STD_VECTOR_BOOOL_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT116_STD_VECTOR_BOOOL_CHAR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0043_compat116_std_vector_boool_char', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat116(std::vector_boool<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat116_std_vector_boool_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat116_std_vector_boool_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0043_compat116_std_vector_boool_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<char>",
          "h2dts_compat_container_0043_compat116_std_vector_boool_char param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0043_compat116_std_vector_boool_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT116_STD_VECTOR_FLOT_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT116_STD_VECTOR_FLOT_CHAR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0044_compat116_std_vector_flot_char', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat116(std::vector_flot<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat116_std_vector_flot_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat116_std_vector_flot_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0044_compat116_std_vector_flot_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<char>",
          "h2dts_compat_container_0044_compat116_std_vector_flot_char param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0044_compat116_std_vector_flot_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT116_STD_VECTOR_LNG_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT116_STD_VECTOR_LNG_CHAR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0045_compat116_std_vector_lng_char', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat116(std::vector_lng<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat116_std_vector_lng_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat116_std_vector_lng_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0045_compat116_std_vector_lng_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<char>",
          "h2dts_compat_container_0045_compat116_std_vector_lng_char param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0045_compat116_std_vector_lng_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT116_STD_VECTOR_BAD116_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT116_STD_VECTOR_BAD116_CHAR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad116<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0046_compat116_std_vector_bad116_char', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat116(std::vector_bad116<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat116_std_vector_bad116_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat116_std_vector_bad116_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0046_compat116_std_vector_bad116_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad116<char>",
          "h2dts_compat_container_0046_compat116_std_vector_bad116_char param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0046_compat116_std_vector_bad116_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT116_STD_VECTOR_X_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT116_STD_VECTOR_X_CHAR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0047_compat116_std_vector_x_char', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat116(std::vector_x<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat116_std_vector_x_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat116_std_vector_x_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0047_compat116_std_vector_x_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<char>",
          "h2dts_compat_container_0047_compat116_std_vector_x_char param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0047_compat116_std_vector_x_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT116_STD_VECTOR_CHAR_116
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT116_STD_VECTOR_CHAR_116
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<char_116>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0048_compat116_std_vector_char_116', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat116(std::vector<char_116> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat116_std_vector_char_116 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat116_std_vector_char_116 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0048_compat116_std_vector_char_116 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<char_116>",
          "h2dts_compat_container_0048_compat116_std_vector_char_116 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0048_compat116_std_vector_char_116 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT116_STD_VECTOR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT116_STD_VECTOR_CHAR
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0049_compat116_std_vector_char', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat116(std:vector<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat116_std_vector_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat116_std_vector_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0049_compat116_std_vector_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<char>",
          "h2dts_compat_container_0049_compat116_std_vector_char param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0049_compat116_std_vector_char execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT117_STD_VECTOR_ITN_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT117_STD_VECTOR_ITN_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0050_compat117_std_vector_itn_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat117(std::vector_itn<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat117_std_vector_itn_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat117_std_vector_itn_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0050_compat117_std_vector_itn_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<float>",
          "h2dts_compat_container_0050_compat117_std_vector_itn_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0050_compat117_std_vector_itn_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT117_STD_VECTOR_DOUBL_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT117_STD_VECTOR_DOUBL_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0051_compat117_std_vector_doubl_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat117(std::vector_doubl<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat117_std_vector_doubl_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat117_std_vector_doubl_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0051_compat117_std_vector_doubl_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<float>",
          "h2dts_compat_container_0051_compat117_std_vector_doubl_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0051_compat117_std_vector_doubl_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT117_STD_VECTOR_BOOOL_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT117_STD_VECTOR_BOOOL_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0052_compat117_std_vector_boool_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat117(std::vector_boool<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat117_std_vector_boool_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat117_std_vector_boool_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0052_compat117_std_vector_boool_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<float>",
          "h2dts_compat_container_0052_compat117_std_vector_boool_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0052_compat117_std_vector_boool_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT117_STD_VECTOR_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT117_STD_VECTOR_FLOT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<flot>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0053_compat117_std_vector_flot', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat117(std::vector<flot> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat117_std_vector_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat117_std_vector_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0053_compat117_std_vector_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<flot>",
          "h2dts_compat_container_0053_compat117_std_vector_flot param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0053_compat117_std_vector_flot execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT117_STD_VECTOR_LNG_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT117_STD_VECTOR_LNG_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0054_compat117_std_vector_lng_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat117(std::vector_lng<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat117_std_vector_lng_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat117_std_vector_lng_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0054_compat117_std_vector_lng_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<float>",
          "h2dts_compat_container_0054_compat117_std_vector_lng_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0054_compat117_std_vector_lng_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT117_STD_VECTOR_BAD117_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT117_STD_VECTOR_BAD117_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad117<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0055_compat117_std_vector_bad117_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat117(std::vector_bad117<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat117_std_vector_bad117_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat117_std_vector_bad117_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0055_compat117_std_vector_bad117_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad117<float>",
          "h2dts_compat_container_0055_compat117_std_vector_bad117_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0055_compat117_std_vector_bad117_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT117_STD_VECTOR_X_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT117_STD_VECTOR_X_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0056_compat117_std_vector_x_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat117(std::vector_x<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat117_std_vector_x_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat117_std_vector_x_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0056_compat117_std_vector_x_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<float>",
          "h2dts_compat_container_0056_compat117_std_vector_x_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0056_compat117_std_vector_x_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT117_STD_VECTOR_FLOAT_117
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT117_STD_VECTOR_FLOAT_117
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<float_117>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0057_compat117_std_vector_float_117', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat117(std::vector<float_117> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat117_std_vector_float_117 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat117_std_vector_float_117 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0057_compat117_std_vector_float_117 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<float_117>",
          "h2dts_compat_container_0057_compat117_std_vector_float_117 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0057_compat117_std_vector_float_117 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT117_STD_VECTOR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT117_STD_VECTOR_FLOAT
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0058_compat117_std_vector_float', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat117(std:vector<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat117_std_vector_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat117_std_vector_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0058_compat117_std_vector_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<float>",
          "h2dts_compat_container_0058_compat117_std_vector_float param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0058_compat117_std_vector_float execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT118_STD_VECTOR_ITN_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT118_STD_VECTOR_ITN_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0059_compat118_std_vector_itn_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat118(std::vector_itn<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat118_std_vector_itn_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat118_std_vector_itn_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0059_compat118_std_vector_itn_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<long>",
          "h2dts_compat_container_0059_compat118_std_vector_itn_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0059_compat118_std_vector_itn_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT118_STD_VECTOR_DOUBL_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT118_STD_VECTOR_DOUBL_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0060_compat118_std_vector_doubl_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat118(std::vector_doubl<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat118_std_vector_doubl_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat118_std_vector_doubl_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0060_compat118_std_vector_doubl_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<long>",
          "h2dts_compat_container_0060_compat118_std_vector_doubl_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0060_compat118_std_vector_doubl_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT118_STD_VECTOR_BOOOL_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT118_STD_VECTOR_BOOOL_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0061_compat118_std_vector_boool_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat118(std::vector_boool<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat118_std_vector_boool_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat118_std_vector_boool_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0061_compat118_std_vector_boool_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<long>",
          "h2dts_compat_container_0061_compat118_std_vector_boool_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0061_compat118_std_vector_boool_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT118_STD_VECTOR_FLOT_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT118_STD_VECTOR_FLOT_LONG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0062_compat118_std_vector_flot_long', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat118(std::vector_flot<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat118_std_vector_flot_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat118_std_vector_flot_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0062_compat118_std_vector_flot_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<long>",
          "h2dts_compat_container_0062_compat118_std_vector_flot_long param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0062_compat118_std_vector_flot_long execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT118_STD_VECTOR_LNG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT118_STD_VECTOR_LNG
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<lng>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0063_compat118_std_vector_lng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat118(std::vector<lng> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat118_std_vector_lng parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat118_std_vector_lng must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0063_compat118_std_vector_lng must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<lng>",
          "h2dts_compat_container_0063_compat118_std_vector_lng param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0063_compat118_std_vector_lng execution error: ${err}`);
    }
  });
});
