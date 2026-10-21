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

suite('Stability_H2DTS_COMPAT_TUPLE_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_TUPLE._Part02');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0071_COMPAT129_STD_TUPLE_INT_STD_STRING_F09320
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0071_COMPAT129_STD_TUPLE_INT_STD_STRING_F09320
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<int, std::string, bool_129>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0071_compat129_std_tuple_int_std_string_f09320', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(std::tuple<int, std::string, bool_129> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0071_compat129_std_tuple_int_std_string_f09320 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0071_compat129_std_tuple_int_std_string_f09320 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0071_compat129_std_tuple_int_std_string_f09320 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<int, std::string, bool_129>",
          "h2dts_compat_tuple_0071_compat129_std_tuple_int_std_string_f09320 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0071_compat129_std_tuple_int_std_string_f09320 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0072_COMPAT129_STD_TUPLE_INT_STD_STRING_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0072_COMPAT129_STD_TUPLE_INT_STD_STRING_BOOL
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<int, std:string, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0072_compat129_std_tuple_int_std_string_bool', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(std:tuple<int, std:string, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0072_compat129_std_tuple_int_std_string_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0072_compat129_std_tuple_int_std_string_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0072_compat129_std_tuple_int_std_string_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<int, std:string, bool>",
          "h2dts_compat_tuple_0072_compat129_std_tuple_int_std_string_bool param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0072_compat129_std_tuple_int_std_string_bool execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0073_COMPAT130_STD_TUPLE_ITN_DOUBLE_DOUB_59CD62
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0073_COMPAT130_STD_TUPLE_ITN_DOUBLE_DOUB_59CD62
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_itn<double, double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0073_compat130_std_tuple_itn_double_doub_59cd62', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat130(std::tuple_itn<double, double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0073_compat130_std_tuple_itn_double_doub_59cd62 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0073_compat130_std_tuple_itn_double_doub_59cd62 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0073_compat130_std_tuple_itn_double_doub_59cd62 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_itn<double, double, double>",
          "h2dts_compat_tuple_0073_compat130_std_tuple_itn_double_doub_59cd62 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0073_compat130_std_tuple_itn_double_doub_59cd62 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0074_COMPAT130_STD_TUPLE_DOUBL_DOUBL_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0074_COMPAT130_STD_TUPLE_DOUBL_DOUBL_DOUBL
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<doubl, doubl, doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0074_compat130_std_tuple_doubl_doubl_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat130(std::tuple<doubl, doubl, doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0074_compat130_std_tuple_doubl_doubl_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0074_compat130_std_tuple_doubl_doubl_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0074_compat130_std_tuple_doubl_doubl_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<doubl, doubl, doubl>",
          "h2dts_compat_tuple_0074_compat130_std_tuple_doubl_doubl_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0074_compat130_std_tuple_doubl_doubl_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0075_COMPAT130_STD_TUPLE_BOOOL_DOUBLE_DO_C56582
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0075_COMPAT130_STD_TUPLE_BOOOL_DOUBLE_DO_C56582
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_boool<double, double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0075_compat130_std_tuple_boool_double_do_c56582', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat130(std::tuple_boool<double, double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0075_compat130_std_tuple_boool_double_do_c56582 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0075_compat130_std_tuple_boool_double_do_c56582 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0075_compat130_std_tuple_boool_double_do_c56582 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_boool<double, double, double>",
          "h2dts_compat_tuple_0075_compat130_std_tuple_boool_double_do_c56582 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0075_compat130_std_tuple_boool_double_do_c56582 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0076_COMPAT130_STD_TUPLE_FLOT_DOUBLE_DOU_662B8D
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0076_COMPAT130_STD_TUPLE_FLOT_DOUBLE_DOU_662B8D
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_flot<double, double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0076_compat130_std_tuple_flot_double_dou_662b8d', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat130(std::tuple_flot<double, double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0076_compat130_std_tuple_flot_double_dou_662b8d parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0076_compat130_std_tuple_flot_double_dou_662b8d must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0076_compat130_std_tuple_flot_double_dou_662b8d must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_flot<double, double, double>",
          "h2dts_compat_tuple_0076_compat130_std_tuple_flot_double_dou_662b8d param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0076_compat130_std_tuple_flot_double_dou_662b8d execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0001_COMPAT130_STD_TUPLE_LNG_DOUBLE_DOUB_AFC296
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0001_COMPAT130_STD_TUPLE_LNG_DOUBLE_DOUB_AFC296
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<double, double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0001_compat130_std_tuple_lng_double_doub_afc296', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat130(std::tuple_lng<double, double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0001_compat130_std_tuple_lng_double_doub_afc296 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0001_compat130_std_tuple_lng_double_doub_afc296 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0001_compat130_std_tuple_lng_double_doub_afc296 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<double, double, double>",
          "h2dts_compat_tuple_0001_compat130_std_tuple_lng_double_doub_afc296 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0001_compat130_std_tuple_lng_double_doub_afc296 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0002_COMPAT130_STD_TUPLE_BAD130_DOUBLE_D_86B9AB
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0002_COMPAT130_STD_TUPLE_BAD130_DOUBLE_D_86B9AB
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad130<double, double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0002_compat130_std_tuple_bad130_double_d_86b9ab', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat130(std::tuple_bad130<double, double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0002_compat130_std_tuple_bad130_double_d_86b9ab parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0002_compat130_std_tuple_bad130_double_d_86b9ab must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0002_compat130_std_tuple_bad130_double_d_86b9ab must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad130<double, double, double>",
          "h2dts_compat_tuple_0002_compat130_std_tuple_bad130_double_d_86b9ab param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0002_compat130_std_tuple_bad130_double_d_86b9ab execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0003_COMPAT130_STD_TUPLE_X_DOUBLE_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0003_COMPAT130_STD_TUPLE_X_DOUBLE_DOUBLE_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<double, double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0003_compat130_std_tuple_x_double_double_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat130(std::tuple_x<double, double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0003_compat130_std_tuple_x_double_double_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0003_compat130_std_tuple_x_double_double_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0003_compat130_std_tuple_x_double_double_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<double, double, double>",
          "h2dts_compat_tuple_0003_compat130_std_tuple_x_double_double_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0003_compat130_std_tuple_x_double_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0004_COMPAT130_STD_TUPLE_DOUBLE_DOUBLE_D_4B310A
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0004_COMPAT130_STD_TUPLE_DOUBLE_DOUBLE_D_4B310A
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<double, double, double_130>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0004_compat130_std_tuple_double_double_d_4b310a', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat130(std::tuple<double, double, double_130> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0004_compat130_std_tuple_double_double_d_4b310a parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0004_compat130_std_tuple_double_double_d_4b310a must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0004_compat130_std_tuple_double_double_d_4b310a must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<double, double, double_130>",
          "h2dts_compat_tuple_0004_compat130_std_tuple_double_double_d_4b310a param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0004_compat130_std_tuple_double_double_d_4b310a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0005_COMPAT130_STD_TUPLE_DOUBLE_DOUBLE_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0005_COMPAT130_STD_TUPLE_DOUBLE_DOUBLE_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<double, double, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0005_compat130_std_tuple_double_double_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat130(std:tuple<double, double, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0005_compat130_std_tuple_double_double_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0005_compat130_std_tuple_double_double_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0005_compat130_std_tuple_double_double_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<double, double, double>",
          "h2dts_compat_tuple_0005_compat130_std_tuple_double_double_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0005_compat130_std_tuple_double_double_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0006_COMPAT131_STD_TUPLE_CHAR_SHORT_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0006_COMPAT131_STD_TUPLE_CHAR_SHORT_ITN
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<char, short, itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0006_compat131_std_tuple_char_short_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat131(std::tuple<char, short, itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0006_compat131_std_tuple_char_short_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0006_compat131_std_tuple_char_short_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0006_compat131_std_tuple_char_short_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<char, short, itn>",
          "h2dts_compat_tuple_0006_compat131_std_tuple_char_short_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0006_compat131_std_tuple_char_short_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0007_COMPAT131_STD_TUPLE_DOUBL_CHAR_SHORT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0007_COMPAT131_STD_TUPLE_DOUBL_CHAR_SHORT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_doubl<char, short, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0007_compat131_std_tuple_doubl_char_short_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat131(std::tuple_doubl<char, short, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0007_compat131_std_tuple_doubl_char_short_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0007_compat131_std_tuple_doubl_char_short_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0007_compat131_std_tuple_doubl_char_short_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_doubl<char, short, int>",
          "h2dts_compat_tuple_0007_compat131_std_tuple_doubl_char_short_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0007_compat131_std_tuple_doubl_char_short_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0008_COMPAT131_STD_TUPLE_BOOOL_CHAR_SHORT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0008_COMPAT131_STD_TUPLE_BOOOL_CHAR_SHORT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_boool<char, short, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0008_compat131_std_tuple_boool_char_short_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat131(std::tuple_boool<char, short, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0008_compat131_std_tuple_boool_char_short_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0008_compat131_std_tuple_boool_char_short_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0008_compat131_std_tuple_boool_char_short_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_boool<char, short, int>",
          "h2dts_compat_tuple_0008_compat131_std_tuple_boool_char_short_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0008_compat131_std_tuple_boool_char_short_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0009_COMPAT131_STD_TUPLE_FLOT_CHAR_SHORT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0009_COMPAT131_STD_TUPLE_FLOT_CHAR_SHORT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_flot<char, short, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0009_compat131_std_tuple_flot_char_short_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat131(std::tuple_flot<char, short, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0009_compat131_std_tuple_flot_char_short_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0009_compat131_std_tuple_flot_char_short_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0009_compat131_std_tuple_flot_char_short_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_flot<char, short, int>",
          "h2dts_compat_tuple_0009_compat131_std_tuple_flot_char_short_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0009_compat131_std_tuple_flot_char_short_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0010_COMPAT131_STD_TUPLE_LNG_CHAR_SHORT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0010_COMPAT131_STD_TUPLE_LNG_CHAR_SHORT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<char, short, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0010_compat131_std_tuple_lng_char_short_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat131(std::tuple_lng<char, short, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0010_compat131_std_tuple_lng_char_short_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0010_compat131_std_tuple_lng_char_short_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0010_compat131_std_tuple_lng_char_short_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<char, short, int>",
          "h2dts_compat_tuple_0010_compat131_std_tuple_lng_char_short_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0010_compat131_std_tuple_lng_char_short_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0011_COMPAT131_STD_TUPLE_BAD131_CHAR_SHORT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0011_COMPAT131_STD_TUPLE_BAD131_CHAR_SHORT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad131<char, short, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0011_compat131_std_tuple_bad131_char_short_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat131(std::tuple_bad131<char, short, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0011_compat131_std_tuple_bad131_char_short_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0011_compat131_std_tuple_bad131_char_short_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0011_compat131_std_tuple_bad131_char_short_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad131<char, short, int>",
          "h2dts_compat_tuple_0011_compat131_std_tuple_bad131_char_short_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0011_compat131_std_tuple_bad131_char_short_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0012_COMPAT131_STD_TUPLE_X_CHAR_SHORT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0012_COMPAT131_STD_TUPLE_X_CHAR_SHORT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<char, short, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0012_compat131_std_tuple_x_char_short_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat131(std::tuple_x<char, short, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0012_compat131_std_tuple_x_char_short_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0012_compat131_std_tuple_x_char_short_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0012_compat131_std_tuple_x_char_short_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<char, short, int>",
          "h2dts_compat_tuple_0012_compat131_std_tuple_x_char_short_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0012_compat131_std_tuple_x_char_short_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0013_COMPAT131_STD_TUPLE_CHAR_SHORT_INT_131
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0013_COMPAT131_STD_TUPLE_CHAR_SHORT_INT_131
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<char, short, int_131>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0013_compat131_std_tuple_char_short_int_131', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat131(std::tuple<char, short, int_131> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0013_compat131_std_tuple_char_short_int_131 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0013_compat131_std_tuple_char_short_int_131 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0013_compat131_std_tuple_char_short_int_131 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<char, short, int_131>",
          "h2dts_compat_tuple_0013_compat131_std_tuple_char_short_int_131 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0013_compat131_std_tuple_char_short_int_131 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0014_COMPAT131_STD_TUPLE_CHAR_SHORT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0014_COMPAT131_STD_TUPLE_CHAR_SHORT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<char, short, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0014_compat131_std_tuple_char_short_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat131(std:tuple<char, short, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0014_compat131_std_tuple_char_short_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0014_compat131_std_tuple_char_short_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0014_compat131_std_tuple_char_short_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<char, short, int>",
          "h2dts_compat_tuple_0014_compat131_std_tuple_char_short_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0014_compat131_std_tuple_char_short_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0015_COMPAT132_STD_TUPLE_ITN_STD_STRING_948254
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0015_COMPAT132_STD_TUPLE_ITN_STD_STRING_948254
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_itn<std::string, std::string, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0015_compat132_std_tuple_itn_std_string_948254', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(std::tuple_itn<std::string, std::string, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0015_compat132_std_tuple_itn_std_string_948254 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0015_compat132_std_tuple_itn_std_string_948254 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0015_compat132_std_tuple_itn_std_string_948254 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_itn<std::string, std::string, std::string>",
          "h2dts_compat_tuple_0015_compat132_std_tuple_itn_std_string_948254 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0015_compat132_std_tuple_itn_std_string_948254 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0016_COMPAT132_STD_TUPLE_DOUBL_STD_STRIN_072850
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0016_COMPAT132_STD_TUPLE_DOUBL_STD_STRIN_072850
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_doubl<std::string, std::string, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0016_compat132_std_tuple_doubl_std_strin_072850', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(std::tuple_doubl<std::string, std::string, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0016_compat132_std_tuple_doubl_std_strin_072850 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0016_compat132_std_tuple_doubl_std_strin_072850 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0016_compat132_std_tuple_doubl_std_strin_072850 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_doubl<std::string, std::string, std::string>",
          "h2dts_compat_tuple_0016_compat132_std_tuple_doubl_std_strin_072850 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0016_compat132_std_tuple_doubl_std_strin_072850 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0017_COMPAT132_STD_TUPLE_BOOOL_STD_STRIN_2B6EEE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0017_COMPAT132_STD_TUPLE_BOOOL_STD_STRIN_2B6EEE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_boool<std::string, std::string, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0017_compat132_std_tuple_boool_std_strin_2b6eee', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(std::tuple_boool<std::string, std::string, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0017_compat132_std_tuple_boool_std_strin_2b6eee parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0017_compat132_std_tuple_boool_std_strin_2b6eee must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0017_compat132_std_tuple_boool_std_strin_2b6eee must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_boool<std::string, std::string, std::string>",
          "h2dts_compat_tuple_0017_compat132_std_tuple_boool_std_strin_2b6eee param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0017_compat132_std_tuple_boool_std_strin_2b6eee execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0018_COMPAT132_STD_TUPLE_FLOT_STD_STRING_993E48
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0018_COMPAT132_STD_TUPLE_FLOT_STD_STRING_993E48
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_flot<std::string, std::string, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0018_compat132_std_tuple_flot_std_string_993e48', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(std::tuple_flot<std::string, std::string, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0018_compat132_std_tuple_flot_std_string_993e48 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0018_compat132_std_tuple_flot_std_string_993e48 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0018_compat132_std_tuple_flot_std_string_993e48 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_flot<std::string, std::string, std::string>",
          "h2dts_compat_tuple_0018_compat132_std_tuple_flot_std_string_993e48 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0018_compat132_std_tuple_flot_std_string_993e48 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0019_COMPAT132_STD_TUPLE_LNG_STD_STRING_3ABF88
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0019_COMPAT132_STD_TUPLE_LNG_STD_STRING_3ABF88
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<std::string, std::string, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0019_compat132_std_tuple_lng_std_string_3abf88', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(std::tuple_lng<std::string, std::string, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0019_compat132_std_tuple_lng_std_string_3abf88 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0019_compat132_std_tuple_lng_std_string_3abf88 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0019_compat132_std_tuple_lng_std_string_3abf88 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<std::string, std::string, std::string>",
          "h2dts_compat_tuple_0019_compat132_std_tuple_lng_std_string_3abf88 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0019_compat132_std_tuple_lng_std_string_3abf88 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0020_COMPAT132_STD_TUPLE_BAD132_STD_STRI_665426
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0020_COMPAT132_STD_TUPLE_BAD132_STD_STRI_665426
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad132<std::string, std::string, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0020_compat132_std_tuple_bad132_std_stri_665426', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(std::tuple_bad132<std::string, std::string, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0020_compat132_std_tuple_bad132_std_stri_665426 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0020_compat132_std_tuple_bad132_std_stri_665426 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0020_compat132_std_tuple_bad132_std_stri_665426 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad132<std::string, std::string, std::string>",
          "h2dts_compat_tuple_0020_compat132_std_tuple_bad132_std_stri_665426 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0020_compat132_std_tuple_bad132_std_stri_665426 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0021_COMPAT132_STD_TUPLE_X_STD_STRING_ST_0675A2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0021_COMPAT132_STD_TUPLE_X_STD_STRING_ST_0675A2
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<std::string, std::string, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0021_compat132_std_tuple_x_std_string_st_0675a2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(std::tuple_x<std::string, std::string, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0021_compat132_std_tuple_x_std_string_st_0675a2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0021_compat132_std_tuple_x_std_string_st_0675a2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0021_compat132_std_tuple_x_std_string_st_0675a2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<std::string, std::string, std::string>",
          "h2dts_compat_tuple_0021_compat132_std_tuple_x_std_string_st_0675a2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0021_compat132_std_tuple_x_std_string_st_0675a2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0022_COMPAT132_STD_TUPLE_STD_STRING_STD_7E38BF
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0022_COMPAT132_STD_TUPLE_STD_STRING_STD_7E38BF
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<std::string, std::string, std::string_132>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0022_compat132_std_tuple_std_string_std_7e38bf', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(std::tuple<std::string, std::string, std::string_132> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0022_compat132_std_tuple_std_string_std_7e38bf parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0022_compat132_std_tuple_std_string_std_7e38bf must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0022_compat132_std_tuple_std_string_std_7e38bf must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<std::string, std::string, std::string_132>",
          "h2dts_compat_tuple_0022_compat132_std_tuple_std_string_std_7e38bf param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0022_compat132_std_tuple_std_string_std_7e38bf execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0023_COMPAT132_STD_TUPLE_STD_STRING_STD_29FC68
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0023_COMPAT132_STD_TUPLE_STD_STRING_STD_29FC68
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<std:string, std:string, std:string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0023_compat132_std_tuple_std_string_std_29fc68', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(std:tuple<std:string, std:string, std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0023_compat132_std_tuple_std_string_std_29fc68 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0023_compat132_std_tuple_std_string_std_29fc68 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0023_compat132_std_tuple_std_string_std_29fc68 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<std:string, std:string, std:string>",
          "h2dts_compat_tuple_0023_compat132_std_tuple_std_string_std_29fc68 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0023_compat132_std_tuple_std_string_std_29fc68 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0024_COMPAT157_STD_PAIR_ITN_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0024_COMPAT157_STD_PAIR_ITN_STD_STRING
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<itn, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0024_compat157_std_pair_itn_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(std::pair<itn, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0024_compat157_std_pair_itn_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0024_compat157_std_pair_itn_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0024_compat157_std_pair_itn_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<itn, std::string>",
          "h2dts_compat_tuple_0024_compat157_std_pair_itn_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0024_compat157_std_pair_itn_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0025_COMPAT157_STD_PAIR_DOUBL_INT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0025_COMPAT157_STD_PAIR_DOUBL_INT_STD_STRING
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_doubl<int, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0025_compat157_std_pair_doubl_int_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(std::pair_doubl<int, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0025_compat157_std_pair_doubl_int_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0025_compat157_std_pair_doubl_int_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0025_compat157_std_pair_doubl_int_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_doubl<int, std::string>",
          "h2dts_compat_tuple_0025_compat157_std_pair_doubl_int_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0025_compat157_std_pair_doubl_int_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0026_COMPAT157_STD_PAIR_BOOOL_INT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0026_COMPAT157_STD_PAIR_BOOOL_INT_STD_STRING
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_boool<int, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0026_compat157_std_pair_boool_int_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(std::pair_boool<int, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0026_compat157_std_pair_boool_int_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0026_compat157_std_pair_boool_int_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0026_compat157_std_pair_boool_int_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_boool<int, std::string>",
          "h2dts_compat_tuple_0026_compat157_std_pair_boool_int_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0026_compat157_std_pair_boool_int_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0027_COMPAT157_STD_PAIR_FLOT_INT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0027_COMPAT157_STD_PAIR_FLOT_INT_STD_STRING
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_flot<int, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0027_compat157_std_pair_flot_int_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(std::pair_flot<int, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0027_compat157_std_pair_flot_int_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0027_compat157_std_pair_flot_int_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0027_compat157_std_pair_flot_int_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_flot<int, std::string>",
          "h2dts_compat_tuple_0027_compat157_std_pair_flot_int_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0027_compat157_std_pair_flot_int_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0028_COMPAT157_STD_PAIR_LNG_INT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0028_COMPAT157_STD_PAIR_LNG_INT_STD_STRING
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_lng<int, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0028_compat157_std_pair_lng_int_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(std::pair_lng<int, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0028_compat157_std_pair_lng_int_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0028_compat157_std_pair_lng_int_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0028_compat157_std_pair_lng_int_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_lng<int, std::string>",
          "h2dts_compat_tuple_0028_compat157_std_pair_lng_int_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0028_compat157_std_pair_lng_int_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0029_COMPAT157_STD_PAIR_BAD157_INT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0029_COMPAT157_STD_PAIR_BAD157_INT_STD_STRING
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_bad157<int, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0029_compat157_std_pair_bad157_int_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(std::pair_bad157<int, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0029_compat157_std_pair_bad157_int_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0029_compat157_std_pair_bad157_int_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0029_compat157_std_pair_bad157_int_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_bad157<int, std::string>",
          "h2dts_compat_tuple_0029_compat157_std_pair_bad157_int_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0029_compat157_std_pair_bad157_int_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0030_COMPAT157_STD_PAIR_X_INT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0030_COMPAT157_STD_PAIR_X_INT_STD_STRING
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_x<int, std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0030_compat157_std_pair_x_int_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(std::pair_x<int, std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0030_compat157_std_pair_x_int_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0030_compat157_std_pair_x_int_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0030_compat157_std_pair_x_int_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_x<int, std::string>",
          "h2dts_compat_tuple_0030_compat157_std_pair_x_int_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0030_compat157_std_pair_x_int_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0031_COMPAT157_STD_PAIR_INT_STD_STRING_157
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0031_COMPAT157_STD_PAIR_INT_STD_STRING_157
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<int, std::string_157>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0031_compat157_std_pair_int_std_string_157', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(std::pair<int, std::string_157> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0031_compat157_std_pair_int_std_string_157 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0031_compat157_std_pair_int_std_string_157 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0031_compat157_std_pair_int_std_string_157 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<int, std::string_157>",
          "h2dts_compat_tuple_0031_compat157_std_pair_int_std_string_157 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0031_compat157_std_pair_int_std_string_157 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0032_COMPAT157_STD_PAIR_INT_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0032_COMPAT157_STD_PAIR_INT_STD_STRING
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:pair<int, std:string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0032_compat157_std_pair_int_std_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(std:pair<int, std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0032_compat157_std_pair_int_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0032_compat157_std_pair_int_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0032_compat157_std_pair_int_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:pair<int, std:string>",
          "h2dts_compat_tuple_0032_compat157_std_pair_int_std_string param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0032_compat157_std_pair_int_std_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0033_COMPAT158_STD_TUPLE_ITN_FLOAT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0033_COMPAT158_STD_TUPLE_ITN_FLOAT_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<itn, float, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0033_compat158_std_tuple_itn_float_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(std::tuple<itn, float, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0033_compat158_std_tuple_itn_float_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0033_compat158_std_tuple_itn_float_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0033_compat158_std_tuple_itn_float_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<itn, float, double>",
          "h2dts_compat_tuple_0033_compat158_std_tuple_itn_float_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0033_compat158_std_tuple_itn_float_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0034_COMPAT158_STD_TUPLE_INT_FLOAT_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0034_COMPAT158_STD_TUPLE_INT_FLOAT_DOUBL
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<int, float, doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0034_compat158_std_tuple_int_float_doubl', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(std::tuple<int, float, doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0034_compat158_std_tuple_int_float_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0034_compat158_std_tuple_int_float_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0034_compat158_std_tuple_int_float_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<int, float, doubl>",
          "h2dts_compat_tuple_0034_compat158_std_tuple_int_float_doubl param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0034_compat158_std_tuple_int_float_doubl execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0035_COMPAT158_STD_TUPLE_BOOOL_INT_FLOAT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0035_COMPAT158_STD_TUPLE_BOOOL_INT_FLOAT_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_boool<int, float, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0035_compat158_std_tuple_boool_int_float_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(std::tuple_boool<int, float, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0035_compat158_std_tuple_boool_int_float_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0035_compat158_std_tuple_boool_int_float_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0035_compat158_std_tuple_boool_int_float_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_boool<int, float, double>",
          "h2dts_compat_tuple_0035_compat158_std_tuple_boool_int_float_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0035_compat158_std_tuple_boool_int_float_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0036_COMPAT158_STD_TUPLE_INT_FLOT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0036_COMPAT158_STD_TUPLE_INT_FLOT_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<int, flot, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0036_compat158_std_tuple_int_flot_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(std::tuple<int, flot, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0036_compat158_std_tuple_int_flot_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0036_compat158_std_tuple_int_flot_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0036_compat158_std_tuple_int_flot_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<int, flot, double>",
          "h2dts_compat_tuple_0036_compat158_std_tuple_int_flot_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0036_compat158_std_tuple_int_flot_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0037_COMPAT158_STD_TUPLE_LNG_INT_FLOAT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0037_COMPAT158_STD_TUPLE_LNG_INT_FLOAT_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<int, float, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0037_compat158_std_tuple_lng_int_float_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(std::tuple_lng<int, float, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0037_compat158_std_tuple_lng_int_float_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0037_compat158_std_tuple_lng_int_float_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0037_compat158_std_tuple_lng_int_float_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<int, float, double>",
          "h2dts_compat_tuple_0037_compat158_std_tuple_lng_int_float_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0037_compat158_std_tuple_lng_int_float_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0038_COMPAT158_STD_TUPLE_BAD158_INT_FLOA_028473
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0038_COMPAT158_STD_TUPLE_BAD158_INT_FLOA_028473
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad158<int, float, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0038_compat158_std_tuple_bad158_int_floa_028473', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(std::tuple_bad158<int, float, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0038_compat158_std_tuple_bad158_int_floa_028473 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0038_compat158_std_tuple_bad158_int_floa_028473 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0038_compat158_std_tuple_bad158_int_floa_028473 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad158<int, float, double>",
          "h2dts_compat_tuple_0038_compat158_std_tuple_bad158_int_floa_028473 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0038_compat158_std_tuple_bad158_int_floa_028473 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0039_COMPAT158_STD_TUPLE_X_INT_FLOAT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0039_COMPAT158_STD_TUPLE_X_INT_FLOAT_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<int, float, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0039_compat158_std_tuple_x_int_float_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(std::tuple_x<int, float, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0039_compat158_std_tuple_x_int_float_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0039_compat158_std_tuple_x_int_float_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0039_compat158_std_tuple_x_int_float_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<int, float, double>",
          "h2dts_compat_tuple_0039_compat158_std_tuple_x_int_float_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0039_compat158_std_tuple_x_int_float_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0040_COMPAT158_STD_TUPLE_INT_FLOAT_DOUBLE_158
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0040_COMPAT158_STD_TUPLE_INT_FLOAT_DOUBLE_158
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<int, float, double_158>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0040_compat158_std_tuple_int_float_double_158', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(std::tuple<int, float, double_158> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0040_compat158_std_tuple_int_float_double_158 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0040_compat158_std_tuple_int_float_double_158 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0040_compat158_std_tuple_int_float_double_158 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<int, float, double_158>",
          "h2dts_compat_tuple_0040_compat158_std_tuple_int_float_double_158 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0040_compat158_std_tuple_int_float_double_158 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0041_COMPAT158_STD_TUPLE_INT_FLOAT_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0041_COMPAT158_STD_TUPLE_INT_FLOAT_DOUBLE
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<int, float, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0041_compat158_std_tuple_int_float_double', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(std:tuple<int, float, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0041_compat158_std_tuple_int_float_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0041_compat158_std_tuple_int_float_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0041_compat158_std_tuple_int_float_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<int, float, double>",
          "h2dts_compat_tuple_0041_compat158_std_tuple_int_float_double param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0041_compat158_std_tuple_int_float_double execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0042_COMPAT173_STD_PAIR_ITN_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0042_COMPAT173_STD_PAIR_ITN_ITN
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<itn, itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0042_compat173_std_pair_itn_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std::pair<itn, itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0042_compat173_std_pair_itn_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0042_compat173_std_pair_itn_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0042_compat173_std_pair_itn_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<itn, itn>",
          "h2dts_compat_tuple_0042_compat173_std_pair_itn_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0042_compat173_std_pair_itn_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0043_COMPAT173_STD_PAIR_DOUBL_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0043_COMPAT173_STD_PAIR_DOUBL_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_doubl<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0043_compat173_std_pair_doubl_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std::pair_doubl<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0043_compat173_std_pair_doubl_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0043_compat173_std_pair_doubl_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0043_compat173_std_pair_doubl_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_doubl<int, int>",
          "h2dts_compat_tuple_0043_compat173_std_pair_doubl_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0043_compat173_std_pair_doubl_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0044_COMPAT173_STD_PAIR_BOOOL_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0044_COMPAT173_STD_PAIR_BOOOL_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_boool<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0044_compat173_std_pair_boool_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std::pair_boool<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0044_compat173_std_pair_boool_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0044_compat173_std_pair_boool_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0044_compat173_std_pair_boool_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_boool<int, int>",
          "h2dts_compat_tuple_0044_compat173_std_pair_boool_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0044_compat173_std_pair_boool_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0045_COMPAT173_STD_PAIR_FLOT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0045_COMPAT173_STD_PAIR_FLOT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_flot<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0045_compat173_std_pair_flot_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std::pair_flot<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0045_compat173_std_pair_flot_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0045_compat173_std_pair_flot_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0045_compat173_std_pair_flot_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_flot<int, int>",
          "h2dts_compat_tuple_0045_compat173_std_pair_flot_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0045_compat173_std_pair_flot_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0046_COMPAT173_STD_PAIR_LNG_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0046_COMPAT173_STD_PAIR_LNG_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_lng<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0046_compat173_std_pair_lng_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std::pair_lng<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0046_compat173_std_pair_lng_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0046_compat173_std_pair_lng_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0046_compat173_std_pair_lng_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_lng<int, int>",
          "h2dts_compat_tuple_0046_compat173_std_pair_lng_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0046_compat173_std_pair_lng_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0047_COMPAT173_STD_PAIR_BAD173_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0047_COMPAT173_STD_PAIR_BAD173_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_bad173<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0047_compat173_std_pair_bad173_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std::pair_bad173<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0047_compat173_std_pair_bad173_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0047_compat173_std_pair_bad173_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0047_compat173_std_pair_bad173_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_bad173<int, int>",
          "h2dts_compat_tuple_0047_compat173_std_pair_bad173_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0047_compat173_std_pair_bad173_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0048_COMPAT173_STD_PAIR_X_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0048_COMPAT173_STD_PAIR_X_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_x<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0048_compat173_std_pair_x_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std::pair_x<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0048_compat173_std_pair_x_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0048_compat173_std_pair_x_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0048_compat173_std_pair_x_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_x<int, int>",
          "h2dts_compat_tuple_0048_compat173_std_pair_x_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0048_compat173_std_pair_x_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0049_COMPAT173_STD_PAIR_INT_INT_173
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0049_COMPAT173_STD_PAIR_INT_INT_173
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<int, int_173>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0049_compat173_std_pair_int_int_173', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std::pair<int, int_173> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0049_compat173_std_pair_int_int_173 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0049_compat173_std_pair_int_int_173 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0049_compat173_std_pair_int_int_173 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<int, int_173>",
          "h2dts_compat_tuple_0049_compat173_std_pair_int_int_173 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0049_compat173_std_pair_int_int_173 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0050_COMPAT173_STD_PAIR_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0050_COMPAT173_STD_PAIR_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:pair<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0050_compat173_std_pair_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std:pair<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0050_compat173_std_pair_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0050_compat173_std_pair_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0050_compat173_std_pair_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:pair<int, int>",
          "h2dts_compat_tuple_0050_compat173_std_pair_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0050_compat173_std_pair_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0051_COMPAT174_STD_TUPLE_ITN_ITN_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0051_COMPAT174_STD_TUPLE_ITN_ITN_ITN
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<itn, itn, itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0051_compat174_std_tuple_itn_itn_itn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(std::tuple<itn, itn, itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0051_compat174_std_tuple_itn_itn_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0051_compat174_std_tuple_itn_itn_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0051_compat174_std_tuple_itn_itn_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<itn, itn, itn>",
          "h2dts_compat_tuple_0051_compat174_std_tuple_itn_itn_itn param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0051_compat174_std_tuple_itn_itn_itn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0052_COMPAT174_STD_TUPLE_DOUBL_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0052_COMPAT174_STD_TUPLE_DOUBL_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_doubl<int, int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0052_compat174_std_tuple_doubl_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(std::tuple_doubl<int, int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0052_compat174_std_tuple_doubl_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0052_compat174_std_tuple_doubl_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0052_compat174_std_tuple_doubl_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_doubl<int, int, int>",
          "h2dts_compat_tuple_0052_compat174_std_tuple_doubl_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0052_compat174_std_tuple_doubl_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0053_COMPAT174_STD_TUPLE_BOOOL_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0053_COMPAT174_STD_TUPLE_BOOOL_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_boool<int, int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0053_compat174_std_tuple_boool_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(std::tuple_boool<int, int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0053_compat174_std_tuple_boool_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0053_compat174_std_tuple_boool_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0053_compat174_std_tuple_boool_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_boool<int, int, int>",
          "h2dts_compat_tuple_0053_compat174_std_tuple_boool_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0053_compat174_std_tuple_boool_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0054_COMPAT174_STD_TUPLE_FLOT_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0054_COMPAT174_STD_TUPLE_FLOT_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_flot<int, int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0054_compat174_std_tuple_flot_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(std::tuple_flot<int, int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0054_compat174_std_tuple_flot_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0054_compat174_std_tuple_flot_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0054_compat174_std_tuple_flot_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_flot<int, int, int>",
          "h2dts_compat_tuple_0054_compat174_std_tuple_flot_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0054_compat174_std_tuple_flot_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0055_COMPAT174_STD_TUPLE_LNG_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0055_COMPAT174_STD_TUPLE_LNG_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_lng<int, int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0055_compat174_std_tuple_lng_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(std::tuple_lng<int, int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0055_compat174_std_tuple_lng_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0055_compat174_std_tuple_lng_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0055_compat174_std_tuple_lng_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_lng<int, int, int>",
          "h2dts_compat_tuple_0055_compat174_std_tuple_lng_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0055_compat174_std_tuple_lng_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0056_COMPAT174_STD_TUPLE_BAD174_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0056_COMPAT174_STD_TUPLE_BAD174_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_bad174<int, int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0056_compat174_std_tuple_bad174_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(std::tuple_bad174<int, int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0056_compat174_std_tuple_bad174_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0056_compat174_std_tuple_bad174_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0056_compat174_std_tuple_bad174_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_bad174<int, int, int>",
          "h2dts_compat_tuple_0056_compat174_std_tuple_bad174_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0056_compat174_std_tuple_bad174_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0057_COMPAT174_STD_TUPLE_X_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0057_COMPAT174_STD_TUPLE_X_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple_x<int, int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0057_compat174_std_tuple_x_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(std::tuple_x<int, int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0057_compat174_std_tuple_x_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0057_compat174_std_tuple_x_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0057_compat174_std_tuple_x_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple_x<int, int, int>",
          "h2dts_compat_tuple_0057_compat174_std_tuple_x_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0057_compat174_std_tuple_x_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0058_COMPAT174_STD_TUPLE_INT_INT_INT_174
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0058_COMPAT174_STD_TUPLE_INT_INT_INT_174
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::tuple<int, int, int_174>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0058_compat174_std_tuple_int_int_int_174', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(std::tuple<int, int, int_174> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0058_compat174_std_tuple_int_int_int_174 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0058_compat174_std_tuple_int_int_int_174 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0058_compat174_std_tuple_int_int_int_174 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::tuple<int, int, int_174>",
          "h2dts_compat_tuple_0058_compat174_std_tuple_int_int_int_174 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0058_compat174_std_tuple_int_int_int_174 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0059_COMPAT174_STD_TUPLE_INT_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0059_COMPAT174_STD_TUPLE_INT_INT_INT
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:tuple<int, int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0059_compat174_std_tuple_int_int_int', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(std:tuple<int, int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0059_compat174_std_tuple_int_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0059_compat174_std_tuple_int_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0059_compat174_std_tuple_int_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:tuple<int, int, int>",
          "h2dts_compat_tuple_0059_compat174_std_tuple_int_int_int param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0059_compat174_std_tuple_int_int_int execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0060_COMPAT231_STD_PAIR_ITN_ITN_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0060_COMPAT231_STD_PAIR_ITN_ITN_M1
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair<itn,itn> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0060_compat231_std_pair_itn_itn_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(std::pair<itn,itn> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0060_compat231_std_pair_itn_itn_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0060_compat231_std_pair_itn_itn_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0060_compat231_std_pair_itn_itn_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair<itn,itn> m1",
          "h2dts_compat_tuple_0060_compat231_std_pair_itn_itn_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0060_compat231_std_pair_itn_itn_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0061_COMPAT231_STD_PAIR_DOUBL_INT_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0061_COMPAT231_STD_PAIR_DOUBL_INT_INT_M1
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_doubl<int,int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0061_compat231_std_pair_doubl_int_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(std::pair_doubl<int,int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0061_compat231_std_pair_doubl_int_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0061_compat231_std_pair_doubl_int_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0061_compat231_std_pair_doubl_int_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_doubl<int,int> m1",
          "h2dts_compat_tuple_0061_compat231_std_pair_doubl_int_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0061_compat231_std_pair_doubl_int_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0062_COMPAT231_STD_PAIR_BOOOL_INT_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0062_COMPAT231_STD_PAIR_BOOOL_INT_INT_M1
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_boool<int,int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0062_compat231_std_pair_boool_int_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(std::pair_boool<int,int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0062_compat231_std_pair_boool_int_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0062_compat231_std_pair_boool_int_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0062_compat231_std_pair_boool_int_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_boool<int,int> m1",
          "h2dts_compat_tuple_0062_compat231_std_pair_boool_int_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0062_compat231_std_pair_boool_int_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0063_COMPAT231_STD_PAIR_FLOT_INT_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0063_COMPAT231_STD_PAIR_FLOT_INT_INT_M1
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_flot<int,int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0063_compat231_std_pair_flot_int_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(std::pair_flot<int,int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0063_compat231_std_pair_flot_int_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0063_compat231_std_pair_flot_int_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0063_compat231_std_pair_flot_int_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_flot<int,int> m1",
          "h2dts_compat_tuple_0063_compat231_std_pair_flot_int_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0063_compat231_std_pair_flot_int_int_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_TUPLE_0064_COMPAT231_STD_PAIR_LNG_INT_INT_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_TUPLE_0064_COMPAT231_STD_PAIR_LNG_INT_INT_M1
   * @tc.desc   Stability compat h2dts/tuple: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::pair_lng<int,int> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_tuple_0064_compat231_std_pair_lng_int_int_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(std::pair_lng<int,int> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0064_compat231_std_pair_lng_int_int_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_tuple_0064_compat231_std_pair_lng_int_int_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_tuple_0064_compat231_std_pair_lng_int_int_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::pair_lng<int,int> m1",
          "h2dts_compat_tuple_0064_compat231_std_pair_lng_int_int_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_tuple_0064_compat231_std_pair_lng_int_int_m1 execution error: ${err}`);
    }
  });
});
