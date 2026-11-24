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
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0015_compat198_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0015_compat198_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0015_compat198_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0015_compat198_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0015_compat198_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0015_compat198_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0016_NS_COMPAT198_STD_WEAK_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0016_NS_COMPAT198_STD_WEAK_PTR_INT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::weak_ptr<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0016_ns_compat198_std_weak_ptr_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat198(std::weak_ptr<int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0016_ns_compat198_std_weak_ptr_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0016_ns_compat198_std_weak_ptr_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0016_ns_compat198_std_weak_ptr_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0016_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0016_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0016_ns_compat198_std_weak_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0017_COMPAT198_BAD_TYPE_198
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0017_COMPAT198_BAD_TYPE_198
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_198; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0017_compat198_bad_type_198', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(bad_type_198 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0017_compat198_bad_type_198 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0017_compat198_bad_type_198 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0017_compat198_bad_type_198 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_198",
          "h2dts_compat_combo_0017_compat198_bad_type_198 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0017_compat198_bad_type_198 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0018_COMPAT198_STD_WEAK_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0018_COMPAT198_STD_WEAK_PTR_INT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::weak_ptr<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0018_compat198_std_weak_ptr_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(std::weak_ptr<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0018_compat198_std_weak_ptr_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0018_compat198_std_weak_ptr_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0018_compat198_std_weak_ptr_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0018_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0018_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0018_compat198_std_weak_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0019_E198
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0019_E198
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E198; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0019_e198', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E198 { A, B }; void f(E198 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0019_e198 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0019_e198 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0019_e198 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0019_e198 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0020_COMPAT198_STD_WEAK_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0020_COMPAT198_STD_WEAK_PTR_INT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:weak_ptr<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0020_compat198_std_weak_ptr_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(std:weak_ptr<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0020_compat198_std_weak_ptr_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0020_compat198_std_weak_ptr_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0020_compat198_std_weak_ptr_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<int>",
          "h2dts_compat_combo_0020_compat198_std_weak_ptr_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0020_compat198_std_weak_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0021_COMPAT199_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0021_COMPAT199_ITN
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0021_compat199_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0021_compat199_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0021_compat199_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0021_compat199_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0021_compat199_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0021_compat199_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0022_COMPAT199_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0022_COMPAT199_DOUBL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0022_compat199_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0022_compat199_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0022_compat199_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0022_compat199_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0022_compat199_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0022_compat199_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0023_COMPAT199_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0023_COMPAT199_BOOOL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0023_compat199_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0023_compat199_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0023_compat199_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0023_compat199_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0023_compat199_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0023_compat199_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0024_COMPAT199_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0024_COMPAT199_INTT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0024_compat199_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0024_compat199_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0024_compat199_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0024_compat199_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0024_compat199_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0024_compat199_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0025_COMPAT199_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0025_COMPAT199_FLOT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0025_compat199_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0025_compat199_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0025_compat199_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0025_compat199_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0025_compat199_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0025_compat199_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0026_NS_COMPAT199_STD_WEAK_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0026_NS_COMPAT199_STD_WEAK_PTR_SIZE_T
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::weak_ptr<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0026_ns_compat199_std_weak_ptr_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat199(std::weak_ptr<size_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0026_ns_compat199_std_weak_ptr_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0026_ns_compat199_std_weak_ptr_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0026_ns_compat199_std_weak_ptr_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0026_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0026_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0026_ns_compat199_std_weak_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0027_COMPAT199_BAD_TYPE_199
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0027_COMPAT199_BAD_TYPE_199
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_199; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0027_compat199_bad_type_199', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(bad_type_199 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0027_compat199_bad_type_199 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0027_compat199_bad_type_199 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0027_compat199_bad_type_199 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_199",
          "h2dts_compat_combo_0027_compat199_bad_type_199 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0027_compat199_bad_type_199 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0028_COMPAT199_STD_WEAK_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0028_COMPAT199_STD_WEAK_PTR_SIZE_T
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::weak_ptr<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0028_compat199_std_weak_ptr_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(std::weak_ptr<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0028_compat199_std_weak_ptr_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0028_compat199_std_weak_ptr_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0028_compat199_std_weak_ptr_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0028_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0028_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0028_compat199_std_weak_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0029_E199
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0029_E199
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E199; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0029_e199', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E199 { A, B }; void f(E199 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0029_e199 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0029_e199 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0029_e199 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0029_e199 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0030_COMPAT199_STD_WEAK_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0030_COMPAT199_STD_WEAK_PTR_SIZE_T
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:weak_ptr<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0030_compat199_std_weak_ptr_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat199(std:weak_ptr<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0030_compat199_std_weak_ptr_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0030_compat199_std_weak_ptr_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0030_compat199_std_weak_ptr_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<size_t>",
          "h2dts_compat_combo_0030_compat199_std_weak_ptr_size_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0030_compat199_std_weak_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0031_COMPAT200_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0031_COMPAT200_ITN
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0031_compat200_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat200(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0031_compat200_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0031_compat200_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0031_compat200_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0031_compat200_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0031_compat200_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0032_COMPAT200_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0032_COMPAT200_DOUBL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0032_compat200_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat200(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0032_compat200_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0032_compat200_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0032_compat200_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0032_compat200_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0032_compat200_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0033_COMPAT200_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0033_COMPAT200_BOOOL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0033_compat200_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat200(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0033_compat200_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0033_compat200_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0033_compat200_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0033_compat200_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0033_compat200_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0034_COMPAT200_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0034_COMPAT200_INTT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0034_compat200_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat200(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0034_compat200_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0034_compat200_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0034_compat200_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0034_compat200_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0034_compat200_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0035_COMPAT200_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0035_COMPAT200_FLOT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0035_compat200_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat200(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0035_compat200_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0035_compat200_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0035_compat200_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0035_compat200_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0035_compat200_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0036_NS_COMPAT200_STD_WEAK_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0036_NS_COMPAT200_STD_WEAK_PTR_DOUBLE
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::weak_ptr<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0036_ns_compat200_std_weak_ptr_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat200(std::weak_ptr<double> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0036_ns_compat200_std_weak_ptr_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0036_ns_compat200_std_weak_ptr_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0036_ns_compat200_std_weak_ptr_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0036_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0036_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0036_ns_compat200_std_weak_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0037_COMPAT200_BAD_TYPE_200
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0037_COMPAT200_BAD_TYPE_200
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_200; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0037_compat200_bad_type_200', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat200(bad_type_200 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0037_compat200_bad_type_200 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0037_compat200_bad_type_200 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0037_compat200_bad_type_200 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_200",
          "h2dts_compat_combo_0037_compat200_bad_type_200 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0037_compat200_bad_type_200 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0038_COMPAT200_STD_WEAK_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0038_COMPAT200_STD_WEAK_PTR_DOUBLE
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::weak_ptr<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0038_compat200_std_weak_ptr_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat200(std::weak_ptr<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0038_compat200_std_weak_ptr_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0038_compat200_std_weak_ptr_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0038_compat200_std_weak_ptr_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0038_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0038_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0038_compat200_std_weak_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0039_E200
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0039_E200
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E200; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0039_e200', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E200 { A, B }; void f(E200 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0039_e200 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0039_e200 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0039_e200 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0039_e200 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0040_COMPAT200_STD_WEAK_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0040_COMPAT200_STD_WEAK_PTR_DOUBLE
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:weak_ptr<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0040_compat200_std_weak_ptr_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat200(std:weak_ptr<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0040_compat200_std_weak_ptr_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0040_compat200_std_weak_ptr_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0040_compat200_std_weak_ptr_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<double>",
          "h2dts_compat_combo_0040_compat200_std_weak_ptr_double param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0040_compat200_std_weak_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0041_COMPAT201_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0041_COMPAT201_ITN
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0041_compat201_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat201(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0041_compat201_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0041_compat201_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0041_compat201_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0041_compat201_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0041_compat201_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0042_COMPAT201_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0042_COMPAT201_DOUBL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0042_compat201_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat201(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0042_compat201_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0042_compat201_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0042_compat201_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0042_compat201_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0042_compat201_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0043_COMPAT201_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0043_COMPAT201_BOOOL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0043_compat201_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat201(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0043_compat201_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0043_compat201_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0043_compat201_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0043_compat201_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0043_compat201_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0044_COMPAT201_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0044_COMPAT201_INTT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0044_compat201_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat201(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0044_compat201_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0044_compat201_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0044_compat201_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0044_compat201_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0044_compat201_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0045_COMPAT201_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0045_COMPAT201_FLOT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0045_compat201_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat201(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0045_compat201_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0045_compat201_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0045_compat201_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0045_compat201_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0045_compat201_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0046_NS_COMPAT201_STD_WEAK_PTR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0046_NS_COMPAT201_STD_WEAK_PTR_FLOAT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::weak_ptr<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0046_ns_compat201_std_weak_ptr_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat201(std::weak_ptr<float> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0046_ns_compat201_std_weak_ptr_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0046_ns_compat201_std_weak_ptr_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0046_ns_compat201_std_weak_ptr_float must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0046_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0046_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0046_ns_compat201_std_weak_ptr_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0047_COMPAT201_BAD_TYPE_201
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0047_COMPAT201_BAD_TYPE_201
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_201; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0047_compat201_bad_type_201', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat201(bad_type_201 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0047_compat201_bad_type_201 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0047_compat201_bad_type_201 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0047_compat201_bad_type_201 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_201",
          "h2dts_compat_combo_0047_compat201_bad_type_201 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0047_compat201_bad_type_201 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0048_COMPAT201_STD_WEAK_PTR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0048_COMPAT201_STD_WEAK_PTR_FLOAT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::weak_ptr<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0048_compat201_std_weak_ptr_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat201(std::weak_ptr<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0048_compat201_std_weak_ptr_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0048_compat201_std_weak_ptr_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0048_compat201_std_weak_ptr_float must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0048_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0048_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0048_compat201_std_weak_ptr_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0049_E201
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0049_E201
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E201; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0049_e201', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E201 { A, B }; void f(E201 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0049_e201 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0049_e201 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0049_e201 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0049_e201 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0050_COMPAT201_STD_WEAK_PTR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0050_COMPAT201_STD_WEAK_PTR_FLOAT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:weak_ptr<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0050_compat201_std_weak_ptr_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat201(std:weak_ptr<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0050_compat201_std_weak_ptr_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0050_compat201_std_weak_ptr_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0050_compat201_std_weak_ptr_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<float>",
          "h2dts_compat_combo_0050_compat201_std_weak_ptr_float param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0050_compat201_std_weak_ptr_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0051_COMPAT202_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0051_COMPAT202_ITN
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0051_compat202_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat202(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0051_compat202_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0051_compat202_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0051_compat202_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0051_compat202_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0051_compat202_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0052_COMPAT202_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0052_COMPAT202_DOUBL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0052_compat202_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat202(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0052_compat202_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0052_compat202_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0052_compat202_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0052_compat202_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0052_compat202_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0053_COMPAT202_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0053_COMPAT202_BOOOL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0053_compat202_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat202(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0053_compat202_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0053_compat202_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0053_compat202_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0053_compat202_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0053_compat202_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0054_COMPAT202_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0054_COMPAT202_INTT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0054_compat202_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat202(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0054_compat202_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0054_compat202_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0054_compat202_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0054_compat202_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0054_compat202_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0055_COMPAT202_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0055_COMPAT202_FLOT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0055_compat202_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat202(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0055_compat202_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0055_compat202_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0055_compat202_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0055_compat202_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0055_compat202_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0056_NS_COMPAT202_STD_WEAK_PTR_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0056_NS_COMPAT202_STD_WEAK_PTR_LONG
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::weak_ptr<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0056_ns_compat202_std_weak_ptr_long', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat202(std::weak_ptr<long> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0056_ns_compat202_std_weak_ptr_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0056_ns_compat202_std_weak_ptr_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0056_ns_compat202_std_weak_ptr_long must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0056_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0056_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0056_ns_compat202_std_weak_ptr_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0057_COMPAT202_BAD_TYPE_202
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0057_COMPAT202_BAD_TYPE_202
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_202; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0057_compat202_bad_type_202', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat202(bad_type_202 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0057_compat202_bad_type_202 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0057_compat202_bad_type_202 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0057_compat202_bad_type_202 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_202",
          "h2dts_compat_combo_0057_compat202_bad_type_202 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0057_compat202_bad_type_202 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0058_COMPAT202_STD_WEAK_PTR_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0058_COMPAT202_STD_WEAK_PTR_LONG
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::weak_ptr<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0058_compat202_std_weak_ptr_long', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat202(std::weak_ptr<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0058_compat202_std_weak_ptr_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0058_compat202_std_weak_ptr_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0058_compat202_std_weak_ptr_long must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0058_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0058_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0058_compat202_std_weak_ptr_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0059_E202
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0059_E202
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E202; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0059_e202', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E202 { A, B }; void f(E202 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0059_e202 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0059_e202 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0059_e202 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0059_e202 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0060_COMPAT202_STD_WEAK_PTR_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0060_COMPAT202_STD_WEAK_PTR_LONG
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:weak_ptr<long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0060_compat202_std_weak_ptr_long', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat202(std:weak_ptr<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0060_compat202_std_weak_ptr_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0060_compat202_std_weak_ptr_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0060_compat202_std_weak_ptr_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<long>",
          "h2dts_compat_combo_0060_compat202_std_weak_ptr_long param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0060_compat202_std_weak_ptr_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0061_COMPAT203_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0061_COMPAT203_ITN
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0061_compat203_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat203(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0061_compat203_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0061_compat203_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0061_compat203_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0061_compat203_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0061_compat203_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0062_COMPAT203_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0062_COMPAT203_DOUBL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0062_compat203_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat203(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0062_compat203_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0062_compat203_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0062_compat203_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0062_compat203_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0062_compat203_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0063_COMPAT203_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0063_COMPAT203_BOOOL
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0063_compat203_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat203(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0063_compat203_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0063_compat203_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0063_compat203_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0063_compat203_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0063_compat203_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0064_COMPAT203_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0064_COMPAT203_INTT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0064_compat203_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat203(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0064_compat203_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0064_compat203_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0064_compat203_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0064_compat203_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0064_compat203_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0065_COMPAT203_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0065_COMPAT203_FLOT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0065_compat203_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat203(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0065_compat203_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0065_compat203_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0065_compat203_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0065_compat203_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0065_compat203_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0066_NS_COMPAT203_STD_WEAK_PTR_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0066_NS_COMPAT203_STD_WEAK_PTR_SHORT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::weak_ptr<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0066_ns_compat203_std_weak_ptr_short', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat203(std::weak_ptr<short> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0066_ns_compat203_std_weak_ptr_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0066_ns_compat203_std_weak_ptr_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0066_ns_compat203_std_weak_ptr_short must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0066_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0066_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0066_ns_compat203_std_weak_ptr_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0067_COMPAT203_BAD_TYPE_203
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0067_COMPAT203_BAD_TYPE_203
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_203; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0067_compat203_bad_type_203', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat203(bad_type_203 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0067_compat203_bad_type_203 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0067_compat203_bad_type_203 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0067_compat203_bad_type_203 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_203",
          "h2dts_compat_combo_0067_compat203_bad_type_203 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0067_compat203_bad_type_203 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0068_COMPAT203_STD_WEAK_PTR_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0068_COMPAT203_STD_WEAK_PTR_SHORT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::weak_ptr<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0068_compat203_std_weak_ptr_short', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat203(std::weak_ptr<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0068_compat203_std_weak_ptr_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0068_compat203_std_weak_ptr_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0068_compat203_std_weak_ptr_short must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0068_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0068_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0068_compat203_std_weak_ptr_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0069_E203
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0069_E203
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E203; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0069_e203', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E203 { A, B }; void f(E203 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0069_e203 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0069_e203 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0069_e203 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0069_e203 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0070_COMPAT203_STD_WEAK_PTR_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0070_COMPAT203_STD_WEAK_PTR_SHORT
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:weak_ptr<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0070_compat203_std_weak_ptr_short', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat203(std:weak_ptr<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0070_compat203_std_weak_ptr_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0070_compat203_std_weak_ptr_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0070_compat203_std_weak_ptr_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<short>",
          "h2dts_compat_combo_0070_compat203_std_weak_ptr_short param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0070_compat203_std_weak_ptr_short execution error: ${String(err)}`);
    }
  });
});
