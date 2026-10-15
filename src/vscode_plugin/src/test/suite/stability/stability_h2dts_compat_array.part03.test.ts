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

suite('Stability_H2DTS_COMPAT_ARRAY_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0064_COMPAT37_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0064_COMPAT37_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0064_compat37_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0064_compat37_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0064_compat37_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0064_compat37_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0064_compat37_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0064_compat37_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0065_NS_COMPAT37_STD_VECTOR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0065_NS_COMPAT37_STD_VECTOR_CHAR
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::vector<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0065_ns_compat37_std_vector_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat37(std::vector<char> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0065_ns_compat37_std_vector_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0065_ns_compat37_std_vector_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0065_ns_compat37_std_vector_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0065_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0065_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0065_ns_compat37_std_vector_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0066_COMPAT37_BAD_TYPE_37
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0066_COMPAT37_BAD_TYPE_37
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_37; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0066_compat37_bad_type_37', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(bad_type_37 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0066_compat37_bad_type_37 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0066_compat37_bad_type_37 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0066_compat37_bad_type_37 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_37",
          "h2dts_compat_array_0066_compat37_bad_type_37 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0066_compat37_bad_type_37 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0067_COMPAT37_STD_VECTOR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0067_COMPAT37_STD_VECTOR_CHAR
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0067_compat37_std_vector_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(std::vector<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0067_compat37_std_vector_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0067_compat37_std_vector_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0067_compat37_std_vector_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0067_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0067_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0067_compat37_std_vector_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0068_E37
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0068_E37
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E37; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0068_e37', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E37 { A, B }; void f(E37 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0068_e37 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0068_e37 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0068_e37 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0068_e37 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0069_COMPAT37_STD_VECTOR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0069_COMPAT37_STD_VECTOR_CHAR
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0069_compat37_std_vector_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat37(std:vector<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0069_compat37_std_vector_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0069_compat37_std_vector_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0069_compat37_std_vector_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<char>",
          "h2dts_compat_array_0069_compat37_std_vector_char param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0069_compat37_std_vector_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0070_COMPAT38_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0070_COMPAT38_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0070_compat38_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat38(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0070_compat38_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0070_compat38_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
