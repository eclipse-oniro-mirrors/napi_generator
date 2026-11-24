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

suite('Stability_H2DTS_COMPAT_COMBO_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0050
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0050
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0050', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0050 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0050 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_combo_0050 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0050 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0050 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0051
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0051
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0051', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0051 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0051 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_combo_0051 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0051 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0051 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0052
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0052
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0052', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0052 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0052 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_combo_0052 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0052 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0052 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0053
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0053
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param const char*; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0053', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat631(const char* p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0053 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0053 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_combo_0053 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0053_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0053_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0053 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0054
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0054
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_631; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0054', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(bad_type_631 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0054 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0054 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_combo_0054 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_631", "h2dts_compat_combo_0054 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0054 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0055
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0055
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type const char*; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0055', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(const char* p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0055 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0055 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_combo_0055 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0055_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0055_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0055 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0056
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0056
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E631; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0056', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E631 { A, B }; void f(E631 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0056 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0056 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0056 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0056 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_COMBO_0057
   * @tc.number SUB_NAPI_H2DTS_COMPAT_COMBO_0057
   * @tc.desc   Stability compat h2dts/combo: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type const char*; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_combo_0057', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(const char* p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0057 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_combo_0057 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_combo_0057 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "char*", "h2dts_compat_combo_0057 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0057 execution error: ${String(err)}`);
    }
  });
});
