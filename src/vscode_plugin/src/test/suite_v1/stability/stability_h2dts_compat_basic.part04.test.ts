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

suite('Stability_H2DTS_COMPAT_BASIC_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_BASIC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0057_E229
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0057_E229
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E229; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0057_e229', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E229 { A, B }; void f(E229 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0057_e229 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0057_e229 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0057_e229 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0057_e229 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0058_COMPAT229_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0058_COMPAT229_INT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type int *; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0058_compat229_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat229(int * p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0058_compat229_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0058_compat229_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0058_compat229_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "int *", "h2dts_compat_basic_0058_compat229_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0058_compat229_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0059_COMPAT290_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0059_COMPAT290_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0059_compat290_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat290(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0059_compat290_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0059_compat290_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0059_compat290_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0059_compat290_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0059_compat290_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0060_COMPAT290_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0060_COMPAT290_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0060_compat290_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat290(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0060_compat290_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0060_compat290_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0060_compat290_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_basic_0060_compat290_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0060_compat290_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0061_COMPAT290_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0061_COMPAT290_BOOOL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0061_compat290_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat290(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0061_compat290_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0061_compat290_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0061_compat290_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_basic_0061_compat290_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0061_compat290_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0062_COMPAT290_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0062_COMPAT290_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0062_compat290_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat290(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0062_compat290_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0062_compat290_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0062_compat290_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0062_compat290_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0062_compat290_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0063_COMPAT290_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0063_COMPAT290_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0063_compat290_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat290(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0063_compat290_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0063_compat290_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0063_compat290_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0063_compat290_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0063_compat290_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0064_NS_COMPAT290_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0064_NS_COMPAT290_INT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param int$#; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0064_ns_compat290_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat290(int$# p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0064_ns_compat290_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0064_ns_compat290_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0064_ns_compat290_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0064_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0064_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0064_ns_compat290_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0065_COMPAT290_BAD_TYPE_290
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0065_COMPAT290_BAD_TYPE_290
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_290; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0065_compat290_bad_type_290', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat290(bad_type_290 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0065_compat290_bad_type_290 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0065_compat290_bad_type_290 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0065_compat290_bad_type_290 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_290",
          "h2dts_compat_basic_0065_compat290_bad_type_290 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0065_compat290_bad_type_290 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0066_COMPAT290_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0066_COMPAT290_INT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type int$#; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0066_compat290_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat290(int$# p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0066_compat290_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0066_compat290_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0066_compat290_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0066_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0066_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0066_compat290_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0067_E290
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0067_E290
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E290; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0067_e290', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E290 { A, B }; void f(E290 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0067_e290 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0067_e290 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0067_e290 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0067_e290 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0068_COMPAT290_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0068_COMPAT290_INT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type int$#; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0068_compat290_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat290(int$# p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0068_compat290_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0068_compat290_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0068_compat290_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "int", "h2dts_compat_basic_0068_compat290_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0068_compat290_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0069_COMPAT306_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0069_COMPAT306_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0069_compat306_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat306(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0069_compat306_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0069_compat306_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0069_compat306_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0069_compat306_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0069_compat306_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0070_COMPAT306_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0070_COMPAT306_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0070_compat306_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat306(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0070_compat306_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0070_compat306_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0070_compat306_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_basic_0070_compat306_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0070_compat306_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0071_COMPAT306_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0071_COMPAT306_BOOOL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0071_compat306_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat306(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0071_compat306_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0071_compat306_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0071_compat306_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_basic_0071_compat306_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0071_compat306_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0072_COMPAT306_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0072_COMPAT306_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0072_compat306_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat306(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0072_compat306_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0072_compat306_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0072_compat306_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0072_compat306_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0072_compat306_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0073_COMPAT306_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0073_COMPAT306_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0073_compat306_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat306(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0073_compat306_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0073_compat306_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0073_compat306_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0073_compat306_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0073_compat306_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0074_NS_COMPAT306_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0074_NS_COMPAT306_UNSIGNED
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param unsigned; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0074_ns_compat306_unsigned', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat306(unsigned p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0074_ns_compat306_unsigned parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0074_ns_compat306_unsigned must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0074_ns_compat306_unsigned must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0074_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0074_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0074_ns_compat306_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0075_COMPAT306_BAD_TYPE_306
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0075_COMPAT306_BAD_TYPE_306
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_306; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0075_compat306_bad_type_306', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat306(bad_type_306 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0075_compat306_bad_type_306 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0075_compat306_bad_type_306 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0075_compat306_bad_type_306 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_306",
          "h2dts_compat_basic_0075_compat306_bad_type_306 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0075_compat306_bad_type_306 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0076_COMPAT306_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0076_COMPAT306_UNSIGNED
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type unsigned; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0076_compat306_unsigned', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat306(unsigned p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0076_compat306_unsigned parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0076_compat306_unsigned must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0076_compat306_unsigned must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0076_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0076_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0076_compat306_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0077_E306
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0077_E306
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E306; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0077_e306', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E306 { A, B }; void f(E306 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0077_e306 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0077_e306 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0077_e306 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0077_e306 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0078_COMPAT306_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0078_COMPAT306_UNSIGNED
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type unsigned; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0078_compat306_unsigned', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat306(unsigned p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0078_compat306_unsigned parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0078_compat306_unsigned must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0078_compat306_unsigned must parse param");
        assert.strictEqual(r[0].parameters[0].type, "unsigned",
          "h2dts_compat_basic_0078_compat306_unsigned param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0078_compat306_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0001_COMPAT629_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0001_COMPAT629_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0001_compat629_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat629(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0001_compat629_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0001_compat629_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0001_compat629_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0001_compat629_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0001_compat629_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0002_COMPAT629_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0002_COMPAT629_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0002_compat629_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat629(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0002_compat629_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0002_compat629_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0002_compat629_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0002_compat629_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0002_compat629_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0003_NS_COMPAT629_LONG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0003_NS_COMPAT629_LONG_DOUBLE
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param long double; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0003_ns_compat629_long_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat629(long double p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0003_ns_compat629_long_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0003_ns_compat629_long_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0003_ns_compat629_long_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0003_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0003_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0003_ns_compat629_long_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0004_COMPAT629_BAD_TYPE_629
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0004_COMPAT629_BAD_TYPE_629
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_629; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0004_compat629_bad_type_629', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat629(bad_type_629 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0004_compat629_bad_type_629 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0004_compat629_bad_type_629 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0004_compat629_bad_type_629 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_629",
          "h2dts_compat_basic_0004_compat629_bad_type_629 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0004_compat629_bad_type_629 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0005_COMPAT629_LONG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0005_COMPAT629_LONG_DOUBLE
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type long double; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0005_compat629_long_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat629(long double p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0005_compat629_long_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0005_compat629_long_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0005_compat629_long_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0005_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0005_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0005_compat629_long_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0006_E629
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0006_E629
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E629; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0006_e629', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E629 { A, B }; void f(E629 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0006_e629 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0006_e629 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0006_e629 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0006_e629 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0007_COMPAT629_LONG_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0007_COMPAT629_LONG_DOUBLE
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type long double; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0007_compat629_long_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat629(long double p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0007_compat629_long_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0007_compat629_long_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0007_compat629_long_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "long double",
          "h2dts_compat_basic_0007_compat629_long_double param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0007_compat629_long_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0008_COMPAT632_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0008_COMPAT632_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0008_compat632_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat632(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0008_compat632_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0008_compat632_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0008_compat632_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0008_compat632_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0008_compat632_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0009_COMPAT632_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0009_COMPAT632_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0009_compat632_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat632(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0009_compat632_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0009_compat632_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0009_compat632_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_basic_0009_compat632_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0009_compat632_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0010_COMPAT632_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0010_COMPAT632_BOOOL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0010_compat632_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat632(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0010_compat632_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0010_compat632_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0010_compat632_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_basic_0010_compat632_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0010_compat632_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0011_COMPAT632_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0011_COMPAT632_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0011_compat632_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat632(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0011_compat632_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0011_compat632_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0011_compat632_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0011_compat632_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0011_compat632_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0012_COMPAT632_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0012_COMPAT632_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0012_compat632_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat632(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0012_compat632_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0012_compat632_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0012_compat632_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0012_compat632_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0012_compat632_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0013_NS_COMPAT632_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0013_NS_COMPAT632_CHAR
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param char*; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0013_ns_compat632_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat632(char* p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0013_ns_compat632_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0013_ns_compat632_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0013_ns_compat632_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0013_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_basic_0013_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0013_ns_compat632_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0014_COMPAT632_BAD_TYPE_632
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0014_COMPAT632_BAD_TYPE_632
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_632; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0014_compat632_bad_type_632', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat632(bad_type_632 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0014_compat632_bad_type_632 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0014_compat632_bad_type_632 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0014_compat632_bad_type_632 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_632",
          "h2dts_compat_basic_0014_compat632_bad_type_632 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0014_compat632_bad_type_632 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0015_COMPAT632_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0015_COMPAT632_CHAR
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type char*; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0015_compat632_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat632(char* p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0015_compat632_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0015_compat632_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0015_compat632_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0015_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_basic_0015_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0015_compat632_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0016_E632
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0016_E632
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E632; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0016_e632', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E632 { A, B }; void f(E632 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0016_e632 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0016_e632 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0016_e632 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0016_e632 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0017_COMPAT632_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0017_COMPAT632_CHAR
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type char*; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0017_compat632_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat632(char* p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0017_compat632_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0017_compat632_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0017_compat632_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "char*", "h2dts_compat_basic_0017_compat632_char param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0017_compat632_char execution error: ${String(err)}`);
    }
  });
});
