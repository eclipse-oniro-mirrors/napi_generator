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
import { transTskey2Ckey } from '../../../gen/gendts';
import * as parsec from '../../../parse/parsec';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTS_COMPAT_ARRAY_Part13', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0071_COMPAT129_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0071_COMPAT129_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0071_compat129_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0071_compat129_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0071_compat129_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0071_compat129_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0071_compat129_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0071_compat129_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0072_COMPAT129_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0072_COMPAT129_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0072_compat129_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0072_compat129_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0072_compat129_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0072_compat129_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0072_compat129_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0072_compat129_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0073_COMPAT129_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0073_COMPAT129_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0073_compat129_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0073_compat129_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0073_compat129_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0073_compat129_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0073_compat129_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0073_compat129_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0074_COMPAT129_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0074_COMPAT129_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0074_compat129_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0074_compat129_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0074_compat129_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0074_compat129_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0074_compat129_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0074_compat129_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0075_COMPAT129_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0075_COMPAT129_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0075_compat129_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0075_compat129_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0075_compat129_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0075_compat129_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0075_compat129_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0075_compat129_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0076_NS_COMPAT129_STD_VALARRAY_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0076_NS_COMPAT129_STD_VALARRAY_FLOAT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::valarray<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0076_ns_compat129_std_valarray_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat129(std::valarray<float> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0076_ns_compat129_std_valarray_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0076_ns_compat129_std_valarray_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0076_ns_compat129_std_valarray_float must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0076_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0076_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0076_ns_compat129_std_valarray_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0077_COMPAT129_BAD_TYPE_129
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0077_COMPAT129_BAD_TYPE_129
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_129; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0077_compat129_bad_type_129', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat129(bad_type_129 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0077_compat129_bad_type_129 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0077_compat129_bad_type_129 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0077_compat129_bad_type_129 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_129",
          "h2dts_compat_array_0077_compat129_bad_type_129 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0077_compat129_bad_type_129 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0001_COMPAT132_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0001_COMPAT132_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0001_compat132_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0001_compat132_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0001_compat132_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0001_compat132_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0001_compat132_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0001_compat132_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0002_COMPAT132_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0002_COMPAT132_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0002_compat132_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0002_compat132_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0002_compat132_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0002_compat132_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0002_compat132_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0002_compat132_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0003_COMPAT132_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0003_COMPAT132_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0003_compat132_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0003_compat132_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0003_compat132_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0003_compat132_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0003_compat132_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0003_compat132_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0004_COMPAT132_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0004_COMPAT132_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0004_compat132_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0004_compat132_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0004_compat132_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0004_compat132_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0004_compat132_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0004_compat132_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0005_NS_COMPAT132_STD_VALARRAY_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0005_NS_COMPAT132_STD_VALARRAY_UINT8_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::valarray<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0005_ns_compat132_std_valarray_uint8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat132(std::valarray<uint8_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0005_ns_compat132_std_valarray_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0005_ns_compat132_std_valarray_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0005_ns_compat132_std_valarray_uint8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0005_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0005_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0005_ns_compat132_std_valarray_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0006_COMPAT132_BAD_TYPE_132
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0006_COMPAT132_BAD_TYPE_132
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_132; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0006_compat132_bad_type_132', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(bad_type_132 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0006_compat132_bad_type_132 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0006_compat132_bad_type_132 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0006_compat132_bad_type_132 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_132",
          "h2dts_compat_array_0006_compat132_bad_type_132 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0006_compat132_bad_type_132 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0007_COMPAT132_STD_VALARRAY_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0007_COMPAT132_STD_VALARRAY_UINT8_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0007_compat132_std_valarray_uint8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(std::valarray<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0007_compat132_std_valarray_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0007_compat132_std_valarray_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0007_compat132_std_valarray_uint8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0007_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0007_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0007_compat132_std_valarray_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0008_E132
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0008_E132
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E132; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0008_e132', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E132 { A, B }; void f(E132 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0008_e132 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0008_e132 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0008_e132 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0008_e132 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0009_COMPAT132_STD_VALARRAY_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0009_COMPAT132_STD_VALARRAY_UINT8_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:valarray<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0009_compat132_std_valarray_uint8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat132(std:valarray<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0009_compat132_std_valarray_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0009_compat132_std_valarray_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0009_compat132_std_valarray_uint8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:valarray<uint8_t>",
          "h2dts_compat_array_0009_compat132_std_valarray_uint8_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0009_compat132_std_valarray_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0010_COMPAT133_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0010_COMPAT133_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0010_compat133_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0010_compat133_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0010_compat133_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0010_compat133_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0010_compat133_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0010_compat133_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0011_COMPAT133_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0011_COMPAT133_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0011_compat133_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0011_compat133_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0011_compat133_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0011_compat133_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0011_compat133_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0011_compat133_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0012_COMPAT133_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0012_COMPAT133_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0012_compat133_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0012_compat133_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0012_compat133_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0012_compat133_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0012_compat133_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0012_compat133_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0013_COMPAT133_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0013_COMPAT133_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0013_compat133_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0013_compat133_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0013_compat133_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0013_compat133_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0013_compat133_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0013_compat133_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0014_COMPAT133_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0014_COMPAT133_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0014_compat133_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0014_compat133_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0014_compat133_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0014_compat133_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0014_compat133_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0014_compat133_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0015_NS_COMPAT133_STD_VALARRAY_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0015_NS_COMPAT133_STD_VALARRAY_UINT16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::valarray<uint16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0015_ns_compat133_std_valarray_uint16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat133(std::valarray<uint16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0015_ns_compat133_std_valarray_uint16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0015_ns_compat133_std_valarray_uint16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0015_ns_compat133_std_valarray_uint16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0015_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0015_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0015_ns_compat133_std_valarray_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0016_COMPAT133_BAD_TYPE_133
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0016_COMPAT133_BAD_TYPE_133
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_133; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0016_compat133_bad_type_133', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(bad_type_133 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0016_compat133_bad_type_133 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0016_compat133_bad_type_133 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0016_compat133_bad_type_133 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_133",
          "h2dts_compat_array_0016_compat133_bad_type_133 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0016_compat133_bad_type_133 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0017_COMPAT133_STD_VALARRAY_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0017_COMPAT133_STD_VALARRAY_UINT16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<uint16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0017_compat133_std_valarray_uint16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(std::valarray<uint16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0017_compat133_std_valarray_uint16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0017_compat133_std_valarray_uint16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0017_compat133_std_valarray_uint16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0017_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0017_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0017_compat133_std_valarray_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0018_E133
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0018_E133
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E133; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0018_e133', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E133 { A, B }; void f(E133 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0018_e133 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0018_e133 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0018_e133 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0018_e133 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0019_COMPAT133_STD_VALARRAY_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0019_COMPAT133_STD_VALARRAY_UINT16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:valarray<uint16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0019_compat133_std_valarray_uint16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat133(std:valarray<uint16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0019_compat133_std_valarray_uint16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0019_compat133_std_valarray_uint16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0019_compat133_std_valarray_uint16_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:valarray<uint16_t>",
          "h2dts_compat_array_0019_compat133_std_valarray_uint16_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0019_compat133_std_valarray_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0020_COMPAT134_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0020_COMPAT134_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0020_compat134_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0020_compat134_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0020_compat134_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0020_compat134_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0020_compat134_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0020_compat134_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0021_COMPAT134_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0021_COMPAT134_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0021_compat134_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0021_compat134_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0021_compat134_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0021_compat134_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0021_compat134_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0021_compat134_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0022_COMPAT134_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0022_COMPAT134_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0022_compat134_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0022_compat134_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0022_compat134_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0022_compat134_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0022_compat134_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0022_compat134_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0023_COMPAT134_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0023_COMPAT134_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0023_compat134_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0023_compat134_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0023_compat134_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0023_compat134_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0023_compat134_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0023_compat134_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0024_COMPAT134_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0024_COMPAT134_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0024_compat134_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0024_compat134_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0024_compat134_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0024_compat134_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0024_compat134_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0024_compat134_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0025_NS_COMPAT134_STD_VALARRAY_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0025_NS_COMPAT134_STD_VALARRAY_UINT32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::valarray<uint32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0025_ns_compat134_std_valarray_uint32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat134(std::valarray<uint32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0025_ns_compat134_std_valarray_uint32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0025_ns_compat134_std_valarray_uint32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0025_ns_compat134_std_valarray_uint32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0025_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0025_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0025_ns_compat134_std_valarray_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0026_COMPAT134_BAD_TYPE_134
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0026_COMPAT134_BAD_TYPE_134
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_134; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0026_compat134_bad_type_134', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(bad_type_134 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0026_compat134_bad_type_134 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0026_compat134_bad_type_134 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0026_compat134_bad_type_134 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_134",
          "h2dts_compat_array_0026_compat134_bad_type_134 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0026_compat134_bad_type_134 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0027_COMPAT134_STD_VALARRAY_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0027_COMPAT134_STD_VALARRAY_UINT32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<uint32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0027_compat134_std_valarray_uint32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(std::valarray<uint32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0027_compat134_std_valarray_uint32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0027_compat134_std_valarray_uint32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0027_compat134_std_valarray_uint32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0027_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0027_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0027_compat134_std_valarray_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0028_E134
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0028_E134
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E134; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0028_e134', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E134 { A, B }; void f(E134 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0028_e134 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0028_e134 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0028_e134 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0028_e134 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0029_COMPAT134_STD_VALARRAY_UINT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0029_COMPAT134_STD_VALARRAY_UINT32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:valarray<uint32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0029_compat134_std_valarray_uint32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat134(std:valarray<uint32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0029_compat134_std_valarray_uint32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0029_compat134_std_valarray_uint32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0029_compat134_std_valarray_uint32_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:valarray<uint32_t>",
          "h2dts_compat_array_0029_compat134_std_valarray_uint32_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0029_compat134_std_valarray_uint32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0030_COMPAT135_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0030_COMPAT135_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0030_compat135_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0030_compat135_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0030_compat135_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0030_compat135_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0030_compat135_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0030_compat135_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0031_COMPAT135_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0031_COMPAT135_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0031_compat135_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0031_compat135_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0031_compat135_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0031_compat135_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0031_compat135_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0031_compat135_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0032_COMPAT135_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0032_COMPAT135_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0032_compat135_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0032_compat135_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0032_compat135_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0032_compat135_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0032_compat135_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0032_compat135_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0033_COMPAT135_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0033_COMPAT135_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0033_compat135_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0033_compat135_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0033_compat135_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0033_compat135_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0033_compat135_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0033_compat135_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0034_COMPAT135_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0034_COMPAT135_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0034_compat135_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0034_compat135_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0034_compat135_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0034_compat135_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0034_compat135_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0034_compat135_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0035_NS_COMPAT135_STD_VALARRAY_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0035_NS_COMPAT135_STD_VALARRAY_UINT64_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::valarray<uint64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0035_ns_compat135_std_valarray_uint64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat135(std::valarray<uint64_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0035_ns_compat135_std_valarray_uint64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0035_ns_compat135_std_valarray_uint64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0035_ns_compat135_std_valarray_uint64_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0035_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0035_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0035_ns_compat135_std_valarray_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0036_COMPAT135_BAD_TYPE_135
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0036_COMPAT135_BAD_TYPE_135
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_135; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0036_compat135_bad_type_135', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(bad_type_135 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0036_compat135_bad_type_135 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0036_compat135_bad_type_135 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0036_compat135_bad_type_135 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_135",
          "h2dts_compat_array_0036_compat135_bad_type_135 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0036_compat135_bad_type_135 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0037_COMPAT135_STD_VALARRAY_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0037_COMPAT135_STD_VALARRAY_UINT64_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<uint64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0037_compat135_std_valarray_uint64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(std::valarray<uint64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0037_compat135_std_valarray_uint64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0037_compat135_std_valarray_uint64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0037_compat135_std_valarray_uint64_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0037_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0037_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0037_compat135_std_valarray_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0038_E135
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0038_E135
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E135; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0038_e135', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E135 { A, B }; void f(E135 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0038_e135 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0038_e135 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0038_e135 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0038_e135 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0039_COMPAT135_STD_VALARRAY_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0039_COMPAT135_STD_VALARRAY_UINT64_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:valarray<uint64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0039_compat135_std_valarray_uint64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat135(std:valarray<uint64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0039_compat135_std_valarray_uint64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0039_compat135_std_valarray_uint64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0039_compat135_std_valarray_uint64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:valarray<uint64_t>",
          "h2dts_compat_array_0039_compat135_std_valarray_uint64_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0039_compat135_std_valarray_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0040_COMPAT136_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0040_COMPAT136_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0040_compat136_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0040_compat136_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0040_compat136_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0040_compat136_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0040_compat136_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0040_compat136_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0041_COMPAT136_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0041_COMPAT136_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0041_compat136_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0041_compat136_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0041_compat136_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0041_compat136_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0041_compat136_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0041_compat136_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0042_COMPAT136_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0042_COMPAT136_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0042_compat136_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0042_compat136_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0042_compat136_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0042_compat136_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0042_compat136_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0042_compat136_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0043_COMPAT136_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0043_COMPAT136_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0043_compat136_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0043_compat136_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0043_compat136_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0043_compat136_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0043_compat136_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0043_compat136_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0044_COMPAT136_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0044_COMPAT136_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0044_compat136_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0044_compat136_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0044_compat136_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0044_compat136_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0044_compat136_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0044_compat136_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0045_NS_COMPAT136_STD_VALARRAY_INT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0045_NS_COMPAT136_STD_VALARRAY_INT8_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::valarray<int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0045_ns_compat136_std_valarray_int8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat136(std::valarray<int8_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0045_ns_compat136_std_valarray_int8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0045_ns_compat136_std_valarray_int8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0045_ns_compat136_std_valarray_int8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0045_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0045_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0045_ns_compat136_std_valarray_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0046_COMPAT136_BAD_TYPE_136
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0046_COMPAT136_BAD_TYPE_136
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_136; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0046_compat136_bad_type_136', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(bad_type_136 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0046_compat136_bad_type_136 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0046_compat136_bad_type_136 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0046_compat136_bad_type_136 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_136",
          "h2dts_compat_array_0046_compat136_bad_type_136 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0046_compat136_bad_type_136 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0047_COMPAT136_STD_VALARRAY_INT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0047_COMPAT136_STD_VALARRAY_INT8_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0047_compat136_std_valarray_int8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(std::valarray<int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0047_compat136_std_valarray_int8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0047_compat136_std_valarray_int8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0047_compat136_std_valarray_int8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0047_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0047_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0047_compat136_std_valarray_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0048_E136
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0048_E136
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E136; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0048_e136', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E136 { A, B }; void f(E136 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0048_e136 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0048_e136 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0048_e136 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0048_e136 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0049_COMPAT136_STD_VALARRAY_INT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0049_COMPAT136_STD_VALARRAY_INT8_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:valarray<int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0049_compat136_std_valarray_int8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat136(std:valarray<int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0049_compat136_std_valarray_int8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0049_compat136_std_valarray_int8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0049_compat136_std_valarray_int8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:valarray<int8_t>",
          "h2dts_compat_array_0049_compat136_std_valarray_int8_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0049_compat136_std_valarray_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0050_COMPAT137_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0050_COMPAT137_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0050_compat137_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0050_compat137_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0050_compat137_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0050_compat137_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0050_compat137_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0050_compat137_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0051_COMPAT137_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0051_COMPAT137_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0051_compat137_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0051_compat137_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0051_compat137_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0051_compat137_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0051_compat137_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0051_compat137_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0052_COMPAT137_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0052_COMPAT137_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0052_compat137_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0052_compat137_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0052_compat137_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0052_compat137_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0052_compat137_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0052_compat137_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0053_COMPAT137_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0053_COMPAT137_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0053_compat137_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0053_compat137_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0053_compat137_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0053_compat137_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0053_compat137_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0053_compat137_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0054_COMPAT137_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0054_COMPAT137_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0054_compat137_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0054_compat137_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0054_compat137_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0054_compat137_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0054_compat137_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0054_compat137_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0055_NS_COMPAT137_STD_VALARRAY_INT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0055_NS_COMPAT137_STD_VALARRAY_INT16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::valarray<int16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0055_ns_compat137_std_valarray_int16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat137(std::valarray<int16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0055_ns_compat137_std_valarray_int16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0055_ns_compat137_std_valarray_int16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0055_ns_compat137_std_valarray_int16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0055_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0055_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0055_ns_compat137_std_valarray_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0056_COMPAT137_BAD_TYPE_137
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0056_COMPAT137_BAD_TYPE_137
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_137; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0056_compat137_bad_type_137', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(bad_type_137 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0056_compat137_bad_type_137 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0056_compat137_bad_type_137 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0056_compat137_bad_type_137 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_137",
          "h2dts_compat_array_0056_compat137_bad_type_137 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0056_compat137_bad_type_137 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0057_COMPAT137_STD_VALARRAY_INT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0057_COMPAT137_STD_VALARRAY_INT16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<int16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0057_compat137_std_valarray_int16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(std::valarray<int16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0057_compat137_std_valarray_int16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0057_compat137_std_valarray_int16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0057_compat137_std_valarray_int16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0057_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0057_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0057_compat137_std_valarray_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0058_E137
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0058_E137
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E137; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0058_e137', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E137 { A, B }; void f(E137 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0058_e137 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0058_e137 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0058_e137 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0058_e137 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0059_COMPAT137_STD_VALARRAY_INT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0059_COMPAT137_STD_VALARRAY_INT16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:valarray<int16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0059_compat137_std_valarray_int16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat137(std:valarray<int16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0059_compat137_std_valarray_int16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0059_compat137_std_valarray_int16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0059_compat137_std_valarray_int16_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:valarray<int16_t>",
          "h2dts_compat_array_0059_compat137_std_valarray_int16_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0059_compat137_std_valarray_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0060_COMPAT138_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0060_COMPAT138_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0060_compat138_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0060_compat138_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0060_compat138_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0060_compat138_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0060_compat138_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0060_compat138_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0061_COMPAT138_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0061_COMPAT138_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0061_compat138_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0061_compat138_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0061_compat138_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0061_compat138_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0061_compat138_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0061_compat138_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0062_COMPAT138_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0062_COMPAT138_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0062_compat138_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0062_compat138_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0062_compat138_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0062_compat138_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0062_compat138_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0062_compat138_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0063_COMPAT138_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0063_COMPAT138_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0063_compat138_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat138(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0063_compat138_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0063_compat138_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0063_compat138_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0063_compat138_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0063_compat138_intt execution error: ${String(err)}`);
    }
  });
});
