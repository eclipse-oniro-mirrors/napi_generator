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

suite('Stability_H2DTS_COMPAT_BASIC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_BASIC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0072_COMPAT8_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0072_COMPAT8_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0072_compat8_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat8(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0072_compat8_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0072_compat8_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0072_compat8_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_basic_0072_compat8_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0072_compat8_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0073_COMPAT8_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0073_COMPAT8_BOOOL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0073_compat8_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat8(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0073_compat8_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0073_compat8_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0073_compat8_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_basic_0073_compat8_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0073_compat8_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0074_COMPAT8_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0074_COMPAT8_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0074_compat8_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat8(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0074_compat8_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0074_compat8_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0074_compat8_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0074_compat8_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0074_compat8_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0075_COMPAT8_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0075_COMPAT8_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0075_compat8_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat8(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0075_compat8_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0075_compat8_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0075_compat8_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0075_compat8_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0075_compat8_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0076_NS_COMPAT8_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0076_NS_COMPAT8_UINT16_T
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param uint16_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0076_ns_compat8_uint16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat8(uint16_t p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0076_ns_compat8_uint16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0076_ns_compat8_uint16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0076_ns_compat8_uint16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0076_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0076_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0076_ns_compat8_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0077_COMPAT8_BAD_TYPE_8
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0077_COMPAT8_BAD_TYPE_8
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_8; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0077_compat8_bad_type_8', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat8(bad_type_8 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0077_compat8_bad_type_8 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0077_compat8_bad_type_8 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0077_compat8_bad_type_8 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_8",
          "h2dts_compat_basic_0077_compat8_bad_type_8 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0077_compat8_bad_type_8 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0078_COMPAT8_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0078_COMPAT8_UINT16_T
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
