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

suite('Stability_H2DTS_COMPAT_BASIC_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_BASIC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0065_NS_COMPAT18_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0065_NS_COMPAT18_CHAR8_T
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param char8_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0065_ns_compat18_char8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat18(char8_t p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0065_ns_compat18_char8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0065_ns_compat18_char8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0065_ns_compat18_char8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0065_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_basic_0065_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0065_ns_compat18_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0066_COMPAT18_BAD_TYPE_18
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0066_COMPAT18_BAD_TYPE_18
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_18; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0066_compat18_bad_type_18', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat18(bad_type_18 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0066_compat18_bad_type_18 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0066_compat18_bad_type_18 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0066_compat18_bad_type_18 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_18",
          "h2dts_compat_basic_0066_compat18_bad_type_18 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0066_compat18_bad_type_18 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0067_COMPAT18_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0067_COMPAT18_CHAR8_T
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type char8_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0067_compat18_char8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat18(char8_t p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0067_compat18_char8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0067_compat18_char8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0067_compat18_char8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0067_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_basic_0067_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0067_compat18_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0068_E18
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0068_E18
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E18; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0068_e18', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E18 { A, B }; void f(E18 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0068_e18 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0068_e18 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0068_e18 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0068_e18 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0069_COMPAT18_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0069_COMPAT18_CHAR8_T
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type char8_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0069_compat18_char8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat18(char8_t p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0069_compat18_char8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0069_compat18_char8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0069_compat18_char8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "char8_t", "h2dts_compat_basic_0069_compat18_char8_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0069_compat18_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0070_COMPAT19_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0070_COMPAT19_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0070_compat19_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat19(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0070_compat19_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0070_compat19_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0070_compat19_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0070_compat19_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0070_compat19_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0071_COMPAT19_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0071_COMPAT19_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
