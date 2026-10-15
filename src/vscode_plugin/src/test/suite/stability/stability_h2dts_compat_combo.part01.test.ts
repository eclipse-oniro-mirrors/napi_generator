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

suite('Stability_H2DTS_COMPAT_COMBO_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0001_COMPAT17_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0001_COMPAT17_ITN
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0001_compat17_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0001_compat17_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0001_compat17_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0001_compat17_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0001_compat17_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0001_compat17_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0002_COMPAT17_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0002_COMPAT17_DOUBL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0002_compat17_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0002_compat17_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0002_compat17_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0002_compat17_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0002_compat17_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0002_compat17_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0003_COMPAT17_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0003_COMPAT17_BOOOL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0003_compat17_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0003_compat17_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0003_compat17_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0003_compat17_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0003_compat17_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0003_compat17_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0004_COMPAT17_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0004_COMPAT17_INTT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0004_compat17_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0004_compat17_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0004_compat17_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0004_compat17_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0004_compat17_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0004_compat17_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0005_COMPAT17_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0005_COMPAT17_FLOT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0005_compat17_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0005_compat17_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0005_compat17_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0005_compat17_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0005_compat17_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0005_compat17_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0006_NS_COMPAT17_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0006_NS_COMPAT17_WCHAR_T
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param wchar_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0006_ns_compat17_wchar_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat17(wchar_t p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0006_ns_compat17_wchar_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0006_ns_compat17_wchar_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0006_ns_compat17_wchar_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0006_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0006_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0006_ns_compat17_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0007_COMPAT17_BAD_TYPE_17
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0007_COMPAT17_BAD_TYPE_17
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_17; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0007_compat17_bad_type_17', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(bad_type_17 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0007_compat17_bad_type_17 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0007_compat17_bad_type_17 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0007_compat17_bad_type_17 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_17",
          "h2dts_compat_combo_0007_compat17_bad_type_17 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0007_compat17_bad_type_17 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0008_COMPAT17_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0008_COMPAT17_WCHAR_T
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type wchar_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0008_compat17_wchar_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(wchar_t p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0008_compat17_wchar_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0008_compat17_wchar_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0008_compat17_wchar_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0008_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0008_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0008_compat17_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0009_E17
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0009_E17
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E17; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0009_e17', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E17 { A, B }; void f(E17 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0009_e17 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0009_e17 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0009_e17 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0009_e17 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0010_COMPAT17_WCHAR_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0010_COMPAT17_WCHAR_T
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type wchar_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0010_compat17_wchar_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat17(wchar_t p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0010_compat17_wchar_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0010_compat17_wchar_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0010_compat17_wchar_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "wchar_t", "h2dts_compat_combo_0010_compat17_wchar_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0010_compat17_wchar_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0011_COMPAT198_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0011_COMPAT198_ITN
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0011_compat198_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0011_compat198_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0011_compat198_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0011_compat198_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0011_compat198_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0011_compat198_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0012_COMPAT198_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0012_COMPAT198_DOUBL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0012_compat198_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0012_compat198_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0012_compat198_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0012_compat198_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0012_compat198_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0012_compat198_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0013_COMPAT198_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0013_COMPAT198_BOOOL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0013_compat198_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0013_compat198_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0013_compat198_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0013_compat198_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0013_compat198_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0013_compat198_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0014_COMPAT198_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0014_COMPAT198_INTT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0014_compat198_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0014_compat198_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0014_compat198_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0014_compat198_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0014_compat198_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0014_compat198_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0015_COMPAT198_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0015_COMPAT198_FLOT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
